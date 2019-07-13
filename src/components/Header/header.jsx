import React from "react";
import "./header.css";
import logo from "./img/uber_eats_logo.svg";
import { PersonalCabinet } from "./PersonalCabinet/PersonalCabinet.jsx";

export function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <a className="uber_link" href="https://www.ubereats.com/ru-UA/stores/">
          <img src={logo} alt="" className="logo header__logo" />
        </a>

        <div className="delivery-info">
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
