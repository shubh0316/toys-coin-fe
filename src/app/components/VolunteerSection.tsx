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
        <div className="absolute inset-0 flex items-center justify-center px-4 md:px-0">
          <div className="rounded-2xl max-w-4xl w-full">
            <h2 className="text-4xl md:text-[130px] text-center font-frank text-[#2D2B42] capitalize">
              Volunteers
            </h2>
            <p className="text-white text-lg leading-8 md:text-2xl text-center  font-inter mt-4 md:mt-10 px-4 md:px-0">
            We can always use a few more helping hands. If you&apos;re interested in being added to our volunteer roster to help out, please fill out the form.
            </p>
            <div className="mt-6 md:pb-0 pb-10 md:mt-8 flex justify-center">
              <div className="w-48 md:w-200">
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