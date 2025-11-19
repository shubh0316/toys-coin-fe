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
    <div id="volunteer" className="relative min-h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${sectionBg.src})` }}
      />
      <Container>
        <div className="absolute inset-0 flex items-start md:items-center justify-center px-4 md:px-6 lg:px-8 xl:px-12 pt-24 sm:pt-28 md:pt-0 mb-40">
          <div className="rounded-2xl md:rounded-2xl lg:rounded-3xl 2xl:rounded-[32px] max-w-4xl md:max-w-5xl lg:max-w-5xl xl:max-w-6xl w-full">
            <h2 className="text-5xl sm:text-6xl md:text-[80px] lg:text-[100px] xl:text-[130px] 2xl:text-[170px] text-center font-frank text-[#2D2B42] capitalize leading-tight md:leading-tight lg:leading-tight">
              Volunteers
            </h2>
            <p className="text-white text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-4xl text-center font-inter mt-4 sm:mt-5 md:mt-6 lg:mt-10 xl:mt-12 2xl:mt-16 px-4 md:px-6 lg:px-8 xl:px-12 md:!leading-[1.4] lg:!leading-[1.5] xl:!leading-[1.5] 2xl:!leading-[1.5]">
            We can always use a few more helping hands. If<br className="hidden md:block" /> you&apos;re interested in being added to our volunteer<br className="hidden md:block" /> roster to help out, please fill out the form.
            </p>
            <div className="mt-6 md:mt-6 lg:mt-8 xl:mt-12 2xl:mt-16 md:pb-0 pb-10 flex justify-center">
              <div className="w-48 md:w-[180px] lg:w-[200px] xl:w-[220px] 2xl:w-[300px]">
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