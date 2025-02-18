import React from 'react';
import Image from 'next/image';
import Buttons from '@/assets/Buttons.png';
import toyscoin from '@/assets/toyscoin.png';
import Container from './Container';

function VolunteerSection() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${toyscoin.src})` }}
      />

      {/* Content Centered */}
      <Container>
        <div className="absolute inset-0 flex items-center justify-center px-4 md:px-0">
          <div className="rounded-2xl max-w-4xl w-full">
            <h2 className="text-4xl md:text-[130px] text-center font-frank text-[#2D2B42] capitalize">
              Volunteer?
            </h2>
            <p className="text-white text-base md:text-2xl text-center font-inter mt-4 md:mt-10 px-4 md:px-0">
              Our foster care partners can always use a few more helping hands. 
              If you're interested in being added to our volunteer roster to help 
              out in your local area, please fill out the form.
            </p>
            <div className="mt-6 md:mt-8 flex justify-center">
              <div className="w-48 md:w-200">
                <Image 
                  src={Buttons} 
                  alt="Volunteer Button" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default VolunteerSection;