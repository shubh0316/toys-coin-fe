"use client";
import React, { useEffect, useRef } from "react";
import Container from "./Container";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import photo1 from "@/assets/photo1.png";
import photo2 from "@/assets/photo2.png";
import photo3 from "@/assets/photo3.jpeg";
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
    <div id="did-you-know" className="bg-[#F9EFE0] font-inter py-10 lg:py-16 2xl:py-20">
      <Container>
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-6xl lg:text-8xl 2xl:text-9xl font-bold font-frank text-[#2D2B42] mt-6 lg:mt-10 xl:mt-12 leading-wide tracking-wider">
            DID YOU KNOW?
          </h1>
          <p className="text-xl lg:text-2xl 2xl:text-4xl font-bold font-frank leading-tight text-[#2D2B42] tracking-wider">2024 DATA FROM THE U.S. DEPARTMENT OF HEALTH AND HUMAN SERVICES</p>
        </div>

        {/* Timeline Section */}
        <div className="mt-20 lg:mt-28 xl:mt-32 relative">
          {/* Timeline Image */}
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
            {/* FAIR LAUNCH */}
            <div ref={fairLaunchRef} className="flex flex-col md:flex-row gap-8 md:gap-64 lg:gap-80 xl:gap-96 items-center">
              <div className="w-full md:w-1/2 flex justify-center">
                <Image 
                  src={photo1} 
                  alt="Fair Launch" 
                  className="w-full max-w-4xl lg:max-w-5xl 2xl:max-w-8xl"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10">
                <h2 className="text-3xl md:text-6xl lg:text-6xl 2xl:text-8xl font-frank text-[#2D2B42]">OVER 400,000</h2>
                <p className="text-md md:text-xl lg:text-xl 2xl:text-3xl text-[#2D2B42] font-light lg:leading-relaxed xl:leading-relaxed">
                  children and youth are in foster <br />
                  care on any given day in the U.S. 
                </p>
                {/* <ul className="space-y-4 text-gray-600 font-light md:text-xl">
      {["80% Circulating Supply", "20% Marketing & Events"].map((item, index) => (
        <li key={index} className="flex items-center gap-2">
          <Image src={tick} alt="Tick Icon" width={24} height={20} />
          {item}
        </li>
      ))}
    </ul> */}
              </div>
            </div>

            {/* AWARENESS & DONATIONS */}
            <div ref={awarenessRef} className="flex flex-col md:flex-row-reverse gap-8 md:gap-64 lg:gap-80 xl:gap-96 items-center">
              <div className="w-full md:w-1/2 flex justify-center">
                <Image 
                  src={photo2} 
                  alt="Awareness & Donations" 
                  className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10">
                <h2 className="text-3xl md:text-6xl lg:text-6xl 2xl:text-8xl font-frank text-[#2D2B42]">NEARLY 60%</h2>
                <p className="text-md md:text-xl lg:text-xl 2xl:text-3xl text-gray-700 font-light leading-relaxed lg:leading-relaxed xl:leading-relaxed">
                  of foster children enter are<br />
                  with no personal belongings<br />
                  beyond what they&apos;re wearing.
                </p>
                {/* <ul className="space-y-4 text-gray-600 font-light md:text-lg">
      {[
        "Partnerships & Sponsors",
        "Social Media Growth",
        "Influencer Marketing",
      ].map((item, index) => (
        <li key={index} className="flex items-center gap-2">
          <Image src={tick} alt="Tick Icon" width={24} height={20} />
          {item}
        </li>
      ))}
    </ul> */}
              </div>
            </div>

            {/* NATIONAL EXPANSION */}
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
                <p className="text-md md:text-xl lg:text-xl 2xl:text-3xl text-gray-700 font-light leading-relaxed lg:leading-relaxed xl:leading-relaxed">
                  of all children in foster care are 
                  under ge 10, with toddlers and
                  preschoolers making up a
                  significant share of new 
                  placements.
                </p>
                {/* <ul className="space-y-4 text-gray-600 font-light md:text-lg">
      {[
        "Recruit Volunteers",
        "Expand Foster Care Network",
        "Expand Donor Marketing",
      ].map((item, index) => (
        <li key={index} className="flex items-center gap-2">
          <Image src={tick} alt="Tick Icon" width={24} height={20} />
          {item}
        </li>
      ))}
    </ul> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TimelineSection;