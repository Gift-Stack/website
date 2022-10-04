import React from "react";
import Blog from "../components/Blog";
import Companies from "../components/Companies";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Resume from "../components/Resume";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="body">
        <Hero />
        <Blog />
      </div>
      <Companies />
      <div className="body">
        <Resume />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
