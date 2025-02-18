import React from "react";
import Image from "next/image";
import Container from "./Container";
import powered from "@/assets/powered.png";
import amazonButton from "@/assets/amazonButton.png";
import newAmazon from "@/assets/newAmazon.png";

const agencies = [
  { name: "Children's Hope Foster Family Agency", address: "3457 Colusa Hwy, Yuba City, CA 95993" },
  { name: "EA Family Services", address: "20 Bridge St, Yuba City, CA 9599" },
  { name: "Children's Hope Foster Family Agency", address: "007 Live Oak Blvd Suite A2, Yuba City, CA 95991"},
  { name: "El Shaddai Family Ranch Foster Family Agency", address: "628 D St,  Marysville, CA 95901" },
];

function AmazonSection() {
  return (
    <div className="">
      <div className="bg-[#F9EFE0]">
        <Container>
          {/* Donations Header */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
            <div className="font-frank text-center text-[#2D2B42] text-5xl md:text-8xl">
              DONATIONS
            </div>
            <Image src={powered} alt="Powered by Amazon" width={90} height={20} />
          </div>

          <div className="flex flex-col space-y-6 text-start">
            {/* Making Donations Section */}
            <div className="border mt-10 rounded-2xl border-[#2D2B42] p-4 md:p-8">
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
            </div>

            {/* Agency Search Section */}
            <div className="px-4 md:px-20 space-y-4">
              <div className="mt-4 font-frank capitalize text-3xl md:text-5xl leading-tight tracking-wide text-[#2D2B42]">
                FIND A PARTICIPATING AGENCY PARTNER
              </div>
              <p className="font-light text-normal text-[#2D2B42] text-base md:text-xl leading-8">
                All foster care agency partners have been vetted and verified so
                you can be assured your donation is well accepted. To donate,
                simply locate the foster care partner of your choice and send your
                toys or non-toy essential donations directly.
              </p>

              {/* Search Input */}
              <div className="flex justify-center">
                <div className="w-full max-w-[800px]">
                  <div className="flex mt-6 text-[#2D2B42]">
                    <input
                      type="text"
                      placeholder="Enter agency name..."
                      className="px-4 py-3 w-full border text-[#2D2B42] border-gray-400 rounded-l-2xl text-base md:text-lg bg-transparent outline-none"
                    />
                    <button className="px-6 py-3 bg-black text-white text-base md:text-lg font-bold rounded-r-2xl">
                      Go
                    </button>
                  </div>
                </div>
              </div>

              <div className="font-inter text-sm md:text-lg text-[#2D2B42] italic">
                Found {agencies.length} results:
              </div>

              {/* Agency Grid */}
              <div className=" md:px-20"> 
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 font-inter text-start ">
                {agencies.map((agency, index) => (
                  <div key={index} className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                      <div className="text-[#2D2B42] font-semibold text-base md:text-xl">
                        {agency.name}
                      </div>
                      <div className="text-[#2D2B42] text-sm md:text-lg w-1/2 leading-8 font-light">
                       Shipping address: <br /> 
                       {agency.address}
                      </div>
                      
                    </div>
                    <div className="w-full max-w-[350px]">
                      <Image 
                        src={amazonButton} 
                        alt="Donate via Amazon" 
                        width={400} 
                        height={150} 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-10 pb-10 md:pb-20">
                <button className="text-[#1A1D1F] border font-bold rounded-2xl border-[#1A1D1F] px-4 py-3 text-sm md:text-base">
                  Load more
                </button>
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
