import "./Navbar.scss";
import { motion } from "framer-motion";
import linkedIn from "../../assets/logo/linkedin.svg";
import github from "../../assets/logo/github.svg";
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
          Padma Tech
        </motion.span>
        <div className="socials">
          <a href="#">
            <img src={linkedIn} alt="linkedin" className="logo" />
          </a>
          <a href="#">
            <img src={github} alt="linkedin" className="logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
