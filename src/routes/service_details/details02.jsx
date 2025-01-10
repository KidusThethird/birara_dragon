import React from "react";
import Image01 from "../../assets/images/selected/car/img01.png";
import Image02 from "../../assets/images/new/four/img16.jpg";
import Image03 from "../../assets/images/new/four/img17.jpg";
import Image04 from "../../assets/images/new/four/img18.jpg";

import Image06 from "../../assets/images/services/img02detail.jpg";

import NewImage01 from "../../assets/images/selected/car/img01.png";
import NewImage02 from "../../assets/images/selected/car/img02.png";
//import NewImage03 from "../../assets/images/selected/car/img03.png";
import NewImage04 from "../../assets/images/selected/car/img04.png";
import NewImage05 from "../../assets/images/selected/car/img05.png";
import NewImage06 from "../../assets/images/selected/car/img06.png";
import NewImage07 from "../../assets/images/selected/car/img07.jpg";

import { div } from "framer-motion/client";

export default function Details01() {
  const data = [
    {
      title: "Passenger Vehicles",
      type: "Machinery",
      text: "A wide selection of vehicles, from economical compact cars to high-end luxury models, meeting both personal and fleet needs.",
      img: NewImage06,
    },
    {
      title: "Commercial Trucks & Vans",
      type: "Machinery",
      text: "Sturdy, high-capacity vehicles ideal for business logistics, supporting efficient transport of goods.",
      img: NewImage02,
    },

    {
      title: "Construction Machinery",
      type: "Machinery",
      text: "Heavy-duty machinery such as excavators, bulldozers, and cranes, providing reliable solutions for large-scale construction projects.",
      img: NewImage04,
    },

    {
      title: "Home & Office Electronics",
      type: "Machinery",
      text: "The latest in tech, including laptops, tablets, and smart home devices, for enhanced connectivity and productivity.",
      img: NewImage05,
    },
    {
      title: "Industrial Equipment",
      type: "Machinery",
      text: "Specialized equipment for agriculture, manufacturing, and construction, from generators to assembly-line tools.",
      img: NewImage07,
    },
    {
      title: "Car Tires & LED Lighting",
      type: "Machinery",
      text: "Durable car tires for various vehicle types, alongside energy-efficient LED lighting solutions for residential, commercial, and industrial applications.",
      img: NewImage01,
    },
  ];

  return (
    <div className="pt-14 sm:14  md:pt-0 font-serif">
      <div className="relative w-full mb-14">
        <img src={Image06} className="w-full" alt="" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold text-center">
            Cars, Machinery & Electronics
          </h1>
        </div>
      </div>

      <div className="md:grid grid-cols-2">
        <div>
          <div className="w-5/6 mx-auto">
            <div class="flex items-center space-x-3 py-3">
              <div class="w-12 h-1 bg-[#1f5a73] mr-3"></div>
              <h1 class="text-lg  font-bold"></h1>
            </div>
            <h1 className="text-2xl md:text-4xl font-semibold py-5">
              Our range includes vehicles, industrial machinery, car tires, and
              high-performance LED lighting solutions,
            </h1>
            <h1 class="leading-9">
              catering to everything from personal and commercial cars to heavy
              duty construction needs. We simplify sourcing with a network of
              trusted manufacturers, ensuring you receive durable, efficient
              products that meet your specific requirements. Whether you’re
              expanding your fleet, optimizing your operations, or upgrading
              lighting, we provide secure, reliable solutions to keep your
              business moving forward.
            </h1>
          </div>
        </div>{" "}
        <div>
          <div>
            <img
              src={Image01}
              className="w-3/4 mx-auto shadow-2xl rounded-xl"
              alt=""
            />
          </div>
          <div className="w-3/4 mx-auto px-1 ">
            <h1>
              {/* Guaranteeing Strategic Sourcing & Supply Best Building Material
              and Construction Products. We Bring the World Right to You */}
            </h1>
          </div>
        </div>
      </div>

      <div className="py-20 px-10 bg-gray-100 mt-4">
        <div className="py-6 mb-6">
          <h1 className="w-fit mx-auto text-3xl font-semibold">
            We simplify sourcing with a network of trusted manufacturers
          </h1>
          <h1 className="w-fit mx-auto">
            {/* Products are designed to support patient care and safety at every
            level. */}
          </h1>
        </div>

        <div className="grid ms:grid-cols-2 md:grid-cols-2 lmd:grid-cols-3 gap-16 mx-auto w-fit md:p-7 ">
          {data.map((item, index) => (
            <div className="bg-white shadow-2xl rounded">
              <div>
                <img src={item.img} className="" alt="" />
              </div>
              <div className="relative p-4">
                <div className="absolute -top-4 px-5 py-1 bg-gray-300 rounded-full right-0">
                  <h1 className="text-sm">{item.type}</h1>
                </div>
                <div>
                  <h1 className="text-xl py-4 text-sky-900">{item.title}</h1>
                </div>
                <div>
                  <h1>{item.text}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
