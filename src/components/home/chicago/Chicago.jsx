import "./chicago.css";

import persons1 from "../../../assets/persons.jpg";
import persons2 from "../../../assets/persons2.jpg";

const Chicago = () => {
  return (
    <section className="chicago">
      <div className="chicago-container container">
        <div className="chicago-info">
          <h2 className="chicago-title">Little Lemon</h2>
          <h3 className="chicago-subtitle">Chicago</h3>
          <div className="chicago-text">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
              maxime eum delectus dicta at obcaecati ducimus cum, quos
              perferendis nobis molestiae provident consequuntur aspernatur
              porro maiores, qui ea quasi saepe suscipit. Blanditiis repellendus
              maiores ipsa autem quia adipisci vero? Ea deserunt corporis
              ratione libero omnis molestias, ipsum impedit? Voluptas nemo nihil
              sunt asperiores ipsum quidem illo adipisci facere cum aliquid
              architecto error suscipit nisi perspiciatis dolores, a placeat
              molestiae tempore.
            </p>
          </div>
        </div>
        <div className="chicago-images">
          <img
            src={persons1}
            alt="Little Lemon"
            className="chicago-image__img chicago-image__img--1"
          />
          <img
            src={persons2}
            alt="Little Lemon"
            className="chicago-image__img chicago-image__img--2"
          />
        </div>
      </div>
    </section>
  );
};

export default Chicago;
