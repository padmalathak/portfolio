import { animate, motion } from "framer-motion";
import "./Contact.scss";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
function Contact() {
  return (
    <section id="Contact">
      <motion.div
        className="contact"
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div className="textContainer" variants={variants}>
          <motion.h1 variants={variants}>
            Let's Create Magic Together!
          </motion.h1>
          <motion.div variants={variants} className="item">
            <span>Why are programmers always sitting down?</span>
            <span>
              <br></br>If you know the answer or if you want to know it, hit me
              up with a message !!
            </span>
            <h2>Mail</h2>
            <span>padmalathalakshmi@gmail.com</span>
          </motion.div>
          <motion.div variants={variants} className="item">
            <h2>Address</h2>
            <span>Langley,BC</span>
          </motion.div>
          <motion.div variants={variants} className="item">
            <h2>Phone</h2>
            <span>+16047247962</span>
          </motion.div>
        </motion.div>
        <div className="formContainer">
          <form>
            <input type="text" required placeholder="Name" />
            <input type="email" required placeholder="Email" />
            <textarea rows={8} placeholder="Message" />
            <button>Submit</button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
