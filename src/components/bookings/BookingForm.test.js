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

  test("submits form correctly", () => {
    render(
      <BookingForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmit}
      />
    );

    const submitButton = screen.getByRole("button");

    fireEvent.click(submitButton);

    expect(mockSubmit).toHaveBeenCalled();
  });

})