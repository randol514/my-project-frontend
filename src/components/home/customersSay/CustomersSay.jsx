import "./customersSay.css";
import List from "./List";

const CustomersSay = () => {
  return (
    <section className="customers">
      <div className="customers-container container">
        <h2 className="customers-title">Testimonials</h2>
        <List />
      </div>
    </section>
  );
};

export default CustomersSay;
