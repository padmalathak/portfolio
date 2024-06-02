import "./Timeline.scss";
import { motion } from "framer-motion";

function Timeline() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const variants = {
    visible: { opacity: 1, x: -30, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: -200 },
  };

  const rightVariants = {
    visible: { opacity: 1, x: 30, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: 200 },
  };
  return (
    <div>
      <div className="timelines">
        <h3 className="timelines__heading">My Timeline</h3>
        <div class="container">
          <div class="timeline">
            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.li className="timeline__list" variants={variants}>
                <div class="timeline-content">
                  <h3 class="date">10th may, 2024 - 95%</h3>
                  <h1>BrainStation-Software Engineering Student</h1>
                  <p>
                    Gained hands-on experience in full-stack development through
                    learning and applying:
                    <ul>
                      <li>HTML, CSS, JavaScript, React, Node.js, MySQL </li>
                      <li className="list-disc">
                        Built and deployed multi-page web applications
                      </li>
                      <li className="list-disc">
                        Collaborated effectively with other developers
                      </li>
                      <li className="list-disc">
                        Worked with databases to manage and manipulate data
                      </li>
                    </ul>{" "}
                  </p>
                </div>
              </motion.li>
              <motion.li
                className="timeline__list right"
                variants={rightVariants}
              >
                <div class="timeline-content">
                  <h3 class="date">March, 2020 </h3>
                  <h1>Honeywell- Software Engineer</h1>
                  <p>
                    Having extensive experience in all aspects of the software
                    development life cycle, I have effectively managed multiple
                    stages such as defining requirements, designing prototypes,
                    implementing interfaces, conducting thorough testing, and
                    ensuring ongoing maintenance.
                    <p>
                      Involved in designing and implementing Takeoff and
                      Landing(TOLD)
                    </p>
                    <p className="timeline__tech">
                      Tech Stack : C,C++, MERN Stack
                    </p>
                  </p>
                </div>
              </motion.li>
              <motion.li className="timeline__list" variants={variants}>
                <div class="timeline-content">
                  <h3 class="date">April 2018</h3>
                  <h1>Temenos PVT Ltd- Software Engineer</h1>
                  <ul>
                    <li className="list-disc">
                      {" "}
                      Utilized technical skills in software deveopment to
                      optimize T24 online services, and core banking-connected
                      interfaces, leading to a 20% increase in productivity.
                    </li>
                    <li className="list-disc"></li>
                    <p className="timeline__tech">
                      Tech Stack : C,C++, MERN Stack
                    </p>
                  </ul>
                </div>
              </motion.li>
              <motion.li
                className="timeline__list right"
                variants={rightVariants}
              >
                <div class="timeline-content">
                  <h3 class="date">Dec 2017</h3>
                  <h1>PhilipsTv/TpVision - Software Engineer</h1>
                  <p>
                    Engineered and deployed a custom Android TV application for
                    Philips TV
                  </p>
                  <p>
                    Played a pivotal role in a major software release that
                    expanded the product's market reach and received positive
                    user feedback.
                  </p>
                  <p className="timeline__tech">
                    Tech Stack : C,C++, MERN Stack
                  </p>
                </div>
              </motion.li>
              <motion.li className="timeline__list tce" variants={variants}>
                <div class="timeline-content ">
                  <h3 class="date">
                    Aptil 2017 - Bachelor's in Electronics and Communications
                  </h3>
                  <h1>Thiagarajar College of Engineering</h1>
                  <ul>
                    {/* <li className="list-disc">
                      {" "}
                      Analyzed clients' requirements to develop products on the
                      T24 core module platform, resulting in the successful
                      implementation of new functionalities
                    </li> */}
                  </ul>
                </div>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
