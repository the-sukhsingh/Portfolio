"use client";
import Navbar from "@/components/navbar";
import Homee from "@/components/home";
import Projects from "@/components/projects";
import About from "@/components/About";
import Contact from "@/components/contact";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useState, useEffect,useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";

import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin)


// import { Text, Code } from '@mantine/core';
import { useMouse, useSetState } from '@mantine/hooks';

export default function Home() {

  const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);





  return (
    <>
      <div className="w-[99vw] absolute hero">
        <div className="fixed z-10 w-[100vw]">
          <Navbar />
        </div>
        <div id="home">
          <Homee />
        </div>
        <div className="partition"></div>
        <div id="about">
          <About />
        </div>
        <div className="partition"></div>
        <div id="portfolio">
          <Projects />
        </div>
        <div className="partition"></div>
        <div id="contact">
          <Contact />
        </div>



<div className={`fixed bottom-5 right-5 mover ${scrollY === 0 ? 'hidden' : ''}`}>

            <button className="bg-[#2222228b] text-white p-2 rounded-full hover:bg-[#222222]" onClick={()=>{
              gsap.to(window, {duration:1, scrollTo:"#home", ease:"expo.inOut"})
            }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18" />

              </svg>
            </button>
          </div>
          <div className="hover-text">Move To Top</div>
      </div>

      
    </>
  );
}
