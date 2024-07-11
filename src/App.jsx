import { useEffect, useRef, useState } from "react";
import gsap, { Power4 } from "gsap/all";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./assets/components/Nav";
import Landing from "./assets/components/Landing";
import Work from "./assets/components/Work";
import Playreel from "./assets/components/Playreel";
import LocomotiveScroll from "locomotive-scroll";
import Slide from "./assets/components/Slide";
import Spread from "./assets/components/Spread";
import Footer from "./assets/components/Footer";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const cur = useRef(null);
  const foo = useRef(null);

  const [first, setfirst] = useState({
    x: 0,
    y: 0,
  });

  const cursor = () => {
    gsap.to(cur.current, {
      x: first.x,
      y: first.y,
      ease: Power4,
      duration: 0.5,
    });
  };

  const foocur = () => {
    gsap.to(cur.current, {
      opacity: 0,
    });
  };

  const foocur1 = () => {
    gsap.to(cur.current, {
      opacity: 1,
    });
  };

  useEffect(() => {
    const mouse = (e) => {
      setfirst({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouse);
    return () => {
      window.removeEventListener("mousemove", mouse);
    };
  }, []);

  return (
    <div onMouseMove={() => cursor()} className=" w-full  ">
      <div
        ref={cur}
        className="cursor z-[9999] fixed bg-black w-[11vh] h-[11vh] rounded-full"
      ></div>

      <Nav />
      <Landing />
      <Work />
      <Playreel />
      <Slide />
      <Spread />
      <Footer />
    </div>
  );
}

export default App;
