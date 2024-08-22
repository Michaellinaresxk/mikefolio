import React, { useRef } from "react";
import { cv } from "../../assets/img/index";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export const ProfileCvSection = ({ resumeLink }) => {
  const cvRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cvRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  return (
    <motion.div
      ref={cvRef}
      className="flex flex-col items-center justify-center min-h-screen m-20"
      style={{ y }}
    >
      <Image src={cv} alt="CV Preview" />
      <a
        href={resumeLink}
        download="Michael-LinaresCV.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-gradient-to-r from-gray-700 to-gray-900 text-white font-medium rounded-full px-8 py-4 md:px-12 md:py-6 hover:from-gray-600 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 transition ease-in-out duration-300 text-lg md:text-xl shadow-lg mt-10">
          Download CV
        </button>
      </a>
    </motion.div>
  );
};
