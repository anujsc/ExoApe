// const cur = useRef(null);
//   const foo = useRef(null);

//   const [first, setfirst] = useState({
//     x: 0,
//     y: 0,
//   });

//   const cursor = () => {
//     gsap.to(cur.current, {
//       x: first.x,
//       y: first.y,
//       ease: Power4,
//       duration: 0.5,
//     });
//   };

//   const foocur = () => {
//     gsap.to(cur.current, {
//       opacity: 0,
//     });
//   };

//   const foocur1 = () => {
//     gsap.to(cur.current, {
//       opacity: 1,
//     });
//   };

//   useEffect(() => {
//     const mouse = (e) => {
//       setfirst({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };

//     window.addEventListener("mousemove", mouse);
//     return () => {
//       window.removeEventListener("mousemove", mouse);
//     };
//   }, []);

//   <div onMouseMove={() => cursor()} className=" w-full  ">
//       <div
//         ref={cur}
//         className="cursor z-[9999] fixed bg-black w-[11vh] h-[11vh] rounded-full"
//       ></div>
//     </div>