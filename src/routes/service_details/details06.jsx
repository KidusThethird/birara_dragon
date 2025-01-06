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
      title: "Market Entry Consulting",
      type: "Consulting",
      text: "Expert guidance to help businesses enter new markets with confidence, from understanding local regulations to consumer insights.",
      img: Image02,
    },
    {
      title: "Supplier & Vendor Sourcing",
      type: "Consulting",
      text: "Reliable sourcing of high-quality products and materials from trusted global suppliers, including items like car tires and LED lighting.",
      img: Image02,
    },
    {
      title: "Supply Chain Management",
      type: "Consulting",
      text: "Efficient logistics solutions, ensuring the timely and cost-effective delivery of goods from origin to destination.",
      img: Image02,
    },
    {
      title: "Quality Control Services",
      type: "Consulting",
      text: "Comprehensive quality checks for all products, including medical equipment and consumer goods, to meet clients’ exact standards before shipment.",
      img: Image02,
    },
    {
      title: "Export & Import Support",
      type: "Consulting",
      text: "Assistance with customs clearance, documentation, and regulatory compliance, simplifying international trade for clients.",
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
            Business Consulting & Sourcing Services
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
              Our consulting and sourcing services are designed to simplify your
              entry into new markets,
            </h1>
            <h1 class="leading-9">
              with a focus on transparency, efficiency, and results. From
              navigating complex regulations to connecting with trusted
              suppliers, we provide the expertise and support you need to expand
              globally. With our personalized approach, we handle the details
              such as quality control and logistics so you can focus on building
              a successful business with fewer obstacles and greater confidence.
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
            Simplify your entry into new markets
          </h1>
          <h1 className="w-fit mx-auto">
            We provide the expertise and support you need to expand globally
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
