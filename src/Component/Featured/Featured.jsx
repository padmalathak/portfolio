import { useRef } from "react";
import "./Featured.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import inStock from "../../assets/imgs/InStock.png";
import ehub from "../../assets/imgs/eHub.png";
import tripPilot from "../../assets/imgs/TripPilot.png";
import ilab from "../../assets/imgs/iLab.png";

const items = [
  {
    id: 1,
    title: "eHUB",
    img: `${ehub}`,
    desc: "This dashboard provides administrators with powerful tools to manage users and their permissions within our system. With integrated login functionality, administrators can securely access the dashboard and perform their tasks efficiently.",
  },
  {
    id: 2,
    title: "iLAB",
    img: `${ilab}`,
    desc: `Developed a web application offering real-time bench usage statistics for
            accounting revenue from clients, which reclaims $1 million USD relaxed
  revenue per quarter.It is highly scalable , maintainable and lightweight
  application for remotely booking benches , rescheduling , canceling and
  consecutive slot management using NodeJS and MongoDB. Internal Tool developed at Honeywell`,
  },
  {
    id: 3,
    title: "inStock",
    img: `${inStock}`,
    desc: `Streamline and optimize the processes of tracking, managing, and organizing inventory within a warehouse. This application aims to enhance operational efficiency, minimize errors, reduce costs, and improve overall
     productivity by providing a comprehensive and user-friendly 
    platform for real-time inventory management. Key functionalities include automated inventory tracking, order processing, stock level monitoring, reporting, and analytics, ensuring that businesses can 
    maintain accurate inventory records, prevent stockouts or overstock situations, 
    and make data-driven decisions to support their supply chain operations.`,
  },
  {
    id: 4,
    title: "TripPilot - In Progress",
    img: `${tripPilot}`,
    desc: `Are you still using MSExcel to organize your trip information? What if there is an app feature that organizes all your travel info in one place? Then, you are all
    set to explore your dream destination with TripPilot. TripPilot is a cutting edge travel planning app that is designed to assist you in
    organizing, managing, and cooperating on tasks, and information when planning a trip.Tech Stack : React,TypeScript, Node and MongoDB`,
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
