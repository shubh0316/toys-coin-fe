// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import bg from "@/assets/bg.jpg";

const DonationSection = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const textBefore = "Dedicated to providing";
  const textAnimated = "toys of comfort";
  const textAfterLine2 = "to kids";
  const textLine3 = "entering into foster care.";

  return (
    <div
      ref={container}
      className="relative w-full h-[600px] sm:h-[700px] md:h-[750px] lg:h-[850px] xl:h-[950px] 2xl:h-[1100px] flex items-center justify-center"
    >
      {/* Background Image */}
      <Image
        src={bg}
        alt="Background"
        fill
        className="absolute object-cover"
      />

      {/* Mobile View */}
      <div className="lg:hidden mx-auto w-full max-w-[1950px] px-4 sm:px-6 md:px-8"> 
        <p className="relative font-frank text-5xl sm:text-6xl md:text-7xl font-bold tracking-wider leading-tight text-start p-2 md:p-3">
          {/* Line 1: dedicated */}
          <span className="block text-white mb-3 sm:mb-4 md:mb-4">dedicated</span>

          {/* Line 2: to providing */}
          <span className="block text-white mb-3 sm:mb-4 md:mb-4">to providing</span>

          {/* Line 3: toys of comfort (animated) */}
          <span className="block mb-3 sm:mb-4 md:mb-4">
            {textAnimated.split(" ").map((word, i) => {
              const start = i / textAnimated.length;
              const end = start + 0.5 / textAnimated.length;
              const isComfort = word.toLowerCase() === "comfort";
              return (
                <span
                  key={i}
                  className={isComfort ? "block" : "inline-block"}
                >
                  <Word progress={scrollYProgress} range={[start, end]}>
                    {word}
                  </Word>
                </span>
              );
            })}
          </span>

          {/* Line 4: to kids entering */}
          <span className="block text-white mb-3 sm:mb-4 md:mb-4">to kids entering</span>

          {/* Line 5: into foster care. */}
          <span className="block text-white">into foster care.</span>
        </p>
      </div>

      {/* Desktop/Laptop View - Hidden on mobile */}
      <div className="hidden lg:block mx-auto w-full max-w-[1950px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12"> 
        <p className="relative font-frank text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-bold tracking-wider leading-tight text-start p-2 lg:p-3 xl:p-4 2xl:p-0">
          {/* Line 1 */}
          <span className="block text-white mb-3 lg:mb-4 xl:mb-5 2xl:mb-6">{textBefore}</span>

          {/* Line 2 */}
          <span className="block mb-3 lg:mb-4 xl:mb-5 2xl:mb-6">
            {textAnimated.split(" ").map((word, i) => {
              const start = i / textAnimated.length;
              const end = start + 0.5 / textAnimated.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
            <span className="ml-2 lg:ml-2.5 xl:ml-3 2xl:ml-3 text-white">{textAfterLine2}</span>
          </span>

          {/* Line 3 */}
          <span className="block text-white">{textLine3}</span>
        </p>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className="relative mr-2 sm:mr-2 md:mr-2 lg:mr-2.5 xl:mr-3">
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      {/* White base text */}
      <span className="text-white absolute">{children}</span>
      {/* Animated blue overlay */}
      <motion.span
        style={{ opacity, position: "relative" }}
        className="text-[#31CDE6]"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default DonationSection;
