import React from "react";
import "./Cats.css";
import catscatone from "../assets/cat-1.jpg";
import catscattwo from "../assets/cat-2.jpg";
import catscatthree from "../assets/cat-3.jpg";
import catscatfour from "../assets/cat-4.jpg";
import catscatfive from "../assets/cat-5.jpg";
import catscatsix from "../assets/cat-6.jpg";
import catscatseven from "../assets/cat-7.jpg";
import catscateight from "../assets/cat-8.jpeg";

const Cats = () => {
  return (
    <>
      <div className="cats">
        <div className="cats__container">
          <div className="cats__header"></div>
          <div className="cats__available-cats">
            <h1>AVAILABLE CATS</h1>
          </div>
          <div className="cats__cat-one-photo-box">
            <img src={catscatone} className="cats__cat-one-photo" alt="" />
          </div>
          <div>
            <div className="cats__cat-one">
              <div>Name: Lumi</div>
              <div>Age: 2 Years</div>
              <div>Sex: Female</div>
            </div>
            <p>
              Meet your new best friend! This beautiful cat up for adoption is
              eagerly waiting to join your family and fill your home with love.
              With its soft fur and sweet demeanor, it will bring you endless
              joy and companionship. Spend your evenings curled up together,
              sharing stories and laughter. Don't miss out on this amazing
              opportunity to adopt the purrfect pet!
            </p>
          </div>
          <div className="cats__cat-one-photo-box">
            <img src={catscattwo} className="cats__cat-one-photo" alt="" />
          </div>
          <div>
            <div className="cats__cat-one">
              <div>Name: Cali</div>
              <div>Age: 15 Years</div>
              <div>Sex: Female</div>
            </div>
            <p>
              Looking for a furry companion to keep you company on lazy
              afternoons and quiet evenings? This cat up for adoption is the one
              for you. With its gentle nature and playful spirit, it will become
              your constant source of comfort and entertainment. Share your
              hopes and dreams with your new feline friend and watch them listen
              attentively with their beautiful, bright eyes.
            </p>
          </div>
          <div className="cats__cat-one-photo-box">
            <img src={catscatthree} className="cats__cat-one-photo" alt="" />
          </div>
          <div>
            <div className="cats__cat-one">
              <div>Name: Nala</div>
              <div>Age: 2 Years</div>
              <div>Sex: Female</div>
            </div>
            <p>
              Fall in love with the perfect cat for you. This feline up for
              adoption is looking for a forever home where it can be cherished
              and adored. With its endearing personality and adorable quirks, it
              will quickly become the center of your world. Spend lazy
              afternoons watching it nap in the sun or play with its toys, and
              evenings cuddled up together watching movies or reading a book.
            </p>
          </div>
          <div className="cats__cat-one-photo-box">
            <img src={catscatfour} className="cats__cat-one-photo" alt="" />
          </div>
          <div>
            <div className="cats__cat-one">
              <div>Name: Nova</div>
              <div>Age: 3 Years</div>
              <div>Sex: Male</div>
            </div>
            <p>
              Ready for an adventure? This playful and curious cat up for
              adoption is ready to join you on all your escapades, whether it's
              exploring new trails, napping in the sunshine, or snuggling up on
              the couch. Its friendly personality and love for people make it
              the perfect companion for any journey. Share your heart with this
              amazing feline and watch your bond grow stronger with each passing
              day.
            </p>
          </div>
          <div className="cats__cat-one-photo-box">
            <img src={catscatfive} className="cats__cat-one-photo" alt="" />
          </div>
          <div>
            <div className="cats__cat-one">
              <div>Name: Cali</div>
              <div>Age: 3 Years</div>
              <div>Sex: Female</div>
            </div>
            <p>
              Looking for a loving and loyal pet to brighten up your day? Look
              no further than this charming cat up for adoption. Its warm and
              affectionate nature will melt your heart and make you feel loved
              every day. Spend your mornings sipping coffee and chatting with
              your new companion, and your evenings curled up together watching
              the stars. You'll never be alone with this amazing feline by your
              side.
            </p>
          </div>
          <div className="cats__cat-one-photo-box">
            <img src={catscatsix} className="cats__cat-one-photo" alt="" />
          </div>
          <div>
            <div className="cats__cat-one">
              <div>Name: Estabon</div>
              <div>Age: 10 Years</div>
              <div>Sex: Female</div>
            </div>
            <p>
              Are you ready to welcome a new member into your family? This sweet
              and cuddly cat up for adoption is looking for a forever home where
              it can be loved and cherished. With its affectionate nature and
              gentle temperament, it will quickly become the light of your life.
              Spend lazy afternoons lounging in the sun or playing with toys,
              and cozy evenings snuggled up together watching your favorite TV
              shows
            </p>
          </div>
          <div className="cats__cat-one-photo-box">
            <img src={catscatseven} className="cats__cat-one-photo" alt="" />
          </div>
          <div>
            <div className="cats__cat-one">
              <div>Name: Pichu</div>
              <div>Age: 7 Years</div>
              <div>Sex: Female</div>
            </div>
            <p>
              Have you been searching for a furry friend to complete your
              family? Look no further than this adorable cat up for adoption.
              With its playful personality and loving disposition, it will
              quickly become an integral part of your life. Share your stories
              and secrets with your new companion and watch your bond grow
              stronger every day.
            </p>
          </div>
          <div className="cats__cat-one-photo-box">
            <img src={catscateight} className="cats__cat-one-photo" alt="" />
          </div>
          <div>
            <div className="cats__cat-one">
              <div>Name: Silvestre</div>
              <div>Age: 3 Years</div>
              <div>Sex: Male</div>
            </div>
            <p>
              Ready for an adventure? This playful and curious cat up for
              adoption is ready to join you on all your escapades, whether it's
              exploring new trails, napping in the sunshine, or snuggling up on
              the couch. Its friendly personality and love for people make it
              the perfect companion for any journey. Share your heart with this
              amazing feline and watch your bond grow stronger with each passing
              day.
            </p>
          </div>
        </div>
        <div>
          <br></br>
        </div>
        <div>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default Cats;
