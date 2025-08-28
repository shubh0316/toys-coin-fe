// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import bg from "@/assets/bg.jpg";
import Container from "./Container";

const DonationSection = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const textBefore = "Dedicated to providing";
  const textAnimated = "toys of comfort";
  const textAfter = "to kids entering into foster care";

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
      <Container>
        <p className="relative font-frank text-start text-6xl lg:text-8xl 2xl:text-9xl font-bold flex flex-wrap">
          {/* Normal text before (always white) */}
          <span className="mr-3 mt-3 text-white">{textBefore}</span>

          {/* Animated text (toys of comfort) */}
          {textAnimated.split(" ").map((word, i) => {
            const start = i / textAnimated.length;
            const end = start + 0.5 / textAnimated.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}

          {/* Normal text after (always white) */}
          <span className="ml-3 mt-3 text-white">{textAfter}</span>
        </p>
      </Container>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className="relative mr-3 mt-3 lg:mr-4 lg:mt-4 xl:mr-6 xl:mt-6">
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
