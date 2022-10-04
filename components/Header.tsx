import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full z-50 fixed top-0 border-0">
      <div className="w-full bg-black border-0">
        <div className="w-full text-white py-4 px-3 max-w-5xl mx-auto border-0 flex items-center justify-between">
          <p className="">GiFTED!</p>
          <p>About</p>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="text-black text-sm py-4 px-3 border-0 max-w-5xl mx-auto flex items-center justify-between">
          <a>GiFTED!</a>
          <a href="#">Showcase</a>
          <a href="#blog">Blog</a>
          <a href="#companies">Companies</a>
          <a href="#">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
