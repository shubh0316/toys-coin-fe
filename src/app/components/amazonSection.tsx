import React from "react";
import Image from "next/image";
import Container from "./Container";
import powered from "@/assets/powered.png";
import amazonButton from "@/assets/amazonButton.png";
function AmazonSection() {
  return (
    <div className="">
      <div className="bg-[#F9EFE0]">
        <Container>
          <div className="flex mt-10 justify-around">
            <div className="flex text-center items-center">
              <div className="font-frank text-center text-[#2D2B42] text-8xl">
                DONATIONS
              </div>
              <Image
                src={powered}
                alt="Powered by Amazon"
                width={90}
                height={20}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-6 text-start">
            <div className="mt-20 font-frank capitalize text-5xl text-[#2D2B42]">
              MAKING DONATIONS
            </div>
            <p className="font-inter text-normal text-[#2D2B42] text-xl">
              The easiest way to make a donation is to use our Amazon Donations
              page to view the best suited toys and non-toy essential items,
              <br /> as suggested by our agency partners.
            </p>
            <div className="flex justify-around">
              <Image
                src={amazonButton}
                alt="Powered by Amazon"
                width={350}
                height={200}
              />
            </div>

            <div className="mt-4 font-frank capitalize text-5xl leading-tight tracking-wide text-[#2D2B42]">
              FIND A PARTICIPATING AGENCY PARTNER
            </div>
            <p className="font-inter text-normal text-[#2D2B42] text-xl w-3/4">
              All foster care agency partners have been vetted and verified so
              you can be assured your donation is well accepted. To donate,
              simply locate the foster care partner of your choice and send your
              toys or non-toy essential donations directly.
            </p>
            {/* Input Field & Go Button */}
            <div className="flex justify-around">
              <div className="w-[700px]">
                <div className="flex mt-6 text-[#2D2B42]">
                  <input
                    type="text"
                    placeholder="Enter agency name..."
                    className="px-4 py-3 w-full border text-[#2D2B42] border-gray-400 rounded-l-2xl text-lg bg-transparent outline-none"
                  />
                  <button className="px-6 py-3 bg-black text-white text-lg font-bold rounded-r-2xl">
                    Go
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8 font-inter text-md text-[#2D2B42]">
             Found 6 results: 
            </div>
            <div className="grid grid-cols-2 gap-20 font-inter text-start">
              <div className="flex flex-col space-y-12"> 
                <div className="  flex flex-col space-y-2">
                  <div className="text-[#2D2B42] font-semibold text-lg">Agency Name</div>
                  <div className="text-[#2D2B42] text-md">Address</div>
                  <div className="text-[#2D2B42] text-md">Phone</div>
                </div>
                <div className="  flex flex-col space-y-2">
                  <div className="text-[#2D2B42] font-semibold text-lg">Agency Name</div>
                  <div className="text-[#2D2B42] text-md">Address</div>
                  <div className="text-[#2D2B42] text-md">Phone</div>
                </div>
                </div>
                <div className="flex flex-col space-y-6"> 
                <div className=" flex flex-col space-y-2">
                  <div className="text-[#2D2B42] font-semibold  text-lg">Agency Name</div>
                  <div className="text-[#2D2B42] text-md">Address</div>
                  <div className="text-[#2D2B42] text-md">Phone</div>
                </div>
                <div className=" flex flex-col space-y-2">
                  <div className="text-[#2D2B42] font-semibold  text-lg">Agency Name</div>
                  <div className="text-[#2D2B42] text-md">Address</div>
                  <div className="text-[#2D2B42] text-md">Phone</div>
                </div>
                </div>
            </div>
            <div className="flex justify-around pb-20"> 
            <button className="text-[#1A1D1F] border font-bold rounded-2xl border-[#1A1D1F] px-4 py-3">
               Load more
            </button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AmazonSection;
