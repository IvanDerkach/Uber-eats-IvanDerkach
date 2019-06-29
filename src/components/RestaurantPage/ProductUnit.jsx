import React from 'react';


export function ProductUnit(props) {
  return (
    <>
      <span className="menu-card__title">{props.title}</span>
      <span className="menu-card__consist" >{props.consist}</span>
      <span className="menu-card__price">{props.price}</span>
    </>
  );
}