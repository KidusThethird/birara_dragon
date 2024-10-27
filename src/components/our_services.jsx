import React from "react";
import {
  ShieldPlus,
  CarFront,
  Brush,
  Factory,
  ChartNoAxesCombined,
  Route,
} from "lucide-react";
import Image01 from "../assets/images/services/img01.jpg";
import Image02 from "../assets/images/services/img02.jpg";

import Image03 from "../assets/images/services/img03.jpg";
import Image04 from "../assets/images/services/img04.jpg";
import Image05 from "../assets/images/services/img05.jpg";
import Image06 from "../assets/images/services/img06.jpg";

export default function OurServices() {
  const data = [
    {
      title: "Medical Supplies & Equipment",
      link: "details01",
      text: " Supplying a wide range of medical products, including medial diagnostic machineries, premium-quality scrubs for top brands, medical devices, and essential equipment for hospitals and clinics.",
      img: Image01,
    },
    {
      title: "Cars, Machinery & Electronics",
      link: "Portable Toilets",
      text: "Sourcing and providing automobiles, heavy machinery, and electronics for industrial, commercial, and personal use, including advanced technology and gadgets.",
      img: Image02,
    },
    {
      title: "Fashion, Apparel, Human Hair & Skincare",
      link: "Cladding",
      text: "Offering wholesale fashion items, including clothing, shoes, accessories, and 100% human hair products to cater to the latest global trends. We also provide skincare products, including options for anyone looking to customize their own formulas.",
      img: Image03,
    },
    {
      title: "Home, Office, Commercial Furnishings & Building Materials",
      link: "Cladding",
      text: "Supplying modern furniture, fixtures, decor, and high-quality building materials for residential, office, and commercial spaces, ensuring both functionality and style.",
      img: Image04,
    },
    {
      title: "General Trading & Wholesale Products",
      link: "Cladding",
      text: "Offering a variety of wholesale products ranging from consumer goods to specialized industrial materials, with access to global suppliers.",
      img: Image05,
    },
    {
      title: "Business Consulting & Sourcing Services",
      link: "Cladding",
      text: "Providing expert consulting and global sourcing solutions to help businesses expand, optimize operations, and access international markets effectively.",
      img: Image06,
    },
  ];
  return (
    <div className="w-full py-5 font-serif">
      <div className="w-full flex py-6">
        <h1 className="w-fit underline mx-auto text-3xl font-semibold text-sky-900">
          Our Services
        </h1>
      </div>
      <div className="space-y-5 sm:space-y-0 sm:grid grid-cols-2 mdd:grid-cols-3 gap-8 px-7 w-full  p-3">
        {data.map((item) => {
          return (
            // <div className="bg-sky-900 rounded-2xl h-80 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            //   <div className=" w-full">
            //     <img
            //       className=" group-hover:translate-y-[-60%] translate-y-0 h-full w-full object-cover transition-transform duration-500  "
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
            //       <h1 className="bg-sky-900 shadow-xl rounded-2xl text-center text-sm xxmd:text-base lg:text-lg">
            //         {item.title}
            //       </h1>
            //     </div>
            //     <p className="line-clamp-4 pt-12 mb-3 text-sm  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></p>

            //     <div className=" text-sm px-3.5 font-com  capitalize  shadow ">
            //       <h1 className="  text-gray-100 text-center py-3">
            //         {item.text}
            //       </h1>
            //     </div>

            //   </div>
            // </div>

            ///////////////////////////////////////////////////

            <a
              href={`/${item.link}`}
              className="bg-sky-900 rounded-2xl h-80 sm:h-[280px] md:h-[280px]  lg:h-[350px] max-w-lg mx-auto group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
            >
              <div className="w-full">
                <img
                  className="group-hover:translate-y-[-60%] translate-y-0 h-full w-full object-cover transition-transform duration-500"
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primaryColor group-hover:from-primaryColor/70 group-hover:via-primaryColor/60 group-hover:to-primaryColor/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-3 text-center transition-all duration-500 group-hover:translate-y-0">
                <div className="w-full text-white font-semibold">
                  <h1 className="md:text-sm p-1 bg-sky-900 shadow-xl rounded-2xl text-center text-sm sm:text-base  lg:text-xl">
                    {item.title}
                  </h1>
                </div>
                {/* <p className="line-clamp-4 pt-12 mb-3 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.description}
                </p> */}
                <div className="text-sm px-3.5 font-com capitalize shadow pt-10">
                  <h1 className="text-gray-100 text-center py-3">
                    {item.text}
                  </h1>
                </div>
              </div>
            </a>

            //////////////////////////////////
          );
        })}
      </div>
    </div>
  );
}
