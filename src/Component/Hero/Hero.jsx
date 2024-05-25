import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Hero.scss";

import scroll from "../../assets/icons/scroll.png";
import passport from "../../assets/imgs/passport.png";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

function Hero() {
  return (
    <section id="Homepage">
      <Navbar />
      <div className="hero">
        <div>
          <img src={passport} alt="Hero" className="hero__img" />
        </div>
        <motion.div
          className="hero__text"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 className="hero__title" variants={textVariants}>
            PADMA - Software Developer
          </motion.h1>
          <motion.p className="hero__description" variants={textVariants}>
            Dedicated and solutions-oriented Software development engineer with
            3 years of experience in full software development life cycle.
            <p>
              Holder of prestigious awards such as the Outstanding Engineer
              Award, Top Flyer Award , Gold and Bravo Awrds
            </p>
          </motion.p>
          <motion.div className="hero__buttons" variants={textVariants}>
            <motion.button className="hero__button" variants={textVariants}>
              See the latest Works
            </motion.button>
            <motion.button className="hero__button" variants={textVariants}>
              Resume
            </motion.button>
          </motion.div>
          <motion.img
            src={scroll}
            alt="scroll"
            className="hero__scroll"
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
