import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const texts = [
  "Premium Construction Materials.",
  "Stylish Home Accents.",

  "Efficient Machinery Shipping Solutions.",
  "Innovative Machinery & Electronics.",
];

export default function HomeFooter() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 7000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);
  return (
    <div className="overflow-hidden w-full  p-1 flex items-center bg-sky-900 bg-opacity-45 justify-center">
      <motion.div
        key={index}
        className="flex justify-center items-center w-full h-full  text-white "
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "-100%" }}
        transition={{ type: "tween", duration: 0.5 }}
      >
        {texts[index]}
      </motion.div>
    </div>
  );
}
