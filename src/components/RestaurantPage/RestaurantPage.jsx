import React from "react";
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

      <div className="restaurant-page">
        <div className="restaurant-page__wrapper">
          <ul className="restaurant-page__list">
            {restaurant.sections.map((section, i) => {
              return (
                <div className="restaurant-page__type">
                  <span
                    className="restaurant-page__title"
                    id={`${section.title}`}
                  >
                    {section.title}
                  </span>
                  <div key={i}>
                    <div className="restaurant-page__type-unit">
                      {section.itemUuids.map((item, i) => {
                        return <ProductCard key={i} id={item} />;
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
