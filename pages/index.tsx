import React from "react";
import Projects from "../components/Projects";
import Companies from "../components/Companies";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Resume from "../components/Resume";
import Showcase from "../components/Showcase";

const Home = () => {
  return (
    <div className="bg-white text-black">
      <Header />
      <div className="body">
        <Hero />
        <Projects />
      </div>
      <Companies />
      <Showcase />
      <div className="body">
        <Resume />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
