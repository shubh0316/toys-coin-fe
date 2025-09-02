import React from "react"
import logo from "@/assets/fosterLogo.png"
import Image from "next/image"

const Fundraiser = () => {
  return (
    <div id="fundraiser" className="bg-[#EFFDFF] py-16 lg:py-20 xl:py-24">
      <div className="flex flex-col justify-center items-center">
        <Image 
          src={logo} 
          alt="Fundraiser Logo" 
          width={450}
          className="md:w-[450px] w-[300px] lg:w-[550px] xl:w-[650px]"
        />
        <div className="font-frank md:text-8xl text-4xl lg:text-9xl xl:text-[10rem] leading-tight tracking-wider text-[#31CDE6] mt-4 lg:mt-6 xl:mt-8">
          FUNDRAISER
        </div>
        <div 
          style={{ position: "relative", overflow: "hidden", height: "500px", width: "100%", marginTop: "2rem" }}
          className="max-w-4xl lg:max-w-5xl xl:max-w-6xl  w-full"
        >
          <iframe
            title="Donation form powered by Zeffy"
            style={{
              position: "absolute",
              border: "0",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              width: "100%",
              height: "100%",
            }}
            src="https://www.zeffy.com/embed/donation-form/foster-toys-campaign"
            allow="payment *"
            allowTransparency={true}
          />
        </div>
      </div>
    </div>
  )
}

export default Fundraiser
