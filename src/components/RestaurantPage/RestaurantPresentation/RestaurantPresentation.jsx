import React from "react";
import "./RestaurantPresentation.css";
import { restaurant } from "../restaurantMenuInfo.js";

export function RestaurantPresentation() {
  return (
    <div className="restaurantPresentation__card">
      <img
        className="restaurantPresentation__background"
        src={restaurant.largeImageUrl}
        alt="restaurant food"
      />
      <div className="restaurantPresentation">
        <span className="restaurantPresentation__title">
          {restaurant.title}
        </span>
        <div className="restaurantPresentation__footer">
          <span className="restaurantPresentation__price">
            {restaurant.priceBucket} •{" "}
            {restaurant.categories.map(category => {
              return category.name;
            })}
          </span>
          <span className="restaurantPresentation__time">
            {restaurant.etaRange.min} - {restaurant.etaRange.max} min
          </span>
        </div>
      </div>
    </div>
  );
}
