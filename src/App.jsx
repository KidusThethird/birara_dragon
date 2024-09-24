import { useState } from "react";

import NavBar from "./components/navbar";
import CoverImage from "./assets/images/img01.jpg";
import AboutUs from "./components/aboutus";
import CoverInfo from "./components/coverinfo";
import HomeFooter from "./components/home_footer";

function App() {
  return (
    <div>
      <div className="relative h-screen bg-red-200">
        <div
          className=" bg-cover bg-center h-full"
          style={{ backgroundImage: `url(${CoverImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>{" "}
          {/* Dark overlay */}
        </div>
        <div className="z-50 absolute  top-0 w-full">
          <NavBar />
          <CoverInfo />
          <HomeFooter />
        </div>
      </div>
      <AboutUs />
    </div>
  );
}

export default App;
