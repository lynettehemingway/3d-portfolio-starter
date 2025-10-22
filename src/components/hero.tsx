"use client";

import React from "react";
import { motion } from "framer-motion";
import Scene from "./scene";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-black text-white px-8 md:px-16 overflow-hidden pt-32 md:pt-0"
      // ↑ pt-32 adds top padding to avoid overlap with fixed navbar
    >
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 space-y-6 text-center md:text-left"
      >
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          hi, i’m <span className="text-[#c8a2c8]">lynette</span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300">
          // a junior <span className="text-[#c8a2c8]">computer science major</span> at the university of florida.
        </h2>

        <p className="text-gray-400 max-w-lg mx-auto md:mx-0">
          currently working towards a minor in DAS and a certificate in GIS.
        </p>

        <div className="flex justify-center md:justify-start space-x-6 pt-6">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#c8a2c8] text-black font-semibold rounded-lg hover:opacity-85 transition-all"
          >
            view my work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border font-semibold rounded-lg transition-all
                     border-[#c8a2c8] text-[#c8a2c8] hover:bg-[#c8a2c8] hover:text-black"
          >
            contact me
          </a>
        </div>
      </motion.div>

      {/* Right Side - 3D Model */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex-1 relative flex justify-center items-center"
        style={{ width: "100%", height: "600px", overflow: "visible" }}
      >
        <Scene />
      </motion.div>
    </section>
  );
};

export default Hero;
