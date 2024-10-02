import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const content = [
  {
    title: "Construction Materials & Furnishings",
    description:
      "High-quality building materials and modern furnishings for residential and commercial projects, combining durability and style.",
  },
  {
    title: "Stylish Home Enhancements",
    description:
      "Transform your space with modern decor and furnishings that elevate your home's aesthetic and functionality.",
  },
  {
    title: "Efficient Machinery Shipping Solutions",
    description:
      "Streamlined shipping services for heavy machinery, ensuring safe and timely delivery to your industrial and commercial sites.",
  },
  // {
  //   title: "Elegant Tiles & Home Accents",
  //   description:
  //     "Explore a stunning selection of tiles and home decor solutions to elevate your living spaces with style and sophistication.",
  // },
  {
    title: "Radiant Beauty Essentials",
    description:
      "Discover an exquisite range of beauty products designed to enhance your natural glow and elevate your skincare routine.",
  },
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
          className="text-3xl sm:text-5xl font-semibold font-oswald"
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
          className="text-base sm:text-xl"
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
