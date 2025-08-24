"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Container from './Container'
import Image from 'next/image'
import mission from '@/assets/mission.png'

function OurMissionSection() {
  return (
    <div id="our-mission" className='bg-[#F9EFE0] '>
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
          className='grid grid-cols-1  overflow-hidden md:grid-cols-2 p-4 md:p-10 gap-8'
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
                className='w-full max-w-[316px] h-auto'
              />
            </motion.div>
          </div>

          {/* Text Content */}
          <div className='flex flex-col space-y-6 p-10'>
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
                The transition into foster care is often one of the most difficult moments in a child&apos;s life. Many children enter care unexpectedly, sometimes in the middle of the night, with nothing more than the clothes they&apos;re wearing. Founded by a high school student, Aiden Kelly, Foster Toys provides toys of comfort and essential items to children on day-one of entering into foster care. 
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default OurMissionSection