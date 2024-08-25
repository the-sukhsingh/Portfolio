import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";
import siteProps from "@/Information";
import { Social } from "@/Information";
const Home = () => {
  const home = useRef(null);
  useGSAP(() => {
    // Animate home section on scroll trigger
    gsap.fromTo(
      home.current,
      { opacity: 1},
      {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: home.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
  });

  return (
    <>
      <div
        className="w-full h-[100vh] flex lg:justify-around md:items-center py-[5vh] md:py-0 text-white "
        ref={home}
      >
        <div className="w-full md:w-4/5 lg:w-2/5 h-[90%] md:h-3/4 p-5 md:p-9 flex flex-col gap-3 justify-around">
          <p className="text-xl font-semibold">Full Stack Developer</p>
          <h3 className="text-6xl md:text-[70px] font-bold">Hello I&apos;m</h3>
          <h2 className="text-[90px] md:text-[100px] text-[#9eddff] name" id="name">
            {siteProps.name}
          </h2>
          <p className="text-xl">
            As a Fresh Full-Stack Developer, I&apos;m Ready to Tackle Real World
            Challenges with a Passion for Creating Seamiess Web And Mobile
            Experiences.
          </p>
          <div className="flex gap-5">
            <a href={"https://github.com/" + Social.github}>
              <img src="github.svg" alt="" width={45} height={45} />
            </a>
            <a href={"https://linkedin.com/in/" + Social.linkedin}>
              <img src="linkedin.svg" alt="" width={45} height={45} />
            </a>
          </div>
        </div>
        <div className="w-2/5 hidden lg:block photo">
          <img src="icon.jpeg" alt="A sikh guy coding" className="cover" />
        </div>
      </div>
    </>
  );
};

export default Home;
