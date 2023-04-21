import React from "react";
import { NavLink } from "react-router-dom";
import Snapchat from "../../assets/Snapchatlogo.svg";
import catlogo from "../../assets/blackcatlogo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div>
          <img src={catlogo} className="header__main-logo" alt="" />
        </div>
        <nav className="header__navigation">
          <NavLink className="header__navigation-home" to="/">
            Home
          </NavLink>
          <NavLink className="header__navigation-shop" to="/shop">
            Shop
          </NavLink>
          <NavLink className="header__navigation-cats" to="/cats">
            Cats
          </NavLink>
          <NavLink className="header__navigation-contact" to="/contact">
            Contact
          </NavLink>
          <a href="https://www.Snapchat.com/">
            <img src={Snapchat} className="header__snapchat-logo" alt="" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
