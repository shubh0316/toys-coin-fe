"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import aidenImage from '@/assets/aiden.png'


function OurMissionSection() {
  return (
    <div id="our-mission" className="relative bg-gradient-to-br from-[#F9EFE0] to-[#F5E4CF] w-full overflow-hidden">
      <div className="mx-auto w-full max-w-[1950px]"> 
        {/* Mobile Only Section */}
        <div className="md:hidden py-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
            className="flex flex-col items-center space-y-6 md:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: "easeOut"
               }}
               className="space-y-4 md:space-y-5 text-left px-4 md:px-6"
             >
              <h2 className="font-frank text-[#2D2B42] text-6xl sm:text-7xl md:text-7xl font-bold leading-[0.9] tracking-tight">
                <span className="block">Our</span>
                <span className="block">Mission</span>
              </h2>
              <p className="text-xl sm:text-2xl md:text-2xl text-[#2D2B42] text-left font-light !leading-[1.6] sm:!leading-[1.6] md:!leading-[1.6]">
                The transition into foster care is often one of the most difficult moments in a child&apos;s life. Many children enter care unexpectedly, sometimes in the middle of the night, with nothing more than the clothes they&apos;re wearing. Founded by a high school student, Aiden Kelly, Foster Toys provides toys of comfort and essential items to children on day-one of entering into foster care.
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 0.7,
                ease: "easeOut"
              }}
              className="w-full max-w-sm md:max-w-md"
            >
              <Image
                src={aidenImage}
                alt="Our Mission"
                className="w-full rounded-2xl object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* iPad and Desktop View - Hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
          className="hidden md:flex relative z-10 flex-col md:flex-row items-center justify-center gap-10 md:gap-12 lg:gap-20 xl:gap-28 2xl:gap-32 py-12 md:py-14 lg:py-20 xl:py-24 2xl:py-32 px-4 md:px-5 lg:px-6"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.7,
              ease: "easeOut"
            }}
            className="flex justify-center w-full lg:w-1/4"
          >
            <div className="relative max-w-md md:max-w-md lg:max-w-xl xl:max-w-4xl 2xl:max-w-6xl">
              <Image
                src={aidenImage}
                alt="Our Mission - Supporting foster children with comfort toys"
                className="w-full max-w-sm md:max-w-sm lg:max-w-xl xl:max-w-5xl 2xl:max-w-7xl rounded-2xl object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col space-y-5 md:space-y-6 lg:space-y-8 w-full lg:w-1/2 max-w-7xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            <div className="space-y-4 md:space-y-5 lg:space-y-6 text-center lg:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.6,
                  duration: 0.7
                }}
                className="font-frank text-[#2D2B42] text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-widest"
              >
                Our Mission
              </motion.h2>
            </div>

            <motion.div
              className="space-y-5 lg:space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.7,
                staggerChildren: 0.15,
                delayChildren: 0.8
              }}
            >
              <motion.p
                className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 
                           !leading-[1.6] md:!leading-[1.6] lg:!leading-[1.6] xl:!leading-[1.6] 2xl:leading-[1.7] text-[#2D2B42] text-justify md:text-left p-4
                           font-light w-full"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                The transition into foster care is often one of the most difficult moments in a child&apos;s life. 
                Many children enter care unexpectedly, sometimes in the middle of the night, with nothing more 
                than the clothes they&apos;re wearing. Founded by a high school student, Aiden Kelly, Foster Toys 
                provides toys of comfort and essential items to children on day-one of entering into foster care.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default OurMissionSection