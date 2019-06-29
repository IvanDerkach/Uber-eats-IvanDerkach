import React from 'react';
import './card.css';


export function RestaurantCard(props) {
  return (
    <>
    <span className="card__restaurant">{props.name}</span>
    <span className="card__category" >{props.category}</span>
    <span className="card__time">{props.time}</span>
    </>
);
}


//
// Макдоналдс
// ₴₴ • Бургеры
// 25 - 35 Min