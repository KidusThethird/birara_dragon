import React from "react";
import { Activity, LifeBuoy, Footprints, Home } from "lucide-react";
export default function OurMission() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="p-16 space-y-7">
          <h1 className="text-2xl font-semibold">Our Mission</h1>
          <h1>
            At Birara Dragon Bridge General Yrading, our mission is to enhance
            lives and empower businesses by delivering high-quality products and
            exceptional services across a wide range of sectors. We are
            committed to sourcing and supplying everything from medical supplies
            and advanced machinery to fashionable apparel and modern
            furnishings. Through innovative solutions and expert consulting, we
            strive to foster growth, optimize operations, and connect our
            customers with the best global suppliers. Our dedication to quality,
            reliability, and customer satisfaction drives us to be a trusted
            partner in every endeavor, ensuring that we meet the evolving needs
            of our clients with integrity and excellence.
          </h1>
        </div>

        <div className="m-8">
          <div className="grid grid-cols-2 gap-5">
            <div className="border-0 border-sky-900 p-4 rounded shadow-2xl">
              <Activity size={80} className="mx-auto text-sky-900" />
              <h1 className="text-center">Healthcare & Medical Solutions</h1>
            </div>

            <div className="border-0 border-sky-900 p-4 rounded shadow-2xl">
              <LifeBuoy size={80} className="mx-auto text-sky-900" />
              <h1 className="text-center">Automotive & Industrial Solutions</h1>
            </div>

            <div className="border-0 border-sky-900 p-4 rounded shadow-2xl">
              <Footprints size={80} className="mx-auto text-sky-900" />
              <h1 className="text-center">Fashion & Lifestyle Products</h1>
            </div>

            <div className="border-0 border-sky-900 p-4 rounded shadow-2xl">
              <Home size={80} className="mx-auto text-sky-900" />
              <h1 className="text-center">Home, Office & Business Services</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
