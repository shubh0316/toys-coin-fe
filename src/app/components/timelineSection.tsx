"use client";
import React, { useEffect, useRef } from "react";
import Container from "./Container";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    
    <div id="did-you-know" className="bg-[#F9EFE0] font-inter py-10 lg:py-16 2xl:py-20 ">
      <div className="mb-10"> 
      <Container>
        <div className="text-center">
          <h1 className="text-6xl lg:text-8xl 2xl:text-[170px] font-bold font-frank text-[#2D2B42] mt-6 lg:mt-10 xl:mt-12 leading-wide tracking-wider">
            DID YOU KNOW?
          </h1>
          <p className="text-xl lg:text-lg 2xl:text-3xl font-bold font-frank leading-tight text-[#2D2B42] tracking-wider">2024 DATA FROM THE U.S. DEPARTMENT OF HEALTH AND HUMAN SERVICES</p>
        </div>

        <div className="mt-20 lg:mt-28 xl:mt-32 relative">
          <div className="absolute inset-0 flex justify-center z-0">
            <Image 
              src={timeline} 
              alt="Timeline" 
              width={156} 
              height={10}
              className="hidden md:block lg:w-auto xl:w-auto"
            />
          </div>

          <div className="relative z-10 space-y-40 lg:space-y-8 2xl:space-y-6">
            <div ref={fairLaunchRef} className="flex flex-col md:flex-row gap-8 md:gap-64 lg:gap-80 xl:gap-96 items-center">
              <div className="w-full md:w-1/2 flex justify-center">
                <Image 
                  src={photo1} 
                  alt="Fair Launch" 
                  className="w-full max-w-4xl lg:max-w-5xl 2xl:max-w-8xl"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-4">
                <h2 className="text-3xl md:text-6xl lg:text-6xl 2xl:text-[90px] leading-tight  text-nowrap font-frank  text-[#2D2B42]">OVER 400,000</h2>
                <p className="text-md md:text-xl lg:text-xl 2xl:text-3xl text-[#2D2B42] !leading-[1.8] font-light max-w-4xl">
                children and youth are in foster care on any given day in the U.S., waiting for safe, loving homes.                </p>
              </div>
            </div>

            <div ref={awarenessRef} className="flex flex-col md:flex-row-reverse gap-8 md:gap-64 lg:gap-80 xl:gap-96 items-center">
              <div className="w-full md:w-1/2 flex justify-center">
                <Image 
                  src={photo2} 
                  alt="Awareness & Donations" 
                  className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-4">
                <h2 className="text-3xl md:text-6xl lg:text-6xl 2xl:text-8xl font-frank text-[#2D2B42]">NEARLY 60%</h2>
                <p className="text-md md:text-xl lg:text-xl 2xl:text-3xl text-gray-700 font-light !leading-[1.8] max-w-4xl">
                of all children in foster care are under age 10, with toddlers and preschoolers making up a significant share.
                </p>
              </div>
            </div>

            <div ref={expansionRef} className="flex flex-col md:flex-row gap-8 md:gap-64 lg:gap-80 xl:gap-96 items-center">
              <div className="w-full md:w-1/2 flex justify-center">
                <Image 
                  src={photo3} 
                  alt="National Expansion" 
                  className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl"
                />
              </div> 
              <div className="w-full md:w-1/2 space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10">
                <h2 className="text-3xl md:text-6xl lg:text-6xl 2xl:text-8xl font-frank text-[#2D2B42]">NEARLY HALF</h2>
                <p className="text-md md:text-xl lg:text-xl 2xl:text-3xl text-gray-700 font-light !leading-[1.8]">
                  of all children in foster care are 
                  under age 10, with toddlers and 
                  preschoolers making up a 
                  significant share of new 
                  placements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      </div>
    </div>
  );
};

export default TimelineSection;