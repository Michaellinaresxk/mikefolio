import React from "react";
import { arrow } from "../../assets/img/index";
import Image from "next/image";

export const WhatIUse = () => {
  const technologiesWeb = [
    { name: "HTML", id: 1 },
    { name: "CSS", id: 2 },
    { name: "JavaScript", id: 3 },
    { name: "Vue.js", id: 4 },
    { name: "Nuxt", id: 5 },
    { name: "React", id: 6 },
    { name: "Next", id: 7 },
    { name: "Node", id: 8 },
    { name: "Git", id: 9 },
    { name: "Figma", id: 10 },
    { name: "Photoshop", id: 11 },
    { name: "Jest", id: 12 },
    { name: "SCSS", id: 13 },
    { name: "Typescript", id: 14 },
    { name: "React-Native", id: 15 },
    { name: "GraphQL", id: 16 },
  ];

  return (
    <>
      <section className="what_i_use text-center p-10 mt-20 mb-20">
        <h2 className="text-7xl font-bold">
          What i <span className="font-normal text-orange-500">Use</span>
        </h2>
        <div className="text-center">
          <p className="text-xl p-10 lg:text-2xl text-white">
            I am passionate about the{" "}
            <span className="text-orange-500">world of JavaScript</span> and its
            ecosystems.
          </p>
        </div>
        <div className="container flex flex-wrap justify-center gap-4">
          {technologiesWeb.map((tech) => (
            <button
              key={tech.id}
              className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white font-medium rounded-full px-6 py-2 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 shadow-lg text-sm md:text-lg lg:text-xl"
            >
              {tech.name}
            </button>
          ))}
        </div>
      </section>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-20">
        <div className="w-full lg:w-10/12 text-center lg:text-left mt-8 lg:mt-0 p-10">
          <div className="w-full flex justify-center">
            <Image src={arrow} alt="" className="arrow" />
          </div>
          <h2 className="text-2xl font-bold tracking-wide text-white lg:text-6xl mb-4">
            These <span className="text-orange-500">Tools</span>
          </h2>

          <p className="text-xl lg:text-2xl text-white mb-20">
            allows me to create innovative and{" "}
            <span className="text-orange-500">efficient solutions, </span>{" "}
            ensuring that the products I develop are not only functional but
            also scalable and easy to maintain.
          </p>
        </div>
      </div>
    </>
  );
};
