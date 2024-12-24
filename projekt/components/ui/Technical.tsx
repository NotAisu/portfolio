"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const TechStack = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
        className="relative z-10 w-full h-full flex flex-col items-center justify-center"
      >
        <Image
          src="/Zusammenarbeit.svg"
          alt="Tech Stack Illustration"
          width={300}
          height={300}
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default TechStack;