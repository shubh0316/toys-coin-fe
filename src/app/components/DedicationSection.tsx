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

  const text = "Dedicated to providing toys of comfort to over 400,000 kids entering into foster care.";
  const words = text.split(" ");

  return (
    <div ref={container} className="relative w-full h-[850px] flex items-center justify-center">
      {/* Background Image */}
      <Image src={bg} alt="Background" layout="fill" objectFit="cover" className="absolute" />

      {/* Centered Animated Text */}
      <Container>
        <p className="relative font-frank text-start text-5xl lg:text-8xl font-bold text-[#31CDE6] flex flex-wrap ">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 0.5 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </Container>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className="relative mr-3 mt-3">
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
      <span className="text-white" style={{ position: "absolute" }}>
        {children}
      </span>
      <motion.span style={{ opacity, position: "relative" }}>
        {children}
      </motion.span>
    </span>
  );
};

export default DonationSection;
