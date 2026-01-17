import React from "react";
import Intro from "./Intro";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import ContactSection from "./ContactSection";
import Certificates from "./Certificates";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Achievements from "./Achievements";

const Home = () => {
  return (
    <div id="home">
      <Intro />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Services />
      <Projects />
      <Certificates />
      <Achievements />
      {/* <Testimonials /> */}
      <ContactSection />
    </div>
  );
};

export default Home;
