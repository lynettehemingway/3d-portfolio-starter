"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "./scrollReveal";

const projects = [
  {
    id: 1,
    title: "Lynchat",
    description: "real-time websocket chatbot with express + socket.io backend",
    tech: "Next.js • Node.js • Express • Socket.io • TypeScript",
    image: "/images/lynchat.jpg",
    link: "https://github.com/lynettehemingway/lynchat",
  },
  {
    id: 2,
    title: "Pantry Management",
    description: "inventory tracker with firebase auth and realtime database",
    tech: "React • Firebase • TailwindCSS • JavaScript",
    image: "/images/pantry.jpg",
    link: "https://github.com/lynettehemingway/pantry-management",
  },
  {
    id: 3,
    title: "Centsible",
    description: "personal finance tracker gamified with progress goals",
    tech: "React Native • Expo • TypeScript • Redux Toolkit",
    image: "/images/centsible.jpg",
    link: "https://github.com/lynettehemingway/centsible",
  },
  {
    id: 4,
    title: "uweather ☁",
    description: "Weather tracking platform for year-by-year comparisons to highlight global warming trends.",
    tech: "C++",
    image: "/images/uweather.jpg",
    link: "https://github.com/NivedhaaS/uweather",
  },
  {
    id: 5,
    title: "GIS-COVID",
    description: "choropleth mapping of covid-19 data using arcgis js api",
    tech: "HTML • JavaScript • ArcGIS API • CSS",
    image: "/images/giscovid.jpg",
    link: "https://github.com/lynettehemingway/GIS-COVID",
  },
  {
    id: 6,
    title: "CostCompass",
    description: "GIS-powered platform for real-time cost-of-living insights using Google Maps & Census API",
    tech: "JavaScript, Python, NodeJS, Flask, GIS",
    image: "/images/costcampus.jpg",
    link: "https://github.com/CloudRazerz/CostCompass",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen bg-black text-white px-8 md:px-16 py-24">
      <ScrollReveal>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-[#04D9FF]">Projects</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ScrollReveal key={project.id} delay={0.2 * project.id}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-[#04D9FF]/20 transition-all"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={450}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <p className="text-sm text-gray-500">{project.tech}</p>
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-block mt-4 text-[#04D9FF] hover:underline"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
