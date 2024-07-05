import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Hero.scss";
import resume from "../../assets/Files/PadmaResume.pdf";

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

// Function on Click
const downloadResume = () => {
  const link = document.createElement("a");
  link.href = resume;
  link.download = `PadmaResume.pdf`;
  link.click();
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
            [“hip”,”hip”](hip hip array!)😁 Well,come ! <br></br>3 years of work
            experience as a software developer and Cookie💻 is my favorite
            snack!
            <p>
              I am also Holder of prestigious awards such as the Outstanding
              Engineer Award, Top Flyer Award , Gold and Bravo Awards
            </p>
          </motion.p>
          <motion.ul className="skills">
            <motion.li className="skills__list">C</motion.li>
            <motion.li className="skills__list"> C++</motion.li>
            <motion.li className="skills__list">React</motion.li>
            <motion.li className="skills__list">HTML,CSS</motion.li>
            <motion.li className="skills__list">SASS</motion.li>
            <motion.li className="skills__list">JS</motion.li>
            <motion.li className="skills__list">NodeJS</motion.li>
          </motion.ul>
          <motion.div className="hero__buttons" variants={textVariants}>
            <motion.button className="hero__button" variants={textVariants}>
              <a href="#Featured">See the latest Works</a>
            </motion.button>
            <motion.button
              className="hero__button"
              variants={textVariants}
              onClick={downloadResume}
            >
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
