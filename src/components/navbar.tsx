"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    handleHashChange(); // run on mount

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-lg text-white border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-[#c8a2c8]">
          lynette (*´▽`*)
        </Link>

        <div className="flex space-x-8 text-gray-300 font-medium">
          <Link
            href="#hero"
            className={`transition-all ${
              activeHash === "#hero" ? "text-[#c8a2c8]" : "hover:text-[#c8a2c8]"
            }`}
          >
            home
          </Link>
          <Link
            href="#projects"
            className={`transition-all ${
              activeHash === "#projects" ? "text-[#c8a2c8]" : "hover:text-[#c8a2c8]"
            }`}
          >
            projects
          </Link>
          <Link
            href="#contact"
            className={`transition-all ${
              activeHash === "#contact" ? "text-[#c8a2c8]" : "hover:text-[#c8a2c8]"
            }`}
          >
            contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
