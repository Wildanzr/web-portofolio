"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const AboutExperience = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        rotateX: -15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotateX: 0,
      }}
      transition={{
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{ perspective: 1000 }}
    >
      <p className="text-base font-sans text-black-pearl">
        Fast forward to 2021, I challenge myself to become an instructor to
        facilitate learning for others. Then, I landed my first internship at{" "}
        <Link
          href="https://www.bni.co.id/"
          target="_blank"
          className="text-bni font-semibold"
        >
          Bank Negara Indonesia
        </Link>{" "}
        as a fullstack developer. This is where I gained valuable experience
        working on real-world projects and collaborate with professionals.
      </p>

      <br />

      <p className="text-base font-sans text-black-pearl">
        After that, I opened my own freelance project while finishing my
        studies. At least there was five projects I worked on during that time.
        This experience taught me how to manage my time effectively and deliver
        high-quality work to clients.
      </p>

      <br />

      <p className="text-base font-sans text-black-pearl">
        Now, I work as a fullstack web3 developer at{" "}
        <Link
          href="https://tokenminds.co/"
          target="_blank"
          className="text-tokenminds font-semibold"
        >
          TokenMinds
        </Link>{" "}
        , where I focused on building dApp applications. Mostly I do work on
        smart contract integration and some backend stuff. Web3 gave me a lot of
        opportunities, winning some{" "}
        <Link
          href="https://devfolio.co/@wildanzrrr"
          target="_blank"
          className="text-brawijaya font-semibold"
        >
          hackathons
        </Link>
        , attending global conferences, and building a network with other
        founders and builders.
      </p>
    </motion.div>
  );
};

export default AboutExperience;
