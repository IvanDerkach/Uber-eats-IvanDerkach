import React from 'react';
import './restaurant_card.css';


export function RestaurantCard(props) {
  return (
    <li className="card">
      <a href="" className=" card card_link">
        <img className="card__img" src={props.imageUrl} alt="food_image"/>
        <span className="card__restaurant">{props.title}</span>
        <span className="card__category">{props.priceBucket}{props.categories.map((category) => {
          return (
            ' • ' + category.keyName
          )
        })}
      </span>


        <span className="card__time">{props.etaRange.min} - {props.etaRange.max} Min</span>
      </a>
    </li>
  );
}

