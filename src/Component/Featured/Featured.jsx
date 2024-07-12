import { useRef } from "react";
import "./Featured.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "eHUB",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "This dashboard provides administrators with powerful tools to manage users and their permissions within our system. With integrated login functionality, administrators can securely access the dashboard and perform their tasks efficiently.",
  },
  {
    id: 2,
    title: "iLAB",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: `Developed a web application offering real-time bench usage statistics for
            accounting revenue from clients, which reclaims $1 million USD relaxed
  revenue per quarter.It is highly scalable , maintainable and lightweight
  application for remotely booking benches , rescheduling , canceling and
  consecutive slot management using NodeJS and MongoDB. Internal Tool developed at Honeywell`,
  },
  {
    id: 3,
    title: "inStock",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: `Streamline and optimize the processes of tracking, managing, and organizing inventory within a warehouse. This application aims to enhance operational efficiency, minimize errors, reduce costs, and improve overall
     productivity by providing a comprehensive and user-friendly 
    platform for real-time inventory management. Key functionalities include automated inventory tracking, order processing, stock level monitoring, reporting, and analytics, ensuring that businesses can 
    maintain accurate inventory records, prevent stockouts or overstock situations, 
    and make data-driven decisions to support their supply chain operations.`,
  },
  {
    id: 4,
    title: "TripPilot",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const handlePorjectClick = (id) => {
    let url = "";
    if (id === 1) {
      url = "https://github.com/padmalathak/eHub/blob/main/README.md";
    } else if (id === 4) {
      url =
        "https://www.figma.com/design/CKERIpXmzdm8b1r1l6YPRI/TripPilot---MockUp?node-id=1928-8&t=b7bNQvwjvrScejrC-0";
    }
    window.open(url, "_blank");
  };
  return (
    <section>
      <div className="container" id="Featured">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {item.id !== 2 && (
              <button onClick={() => handlePorjectClick(item.id)}>View</button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Featured = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Featured;
