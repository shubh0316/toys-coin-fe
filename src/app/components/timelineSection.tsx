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
    
    <div id="did-you-know" className="bg-[#F9EFE0] font-inter py-4 sm:py-8 md:py-12 lg:py-14 xl:py-16 2xl:py-20">
      <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-10"> 
      <Container>
        <div className="text-center">
          <h1 className="text-[44px] sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[170px] font-bold font-frank text-[#2D2B42] mt-4 sm:mt-6 md:mt-6 lg:mt-8 xl:mt-10 2xl:mt-12 leading-snug sm:leading-wide tracking-tight sm:tracking-wider whitespace-nowrap">
            DID YOU KNOW?
          </h1>
          {/* Mobile View - Structured Text */}
          <div className="md:hidden mt-3 sm:mt-4">
            <p className="text-[16px] sm:text-3xl font-bold font-frank leading-snug text-[#2D2B42] tracking-tight text-center">
              <span className="block whitespace-nowrap">
                2024 DATA FROM THE U.S. DEPARTMENT
              </span>
              <span className="block">
                OF HEALTH AND HUMAN SERVICES
              </span>
            </p>
          </div>
          {/* iPad and Desktop View - Single Line */}
          <p className="hidden md:block text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl font-bold font-frank leading-tight text-[#2D2B42] tracking-wider mt-3 sm:mt-4 md:mt-4">2024 DATA FROM THE U.S. DEPARTMENT OF HEALTH AND HUMAN SERVICES</p>
        </div>

        <div className="mt-12 sm:mt-14 md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-32 relative px-4 sm:px-6 md:px-6">
          <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 z-0 flex items-center justify-center pointer-events-none">
            <Image 
              src={timeline} 
              alt="Timeline" 
              width={156} 
              height={10}
              className="hidden xl:block xl:w-auto h-full object-contain"
            />
          </div>

          <div className="relative z-10 space-y-16 sm:space-y-18 md:space-y-18 lg:space-y-12 xl:space-y-8 2xl:space-y-6">
            <div ref={fairLaunchRef} className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-8 lg:gap-40 xl:gap-64 2xl:gap-96 items-center">
              <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <div className="relative">
                  <Image 
                    src={photo1} 
                    alt="Fair Launch" 
                    width={280}
                    height={280}
                    className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[220px] md:h-[220px] lg:w-[320px] lg:h-[320px] xl:w-[450px] xl:h-[450px] 2xl:w-[700px] 2xl:h-[500px] rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-3 sm:space-y-4 md:space-y-4 lg:space-y-6 xl:space-y-8 2xl:space-y-4 md:pl-4 lg:pl-6">
                <h2 className="text-[44px] sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[90px] leading-snug font-frank text-[#2D2B42] tracking-tight whitespace-nowrap">OVER 400,000</h2>
                <p className="text-[21px] sm:text-xl md:text-sm lg:text-lg xl:text-xl 2xl:text-3xl text-[#2D2B42] !leading-[1.5] sm:!leading-[1.6] md:!leading-[1.5] lg:!leading-[1.7] font-light tracking-tight max-w-4xl">
                children and youth are in foster care on any given day in the U.S., waiting for safe, loving homes.                </p>
              </div>
            </div>

            <div ref={awarenessRef} className="flex flex-col md:flex-row-reverse gap-6 sm:gap-8 md:gap-8 lg:gap-40 xl:gap-64 2xl:gap-96 items-center">
              <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                <div className="relative">
                  <Image 
                    src={photo2} 
                    alt="Awareness & Donations" 
                    width={280}
                    height={280}
                    className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[220px] md:h-[220px] lg:w-[320px] lg:h-[320px] xl:w-[450px] xl:h-[450px] 2xl:w-[600px] 2xl:h-[600px] rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-3 sm:space-y-4 md:space-y-4 lg:space-y-6 xl:space-y-8 2xl:space-y-4 md:pr-4 lg:pr-6">
                <h2 className="text-[44px] sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-frank text-[#2D2B42] leading-snug tracking-tight">NEARLY 60%</h2>
                <p className="text-[21px] sm:text-xl md:text-sm lg:text-lg xl:text-xl 2xl:text-3xl text-gray-700 font-light !leading-[1.5] sm:!leading-[1.6] md:!leading-[1.5] lg:!leading-[1.7] tracking-tight max-w-4xl">
                of foster children enter care with no personal belongings beyond what they&apos;re wearing.                 </p>
              </div>
            </div>

            <div ref={expansionRef} className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-8 lg:gap-40 xl:gap-64 2xl:gap-96 items-center">
              <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <div className="relative">
                  <Image 
                    src={photo3} 
                    alt="National Expansion" 
                    width={280}
                    height={280}
                    className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[220px] md:h-[220px] lg:w-[320px] lg:h-[320px] xl:w-[450px] xl:h-[450px] 2xl:w-[600px] 2xl:h-[600px] rounded-full object-cover"
                  />
                </div>
              </div> 
              <div className="w-full md:w-1/2 space-y-3 sm:space-y-4 md:space-y-4 lg:space-y-6 xl:space-y-8 2xl:space-y-10 md:pl-4 lg:pl-6">
                <h2 className="text-[44px] sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-frank text-[#2D2B42] leading-snug tracking-tight">NEARLY HALF</h2>
                <p className="text-[21px] sm:text-xl md:text-sm lg:text-lg xl:text-xl 2xl:text-3xl text-gray-700 font-light !leading-[1.5] sm:!leading-[1.6] md:!leading-[1.5] lg:!leading-[1.7] tracking-tight">
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