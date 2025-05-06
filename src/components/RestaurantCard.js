import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restObj } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = restObj?.info;

  return (
    <div className="restaurant-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant"
        className="restaurant-image"
      />
      <h3 className="restaurant-name">{name}</h3>
      <p className="restaurant-cuisine">{cuisines.join(", ")}</p>
      <p className="restaurant-rating">{avgRating}</p>
      <p className="restaurant-est-time">{sla.slaString}</p>
    </div>
  );
};

export default RestaurantCard;
