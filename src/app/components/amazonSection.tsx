import React from "react";
import Image from "next/image";
import Container from "./Container";
import powered from "@/assets/powered.png";
import amazonButton from "@/assets/amazonButton.png";
import newAmazon from "@/assets/newAmazon.png";

const agencies = [
  { name: "Agency Name 1", address: "123 Main St, City, State", phone: "(123) 456-7890" },
  { name: "Agency Name 2", address: "456 Elm St, City, State", phone: "(987) 654-3210" },
  { name: "Agency Name 3", address: "789 Oak St, City, State", phone: "(555) 123-4567" },
  { name: "Agency Name 4", address: "101 Pine St, City, State", phone: "(111) 222-3333" },
];

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
              <Image src={powered} alt="Powered by Amazon" width={90} height={20} />
            </div>
          </div>
          <div className="flex flex-col space-y-6 text-start">
            <div className="border mt-10 rounded-2xl border-[#2D2B42] p-8">
              <div className="font-frank capitalize text-5xl text-[#2D2B42]">
                MAKING DONATIONS
              </div>
              <p className="font-light text-normal text-[#2D2B42] text-xl leading-8">
                The easiest way to make a donation is to use our Amazon Donations
                page to view the best suited toys and non-<br /> toy essential items,
                as suggested by our agency partners.
              </p>
              <div className="flex justify-around mt-4">
                <Image src={newAmazon} alt="Powered by Amazon" width={350} height={200} />
              </div>
            </div>
            <div className="px-20 space-y-4">
              <div className="mt-4 font-frank capitalize text-5xl leading-tight tracking-wide text-[#2D2B42]">
                FIND A PARTICIPATING AGENCY PARTNER
              </div>
              <p className="font-light text-normal text-[#2D2B42] text-xl leading-8">
                All foster care agency partners have been vetted and verified so
                you can be assured your donation is well accepted. To donate,
                simply locate the foster care partner of your choice and send your
                toys or non-toy essential donations directly.
              </p>
              {/* Input Field & Go Button */}
              <div className="flex justify-around">
                <div className="w-[800px]">
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
              <div className="font-inter text-md text-[#2D2B42] italic">
                Found {agencies.length} results:
              </div>
              {/* Agency Grid */}
              <div className="grid grid-cols-2 gap-20 font-inter text-start">
                {agencies.map((agency, index) => (
                  <div key={index} className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                      <div className="text-[#2D2B42] font-semibold text-lg">{agency.name}</div>
                      <div className="text-[#2D2B42] text-md">{agency.address}</div>
                      <div className="text-[#2D2B42] text-md">{agency.phone}</div>
                    </div>
                    <Image src={amazonButton} alt="Donate via Amazon" width={200} height={120} />
                  </div>
                ))}
              </div>
              <div className="flex justify-around pb-20">
                <button className="text-[#1A1D1F] border font-bold rounded-2xl border-[#1A1D1F] px-4 py-3">
                  Load more
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AmazonSection;
