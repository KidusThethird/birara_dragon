import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const content = [
  {
    title: "Medical Supplies & Equipment",
    description:
      "Supplying a wide range of medical products, including medial diagnostic machineries, premium-quality scrubs for top brands, medical devices, and essential equipment for hospitals and clinics.",
  },
  {
    title: "Cars, Machinery & Electronics",
    description:
      "Sourcing and providing automobiles, heavy machinery, and electronics for industrial, commercial, and personal use, including advanced technology and gadgets.",
  },
  {
    title: " Fashion, Apparel, Human Hair & Skincare.",
    description:
      "Offering wholesale fashion items, including clothing, shoes, accessories, and 100% human hair products to cater to the latest global trends. We also provide skincare products, including options for anyone looking to customize their own formulas.",
  },

  // {
  //   title: "Elegant Tiles & Home Accents",
  //   description:
  //     "Explore a stunning selection of tiles and home decor solutions to elevate your living spaces with style and sophistication.",
  // },
  {
    title: "Home, Office, Commercial Furnishings & Building Materials",
    description:
      "Supplying modern furniture, fixtures, decor, and high-quality building materials for residential, office, and commercial spaces, ensuring both functionality and style.",
  },
  {
    title: "Coffee Beans and oil seeds Importer",
    description:
      "We specialize in the import of exceptional Ethiopian coffee and a range of high-quality oil seeds. ",
  },
  // {
  //   title: "General Trading & Wholesale Products",
  //   description:
  //     "Offering a variety of wholesale products ranging from consumer goods to specialized industrial materials, with access to global suppliers.",
  // },
  // {
  //   title: "Business Consulting & Sourcing Services",
  //   description:
  //     " Providing expert consulting and global sourcing solutions to help businesses expand, optimize operations, and access international markets effectively.",
  // },
];

const letterAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.3 },
};

const staggeredAnimation = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function CoverInfo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 7000); // Change text every 7 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="text-white pt-24">
      <div className="sm:w-1/2 mx-6 my-16 space-y-6 py-6">
        <motion.div
          className="text-3xl sm:text-5xl font-semibold font-serif"
          variants={staggeredAnimation}
          initial="initial"
          animate="animate"
        >
          {content[index].title.split("").map((letter, i) => (
            <motion.span key={i} variants={letterAnimation}>
              {letter}
            </motion.span>
          ))}
        </motion.div>

        <motion.h2
          className="text-base sm:text-xl font-serif"
          initial={{ opacity: 0, y: 20 }} // Starting state for description
          animate={{ opacity: 1, y: 0 }} // End state
          exit={{ opacity: 0, y: 20 }} // Exit state
          transition={{ duration: 0.5 }} // Animation duration
          key={content[index].description} // Key to trigger animation
        >
          {content[index].description}
        </motion.h2>

        <button className="text-white bg-sky-900 px-7 sm:px-14 py-2 sm:py-4 rounded-2xl hover:text-sky-900 hover:bg-white duration-150">
          Learn More
        </button>
      </div>
    </div>
  );
}
