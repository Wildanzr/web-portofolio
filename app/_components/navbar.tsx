"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CaretRightIcon, ListIcon, XIcon } from "@phosphor-icons/react/ssr";
import { NAVIGATION_MENU } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const MobileNavbar = () => {
  return (
    <div className="container flex items-center justify-between w-full h-full px-5 mx-auto lg:hidden">
      <Link href="/" className="text-3xl font-bold text-black-pearl">
        wildanzrrr ✨
      </Link>

      <Sheet>
        <SheetTrigger>
          <ListIcon className="size-8 text-black-pearl" />
        </SheetTrigger>
        <SheetContent
          side="top"
          className="w-full h-screen backdrop-blur-md bg-transparent"
        >
          <SheetHeader className="flex flex-row items-center justify-between w-full h-20 container mx-auto">
            <SheetTitle className="pt-2.5">
              <Link href="/" className="text-3xl font-bold text-white-sand">
                wildanzrrr ✨
              </Link>
            </SheetTitle>
            <SheetClose className="flex items-start justify-start">
              <XIcon className="size-8 text-white-sand" />
              <span className="sr-only">Close</span>
            </SheetClose>
          </SheetHeader>

          <div className="flex flex-col w-full h-full space-y-5 container mx-auto">
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
      <Link
        href="/"
        className="text-3xl font-bold text-black-pearl whitespace-nowrap"
      >
        wildanzrrr ✨
      </Link>

      <ul className="flex items-center justify-center w-full h-full space-x-10 text-lg font-semibold text-black-pearl">
        {NAVIGATION_MENU.map((item, idx) => (
          <motion.li
            key={idx}
            className="flex items-center space-x-2 transition-colors duration-200 rounded-lg hover:bg-white/10"
            whileHover={{
              skewX: -5,
              x: 15,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            whileTap={{ skewX: 0, x: 0 }}
          >
            <Link href={item.url} className="flex items-center space-x-2">
              {/* <item.Icon className="size-6 text-black-pearl" weight="duotone" /> */}
              <span className="text-lg font-light text-black-pearl hover:font-semibold transition-all duration-300 ease-out">
                {item.title}
              </span>
            </Link>
          </motion.li>
        ))}
      </ul>

      <Button>
        <Link href="#contact" className="flex items-center space-x-2">
          <span className="text-lg font-semibold text-white-sand">Contact</span>
        </Link>
      </Button>
    </div>
  );
};

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Don't hide navbar when at the top of the page
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <motion.div
      className="fixed top-0 w-full h-20 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg z-50 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/5 before:to-transparent before:pointer-events-none"
      initial={{ y: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <MobileNavbar />
      <DesktopNavbar />
    </motion.div>
  );
};

export default Navbar;
