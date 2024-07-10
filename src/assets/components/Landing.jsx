import { easeInOut, motion } from "framer-motion";
import React from "react";
import { MdOpacity } from "react-icons/md";

function Landing() {
  return (
    <div className="realtive w-full h-[150vh] md:h-[250vh] text-white">
      <div className=" w-full h-full overflow-hidden ">
        <img data-scroll data-scroll-speed="-1" 
          className=" h-full w-full object-cover"
          src="src/Photos/landingpage.webp"
          alt=""
        />
      </div>

      <div data-scroll data-scroll-speed=".2" className=" w-full absolute top-0">
        <div className=" max-w-screen-2xl px-5 py-5 md:py-10 md:px-12 md:ml-[15vh] ">
          <div className=" mt-[40vh] md:mt-[50vh] text-[2.8vh] md:text-[3.9vh] leading-6 md:leading-7 tracking-tight  ">
            {[
              "Global digital design studio partnering",
              "with brands and businesses that create",
              "exceptional experiences where people",
              "live, work, and unwind.",
            ].map((item, index) => {
              return (
                <p className=" overflow-hidden">
                  <motion.span
                    className=" inline-block origin-left"
                    initial={{ rotate: 90, y: "100%", Opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{ ease: easeInOut, duration: 1,delay:index*.5 }}
                  >
                    {item}
                  </motion.span>
                </p>
              );
            })}
          </div>

          <div className="mt-[5.8vh] md:mt-[13vh] text-[8.5vh] tracking-tighter md:font-medium  md:text-[36vh] font-medium leading-[8vh] md:leading-[30vh]">
          {[
              "Digital",
              "Design",
              "Experiences",
            ].map((item, index) => {
              return (
                <p className=" overflow-hidden">
                  <motion.span
                    className=" inline-block origin-left"
                    initial={{rotate:90, y: "40%", Opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{ ease: easeInOut, duration: 1,delay:3+index*.5 }}
                  >
                    {item}
                  </motion.span>
                </p>
              );
            })}
            
          </div>

          <div className=" mt-20 md:mt-[17vh]">
            <p className=" md:w-[70vh] md:text-[3.2vh] md:tracking-tighter">
              <span className="">
                We help experience-driven companies thrive by making their
                audience feel the refined intricacies of their brand and product
                in the digital space. Unforgettable journeys start with a click.
              </span>
            </p>

            <a
              className=" inline-block mt-5 md:mt-[14vh] border-b-[1px] border-zinc-100 pb-1"
              href=""
            >
              The Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
