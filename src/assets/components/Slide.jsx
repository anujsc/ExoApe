import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap,{ScrollTrigger,Power4} from 'gsap/all';

function Slide() {
  const parent=useRef(null);
  const img1=useRef(null);
  const img2=useRef(null)
  const img3=useRef(null)
  const img4=useRef(null)

  gsap.registerPlugin(useGSAP);

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
    var t2=gsap.timeline({
      scrollTrigger:{
        trigger:parent.current,
        top:"0 0",
        scrub:1
      },
    });
    t2.to(img1.current,{
      x:"50%",
      ease: Power4,
        
    },'a')
    .to(img2.current,{
      x:"-35%",
      ease: Power4,
        
    },'a')
    .to(img3.current,{
      x:"-60%",
      ease: Power4,
        
    },'a')
    .to(img4.current,{
      x:"70%",
      ease: Power4,
        
    },'a')
  })
  return (
    <div ref={parent} className=" relative h-[80vh] md:h-[160vh] w-full overflow-hidden">
      <div className="h-full w-full flex justify-center absolute top-[20vh] md:top-[30vh]  ">
        <img 
          className=" w-[134px] h-[226px] md:h-[100vh] md:w-[55vh] "
          src="src/Photos/slide-3.webp"
          alt=""
        />
      </div>

      <div className=" absolute h-full w-full top-[23vh] left-[36vh] md:top-[40vh] md:left-[60%] ">
        <img ref={img1} className=" w-[70.03px] md:w-[25vh]" src="src/Photos/slide-1.webp" alt="" />
      </div>

      <div className=" absolute top-[33vh] md:top-[58vh] h-full w-full left-[2vh] md:left-[15.6%] ">
        <video ref={img2}
          autoPlay
          muted
          loop
          className=" w-[132px] md:w-[58vh]"
          src="src/Photos/slide-v-1.mp4"
        ></video>
      </div>

      <div className=" absolute top-[52vh] md:top-[66%] left-[-1vh] md:left-[18%] h-full w-full ">
        <img ref={img3} className=" w-[125px] md:w-[55vh]" src="src/Photos/slide-2.webp" alt="" />
      </div>

      <div className=" absolute top-[52vh] md:top-[60%] left-[40vh] md:left-[57%] h-full w-full ">
        <video ref={img4}
          autoPlay
          muted
          loop
          className=" scale-[1.2] w-[90px] md:w-[47vh] md:h-[80vh] "
          src="src/Photos/slide-v-2.mp4"
        ></video>
      </div>


    </div>
  );
}

export default Slide;
