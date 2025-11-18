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
                Donating is great for everyone when you order through Amazon. You can easily shop for a donation from a wishlist of requested items by our foster care agency partners!
              </p>
            </div>
            <Image 
              src={panda} 
              alt="Panda" 
              width={200} 
              className='w-full max-w-[250px] sm:max-w-[200px] md:max-w-[220px]'
            />
          </div>

          {/* Desktop/Laptop View - Original Layout */}
          <div className="hidden lg:flex flex-row justify-center items-center h-full py-6 px-4 lg:py-8 lg:px-6 xl:py-10 xl:px-8 2xl:py-12 2xl:px-10 pb-4 gap-4 lg:gap-5 xl:gap-6 2xl:gap-8">
            <div className="flex-shrink-0">
              <Image 
                src={amazon} 
                width={480} 
                height={480}
                alt="Amazon Logo" 
                className='w-auto h-auto lg:w-[320px] lg:h-auto xl:w-[380px] 2xl:w-[550px] object-contain' 
              />
            </div>
            <div className='bg-[#31CDE6] rounded-[180px] lg:rounded-[200px] xl:rounded-[220px] 2xl:rounded-[260px] border-4 lg:border-[5px] xl:border-[6px] 2xl:border-8 border-white mt-6 lg:mt-7 xl:mt-8 2xl:mt-10 flex justify-center items-center flex-shrink-0 max-w-[780px] lg:max-w-[620px] xl:max-w-[920px] 2xl:max-w-[1300px] overflow-hidden'>
              <div className='flex flex-row items-center p-6 lg:p-8 xl:p-10 2xl:p-16 gap-5 lg:gap-6 xl:gap-7 2xl:gap-9 w-full'>
                 <div className="flex-shrink-0">
                   <Image 
                     src={panda} 
                     alt="Panda" 
                     width={200} 
                     height={200}
                     className='w-auto h-auto lg:w-[140px] lg:h-auto xl:w-[160px] xl:h-auto 2xl:w-[240px] 2xl:h-auto object-contain' 
                   />
                 </div>
                 <div className='flex flex-col space-y-3 lg:space-y-3 xl:space-y-4 2xl:space-y-5 flex-1 min-w-0'>
                  <h2 className='font-frank text-2xl lg:text-5xl xl:text-4xl 2xl:text-6xl text-[#2D2B42] leading-tight'>
                    DONATIONS MADE THROUGH AMAZON
                  </h2>
                  <p className='text-base lg:text-xl xl:text-xl 2xl:text-3xl !leading-[1.5] font-light text-[#2D2B42]'>
                    Donating is great for everyone when you order through Amazon. You can easily shop for a donation from a wishlist of requested items by our foster care agency partners!
                  </p>
                 </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default DonationSection
