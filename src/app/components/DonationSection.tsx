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
      <div className="relative w-full min-h-screen md:h-[850px] lg:h-[950px] xl:h-[1100px] flex justify-center items-center">
        <Image 
          src={bg2} 
          alt="Background" 
          layout="fill" 
          objectFit="cover" 
          className="absolute -z-10" 
        />
        <Container> 
          <div className="flex md:flex-row flex-col justify-center items-center h-full md:pb-0 pb-4">
            <Image src={amazon} width={480} alt="Amazon Logo" className='lg:w-[400px] 2xl:w-[600px]' />
            <div className='bg-[#31CDE6] md:w-[746px] lg:w-[900px] 2xl:w-[1650px] rounded-[180px] lg:rounded-[220px] xl:rounded-[260px] border-4 lg:border-6 xl:border-8 border-white mt-6 lg:mt-8 2xl:mt-10 flex justify-center items-center'>
              <div className='flex md:flex-row flex-col p-16 lg:p-20 2xl:p-22 gap-8 lg:gap-4 2xl:gap-6 justify-between'>
                 <Image src={panda} alt=" " width={200} className='lg:w-[200px] 2xl:w-[310px]' /> 
                 <div className='flex flex-col space-y-4 lg:space-y-6 2xl:space-y-8'>
                  <div className='font-frank text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl text-wrap text-[#2D2B42]'>
                    DONATIONS MADE THROUGH AMAZON
                  </div>
                  <p className='text-lg lg:text-2xl 2xl:text-3xl  !leading-[1.5] tracking- font-light text-[#2D2B42] '>Donating is great for everyone when <br />you order through Amazon. You can<br /> easily shop for a donation from a<br /> wishlist of requested items by our<br /> foster care agency partners!</p>
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
