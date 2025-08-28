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
        <div className="absolute inset-0 flex items-center justify-center px-4 md:px-0 lg:px-8 xl:px-12">
          <div className="rounded-2xl lg:rounded-3xl 2xl:rounded-[32px] max-w-4xl lg:max-w-5xl xl:max-w-6xl w-full">
            <h2 className="text-4xl md:text-[130px] lg:text-[130px] 2xl:text-[170px] text-center font-frank text-[#2D2B42] capitalize">
              Volunteers
            </h2>
            <p className="text-white text-lg leading-8 md:text-2xl lg:text-2xl 2xl:text-4xl text-center font-inter mt-4 md:mt-10 lg:mt-12 xl:mt-16 px-4 md:px-0 lg:px-8 xl:px-12 lg:leading-relaxed xl:leading-relaxed">
            We can always use a few more helping hands. If you&apos;re interested in being added to our volunteer roster to help out, please fill out the form.
            </p>
            <div className="mt-6 md:pb-0 pb-10 md:mt-8 lg:mt-12 xl:mt-16 flex justify-center">
              <div className="w-48 md:w-200 lg:w-[200px] 2xl:w-[300px]">
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