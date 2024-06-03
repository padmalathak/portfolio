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
    <div id="Portfolio" className="Portfolio">
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
            <h2>Jasleen Kaur - Associate Educator BrainStation</h2>
            <p>
              I had the pleasure of working with Padmalatha as their Educator
              during their time at Brainstation. She consistently demonstrated
              exceptional skills in the Web development course, and their
              dedication to all the projects and tasks was truly impressive.
              Their ability to deliver high-quality work under tight deadlines
              significantly contributed to our successful completion of the
              Bootcamp.
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Abinaya R.M - Test Engineer Temenos</h2>
            <p>
              Padma and I worked together on several projects, and I was lucky
              to call her my coworker. She consistently gave 100 percent effort
              to the team and played a significant role in ensuring that we
              completed assignments on time. She used to be calm and productive
              during intense crunch periods. Such an amazing team player.
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Dinesh Kumar - Project Manager Honeywell</h2>
            <p>
              Padma is known for her versatility. Any challenging task thrown at
              her will be solved in no time. Her attitude and energy is always
              inspired by team. She has been always a value adding resource.
            </p>
            <button>Go</button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Portfolio;
