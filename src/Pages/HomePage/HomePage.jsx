import "./HomePage.scss";
import Timeline from "../../Component/Timeline/Timeline";
import Hero from "../../Component/Hero/Hero";
import Portfolio from "../../Component/Portfolio/Portfolio";
import Contact from "../../Component/Contact/Contact";
import About from "../../Component/About/About";
import OtherInterests from "../../Component/OtherInterests/OtherInterests";
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
      <About />
      <OtherInterests />
    </div>
  );
}

export default HomePage;
