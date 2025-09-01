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
  const textLine3 = "entering into foster care";

  return (
    <div
      ref={container}
      className="relative w-full h-[950px] lg:h-[950px] 2xl:h-[1100px] flex items-center justify-center"
    >
      {/* Background Image */}
      <Image
        src={bg}
        alt="Background"
        fill
        className="absolute object-cover"
      />

      {/* Centered Animated Text */}
      <div className="mx-auto w-full max-w-[1950px] "> 
        <p className="relative font-frank text-6xl  justify-center lg:text-8xl 2xl:text-9xl font-bold tracking-wider leading-tight text-start p-2  2xl:p-0">
          {/* Line 1 */}
          <span className="block text-white mb-6">{textBefore}</span>

          {/* Line 2 */}
          <span className="block xl:mb-6 2xl:mb-6 lg:mb-6 md:mb-6 mb-0">
            {textAnimated.split(" ").map((word, i) => {
              const start = i / textAnimated.length;
              const end = start + 0.5 / textAnimated.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
            <span className="xl:ml-3 2xl:ml-3 md:ml-3 lg:ml-3 ml-0 text-white">{textAfterLine2}</span>
          </span>

          {/* Line 3 */}
          <span className="block  text-white">{textLine3}</span>
        </p>
        </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className="relative mr-3">
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
