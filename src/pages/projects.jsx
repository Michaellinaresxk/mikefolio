"use client";
import ProjectCard from "@/components/stateless/cards/ProjectCard";
import WebsiteCard from "@/components/stateless/cards/WebsiteCard";
import Menu from "@/components/stateless/menu/Menu";
import Heading from "@/components/stateless/Heading";
import CallToAction from "@/components/stateless/CallToAction";
import Footer from "@/components/stateless/Footer";
import { projects } from "@/data/projects";
import { websites } from "@/data/websites";
import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const filterCategories = ["All", "Apps", "Websites", "UI Designs"];
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

  const filteredWebsites = websites.filter((web) => {
    if (activeFilter === "All") return true;
    return web.category === activeFilter;
  });

  const sectionContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const divContainerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <>
      <div className="bg-projects">
        <Menu />
        <Heading title1="My" title2="Work" subtitle="Explore my projects" />

        <div className="flex justify-center mt-10">
          {filterCategories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 mx-2 rounded-full ${
                activeFilter === category
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.section
          variants={sectionContainerVariants}
          initial="hidden"
          animate="show"
          layout
          className="grid gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr sm:w-5/6 md:w-4/5 lg:w-6/6 mx-auto cursor-pointer mt-20 mb-16"
        >
          {filteredWebsites.map((project) => (
            <motion.div
              variants={divContainerVariants}
              key={project.id}
              className="mx-auto"
              layout
            >
              <WebsiteCard
                image={project.CardImage}
                title={project.title}
                app_link={project.projectLinks}
                id={project.id}
              />
            </motion.div>
          ))}

          {filteredProjects.map((project) => (
            <motion.div
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              key={project.id}
              className="mx-auto"
              layout
            >
              <ProjectCard
                image={project.CardImage}
                title={project.title}
                app_link={project.projectLinks}
                repo_link={project.repoLink}
                id={project.id}
                description={project.description}
                repoProvider={project.repoProvider}
              />
            </motion.div>
          ))}
        </motion.section>
      </div>
      <CallToAction />
      <Footer text="Copyright Michaelxk ©" year="2024" />
    </>
  );
};
export default Projects;
