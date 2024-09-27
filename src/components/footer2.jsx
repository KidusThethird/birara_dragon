import React from "react";
import logo from "../assets/images/smalllogo2.png";
import { X, Menu, Facebook, Instagram, Youtube, Send } from "lucide-react";

export default function Footer2() {
  return (
    <div className="bg-sky-900 text-gray-100 p-6">
      <div>
        <img src={logo} className="bg-white p-1 rounded" alt="" />
      </div>
      <div className="w-full space-y-4 ms:space-y-0  ms:grid grid-cols-3 py-3">
        <div>
          <div>
            <h1 className=" font-semibold py-2">
              At Birara Dragon Bridge General Trading, our mission is to enhance
              lives and empower businesses by delivering high-quality products
              and exceptional services across a wide range of sectors.{" "}
            </h1>
          </div>
          <div className="flex space-x-4 py-4">
            <div className="text-sky-900 bg-gray-100 p-2 rounded-full  border-2 hover:border-gray-100 hover:text-gray-200 hover:bg-sky-900 duration-150 cursor-pointer">
              <Facebook size={20} />
            </div>

            <div className="text-sky-900 bg-gray-100 p-2 rounded-full  border-2 hover:border-gray-100 hover:text-gray-200 hover:bg-sky-900 duration-150 cursor-pointer">
              <Instagram size={20} />
            </div>

            <div className="text-sky-900 bg-gray-100 p-2 rounded-full  border-2 hover:border-gray-100 hover:text-gray-200 hover:bg-sky-900 duration-150 cursor-pointer">
              <Youtube size={20} />
            </div>

            <div className="text-sky-900 bg-gray-100 p-2 rounded-full  border-2 hover:border-gray-100 hover:text-gray-200 hover:bg-sky-900 duration-150 cursor-pointer">
              <Send size={20} />
            </div>
          </div>
        </div>

        <div className="w-fit ms:mx-auto flex flex-col">
          <h1 className="text-xl font-semibold py-2">Explore</h1>
          <a href="/" className="hover:text-gray-300 hover:shadow-2xl">
            Home
          </a>
          <a href="/about">About Us</a>
          <h1>Services</h1>
          <h1>Team</h1>
        </div>
        <div>
          <h1 className="text-xl font-semibold py-2">Services</h1>

          <h1>Healthcare & Medical Solutions</h1>
          <h1>Automotive & Industrial Solutions</h1>
          <h1>Fashion & Lifestyle Products</h1>
          <h1>Home, Office & Business Services</h1>
        </div>
      </div>
      <div className="border-b-2 border-gray-100 w-3/4 mx-auto my-5"></div>
    </div>
  );
}
