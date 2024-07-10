import { animate, motion } from "framer-motion";
import "./Contact.scss";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
  const form = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5n4jsp5", "template_m710k76", form.current, {
        publicKey: "W5LkSrZ67dUK3zoam",
      })
      .then(
        () => {
          console.log("SUCCESS");
          setSuccess(true);
        },
        (error) => {
          console.log("Failed...", error.text);
          setError(true);
        }
      );
  };
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
            <marquee className="question">
              Why are programmers always sitting down?
            </marquee>
            <span>
              <br></br>If you know the answer or if you want to know it, hit me
              up with a message !!
            </span>
            <h2>Mail</h2>
            <span className="question">padmalathalakshmi@gmail.com</span>
          </motion.div>
          <motion.div variants={variants} className="item">
            <h2>Address</h2>
            <span className="question">Langley,BC</span>
          </motion.div>
          <motion.div variants={variants} className="item">
            <h2>Phone</h2>
            <span className="question">+16047247962</span>
          </motion.div>
        </motion.div>
        <div className="formContainer">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" required placeholder="Name" name="userName" />
            <input
              type="email"
              required
              placeholder="Email"
              name="user_email"
            />
            <textarea rows={6} placeholder="Message" name="message" />
            <button>Submit</button>
            {error && "Not Sent"}
            {success && "Success"}
          </form>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
