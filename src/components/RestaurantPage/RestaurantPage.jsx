import React from ""react";
import "./RestaurantPresentation/RestaurantPresentation.css";
import "./RestaurantMenu/RestaurantMenu.css";
import "./RestaurantPage.css";
import "./ProductCard/ProductCard.css";
import { restaurant } from "./restaurantMenuInfo.js";
import { ProductCard } from "./ProductCard/ProductCard.jsx";
import { RestaurantMenu } from "./RestaurantMenu/RestaurantMenu.jsx";
import { RestaurantPresentation } from "./RestaurantPresentation/RestaurantPresentation.jsx";

export function RestaurantPage() {
  return (
    <>
      <RestaurantPresentation />
      <RestaurantMenu />

      <div className="restaurant-page__wrapper">
        <div className="restaurant-page">
          <span className="restaurant-page__title">Закуски</span>
          <ul className="restaurant-page__list">
            {restaurant.sections.map((restaurantItem, i) => {
              return <ProductCard key={i} restaurantItem={restaurantItem} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
