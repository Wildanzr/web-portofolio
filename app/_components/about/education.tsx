"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCapIcon,
  CalendarIcon,
  TrophyIcon,
  BookOpenIcon,
} from "@phosphor-icons/react";

const education = {
  university: "Brawijaya University",
  degree: "Undergraduate of Information Technology Education",
  period: "2019 - 2023",
  gpa: "3.74 of 4.0",
  location: "Malang, Indonesia",
  link: "https://www.instagram.com/univ.brawijaya/",
};

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
      className="space-y-8"
    >
      {/* Main Education Card */}
      <motion.div
        initial={{
          opacity: 0,
          x: -30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.4,
          delay: 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="relative border-l-4 border-brawijaya bg-gradient-to-r from-blue-50 to-transparent pl-8 py-6 rounded-r-lg"
      >
        {/* Icon */}
        <div className="absolute -left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white border-4 border-brawijaya shadow-lg">
          <GraduationCapIcon
            size={24}
            className="text-brawijaya"
            weight="fill"
          />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-black-pearl mb-2">
              {education.degree}
            </h3>
            <Link
              href={education.link}
              target="_blank"
              className="text-xl text-brawijaya font-semibold hover:underline transition-colors inline-flex items-center gap-2"
            >
              <BookOpenIcon size={20} />
              {education.university}
            </Link>
            <p className="text-gray-600 mt-1">{education.location}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Period */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm border border-gray-100"
            >
              <div className="flex-shrink-0">
                <CalendarIcon size={20} className="text-brawijaya" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Duration</p>
                <p className="text-base font-semibold text-black-pearl">
                  {education.period}
                </p>
              </div>
            </motion.div>

            {/* GPA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm border border-gray-100"
            >
              <div className="flex-shrink-0">
                <TrophyIcon size={20} className="text-brawijaya" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">GPA</p>
                <p className="text-base font-semibold text-black-pearl">
                  {education.gpa}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Journey Description */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          delay: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="space-y-4"
      >
        <p className="text-base font-sans text-black-pearl leading-relaxed text-justify">
          Throughout my academic journey, I maintained a strong GPA of{" "}
          <span className="font-semibold text-brawijaya">{education.gpa}</span>,
          balancing theoretical knowledge with practical programming skills.
          This foundation in Information Technology Education not only taught me
          technical skills but also how to effectively share knowledge with
          others - a skill that proved invaluable in my teaching and mentoring
          experiences.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutEducation;
