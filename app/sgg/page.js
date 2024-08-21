"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimationComponent = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.from(boxRef.current, { 
      opacity: 0, 
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: boxRef.current, 
        start: 'top 80%', // when the top of the element is 80% from the top of the viewport
        end: 'top 30%', // when the top of the element is 30% from the top of the viewport
        scrub: 1, // smooth scrubbing, takes 1 second to catch up
        markers: true, // shows markers for start and end positions
      }
    });
  }, []);

  return (
    <div style={{ height: '150vh', padding: '50px' }}>
      <h1>Scroll down to see the animation</h1>
      <div 
        ref={boxRef} 
        style={{
          width: '100px', 
          height: '100px', 
          backgroundColor: 'blue', 
          margin: '200px auto'
        }}
      />
    </div>
  );
}

export default ScrollAnimationComponent;
