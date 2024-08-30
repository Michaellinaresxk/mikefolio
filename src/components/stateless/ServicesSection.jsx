"use client";
import { useRef } from "react";
import { FaRocket, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTransform, useScroll } from "framer-motion";

const ServicesSection = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const horizontalRef = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="py-16" style={{ x: horizontalRef }}>
      <motion.div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Row 1: Web Design and 3D Element */}
          <div className="p-6 service-card">
            <FaRocket size={40} color="#f87315" className="mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Web Design
            </h3>
            <p className="text-lg leading-relaxed text-white">
              A web is the image that your business transmits to the world. For
              this reason, I can offer you a modern and innovative design, easy
              to use, aesthetically pleasing, and suits the user to the website.
            </p>
            {/* <p className="mt-4 font-bold text-white ">Let's work together!</p> */}
          </div>

          {/* Row 2: 3D Element and Application Development */}

          <motion.div className="p-6  service-card">
            <FaMobileAlt size={40} color="#f87315" className="mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Application Development
            </h3>
            <p className="text-lg leading-relaxed text-white mb-20">
              Covering every stage from design and planning to development and
              ongoing maintenance. Ensures that your app delivers a seamless
              experience across all devices, with a focus on performance,
              security, and scalability.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <div className="flex justify-center">
        <h2 className="text-3xl p-10 font-bold tracking-wide mt-20 mb-20 text-white lg:text-5xl">
          Turning <span className="text-orange-500">ideas</span> into code, one
          pixel at a time.
        </h2>
      </div>

      <motion.div className="p-6 flex justify-center">
        <div className=" space-y-5 mb-20">
          <div className="flex items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="ml-3 text-2xl">User-Friendly Interfaces</span>
          </div>
          <div className="flex items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="ml-3 text-2xl">Visual Appeal</span>
          </div>
          <div className="flex items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="ml-3 text-2xl">Aesthetically Pleasing</span>
          </div>
          <div className="flex items-center text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="ml-3 text-2xl ">Cross-Browser Compatibility</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
