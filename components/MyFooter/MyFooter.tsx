"use client";
import React, { useState } from "react";
import TextAnimatedIn from "../TextAnimatedIn/TextAnimatedIn";

type Props = {};

const MyFooter = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full group hover:border-[#bccee0]/0 overflow-hidden border border-transparent  mt-10 p-2 px-4 rounded-lg font-medium text-[#01875f] bg-[#F6FAFE] transition-all duration-300"
    >
      <div className="flex justify-between items-center">
        <div>
          <div className="text-lg">For demonstration purposes only.</div>
          <div className="font-normal">
            This is not a real app. Neither it is responsive, It is just a demo
            to preview{" "}
            <span className="group-hover:border-b-[#01875f]/40 border-b-2 border-transparent group-hover:text-[#01875f] group-hover:px-0 group-hover:p-1 transition-all duration-700">
              my frontend skills.
            </span>
          </div>
          <div className="p-2 px-4 group-hover:border-[#bccee0]/30 border border-transparent flex gap-6 items-center rounded-lg font-medium w-fit text-[#01875f] bg-white mt-2 hover:tracking-tight transition-all duration-300">
            <a
              href="https://www.linkedin.com/in/baidargul/"
              target="_blank"
              className="flex gap-1 items-center"
            >
              <span>
                <img src="/linkedIn.png" className="w-5 h-5" />
              </span>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://wa.me/923438793471"
              target="_blank"
              className="flex gap-1 items-center"
            >
              <span>
                <img src="/whatsapp.png" className="w-5 h-5" />
              </span>
              <span>Whatsapp</span>
            </a>
          </div>
        </div>
        <div className="group-hover:-translate-x-0 group-hover:rotate-0 rotate-180 translate-x-24 transition-all duration-700">
          <img
            src="/me.png"
            className="w-20 h-20 group-hover:opacity-100 opacity-0 transition-all duration-1000 pointer-events-none"
            alt="My Picture"
          />
        </div>
      </div>
    </div>
  );
};

export default MyFooter;
