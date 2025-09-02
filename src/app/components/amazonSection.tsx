"use client"
import React, { useState } from "react";
import Image from "next/image";
import Container from "./Container";
import amazonButton from "@/assets/amazonButton.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import amazon2 from "@/assets/amazon2.png";

const agencies = [
  {
    name: "Foster Toys",
    address: "1100 11th Street, Sacramento, CA 95814",
    phone: "(916) 483-0330"
  }
];

// Mock function to simulate finding agencies by zip code
const findAgenciesByZipCode = (zipCode: string, distance: string) => {
  // In a real app, this would be an API call
  console.log(`Searching for agencies near ${zipCode} within ${distance} miles`);
  
  // For demo purposes, return the agency if zip code is not empty
  if (zipCode.trim() !== "") {
    return agencies;
  }
  return [];
};

function AmazonSection() {
  const [zipCode, setZipCode] = useState("");
  const [distance, setDistance] = useState("");
  const [foundAgencies, setFoundAgencies] = useState<typeof agencies>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleFindAgencies = () => {
    const results = findAgenciesByZipCode(zipCode, distance);
    setFoundAgencies(results);
    setHasSearched(true);
  };

  return (
    <div className="">
      <div className="bg-[#F9EFE0]">
        <Container> 
         <div className="flex flex-col space-y-6 lg:space-y-8 2xl:space-y-10 text-start">
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
                  <label className="block text-[#2D2B42] text-base md:text-lg lg:text-xl 2xl:text-3xl font-semibold  text-start font-inter leading-tight ">
                    See if there&apos;s a donation location near you.
                  </label>
                  
                  {/* Three separate inputs with gaps */}
                  <div className="flex flex-col md:flex-row mt-2 lg:mt-4 2xl:mt-6 text-[#2D2B42] gap-3 md:gap-4">
                    {/* Zip Code Input */}
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Enter your Zip Code here"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        className="px-4 py-3 lg:px-6 lg:py-3 2xl:px-8 2xl:py-5 w-full border text-[#2D2B42] border-black rounded-2xl text-base md:text-lg lg:text-xl 2xl:text-2xl bg-transparent outline-none"
                      />
                    </div>
                    
                    {/* Distance Dropdown */}
                    <div className="flex-">
  <Select value={distance} onValueChange={setDistance}>
    <SelectTrigger className="h-full mr-10 w-full border border-black text-base md:text-lg lg:text-xl 2xl:text-2xl bg-transparent rounded-2xl px-4 py-3 lg:px-6 lg:py-3 2xl:px-8 2xl:py-5">
      <SelectValue 
        placeholder="Distance" 
        className="text-gray-400 font-light" 
      />
    </SelectTrigger>
    <SelectContent className="bg-white text-xl border border-gray-300 rounded-xl">
      <SelectItem value="5" className="text-lg md:text-xl py-2">5 miles</SelectItem>
      <SelectItem value="10" className="text-lg md:text-xl py-2">10 miles</SelectItem>
      <SelectItem value="25" className="text-lg md:text-xl py-2">25 miles</SelectItem>
      <SelectItem value="50" className="text-lg md:text-xl py-2">50 miles</SelectItem>
    </SelectContent>
  </Select>
</div>

                    
                    {/* Find Button */}
                    <div className="flex-">
                      <button 
                        onClick={handleFindAgencies}
                        className="px-6 py-3 lg:px-8 lg:py-3 2xl:px-10 2xl:py-5 bg-[#2D2B42] text-white text-base md:text-lg lg:text-lg 2xl:text-2xl font-bold rounded-2xl hover:bg-[#3D3B52] transition-colors duration-300 w-full h-full"
                      >
                        Find
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-start font-light text-sm lg:text-sm 2xl:text-lg mt-2 lg:mt-4 xl:mt-6 italic text-gray-500">
                    If you don&apos;t see any results near you, you can still
                    donate to Foster Toys through Amazon. We&apos;re a small but
                    growing team, so we really appreciate your patience as we
                    expand to more locations.
                  </p>
                </div>
              </div>
              
              {/* Display search results */}
              {hasSearched && (
                <div className="md:px-0  2xl:px-10">
                  {/* Message that appears regardless of search results */}
                  <div className="text-start py-8">
                    <p className="text-[#2D2B42] text-lg md:text-xl lg:text-xl  mb-4 italic 2xl:text-3xl font-light !leading-[1.5]">
                      There are no donation locations within {distance}mi of {zipCode}. 
                      You can still click the Amazon button to shop and ship donations, 
                      and we&apos;ll take care of the rest.
                    </p>
                  </div>
                  
                  {foundAgencies.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 lg:gap-24 xl:gap-32 font-inter text-start">
                      {foundAgencies.map((agency, index) => (
                        <div key={index} className="flex flex-col space-y-4 lg:space-y-6 xl:space-y-8">
                          <div className="flex flex-col space-y-2 lg:space-y- 2xl:space-y-2">
                            <div className="text-[#2D2B42] font-semibold text-base md:text-xl lg:text-lg 2xl:text-3xl">
                              {agency.name}
                            </div>
                            <div className="text-[#2D2B42] text-sm md:text-lg lg:text-lg 2xl:text-2xl w-1/2 lg:w-2/3 xl:w-3/4 2xl:1/2 leading-8 lg:leading-relaxed xl:leading-relaxed font-light">
                             
                              {agency.address}
                            </div>
                            <div className="text-[#2D2B42] text-sm md:text-lg lg:text-lg 2xl:text-2xl w-1/2 lg:w-2/3 xl:w-3/4 leading-8 lg:leading-relaxed xl:leading-relaxed font-light">

                              {agency.phone}
                            </div>
                          </div>
                          <div className="w-full max-w-[350px] lg:max-w-[250px] 2xl:max-w-[550px]">
                            <Image
                              src={amazon2}
                              alt="Donate via Amazon"
                              width={100}
                              height={150}
                              className="w-full h-auto"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-[#2D2B42] text-lg md:text-xl lg:text-2xl mb-4">
                        No specific agencies found, but you can still donate through Amazon.
                      </p>
                    </div>
                  )}
                </div>
              )}
              
              <div className="flex justify-center mt-10 lg:mt-16 xl:mt-20 pb-10 md:pb-20 lg:pb-24 xl:pb-32">
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AmazonSection;