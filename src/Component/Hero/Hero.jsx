import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Hero.scss";

import scroll from "../../assets/icons/scroll.png";
import passport from "../../assets/imgs/passport.png";

function Hero() {
  return (
    <section id="Homepage">
      <Navbar />
      <div className="hero">
        <div>
          <img src={passport} alt="Hero" className="hero__img" />
        </div>
        <div className="hero__text">
          <h1 className="hero__title">PADMA - Software Developer</h1>
          <p className="hero__description">
            Dedicated and solutions-oriented Software development engineer with
            3 years of experience in full software development life cycle.
          </p>
          <div className="hero__buttons">
            <button className="hero__button">See the latest Works</button>
            <button className="hero__button">Contact Me</button>
          </div>
          <img src={scroll} alt="scroll" className="hero__scroll" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
