import React from "react";
import "./RestaurantPresentation.css";
import { restaurant } from "../restaurantMenuInfo.js";

export function RestaurantPresentation() {
  return (
    <div className="restaurantPresentation-card__wrapper">
      <img
        className="restaurantPresentation__background"
        src={restaurant.largeImageUrl}
        alt="restaurant food"
      />
      <div className="restaurantPresentation-card">
        <span className="restaurantPresentation-card__title">
          {restaurant.title}
        </span>
        <div className="restaurantPresentation-card__footer">
          <span className="restaurantPresentation-card__price">
            {restaurant.priceBucket} •{" "}
            {restaurant.categories.map(category => {
              return category.name;
            })}
          </span>
          <span className="restaurantPresentation-card__time">
            {restaurant.etaRange.min} - {restaurant.etaRange.max} min
          </span>
        </div>
      </div>
    </div>
  );
}
