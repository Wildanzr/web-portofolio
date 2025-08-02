"use client";

import { Button } from "@/components/ui/button";
import RotatingText from "@/components/ui/rotating-text";
import { CalendarDotsIcon } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import Image from "next/image";

const Jumbotron = () => {
  return (
    <section className="w-full h-screen gradient-linear-start pt-20">
      <div className="container mx-auto p-5 w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:items-center lg:justify-center">
        <div className="flex flex-col space-y-10 items-center justify-center">
          <div className="flex flex-col items-start max-w-md md:max-w-lg">
            <RotatingText
              texts={["gm serr..", "gn serr.."]}
              mainClassName="text-base font-bold text-black-pearl lg:text-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />

            <h3 className="text-4xl font-bold text-black-pearl lg:text-5xl">
              wildan here 👋
            </h3>
            <p className="text-xm font-light text-black-pearl lg:text-base">
              ready to cook something big for you. whether it&apos;s{" "}
              <span className="font-semibold">
                websites, apps, smart contracts, or system design?{" "}
              </span>
              I&apos;ve got you covered.
            </p>
          </div>

          <div className="flex flex-row items-center justify-start w-full max-w-md gap-5">
            <Button className="w-fit cursor-pointer">
              Contact Me
              <CalendarDotsIcon />
            </Button>
            <Button className="w-fit rounded-full bg-ice-cold text-jewel hover:bg-ice-cold">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                Available for a new project
              </div>
            </Button>
          </div>
        </div>

        <div className="relative w-full h-fit flex items-center justify-center">
          <div className="absolute z-0 -top-10 left-10 md:left-30 w-40 h-40 bg-radial from-sweet-corn rounded-full blur-2xl" />
          <div className="absolute z-0 -bottom-10 right-10 md:right-30 w-40 h-40 bg-radial from-french-pass rounded-full blur-2xl" />
          <div className="flex w-2/3 md:w-3/6 h-96 py-2 items-center justify-center rounded-xl gradient-linear-start shadow-xl z-10">
            <div className="relative w-10/12 h-full bg-green-500 rounded-lg">
              <Image
                src="/pfp.png"
                alt="Profile Picture"
                fill
                sizes="100%"
                className="shadow-lg rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
