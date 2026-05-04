import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingForm from "./BookingForm";

const mockTimes = ["17:00", "18:00"];
const mockDispatch = jest.fn();
const mockSubmit = jest.fn();

describe("BookingForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Render
  test("renders form fields correctly", () => {
    render(
      <MemoryRouter>
        <BookingForm
          availableTimes={mockTimes}
          dispatch={mockDispatch}
          submitForm={mockSubmit}
        />
      </MemoryRouter>
    );

    expect(screen.getByLabelText("Choose date")).toBeInTheDocument();
    expect(screen.getByLabelText("Choose time")).toBeInTheDocument();
    expect(screen.getByLabelText("Number of guests")).toBeInTheDocument();
    expect(screen.getByLabelText("Occasion")).toBeInTheDocument();
    expect(
      screen.getByText("Make Your Reservation")
    ).toBeInTheDocument();
  });

  // validation
  test("applies HTML5 validation attributes correctly", () => {
    render(
      <BookingForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmit}
      />
    );

    const dateInput = screen.getByLabelText("Choose date");
    const timeSelect = screen.getByLabelText("Choose time");
    const guestsInput = screen.getByLabelText("Number of guests");

    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("required");

    expect(timeSelect).toHaveAttribute("required");

    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toHaveAttribute("required");
  });

  // Update date
  test("updates date and dispatches action", () => {
    render(
      <BookingForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmit}
      />
    );

    const dateInput = screen.getByLabelText("Choose date");

    fireEvent.change(dateInput, {
      target: { value: "2026-05-01" },
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "UPDATE_TIMES",
      date: "2026-05-01",
    });
  });

  // Form invalid
  test("disables submit button when guests are invalid", () => {
  render(
    <BookingForm
      availableTimes={mockTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmit}
    />
  );

  const guestsInput = screen.getByLabelText("Number of guests");

  fireEvent.change(guestsInput, {
    target: { value: "0" },
  });

  const submitButton = screen.getByRole("button");

  expect(submitButton).toBeDisabled();
});

  // Form valid
  test("enables submit button when form is valid", () => {
    render(
      <BookingForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmit}
      />
    );

    const dateInput = screen.getByLabelText("Choose date");
    const timeSelect = screen.getByLabelText("Choose time");
    const guestsInput = screen.getByLabelText("Number of guests");

    fireEvent.change(dateInput, {
      target: { value: "2026-05-01" },
    });

    fireEvent.change(timeSelect, {
      target: { value: "17:00" },
    });

    fireEvent.change(guestsInput, {
      target: { value: "2" },
    });

    const submitButton = screen.getByRole("button");

    expect(submitButton).toBeEnabled();
  });

  // Show error
  test("shows error when guests are invalid", () => {
    render(
      <BookingForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmit}
      />
    );

    const guestsInput = screen.getByLabelText("Number of guests");

    fireEvent.change(guestsInput, {
      target: { value: "0" },
    });

    expect(
      screen.getByText("Guests must be between 1 and 10")
    ).toBeInTheDocument();
  });

  // Submit pass
  test("submits form correctly when valid", () => {
    render(
      <BookingForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmit}
      />
    );

    const dateInput = screen.getByLabelText("Choose date");
    const timeSelect = screen.getByLabelText("Choose time");
    const guestsInput = screen.getByLabelText("Number of guests");

    fireEvent.change(dateInput, {
      target: { value: "2026-05-01" },
    });

    fireEvent.change(timeSelect, {
      target: { value: "17:00" },
    });

    fireEvent.change(guestsInput, {
      target: { value: "2" },
    });

    const submitButton = screen.getByRole("button");

    fireEvent.click(submitButton);

    expect(mockSubmit).toHaveBeenCalledWith({
      date: "2026-05-01",
      time: "17:00",
      guests: "2",
      occasion: "Birthday",
    });
  });
});