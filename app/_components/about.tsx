"use client";

import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQueryState } from "nuqs";
import { TAB_MENUS } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import AboutBackground from "./about/background";
import AboutExperience from "./about/experience";
import AboutEducation from "./about/education";
import AboutSkills from "./about/skills";

const isValidTabTitle = (title: string) => {
  const validTitles = TAB_MENUS.map((menu) => menu.title.toLowerCase());
  return validTitles.includes(title.toLowerCase());
};

const About = () => {
  const [activeTab, setActiveTab] = useQueryState("tabs", {
    defaultValue: "background",
    parse: (value) => (isValidTabTitle(value) ? value : null),
  });

  const [previousTabIndex, setPreviousTabIndex] = useState(0);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const getCurrentTabIndex = (tabName: string) => {
    return TAB_MENUS.findIndex((menu) => menu.title.toLowerCase() === tabName);
  };

  const handleTabChange = (newTab: string) => {
    const newIndex = getCurrentTabIndex(newTab);
    setPreviousTabIndex(currentTabIndex);
    setCurrentTabIndex(newIndex);
    setActiveTab(newTab);
  };

  useEffect(() => {
    const index = getCurrentTabIndex(activeTab || "background");
    setCurrentTabIndex(index);
    setPreviousTabIndex(index);
  }, [activeTab]);

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center w-full h-full gap-5 lg:min-h-screen gradient-linear-reverse lg:flex-row lg:justify-between"
    >
      <div className="container mx-auto p-5 w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:items-start lg:justify-center">
        <div className="order-last lg:order-first flex w-full h-40 bg-red-500"></div>
        <div className="w-full h-full flex flex-col space-y-5">
          <h3 className="text-4xl font-bold text-black-pearl lg:text-5xl">
            Software Engineer & System Design
          </h3>

          <Tabs
            value={activeTab}
            onValueChange={handleTabChange}
            className="w-full h-full"
          >
            <TabsList className="relative bg-transparent border-0 p-0 w-full grid grid-cols-4">
              {TAB_MENUS.map((item, idx) => (
                <TabsTrigger
                  value={item.title.toLowerCase()}
                  key={idx}
                  className="data-[state=active]:bg-transparent data-[state=active]:shadow-none group cursor-pointer relative p-0 flex-1"
                >
                  <div className="flex flex-row space-x-2.5 pb-6 px-2 justify-center">
                    <item.Icon className="text-black-pearl size-5" />
                    <span className="text-sm font-light group-data-[state=active]:font-medium text-black-pearl group-hover:font-medium duration-300 transition-all ease-out">
                      {item.title}
                    </span>
                  </div>
                </TabsTrigger>
              ))}

              {/* Sliding border */}
              <motion.div
                className="absolute bottom-0 h-1"
                initial={false}
                animate={{
                  x: `${currentTabIndex * 100}%`,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                style={{
                  width: `${100 / TAB_MENUS.length}%`,
                }}
              >
                {/* Inner animated bar for rotation effect */}
                <motion.div
                  className="w-full h-full bg-tundora"
                  initial={false}
                  animate={{
                    rotateY: [previousTabIndex > currentTabIndex ? -20 : 20, 0],
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    times: [0, 1],
                  }}
                  style={{
                    transformOrigin:
                      previousTabIndex > currentTabIndex ? "right" : "left",
                  }}
                />
              </motion.div>
            </TabsList>
            <Separator className="bg-tundora/50 h-[1px] my-2 -mt-2.5" />
            <TabsContent value="background" className="p-5">
              <AboutBackground />
            </TabsContent>
            <TabsContent value="experience" className="p-5">
              <AboutExperience />
            </TabsContent>
            <TabsContent value="education" className="p-5">
              <AboutEducation />
            </TabsContent>
            <TabsContent value="skills" className="p-5">
              <AboutSkills />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
