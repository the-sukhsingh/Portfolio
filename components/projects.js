import React from "react";
import { Portfolio } from "@/Information";
import { Rethink_Sans } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";



const projects = () => {
  const about = useRef(null);
  const port = Portfolio.map((item) => {
    return item;
  });
  const i = port.length;

  useGSAP(()=>{
    // Animate about section on scroll trigger
    gsap.fromTo("#portfolio", {opacity:0}, {opacity:1, duration:2, scrollTrigger:{trigger:"#portfolio", start:"top 80%", end:"top 30%", scrub:1}})


  })
  useGSAP(() => {
    // Animate About section on scroll trigger
    gsap.fromTo(
      about.current,
      { opacity: 1,},
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
  });

  useGSAP(() => {
    // Animate About section on scroll trigger
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
          end: "top 30%",
          scrub: 1,
        },
      }
    );
  });

  useGSAP(() => {
    // Animate About section on scroll trigger
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
  });

  useGSAP(() => {
    // Animate About section on scroll trigger
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
          end: "top 30%",
          scrub: 1,
        },
      }
    );
  }
  );

  return (
    <>
      <MantineProvider>
        <div className="min-h-[80vh] flex flex-col gap-8 justify-center" ref={about}>
        <div className="w-full text-4xl text-center py-5">Portfolio</div>

        <div className="w-full  flex justify-around flex-col md:flex-row flex-wrap gap-2 ">
          <div className="w-full md:w-1/2 lg:w-[30%]  relative border rounded-lg p-3 leftt">
            <div className="absolute top-2 right-2 z-10 bg-black p-2 rounded-xl cursor-pointer">
              <Image
                src="/share.svg"
                width={30}
                height={30}
                alt="Share"
                className="hover:scale-105 active:scale-95"
                // on hover show Go to project
                title="Go to project"
                onClick={() => {
                  window.open("https://the-sukhsingh.github.io/Todo-app/");
                }}
              />
              <Image
                src="/github.svg"
                width={30}
                height={30}
                className="hover:scale-105 active:scale-95"
                alt="Github"
                title="Github Repo"
                onClick={() => {
                  window.open("https://github.com/the-sukhsingh/todo-app");
                }}
              />
            </div>
            <Carousel withIndicators={true} loop>
              <CarouselSlide>
                <img
                  src="./projects/todo/todo-web.jpeg"
                  alt=""
                  style={{
                    objectFit: "contain",
                    borderRadius: "10px",
                    height: "200px",
                  }}
                />
              </CarouselSlide>
              <CarouselSlide>
                <img
                  src="./projects/todo/todo-mobile.jpeg"
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
                src="/share.svg"
                width={30}
                height={30}
                alt="Share"
                className="hover:scale-105 active:scale-95"
                title="Go to project"
                onClick={() => {
                  window.open("https://the-sukhsingh.github.io/PassOP/");
                }}
              />
              <Image
                src="/github.svg"
                width={30}
                height={30}
                alt="Github"
                className="hover:scale-105 active:scale-95"
                title="Github Repo"
                onClick={() => {
                  window.open("https://github.com/the-sukhsingh/PassOP");
                }}
              />
            </div>
            <Carousel withIndicators loop>
              <CarouselSlide>
                <img
                  src="./projects/passop/passop-web.jpeg"
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
                <img
                  src="./projects/passop/passop-mobile.jpeg"
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
                src="/share.svg"
                width={30}
                height={30}
                className="hover:scale-105 active:scale-95"
                alt="Share"
                // on hover show Go to project
                title="Go to project"
                onClick={() => {
                  window.open("https://the-sukhsingh.github.io/Gamehub/");
                }}
              />
              <Image
                src="/github.svg"
                width={30}
                height={30}
                alt="Github"
                className="hover:scale-105 active:scale-95"
                title="Github Repo"
                onClick={() => {
                  window.open("https://github.com/the-sukhsingh/Gamehub");
                }}
              />
            </div>
            <Carousel withIndicators loop>
              <CarouselSlide>
                <img
                  src="./projects/gamehub/gamehub-home.jpeg"
                  alt=""
                  style={{
                    objectFit: "contain",
                    borderRadius: "10px",
                    height: "200px",
                  }}
                />
              </CarouselSlide>
              <CarouselSlide>
                <img
                  src="./projects/gamehub/tic-light.jpeg"
                  alt=""
                  style={{
                    height: "200px",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </CarouselSlide>
              <CarouselSlide>
                <img
                  src="./projects/gamehub/tic-dark.jpeg"
                  alt=""
                  style={{
                    height: "200px",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </CarouselSlide>
              <CarouselSlide>
                <img
                  src="./projects/gamehub/bingo-dark.jpeg"
                  alt=""
                  style={{
                    height: "200px",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </CarouselSlide>
              <CarouselSlide>
                <img
                  src="./projects/gamehub/bingo-dark.jpeg"
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
    </>
  );
};

export default projects;
