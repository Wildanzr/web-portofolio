"use client";

import React from "react";
import { motion } from "framer-motion";
import Item from "./about/porrdolio/item";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

const Portfolio = () => {
  return (
    <section
      id="work"
      className="flex flex-col items-center justify-center w-full min-h-screen py-20 gradient-linear-start"
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
            Featured Portfolio
          </h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            A collection of projects that showcase my expertise in full-stack
            development, Web3 technologies, and modern UI/UX design.
          </motion.p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10"
        >
          {PORTFOLIO_ITEMS.map((item, index) => (
            <Item
              key={item.id}
              title={item.title}
              description={item.description}
              images={item.images}
              link={item.link}
              techStack={item.techStack}
              delay={index * 0.2}
            />
          ))}
        </motion.div>

        {/* View More Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-brawijaya text-brawijaya rounded-full hover:bg-brawijaya hover:text-white transition-all duration-300 font-medium"
          >
            <span>View More Projects</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
