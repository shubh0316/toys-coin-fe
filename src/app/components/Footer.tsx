"use client"
import React from 'react'
import footerLogo from '@/assets/footerLogo.png'
import Image from 'next/image'
import icon from "@/assets/icon.png";
import { motion } from "framer-motion";
import twitter from "@/assets/twitter.png";
import Container from './Container';
function Footer() {
  return (
   
<div className='relative'>  
<div className="w-full absolute -bottom-96 bg-[#2D2B42] z-10 pb-10 rounded-t-[70px]">
      <Container> 
      <div className='flex flex-col space-y-4 justify-self-start p-10'>
        <Image src={footerLogo} alt='footerLogo' width={600} />
         <p className='font-inter text-white text-2xl w-3/4'>
         Dedicated to providing toys of comfort to over 400,000 kids entering into foster care.
         </p>
         <p className='text-white text-sm font-inter capitalize'>
         ©2025 Toys Coin Foundation, All Rights Reserved
         </p>
      </div>
      <div className="bg-[#31CDE6] mx-auto  h-[85px] rounded-[50px] flex items-center justify-between px-4">
        <div className='flex space-x-4'> 
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: "#3A374D" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'tween', stiffness: 300 }}
        className="bg-[#2D2B42] px-4 py-3 text-white flex items-center gap-3 rounded-full transition-all duration-300"
      >
        <span>Partner Login</span>
        <Image src={icon} alt="Icon" width={34} height={34} />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: "#3A374D" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'tween', stiffness: 300 }}
        className="bg-[#2D2B42] px-4 py-3 text-white flex items-center gap-3 rounded-full transition-all duration-300"
      >
        <span>Volunteer Login</span>
        <Image src={icon} alt="Icon" width={34} height={34} />
      </motion.button>
      </div>
      <motion.button whileHover={{ scale: 1.05, backgroundColor: "#3A374D" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'tween', stiffness: 300 }} className='rounded-full bg-[#2D2B42] p-4'>
       <Image src={twitter} alt=" " width={34} height={34} />
      </motion.button>
    </div>
    </Container>
    </div>
    </div>
 
  )
}

export default Footer
