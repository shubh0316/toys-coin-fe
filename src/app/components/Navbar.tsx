"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import logoNav from "@/assets/logoNav.png";

const ZEFFY_DONATION_URL = "https://www.zeffy.com/en-US/donation-form/foster-toys-campaign";

const Navbar = () => {
  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDonateClick = () => {
    window.open(ZEFFY_DONATION_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="sticky top-0 z-50">
      {/* Mobile/iPad View - Logo + Donate Button */}
      <nav className="flex xl:hidden bg-[#2D2B42] text-white justify-between items-center p-4">
        <div className="flex items-center">
          <Image src={logoNav} alt="Logo" className="w-[200px] sm:w-[250px] md:w-[300px] h-auto" />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "tween", stiffness: 300 }}
          className="rounded-full bg-[#31CDE6] text-white px-6 py-2.5 font-frank text-base sm:text-lg font-semibold"
          onClick={handleDonateClick}
        >
          DONATE
        </motion.button>
      </nav>

      {/* Laptop and Larger Screens - Full Navigation */}
      <nav className="hidden xl:flex bg-[#2D2B42] text-white justify-between items-center p-4 xl:p-6 2xl:p-8">
        <div className="flex items-center">
          <Image src={logoNav} alt="Logo" className="mr-3 xl:w-[400px] 2xl:w-[450px] h-auto" />
        </div>
        <ul className="flex space-x-6 xl:space-x-10 2xl:gap-16 font-frank text-xl xl:text-2xl 2xl:text-4xl">
          <li>
            <button
              onClick={() => scrollToSection("our-mission")}
              className="hover:text-[#31CDE6] transition-colors"
            >
              OUR MISSION
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("did-you-know")}
              className="hover:text-[#31CDE6] transition-colors"
            >
              Did You Know?
            </button>
          </li>
          <li>
            <button
              onClick={handleDonateClick}
              className="hover:text-[#31CDE6] transition-colors"
            >
              Donate
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("fundraiser")}
              className="hover:text-[#31CDE6] transition-colors"
            >
              Fundraiser
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("volunteer")}
              className="hover:text-[#31CDE6] transition-colors"
            >
              Volunteer
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
