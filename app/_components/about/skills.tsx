"use client";

import { motion } from "framer-motion";
import {
  CodeIcon,
  PaintBrushIcon,
  ComputerTowerIcon,
  FigmaLogoIcon,
  DatabaseIcon,
  RobotIcon,
  GitBranchIcon,
} from "@phosphor-icons/react";

const skillCategories = [
  {
    title: "Smart Contract Development",
    icon: CodeIcon,
    skills: ["Solidity", "Foundry", "Rust", "Anchor"],
  },
  {
    title: "Front-end Development",
    icon: PaintBrushIcon,
    skills: ["Next.js", "Expo", "Tailwindcss"],
  },
  {
    title: "Back-end Development",
    icon: ComputerTowerIcon,
    skills: ["NestJS", "Express.js"],
  },
  {
    title: "Design and Wireframe",
    icon: FigmaLogoIcon,
    skills: ["Figma", "Whimsical"],
  },
  {
    title: "Database",
    icon: DatabaseIcon,
    skills: ["PostgreSQL", "MongoDB", "PrismaORM"],
  },
  {
    title: "AI Stuff",
    icon: RobotIcon,
    skills: ["Anthropic", "MCP", "Eliza AI"],
  },
  {
    title: "Other",
    icon: GitBranchIcon,
    skills: ["Git", "Docker", "GCP", "RabbitMQ", "Redis", "CI/CD", "Datadog"],
  },
];

const AboutSkills = () => {
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
      {skillCategories.map((category, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
            delay: index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="group"
        >
          <div className="flex items-center space-x-3 mb-3 group">
            <category.icon
              size={20}
              className="text-gray-500 group-hover:text-brawijaya transition-colors duration-200"
              weight="duotone"
            />
            <h3 className="text-lg font-semibold text-black-pearl group-hover:text-brawijaya transition-colors duration-200">
              {category.title}
            </h3>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {category.skills.map((skill, skillIndex) => (
              <motion.span
                key={skillIndex}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1 + skillIndex * 0.05,
                }}
                className="text-gray-600 hover:text-black-pearl transition-colors duration-200 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AboutSkills;
