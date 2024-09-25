import React from "react";
import AboutUs from "../components/aboutus";
import Break01 from "../components/break01";
import FourSection from "../components/four_section";
import OurMission from "../components/our_mission";

export default function Home() {
  return (
    <div>
      <AboutUs />

      <Break01 />

      <FourSection />
      <Break01 />
      <OurMission />
    </div>
  );
}
