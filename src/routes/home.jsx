import React from "react";
import AboutUs from "../components/aboutus";
import Break01 from "../components/break01";
import FourSection from "../components/four_section";
import OurMission from "../components/our_mission";
import Break03 from "../components/break03";
import OurServices from "../components/our_services";

export default function Home() {
  return (
    <div>
      <Break03 />
      {/* <AboutUs />

      <Break01 /> */}

      <FourSection />
      <OurServices />
      <Break01 />
      <OurMission />
    </div>
  );
}
