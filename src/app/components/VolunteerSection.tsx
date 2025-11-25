"use client"
import React from 'react';
import Image from 'next/image';
import Buttons from '@/assets/Buttons.png';
import sectionBg from '@/assets/sectionBg.png';
import Container from './Container';

const VolunteerSection = () => {
  const handleVolunteerOnboarding = () => {
     window.open('/v/volunteer/onboarding', '_blank');
  }
  return (
    <div id="volunteer" className="relative min-h-screen md:h-[500px] lg:h-[550px] xl:min-h-screen 2xl:min-h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${sectionBg.src})` }}
      />
      {/* Mobile View - Without Container */}
      <div className="sm:hidden absolute inset-0 flex items-start justify-center pt-24 mb-40 w-full">
        <div className="w-full">
          <h2 className="text-5xl sm:text-6xl text-center font-frank text-[#2D2B42] capitalize leading-tight">
            Volunteers
          </h2>
          <p className="text-white text-xl sm:text-2xl text-center font-light font-inter mt-4 sm:mt-5 px-4">
            We can always use a few<br /> more helping hands. If you&apos;re<br /> interested in being added to<br /> our volunteer roster to help<br /> out, please fill out the form.
          </p>
          <div className="mt-6 pb-10 flex justify-center">
            <div className="w-48">
              <button 
                onClick={handleVolunteerOnboarding}>
              <Image 
                src={Buttons} 
                alt="Volunteer Button" 
                className="w-full h-auto"
              />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet/iPad and Desktop View - With Container */}
      <Container>
        <div className="hidden sm:flex absolute inset-0 items-center justify-center px-6 md:px-6 lg:px-8 xl:px-12">
          <div className="rounded-2xl md:rounded-2xl lg:rounded-3xl 2xl:rounded-[32px] max-w-5xl md:max-w-5xl lg:max-w-5xl xl:max-w-6xl w-full">
            <h2 className="text-[60px] sm:text-[70px] md:text-[80px] lg:text-[100px] xl:text-[130px] 2xl:text-[170px] text-center font-frank text-[#2D2B42] capitalize leading-tight md:leading-tight lg:leading-tight">
              Volunteers
            </h2>
            <p className="text-white text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-4xl text-center font-light font-inter mt-6 md:mt-6 lg:mt-10 xl:mt-12 2xl:mt-16 px-6 md:px-6 lg:px-8 xl:px-12 !leading-[1.4] md:!leading-[1.4] lg:!leading-[1.5] xl:!leading-[1.5] 2xl:!leading-[1.5]">
            We can always use a few more helping hands. If<br /> you&apos;re interested in being added to our volunteer<br /> roster to help out, please fill out the form.
            </p>
            <div className="mt-6 md:mt-6 lg:mt-8 xl:mt-12 2xl:mt-16 flex justify-center">
              <div className="w-[150px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px] 2xl:w-[300px]">
                <button 
                  onClick={handleVolunteerOnboarding}>
                <Image 
                  src={Buttons} 
                  alt="Volunteer Button" 
                  className="w-full h-auto"
                />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default VolunteerSection;