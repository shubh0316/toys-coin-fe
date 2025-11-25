import Image from 'next/image'
import React from 'react'
import hero from "@/assets/hero1.jpeg";

function HeroSection() {
  return (
    <div className="relative w-full h-screen md:h-screen lg:h-screen">
      <Image
        src={hero}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
    </div>
  )
}

export default HeroSection;
