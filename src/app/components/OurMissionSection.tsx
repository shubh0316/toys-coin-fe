"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import mission from '@/assets/teddy2.png'
import OurMission from '@/assets/OurMission.png'


function OurMissionSection() {
  return (
    <div id="our-mission" className="relative bg-gradient-to-br from-[#F9EFE0] to-[#F5E4CF] w-full overflow-hidden">
      <div className="mx-auto w-full max-w-[1950px]"> 
        {/* Mobile Only Section */}
        <div className="lg:hidden py-16 md:py-20 px-4 md:px-6">
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
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.7,
                ease: "easeOut"
              }}
              className="w-full max-w-sm md:max-w-md"
            >
              <Image
                src={OurMission}
                alt="Our Mission"
                className="w-full rounded-2xl object-cover"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: "easeOut"
              }}
              className="space-y-4 md:space-y-5 text-center px-4 md:px-6"
            >
              <h2 className="font-frank text-[#2D2B42] text-4xl sm:text-5xl md:text-5xl font-bold leading-widest hidden lg:block">
                Our Mission
              </h2>
              <p className="text-lg sm:text-xl md:text-xl leading-relaxed text-[#2D2B42] text-justify font-light">
                The transition into foster care is often one of the most difficult moments in a child&apos;s life. Many children enter care unexpectedly, sometimes in the middle of the night, with nothing more than the clothes they&apos;re wearing. Founded by a high school student, Aiden Kelly, Foster Toys provides toys of comfort and essential items to children on day-one of entering into foster care.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop/Laptop View - Hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
          className="hidden lg:flex relative z-10 flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 xl:gap-28 2xl:gap-32 py-16 lg:py-20 xl:py-24 2xl:py-32"
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
            <div className="relative max-w-md">
              <Image
                src={mission}
                alt="Our Mission - Supporting foster children with comfort toys"
                className="w-full max-w-sm sm:max-w-sm md:max-w-xl lg:max-w-xl xl:max-w-2xl 2xl:max-w-md rounded-2xl object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col space-y-6 md:space-y-8 w-full lg:w-1/2 max-w-7xl"
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
                className="font-frank text-[#2D2B42] text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-widest"
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
                className="text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl 
                           !leading-[1.6] lg:!leading-[1.6] xl:!leading-[1.6] 2xl:leading-[1.7] text-[#2D2B42] text-justify p-4 lg:p-4 xl:p-4
                           font-light lg:text-left w-full"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                The transition into foster care is often one of the most difficult moments in a child&apos;s life. 
                Many children enter care unexpectedly, sometimes in the middle of the night, with nothing more 
                than the clothes they&apos;re wearing. Founded by a high school student, Aiden Kelly, Foster Toys 
                provides toys of comfort and essential items to children on day-one of entering into foster care, 
                offering a moment of comfort during their most challenging time.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default OurMissionSection