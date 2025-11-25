"use client"
import React from 'react'
import Image from 'next/image'
import bg2 from "@/assets/bg2.svg";
import Container from './Container';
import amazon from '@/assets/amazon.png'
import panda from "@/assets/panda.png";

function DonationSection() {
  return (
    <div id="donate" className="w-full overflow-x-hidden">
      <div className="relative w-full min-h-screen md:h-[800px] lg:h-[850px] xl:h-[950px] 2xl:h-[1100px] flex justify-center items-center max-w-full">
        <Image 
          src={bg2} 
          alt="Background" 
          layout="fill" 
          objectFit="cover" 
          className="absolute -z-10" 
        />
          {/* Mobile View - Column Layout */}
          <div className="md:hidden flex flex-col justify-center items-center h-full py-2 px-2 sm:py-3 sm:px-3 space-y-2 sm:space-y-3">
            <Image 
              src={amazon} 
              width={480} 
              alt="Amazon Logo" 
              className='w-full  sm:max-w-sm md:max-w-md'
            />
            <div className='flex flex-col items-center space-y-3 sm:space-y-4 md:space-y-5 w-full'>
              <h2 className='font-frank text-4xl sm:text-4xl md:text-5xl text-[#2D2B42] leading-tight text-left'>
                DONATIONS<br />
                MADE EASY<br />
                WITH AMAZON
              </h2>
              <p className='text-lg sm:text-lg md:text-xl !leading-[1.6]  font-light text-white max-w-2xl text-left'>
                Donating is great for everyone<br /> when you
                order through<br />Amazon. You can easily shop<br />
                for a donation from a wishlist<br /> of requested
                items by our<br /> foster care agency partners!
              </p>
            </div>
            <Image 
              src={panda} 
              alt="Panda" 
              width={200} 
              className='w-full max-w-[150px] sm:max-w-[160px] md:max-w-[180px]'
            />
          </div>

          {/* iPad and Desktop View - Original Layout */}
          <div className="hidden md:flex flex-row justify-center items-center h-full py-6 md:py-6 lg:py-8 px-2 md:px-2.5 lg:px-3 xl:py-10 xl:px-8 2xl:py-12 2xl:px-10 pb-4 gap-2 md:gap-2 lg:gap-3 xl:gap-6 2xl:gap-8 w-full max-w-full overflow-x-hidden">
            <div className="flex-shrink-0">
              <Image 
                src={amazon} 
                width={480} 
                height={480}
                alt="Amazon Logo" 
                className='w-auto h-auto md:w-[240px] md:h-auto lg:w-[280px] lg:h-auto xl:w-[380px] 2xl:w-[550px] object-contain' 
              />
            </div>
            <div className='bg-[#31CDE6] rounded-[180px] md:rounded-[190px] lg:rounded-[200px] xl:rounded-[220px] 2xl:rounded-[260px] border-4 md:border-[4px] lg:border-[5px] xl:border-[6px] 2xl:border-8 border-white mt-6 md:mt-6 lg:mt-7 xl:mt-8 2xl:mt-10 flex justify-center items-center flex-shrink-0 w-full max-w-[460px] md:max-w-[480px] lg:max-w-[560px] xl:max-w-[750px] 2xl:max-w-[1300px] overflow-hidden'>
              <div className='flex flex-row items-center p-3 md:p-4 lg:p-5 xl:p-10 2xl:p-16 gap-2.5 md:gap-3 lg:gap-4 xl:gap-7 2xl:gap-9 w-full'>
                 <div className="flex-shrink-0">
                   <Image 
                     src={panda} 
                     alt="Panda" 
                     width={200} 
                     height={200}
                     className='w-auto h-auto md:w-[100px] md:h-auto lg:w-[120px] lg:h-auto xl:w-[160px] xl:h-auto 2xl:w-[240px] 2xl:h-auto object-contain' 
                   />
                 </div>
                 <div className='flex flex-col space-y-2 md:space-y-2 lg:space-y-2.5 xl:space-y-4 2xl:space-y-5 flex-1 min-w-0'>
                  <h2 className='font-frank text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl text-[#2D2B42] leading-tight break-words'>
                    DONATIONS MADE <br />EASY THROUGH AMAZON
                  </h2>
                  <p className='text-xs md:text-xs lg:text-sm xl:text-xl 2xl:text-3xl !leading-[1.5] font-light text-[#2D2B42] break-words'>
                    Donating is great for everyone when you<br />
                    order through Amazon. You can easily shop<br />
                    for a donation from a wishlist of requested<br />
                    items by our foster care agency partners!
                  </p>
                 </div>
              </div>
            </div>
          </div>
       
      </div>
    </div>
  )
}

export default DonationSection
