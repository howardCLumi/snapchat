import React from "react";
import "./Welcome.css";
import welcomecat from "../assets/cat-1.jpg";

const Welcome = () => {
  return (
    <>
      <div className="welcome">
        <div className="welcome__container">
          <div className="welcome__header"></div>
          <div className="welcome__available-cats">
            <h1>AVAILABLE CATS</h1>
          </div>
          <div className="welcome__cat-one-photo-box">
            <img src={welcomecat} className="welcome__cat-one-photo" alt="" />
          </div>
          <div>
            <div className="welcome__cat-one">
              <div>Name: Lumi</div>
              <div>Age: 2 Years</div>
              <div>Sex: Female</div>
            </div>
            <p>
              About: LUMI IS THE GREATEST CAT IN THE WHOLE WIDE WORLD, I LOVE
              HER SO MUCH
            </p>
          </div>
          <div className="welcome__cat-one-photo-box">
            <img src={welcomecat} className="welcome__cat-one-photo" alt="" />
          </div>
          <div>
            <div className="welcome__cat-one">
              <div>Name: Lumi</div>
              <div>Age: 2 Years</div>
              <div>Sex: Female</div>
            </div>
            <p>
              About: LUMI IS THE GREATEST CAT IN THE WHOLE WIDE WORLD, I LOVE
              HER SO MUCH
            </p>
          </div>
          <div className="welcome__cat-one-photo-box">
            <img src={welcomecat} className="welcome__cat-one-photo" alt="" />
          </div>
          <div>
            <div className="welcome__cat-one">
              <div>Name: Lumi</div>
              <div>Age: 2 Years</div>
              <div>Sex: Female</div>
            </div>
            <p>
              About: LUMI IS THE GREATEST CAT IN THE WHOLE WIDE WORLD, I LOVE
              HER SO MUCH
            </p>
          </div>
          <div className="welcome__cat-one-photo-box">
            <img src={welcomecat} className="welcome__cat-one-photo" alt="" />
          </div>
          <div>
            <div className="welcome__cat-one">
              <div>Name: Lumi</div>
              <div>Age: 2 Years</div>
              <div>Sex: Female</div>
            </div>
            <p>
              About: LUMI IS THE GREATEST CAT IN THE WHOLE WIDE WORLD, I LOVE
              HER SO MUCH
            </p>
          </div>
          <div className="welcome__cat-one-photo-box">
            <img src={welcomecat} className="welcome__cat-one-photo" alt="" />
          </div>
          <div>
            <div className="welcome__cat-one">
              <div>Name: Lumi</div>
              <div>Age: 2 Years</div>
              <div>Sex: Female</div>
            </div>
            <p>
              About: LUMI IS THE GREATEST CAT IN THE WHOLE WIDE WORLD, I LOVE
              HER SO MUCH
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
