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
      <div className="relative w-full min-h-screen md:h-[850px] flex justify-center items-center">
        <Image 
          src={bg2} 
          alt="Background" 
          layout="fill" 
          objectFit="cover" 
          className="absolute -z-10" 
        />
        <Container> 
          <div className="flex md:flex-row flex-col justify-center items-center h-full md:pb-0 pb-4">
            <Image src={amazon} width={480} alt="Amazon Logo" className= '' />
            <div className='bg-[#31CDE6] md:w-[746px]  rounded-[180px] border-4 border-white mt-6 flex justify-center items-center'>
              <div className='flex md:flex-row flex-col p-16 gap-8 justify-between'>
                 <Image src={panda} alt=" " width={200} /> 
                 <div className='flex flex-col space-y-4'>
                  <div className='font-frank text-2xl md:text-4xl text-[#2D2B42]'>
                    DONATIONS MADE THROUGH AMAZON
                  </div>
                  <p className='text-lg leading-8 font-light text-[#2D2B42]'>Donating is great for everyone when you order through Amazon. You can easily shop for a donation from a wishlist of requested items by our foster care agency partners!</p>
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
