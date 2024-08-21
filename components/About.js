import React from "react";
import { useRef } from "react";
import siteProps from "@/Information";
import { skills } from "@/Information";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const About = () => {
  const about = useRef(null);
  let languages = skills.Languages;
  let skill = skills.skill;

  useGSAP(() => {
    // Animate About section on scroll trigger
    gsap.fromTo(
      about.current,
      { opacity: 1, y: 20 },
      {
        opacity: 0,
        y: -50,
        duration: 1,
        scrollTrigger: {
          trigger: about.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
  });

  return (
    <>
    <div ref={about}>

      <div className="text-4xl text-center my-8 w-fit mx-auto" >
        About Me
      </div>
      <div className="w-[90%] lg:w-4/5 lg:min-h-[80vh] flex justify-around gap-5 items-center m-auto bg-gray-900 my-12 p-5 rounded-lg flex-col lg:flex-row ">
        <div className="h-[50vh] lg:w-[50%] lg:h-[82%] text-[20px] bg-gray-800 p-8 rounded-md overflow-y-scroll lg:overflow-hidden">
          I'm{" "}
          <b className="text-3xl text-[#b3f5ef] italic ">{siteProps.name}</b>,
          currently pursuing my <b> {siteProps.education}</b>. My journey into
          the world of technology has been driven by curiosity and a strong
          desire to create impactful digital experiences. With a solid
          foundation in programming languages like{" "}
          {skills.Languages.slice(0, -1).join(", ")} and {languages.slice(-1)},
          I've learned the importance of clean code, responsive design, and user
          experience. Beyond coding, I'm always eager to learn new technologies
          and best practices. I’m constantly challenging myself to solve complex
          problems and contribute to the tech community.
        </div>
        <div className="w-full  lg:w-1/2 min-h-[82%] grid grid-cols-4 justify-center items-center gap-[1rem] text-[22px] bg-gray-800 p-8 rounded-md">
          {Object.keys(skill).map((key) => {
            if (skill[key]) {
              return (
                <div className="hover-div">
                  <img
                    className="skillLogo"
                    src={`logos/${key.toLowerCase()}.svg`}
                    alt=""
                  />
                  <div className="hover-box">{key.toUpperCase()}</div>
                </div>
              );
            }
          })}
          {/* {Object.keys(skill).map((key) => {
            if (skill[key]) {
              return (
                <div className="hover-div">
                  <img
                    className="skillLogo"
                    src={`logos/${key.toLowerCase()}.svg`}
                    alt=""
                  />
                  <div className="hover-box">{key.toUpperCase()}</div>
                </div>
              );
            }})
          } */}
        </div>
      </div>
            
    </div>
    </>
  );
};

export default About;
