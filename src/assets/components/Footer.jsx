import React from "react";

function Footer() {
  return (
    <div className=" hidden md:block overflow-hidden h-full w-full">
      <div
        data-scroll
        data-scroll-speed="-1"
        className=" relative text-[#e0ccbb] h-screen w-screen bg-[#070707]"
      >
        <div
          data-scroll
          data-scroll-speed=".5"
          className=" p-24 flex flex-col gap-[13vh]"
        >
          <div className=" text-[24vh] leading-[20vh] tracking-tight">
            <h1>Our</h1>
            <h1>Story</h1>
          </div>

          <div className=" text-[4vh] tracking-tight leading-9">
            <p>The story behind Exo Ape is one of</p>
            <p>exploration, creativity and curiosity.</p>
          </div>

          <hr className=" bg-[#e0ccbb] dark:bg-[#e0ccbb] h-[1px] opacity-35" />
        </div>

        <div>
          <video
            autoPlay
            muted
            loop
            className=" w-[65%] absolute left-[68vh] top-[10vh] "
            src="https://www.exoape.com/video/video-6.mp4"
          ></video>
        </div>
      </div>
    </div>
  );
}

export default Footer;
