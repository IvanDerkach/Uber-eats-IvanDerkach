import React from "react";
import "./RestaurantCard.css";
import { Link } from "react-router-dom";

export function RestaurantCard(props) {
  return (
    <li className="card">
      <Link to="/restaurant" className="card card__link">
        <img className="card__img" src={props.imageUrl} alt="food_image" />
        <span className="card__restaurant">{props.title}</span>
        <span className="card__category">
          {props.priceBucket}
          {props.categories.map(category => {
            return " • " + category.keyName;
          })}
        </span>

        <span className="card__time">
          {props.etaRange.min} - {props.etaRange.max} Min
        </span>
      </Link>
    </li>
  );
}
