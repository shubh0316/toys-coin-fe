import React from 'react'
import Container from './Container'
import Image from 'next/image'
import logo from "@/assets/logo.png";
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

            </div>
            </div>

          </div>
        </Container>
      </div>
    </div>
  )
}

export default MonetarySection
