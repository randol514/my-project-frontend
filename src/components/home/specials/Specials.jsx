import "./specials.css";

import Button from "../../ui/Button/Button";
import List from "./List";

const Specials = () => {
  return (
    <section className="specials">
      <div className="specials-container container">
        <div className="specials-top">
          <h2 className="specials-title">This week specials!</h2>
          <Button cls="specials-button" variant="secondary" to="order-online">
            Online Menu
          </Button>
        </div>
        <div className="specials-bottom">
          <List />
        </div>
      </div>
    </section>
  );
};

export default Specials;
