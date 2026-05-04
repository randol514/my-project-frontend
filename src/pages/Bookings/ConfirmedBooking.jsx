import { AiFillCheckCircle } from "react-icons/ai";

const ConfirmedBooking = () => {
  return (
    <>
      <section className="bookings-confirmed">
        <div className="bookings-confirmed__container container">
          <div className="bookings-confirmed__icon">
            <AiFillCheckCircle />
          </div>
          <h1 className="bookings-confirmed__title">
            Your reservation has been confirmed
          </h1>
          <div className="bookings-confirmed__text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConfirmedBooking;
