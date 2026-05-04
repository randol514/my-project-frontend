import BookingForm from "../../components/bookings/BookingForm";
import "./bookings.css";

import { fetchAPI, submitAPI } from "../../api/api";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(new Date(action.date));
    default:
      return state;
  }
};

const initializeTimes = () => {
  return fetchAPI(new Date());
};

const Bookings = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate("/bookings-confirmed");
    }
  };

  return (
    <>
      <section className="bookings">
        <div className="bookings-container container">
          <h1 className="bookings-title">Reserve a Table</h1>
          <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />
        </div>
      </section>
    </>
  );
};

export default Bookings;
