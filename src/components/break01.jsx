import React from "react";
import BreakImage from "../assets/images/coverimage.jpg";

export default function Break01() {
  return (
    <div class="relative">
      <div class="w-full bg-yellow-200">
        <img src={BreakImage} class="w-full" alt="" />
      </div>
      <div class="absolute inset-0 bg-black opacity-70 flex items-center justify-center ">
        <h1 class="text-white text-center px-2 text-sm sm:text-base">
          Your One-Stop Source for Excellence in Supplies and Solutions.
        </h1>
      </div>
    </div>
  );
}
