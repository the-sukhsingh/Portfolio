import React from "react";
import { Social } from "@/Information";


const contact = () => {


  return (
    <>
      <div className="w-full h-48 flex justify-center items-center flex-col">
        <div className="md:flex gap-[2.5rem] grid grid-cols-3 ">
          {Social.email && (
            <a href={`mailto:${Social.email}`}>
              <img
                src="mail.svg"
                alt="email"
                className="socialIcon"
              />
            </a>
          )}
          {Social.github && (
            <a href={`https://github.com/${Social.github}`} target="_blank">
              <img
                src="github.svg"
                alt="GitHub"
                className="socialIcon"
              />
            </a>
          )}
          {Social.instagram && (
            <a
              href={`https://www.instagram.com/${Social.instagram}`}
              target="_blank"
            >
              <img
                src="instagram.svg"
                alt="Instagram"
                className="socialIcon"
              />
            </a>
          )}
          {Social.linkedin && (
            <a
              href={`https://www.linkedin.com/in/${Social.linkedin}`}
              target="_blank"
            >
              <img
                src="linkedin.svg"
                alt="LinkedIn"
                className="socialIcon"
              />
            </a>
          )}
          {Social.twitter && (
            <a href={`https://twitter.com/${Social.twitter}`} target="_blank">
              <img
                src="twitter.svg"
                alt="Twitter"
                className="socialIcon"
              />
            </a>
          )}
          {Social.youtube && (
            <a
              href={`https://www.youtube.com/@${Social.youtube}`}
              target="_blank"
            >
              <img
                src="youtube.svg"
                alt="YouTube"
                className="socialIcon"
              />
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default contact;
