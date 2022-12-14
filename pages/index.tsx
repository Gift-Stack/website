import React from "react";
import Blog from "../components/Blog";
import Companies from "../components/Companies";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Resume from "../components/Resume";
import Showcase from "../components/Showcase";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="body">
        <Hero />
        <Blog />
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
