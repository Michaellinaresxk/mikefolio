"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export const ImageAnimation = ({ image }) => {
  const imageRef = useRef(null);
  const [xEnd, setXEnd] = useState(-300);

  useEffect(() => {
    const update = () =>
      setXEnd(window.innerWidth < 768 ? -80 : -300);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const x = useTransform(scrollYProgress, [0.5, 1], [0, xEnd]);

  return (
    <motion.div
      ref={imageRef}
      className="mt-10 lg:mt-0 lg:pl-20 website_image_animation"
      style={{ opacity, scale, x }}
    >
      <Image src={image} alt="About me photo" className="aboutMe__img" />
    </motion.div>
  );
};

export default ImageAnimation;
