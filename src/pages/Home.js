import React from "react";
import nova from "../assets/homenova.jpg";

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
            <a
              className="home__body-continue-button"
              href="https://www.google.com/"
            >
              Continue to Website
            </a>
          </div>
          <div>
            <img src={nova} className="home__body-nova" alt="" />
          </div>
        </div>
      </div>
      <div className="home__bottom">
        <div className="home__bottom-container">
          <div>test</div>
        </div>
      </div>
    </>
  );
};

export default Home;
