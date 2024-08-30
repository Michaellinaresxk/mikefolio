"use client";
import Image from "next/image";
import React, { useRef } from "react";

import { motion, useTransform, useScroll } from "framer-motion";

export const ImageAnimation = ({ image }) => {
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  // Opacity stays the same, fading out as you scroll
  const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);

  // Scale from 0 to 1 as you scroll
  const scale = useTransform(scrollYProgress, [0, 0.5], [0, 0.9]);

  // Move to the left as you scroll (x axis movement)
  const x = useTransform(scrollYProgress, [0.5, 1], [0, -300]);

  return (
    <motion.div
      ref={imageRef}
      className="mt-10 lg:mt-0 lg:pl-20 website_image_animation"
      style={{ opacity, scale, x }} // Applying both scale and x transformations
    >
      <Image src={image} alt="About me photo" className="aboutMe__img" />
    </motion.div>
  );
};
