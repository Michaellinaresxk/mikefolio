// import Menu from "../../components/stateless/menu/Menu";
import CallToAction from "@/components/stateless/CallToAction";
import Footer from "@/components/stateless/Footer";
import { ProfileCvSection } from "@/components/stateless/ProfileCvSection";
import { ExperienceSection } from "@/components/stateless/ExperienceSection";
import { WhatIUse } from "@/components/stateless/WhatIUse";
import { motion } from "framer-motion";
import { about_background_image } from "@/assets/img/index";
import { useRef } from "react";
import { useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import Menu from "@/components/stateless/menu/Menu";

const About = () => {
  const titleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["end start", "start end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <>
      <section className="bg">
        <Image
          alt="feature"
          className="object-cover object-center  w-full"
          src={about_background_image}
        />
        <section className="about-banner  min-h-screen flex flex-col">
          <Menu />
          <div className="relative bg-dark-blue text-white font-sans">
            <div className="container mx-auto px-6 py-20 text-center">
              <div className="uppercase tracking-wide text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                <span className="text-gray-300">
                  Innovating User Experiences with Every Line of Code
                </span>
              </div>
              <motion.div className="flex justify-center items-center">
                <div className="absolute z-0 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
                <motion.h1
                  ref={titleRef}
                  style={{ scale }}
                  className="relative z-10 text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-none font-extrabold tracking-tight"
                >
                  Hello, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                    Michael
                  </span>
                </motion.h1>
              </motion.div>
              <div className="mt-8 md:mt-12 lg:mt-16">
                <a
                  href={`/projects`}
                  className="inline-block text-sm md:text-base lg:text-lg font-medium leading-loose text-indigo-200 hover:text-indigo-100"
                >
                  Latest Project <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          <main className="h-screen myJourney-bg flex justify-center items-center flex-col">
            <div className="flex flex-col lg:flex-row items-center lg:pl-20">
              <motion.div className="w-full lg:w-7/12 text-center lg:text-left mt-8 lg:mt-0 p-10">
                <h2 className="text-3xl font-bold tracking-wide text-white lg:text-6xl mb-4">
                  My journey,
                </h2>
                <p className="text-xl lg:text-5xl text-white">
                  as a developer started when I noticed that I can bring my{" "}
                  <span className="text-orange-500">ideas to life</span> and
                  develop my knowledge in the same process.
                </p>
                <p className="mt-10 text-xl lg:text-3xl text-white text-right">
                  I'm naturally curious and perpetually expanding{" "}
                  <span className="text-orange-500">my knowledge.</span>
                </p>
              </motion.div>
            </div>
          </main>
          <ExperienceSection />
          <ProfileCvSection resumeLink="/src/assets/Michael Linares CV.pdf" />
          <div className="mt-20">
            <CallToAction />
          </div>

          <WhatIUse />
        </section>
      </section>

      <Footer text="Copyright Michaelxk ©" year={2024} />
    </>
  );
};
export default About;
