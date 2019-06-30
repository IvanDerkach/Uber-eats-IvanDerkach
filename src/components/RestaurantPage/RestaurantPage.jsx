import React from 'react';
import './RestaurantPresentation/RestaurantPresentation.css';
import './RestaurantMenu/RestaurantMenu.css';
import './RestaurantPage.css';
import './ProductCard/ProductCard.css';
import {restaurantMenus} from './restaurantMenuInfo';
import {ProductCard} from "./ProductCard/ProductCard.jsx";
import {RestaurantMenu} from "./RestaurantMenu/RestaurantMenu.jsx";
import {RestaurantPresentation} from "./RestaurantPresentation/RestaurantPresentation.jsx";

export function RestaurantPage() {
  return (
    <>
      <RestaurantPresentation/>
      <RestaurantMenu/>

      <div className="restaurantPage__wrapper">
        <div className="restaurantPage">
          <span className="restaurantPage__title">Закуски</span>
          <ul className="restaurantPage__list">
            {restaurantMenus.map((restaurantMenu, i) => {
              return (
                      <ProductCard key={i}
                                   title={restaurantMenu.title}
                                   categories={restaurantMenu.categories}
                                   priceBucket={restaurantMenu.priceBucket}
                                   etaRange={restaurantMenu.etaRange}
                                   imageUrl={restaurantMenu.imageUrl}
                      />
              )
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
