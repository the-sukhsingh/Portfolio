import React from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const navbar = () => {
  const scrollToSection = (section) => {
    gsap.to(window, { duration: 1, scrollTo: section, ease: "power2.out" });
  };
  return (
    <>
      <nav className="w-[100vw] flex justify-around items-center h-12 bg-[#222222a6]">
        <ul className="flex gap-5 text-[16px]">
          {/* <li className='hover:text-[#a6a3a3] active:scale-95' onClick={()=>{
              scrollToSection("#home")
            }}><Link href={"#home"}>Home</Link></li>
            <li className='hover:text-[#a6a3a3] active:scale-95' onClick={()=>{
              scrollToSection("#about")
            }}><Link href={"#about"}>About</Link></li>
            <li className='hover:text-[#a6a3a3] active:scale-95' onClick={()=>{
              scrollToSection("#portfolio")
            }}><Link href={"#portfolio"}>Portfolio</Link></li>
            <li className='hover:text-[#a6a3a3] active:scale-95' onClick={()=>{
              scrollToSection("#contact")
            }}><Link href={"#contact"}>Contact</Link></li> */}
          <button
            className="hover:text-[#a6a3a3] hover:scale-105 active:scale-95"
            onClick={() => {
              scrollToSection("#home");
            }}
          >
            Home
          </button>
          <button
            className="hover:text-[#a6a3a3] hover:scale-105 active:scale-95"
            onClick={() => {
              scrollToSection("#about");
            }}
          >
            About
          </button>
          <button
            className="hover:text-[#a6a3a3] hover:scale-105 active:scale-95"
            onClick={() => {
              scrollToSection("#portfolio");
            }}
          >
            Portfolio
          </button>
          <button
            className="hover:text-[#a6a3a3] hover:scale-105 active:scale-95"
            onClick={() => {
              scrollToSection("#contact");
            }}
          >
            Contact
          </button>
        </ul>
        {/* <div>
            <Link className='text-[20px]' href={"/"}>Create Your Own Portfolio Website</Link>
        </div> */}
      </nav>
    </>
  );
};

export default navbar;
