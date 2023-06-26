/* eslint-disable @next/next/no-img-element */
import React from "react";

const Resume = () => {
  return (
    <div className="py-24 text-center">
      <div className="relative mb-8 text-center">
        <h2 id="learn" className="font-bold text-3xl mb-4">
          Learn More
        </h2>
        <h3 className="text-base text-greyish-300 font-normal">
          Learn more about Gift on GitHub and reach out ✨.
        </h3>
        <a
          href="https://github.com/gift-stack"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/github-profile.png" alt="" />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/gift-stack"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-14 h-11 rounded-lg bg-blueish-100 text-xs md:text-sm lg:text-base text-white shadow-blue-btn">
            <code>git checkout -B gift-stack</code>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
