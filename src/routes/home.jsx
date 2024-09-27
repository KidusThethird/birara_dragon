import React from "react";
import AboutUs from "../components/aboutus";
import Break01 from "../components/break01";
import FourSection from "../components/four_section";
import OurMission from "../components/our_mission";
import Break03 from "../components/break03";

export default function Home() {
  return (
    <div>
      <Break03 />
      {/* <AboutUs />

      <Break01 /> */}

      <FourSection />
      <Break01 />
      <OurMission />
    </div>
  );
}
