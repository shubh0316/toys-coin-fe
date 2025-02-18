"use client"
import React from 'react'
import footerLogo from '@/assets/footerLogo.png'
import Image from 'next/image'
import icon from "@/assets/icon.png";
import { motion } from "framer-motion";
import twitter from "@/assets/twitter.png";

function Footer() {
  return (
    <div className='relative'>  
      <div className="w-full absolute -bottom-60 md:-bottom-96 bg-[#2D2B42] z-10  md:pt-0 pt-10 pb-4 md:pb-10 rounded-t-[40px] md:rounded-t-[70px]">
       
          <div className='flex flex-col space-y-4 p-4 md:p-10'>
            <div className="w-full max-w-[250px] md:max-w-[600px]">
              <Image 
                src={footerLogo} 
                alt='footerLogo' 
                className="w-full h-auto"
              />
            </div>
            <p className='font-inter text-white text-base md:text-2xl w-full md:w-3/4'>
              Dedicated to providing toys of comfort to over 400,000 kids entering into foster care.
            </p>
            <p className='text-white text-xs md:text-sm font-inter capitalize  md:text-left'>
              ©2025 Toys Coin Foundation, All Rights Reserved
            </p>
          </div>
          <div className='p-4'>  
          <div className="bg-[#31CDE6]  mx-auto md:mt-6 h-auto md:h-[85px] rounded-3xl md:rounded-[50px] flex flex-col md:flex-row items-center justify-between p-4 md:px-4 gap-4">
            <div className='flex flex-col md:flex-row gap-4 w-full md:w-auto'> 
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#3A374D" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'tween', stiffness: 300 }}
                className="bg-[#2D2B42] px-4 py-3 text-white flex items-center justify-center gap-3 rounded-full transition-all duration-300 w-full md:w-auto"
              >
                <span className="text-sm md:text-base">Partner Login</span>
                <Image src={icon} alt="Icon" width={24} className="w-6 h-6 md:w-8 md:h-8" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#3A374D" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'tween', stiffness: 300 }}
                className="bg-[#2D2B42] px-4 py-3 text-white flex items-center justify-center gap-3 rounded-full transition-all duration-300 w-full md:w-auto"
              >
                <span className="text-sm md:text-base">Volunteer Login</span>
                <Image src={icon} alt="Icon" width={24}  className="w-6 h-6 md:w-8 md:h-8" />
              </motion.button>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#3A374D" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'tween', stiffness: 300 }} 
              className='rounded-full bg-[#2D2B42] p-3 md:p-4'
            >
              <Image src={twitter} alt="Twitter" width={24}  className="w-6 h-6 md:w-8 md:h-8" />
            </motion.button>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Footer