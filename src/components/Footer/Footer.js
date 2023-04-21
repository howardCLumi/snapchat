import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/PetPride.png";
import Snapchat from "../../assets/Snapchatlogofooter.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div>
          <img src={logo} className="footer__mainlogo" alt="" />
        </div>
        <nav className="footer__navigation">
          <NavLink className="footer__navigation-home" to="/">
            Home
          </NavLink>
          <NavLink claaName="footer__navigation-contact" to="/contact">
            Contact
          </NavLink>
          <img src={Snapchat} className="footer__snapchatlogo" alt="" />
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
