"use client";
import React from "react";
import Image from "next/image";
import logoNav from "@/assets/logoNav.png";

const Navbar = () => {
  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-0 z-50">
      <nav className="hidden md:flex bg-[#2D2B42] text-white justify-between items-center p-4">
        <div className="flex items-center">
          <Image src={logoNav} alt="Logo" className="w-[400px] mr-3" />
        </div>
        <ul className="flex space-x-6 font-frank font-6xl">
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
              onClick={() => scrollToSection("donate")}
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
