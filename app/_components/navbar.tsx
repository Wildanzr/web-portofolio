"use client";

import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CaretRightIcon, ListIcon } from "@phosphor-icons/react/ssr";
import { LOGO_NAME, NAVIGATION_MENU } from "@/lib/constants";

const MobileNavbar = () => {
  return (
    <div className="container flex items-center justify-between w-full h-full px-5 mx-auto lg:hidden">
      <Link href="/" className="text-lg font-bold text-black-pearl">
        {LOGO_NAME.map((item, letterIndex) => (
          <motion.span
            key={letterIndex}
            className="text-3xl font-bold cursor-pointer select-none"
            initial={{
              opacity: 1,
            }}
            whileHover={{
              opacity: 1,
              background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)",
              backgroundClip: "text",
              color: "transparent",
            }}
            transition={{
              duration: 0.2,
              delay: letterIndex * 0.02,
              ease: "easeInOut",
              staggerChildren: 0.01,
            }}
            style={{
              background: "linear-gradient(45deg, #6b7280, #6b7280)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {item}
          </motion.span>
        ))}
      </Link>

      <Sheet>
        <SheetTrigger>
          <ListIcon className="size-8 text-black-pearl" />
        </SheetTrigger>
        <SheetContent
          side="top"
          className="w-full h-screen backdrop-blur-xs bg-transparent"
        >
          <SheetHeader className="flex w-full h-20">
            <SheetTitle className="pt-2.5">
              <Link href="/" className="text-lg font-bold text-black-pearl">
                {LOGO_NAME.map((item, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    className="text-3xl font-bold cursor-pointer select-none"
                    initial={{
                      opacity: 1,
                      background: "linear-gradient(45deg, #6b7280, #6b7280)",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                    whileHover={{
                      opacity: 1,
                      background:
                        "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                    transition={{
                      duration: 0.2,
                      delay: letterIndex * 0.02,
                      ease: "easeInOut",
                      staggerChildren: 0.01,
                    }}
                    style={{
                      background: "linear-gradient(45deg, #6b7280, #6b7280)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </Link>
            </SheetTitle>
          </SheetHeader>

          <div className="flex flex-col w-full h-full space-y-5">
            <ul className="flex flex-col items-start justify-start w-full h-full space-y-5 text-lg font-semibold text-black-pearl">
              {NAVIGATION_MENU.map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex w-full h-16 px-5 transition-colors duration-200 rounded-lg"
                  whileHover={{
                    skewX: -5,
                    x: 15,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  whileTap={{ skewX: 0, x: 0 }}
                >
                  <Link
                    href={item.url}
                    className="flex w-full items-center justify-between space-x-2"
                  >
                    <div className="flex flex-row items-center space-x-3">
                      <motion.div
                        whileHover={{
                          rotateY: 180,
                          scale: 1.2,
                          transition: { duration: 0.4 },
                        }}
                      >
                        <item.Icon
                          className="size-5 text-white-sand"
                          weight="duotone"
                        />
                      </motion.div>
                      <motion.span
                        className="text-2xl font-semibold text-white-sand"
                        whileHover={{
                          skewX: -10,
                          transition: { duration: 0.3 },
                        }}
                      >
                        {item.title}
                      </motion.span>
                    </div>
                    <motion.div
                      whileHover={{
                        opacity: [1, 0.5, 1],
                        x: 12,
                        transition: { duration: 0.6 },
                      }}
                    >
                      <CaretRightIcon
                        className="size-6 text-white-sand"
                        weight="duotone"
                      />
                    </motion.div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const DesktopNavbar = () => {
  return (
    <div className="container items-center justify-between hidden w-full h-full mx-auto lg:flex">
      <div className="flex">
        {LOGO_NAME.map((item, letterIndex) => (
          <motion.span
            key={letterIndex}
            className="text-4xl font-bold cursor-pointer select-none"
            initial={{
              opacity: 0.6,
              background: "linear-gradient(45deg, #6b7280, #6b7280)",
              backgroundClip: "text",
              color: "transparent",
            }}
            whileHover={{
              opacity: 1,
              background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)",
              backgroundClip: "text",
              color: "transparent",
            }}
            transition={{
              duration: 0.2,
              delay: letterIndex * 0.02,
              ease: "easeInOut",
              staggerChildren: 0.01,
            }}
            style={{
              background: "linear-gradient(45deg, #6b7280, #6b7280)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full h-20 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg z-50 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/5 before:to-transparent before:pointer-events-none">
      <MobileNavbar />
      <DesktopNavbar />
    </div>
  );
};

export default Navbar;
