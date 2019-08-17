import React from "react";
import "./Header.css";
import logo from "./img/uber_eats_logo.svg";
import { PersonalCabinet } from "./PersonalCabinet/PersonalCabinet.jsx";

export function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <a className="header__uber-link" href="/">
          <img src={logo} alt="" className="logo header__logo" />
        </a>

        <div className="header__delivery-info">
          <label>
            <input
              className="header__input header__input_left"
              type="text"
              placeholder="ASAP"
            />
          </label>
          <span className="header__span">to</span>
          <label className="header__label">
            <input
              className="header__input header__input_right"
              type="text"
              placeholder="ul. Tarasivska St, 16"
            />
          </label>
        </div>

        <PersonalCabinet />
      </div>
    </div>
  );
}
