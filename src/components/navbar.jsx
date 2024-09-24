import React from "react";
import logo from "../assets/images/logo01.png";

export default function NavBar() {
  return (
    <div className="">
      <div className="grid grid-cols-6 w-full ">
        <div>
          <img src={logo} alt="" className="w-full col-span-2 " />
        </div>
        <div className="text-white my-auto col-span-3 w-full ">
          <div className="flex justify-around font-playwrite">
            <a href="" className="">
              Home
            </a>
            <a href="">About Us</a>
            <a href="">Products</a>
            <a href="">Gallery</a>
            <a href="">Events and Articles</a>
            <a href="">Contacts</a>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-gray-300 w-5/6 mx-auto"></div>
    </div>
  );
}
