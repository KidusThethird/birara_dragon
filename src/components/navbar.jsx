import logo from "../assets/images/logo01.png";
import logosmall from "../assets/images/smalllogo2.png";
import { X, Menu, Facebook, Instagram, Youtube } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

export default function NavBar() {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  let CompName = "blank";
  let pathName = window.location.pathname;
  switch (window.location.pathname) {
    case "/":
      CompName = "Home";
      break;
  }

  return (
    <div className="fixed w-full ">
      <div class="hidden md:flex bg-sky-900 w-full h-10  justify-end items-center">
        <div className="flex space-x-4 mr-4 text-white">
          <Facebook className="hover:text-sky-900 hover:bg-gray-200 rounded duration-100 cursor-pointer" />
          <Instagram className="hover:text-sky-900 hover:bg-gray-200 rounded duration-100 cursor-pointer" />
          <Youtube className="hover:text-sky-900 hover:bg-gray-200 rounded duration-100 cursor-pointer" />
        </div>
      </div>
      <div
        className={`z-50  w-full flex ${
          CompName == "Home"
            ? "text-white bg-opacity-50 bg-black "
            : "bg-sky-900 text-white bg-opacity-30 "
        }`}
      >
        <div
          className={`hidden   md:grid grid-cols-6 w-full ${
            CompName == "Home" ? "bg-white" : "bg-white"
          }}`}
        >
          <div className="col-span-1">
            <img src={logo} alt="" className="w-3/4 " />
          </div>
          <div className=" my-auto col-span-5 w-full ">
            <div className="flex  justify-between px-10  font-sans">
              <div className=" space-x-7">
                {" "}
                <a
                  href="/"
                  className={`hover:text-sky-600 hover:scale-105 duration-100 ${
                    pathName == "/" ? "text-sky-600" : ""
                  }`}
                >
                  Home
                </a>
                <a
                  href="/about"
                  className={`hover:text-sky-600 hover:scale-105 duration-100 ${
                    pathName == "/about" ? "text-sky-600" : ""
                  }`}
                >
                  About Us
                </a>
                <a
                  href="/services"
                  className={`hover:text-sky-600 hover:scale-105 duration-100 ${
                    pathName == "/services" ? "text-sky-600" : ""
                  }`}
                >
                  Services
                </a>
                <a
                  href="/team"
                  className={`hover:text-sky-600 hover:scale-105 duration-100 ${
                    pathName == "/team" ? "text-sky-600" : ""
                  }`}
                >
                  Team
                </a>
              </div>{" "}
              <div>
                <a
                  href=""
                  className="hover:text-sky-600 hover:bg-gray-200 bg-sky-600 p-2 rounded hover:scale-105 duration-100"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="hidden md:block border-b-2 bg-yellow-200 border-gray-300 w-5/6 mx-auto"></div> */}

        <div className="block md:hidden relative w-full font-sans">
          <div
            onClick={toggleDrawer}
            className="flex cursor-pointer justify-between px-4 bg-gray-400 text-sky-900"
          >
            {drawer ? <X className="my-auto" /> : <Menu className="my-auto" />}
            <img src={logosmall} className="w-fit" alt="" />
          </div>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: drawer ? "0%" : "-100%" }}
            transition={{ duration: 0.3 }} // Smooth transition without bounce
            className="absolute top-11 bg-gray-400 w-3/4 rounded-br-3xl shadow-2xl shadow-sky-900"
          >
            <div className="px-8 flex flex-col space-y-3 py-3">
              <a
                href="/"
                className={`hover:text-sky-600 hover:scale-105 duration-100 ${
                  pathName == "/" ? "text-sky-600" : ""
                }`}
              >
                Home
              </a>
              <a
                href="/about"
                className={`hover:text-sky-600 hover:scale-105 duration-100 ${
                  pathName == "/about" ? "text-sky-800" : ""
                }`}
              >
                About us
              </a>

              <a
                href="/services"
                className={`hover:text-sky-600 hover:scale-105 duration-100 ${
                  pathName == "/services" ? "text-sky-800" : ""
                }`}
              >
                Services
              </a>
              <a
                href="/team"
                className={`hover:text-sky-600 hover:scale-105 duration-100 ${
                  pathName == "/team" ? "text-sky-800" : ""
                }`}
              >
                Team
              </a>

              <h1>Contact Us</h1>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
