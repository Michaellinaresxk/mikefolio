"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export const AboutMeText = () => {
  const containerRef = useRef(null);

  const isInView = useInView(containerRef, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <>
      <main className="h-screen flex bg-aboutme-container justify-center items-center flex-col">
        <div className="flex items-center pl-20">
          <motion.section
            className="w-full lg:w-7/12"
            ref={containerRef}
            animate={mainControls}
            initial="hidden"
            variants={{
              hidden: { opacity: 0, x: 75 },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{ delay: 0.5 }}
          >
            <motion.h2 className="text-3xl font-bold tracking-wide text-white lg:text-6xl mb-4">
              I am,
            </motion.h2>
            <motion.p className="text-xl lg:text-5xl text-white">
              Frontend Developer, I specialize in crafting visually stunning{" "}
              <span className="text-orange-500">
                and interactive digital experiences.{""}
              </span>
            </motion.p>

            <p className="mt-10 text-xl lg:text-3xl text-white text-right">
              Let's create something amazing{" "}
              <span className="text-orange-500">together.</span>
            </p>
          </motion.section>
        </div>
      </main>
    </>
  );
};
