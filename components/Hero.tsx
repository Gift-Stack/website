import React from "react";

const Hero = () => {
  return (
    <>
      <div className="mx-auto max-w-max bg-greyish-200 border border-greyish-100 p-2.5 rounded-lg text-sm text-blackish-100">
        Join an overall software development experience
      </div>
      <div className="text-center">
        <h1 className="mt-10 text-5xl md:text-8xl font-extrabold mb-8">
          The React Framework Developer
        </h1>
        <h2 className="text-sm md:text-xl mb-10 text-blackish-600">
          GiFTED!, whose name is Gift Opia, is a Web3 Frontend Engineer and
          Creative Developer with expertise in all the technologies and features
          you need for production:{" "}
          <span className="text-[#555] font-medium">Frontend Engineering</span>{" "}
          using React, Next.js, Tailwind, Typescript;{" "}
          <span className="text-[#555] font-medium">Web3 development</span> with
          Web3.js, Ethers.js, Wagmi, Viem and Solidity;{" "}
          <span className="text-[#555] font-medium">
            {" "}
            Creative UI development
          </span>{" "}
          with Three.js, GSAP and more.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center">
        <a href="#projects">
          <button
            className="p-2.5 mb-3 md:mb-0 md:mr-3 text-white bg-blueish-100 shadow-xl hover:shadow-2xl transition-all duration-200 ease-in-out rounded-lg min-w-[200px]"
            style={{
              boxShadow: "0 4px 14px 0 rgb(0 118 255 / 39%)",
            }}
          >
            Start learning
          </button>
        </a>
        <a href="/resume.pdf" target="_blank">
          <button
            className="p-2.5 mt-3 md:mt-0 md:ml-3 text-greyish-300 shadow-xl hover:shadow-2xl transition-all duration-200 ease-in-out bg-white rounded-lg min-w-[200px]"
            style={{
              boxShadow: "0 4px 14px 0 rgb(0 0 0 / 10%)",
            }}
          >
            Documentation
          </button>
        </a>
      </div>
    </>
  );
};

export default Hero;
