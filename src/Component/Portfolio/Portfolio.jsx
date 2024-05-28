import "./Portfolio.scss";
import { motion } from "framer-motion";
import people from "../../assets/imgs/people.webp";

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

function Portfolio() {
  return (
    <section id="Portfolio" className="Portfolio">
      <motion.div className="services">
        <motion.div className="textContainer">
          <p>
            Along with my technical skills, I also bring
            <br /> warmth, a positive attitude and a cute smile to every team I
            join.
          </p>
          <hr />
        </motion.div>
        <motion.div className="titleContainer">
          <div className="title">
            <img src={people} alt="" />
            <h1>
              <motion.b whileHover={{ color: "orange" }}>
                <b>Recent</b>
              </motion.b>{" "}
              Works
            </h1>
          </div>
          {/* <div className="title">
            <button>WHAT WE DO?</button>
          </div> */}
        </motion.div>
        <motion.div className="listContainer">
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>eHub</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              libero enim nisi aliquam consectetur expedita magni eius ex
              corrupti animi! Ad nam pariatur assumenda quae mollitia libero
              repellat explicabo maiores?
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>InStock</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              libero enim nisi aliquam consectetur expedita magni eius ex
              corrupti animi! Ad nam pariatur assumenda quae mollitia libero
              repellat explicabo maiores?
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
              corrupti animi! Ad nam pariatur assumenda quae mollitia libero
              repellat explicabo maiores?
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
