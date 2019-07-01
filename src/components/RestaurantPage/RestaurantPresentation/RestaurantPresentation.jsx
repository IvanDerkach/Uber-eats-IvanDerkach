import React from "react";
import "./RestaurantPresentation.css";

export function RestaurantPresentation() {
  return (
    <div className="restaurantPresentation-card__background">
      <div className="restaurantPresentation-card__wrapper">
        <div className="restaurantPresentation-card">
          <span className="restaurantPresentation-card__title">
            Трактир «Пушкин»
          </span>
          <div className="restaurantPresentation-card__footer">
            <span className="restaurantPresentation-card__price">
              ₴₴₴ • Европейская
            </span>
            <span className="restaurantPresentation-card__time">
              40 - 50 Min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
