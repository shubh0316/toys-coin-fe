import React from 'react';
import Image from 'next/image';
import Buttons from '@/assets/Buttons.png';
import toyscoin from '@/assets/toyscoin.png';
import Container from './Container';

function VolunteerSection() {
  return (
    <div className="relative min-h-screen w-full -z-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${toyscoin.src})` }}
      />

      {/* Content Centered */}
      <Container>
      <div className="absolute inset-0 flex  items-center justify-center">
        <div className=" rounded-2xl  ">
          <h2 className="text-8xl text-center font-frank text-[#2D2B42] capitalize">Volunteer?</h2>
          <p className="text-white text-xl text-center   font-inter mt-4">
            Our foster care partners can always use a few more helping hands.<br /> If you’re interested
            in being added to our volunteer roster to<br /> help out in your local area, please fill out
            the form.
          </p>
          <div className="mt-6 flex justify-center">
            <Image src={Buttons} width={200} alt="Volunteer Button" />
          </div>
        </div>
      </div>
      </Container>
    </div>
  );
}

export default VolunteerSection;
