import { FaStar } from "react-icons/fa";

const Card = ({ customer }) => {
  const { name, image, rating, review } = customer;
  return (
    <article className="customer-card">
      <div className="customer-card__rating">
        {rating.map((star, index) => (
          <FaStar
            key={`star-${index}`}
            color={star <= 5 ? "#f4ce14" : "#e4e5e9"}
          />
        ))}
      </div>
      <div className="customer-card__details">
        <img src={image} alt="" className="customer-card__image" />
        <h3 className="customer-card__name">{name}</h3>
      </div>
      <div className="customer-card__review">
        <p>{review}</p>
      </div>
    </article>
  );
};

export default Card;
