import React from "react";
import {
  ShieldPlus,
  CarFront,
  Brush,
  Factory,
  ChartNoAxesCombined,
  Route,
} from "lucide-react";

export default function OurServices() {
  return (
    <div className="w-full py-5">
      <div className="w-full flex py-6">
        <h1 className="w-fit underline mx-auto text-3xl font-semibold text-sky-900">
          Our Services
        </h1>
      </div>
      <div className="space-y-5 sm:space-y-0 sm:grid grid-cols-2 mdd:grid-cols-3 gap-8 px-7 w-full  p-3">
        <div className="hover:text-sky-900 hover:bg-gray-100 duration-150 cursor-pointer bg-sky-900  text-gray-100 p-8 rounded shadow-xl shadow-gray-600">
          <div className=" flex">
            <ShieldPlus size={50} className="w-fit" />
          </div>
          <div>
            <h1 className="my-3 text-2xl">Medical Supplies</h1>
          </div>
          <div>
            <h1>
              Supplying a wide range of medical products, including
              premium-quality scrubs from top brands, medical devices, and
              essential equipment for hospitals and clinics.
            </h1>
          </div>
        </div>

        <div className="bg-sky-900 text-gray-100 p-8 rounded shadow-xl shadow-gray-600 hover:text-sky-900 hover:bg-gray-100 duration-150 cursor-pointer">
          <div className=" flex">
            <CarFront size={50} className="w-fit" />
          </div>
          <div>
            <h1 className="my-3 text-2xl">Automotive & Machinery</h1>
          </div>
          <div>
            <h1>
              Sourcing and providing automobiles, heavy machinery, and
              electronics for industrial, commercial, and personal use,
              featuring advanced technology and gadgets.
            </h1>
          </div>
        </div>

        <div className="bg-sky-900 text-gray-100 p-8 rounded shadow-xl shadow-gray-600 hover:text-sky-900 hover:bg-gray-100 duration-150 cursor-pointer">
          <div className=" flex">
            <Brush size={50} className="w-fit" />
          </div>
          <div>
            <h1 className="my-3 text-2xl">Fashion Wholesale</h1>
          </div>
          <div>
            <h1>
              Offering wholesale fashion items, including clothing, shoes,
              accessories, and 100% human hair products, catering to the latest
              global trends.
            </h1>
          </div>
        </div>

        <div className="bg-sky-900 text-gray-100 p-8 rounded shadow-xl shadow-gray-600 hover:text-sky-900 hover:bg-gray-100 duration-150 cursor-pointer">
          <div className=" flex">
            <Factory size={50} className="w-fit" />
          </div>
          <div>
            <h1 className="my-3 text-2xl"> Furnishings & Building Materials</h1>
          </div>
          <div>
            <h1>
              Supplying modern furniture, fixtures, decor, and high-quality
              building materials for residential, office, and commercial spaces,
              ensuring both functionality and style.
            </h1>
          </div>
        </div>

        <div className="bg-sky-900 text-gray-100 p-8 rounded shadow-xl shadow-gray-600 hover:text-sky-900 hover:bg-gray-100 duration-150 cursor-pointer">
          <div className=" flex">
            <ChartNoAxesCombined size={50} className="w-fit" />
          </div>
          <div>
            <h1 className="my-3 text-2xl">General Trading</h1>
          </div>
          <div>
            <h1>
              Providing a variety of wholesale products, ranging from consumer
              goods to specialized industrial materials, with access to global
              suppliers.
            </h1>
          </div>
        </div>

        <div className="bg-sky-900 text-gray-100 p-8 rounded shadow-xl shadow-gray-600 hover:text-sky-900 hover:bg-gray-100 duration-150 cursor-pointer">
          <div className=" flex">
            <Route size={50} className="w-fit" />
          </div>
          <div>
            <h1 className="my-3 text-2xl">Consulting & Sourcing</h1>
          </div>
          <div>
            <h1>
              Delivering expert consulting and global sourcing solutions to help
              businesses expand, optimize operations, and effectively access
              international markets.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
