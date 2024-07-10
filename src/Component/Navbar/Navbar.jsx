import "./Navbar.scss";
import { motion } from "framer-motion";
import linkedIn from "../../assets/logo/linkedin.svg";
import github from "../../assets/logo/github.svg";
import instagram from "../../assets/logo/instagram.png";
import Padma from "../../assets/logo/logo-transparent-png.png";

import Sidebar from "../Sidebar/Sidebar";

function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="title"
        >
          <img src={Padma} alt="Padma Tech" className="Padma-logo"></img>
        </motion.span>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/padmalathakrish/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedIn} alt="linkedin" className="logo" />
          </a>
          <a
            href="https://github.com/padmalathak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" className="logo__github logo" />
          </a>
          <a
            href="https://leetcode.com/u/padmaviki/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={instagram} alt="instagram" className="logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
