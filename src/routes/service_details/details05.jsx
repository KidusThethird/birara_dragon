import React from "react";
import Image01 from "../../assets/images/new/four/img15.jpg";
import Image02 from "../../assets/images/new/four/img16.jpg";
import Image03 from "../../assets/images/new/four/img17.jpg";
import Image04 from "../../assets/images/new/four/img18.jpg";

import Image06 from "../../assets/images/services/img01detail.jpg";

import { div } from "framer-motion/client";

export default function Details01() {
  const data = [
    {
      title: "Consumer Electronics",
      type: "Trading ",
      text: "A wide array of popular gadgets and electronics, from smartphones and tablets to headphones and wearable tech.",
      img: Image02,
    },
    {
      title: "Household Goods",
      type: "Trading ",
      text: "Daily essentials such as kitchenware, cleaning products, and organization tools, available for wholesale and retail.",
      img: Image02,
    },
    {
      title: "Industrial Raw Materials",
      type: "Trading ",
      text: "Quality metals, plastics, and chemicals, meeting the diverse needs of manufacturing and production sectors.",
      img: Image02,
    },
    {
      title: "Agricultural Produce",
      type: "Trading ",
      text: "Fresh, organic options from staple grains to exotic fruits, perfect for wholesalers and direct consumers.",
      img: Image02,
    },
    {
      title: "Cosmetic & Skincare Products",
      type: "Trading ",
      text: "Fresh, organic options from staple grains to exotic fruits, perfect for wholesalers and direct consumers.",
      img: Image02,
    },
    {
      title: "Car Tires & LED Lighting",
      type: "Trading ",
      text: "High-quality car tires for various models and LED lighting solutions for a variety of settings, providing reliable performance and energy efficiency.",
      img: Image02,
    },
  ];

  return (
    <div className="pt-14 sm:14  md:pt-0 font-serif">
      <div className="relative w-full mb-14">
        <img src={Image06} className="w-full" alt="" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold text-center">
            General Trading & Wholesale Products
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
              Our general trading services cover a wide range of consumer goods
              and industrial products, sourced from reputable manufacturers and
              offered at competitive prices.
            </h1>
            <h1 class="leading-9">
              We cater to wholesale buyers looking for everything from household
              essentials to specialized industrial materials like car tires,
              ensuring quality and consistency. By acting as your dedicated
              sourcing partner, we take the guesswork out of bulk purchasing,
              giving you the products, you need with confidence and ease.
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
            A wide range of consumer goods and industrial products
          </h1>
          <h1 className="w-fit mx-auto">Ensuring quality and consistency</h1>
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
