import React, { useState } from "react";
import Link from "next/link";

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
            backdropFilter: "saturate(180%) blur(5px)",
            background: "hsla(0,0%,100%,.8)",
          }}
        >
          <div className="text-black text-sm py-4 px-3 border-0 max-w-5xl mx-auto hidden md:flex items-center justify-between">
            <p className="logo text-4xl">GiFTED!</p>
            <a href="#">Showcase</a>
            <a href="#blog">Blog</a>
            <a href="#companies">Companies</a>
            <a href="#">About</a>
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
                  <li>
                    <a
                      className="text-greyish-300 py-2.5 px-2 flex"
                      href="/learn"
                    >
                      Learn
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-greyish-300 py-2.5 px-2 flex"
                      title="Showcase"
                      href="/showcase"
                    >
                      Showcase
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-greyish-300 py-2.5 px-2 flex"
                      title="Documentation"
                      href="/docs/getting-started"
                    >
                      Docs
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-greyish-300 py-2.5 px-2 flex"
                      href="/blog"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-greyish-300 py-2.5 px-2 flex"
                      href="/analytics"
                    >
                      Analytics
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-greyish-300 py-2.5 px-2 flex"
                      href="/commerce"
                    >
                      Commerce
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-greyish-300 py-2.5 px-2 flex"
                      href="/examples"
                    >
                      Examples
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-greyish-300 py-2.5 px-2 flex"
                      href="https://vercel.com/contact/sales?utm_source=next-site&amp;utm_medium=navbar&amp;utm_campaign=next-website"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Enterprise
                    </a>
                  </li>
                  <li>
                    <a href="/learn">
                      <a
                        className="text-greyish-300 py-2.5 px-2 flex"
                        href="https://github.com/vercel/next.js"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        GitHub
                      </a>
                    </a>
                  </li>
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
