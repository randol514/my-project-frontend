import "./notFound.css";

import { AiFillCloseCircle } from "react-icons/ai";

const BookingsConfirmed = () => {
  return (
    <>
      <section className="notfound">
        <div className="notfound-container container">
          <div className="notfound-icon">
            <AiFillCloseCircle />
          </div>
          <h1 className="notfound-title">Not Found</h1>
          <div className="notfound-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingsConfirmed;
