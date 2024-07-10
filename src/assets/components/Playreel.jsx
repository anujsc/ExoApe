import { useGSAP } from "@gsap/react";
import { cubicBezier } from "framer-motion";
import gsap,{ScrollTrigger,Power4} from 'gsap/all';
import React, { useEffect, useRef } from "react";


function Playreel() {
  
  gsap.registerPlugin(useGSAP);

  const parent=useRef(null)
  const video=useRef(null)
  const play=useRef(null)
  const reel=useRef(null)

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
    var tl=gsap.timeline({
      scrollTrigger:{
        trigger:parent.current,
        top:"0 0",
        pin:true,
        scrub:1
      },

    });
    tl.to(video.current,{
      width:"90%",
      height:"91%",
      ease: Power4,
 
    },'a')
    .to(play.current,{
      x:"115%",
      ease:Power4,
   
    },'a')
    .to(reel.current,{
      x:"-115%",
      ease:Power4,
      
    },'a')
  })
  



  return (
    <div ref={parent} className=" relative w-full h-screen mt-[19vh] bg-black opacity-90">
      vi<div ref={video} className=" w-36 md:w-96 aspect-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <video muted loop autoPlay className=" opacity-70 w-full h-full scale-[1.1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " src="src/Photos/Playreel.mp4"></video>
      </div>
      
      <div className="overlay absolute w-full h-full py-20 text-white flex flex-col justify-between ">
        <div className=" w-full flex items-center justify-center gap-3 ">
          <svg
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
          <h3>Work in motion</h3>
        </div>
        <h1 className=" w-full flex justify-center gap-32 md:gap-[80vh] items-center ">
          <div ref={play} className=" text-4xl md:text-9xl md:font-medium font-light">Play</div>
          <div ref={reel} className=" text-4xl md:text-9xl md:font-medium font-light">Reel</div>
        </h1>
        <p className=" text-center px-10 text-sm md:text-[2.7vh] ">
          Our work is best experienced in motion. Don’t forget to put on your
          headphones.
        </p>
      </div>
    </div>
  );
}

export default Playreel;
