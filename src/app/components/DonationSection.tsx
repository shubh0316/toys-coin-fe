"use client"
import React from 'react'
import Image from 'next/image'
import bg2 from "@/assets/bg2.svg";
import Container from './Container';
import amazon from '@/assets/amazon.png'
import panda from "@/assets/panda.png";

function DonationSection() {
  return (
    <div id="donate">
      <div className="relative w-full min-h-screen md:h-[750px] lg:h-[850px] xl:h-[950px] 2xl:h-[1100px] flex justify-center items-center">
        <Image 
          src={bg2} 
          alt="Background" 
          layout="fill" 
          objectFit="cover" 
          className="absolute -z-10" 
        />
        <Container> 
          {/* Mobile View - Column Layout */}
          <div className="lg:hidden flex flex-col justify-center items-center h-full py-12 px- sm:py-16 sm:px-8 md:py-20 md:px-10 space-y-8 sm:space-y-10 md:space-y-12">
            <Image 
              src={amazon} 
              width={480} 
              alt="Amazon Logo" 
              className='w-full  sm:max-w-sm md:max-w-md'
            />
            <div className='flex flex-col items-center space-y-5 sm:space-y-6 md:space-y-8 text-start px-6 sm:px-8 md:px-10'>
              <h2 className='font-frank text-5xl sm:text-4xl md:text-5xl text-[#2D2B42] leading-tight'>
                DONATIONS MADE EASY AMAZON
              </h2>
              <p className='text-2xl sm:text-lg md:text-xl !leading-[1.6] font-light text-white max-w-2xl'>
                Donating is great for everyone when you<br />
                order through Amazon. You can easily shop<br />
                for a donation from a wishlist of requested<br />
                items by our foster care agency partners!
              </p>
            </div>
            <Image 
              src={panda} 
              alt="Panda" 
              width={200} 
              className='w-full max-w-[250px] sm:max-w-[200px] md:max-w-[220px]'
            />
          </div>

          {/* Desktop/Laptop View - Column Layout */}
          <div className="hidden lg:flex flex-col justify-center items-center h-full py-12 lg:py-16 xl:py-20 2xl:py-24 px-4 lg:px-6 xl:px-8 2xl:px-10 space-y-8 lg:space-y-10 xl:space-y-12 2xl:space-y-16">
            <Image 
              src={amazon} 
              width={480} 
              alt="Amazon Logo" 
              className='w-full lg:max-w-md xl:max-w-lg 2xl:max-w-xl'
            />
            <div className='flex flex-col items-center space-y-5 lg:space-y-6 xl:space-y-8 2xl:space-y-10 text-center px-6 lg:px-8 xl:px-10 2xl:px-12'>
              <h2 className='font-frank text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-[#2D2B42] leading-tight'>
                DONATIONS MADE EASY AMAZON
              </h2>
              <p className='text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl !leading-[1.6] font-light text-white max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl'>
                Donating is great for everyone when you<br />
                order through Amazon. You can easily shop<br />
                for a donation from a wishlist of requested<br />
                items by our foster care agency partners!
              </p>
            </div>
            <Image 
              src={panda} 
              alt="Panda" 
              width={200} 
              className='w-full lg:max-w-[280px] xl:max-w-[320px] 2xl:max-w-[400px]'
            />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default DonationSection
