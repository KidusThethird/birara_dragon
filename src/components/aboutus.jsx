import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/logo01.png";

export default function AboutUs() {
  return (
    <div className="z-10 relative overflow-hidden ">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-gray-100 to-white opacity-25 z-0"></div>

      <div className="w-full  relative z-10">
        {/* <div className="flex">
          <motion.img
            src={logo}
            alt="Logo"
            className="w-1/2 sm:w-full col-span-1 my-auto h-fit mx-auto"
            animate={{ y: [0, -10, 0] }} // Float effect
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div> */}
        <div className="mx-7  px-6 sm:px-0 my-4 p-7 text-sm space-y-2 pr-8 text-gray-800 font-montserrat">
          <h1 className="text-2xl font-semibold">About Us</h1>
          <p className="text-base">
            At Birara Dragon Bridge General Trading, we are dedicated to
            delivering high-quality products and services across multiple
            industries. Our extensive offerings include essential medical
            supplies, such as scrubs and equipment, to support healthcare
            professionals. In the machinery and electronics sector, we provide
            the latest automobiles and heavy machinery, ensuring access to
            cutting-edge technology. Our fashion line features stylish clothing,
            accessories, and 100% human hair products, catering to diverse
            customer preferences. We also supply modern furnishings for both
            residential and commercial spaces. Additionally, our expert
            consulting services aim to optimize operations, with a strong
            commitment to quality and customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
}
