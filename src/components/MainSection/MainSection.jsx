import React from 'react';
import {Search} from "../Search/Search.jsx";
import './MainSection.css';
import './MainSectionCard.css';
import {restaurants} from "./restaurants-info.js";
import {RestaurantCard} from "../RestaurantCard/RestaurantCard.jsx";


export function MainSection() {
  return (
    <div className="cards">
      <div className="cards_wrapper">
        <Search/>

        <span className="cards__title">Kyiv Restaurants</span>

        <ul className="cards-list">
          {restaurants.map((restaurant, i) => {
              return (
                    <RestaurantCard key={i}
                                    title={restaurant.title}
                                    categories={restaurant.categories}
                                    priceBucket={restaurant.priceBucket}
                                    etaRange={restaurant.etaRange}
                                    imageUrl={restaurant.imageUrl}
                    />
              )
            }
          )}
        </ul>

      </div>
    </div>
  )
    ;
}