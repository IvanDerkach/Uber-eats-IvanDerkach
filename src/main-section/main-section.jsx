import React from 'react';
import './main-section.css';
import './main-section_card.css';
import mcDonalds from './img/mcdonalds.png';
import {Link} from "react-router-dom";
import {RestaurantCard} from "../restaurant_card/restaurant_card.jsx";


export function MainSection() {
  const restaurants = [
    {
      name: 'Макдоналдс',
      category: '₴₴ • Бургеры',
      time: '25 - 35 Min'
    },
    {
      name: 'Макдоналдс',
      category: '₴₴ • Бургеры',
      time: '25 - 35 Min'
    },
    {
      name: 'Макдоналдс',
      category: '₴₴ • Бургеры',
      time: '25 - 35 Min'
    },
    {
      name: 'Макдоналдс',
      category: '₴₴ • Бургеры',
      time: '25 - 35 Min'
    }
  ];

  return (
    <div className="cards">
      <div className="cards_wrapper">
        <div className="search_wrapper">
          <label className="search__label">
            <input type="text" className="search" placeholder="Search for restaurant or cuisine"/>
          </label>
        </div>

        <span className="cards__title">Kyiv Restaurants</span>

        <ul className="cards-list">
          {restaurants.map((restaurant, i) => {
              return (
                <li className="card" key={i}>
                  <Link to="/restaurant"
                        className="card card__link">
                    <img src={mcDonalds} alt="food_picture"/>
                    <RestaurantCard
                      restaurant={restaurant}
                      name={restaurant.name}
                      category={restaurant.category}
                      time={restaurant.time}
                    />
                  </Link>
                </li>
              )
            }
          )}
        </ul>

      </div>
    </div>
  )
    ;
}