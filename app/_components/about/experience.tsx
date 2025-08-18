"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EXPERIENCES } from "@/lib/constants";

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
      className="space-y-8"
    >
      {EXPERIENCES.map((experience, index) => (
        <motion.div
          key={experience.id}
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
            delay: index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="relative border-l-2 border-gray-200 pl-8 pb-8 last:pb-0"
        >
          {/* Timeline dot with icon */}
          <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-white border-2 border-gray-200 shadow-sm">
            <experience.icon
              size={24}
              className={`${experience.color} transition-colors`}
            />
          </div>

          {/* Experience content */}
          <div className="space-y-3">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-black-pearl">
                {experience.title}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 text-gray-600">
                {experience.link ? (
                  <Link
                    href={experience.link}
                    target="_blank"
                    className={`${experience.color} font-semibold hover:underline transition-colors`}
                  >
                    {experience.company}
                  </Link>
                ) : (
                  <span className={`${experience.color} font-semibold`}>
                    {experience.company}
                  </span>
                )}
                <span className="hidden sm:inline">•</span>
                <span>{experience.location}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 text-sm text-gray-500">
                <span className="font-medium">{experience.type}</span>
                <span className="hidden sm:inline">•</span>
                <span>{experience.period}</span>
              </div>
            </div>

            <div className="space-y-2">
              {experience.achievements.map((achievement, achievementIndex) => (
                <div
                  key={achievementIndex}
                  className="flex items-start space-x-3"
                >
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                  <p className="text-base text-black-pearl leading-relaxed">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AboutExperience;
