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
import { NAVIGATION_MENU } from "@/lib/constants";

const MobileNavbar = () => {
  return (
    <div className="container flex items-center justify-between w-full h-full px-5 mx-auto lg:hidden">
      <Link href="/" className="text-lg font-bold text-black-pearl">
        Logo
      </Link>

      <Sheet>
        <SheetTrigger>
          <ListIcon className="size-8 text-black-pearl" />
        </SheetTrigger>
        <SheetContent className="w-full backdrop-blur-xs bg-transparent">
          <SheetHeader className="flex w-full h-20">
            <SheetTitle className="pt-2.5">
              <Link href="/" className="text-lg font-bold text-black-pearl">
                Logo
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
                        className="text-2xl font-semibold text-black-pearl"
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
      Desktop Navbar
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full h-20 bg-red-500">
      <MobileNavbar />
      <DesktopNavbar />
    </div>
  );
};

export default Navbar;
