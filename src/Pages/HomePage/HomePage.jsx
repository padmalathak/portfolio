import "./HomePage.scss";
import Timeline from "../../Component/Timeline/Timeline";
import Hero from "../../Component/Hero/Hero";
import Portfolio from "../../Component/Portfolio/Portfolio";
import Contact from "../../Component/Contact/Contact";
import About from "../../Component/About/About";
import OtherInterests from "../../Component/OtherInterests/OtherInterests";

function HomePage() {
  return (
    <div>
      <Hero />
      <Timeline />
      <Portfolio />
      <Contact />
      <About />
      <OtherInterests />
    </div>
  );
}

export default HomePage;
