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
      className="relative w-full h-[400px] sm:h-[450px] md:h-[550px] lg:h-[637px] xl:h-[712px] 2xl:h-[825px] flex items-center justify-center"
    >
      {/* Background Image */}
      <Image
        src={bg}
        alt="Background"
        fill
        className="absolute object-cover"
      />

      {/* Mobile View */}
      <div className="md:hidden mx-auto w-full max-w-[1950px] px-4 sm:px-6"> 
        <p className="relative font-frank text-4xl sm:text-5xl md:text-7xl font-bold tracking-wide leading-relaxed text-start">
          <span className="block text-white mb-0.5 sm:mb-1 md:mb-1">dedicated</span>
          <span className="block text-white mb-0.5 sm:mb-1 md:mb-1">to providing</span>
          <span className="block mb-0.5 sm:mb-1 md:mb-1">
            {textAnimated.split(" ").map((word, i) => {
              const start = i / textAnimated.length;
              const end = start + 0.5 / textAnimated.length;
              return (
                <span
                  key={i}
                  className="inline-block"
                >
                  <Word progress={scrollYProgress} range={[start, end]}>
                    {word}
                  </Word>
                </span>
              );
            })}
          </span>

          {/* Line 4: to kids entering */}
          <span className="block text-white mb-0.5 sm:mb-1 md:mb-1">to kids entering</span>

          {/* Line 5: into foster care. */}
          <span className="block text-white">into foster care.</span>
        </p>
      </div>

      {/* iPad and Desktop View - Hidden on mobile */}
      <div className="hidden md:block mx-auto w-full max-w-[1950px] px-4 md:px-6 lg:px-10 xl:px-12"> 
        <p className="relative font-frank text-5xl md:text-6xl lg:text-7xl xl:text-[84px] 2xl:text-9xl font-bold tracking-wider leading-tight text-start p-2 md:p-2.5 lg:p-3 xl:p-4 2xl:p-0">
          {/* Line 1 */}
          <span className="block text-white mb-2 md:mb-3 lg:mb-4 xl:mb-5 2xl:mb-6">dedicated to providing</span>

          {/* Line 2 */}
          <span className="block mb-2 md:mb-3 lg:mb-4 xl:mb-5 2xl:mb-6">
            <span className="inline-block">
              {textAnimated.split(" ").map((word, i) => {
                const start = i / textAnimated.length;
                const end = start + 0.5 / textAnimated.length;
                return (
                  <Word key={i} progress={scrollYProgress} range={[start, end]}>
                    {word}
                  </Word>
                );
              })}
            </span>
            <span className="inline-block ml-1.5 md:ml-2 lg:ml-2.5 xl:ml-3 2xl:ml-3 text-white">{textAfterLine2}</span>
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
    <span className="relative inline-block mr-1 sm:mr-1.5 md:mr-2 lg:mr-2.5 xl:mr-3 2xl:mr-3">
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
    <span className="relative inline-block min-w-[0.5em]">
      {/* White base text */}
      <span className="text-white absolute">{children}</span>
      {/* Animated blue overlay */}
      <motion.span
        style={{ opacity }}
        className="text-[#31CDE6] relative"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default DonationSection;
