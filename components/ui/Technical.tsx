"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Technical = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="relative z-10"
        >
          <Image
            src="./Zusammenarbeit.svg"
            alt="Tech Stack Illustration"
            width={400}
            height={400}
            className="object-contain hover:scale-105 transition-transform duration-300"
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technical;