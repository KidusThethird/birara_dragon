import logo from "../assets/images/logo01.png";
import { X, Menu } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

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
    <div
      className={`z-50 fixed w-full flex ${
        CompName == "Home"
          ? "text-white bg-opacity-30 bg-black "
          : "bg-sky-900 bg-opacity-20 text-gray-700"
      }`}
    >
      <div
        className={`hidden   md:grid grid-cols-6 w-full ${
          CompName == "Home" ? "bg-white" : "bg-white"
        }}`}
      >
        <div className="col-span-1">
          <img src={logo} alt="" className="w-full " />
        </div>
        <div className=" my-auto col-span-5 w-full ">
          <div className="flex space-x-6 font-playwrite">
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
              href=""
              className="hover:text-sky-600 hover:scale-105 duration-100"
            >
              Products
            </a>
            <a
              href=""
              className="hover:text-sky-600 hover:scale-105 duration-100"
            >
              Gallery
            </a>
            <a
              href=""
              className="hover:text-sky-600 hover:scale-105 duration-100"
            >
              Events and Articles
            </a>
            <a
              href=""
              className="hover:text-sky-600 hover:scale-105 duration-100"
            >
              Contacts
            </a>
          </div>
        </div>
      </div>
      {/* <div className="hidden md:block border-b-2 bg-yellow-200 border-gray-300 w-5/6 mx-auto"></div> */}

      <div className="block md:hidden relative w-full">
        <div
          onClick={toggleDrawer}
          className="flex cursor-pointer justify-between px-4 bg-gray-400 text-sky-900"
        >
          {drawer ? <X className="my-auto" /> : <Menu className="my-auto" />}
          <img src={logo} className="w-24" alt="" />
        </div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: drawer ? "0%" : "-100%" }}
          transition={{ duration: 0.3 }} // Smooth transition without bounce
          className="absolute top-14 bg-gray-400 w-3/4 rounded-br-3xl shadow-2xl shadow-sky-900"
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

            <h1>Products</h1>
            <h1>Gallery</h1>
            <h1>Events and Articles</h1>
            <h1>Contacts</h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
