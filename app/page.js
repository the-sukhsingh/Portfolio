"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import Navbar from "@/components/navbar";
import Contact from "@/components/contact";
import Cyl from "@/components/Cyl";

import { MantineProvider } from "@mantine/core";
import "@mantine/carousel/styles.css";
import { Carousel, CarouselSlide } from "@mantine/carousel";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

import { skills } from "@/Information";
import siteProps from "@/Information";
import { Social } from "@/Information";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const home = useRef(null);
  const about = useRef(null);

  let languages = skills.Languages;
  let skill = skills.skill;
  const [finalpath, setFinalpath] = useState(`M 20 50 Q 600 50 1200 50`);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    setFinalpath(
      `M 20 50 Q ${window.innerWidth / 2} 50 ${window.innerWidth - 20} 50`
    );

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useGSAP(() => {
    // Animate home section on scroll trigger
    gsap.fromTo(
      home.current,
      { opacity: 1 },
      {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: home.current,
          start: "top top",
          end: "bottom 10%",
          scrub: 1,
        },
      }
    );
    // Animate about section on scroll trigger
    gsap.fromTo(
      "#about",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );
    // Animate About section on scroll trigger
    gsap.fromTo(
      about.current,
      { opacity: 1 },
      {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: about.current,
          start: "top -22%",
          end: "bottom 5%%",
          scrub: 1,
        },
      }
    );
    // Animate Portfolio section on scroll trigger
    gsap.fromTo(
      "#portfolio",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: "#portfolio",
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );
    // Animate Left Project section on scroll trigger
    gsap.fromTo(
      ".leftt",
      { x: -1000, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".leftt",
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );
    // Animate Center section on scroll trigger
    gsap.fromTo(
      ".midd",
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".midd",
          start: "top 80%",
          end: "top 70%",
          scrub: 1,
        },
      }
    );
    // Animate Right section on scroll trigger
    gsap.fromTo(
      ".rightt",
      { x: 1000, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".rightt",
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );
  });

  return (
    <>
      <div className="w-[100vw] absolute hero">
        <div className="fixed z-10 w-full">
          <Navbar />
        </div>

        <div id="home">
          <>
            <div
              className="w-full h-[100vh] flex lg:justify-around md:items-center py-[5vh] md:py-0 text-white "
              ref={home}
            >
              <div className="w-full md:w-4/5 lg:w-2/5 h-[90%] md:h-3/4 p-5 md:p-9 flex flex-col gap-3 justify-around">
                <p className="text-xl font-semibold">Full Stack Developer</p>
                <h3 className="text-6xl md:text-[70px] font-bold">
                  Hello I&apos;m
                </h3>
                <strong>
                  <h2
                    className="text-[90px] md:text-[100px] text-[#9eddff] name"
                    id="name"
                  >
                    {siteProps.name}
                  </h2>
                </strong>
                <p className="text-xl">
                  As a Fresh Full-Stack Developer, I&apos;m Ready to Tackle Real
                  World Challenges with a Passion for Creating Seamiess Web And
                  Mobile Experiences.
                </p>
                <div className="flex gap-5">
                  <a href={"https://github.com/" + Social.github}>
                    <Image src="./github.svg" alt="" width={45} height={45} />
                  </a>
                  <a href={"https://linkedin.com/in/" + Social.linkedin}>
                    <Image src="./linkedin.svg" alt="" width={45} height={45} />
                  </a>
                </div>
              </div>
              <div className="w-2/5 hidden lg:block photo">
                <Image
                  src="./icon.jpeg"
                  alt="A sikh guy coding"
                  className="cover"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </>
        </div>
        <div
          className="partition"
          style={{ width: "100%" }}
          onMouseMove={(dets) => {
            var x = dets.clientX;
            var rect = dets.target.getBoundingClientRect();
            var y = dets.clientY - rect.top;
            var path = `M 20 50 Q ${x} ${y} ${window.innerWidth - 20} 50`;
            gsap.to("#part1", {
              duration: 0.2,
              attr: { d: path },
              ease: "power3.out",
            });
          }}
          onMouseLeave={() => {
            gsap.to("#part1", {
              attr: { d: finalpath },
              duration: 1.5,
              ease: "elastic.out(1,0.2)",
            });
          }}
        >
          <svg width="100%" height="100" xmlns="http://www.w3.org/2000/svg">
            <path id="part1" d={finalpath} stroke="white" fill="transparent" />
          </svg>
        </div>
        <div id="about">
          <>
            <div ref={about}>
              <div className="text-4xl text-center py-7 w-fit mx-auto">
                About Me
              </div>
              <div className="w-[100%] lg:w-4/5 lg:min-h-[80vh] flex justify-around gap-5 items-center m-auto bg-gray-900 mb-12 p-5 rounded-lg flex-col lg:flex-row ">
                <div className="h-[50vh] w-full lg:w-[50%] lg:h-[82%] text-[20px] bg-gray-800 p-8 rounded-md overflow-y-auto">
                  I am{" "}
                  <strong className="text-3xl text-[#b3f5ef] italic ">
                    {siteProps.name}
                  </strong>
                  , currently pursuing my <b> {siteProps.education}</b>. My
                  journey into the world of technology has been driven by
                  curiosity and a strong desire to create impactful digital
                  experiences. With a solid foundation in programming languages
                  like {skills.Languages.slice(0, -1).join(", ")} and{" "}
                  {languages.slice(-1)}, I have learned the importance of clean
                  code, responsive design, and user experience. Beyond coding, I
                  am always eager to learn new technologies and best practices.
                  I’m constantly challenging myself to solve complex problems
                  and contribute to the tech community.
                </div>
                <div className="w-full lg:w-1/2 min-h-[82%] grid grid-cols-4 justify-center items-center gap-[1rem] text-[22px] bg-gray-800 p-8 rounded-md">
                  {Object.keys(skill).map((keyy, value) => {
                    if (skill[keyy]) {
                      return (
                        <>
                          <div key={keyy}>
                            <Image
                              className="skillLogo"
                              src={`logos/${keyy.toLowerCase()}.svg`}
                              width={100}
                              height={100}
                              alt=""
                              title={keyy[0].toUpperCase() + keyy.substring(1)}
                            />
                          </div>
                        </>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </>
        </div>
        <div
          className="partition"
          style={{ width: "100%" }}
          onMouseMove={(dets) => {
            var x = dets.clientX;
            var rect = dets.target.getBoundingClientRect();
            var y = dets.clientY - rect.top;
            var path = `M 20 50 Q ${x} ${y} ${window.innerWidth - 20} 50`;
            gsap.to("#part2", {
              duration: 0.2,
              attr: { d: path },
              ease: "power3.out",
            });
          }}
          onMouseLeave={() => {
            gsap.to("#part2", {
              attr: { d: finalpath },
              duration: 1.5,
              ease: "elastic.out(1,0.2)",
            });
          }}
        >
          <svg width="100%" height="100" xmlns="http://www.w3.org/2000/svg">
            <path id="part2" d={finalpath} stroke="white" fill="transparent" />
          </svg>
        </div>
        <div id="portfolio">
          <>
            <div className="w-[100vw]">
              <MantineProvider>
                <div className="w-[100vw] min-h-[80vh] flex flex-col gap-8 justify-center">
                  <div className="w-full text-4xl text-center py-5">
                    Portfolio
                  </div>
                  <div className="m-0 p-0">
                    <Cyl />
                  </div>
                  <div className="w-[100vw] flex justify-around flex-col md:flex-row flex-wrap gap-2 overflow-x-hidden ">
                    <div className="w-full md:w-1/2 lg:w-[30%]  relative border rounded-lg p-3 leftt">
                      <div className="absolute top-2 right-2 z-10 bg-black p-2 rounded-xl cursor-pointer">
                        <Image
                          src="./share.svg"
                          width={30}
                          height={30}
                          alt="Share"
                          className="hover:scale-105 active:scale-95"
                          // on hover show Go to project
                          title="Go to project"
                          onClick={() => {
                            window.open(
                              "https://the-sukhsingh.github.io/Todo-app/"
                            );
                          }}
                        />
                        <Image
                          src="./github.svg"
                          width={30}
                          height={30}
                          className="hover:scale-105 active:scale-95"
                          alt="Github"
                          title="Github Repo"
                          onClick={() => {
                            window.open(
                              "https://github.com/the-sukhsingh/todo-app"
                            );
                          }}
                        />
                      </div>
                      <Carousel withIndicators loop>
                        <CarouselSlide>
                          <Image
                            src="./projects/todo/todo-web.jpeg"
                            width={600}
                            height={400}
                            alt=""
                            style={{
                              objectFit: "contain",
                              borderRadius: "10px",
                              height: "200px",
                              width: "100%",
                            }}
                          />
                        </CarouselSlide>
                        <CarouselSlide>
                          <Image
                            src="./projects/todo/todo-mobile.jpeg"
                            width={100}
                            height={200}
                            alt=""
                            style={{
                              height: "200px",
                              width: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </CarouselSlide>
                      </Carousel>
                      <div className="text-xl text-center py-2 bg-[#252727] rounded-md">
                        Todo App
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-[30%]  relative border rounded-lg p-3 midd">
                      <div className="absolute top-2 right-2 z-10 bg-black p-2 rounded-xl cursor-pointer">
                        <Image
                          src="./share.svg"
                          width={30}
                          height={30}
                          alt="Share"
                          className="hover:scale-105 active:scale-95"
                          title="Go to project"
                          onClick={() => {
                            window.open(
                              "https://the-sukhsingh.github.io/PassOP/"
                            );
                          }}
                        />
                        <Image
                          src="./github.svg"
                          width={30}
                          height={30}
                          alt="Github"
                          className="hover:scale-105 active:scale-95"
                          title="Github Repo"
                          onClick={() => {
                            window.open(
                              "https://github.com/the-sukhsingh/PassOP"
                            );
                          }}
                        />
                      </div>
                      <Carousel withIndicators loop>
                        <CarouselSlide>
                          <Image
                            src="./projects/passop/passop-web.jpeg"
                            width={600}
                            height={400}
                            alt=""
                            style={{
                              objectFit: "contain",
                              borderRadius: "10px",
                              height: "200px",
                              width: "100%",
                            }}
                          />
                        </CarouselSlide>
                        <CarouselSlide>
                          <Image
                            src="./projects/passop/passop-mobile.jpeg"
                            width={100}
                            height={200}
                            alt=""
                            style={{
                              height: "200px",
                              width: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </CarouselSlide>
                      </Carousel>
                      <div className="text-xl text-center py-2 bg-[#252727] rounded-md">
                        PassOP
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-[30%]  relative border rounded-lg p-3 rightt">
                      <div className="absolute top-2 right-2 z-10 bg-black p-2 rounded-xl cursor-pointer">
                        <Image
                          src="./share.svg"
                          width={30}
                          height={30}
                          className="hover:scale-105 active:scale-95"
                          alt="Share"
                          // on hover show Go to project
                          title="Go to project"
                          onClick={() => {
                            window.open(
                              "https://the-sukhsingh.github.io/Gamehub/"
                            );
                          }}
                        />
                        <Image
                          src="./github.svg"
                          width={30}
                          height={30}
                          alt="Github"
                          className="hover:scale-105 active:scale-95"
                          title="Github Repo"
                          onClick={() => {
                            window.open(
                              "https://github.com/the-sukhsingh/Gamehub"
                            );
                          }}
                        />
                      </div>
                      <Carousel withIndicators loop>
                        <CarouselSlide>
                          <Image
                            src="./projects/gamehub/gamehub-home.jpeg"
                            width={600}
                            height={400}
                            alt=""
                            style={{
                              objectFit: "contain",
                              borderRadius: "10px",
                              height: "200px",
                              width: "100%",
                            }}
                          />
                        </CarouselSlide>
                        <CarouselSlide>
                          <Image
                            src="./projects/gamehub/tic-light.jpeg"
                            width={600}
                            height={400}
                            alt=""
                            style={{
                              height: "200px",
                              width: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </CarouselSlide>
                        <CarouselSlide>
                          <Image
                            src="./projects/gamehub/tic-dark.jpeg"
                            width={600}
                            height={400}
                            alt=""
                            style={{
                              height: "200px",
                              width: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </CarouselSlide>
                        <CarouselSlide>
                          <Image
                            src="./projects/gamehub/bingo-light.jpeg"
                            width={600}
                            height={400}
                            alt=""
                            style={{
                              height: "200px",
                              width: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </CarouselSlide>
                        <CarouselSlide>
                          <Image
                            src="./projects/gamehub/bingo-dark.jpeg"
                            width={600}
                            height={400}
                            alt=""
                            style={{
                              height: "200px",
                              width: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </CarouselSlide>
                      </Carousel>
                      <div className="text-xl text-center py-2 bg-[#252727] rounded-md">
                        Gamehub
                      </div>
                    </div>
                  </div>
                </div>
              </MantineProvider>
            </div>
          </>
        </div>
        <div
          className="partition"
          style={{ width: "100%" }}
          onMouseMove={(dets) => {
            var x = dets.clientX;
            var rect = dets.target.getBoundingClientRect();
            var y = dets.clientY - rect.top;
            var path = `M 20 50 Q ${x} ${y} ${window.innerWidth - 20} 50`;
            gsap.to("#part3", {
              duration: 0.2,
              attr: { d: path },
              ease: "power3.out",
            });
          }}
          onMouseLeave={() => {
            gsap.to("#part3", {
              attr: { d: finalpath },
              duration: 1.5,
              ease: "elastic.out(1,0.2)",
            });
          }}
        >
          <svg width="100%" height="100" xmlns="http://www.w3.org/2000/svg">
            <path id="part3" d={finalpath} stroke="white" fill="transparent" />
          </svg>
        </div>
        <div id="contact">
          <Contact />
        </div>

        <div
          className={`fixed bottom-5 right-5 mover ${
            scrollY === 0 ? "hidden" : ""
          }`}
        >
          <button
            className="bg-[#2222228b] text-white p-2 rounded-full hover:bg-[#222222]"
            onClick={() => {
              gsap.to(window, {
                duration: 1,
                scrollTo: "#home",
                ease: "expo.inOut",
              });
            }}
          >
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
        </div>
        <div className="hover-text">Move To Top</div>
      </div>
    </>
  );
}
