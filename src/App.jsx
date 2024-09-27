import { useState, useEffect } from "react";
import NavBar from "./components/navbar";
import CoverImage01 from "./assets/images/new/img01.png";
import CoverImage02 from "./assets/images/new/img02.png";
import CoverImage03 from "./assets/images/new/img03.png";
import CoverImage04 from "./assets/images/new/img04.png";
// import CoverImage05 from "./assets/images/img05.jpg";
// import CoverImage06 from "./assets/images/img06.jpg";

import AboutUs from "./components/aboutus";
import CoverInfo from "./components/coverinfo";
import HomeFooter from "./components/home_footer";
import FourSection from "./components/four_section";
import Break01 from "./components/break01";
import OurMission from "./components/our_mission";
import Footer from "./components/footer";
import Home from "./routes/home";
import About from "./routes/about";
function App() {
  let Component = "test";
  let CompName = "blank";
  switch (window.location.pathname) {
    case "/":
      Component = Home;
      CompName = "Home";
      break;
    case "/about":
      Component = About;
      break;
    case "/services":
      Component = Services;
      break;
    case "/help":
      Component = HelpSection;
      break;
    case "/contact":
      Component = Contact;
      break;
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    CoverImage01,
    CoverImage02,
    CoverImage03,
    CoverImage04,
    // CoverImage05,
    // CoverImage06,
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div>
      <div className="relative h-screen ">
        {CompName == "Home" && (
          <div
            className="bg-cover bg-center h-full transition-opacity duration-700"
            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
          >
            <div className="absolute inset-0 bg-black opacity-70"></div>{" "}
            {/* Dark overlay */}
          </div>
        )}
        {CompName == "Home" ? (
          <div>
            <div className="z-50 absolute top-0 w-full">
              <NavBar />
              <CoverInfo />
              <HomeFooter />
            </div>

            <Home />
            <Footer />
          </div>
        ) : (
          <div>
            <div className="z-50 absolute top-0 w-full ">
              <NavBar />
            </div>{" "}
            <div className="z-10 ">
              {" "}
              <Component />
              <Footer />
            </div>
          </div>
        )}
        {/* <div>
          <div className="z-50 absolute top-0 w-full">
            <NavBar />
            <CoverInfo />
            <HomeFooter />
          </div>

          <Home />
          <Footer />
        </div> */}
      </div>
    </div>
  );
}

export default App;

{
  /* <div>
<div className="z-50 absolute top-0 w-full">
  <NavBar />
  <CoverInfo />
  <HomeFooter />
</div>

<Home />
<Footer />
</div> */
}
