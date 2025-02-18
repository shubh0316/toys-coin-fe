import React from 'react'
import Image from 'next/image'
import teddy from '@/assets/teddy.png'
function TeddySection() {
  return (
    <div>
    <Image src={teddy} alt="Teddy" className="bg-red-700" />

    </div>
  )
}

export default TeddySection
