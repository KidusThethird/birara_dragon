import React from "react";
import Image01 from "../../assets/images/selected/fashion/img04.png";
import Image02 from "../../assets/images/new/four/img16.jpg";
import Image03 from "../../assets/images/new/four/img17.jpg";
import Image04 from "../../assets/images/new/four/img18.jpg";

import Image06 from "../../assets/images/services/img03detail.jpg";

import NewImage01 from "../../assets/images/selected/fashion/img01.png";
import NewImage02 from "../../assets/images/selected/fashion/img02.png";
import NewImage03 from "../../assets/images/selected/fashion/img03.png";
import NewImage04 from "../../assets/images/selected/fashion/img04.png";
import NewImage05 from "../../assets/images/selected/fashion/img05.png";

import { div } from "framer-motion/client";

export default function Details01() {
  const data = [
    {
      title: "Women’s Fashion",
      type: "Fashion",
      text: "Trend-driven women’s clothing, from casual wear to elegant evening gowns, appealing to a wide range of tastes and preferences.",
      img: NewImage01,
    },
    {
      title: "Men’s Fashion",
      type: "Fashion",
      text: "From business suits to laid-back weekend styles, our men’s fashion line offers both quality and versatility.",
      img: NewImage02,
    },
    {
      title: "Accessories & Footwear",
      type: "Fashion",
      text: "Fashion-forward handbags, shoes, and jewelry, catering to style-conscious consumers looking to complete their outfits.",
      img: NewImage03,
    },
    {
      title: "Human Hair Extensions & Wigs",
      type: "Fashion",
      text: "Premium-quality, natural human hair extensions and wigs available in various textures and colors for a seamless look.",
      img: NewImage04,
    },
    {
      title: "Children’s Apparel",
      type: "Fashion",
      text: "Comfortable, stylish clothing for kids, made with durability in mind for active wear at school and play.",
      img: NewImage05,
    },
  ];

  return (
    <div className="pt-14 sm:14  md:pt-0 font-serif">
      <div className="relative w-full mb-14">
        <img src={Image06} className="w-full" alt="" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold text-center">
            Fashion, Apparel & Human Hair
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
              We specialize in stylish, high-quality fashion, premium
              accessories, and 100% human hair products that cater to diverse
              tastes and preferences.
            </h1>
            <h1 class="leading-9">
              From trendy clothing lines to natural-looking hair extensions, our
              products are sourced with care, giving you a curated selection
              designed for today’s fashion-conscious consumer. By eliminating
              middlemen and working directly with trusted suppliers, we ensure
              both quality and affordability, helping you deliver outstanding
              value to your customers.
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
            High-quality fashion
          </h1>
          <h1 className="w-fit mx-auto">
            Our products are sourced with care, giving you a curated selection
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

            // <div className=" rounded-2xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            //   <div className=" w-full">
            //     <img
            //       className="group-hover:translate-y-[-60%] translate-y-0 h-full w-full object-cover transition-transform duration-500  "
            //       src={item.img}
            //       alt=""
            //     />
            //   </div>
            //   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primaryColor group-hover:from-primaryColor/70 group-hover:via-primaryColor/60 group-hover:to-primaryColor/70"></div>
            //   <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-3 text-center transition-all duration-500 group-hover:translate-y-0">
            //     {/* <h1 className="font-dmserif text-3xl font-bold text-white">
            //       Beauty
            //     </h1> */}
            //     <div className=" w-full text-white  font-semibold">
            //       <h1 className="text-center text-sm xxmd:text-base lg:text-lg">
            //         {item.title}
            //       </h1>
            //     </div>
            //     <p className="line-clamp-4 pt-12 mb-3 text-sm  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></p>

            //     <div className="py-2 px-3.5 font-com text-sm capitalize  shadow ">
            //       <h1 className="md:text-2xl text-left text-blue-900 py-3">
            //         {item.type}
            //       </h1>
            //     </div>
            //     <div>
            //       <h1 className="text-sm ms:text-base">{item.text}</h1>
            //     </div>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
}
