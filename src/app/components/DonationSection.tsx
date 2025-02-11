"use client"
import React from 'react'
import Image from 'next/image'
import bg2 from "@/assets/bg2.svg";
import Container from './Container';
import amazon from '@/assets/amazon.png'

function DonationSection() {
  return (
    <div>
      <div className="relative w-full h-[850px]">
        {/* Background Image */}
        <Image 
          src={bg2} 
          alt="Background" 
          layout="fill" 
          objectFit="cover" 
          className="absolute -z-10" 
        />

        {/* Centered Content */}
        <Container> 
          <div className="flex justify-center items-center h-full">
            <Image src={amazon} width={300} alt="Amazon Logo" />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default DonationSection
