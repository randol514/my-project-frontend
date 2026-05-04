import { useState } from "react";
import Button from "../ui/Button/Button";
import FormField from "../ui/FormField/FormField";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const occasions = ["Birthday", "Anniversary"];
  const defaultTime = availableTimes[0];
  const defaultOccasions = occasions[0];
  const minimumNumberOfGuests = 1;

  const [date, setDate] = useState("");
  const [time, setTime] = useState(defaultTime);
  const [guests, setGuests] = useState(minimumNumberOfGuests);
  const [occasion, setOccasion] = useState(defaultOccasions);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    setTime("");
    dispatch({
      type: "UPDATE_TIMES",
      date: selectedDate,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    submitForm(formData);
  };

  return (
    <form className="bookings-form" onSubmit={handleSubmit}>
      <div className="bookings-form__fields">
        <FormField label="Choose date" htmlFor="res-date">
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={handleDateChange}
          />
        </FormField>
        <FormField label="Choose time" htmlFor="res-time">
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            {availableTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </FormField>
        <FormField label="Number of guests" htmlFor="res-guests">
          <input
            type="number"
            id="res-guests"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </FormField>
        <FormField label="Occasion" htmlFor="res-occasion">
          <select
            id="res-occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            {occasions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </FormField>
      </div>
      <div className="bookings-form__button">
        <Button variant="secondary" type="submit">
          Make Your Reservation
        </Button>
      </div>
    </form>
  );
};

export default BookingForm;
