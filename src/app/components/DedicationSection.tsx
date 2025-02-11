"use client"
import React from 'react'
import Image from 'next/image'
import bg from "@/assets/bg.jpg";
import Container from './Container';
import { motion } from 'framer-motion';
function DonationSection() {
  return (
    <div>
      <div className="relative w-full h-[850px]">
      {/* Background Image */}
      <Image src={bg} alt="Background" layout="fill" objectFit="cover" className="absolute" />

      {/* Centered Text */}
      <Container> 
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
       className="absolute inset-0 flex justify-center items-center p-14">
        <h1 className="text-white font-frank text-8xl font-bold capitalize">Dedicated to providing<span className='text-[#31CDE6]'>  toys of comfort to over 400,000 kids</span> entering into foster care.</h1>
      </motion.div>
      </Container>
    </div>
    </div>
  )
}

export default DonationSection
