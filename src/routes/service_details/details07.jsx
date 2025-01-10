import React from "react";
import Image01 from "../../assets/images/selected/coffee/img09.png";
import Image02 from "../../assets/images/new/four/img16.jpg";
import Image03 from "../../assets/images/new/four/img17.jpg";
import Image04 from "../../assets/images/new/four/img18.jpg";

import Image06 from "../../assets/images/services/img07detail.jpg";

import NewImage01 from "../../assets/images/selected/coffee/img01.png";
import NewImage02 from "../../assets/images/selected/coffee/img02.png";
import NewImage03 from "../../assets/images/selected/coffee/img03.png";
import NewImage04 from "../../assets/images/selected/coffee/img04.png";
import NewImage05 from "../../assets/images/selected/coffee/img05.png";
import NewImage06 from "../../assets/images/selected/coffee/img06.png";
import NewImage07 from "../../assets/images/selected/coffee/img07.png";
import NewImage08 from "../../assets/images/selected/coffee/img08.png";
import NewImage09 from "../../assets/images/selected/coffee/img09.png";
import NewImage10 from "../../assets/images/selected/coffee/img10.png";

import { div } from "framer-motion/client";

export default function Details01() {
  const data = [
    {
      title: "Yirgacheffe Type",
      type: "Arabica Coffee",
      process: "Process: Typically washed, some natural",
      text: "Known for its floral, tea-like characteristics with bright acidity and complex notes of citrus, jasmine, and tropical fruits, Yirgacheffe is among the finest Ethiopian coffees.",
      text2: "Altitude: 1,700-2,200 meters (5,570-7,210 feet)",
      text3: "",
      img: NewImage01,
    },
    {
      title: "Guji Type",
      type: "Arabica Coffee",
      process: "Process: Both natural and washed",
      text: "Grown in the Guji Zone, this coffee has a fruity profile with hints of berries, stone fruit, and chocolate, with a full-bodied, rich mouthfeel and a hint of spice.",

      text2: "",
      text3: "",
      img: NewImage02,
    },
    {
      title: "Harrar Type",
      type: "Arabica Coffee",
      process: "Process: Natural",
      text: "Known for its bold, fruity, and winey flavors, often with blueberry and chocolate notes, Harrar coffee has a heavier body and rich, wild character.",
      text2: "Altitude: 1,510 – 2,210 meters (4,950 – 6,950 feet)",
      text3: "",
      img: NewImage03,
    },
    {
      title: "Sidamo Type",
      type: "Arabica Coffee",
      process: "Process: Washed",
      text: "Sidamo coffee is balanced and smooth, featuring berry, floral, and citrus notes with medium acidity.",
      text2: "Altitude: 1,550 – 2,200 meters (5,080 – 7,210 feet)",
      text3: "",
      img: NewImage04,
    },
    {
      title: "Limu Type",
      type: "Arabica Coffee",
      process: "Process: Washed",
      text: "Smooth body, low acidity, with hints of citrus, spice, and wine undertones, Limu coffee is mild yet complex.",
      text2: "Altitude: 1,400 – 2,100 meters (4,590 – 6,880 feet)",
      text3: "",
      img: NewImage05,
    },
    {
      title: "Specialty Ethiopian Coffees",
      type: "Coffee",
      process: "",
      text: "Ethiopia Geisha Village (Gold Label, Red Label, Green Label) – High-grade Geisha with floral and fruity notes, offering select, sun-dried options for enhanced flavor.",
      text2:
        "Ethiopia Banzimajji G1 Geisha Wash – Elegant Geisha with bright acidity, delicate florals, and a smooth finish. 96-Hour Anaerobic Sun-Dried (Grana, Ethiopia) – Specialty coffee with tropical fruit notes and a layered complexity from anaerobic fermentation.",
      text3:
        "Jashephu Kochir G1 – Clean and crisp with citrus and floral hints.",
      img: NewImage06,
    },
    {
      title: "Roasted Coffee Brands",
      type: "Coffee",
      process: "",
      text: "We also offer roasted Ethiopian coffee, crafted to bring out the unique flavors of each variety. Available in light to dark roasts, our roasted coffee is ideal for specialty cafes and home brewers, preserving the distinct aroma and richness of Ethiopian beans.",
      text2: "",
      text3: "",
      img: NewImage07,
    },
    {
      title: "Peanut",
      type: "Legume crop",
      process: "",
      text: "Peanuts provide a good source of protein and healthy monounsaturated fats. Rich in vitamins E and B, magnesium, and folate, they support heart health and energy metabolism. Their antioxidants may combat oxidative stress, while fiber aids digestion and weight management.",
      text2: "",
      text3: "",
      img: NewImage08,
    },
    {
      title: "Sesame Seed (Humera)",
      type: "Seed",
      process: "",
      text: "Humera sesame seeds are rich in healthy fats, protein, and essential minerals like calcium and magnesium. They offer antioxidants that reduce inflammation and support skin health. Regular consumption can aid digestion, enhance bone health, and lower cholesterol levels.",
      text2: "",
      text3: "",
      img: NewImage09,
    },
    {
      title: "Sun Flower",
      type: "Seed",
      process: "",
      text: "Sunflower seeds are high in healthy fats, protein, and essential vitamins, including vitamin E. They promote heart health, reduce inflammation, and support skin health. Antioxidants enhance immune function, and their fiber content aids digestion and helps regulate blood sugar levels.",
      text2: "",
      text3: "",
      img: NewImage10,
    },
  ];

  return (
    <div className="pt-14 sm:14  md:pt-0 font-serif">
      <div className="relative w-full mb-14">
        <img src={Image06} className="w-full" alt="" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold text-center">
            Coffee Beans and oil seeds Importer
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
              We specialize in the import of exceptional Ethiopian coffee and a
              range of high-quality oil seeds.
            </h1>
            <h1 class="leading-9">
              Our Ethiopian coffee is celebrated for its distinct flavors and
              aromas, sourced directly from local farmers who practice
              sustainable cultivation. We also import premium oil seeds, valued
              for their health benefits and culinary versatility. Our dedicated
              team ensures rigorous quality checks and efficient logistics,
              providing our clients with fresh and authentic products. Committed
              to excellence, we aim to enrich your business offerings with the
              finest Ethiopian imports, tailored to meet your specific needs.
            </h1>

            <h1 class="leading-9">
              Our partnerships with major clients like Starbucks and Luckin
              Coffee reflect our commitment to quality and reliability,
              delivering Ethiopia’s exceptional coffee heritage worldwide.
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
            We import premium oil seeds, valued for their health benefits
          </h1>
          <h1 className="w-fit mx-auto">
            Our dedicated team ensures rigorous quality checks and efficient
            logistics, providing our clients with fresh and authentic products.
          </h1>
        </div>

        {/* <div className="grid ms:grid-cols-2 md:grid-cols-2 lmd:grid-cols-3 gap-16 mx-auto w-fit md:p-7 ">
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
        </div> */}

        <div className=" space-y-6">
          {data.map((item, index) => (
            <div className="grid md:grid-cols-4">
              <div className="md:col-span-1">
                <img className="rounded" src={item.img} />
              </div>
              <div className="md:col-span-3 p-4 space-y-3">
                <h1 className="underline text-lg pb-3 text-sky-900 font-semibold">
                  {item.title}
                </h1>
                <h1>{item.process}</h1>
                <h1>{item.text}</h1>
                <h1>{item.text2}</h1>
                <h1>{item.text3}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
