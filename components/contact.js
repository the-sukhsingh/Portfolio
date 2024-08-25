import React from "react";
import { Social } from "@/Information";
import Image from "next/image";


const Contact = () => {
  return (
    <>
      <div className="w-full h-48 flex justify-center items-center flex-col">
        <div className="md:flex gap-[2.5rem] grid grid-cols-3 ">
          {Social.email && (
            <a href={`mailto:${Social.email}`}>
              <Image
                src="/mail.svg"
                alt="email"
                className="socialIcon"
                width={30}
                height={30}
              />
            </a>
          )}
          {Social.github && (
            <a href={`https://github.com/${Social.github}`} target="_blank">
              <Image
                src="/github.svg"
                alt="GitHub"
                className="socialIcon"
                width={30}
                height={30}
              />
            </a>
          )}
          {Social.instagram && (
            <a
              href={`https://www.instagram.com/${Social.instagram}`}
              target="_blank"
            >
              <Image
                src="/instagram.svg"
                alt="Instagram"
                className="socialIcon"
                width={30}
                height={30}
              />
            </a>
          )}
          {Social.linkedin && (
            <a
              href={`https://www.linkedin.com/in/${Social.linkedin}`}
              target="_blank"
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                className="socialIcon"
                width={30}
                height={30}
              />
            </a>
          )}
          {Social.twitter && (
            <a href={`https://twitter.com/${Social.twitter}`} target="_blank">
              <Image
                src="/twitter.svg"
                alt="Twitter"
                className="socialIcon"
                width={30}
                height={30}
              />
            </a>
          )}
          {Social.youtube && (
            <a
              href={`https://www.youtube.com/@${Social.youtube}`}
              target="_blank"
            >
              <Image
                src="/youtube.svg"
                alt="YouTube"
                className="socialIcon"
                width={30}
                height={30}
              />
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
