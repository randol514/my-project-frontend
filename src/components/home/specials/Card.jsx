import { Link } from "react-router-dom";
import { FaMotorcycle } from "react-icons/fa";

const Card = ({ specials }) => {
  const { image, name, price, description } = specials;
  return (
    <article className="specials-card">
      <div className="specials-card__image">
        <img src={image} alt={name} className="specials-card__image-img" />
      </div>
      <div className="specials-card__header">
        <div className="specials-card__name">{name}</div>
        <div className="specials-card__price">{price}</div>
      </div>
      <div className="specials-card__body">
        <div className="specials-card__description">{description}</div>
        <Link className="specials-card__order" to="/order-online">
          Order a delivery
          <FaMotorcycle />
        </Link>
      </div>
    </article>
  );
};

export default Card;
