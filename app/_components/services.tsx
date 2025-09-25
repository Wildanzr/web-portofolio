"use client";

import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center w-full min-h-screen py-20 gradient-linear-reverse"
    >
      <div className="container mx-auto px-5">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold text-black-pearl lg:text-5xl mb-4">
            How can I help you?
          </h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Building straight fire web apps, from simple landing pages that pop
            to complex platforms that hit different. Check out what I can do for
            you:
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <h4 className="text-xl font-semibold text-black-pearl mb-2">
              Web App 💻
            </h4>
            <p className="text-gray-600">
              Building fire web apps that are straight-up responsive and
              interactive, no cap! 🔥
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <h4 className="text-xl font-semibold text-black-pearl mb-2">
              API and System Design 🏗️
            </h4>
            <p className="text-gray-600">
              Designing scalable APIs and systems that are built to last and
              handle the vibes! ✨
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <h4 className="text-xl font-semibold text-black-pearl mb-2">
              Smart Contract Development ⛓️
            </h4>
            <p className="text-gray-600">
              Crafting secure smart contracts for blockchain that are
              uncrackable and legit! 🚀
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <h4 className="text-xl font-semibold text-black-pearl mb-2">
              Cross Platform Mobile App 📱
            </h4>
            <p className="text-gray-600">
              Creating mobile apps that slay on both iOS and Android, keeping it
              cross-platform and fresh! 💯
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
