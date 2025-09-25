"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  LinkedinLogoIcon,
  GithubLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";

const Contact = () => {
  return (
    <section
      id="contact"
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
            Let&apos;s Link Up!
          </h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Got a sick idea? Let&apos;s make it happen! Drop me a line and
            let&apos;s chat about your next big project 🔥
          </motion.p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          <motion.a
            href="mailto:hellodanzr@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="flex flex-row  space-x-5 bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex bg-brawijaya w-fit p-2 rounded-lg">
              <EnvelopeIcon className="size-16 mx-auto text-white" />
            </div>
            <div className="flex flex-col items-start justify-between py-4">
              <h4 className="text-xl font-semibold text-black-pearl">
                Slide Into My Inbox
              </h4>
              <h4 className="text-base font-light text-black-pearl/70">
                hellodanzr@gmail.com
              </h4>
            </div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/wildanzrrr/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex flex-row space-x-5 bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex bg-brawijaya w-fit p-2 rounded-lg">
              <LinkedinLogoIcon className="size-16 mx-auto text-white" />
            </div>
            <div className="flex flex-col items-start justify-between py-4">
              <h4 className="text-xl font-semibold text-black-pearl">
                Let&apos;s Network!
              </h4>
              <h4 className="text-base font-light text-black-pearl/70">
                @wildanzrrr
              </h4>
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/wildanzrrr"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex flex-row space-x-5 bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex bg-brawijaya w-fit p-2 rounded-lg">
              <GithubLogoIcon className="size-16 mx-auto text-white" />
            </div>
            <div className="flex flex-col items-start justify-between py-4">
              <h4 className="text-xl font-semibold text-black-pearl">
                Check My Code
              </h4>
              <h4 className="text-base font-light text-black-pearl/70">
                @wildanzrrr
              </h4>
            </div>
          </motion.a>

          <motion.a
            href="https://x.com/wildanzrrr"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex flex-row space-x-5 bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex bg-brawijaya w-fit p-2 rounded-lg">
              <XLogoIcon className="size-16 mx-auto text-white" />
            </div>
            <div className="flex flex-col items-start justify-between py-4">
              <h4 className="text-xl font-semibold text-black-pearl">
                Follow My Vibes
              </h4>
              <h4 className="text-base font-light text-black-pearl/70">
                @wildanzrrr
              </h4>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
