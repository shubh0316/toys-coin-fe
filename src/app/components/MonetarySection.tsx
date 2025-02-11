import React from 'react'
import Container from './Container'
import Image from 'next/image'
import logo from "@/assets/logo.png";
import dexButton from "@/assets/dexButton.png";
import trading from "@/assets/trading.png";
function MonetarySection() {
  return (
    <div>
      <div className="bg-[#F9EFE0]">
        <Container>
          <div className="flex mt-10 justify-around">
              <div className="font-frank text-center text-[#2D2B42] text-8xl">
                MONETARY DONATIONS
            </div>
          </div>
          <div className='mt-10'>
            <div className='grid grid-cols-2 gap-20'>
            <div className='mt-10 '>
                <div className='flex flex-col space-y-8'>
                  <Image src={logo} alt=" " />
                  <div className='font-inter text-xl text-[#2D2B42]'>
                  For monetary donations we encourage you to consider showing your support by buying the TOYS coin. It helps us to grow our community and build awareness for the Toys Coin Foundation. 
                  </div>
                  <Image src={dexButton} alt=" " />
                </div>
               
            </div>
            </div>
          
          </div>
          <div className='flex justify-around mt-20 pb-20'>
          <Image src={trading} alt=" " />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default MonetarySection
