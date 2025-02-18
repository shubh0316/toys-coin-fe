"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Container from './Container'
import Image from 'next/image'
import mission from '@/assets/mission.png'

function OurMissionSection() {
  return (
    <div className='bg-[#F9EFE0]'>
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            duration: 0.8
          }}
          className='grid grid-cols-1 md:grid-cols-2 p-10 gap-8'
        >
          {/* Image Section */}
          <div className='flex items-center justify-center'>
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 150,
                damping: 15,
                delay: 0.2
              }}
            >
              <Image 
                src={mission} 
                alt='Mission Image' 
                className='w-full max-w-[416px] h-auto'
              />
            </motion.div>
          </div>

          {/* Text Content */}
          <div className='flex flex-col space-y-6'>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 120,
                damping: 20,
                delay: 0.3
              }}
              className='text-4xl md:text-7xl text-start font-frank text-[#2D2B42]'
            >
              Our Mission
            </motion.h2>

            <motion.div 
              className='space-y-6 text-start'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.15, delayChildren: 0.4 }}
            >
              <motion.p 
                className='text-[#2D2B42] text-lg font-light'
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                The beginning of the transition period into foster care can be one of the most difficult times for a child. Many times, the child is placed in foster care during the middle of the night, with nothing but the clothes they are wearing. Toys Coin Foundation is a new charity dedicated to offering much needed comfort in the form of toys and non-toy essential items during this difficult time. All donations made by our community are shipped directly by donors to our vetted foster care agency partners.
              </motion.p>

              <motion.p 
                className='text-lg font-semibold italic text-[#2D2B42]'
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 150, delay: 0.1 }}
              >
                Our mission, with your help, is to spread awareness and build a growing community supporting over 400,000 children entering into the foster care system each year.
              </motion.p>

              <motion.p 
                className='text-[#2D2B42] font-light text-lg'
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 150, delay: 0.2 }}
              >
                The TOYS coin is a community token acting as the catalyst for building awareness and growing our amazing community in the crypto space and beyond. 
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default OurMissionSection