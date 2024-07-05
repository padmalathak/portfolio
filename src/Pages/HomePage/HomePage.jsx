import "./HomePage.scss";
import Timeline from "../../Component/Timeline/Timeline";
import Hero from "../../Component/Hero/Hero";
import Portfolio from "../../Component/Portfolio/Portfolio";
import Contact from "../../Component/Contact/Contact";
import Parallax from "../../Component/parallax/Parallax";
import Featured from "../../Component/Featured/Featured";

function HomePage() {
  return (
    <div>
      <Hero />
      <Parallax />
      <Timeline />
      <Portfolio />
      <Featured />
      <Contact />
    </div>
  );
}

export default HomePage;
