"use client";
import React from "react";
import { WebCard } from "./cards/WebCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { uiDesigns } from "../../data/UIDesings";
import { motion } from "framer-motion";
import Link from "next/link";

const WebsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <motion.div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
        <div className="flex flex-col md:flex-row md:items-center gap-10">
          <div className="w-full md:w-4/12">
            <h2 className="text-5xl font-bold mb-6">
              Latest{" "}
              <span className="font-normal text-orange-500">UI Designs</span>
            </h2>
            <p className="mb-5 text-lg">
              I&apos;ve been instrumental in creating impactful UI designs.
              Here&apos;s a curated selection that highlights my expertise and
              the results achieved.
            </p>
            <Link href="/projects">
              <button className="bg-gradient-to-r from-gray-700 to-gray-900 text-white font-medium rounded-full px-8 py-4 md:px-12 md:py-6 hover:from-gray-600 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 transition ease-in-out duration-300 text-lg md:text-xl shadow-lg">
                View all
              </button>
            </Link>
          </div>
          <div className="w-full md:w-8/12">
            <Slider {...settings}>
              {uiDesigns.map((web) => (
                <div key={web.id} className="p-4">
                  <WebCard
                    title={web.title}
                    imageUrl={web.CardImage}
                    cardWidht="380px"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default WebsSection;
