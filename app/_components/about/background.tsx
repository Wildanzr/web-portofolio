"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const AboutBackground = () => {
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
      <p className="text-base font-sans text-black-pearl text-justify">
        Yo, kicked off my journey in 2019 at{" "}
        <Link
          href="https://www.instagram.com/univ.brawijaya/"
          target="_blank"
          className="text-brawijaya font-semibold"
        >
          Brawijaya University
        </Link>
        , majoring in Computer Science. First semester? Couldn&apos;t code for
        shit, LOL. Then that quarter-life crisis hit hard, and I was like,
        &apos;Time to pick a lane.&apos; So I grinded coding on my own, no cap.
      </p>

      <br />

      <p className="text-base font-sans text-black-pearl text-justify">
        Fast forward to 2021, I challenged myself to become an instructor and
        help others level up. Then, snagged my first internship at{" "}
        <Link
          href="https://www.bni.co.id/"
          target="_blank"
          className="text-bni font-semibold"
        >
          Bank Negara Indonesia
        </Link>{" "}
        as a fullstack dev. That&apos;s where I got that real-world experience,
        working on actual projects and collabing with pros.
      </p>

      <br />

      <p className="text-base font-sans text-black-pearl text-justify">
        After that, I started my own freelance gig while wrapping up uni. Did at
        least five projects during that grind. Taught me how to juggle time like
        a boss and deliver fire work to clients.
      </p>

      <br />

      <p className="text-base font-sans text-black-pearl text-justify">
        Now, I&apos;m slaying as a fullstack web3 dev at{" "}
        <Link
          href="https://tokenminds.co/"
          target="_blank"
          className="text-tokenminds font-semibold"
        >
          TokenMinds
        </Link>{" "}
        , building dApp vibes. Mostly handling smart contract integrations and
        backend magic. Web3 opened up a whole world – won some{" "}
        <Link
          href="https://devfolio.co/@wildanzrrr"
          target="_blank"
          className="text-brawijaya font-semibold"
        >
          hackathons
        </Link>
        , attended global confs, and built a squad with other founders and
        builders.
      </p>
    </motion.div>
  );
};

export default AboutBackground;
