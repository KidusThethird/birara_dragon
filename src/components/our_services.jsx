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
    <div className="w-full py-5 font-serif">
      <div className="w-full flex py-6">
        <h1 className="w-fit underline mx-auto text-3xl font-semibold text-sky-900">
          Our Services
        </h1>
      </div>
      <div className="space-y-5 sm:space-y-0 sm:grid grid-cols-2 mdd:grid-cols-3 gap-8 px-7 w-full  p-3">
        <a
          href="/details01"
          className="hover:text-sky-900 hover:bg-gray-100 duration-150 cursor-pointer bg-sky-900  text-gray-100 p-8 rounded shadow-xl shadow-gray-600"
        >
          <div className=" flex">
            <ShieldPlus size={50} className="w-fit" />
          </div>
          <div>
            <h1 className="my-3 text-2xl">Medical Supplies & Equipment</h1>
          </div>
          <div>
            <h1>
              Supplying a wide range of medical products, including medial
              diagnostic machineries, premium-quality scrubs for top brands,
              medical devices, and essential equipment for hospitals and
              clinics.
            </h1>
          </div>
        </a>

        <div className="bg-sky-900 text-gray-100 p-8 rounded shadow-xl shadow-gray-600 hover:text-sky-900 hover:bg-gray-100 duration-150 cursor-pointer">
          <div className=" flex">
            <CarFront size={50} className="w-fit" />
          </div>
          <div>
            <h1 className="my-3 text-2xl">Cars, Machinery & Electronics</h1>
          </div>
          <div>
            <h1>
              Sourcing and providing automobiles, heavy machinery, and
              electronics for industrial, commercial, and personal use,
              including advanced technology and gadgets.
            </h1>
          </div>
        </div>

        <div className="bg-sky-900 text-gray-100 p-8 rounded shadow-xl shadow-gray-600 hover:text-sky-900 hover:bg-gray-100 duration-150 cursor-pointer">
          <div className=" flex">
            <Brush size={50} className="w-fit" />
          </div>
          <div>
            <h1 className="my-3 text-2xl">
              Fashion, Apparel, Human Hair & Skincare{" "}
            </h1>
          </div>
          <div>
            <h1>
              Offering wholesale fashion items, including clothing, shoes,
              accessories, and 100% human hair products to cater to the latest
              global trends. We also provide skincare products, including
              options for anyone looking to customize their own formulas.
            </h1>
          </div>
        </div>

        <div className="bg-sky-900 text-gray-100 p-8 rounded shadow-xl shadow-gray-600 hover:text-sky-900 hover:bg-gray-100 duration-150 cursor-pointer">
          <div className=" flex">
            <Factory size={50} className="w-fit" />
          </div>
          <div>
            <h1 className="my-3 text-2xl">
              {" "}
              Home, Office, Commercial Furnishings & Building Materials
            </h1>
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
            <h1 className="my-3 text-2xl">
              General Trading & Wholesale Products
            </h1>
          </div>
          <div>
            <h1>
              Offering a variety of wholesale products ranging from consumer
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
            <h1 className="my-3 text-2xl">
              Business Consulting & Sourcing Services
            </h1>
          </div>
          <div>
            <h1>
              Providing expert consulting and global sourcing solutions to help
              businesses expand, optimize operations, and access international
              markets effectively.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
