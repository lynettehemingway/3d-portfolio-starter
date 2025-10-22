"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./scrollReveal";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks ${formData.name}, your message has been sent!`);
  };

  return (
    <section id="contact" className="min-h-screen bg-black text-white px-8 md:px-16 py-24">
      <ScrollReveal>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          // get in <span className="text-[#c8a2c8]">touch</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-zinc-900 p-8 rounded-xl space-y-6 shadow-lg hover:shadow-[var(--accent)]/20 transition-all"
        >
          <input
            type="text"
            name="name"
            placeholder="your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-zinc-800 rounded-lg outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
          <input
            type="email"
            name="email"
            placeholder="your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-zinc-800 rounded-lg outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
          <textarea
            name="message"
            placeholder="your message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-zinc-800 rounded-lg outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 bg-[#c8a2c8] text-black font-semibold rounded-lg hover:bg-[#c8a2c8] transition-all"
          >
            send message
          </motion.button>
        </motion.form>
      </ScrollReveal>
    </section>
  );
};

export default ContactForm;