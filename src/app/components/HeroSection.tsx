import Image from 'next/image'
import React from 'react'
import hero from "@/assets/hero.jpg";
import logo from "@/assets/logo.svg";

function HeroSection() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={hero}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="justify-between p-8 flex items-center">
        <Image src={logo} alt="Logo" width={150} height={100} className="z-10" />
      </div>
    </div>
  )
}

export default HeroSection;
