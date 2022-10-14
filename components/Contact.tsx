import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-24">
      <div className="grid md:grid-cols-2 items-center my-8 px-3 md:px-6  content">
        <aside>
          <h2 className="text-3xl mb-3.5 font-bold text-center md:text-left">
            GiFTED is getting better every day — don’t miss out on all the
            action.
          </h2>
          <h3 className="text-base text-center md:text-left font-normal">
            Join the Next.js newsletter and stay updated on new releases and
            features, guides, and case studies.
          </h3>
        </aside>
        <aside>
          <div className="text-center md:text-right relative">
            <form
              action-xhr="mailto:gkenny896@gmail.com"
              method="POST"
              target="_top"
              className="inline-block relative text-right "
            >
              <div className="w-[240px] max-w-full text-center m-auto transition-colors duration-100 ease-in ">
                <a href="mailto:gkenny896@gmail.com">
                  <button
                    type="button"
                    className="h-11 my-2.5 mb-0 font-medium w-full bg-black text-white border border-black relative inline-flex items-center justify-center cursor-pointer py-1 px-2 rounded-lg transition-colors duration-[2s] ease-in-out outline-none"
                  >
                    <span>Contact</span>
                  </button>
                </a>
              </div>
            </form>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
