import React from "react";
import Image01 from "../assets/images/four/img01.jpg";
import Image02 from "../assets/images/four/img02.jpg";
import Image03 from "../assets/images/four/img03.jpg";
import Image04 from "../assets/images/four/img04.jpg";
import Image05 from "../assets/images/four/img05.jpg";
import Image06 from "../assets/images/four/img06.jpg";
import Image07 from "../assets/images/four/img07.jpg";
import Image08 from "../assets/images/four/img08.jpg";

export default function FourSection() {
  return (
    <div className="text-gray-800 font-montserrat">
      <div>
        <div className="w-full grid grid-cols-2">
          <div className="my-auto">
            <h1 className="p-8">
              At Birara Dragon Bridge General Trading, we are dedicated to
              delivering high-quality products and services across diverse
              industries.{" "}
            </h1>
            <h1 className="p-8">
              {" "}
              In the realm of medical supplies and equipment, we provide a wide
              range of products, including premium-quality scrubs, medical
              devices, and essential equipment for hospitals and clinics.{" "}
            </h1>
            <h1 className="p-8">
              We also excel in cars, machinery, and electronics, sourcing and
              supplying automobiles, heavy machinery, and electronics for
              industrial, commercial, and personal use, featuring advanced
              technology and gadgets.{" "}
            </h1>
            <h1 className="p-8">
              Our offerings in fashion, apparel, and human hair include
              wholesale clothing, shoes, accessories, and 100% human hair
              products, all designed to keep up with the latest global trends.
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-4 m-8">
            <img src={Image01} alt="" className="rounded-2xl" />
            <img src={Image02} alt="" className="rounded-2xl" />
            <img src={Image03} alt="" className="rounded-2xl" />
            <img src={Image04} alt="" className="rounded-2xl" />
          </div>
        </div>
      </div>

      <div>
        <div className="w-full grid grid-cols-2">
          <div className="grid grid-cols-2 gap-4 m-8">
            <img src={Image05} alt="" className="rounded-2xl" />
            <img src={Image06} alt="" className="rounded-2xl" />
            <img src={Image07} alt="" className="rounded-2xl" />
            <img src={Image08} alt="" className="rounded-2xl" />
          </div>
          <div className="my-auto">
            <h1 className="p-8">
              For home, office, and commercial furnishings, we supply modern
              furniture, fixtures, decor, and high-quality building materials,
              ensuring functionality and style for residential and commercial
              spaces.
            </h1>
            <h1 className="p-8">
              {" "}
              In addition, we provide a variety of general trading and wholesale
              products, ranging from consumer goods to specialized industrial
              materials, with access to global suppliers.{" "}
            </h1>
            <h1 className="p-8">
              {" "}
              Our business consulting and sourcing services deliver expert
              guidance and solutions, helping businesses expand, optimize
              operations, and effectively access international markets.{" "}
            </h1>
            <h1 className="p-8">
              At Birara Dragon Bridge General Trading, we pride ourselves on
              quality, customer satisfaction, and our commitment to meeting the
              diverse needs of our clients.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
