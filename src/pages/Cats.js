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

const catsData = [
  {
    name: "Lumi",
    age: 2,
    sex: "Female",
    photo: catscatone,
    bio: `Meet your new best friend! This beautiful cat up for adoption
    is eagerly waiting to join your family and fill your home with
    love. With its soft fur and sweet demeanor, it will bring you
    endless joy and companionship. Spend your evenings curled up
    together, sharing stories and laughter. Don't miss out on this
    amazing opportunity to adopt the purrfect pet!`,
  },
  {
    name: "Cali",
    age: 15,
    sex: "Female",
    photo: catscattwo,
    bio: `Looking for a furry companion to keep you company on lazy
    afternoons and quiet evenings? This cat up for adoption is the one
    for you. With its gentle nature and playful spirit, it will become
    your constant source of comfort and entertainment. Share your
    hopes and dreams with your new feline friend and watch them listen
    attentively with their beautiful, bright eyes.`,
  },
  {
    name: "Nala",
    age: 2,
    sex: "Female",
    photo: catscatthree,
    bio: `Fall in love with the perfect cat for you. This feline up for
    adoption is looking for a forever home where it can be cherished
    and adored. With its endearing personality and adorable quirks, it
    will quickly become the center of your world. Spend lazy
    afternoons watching it nap in the sun or play with its toys, and
    evenings cuddled up together watching movies or reading a book.`,
  },
  {
    name: "Nova",
    age: 3,
    sex: "Male",
    photo: catscatfour,
    bio: `Ready for an adventure? This playful and curious cat up for
    adoption is ready to join you on all your escapades, whether it's
    exploring new trails, napping in the sunshine, or snuggling up on
    the couch. Its friendly personality and love for people make it
    the perfect companion for any journey. Share your heart with this
    amazing feline and watch your bond grow stronger with each passing
    day.`,
  },
  {
    name: "Cali",
    age: 3,
    sex: "Female",
    photo: catscatfive,
    bio: `Looking for a loving and loyal pet to brighten up your day? Look
    no further than this charming cat up for adoption. Its warm and
    affectionate nature will melt your heart and make you feel loved
    every day. Spend your mornings sipping coffee and chatting with
    your new companion, and your evenings curled up together watching
    the stars. You'll never be alone with this amazing feline by your
    side.`,
  },
  {
    name: "Pieper",
    age: 3,
    sex: "Female",
    photo: catscatsix,
    bio: `Are you ready to welcome a new member into your family? This sweet
    and cuddly cat up for adoption is looking for a forever home where
    it can be loved and cherished. With its affectionate nature and
    gentle temperament, it will quickly become the light of your life.
    Spend lazy afternoons lounging in the sun or playing with toys,
    and cozy evenings snuggled up together watching your favorite TV
    shows`,
  },
  {
    name: "Chip",
    age: 4,
    sex: "Female",
    photo: catscatseven,
    bio: `Have you been searching for a furry friend to complete your
    family? Chip was rescued from her death. Look no further than this
    adorable cat up for adoption. With its playful personality and
    loving disposition, it will quickly become an integral part of
    your life. Share your stories and secrets with your new companion
    and watch your bond grow stronger every day.`,
  },
  {
    name: "Silvestre",
    age: 3,
    sex: "Male",
    photo: catscateight,
    bio: `Ready for an adventure? This playful and curious cat up for
    adoption is ready to join you on all your escapades, whether it's
    exploring new trails, napping in the sunshine, or snuggling up on
    the couch. Its friendly personality and love for people make it
    the perfect companion for any journey. Share your heart with this
    amazing feline and watch your bond grow stronger with each passing
    day.`,
  },
];

const Cats = () => {
  return (
    <>
      <div className="cats">
        <div className="cats__container">
          <div className="cats__header"></div>
          <div className="cats__available-cats">
            <h1>AVAILABLE CATS</h1>
          </div>
          {catsData.map((cat) => (
            <>
              <div className="cats__cat-one-photo-box">
                <img src={cat.photo} className="cats__cat-one-photo" alt="" />
              </div>
              <div>
                <div className="cats__cat-one">
                  <div>Name: {cat.name}</div>
                  <div>Age: {cat.age}</div>
                  <div>Sex: {cat.sex}</div>
                </div>
                <p>{cat.bio}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cats;
