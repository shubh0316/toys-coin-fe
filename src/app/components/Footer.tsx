"use client";
import React from "react";
import footerLogo from "@/assets/logoNav.png";
import Image from "next/image";
import { motion } from "framer-motion";
import twitter from "@/assets/twitter.png";
import agencyButton from "@/assets/agency.png";
import contactButton from "@/assets/contact.png";
import volunteerButton from "@/assets/volunteer.png";
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
      <div className="w-full absolute -bottom-60 md:-bottom-96 bg-[#2D2B42] z-10 md:pt-0 pt-10 pb-4 md:pb-10 rounded-t-[40px] md:rounded-t-[70px]">
        <div className="flex flex-col lg:space-y-4 md:space-y-4 2xl:space-y-10 sm:p-4 p-4 lg:p-20 xl:p-20 2xl:p-20 md:p-20">
          <div className="w-full max-w-[250px] lg:max-w-[600px] 2xl:max-w-[850px]">
            <Image
              src={footerLogo}
              alt="footerLogo"
              className="w-full h-auto"
            />
          </div>
          <p className="font-inter text-white font-bold text-base lg:text-2xl 2xl:text-5xl w-full md:w-3/4 !leading-[1.4]">
            Dedicated to providing{" "}
            <span className="text-[#31CDE6]">toys of comfort</span>
            <br />
            to children entering into foster care.
          </p>
          <div className="mt-4 space-y-4">
            <p className="text-white font-light text-xs md:text-sm lg:text-sm 2xl:text-lg tracking-wider font-inter uppercase md:text-left">
              Foster Toys  is a  pending 501(c)3 tax-exempt
              <br /> nonprofit charity organization TAX ID 39-3621457
            </p>
            <p className="text-white text-xs md:text-sm lg:text-sm 2xl:text-lg font-bold font-inter uppercase md:text-left">
              ©2025 Foster Toys, All Rights Reserved
            </p>
          </div>
        </div>

        <div className="p-4">
          <div className="bg-[#31CDE6] mx-auto md:mt-6 h-auto md:h-[85px] lg:h-[85px] 2xl:h-[120px] rounded-3xl md:rounded-[50px] flex flex-col md:flex-row items-center justify-between p-4 md:px-4 gap-4">
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto items-center">
              {/* ✅ Contact Us Modal with image button */}
              <Dialog>
                <DialogTrigger asChild>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "tween", stiffness: 300 }}
                    className="rounded-full transition-all duration-300"
                  >
                    <Image
                      src={contactButton}
                      alt="Contact Us"
                      className="w-full max-w-[180px] md:max-w-[200px] lg:max-w-[220px] 2xl:max-w-[280px] h-auto"
                    />
                  </motion.button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[450px] bg-[#F9EFE0] rounded-2xl">
                  <DialogHeader>
                    <DialogTitle className="lg:text-4xl 2xl:text-6xl font-bold text-[#2D2B42] font-frank">
                      Contact Us
                    </DialogTitle>
                    <p className="text-sm  text-black font-inter">
                    Please fill out the form and someone from the right department will get back to you or give us a call at<br /> (916) 384-0330.</p>
                  </DialogHeader>
                  <form className="space-y-8 mt-4">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" required className="bg-white" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="bg-white"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        className="bg-white"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="message">How can we help you?</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        required
                        className="bg-white"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#2D2B42] text-white hover:bg-[#3A374D]"
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
                className="rounded-full transition-all duration-300"
              >
                <Image
                  src={agencyButton}
                  alt="Agency Login"
                  className="w-full max-w-[180px] md:max-w-[200px] lg:max-w-[220px] 2xl:max-w-[280px] h-auto"
                />
              </motion.button>

              {/* ✅ Volunteer Login with image button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "tween", stiffness: 300 }}
                onClick={handleVolunteerLogin}
                className="rounded-full transition-all duration-300"
              >
                <Image
                  src={volunteerButton}
                  alt="Volunteer Login"
                  className="w-full max-w-[180px] md:max-w-[200px] lg:max-w-[220px] 2xl:max-w-[280px] h-auto"
                />
              </motion.button>
            </div>

            {/* Twitter */}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#3A374D" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "tween", stiffness: 300 }}
              className="rounded-full bg-[#2D2B42] p-3 md:p-4"
              onClick={() =>
                window.open("https://twitter.com/fostertoys", "_blank")
              }
            >
              <Image
                src={twitter}
                alt="Twitter"
                width={24}
                className="w-6 h-6 md:w-8 md:h-8 2xl:w-12 2xl:h-12"
              />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;