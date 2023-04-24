import React from "react";
import nova from "../assets/homenova.jpg";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./Home.css";
import Cats from "../pages/Cats";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home__body-container">
          <div>
            <h1 className="home__body-hello-text">
              Welcome to<br></br>
              Pet Pride<br></br>
              Cat Shelter!
            </h1>
            <h2 className="home__body-adopt-text">
              Browse, Call, and adopt<br></br>
              any cat from wherever you are.
            </h2>
            <br></br>
            <NavLink className="home__body-continue-button" to="/cats">
              Continue to Website
            </NavLink>
          </div>
          <div>
            <img src={nova} className="home__body-nova" alt="" />
          </div>
        </div>
      </div>
      <div className="home__bottom">
        <div className="home__bottom-container">
          <div>
            <h2 className="home__bottom-about-title">ABOUT PET PRIDE</h2>
            <p className="home__bottom-about-text">
              Pet Pride, founded in 1965, owns and operates a "NO KILL" and
              cage-free shelter for the lifetime care of homeless cats.<br></br>
              <br></br>
              We are located at 3350 S. Robertson Blvd, Los Angeles, CA 90034.
              Our hours are 11 AM to 4 PM daily except on Wednesdays and
              Sundays.<br></br>
              <br></br>
              We welcome visitors to come see our cats living happily in their
              cage-free "Home for Cats" full furnished for the cats' pleasure{" "}
              <br></br>
              and enjoyment.
              <br></br>
              Our healthy and purring cats are available for adoption to
              approved homes. Please call us for more information or to set up
              an appointment.<br></br>
              Our phone numer is (310) 836-5427.<br></br>
              <br></br>
              Please note that all mail should be directed to us as follows:
              <br></br>
              PET PRIDE<br></br>
              P.O. Box 1055<br></br>
              Pacific Palisades, CA 90272
              <br></br>
              <br></br>
              Click the button below for their official website!
              <br></br>
              <br></br>
              <a
                className="home__bottom-continue-button"
                href="http://www.petpride.org/"
              >
                PetPride.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="home__closing">
        <div className="home__closing-container"></div>
      </div>
    </>
  );
};

export default Home;
