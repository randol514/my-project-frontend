import { useState } from "react";
import Button from "../ui/Button/Button";
import FormField from "../ui/FormField/FormField";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const occasions = ["Birthday", "Anniversary"];
  const defaultTime = availableTimes[0];
  const defaultOccasions = occasions[0];
  const minimumNumberOfGuests = 1;
  const today = new Date().toISOString().split("T")[0];

  const [date, setDate] = useState(today);
  const [time, setTime] = useState(defaultTime);
  const [guests, setGuests] = useState(minimumNumberOfGuests);
  const [occasion, setOccasion] = useState(defaultOccasions);

  const [touched, setTouched] = useState({});

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

  const errors = {
    date: !date ? "Please select a date" : "",
    time: !time ? "Please select a time" : "",
    guests: guests < 1 || guests > 10 ? "Guests must be between 1 and 10" : "",
  };

  const isFormValid = !errors.date && !errors.time && !errors.guests;

  return (
    <form className="bookings-form" onSubmit={handleSubmit}>
      <div className="bookings-form__fields">
        <FormField label="Choose date" htmlFor="res-date" error={errors.date}>
          <input
            type="date"
            id="res-date"
            min={today}
            value={date}
            onChange={handleDateChange}
            onBlur={() => setTouched({ ...touched, date: true })}
            required
          />
        </FormField>
        <FormField label="Choose time" htmlFor="res-time" error={errors.time}>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            onBlur={() => setTouched({ ...touched, time: true })}
            required
          >
            {availableTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </FormField>
        <FormField
          label="Number of guests"
          htmlFor="res-guests"
          error={errors.guests}
        >
          <input
            type="number"
            id="res-guests"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            onBlur={() => setTouched({ ...touched, guests: true })}
            required
          />
        </FormField>
        <FormField
          label="Occasion"
          htmlFor="res-occasion"
          error={errors.occasion}
        >
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
        <Button variant="secondary" type="submit" disabled={!isFormValid}>
          Make Your Reservation
        </Button>
      </div>
    </form>
  );
};

export default BookingForm;
