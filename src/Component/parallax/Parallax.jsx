import { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

function Parallax() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-80%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["-100%", "-20%"]);
  const ystr = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section>
      <div className="parallax" ref={ref}>
        <motion.h1 className="parallax__title" style={{ y: yText }}>
          Experience
        </motion.h1>
        <div className="parallax__mountains"></div>
        <div className="parallax__mountain"></div>
        <motion.div className="parallax__moon" style={{ y: yBg }}></motion.div>
        <motion.div
          className="parallax__stars"
          style={{ x: ystr }}
        ></motion.div>
      </div>
    </section>
  );
}

export default Parallax;
