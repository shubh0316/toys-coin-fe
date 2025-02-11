import Image from "next/image";
import HeroSection from "./components/HeroSection";
import OurMissionSection from "./components/OurMissionSection";
import DedicationSection from "./components/DedicationSection";
import DonationSection from "./components/DonationSection";
import TimelineSection from "./components/timelineSection";
import AmazonSection from "./components/amazonSection";
import TeddySection from "./components/TeddySection";
import MonetarySection from "./components/MonetarySection";
import VolunteerSection from "./components/VolunteerSection";

export default function Home() {
  return (
    <>
    <HeroSection />
    <OurMissionSection />
    <DedicationSection />
    <TimelineSection />
    <DonationSection />
    <AmazonSection />
    <TeddySection />
    <MonetarySection />
    <VolunteerSection />
    </>
  );
}
