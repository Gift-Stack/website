import React, { useState } from "react";

const routes = [
  {
    link: "#",
    name: "Learn",
  },
  {
    link: "#projects",
    name: "Showcase",
  },
  {
    link: "https://dev.to/iamgifted",
    name: "Blog",
    target: "__blank",
  },
  {
    link: "#companies",
    name: "Companies",
  },
  {
    link: "https://github.com/gift-stack",
    name: "GitHub",
    target: "__blank",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <>
      <div className="w-full z-50 fixed top-0 border-0">
        <div className="w-full bg-black border-0">
          <div className="w-full text-white py-4 px-3 max-w-5xl mx-auto border-0 flex items-center justify-between">
            <p className="">GiFTED!</p>
            <a
              href="https://www.linkedin.com/in/gift-opia-08739b194/"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              Check <b>GiFTED</b> on LinkedIn →
            </a>
          </div>
        </div>
        <div
          className="w-full bg-white"
          style={{
            backdropFilter: open ? "none" : "saturate(180%) blur(5px)",
            background: open ? "#fff" : "hsla(0,0%,100%,.8)",
          }}
        >
          <div className="text-black text-sm py-4 px-3 border-0 max-w-5xl mx-auto hidden md:flex items-center justify-between">
            <p className="logo text-4xl">GiFTED!</p>
            <a href="#">About</a>
            <a href="#projects">Showcase</a>
            <a
              href="https://blog.iamgifted.dev"
              target="__blank"
              rel="noreferrer noopener"
            >
              Blog
            </a>
            <a href="#companies">Companies</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="text-black text-sm py-4 px-3 border-0 max-w-5xl mx-auto md:hidden flex items-center justify-between">
            <a className="logo text-2xl">GiFTED!</a>
            <div className="flex items-center">
              <a className="mr-2" href="#contact">
                Contact
              </a>
              <button
                aria-label={!open ? "close menu" : "open menu"}
                className="flex navbar_menuButton"
                type="button"
                onClick={toggle}
              >
                <div
                  className={`menu-toggle_wrap ${
                    open && "menu-toggle_expanded"
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div className="sticky top-[120px] z-[2000] block md:hidden">
          <div className="mobile-menu-wrapper">
            <div className="flex w-screen max-w-[100vw] bg-white z-[2000] absolute top-0 left-0 right-0 bottom-0 overflow-y-scroll h-screen">
              <div className="px-3 w-full mx-auto">
                <ul>
                  {routes.map(({ name, link, target }) => (
                    <li key="name" onClick={toggle}>
                      <a
                        className="text-greyish-300 py-2.5 px-2 flex"
                        href={link}
                        target={target}
                        rel="noopener noreferrer"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
