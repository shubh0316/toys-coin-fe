import HeroSection from "./components/HeroSection";
import OurMissionSection from "./components/OurMissionSection";
import DedicationSection from "./components/DedicationSection";
import DonationSection from "./components/DonationSection";
import TimelineSection from "./components/timelineSection";
import AmazonSection from "./components/amazonSection";
import VolunteerSection from "./components/VolunteerSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Fundraiser from "./components/Fundraiser";

export default function Home() {
  return (
    <>
     <Navbar />
     <HeroSection />
     <OurMissionSection />
     <DedicationSection />
     <TimelineSection />
     <DonationSection />
     <AmazonSection />
     <Fundraiser />
     <VolunteerSection />
     <Footer />    
    </>
  );
}
