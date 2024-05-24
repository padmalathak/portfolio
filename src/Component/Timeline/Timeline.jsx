import "./Timeline.scss";
import { motion } from "framer-motion";

function Timeline() {
  const variants = {
    visible: { opacity: 1, x: -30, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: -200 },
  };

  const rightVariants = {
    visible: { opacity: 1, x: 30, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: 200 },
  };
  return (
    <section id="Experience">
      <div className="timelines">
        <h3 className="timelines__heading">My Timeline</h3>
        <div class="container">
          <div class="timeline">
            <ul>
              <motion.li
                className="timeline__list"
                variants={variants}
                initial="hidden"
                whileInView="visible"
              >
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
                initial="hidden"
                whileInView="visible"
              >
                <div class="timeline-content">
                  <h3 class="date">20th may, 2010 </h3>
                  <h1>Heading 2</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur tempora ab laudantium voluptatibus aut eos
                    placeat laborum, quibusdam exercitationem labore.
                  </p>
                </div>
              </motion.li>
              <motion.li
                className="timeline__list"
                variants={variants}
                initial="hidden"
                whileInView="visible"
              >
                <div class="timeline-content">
                  <h3 class="date">20th may, 2010</h3>
                  <h1>Heading 3</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur tempora ab laudantium voluptatibus aut eos
                    placeat laborum, quibusdam exercitationem labore.
                  </p>
                </div>
              </motion.li>
              <motion.li
                className="timeline__list right"
                variants={rightVariants}
                initial="hidden"
                whileInView="visible"
              >
                <div class="timeline-content">
                  <h3 class="date">20th may, 2010</h3>
                  <h1>Heading 4</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur tempora ab laudantium voluptatibus aut eos
                    placeat laborum, quibusdam exercitationem labore.
                  </p>
                </div>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
