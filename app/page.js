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


export default function Home() {

  useGSAP(()=>{
    // Animate about section on scroll trigger
    gsap.fromTo("#about", {opacity:0, y:100}, {opacity:1, y:0, duration:2, scrollTrigger:{trigger:"#about", start:"top 80%", end:"top 30%", scrub:1}})


  })
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

        {/* Make a move to top button */}
        <div className="fixed bottom-5 right-5 mover">
          <a href="#home">
            <button className="bg-[#2222228b] text-white p-2 rounded-full hover:bg-[#222222]">
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
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </a>
          <div className="hover-text">Move To Top</div>
        </div>
      </div>
    </>
  );
}
