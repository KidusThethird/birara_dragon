import { useState, useEffect } from "react";
import NavBar from "./components/navbar";
import CoverImage01 from "./assets/images/new2/img05.jpg";
import CoverImage02 from "./assets/images/new2/img07.jpg";
import CoverImage03 from "./assets/images/new2/img04.jpg";
import CoverImage04 from "./assets/images/new2/img02.jpg";
import CoverImage05 from "./assets/images/new2/img08.jpg";

import CoverImage06 from "./assets/images/new2/img05mob.jpg";
import CoverImage07 from "./assets/images/new2/img07mob.jpg";

import AboutUs from "./components/aboutus";
import CoverInfo from "./components/coverinfo";
import HomeFooter from "./components/home_footer";
import FourSection from "./components/four_section";
import Break01 from "./components/break01";
import OurMission from "./components/our_mission";
import Footer from "./components/footer";
import Home from "./routes/home";
import About from "./routes/about";
import Footer2 from "./components/footer2";
import OurServices from "./components/our_services";
import Services from "./routes/services";
import OurTeam from "./routes/ourteam";
import ContactUs from "./routes/contact";
import { ArrowBigUp } from "lucide-react";

import Details01 from "./routes/service_details/details01";
import Details02 from "./routes/service_details/details02";
import Details03 from "./routes/service_details/details03";
import Details04 from "./routes/service_details/details04";
import Details05 from "./routes/service_details/details05";
import Details06 from "./routes/service_details/details06";
import Details07 from "./routes/service_details/details07";

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
    case "/team":
      Component = OurTeam;
      break;
    case "/contact":
      Component = ContactUs;
      break;
    case "/details01":
      Component = Details01;
      break;
    case "/details02":
      Component = Details02;
      break;
    case "/details03":
      Component = Details03;
      break;
    case "/details04":
      Component = Details04;
      break;
    case "/details05":
      Component = Details05;
      break;
    case "/details06":
      Component = Details06;
      break;
    case "/details07":
      Component = Details07;
      break;
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const images = [
    CoverImage01,
    CoverImage02,
    CoverImage03,
    CoverImage04,
    CoverImage05,
  ];
  const imagesMob = [
    CoverImage06,
    CoverImage07,
    CoverImage03,
    CoverImage04,
    CoverImage05,
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 7 seconds

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(intervalId);
      window.removeEventListener("scroll", handleScroll);
    }; // Cleanup on unmount
  }, [images.length]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="relative h-screen">
        {CompName === "Home" && (
          <div
            className="bg-cover bg-center h-full transition-opacity duration-700"
            style={{
              backgroundImage: `url(${
                window.innerWidth < 640
                  ? imagesMob[currentImageIndex]
                  : images[currentImageIndex]
              })`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
        )}
        {CompName === "Home" ? (
          <div>
            <div className="z-50 absolute top-0 w-full">
              <NavBar />
              <CoverInfo />
              {/* <HomeFooter /> */}
            </div>
            <Home />
            <Footer2 />
          </div>
        ) : (
          <div>
            <div className="z-50 absolute top-0 w-full">
              <NavBar />
            </div>
            <div className="z-10">
              <Component />
              <Footer2 />
            </div>
          </div>
        )}
        {isVisible && (
          // <button
          //   onClick={scrollToTop}
          //   className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          //   aria-label="Go to top"
          // >
          //   ↑
          // </button>

          <ArrowBigUp
            size={40}
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}

export default App;
