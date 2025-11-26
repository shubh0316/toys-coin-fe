"use client";
import React from "react";
import footerLogo from "@/assets/logoNav.png";
import Image from "next/image";
import { motion } from "framer-motion";
import facebook from "@/assets/facebook_white.png";
import twitter from "@/assets/twitter_white.png";
import agencyButton from "@/assets/agency.png";
import contactButton from "@/assets/contact.png";
import volunteerButton from "@/assets/volunteer.png";
import agencyButton2 from "@/assets/agencyButton.png";
import volunteerButton2 from "@/assets/volunteerButtonMobile.png";
import contactButton2 from "@/assets/contactButton.png";
// ✅ shadcn/ui imports
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const handleAgencyLogin = () => {
    window.open("/v/agency/login", "_blank"); 
  }
   const handleVolunteerLogin = () => {
    window.open("/v/volunteer/Login", "_blank"); 
  };
  
  return (
    <div className="relative mt-20">
      <div className="w-full absolute -bottom-60 md:-bottom-75 lg:-bottom-96 bg-[#2D2B42] z-10 md:pt-0 pt-10 pb-4 md:pb-6 lg:pb-10 rounded-t-[40px] md:rounded-t-[50px] lg:rounded-t-[70px]">
        <div className="flex flex-col space-y-4 md:space-y-5 lg:space-y-4 xl:space-y-6 2xl:space-y-10 sm:p-4 p-4 md:p-6 lg:p-12 xl:p-16 2xl:p-20">
          <div className="w-full max-w-[250px] md:max-w-[300px] lg:max-w-[450px] xl:max-w-[600px] 2xl:max-w-[850px]">
            <Image
              src={footerLogo}
              alt="footerLogo"
              className="w-full h-auto"
            />
          </div>
          <p className="font-inter text-white font-bold text-2xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-5xl w-full md:w-3/4 lg:w-2/3 !leading-[1.4] md:!leading-[1.4]">
            Dedicated to providing{" "}
            <span className="text-[#31CDE6]">toys of</span>{" "}
            <span className="text-[#31CDE6]">comfort</span><br className="hidden md:block" />{" "}to children entering into foster care.
 
            
          </p>
          <div className="mt-4 md:mt-5 lg:mt-4">
            <p className="text-gray-300 md:text-white font-light text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-lg tracking-wider font-inter uppercase text-start md:text-left">
              FOSTER TOYS IS A 501(C)3 TAX-EXEMPT NONPROFIT  ORGANIZATION TAX ID 39-3621457
            </p>
            <p className="text-white text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-bold font-inter uppercase text-center md:text-left hidden md:block">
              ©2025 Foster Toys, Inc. All Rights Reserved
            </p>
          </div>
        </div>

        <div className="p-4 md:p-5 lg:p-4">
          <div className="bg-[#31CDE6] mx-auto md:mt-4 lg:mt-6 h-auto md:h-[70px] lg:h-[85px] xl:h-[90px] 2xl:h-[120px] rounded-3xl md:rounded-[35px] lg:rounded-[50px] flex flex-col md:flex-row items-center justify-between p-4 md:p-4 lg:p-4 md:px-4 lg:px-4 gap-4">
            <div className="flex flex-col md:flex-row gap-3 md:gap-3 lg:gap-4 w-full md:w-auto items-center">
              {/* ✅ Contact Us Modal with image button */}
              <Dialog>
                <DialogTrigger asChild>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "tween", stiffness: 300 }}
                    className="w-full md:w-auto rounded-full transition-all duration-300"
                  >
                    <Image
                      src={contactButton2}
                      alt="Contact Us"
                      className="w-full md:hidden h-auto"
                    />
                    <Image
                      src={contactButton}
                      alt="Contact Us"
                      className="hidden md:block md:max-w-[160px] lg:max-w-[200px] xl:max-w-[220px] 2xl:max-w-[280px] h-auto"
                    />
                  </motion.button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px] bg-[#F9EFE0] rounded-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-6xl font-bold text-[#2D2B42] font-frank">
                      Contact Us
                    </DialogTitle>
                    <p className="text-sm md:text-sm lg:text-base xl:text-base text-black font-inter">
                    Please fill out the form and someone from the right department will get back to you or give us a call at<br /> (916) 384-0330.</p>
                  </DialogHeader>
                  <form className="space-y-6 md:space-y-7 lg:space-y-8 mt-4">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name" className="text-sm md:text-base">Name</Label>
                      <Input id="name" required className="bg-white h-10 md:h-11 lg:h-12" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email" className="text-sm md:text-base">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="bg-white h-10 md:h-11 lg:h-12"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="phone" className="text-sm md:text-base">Phone Number (Optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        className="bg-white h-10 md:h-11 lg:h-12"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="message" className="text-sm md:text-base">How can we help you?</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        required
                        className="bg-white text-sm md:text-base"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#2D2B42] text-white hover:bg-[#3A374D] h-10 md:h-11 lg:h-12 text-sm md:text-base lg:text-lg"
                    >
                      Submit
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>

              {/* ✅ Agency Login with image button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "tween", stiffness: 300 }}
                onClick={handleAgencyLogin}
                className="w-full md:w-auto rounded-full transition-all duration-300"
              >
                <Image
                  src={agencyButton2}
                  alt="Agency Login"
                  className="w-full md:hidden h-auto"
                />
                <Image
                  src={agencyButton}
                  alt="Agency Login"
                  className="hidden md:block md:max-w-[160px] lg:max-w-[200px] xl:max-w-[220px] 2xl:max-w-[280px] h-auto"
                />
              </motion.button>

              {/* ✅ Volunteer Login with image button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "tween", stiffness: 300 }}
                onClick={handleVolunteerLogin}
                className="w-full md:w-auto rounded-full transition-all duration-300"
              >
                <Image
                  src={volunteerButton2}
                  alt="Volunteer Login"
                  className="w-full md:hidden h-auto"
                />
                <Image
                  src={volunteerButton}
                  alt="Volunteer Login"
                  className="hidden md:block md:max-w-[160px] lg:max-w-[200px] xl:max-w-[220px] 2xl:max-w-[280px] h-auto"
                />
              </motion.button>
            </div>

            <div className="flex gap-3 md:gap-4 items-center">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#3A374D" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "tween", stiffness: 300 }}
                className="rounded-full bg-[#2D2B42] p-3 md:p-3.5 lg:p-4"
                onClick={() =>
                  window.open("https://www.facebook.com/fostertoyscharity", "_blank")
                }
              >
                <Image
                  src={facebook}
                  alt="facebook"
                  width={24}
                  className="w-6 h-6 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-12 2xl:h-12"
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#3A374D" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "tween", stiffness: 300 }}
                className="rounded-full bg-[#2D2B42] p-3 md:p-3 lg:p-4"
                onClick={() =>
                  window.open("https://www.twitter.com/fostertoys", "_blank")
                }
              >
                <Image
                  src={twitter}
                  alt="twitter"
                  width={24}
                  className="w-6 h-6 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-12 2xl:h-12"
                />
              </motion.button>
            </div>
          </div>
        </div>
        
        <div className="px-4 pb-4 block md:hidden">
          <p className="text-white text-xs font-bold font-inter uppercase text-center">
            ©2025 Foster Toys, Inc. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;