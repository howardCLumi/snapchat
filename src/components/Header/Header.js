import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/PetPride.png";
import Snapchat from "../../assets/Snapchatlogo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div>
          <img src={logo} className="header__mainlogo" alt="" />
        </div>
        <nav className="header__navigation">
          <NavLink className="header__navigation-link" to="/">
            Home
          </NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <img src={Snapchat} className="header__snapchatlogo" alt="" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
