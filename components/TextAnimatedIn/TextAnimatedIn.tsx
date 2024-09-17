"use client";
import gsap from "gsap";
import React, { useEffect, useState } from "react";

type Props = {
  trigger: boolean;
};

const TextAnimatedIn = (props: Props) => {
  useEffect(() => {
    console.log(`working`);
    const tl = gsap.timeline();

    if (props.trigger === true) {
      tl.from(".author", { y: 4, duration: 2, delay: 2, opacity: 1 });
    } else {
      tl.from(".author", { y: -4, duration: 2, delay: 2, opacity: 0 });
    }
  }, [props.trigger]);

  return (
    <div className="overflow-hidden">
      <div
        className={`text-sm opacity-0 transition-all -translate-y-10 duration-1000 author font-medium`}
      >
        BAIDAR GUL
      </div>
    </div>
  );
};

export default TextAnimatedIn;
