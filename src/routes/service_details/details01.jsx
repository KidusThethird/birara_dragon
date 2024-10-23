import React from "react";
import Image01 from "../../assets/images/new/four/img15.jpg";
import Image02 from "../../assets/images/new/four/img16.jpg";
import Image03 from "../../assets/images/new/four/img17.jpg";
import Image04 from "../../assets/images/new/four/img18.jpg";

export default function Details01() {
  const data = [
    {
      title: "Building",
      type: "Porta Cabin",
      text: "Traderston is among the leading suppliers of portacabin in Dubai and UAE. Our range includes portal recreation rooms, canteens, villas, and office cabins.",
      img: Image02,
    },
    {
      title: "Construction",
      type: "Portable Toilets",
      text: "We also supply portable toilets in all the Emirates of UAE. Among our varieties are GRP toilets, waterless toilets, portable restrooms, and trailer toilets.",
      img: Image03,
    },
    {
      title: "Building and Construction",
      type: "Cladding",
      text: "We endeavor to provide high-quality cladding to clients in the region and beyond. Our cladding services include but are not limited to wood & aluminum cladding.",
      img: Image04,
    },
  ];

  return (
    <div className="pt-14 sm:14 md:pt-32 font-serif">
      <div className="md:grid grid-cols-2">
        <div>
          <div className="w-5/6 mx-auto">
            <div class="flex items-center space-x-3 py-3">
              <div class="w-12 h-1 bg-[#1f5a73] mr-3"></div>
              <h1 class="text-lg  font-bold">Import and Export</h1>
            </div>
            <h1 className="text-2xl md:text-4xl font-semibold py-5">
              We Supply the Best Building Material and Construction Products in
              UAE
            </h1>
            <h1 class="leading-9">
              Traderston General Trading Company Dubai is a leading importer and
              distributor of various Building Material and Construction Products
              from different parts of the world including Asia, Europe, Africa,
              the Middle East, GCC, and the US. For nearly a decade we have
              nurtured solid business relationships with our customers,
              partners, and suppliers. We strive to deliver urgent and reliable
              services, as well as consistently exceed goals and expectations.
              Traderston deals with a wide range of Building Material and
              Construction Products, designed to provide sustainable solutions
              to our valued customers.
            </h1>
          </div>
        </div>{" "}
        <div>
          <div>
            <img src={Image01} className="w-3/4 mx-auto" alt="" />
          </div>
          <div className="w-3/4 mx-auto px-1 ">
            <h1>
              Guaranteeing Strategic Sourcing & Supply Best Building Material
              and Construction Products. We Bring the World Right to You
            </h1>
          </div>
        </div>
      </div>

      <div className="py-20 px-10 bg-gray-100 mt-4">
        <div className="py-6 mb-6">
          <h1 className="w-fit mx-auto text-3xl font-semibold">
            Our Petroleum Lubricant Products Line
          </h1>
          <h1 className="w-fit mx-auto">
            Lubricating oils and greases for lubrication and protection in the
            automotive, manufacturing, and agricultural industries.
          </h1>
        </div>

        <div className="ms:grid grid-cols-2 mmd:grid-cols-3 gap-9 mx-auto w-fit ">
          {data.map((item, index) => (
            <div className=" rounded-2xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className=" w-full">
                <img
                  className="group-hover:translate-y-[-60%] translate-y-0 h-full w-full object-cover transition-transform duration-500  "
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primaryColor group-hover:from-primaryColor/70 group-hover:via-primaryColor/60 group-hover:to-primaryColor/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-3 text-center transition-all duration-500 group-hover:translate-y-0">
                {/* <h1 className="font-dmserif text-3xl font-bold text-white">
                  Beauty
                </h1> */}
                <div className=" w-full text-white  font-semibold">
                  <h1 className="text-center text-sm xxmd:text-base lg:text-lg">
                    {item.title}
                  </h1>
                </div>
                <p className="line-clamp-4 pt-12 mb-3 text-sm  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></p>

                <div className="py-2 px-3.5 font-com text-sm capitalize  shadow ">
                  <h1 className="text-2xl text-left text-blue-900 py-3">
                    {item.type}
                  </h1>
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
