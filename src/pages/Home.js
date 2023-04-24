import React from "react";
import nova from "../assets/homenova.jpg";
import salute from "../assets/cat-9.JPG";
import { NavLink } from "react-router-dom";

import "./Home.css";

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
            <div className="home__bottom-about-text-container">
              <p className="home__bottom-about-text">
                Pet Pride, founded in 1965, owns and operates a "NO KILL" and
                cage-free shelter for the lifetime care of homeless cats.
                <br />
                <br />
                We are located at 3350 S. Robertson Blvd, Los Angeles, CA 90034.
                <br />
                <br />
                Our hours are 11 AM to 4 PM daily except on Wednesdays & Sundays
                <br />
                <br />
                We welcome visitors to come see our cats living happily in their
                cage-free "Home for Cats" full furnished for the cats' pleasure
                and enjoyment.
                <br />
                <br />
                Our healthy and purring cats are available for adoption to
                approved homes. Please call us for more information or to set up
                an appointment.
                <br />
                <br />
                Our phone numer is (310) 836-5427.
                <br />
                <br />
                Please note that all mail should be directed to us as follows:
                <br />
                <br />
                PET PRIDE
                <br />
                P.O. Box 1055
                <br />
                Pacific Palisades, CA 90272
                <br />
                <br />
                Click the button below for their official website!
              </p>
              <div>
                <img src={salute} className="home__bottom-salute" alt="" />
              </div>
              <a
                className="home__bottom-continue-button"
                href="http://www.petpride.org/"
              >
                PetPride.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home__closing">
        <div className="home__closing-container"></div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Home;
