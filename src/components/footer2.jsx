import React from "react";
import logo from "../assets/images/whitelogo.png";
import whatsapp from "../assets/images/whatsapplogo.png";

import {
  X,
  Menu,
  Facebook,
  Instagram,
  Youtube,
  Send,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer2() {
  return (
    <div className="bg-sky-900 text-gray-100 p-6 font-sans">
      <div className=" lg:grid grid-cols-2">
        <img src={logo} className="w-64 p-1 rounded " alt="" />
        <div>
          <div className="w-full justify-between md:flex space-y-4 gap-10 ">
            <div className=" space-y-5  ">
              <div className="flex space-x-5">
                {" "}
                <Phone />
                <h1>+8619700356386</h1>
              </div>

              <div className="flex space-x-5">
                {" "}
                <img src={whatsapp} className="w-8 h-8 my-auto" alt="" />
                <div>
                  {" "}
                  <h1>+8619700356386</h1>
                  <h1>+8613098393670</h1>
                </div>
              </div>
            </div>
            <div className="flex space-x-2  w-fit ">
              <div className="">
                <MapPin size={32} className="md:m-2" />
              </div>
              <div className="w-3/4 ">
                <h1>China: 深圳市南山区同方科兴科学园F区3201</h1>
                <h1 className="text-sm">
                  Hongkong Branch: 2301, BAYFIELD BUILDING 99 HENNESSY ROAD
                  WANCHAI
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full space-y-4 ms:space-y-0  ms:grid grid-cols-3 py-3">
        <div>
          <div>
            <h1 className="  py-2">
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
          <a href="/services"> Services</a>
          <a href="/team">Team</a>
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
