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
            <a
              href=""
              className="hover:text-sky-600 hover:scale-105 duration-100"
            >
              Home
            </a>
            <a
              href=""
              className="hover:text-sky-600 hover:scale-105 duration-100"
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
      <div className="border-b-2 border-gray-300 w-5/6 mx-auto"></div>
    </div>
  );
}
