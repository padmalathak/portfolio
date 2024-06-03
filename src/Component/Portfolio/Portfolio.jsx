import "./Portfolio.scss";
import { animate, motion, useInView } from "framer-motion";
import people from "../../assets/imgs/people.webp";
import { useRef } from "react";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

function Portfolio() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <section id="Portfolio" className="Portfolio">
      <motion.div
        className="services"
        variants={variants}
        initial="initial"
        ref={ref}
        animate={isInView && "animate"}
      >
        <motion.div className="textContainer" variants={variants}>
          <p>
            Along with my technical skills, I also bring
            <br /> warmth, a positive attitude and a cute smile to every team I
            join.
          </p>
          <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
          <div className="title">
            <img src={people} alt="" />
            <h1>
              <motion.b whileHover={{ color: "orange" }}>
                <b>Recent</b>
              </motion.b>{" "}
              Testimonials
            </h1>
          </div>
          {/* <div className="title">
            <button>WHAT WE DO?</button>
          </div> */}
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Murali Krishnan T.M - Honeywell Tech Specialist</h2>
            <p>
              Padma had been working as a software engineer with the Flight
              Management system. I have worked with her closely. I have always
              found her as extremely competent colleague, who is very good in
              C++, design patterns, data structures, algorithms, debugging
              skills, and domain knowledge of the Flight Management Systems. She
              is a quick learner and possess great leadership capabilities. She
              is a very good team player and is able to gel well with the team
              and ensure the project is completed on time with high quality.
              Many a times she has organized, participated and won various out
              of work initiatives at Honeywell too. I have observed her getting
              into completely new assignments, and has demonstrated ownership
              and productivity in a very short turn around time
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Jasleen Kaur</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              libero enim nisi aliquam consectetur expedita magni eius ex
              corrupti animi!
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>eCommerce</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              libero enim nisi aliquam consectetur expedita magni eius ex
              corrupti animi!
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Quotes</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              libero enim nisi aliquam consectetur expedita magni eius ex
              corrupti animi!?
            </p>
            <button>Go</button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Portfolio;
