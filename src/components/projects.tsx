"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./scrollReveal";

const projects = [
  {
    id: 1,
    title: "Lynchat",
    description: "Real-time websocket chatbot with Express + Socket.io backend.",
    tech: "Next.js • Node.js • Express • Socket.io • TypeScript",
    link: "https://github.com/lynettehemingway/lynchat",
  },
  {
    id: 2,
    title: "Pantry Management",
    description: "Inventory tracker with Firebase auth and realtime database.",
    tech: "React • Firebase • TailwindCSS • JavaScript",
    link: "https://github.com/lynettehemingway/pantry-management",
  },
  {
    id: 3,
    title: "Centsible",
    description: "A responsive web budgeting platform built for students.",
    tech: "React Native Web • Node.js • MongoDB",
    link: "https://github.com/lynettehemingway/centsible",
  },
  {
    id: 4,
    title: "uweather ☁",
    description: "Weather tracking platform showing global warming trends.",
    tech: "C++",
    link: "https://github.com/NivedhaaS/uweather",
  },
  {
    id: 5,
    title: "UFFSA Wolfbot",
    description: "Discord bot for UF's Filipino Student Association.",
    tech: "Python",
    link: "https://github.com/lynettehemingway/wolfbot", 
  },
  {
    id: 6,
    title: "CostCompass",
    description: "GIS-powered cost-of-living insights using Maps & Census API.",
    tech: "GIS • Google Maps API • OpenAI API • U.S. Census API",
    link: "https://github.com/CloudRazerz/CostCompass",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen bg-black text-white px-8 md:px-16 py-24">
      <ScrollReveal>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          // my <span className="text-[#c8a2c8]">projects</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ScrollReveal key={project.id} delay={0.2 * project.id}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-zinc-900 p-6 rounded-xl shadow-md hover:shadow-[#c8a2c8]/30 transition-all h-full flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-[#e4e4e7] mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                <p className="text-gray-500 text-xs">{project.tech}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-[#c8a2c8] text-sm hover:underline"
              >
                view project →
              </a>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
