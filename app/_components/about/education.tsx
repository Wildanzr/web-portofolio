"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const AboutEducation = () => {
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
        I start this journey in 2019 at{" "}
        <Link
          href="https://www.instagram.com/univ.brawijaya/"
          target="_blank"
          className="text-brawijaya font-semibold"
        >
          Brawijaya University
        </Link>
        , where I studied Computer Science. First semester? I can&apos;t do any
        code as fuck, LOL. Then quarter life crisis hit me, and I realized I
        needed to choose my path. Long story short, I practiced more and more
        code on my own.
      </p>

      <br />

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
    </motion.div>
  );
};

export default AboutEducation;
