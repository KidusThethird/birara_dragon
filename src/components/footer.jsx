import React from "react";
import logo from "../assets/images/logo01.png";
import { Facebook, Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <div className="text-white bg-sky-900 p-6">
      <div className="flex">
        <img src={logo} className="w-1/6 bg-white rounded-full" alt="" />
        <div className="my-auto flex space-x-24 px-10">
          <h1>Home</h1>
          <h1>About Us</h1>
          <h1>Products</h1>
          <h1>Gallery</h1>
          <h1>Contact</h1>
        </div>
        <div className="my-auto ">
          <div className="flex  w-full space-x-8 px-3">
            <Facebook />
            <Instagram />
            <Phone />
          </div>
        </div>
      </div>
      <div className="border-b-2 py-3 border-white w-1/2 mx-auto"></div>
    </div>
  );
}
