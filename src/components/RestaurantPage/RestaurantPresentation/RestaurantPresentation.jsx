import React from "react";
import "./RestaurantPresentation.css";
import { restaurant } from "../restaurantMenuInfo.js";

export function RestaurantPresentation() {
  return (
    <div className="restaurantPresentation">
      <img
        className="restaurantPresentation__background"
        src={restaurant.largeImageUrl}
        alt="restaurant food"
      />
      <div className="restaurantPresentation__card">
        <span className="restaurantPresentation__card-title">
          {restaurant.title}
        </span>
        <div className="restaurantPresentation__card-footer">
          <span className="restaurantPresentation__card-price">
            {restaurant.priceBucket} •{" "}
            {restaurant.categories.map(category => {
              return category.name;
            })}
          </span>
          <span className="restaurantPresentation__card-time">
            {restaurant.etaRange.min} - {restaurant.etaRange.max} min
          </span>
        </div>
      </div>
    </div>
  );
}
