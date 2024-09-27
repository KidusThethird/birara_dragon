import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/logo01.png";

export default function AboutUs() {
  return (
    <div className="z-10 relative overflow-hidden ">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-gray-100 to-white opacity-25 z-0"></div>

      <div className="w-full sm:grid grid-cols-2 relative z-10">
        <div className="flex">
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
        </div>
        <div className=" px-6 sm:px-0 my-4 col-span-1 text-sm space-y-2 pr-8 text-gray-800 font-montserrat">
          <h1 className="text-2xl font-semibold">About Us</h1>
          <p>
            At Birara Dragon Bridge General Trading, we are committed to
            providing high-quality products and services across various
            industries.
          </p>
          <h1>Medical Supplies</h1>
          <p>
            We offer medical products, including scrubs and essential equipment.
          </p>
          <h1>Machinery & Electronics</h1>
          <p>
            We source automobiles and heavy machinery, ensuring the latest
            technology.
          </p>
          <h1>Fashion & Human Hair</h1>
          <p>
            Our offerings include clothing, accessories, and 100% human hair
            products.
          </p>
          <h1>Commercial Furnishings</h1>
          <p>
            We supply modern furniture and materials for residential and
            commercial spaces.
          </p>
          <h1>Consulting Services</h1>
          <p>
            We provide consulting to optimize operations and pride ourselves on
            quality and customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
}
