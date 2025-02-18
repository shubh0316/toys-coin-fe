import React from "react";
import Container from "./Container";
import Image from "next/image";
import logo from "@/assets/logo.png";
import dexButton from "@/assets/dexButton.png";
import trading from "@/assets/trading.png";
import qr from "@/assets/qr.png";
function MonetarySection() {
  return (
    <div>
      <div className="bg-[#F9EFE0]">
        <Container>
          {/* Title Section */}
          <div className="flex mt-10 justify-start md:justify-around">
            <div className="font-frank text-center text-[#2D2B42] text-5xl md:text-8xl">
              MONETARY DONATIONS
            </div>
          </div>

          <Container> 
            {/* Main Content */}
            <div className="mt-10">
              <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4">
                {/* Left Column */}
                <div className="mt-4 md:mt-10 w-full md:w-auto">
                  <div className="flex flex-col space-y-6 md:space-y-8 items-start md:items-start">
                    <div className="w-full max-w-[600px]  md:p-0">
                      <Image 
                        src={logo} 
                        alt="Logo" 
                        width={600} 
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="font-light text-lg md:text-xl text-[#2D2B42]  md:px-0">
                      For monetary donations we encourage you to consider showing
                      your support by buying the TOYS coin. It helps us to grow
                      our community and build awareness for the Toys Coin
                      Foundation.
                    </div>
                    <div className="w-full max-w-[600px] md:p-0">
                      <Image 
                        src={dexButton} 
                        alt="DEX Button" 
                        width={600} 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column (QR Code) */}
                <div className="flex flex-col space-y-4 items-center justify-center">
                  <div className="w-full max-w-[400px] md:max-w-[600px]  md:p-0">
                    <Image 
                      src={qr} 
                      alt="QR Code" 
                      width={600} 
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-[#2D2B42] text-center font-semibold text-xl md:text-2xl mt-0 md:mt-4">
                    Buy TOYS
                  </p>
                </div>
              </div>
            </div>
          </Container>

          {/* Trading Image */}
          <div className="flex justify-center mt-10 md:mt-20 pb-10 md:pb-20">
            <div className="w-full max-w-[1200px] md:px-0">
              <Image 
                src={trading} 
                alt="Trading" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default MonetarySection;
