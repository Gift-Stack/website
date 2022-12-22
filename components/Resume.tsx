/* eslint-disable @next/next/no-img-element */
import React from "react";

const Resume = () => {
  return (
    <div className="py-24 text-center">
      <div className="relative mb-8 text-center">
        <h2 id="learn" className="font-bold text-3xl mb-4">
          Learn Next.js
        </h2>
        <h3 className="text-base text-greyish-300 font-normal">
          Learn Next.js step-by-step and earn points ✨.
        </h3>
        <img src="/images/github-profile.png" alt="" />
      </div>
      <div>
        <a href="mailto:gkenny896@gmail.com">
          <button className="px-14 h-11 rounded-lg bg-blueish-100 text-white shadow-blue-btn">
            Get Started
          </button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
