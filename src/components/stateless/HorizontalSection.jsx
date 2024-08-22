"use client";
import React from "react";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { WebCard } from "@/components/stateless/cards/WebCard";
import { pcyr } from "../../assets/img/webs/index";
import ImageAnimation from "./ImageAnimation";

import { websites } from "@/data/websites";
export const HorizontalSection = () => {
  const targetRef = useRef(null);
  const textRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const horizontalRef = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  const fontSizeTransform = useTransform(
    scrollYProgress,
    [0, 0.5],
    [".5vw", "10vw"]
  );
  return (
    <div className="lasted_websites" ref={textRef}>
      <motion.h2
        className="text-7xl font-bold text-center py-20"
        style={{ fontSize: fontSizeTransform }}
      >
        Latest Web{" "}
        <span className="font-normal text-orange-500">Creations</span>
      </motion.h2>

      <section className="relative h-[270vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div className="flex gap-4" style={{ x: horizontalRef }}>
            {websites.map((web) => (
              <div key={web.id} className="p-4">
                <WebCard
                  title={web.title}
                  imageUrl={web.CardImage}
                  cardWidht="450px"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <ImageAnimation image={pcyr} />
    </div>
  );
};
