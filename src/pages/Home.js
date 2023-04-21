import React from "react";
import nova from "../../src/assets/homenova.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <div>
          <h1 className="home__hello-text">
            This is my<br></br>
            submission to<br></br>
            Snap Academy!
          </h1>
          <h2 className="home__adopt-text">
            Browse, Call, and adopt<br></br>
            any cat from wherever you are.
          </h2>
        </div>
        <div>
          <img src={nova} className="home__nova" alt="" />
        </div>
        <div>
          Just my luck, no ice. We gotta burn the rain forest, dump toxic waste,
          pollute the air, and rip up the OZONE! 'Cause maybe if we screw up
          this planet enough, they won't want it anymore! What do they got in
          there? King Kong? Just my luck, no ice. Is this my espresso machine?
          Wh-what is-h-how did you get my espresso machine? Hey, take a look at
          the earthlings. Goodbye! What do they got in there? King Kong? We
          gotta burn the rain forest, dump toxic waste, pollute the air, and rip
          up the OZONE! 'Cause maybe if we screw up this planet enough, they
          won't want it anymore! Hey, take a look at the earthlings. Goodbye!
          You know what? It is beets. I've crashed into a beet truck. Yes, Yes,
          without the oops! Remind me to thank John for a lovely weekend. Is
          this my espresso machine? Wh-what is-h-how did you get my espresso
          machine? Yes, Yes, without the oops! Must go faster. Remind me to
          thank John for a lovely weekend. Do you have any idea how long it
          takes those cups to decompose. Forget the fat lady! You're obsessed
          with the fat lady! Drive us out of here! Must go faster. They're using
          our own satellites against us. And the clock is ticking. Yeah, but
          John, if The Pirates of the Caribbean breaks down, the pirates don’t
          eat the tourists. Hey, you know how I'm, like, always trying to save
          the planet? Here's my chance. Forget the fat lady! You're obsessed
          with the fat lady! Drive us out of here!
        </div>
      </div>
    </div>
  );
};

export default Home;
