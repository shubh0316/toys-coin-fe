"use client";
import React, { useEffect, useRef } from "react";
import Container from "./Container";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import logo from "@/assets/logo.png";
import photo1 from "@/assets/photo1.png";
import photo2 from "@/assets/photo2.png";
import photo3 from "@/assets/photo3.png";
import timeline from "@/assets/timeline.png";

gsap.registerPlugin(ScrollTrigger);

const TimelineSection = () => {
  const fairLaunchRef = useRef(null);
  const awarenessRef = useRef(null);
  const expansionRef = useRef(null);

  useEffect(() => {
    const sections = [fairLaunchRef.current, awarenessRef.current, expansionRef.current];

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { 
          opacity: 0.8,
          scale: 0.92,
          y: 80,
          transformOrigin: "center center"
         }, 
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "top 30%",
            scrub: 1,
            markers: false
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-[#F9EFE0] font-inter py-20">
      <Container>
        {/* Header Section */}
        <div className="text-center">
          <Image src={logo} alt="ToysCoin Logo" className="mx-auto" />
          <h1 className="text-4xl md:text-6xl font-bold font-frank text-[#2D2B42] mt-6">
            PLAN OF ACTION
          </h1>
        </div>

        {/* Timeline Section */}
        <div className="mt-20 relative">
          {/* Timeline Image */}
          <div className="absolute inset-0 flex justify-center z-0">
            <Image 
              src={timeline} 
              alt="Timeline" 
              width={140} 
              height={20}
              className="hidden md:block"
            />
          </div>

          <div className="relative z-10 space-y-40">
            {/* FAIR LAUNCH */}
            <div ref={fairLaunchRef} className="flex flex-col md:flex-row gap-8 md:gap-64 items-center">
              <div className="w-full md:w-1/2 flex justify-center">
                <Image 
                  src={photo1} 
                  alt="Fair Launch" 
                  className="w-full max-w-4xl "
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
                <h2 className="text-3xl md:text-6xl font-frank text-[#2D2B42]">FAIR LAUNCH</h2>
                <p className="text-lg md:text-xl text-[#2D2B42] font-inter w-4/5">
                  TOYS coin will be launched <br />
                  on the Solana network. <br />
                  Fair launch tokenomics <br />
                  will be at the core of the launch. <br />
                  No inside investors, no lockups, <br />
                  no cabal, no KOL, only community-driven tokenomics.
                </p>
                <ul className="list-disc list-inside space-y-4 text-gray-600 md:text-xl">
                  <li>80% Circulating Supply</li>
                  <li>20% Marketing & Events</li>
                </ul>
              </div>
            </div>

            {/* AWARENESS & DONATIONS */}
            <div ref={awarenessRef} className="flex flex-col md:flex-row-reverse gap-8 md:gap-64 items-center">
              <div className="w-full md:w-1/2 flex justify-center">
                <Image 
                  src={photo2} 
                  alt="Awareness & Donations" 
                  className="w-full max-w-4xl "
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
                <h2 className="text-3xl md:text-6xl font-frank text-[#2D2B42]">AWARENESS & DONATIONS</h2>
                <p className="text-lg md:text-xl text-gray-700 font-inter leading-relaxed">
                  Our initial goal is to build our community using the TOYS coin as a way to drive awareness 
                  and adoption in order to increase toy donations. We will accomplish this with 3 core strategies.
                </p>
                <ul className="list-disc list-inside space-y-4 text-gray-600 md:text-lg">
                  <li>Partnerships & Sponsors</li>
                  <li>Social Media Growth</li>
                  <li>Influencer Marketing</li>
                </ul>
              </div>
            </div>

            {/* NATIONAL EXPANSION */}
            <div ref={expansionRef} className="flex flex-col md:flex-row gap-8 md:gap-64 items-center">
              <div className="w-full md:w-1/2 flex justify-center">
                <Image 
                  src={photo3} 
                  alt="National Expansion" 
                  className="w-full max-w-4xl "
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
                <h2 className="text-3xl md:text-6xl font-frank text-[#2D2B42]">NATIONAL EXPANSION</h2>
                <p className="text-lg md:text-xl text-gray-700 font-inter leading-relaxed">
                  We will implement the necessary strategies to ensure seamless expansion of 
                  partnerships throughout the United States.
                </p>
                <ul className="list-disc list-inside space-y-4 text-gray-600 md:text-lg">
                  <li>Recruit Volunteers</li>
                  <li>Expand Foster Care Network</li>
                  <li>Expand Donor Marketing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TimelineSection;