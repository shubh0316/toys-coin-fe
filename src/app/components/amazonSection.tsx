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
import { getAgencyByZipCode } from "@/services/api";

const AMAZON_PUBLIC_URL = "https://www.amazon.com/hz/wishlist/ls/3NOW5IHJA7V6L?ref_=wl_share";

type NearbyAgency = {
  _id: string;
  organization_name?: string;
  contact_phone?: string;
  contact_email?: string;
  shipping_address?: string;
  suite?: string;
  state?: string;
  zip_code?: string;
  geocoded_address?: string;
  distanceInMiles?: number;
  amazon_public?: string;
};

function AmazonSection() {
  const [zipCode, setZipCode] = useState("");
  const [distance, setDistance] = useState("30");
  const [foundAgencies, setFoundAgencies] = useState<NearbyAgency[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const radiusMiles = distance ? Number(distance) : 30;
  const handleFindAgencies = async () => {
    if (!zipCode.trim()) {
      setError("Please enter a ZIP code to search.");
      setFoundAgencies([]);
      setHasSearched(false);
      return;
    }

    setIsLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const response = await getAgencyByZipCode(zipCode.trim(), radiusMiles);
      const agencies = Array.isArray(response?.agencies) ? response.agencies : [];
      console.log("Agency response:", response);
      console.log("Agencies data:", agencies);
      setFoundAgencies(agencies);
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Unable to load nearby agencies. Please try again."
      );
      setFoundAgencies([]);
    } finally {
      setIsLoading(false);
    }
  };

  const primaryAddress = (agency: NearbyAgency) => {
    if (agency.geocoded_address) {
      return agency.geocoded_address;
    }

    const parts = [
      agency.shipping_address,
      agency.suite,
      agency.state,
      agency.zip_code,
    ].filter((value) => value && value.trim());

    return parts.join(", ");
  };


  return (
    <div id="shop-ship-donations" className="">
      <div className="bg-[#F9EFE0]">
        <Container> 
         <div className="flex flex-col space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 xl:space-y-8 2xl:space-y-10 text-start">
            <div className="px-4 sm:px-6 md:px-6 lg:px-20 xl:px-32 2xl:px-40 space-y-4 sm:space-y-5 md:space-y-5 lg:space-y-6 xl:space-y-8 pt-8 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20">
              <div className="mt-2 sm:mt-4 font-frank capitalize text-center leading-tight tracking-wide text-[#2D2B42]">
                <p className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-9xl">SHOP & SHIP DONATIONS</p>
                <div className="flex flex-col md:flex-row gap-2 sm:gap-3 md:gap-2 lg:gap-4 xl:gap-6 mt-2 sm:mt-2 md:mt-3 lg:mt-3 xl:mt-4 justify-center items-center">
                  <span className="text-4xl sm:text-3xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-7xl">THROUGH</span>
                  <Image
                    src={amazonButton}
                    alt="Donate via Amazon"
                    width={390}
                    height={80}
                    className="h-auto w-[280px] sm:w-[320px] md:w-[300px] lg:w-[420px] xl:w-[480px] 2xl:w-[650px] cursor-pointer hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4 sm:mt-5 md:mt-5 lg:mt-6 xl:mt-6 2xl:mt-8 text-center font-frank capitalize text-2xl sm:text-3xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-8xl leading-tight tracking-wide text-[#2D2B42]">
                  <p>OR</p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-[800px] md:max-w-[800px] lg:max-w-[950px] xl:max-w-[1000px] 2xl:max-w-[1200px]">
                  <label className="block text-[#2D2B42] text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-3xl font-semibold text-start font-inter leading-tight">
                    See if there&apos;s a donation location near you.
                  </label>
                  
                  {/* Mobile: Zip code on top, Distance + Find in row. Desktop: All in row */}
                  <div className="mt-2 sm:mt-3 md:mt-3 lg:mt-4 xl:mt-4 2xl:mt-6 text-[#2D2B42] flex flex-col md:flex-row gap-3 sm:gap-3 md:gap-3 lg:gap-4">
                    {/* Zip Code Input - Full width on mobile, flex-1 on desktop */}
                    <div className="w-full md:flex-1">
                      <input
                        type="text"
                        placeholder="Enter your Zip Code here"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            event.preventDefault();
                            handleFindAgencies();
                          }
                        }}
                        className="px-4 py-3 sm:px-5 sm:py-3 md:px-5 md:py-3.5 lg:px-6 lg:py-3 xl:px-6 xl:py-3 2xl:px-8 2xl:py-5 w-full border text-[#2D2B42] border-black rounded-2xl text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl bg-transparent outline-none"
                      />
                    </div>
                    
                    {/* Distance Dropdown + Find Button - Row on mobile and desktop */}
                    <div className="flex flex-row gap-3 sm:gap-3 md:gap-3 lg:gap-4">
                      {/* Distance Dropdown */}
                      <div className="flex-1 md:flex-initial md:min-w-[140px] lg:min-w-[150px]">
                        <Select value={distance} onValueChange={setDistance}>
                          <SelectTrigger className="h-full w-full border border-black text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl bg-transparent rounded-2xl px-4 py-3 sm:px-5 sm:py-3 md:px-5 md:py-3.5 lg:px-6 lg:py-3 xl:px-6 xl:py-3 2xl:px-8 2xl:py-5">
                            <SelectValue 
                              placeholder="Distance" 
                              className="text-gray-400 font-light" 
                            />
                          </SelectTrigger>
                          <SelectContent className="bg-white text-lg md:text-lg lg:text-xl border border-gray-300 rounded-xl">
                            <SelectItem value="5" className="text-base md:text-lg lg:text-xl py-2">5 miles</SelectItem>
                            <SelectItem value="10" className="text-base md:text-lg lg:text-xl py-2">10 miles</SelectItem>
                            <SelectItem value="25" className="text-base md:text-lg lg:text-xl py-2">25 miles</SelectItem>
                            <SelectItem value="30" className="text-base md:text-lg lg:text-xl py-2">30 miles</SelectItem>
                            <SelectItem value="50" className="text-base md:text-lg lg:text-xl py-2">50 miles</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Find Button */}
                      <div className="flex-1 md:flex-initial md:min-w-[90px] lg:min-w-[100px]">
                        <button 
                          onClick={handleFindAgencies}
                          disabled={isLoading}
                          className="px-6 py-3 sm:px-7 sm:py-3 md:px-6 md:py-3.5 lg:px-8 lg:py-3 xl:px-8 xl:py-3 2xl:px-10 2xl:py-5 bg-[#2D2B42] text-white text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-2xl font-bold rounded-2xl hover:bg-[#3D3B52] transition-colors duration-300 w-full h-full whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {isLoading ? "Searching..." : "Find"}
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {error && (
                    <p className="text-start text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-xl text-red-600 mt-2">
                      {error}
                    </p>
                  )}
                  {/* <p className="text-start font-light text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-lg mt-2 sm:mt-3 md:mt-3 lg:mt-4 xl:mt-5 2xl:mt-6 italic text-gray-500">
                    If you don&apos;t see any results near you, you can still
                    donate to Foster Toys through Amazon. We&apos;re a small but
                    growing team, so we really appreciate your patience as we
                    expand to more locations.
                  </p> */}
                </div>
              </div>
              
              {/* Display search results */}
              {hasSearched && !isLoading && !error && (() => {
                const isOnlyFosterToys = foundAgencies.length === 1 && foundAgencies[0]._id === "foster-toys-default";
                const displayCount = isOnlyFosterToys ? 0 : foundAgencies.length;
                
                return (
                <div className="md:px-4 lg:px-0 2xl:px-10 px-4 sm:px-6">
                  <div className="space-y-6 sm:space-y-8 md:space-y-10">
                    {/* Results header */}
                    <div className="text-[#2D2B42] font-bold text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-3xl">
                      Results: {displayCount} donation location{displayCount === 1 ? "" : "s"} within {radiusMiles}mi of {zipCode}
                    </div>

                    {/* Amazon fallback message */}
                    {foundAgencies.length === 1 && foundAgencies[0]._id === "foster-toys-default" ? (
                      <p className="text-[#2D2B42] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-normal italic w-full leading-relaxed">
                        You can still click the Amazon button below to shop donations from the Foster Toys Wishlist, and Amazon will ship them directly to us.
                      </p>
                    ) : foundAgencies.length > 0 ? (
                      <p className="text-[#2D2B42] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-normal italic w-full leading-relaxed">
                        Simply click the Amazon button below a listing to purchase an item from the agency&apos;s Wishlist, and Amazon will ship your donation directly to them.
                      </p>
                    ) : null}
                    {/* Agency details */}
                    {foundAgencies.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-20 xl:gap-24 2xl:gap-32 font-inter text-start">
                        {foundAgencies.map((agency, index) => (
                          console.log("agency.amazon_public", agency.amazon_public),
                          <div key={agency._id || index} className="flex flex-col space-y-3 sm:space-y-4 md:space-y-4 lg:space-y-6 xl:space-y-8">
                            <div className="flex flex-col space-y-2 md:space-y-2 lg:space-y-2 2xl:space-y-2">
                              <div className="text-[#2D2B42] font-semibold text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl 2xl:text-3xl">
                                {agency.organization_name || "Agency Donation Location"}
                              </div>
                              <div className="text-[#2D2B42] text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-2xl w-full md:w-4/5 lg:w-2/3 xl:w-3/4 2xl:1/2 leading-relaxed md:leading-relaxed lg:leading-relaxed xl:leading-relaxed font-light">
                                {primaryAddress(agency) || "Address coming soon"}
                              </div>
                            
                              {typeof agency.distanceInMiles === "number" && agency.distanceInMiles > 0 && (
                                <div className="text-[#2D2B42] text-xs sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-xl font-semibold">
                                  {agency.distanceInMiles.toFixed(1)} miles away
                                </div>
                              )}


                              {/* Amazon Button for each agency */}
                              {agency.amazon_public && (
                                <div className="flex justify-start mt-4 sm:mt-5 md:mt-5 lg:mt-6">
                                  <button
                                    onClick={() => window.open(agency.amazon_public, "_blank")}
                                    className="cursor-pointer hover:scale-105 transition-transform duration-300"
                                    aria-label={`Shop donations for ${agency.organization_name || "this agency"} on Amazon`}
                                    title={`Shop donations for ${agency.organization_name || "this agency"} on Amazon`}
                                  >
                                    <Image
                                      src={amazonButton}
                                      alt="Donate via Amazon"
                                      width={200}
                                      height={80}
                                      className="h-auto w-[200px] sm:w-[240px] md:w-[260px] lg:w-[300px] xl:w-[340px] 2xl:w-[420px]"
                                    />
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Amazon button */}
                   
                  </div>
                </div>
                );
              })()}
              {isLoading && (
                <div className="md:px-4 lg:px-0 2xl:px-10 px-4 sm:px-6 text-center py-6 sm:py-8 md:py-8">
                  <p className="text-[#2D2B42] text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl">
                    Finding donation locations near you...
                  </p>
                </div>
              )}
              
              <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-18 2xl:mt-20 pb-8 sm:pb-10 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-32">
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AmazonSection;