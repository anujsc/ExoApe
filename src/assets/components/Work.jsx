import { cubicBezier, easeInOut, motion } from "framer-motion";
import React from "react";
function Work() {
  return (
    <div className=" max-w-screen-2xl px-5 md:px-10 md:h-[365vh]">
      <div className="star flex gap-3 mt-[9vh] md:absolute md:translate-x-[135vh] md:translate-y-[48vh]">
        <svg data-scroll data-scroll-speed=".1"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon w-4"
          data-v-669b4a84=""
        >
          <path
            d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
            fill="currentColor"
            data-v-669b4a84=""
          ></path>
        </svg>
        <h1 data-scroll data-scroll-speed=".1">Featured Project</h1>
      </div>

      <h1 className=" overflow-hidden py-[1vh] text-[8vh] font-medium tracking-tighter md:ml-[29vh] md:text-[33vh]">
        <motion.span
        data-scroll data-scroll-speed=".1"
         className=" inline-block origin-left"
         initial={{ rotate: 90, y: "50%", Opacity: 0 }}
         whileInView={{ rotate: 0, y: 0, opacity: 1 }}
         transition={{ ease:cubicBezier(0.32, 0, 0.67, 0), duration: .6 }}
         viewport={{once: true}}
        > Work
        </motion.span>
      </h1>

      <div className=" text  md:absolute md:translate-x-[135vh] md:translate-y-[15vh] md:w-[50vh] md:text-[4vh] md:leading-7">
        <p data-scroll data-scroll-speed=".1" className=" mt-1 opacity-85">
          Highlights of cases that we passionately built with forward-thinking
          clients and friends over the years.
        </p>
      </div>

      <div className="1">
        <div className=" video-1 w-full h-[361.9px] mt-[5vh] ">
          <motion.img
          initial={{opacity: 1}}
          whileHover={{opacity:0}}
            className=" hidden md:block z-[2] md:h-[800px] md:w-[630px] md:ml-[29vh] absolute "
            src="src/Photos/work-1.webp"
            alt=""
          />
          <video
            className=" block z-[1] md:h-[800px] md:w-[630px] md:ml-[29vh]"
            autoPlay
            loop
            muted
            src="src/Photos/work-1-v.mp4"
          ></video>
        </div>
        <motion.div
          whileHover={{
            opacity: 100,
            transition: { duration: 1.5, transition: "cubicBezier" },
          }}
          className="text-1 w-full mt-[6vh] md:opacity-0 font-medium tracking-tight md:translate-x-[29vh] md:translate-y-[57vh] md:absolute "
        >
          <p className=" text-[2.3vh] ">Coloumbia Pictures</p>
          <p className=" text-[1.8vh] opacity-50">
            Celebrating a Centuary of Cinema
          </p>
        </motion.div>
      </div>

      <div className="2">
        <div className=" video-2 w-full h-[361.9px] mt-[5vh] ">
          <motion.img
          initial={{opacity: 1}}
          whileHover={{opacity:0}}
            className=" hidden  md:z-[2] md:block md:h-[70vh] md:translate-x-[135vh] md:translate-y-[9vh] md:absolute  "
            src="src/Photos/work-2.webp"
            alt=""
          />
          <video
            className=" z-[1] block  md:h-[70vh] md:translate-x-[135vh] md:translate-y-[9vh] md:absolute"
            autoPlay
            loop
            muted
            src="src/Photos/work-2-v.mp4"
          ></video>
        </div>
        <motion.div
          whileHover={{
            opacity: 100,
            transition: { duration: 1.5, transition: "cubicBezier" },
          }}
          className="text-2 w-full mt-[6vh] md:opacity-0 font-medium tracking-tight md:translate-x-[135vh] md:translate-y-[24vh] md:absolute "
        >
          <p className=" text-[2.3vh] ">Rino & Pelle</p>
          <p className=" text-[1.8vh] opacity-50">Effortless chic Lifestyle</p>
        </motion.div>
      </div>

      <div className="3">
        <div className=" video-3 w-full h-[361.9px] mt-[5vh] ">
          <motion.img
          initial={{opacity: 1}}
          whileHover={{opacity:0}}
            className=" hidden z-[2] md:block w-[75vh] md:absolute translate-x-[85vh]  translate-y-[52vh]"
            src="src/Photos/work-3.webp"
            alt=""
          />
          <video
            className=" block z-[1] md:w-[75vh] md:absolute md:translate-x-[85vh]  md:translate-y-[52vh]"
            autoPlay
            loop
            muted
            src="src/Photos/work-3-v.mp4"
          ></video>
        </div>
        <motion.div
          whileHover={{
            opacity: 100,
            transition: { duration: 1.5, transition: "cubicBezier" },
          }}
          className="text-3  md:opacity-0 mt-[6vh] font-medium tracking-tight md:absolute w-full md:translate-x-[85vh]  md:translate-y-[90vh] "
        >
          <p className=" text-[2.3vh] ">Aebele Interios </p>
          <p className=" text-[1.8vh] opacity-50">
            Luxurious design experience
          </p>
        </motion.div>
      </div>

      <div className="4">
        <div className=" video-4 w-full h-[361.9px] mt-[5vh] ">
          <motion.img
          initial={{opacity: 1}}
          whileHover={{opacity:0}}
            className=" hidden z-[2] md:block md:w-[42vh] translate-x-[25vh] translate-y-[57vh] md:absolute "
            src="src/Photos/work-4.webp"
            alt=""
          />
          <video
            className=" block  z-[1] md:w-[42vh] md:translate-x-[25vh] md:translate-y-[57vh] md:absolute"
            autoPlay
            loop
            muted
            src="src/Photos/work-4-v.mp4"
          ></video>
        </div>
        <motion.div
          whileHover={{
            opacity: 100,
            transition: {
              duration: 1.5,
              transition: "cubicBezier(0.86, 0, 0.07, 1)",
            },
          }}
          className="text-4 w-full mt-[6vh] opacity-100 font-medium tracking-tight md:opacity-0 md:translate-x-[25vh] md:translate-y-[54vh] absolute "
        >
          <p className=" text-[2.3vh] ">Pixilflakes</p>
          <p className=" text-[1.8vh] opacity-50">
            Architectural marketing agency
          </p>
          <p className="hidden md:h-[25vh]"></p>
        </motion.div>
      </div>
    </div>
  );
}

export default Work;
