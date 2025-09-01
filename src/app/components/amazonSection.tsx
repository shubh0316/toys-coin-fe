import React from "react";
import Image from "next/image";
import Container from "./Container";
import amazonButton from "@/assets/amazonButton.png";

const agencies = [
  {
    name: "Foster Toys",
    address: "1100 11th Street, Sacramento, CA 95814",
  }

];

function AmazonSection() {
  return (
    <div className="">
      <div className="bg-[#F9EFE0]">
        <Container>
          {/* Donations Header */}
          {/* <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
            <div className="font-frank text-center text-[#2D2B42] text-5xl md:text-8xl">
              DONATIONS
            </div>
          </div> */}

          <div className="flex flex-col space-y-6 lg:space-y-8 2xl:space-y-10 text-start">
            {/* Making Donations Section */}
            {/* <div className="border mt-10 rounded-2xl border-[#2D2B42] p-4 md:p-8">
              <div className="font-frank capitalize text-3xl md:text-5xl text-[#2D2B42]">
                MAKING DONATIONS
              </div>
              <p className="font-light text-normal text-[#2D2B42] text-base md:text-xl leading-8 mt-4">
                The easiest way to make a donation is to use our Amazon Donations
                page to view the best suited toys and non-toy essential items,
                as suggested by our agency partners.
              </p>
              <div className="flex justify-center mt-4">
                <div className="w-full max-w-[350px]">
                  <Image 
                    src={newAmazon} 
                    alt="Powered by Amazon" 
                    width={350} 
                    height={200} 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div> */}
            {/* Agency Search Section */}
            <div className="px-4 md:px-20 lg:px-32 xl:px-40 space-y-4 lg:space-y-6 xl:space-y-8 pt-10 lg:pt-16 xl:pt-20 ">
              <div className="mt-4  font-frank capitalize text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl leading-tight tracking-wide text-[#2D2B42]">
                <p>SHOP & SHIP DONATIONS</p>
                <div className="md:flex md:flex-row flex-col flex  gap-2 lg:gap-4 xl:gap-6 mt-2 lg:mt-4 xl:mt-6 text-start">
                  <span className="text-start">THROUGH</span>
                  <Image
                    src={amazonButton}
                    alt="Donate via Amazon"
                    width={390}
                    height={80}
                    className="md:h-auto md:w-auto w-[200px] lg:w-[320px] 2xl:w-[480px] cursor-pointer hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4 lg:mt-6 2xl:mt-8 text-center font-frank capitalize text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl leading-tight tracking-wide text-[#2D2B42]">
                  <p>OR</p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-[800px] lg:max-w-[1000px] 2xl:max-w-[1200px]">
                  {/* Label text */}
                  <label className="block text-[#2D2B42] text-base md:text-lg lg:text-xl 2xl:text-3xl font-semibold  text-start font-inter leading-tight ">
                    See if there&apos;s a donation location near you.
                  </label>

                  <div className="flex mt-2 lg:mt-4 2xl:mt-6 text-[#2D2B42]">
                    <input
                      type="text"
                      placeholder="Enter the ZipCode"
                      className="px-4 py-3 lg:px-6 lg:py-4 2xl:px-8 2xl:py-5 w-full border text-[#2D2B42] border-black rounded-l-2xl lg:rounded-l-2xl 2xl:rounded-l-2xl text-base md:text-lg lg:text-xl 2xl:text-2xl bg-transparent outline-none"
                    />
                    <button className="px-6 py-3 lg:px-8 lg:py-4 2xl:px-10 2xl:py-5 bg-[#2D2B42] text-white text-base md:text-lg lg:text-xl 2xl:text-2xl font-bold rounded-r-2xl lg:rounded-r-2xl 2xl:rounded-r-2xl">
                      Go
                    </button>
                  </div>
                  <p className="text-start font-light text-sm lg:text-sm 2xl:text-lg mt-2 lg:mt-4 xl:mt-6 italic text-gray-500">
                    If you don&apos;t see any results near you, you can still
                    donate to Foster Toys through Amazon. We&apos;re a small but
                    growing team, so we really appreciate your patience as we
                    expand to more locations.
                  </p>
                </div>
              </div>

              {/* <div className="font-inter text-sm md:text-lg lg:text-lg 2xl:text-2xl text-[#2D2B42] italic">
                Found {agencies.length} results:
              </div> */}

              {/* Agency Grid */}
              <div className="md:px-20 lg:px-20 2xl:px-40">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 lg:gap-24 xl:gap-32 font-inter text-start">
                  {agencies.map((agency, index) => (
                    <div key={index} className="flex flex-col space-y-4 lg:space-y-6 xl:space-y-8">
                      <div className="flex flex-col space-y-2 lg:space-y-3 2xl:space-y-4">
                        <div className="text-[#2D2B42] font-semibold text-base md:text-xl lg:text-xl 2xl:text-3xl">
                          {agency.name}
                        </div>
                        <div className="text-[#2D2B42] text-sm md:text-lg lg:text-xl 2xl:text-2xl w-1/2 lg:w-2/3 xl:w-3/4 leading-8 lg:leading-relaxed xl:leading-relaxed font-light">
                          Shipping address: <br />
                          {agency.address}
                        </div>
                      </div>
                      <div className="w-full max-w-[350px] lg:max-w-[450px] xl:max-w-[550px]">
                        <Image
                          src={amazonButton}
                          alt="Donate via Amazon"
                          width={100}
                          height={150}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center mt-10 lg:mt-16 xl:mt-20 pb-10 md:pb-20 lg:pb-24 xl:pb-32">
                  {/* <button className="text-[#1A1D1F] border font-bold rounded-2xl lg:rounded-3xl xl:rounded-[32px] border-[#1A1D1F] px-4 py-3 lg:px-6 lg:py-4 xl:px-8 xl:py-5 text-sm md:text-base lg:text-lg xl:text-xl">
                    Load more
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AmazonSection;
