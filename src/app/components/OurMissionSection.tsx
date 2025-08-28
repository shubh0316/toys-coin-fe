"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Container from './Container'
import Image from 'next/image'
import mission from '@/assets/mission.png'

function OurMissionSection() {
  return (
    <div id="our-mission" className="bg-[#F9EFE0] w-full">
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
          className="
            grid grid-cols-1 md:grid-cols-2 
            items-center
            gap-8 lg:gap-16 xl:gap-20 2xl:gap-28 
            px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20
            py-10 lg:py-16 xl:py-20 2xl:py-28
            w-full max-w-[1600px] mx-auto
          "
        >
          {/* Image Section */}
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                delay: 0.2
              }}
              className="w-full flex justify-center"
            >
              <Image
                src={mission}
                alt="Mission Image"
                className="w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[320px] xl:max-w-[360px] 2xl:max-w-[420px]"
              />
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col space-y-6 lg:space-y-8 xl:space-y-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
                delay: 0.3
              }}
              className="
                font-frank text-[#2D2B42] text-start
                text-2xl sm:text-4xl md:text-5xl 
                lg:text-6xl xl:text-7xl 2xl:text-8xl
                leading-tight
              "
            >
              Our Mission
            </motion.h2>

            <motion.div
              className="space-y-4 lg:space-y-6 xl:space-y-8 2xl:space-y-10 text-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.15, delayChildren: 0.4 }}
            >
              <motion.p
                className="
                  text-[#2D2B42] font-light
                  text-base sm:text-lg md:text-xl 
                  lg:text-xl xl:text-2xl 2xl:text-3xl
                  leading-tight lg:leading-tight xl:leading-tight 2xl:tracking-wider
                  max-w-[700px]
                "
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                The transition into foster care is often one of the most difficult moments in a child&apos;s life. Many children enter care unexpectedly, sometimes in the middle of the night, with nothing more than the clothes they&apos;re wearing. Founded by a high school student, Aiden Kelly, Foster Toys provides toys of comfort and essential items to children on day-one of entering into foster care.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default OurMissionSection
