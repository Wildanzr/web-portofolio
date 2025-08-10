"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TAB_MENUS } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center w-full h-full gap-5 lg:h-screen gradient-linear-reverse lg:flex-row lg:justify-between"
    >
      <div className="container mx-auto p-5 w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:items-center lg:justify-center">
        <div className="order-last lg:order-first flex w-full h-40 bg-red-500"></div>
        <div className="w-full h-full flex flex-col space-y-5">
          <h3 className="text-4xl font-bold text-black-pearl lg:text-5xl">
            Software Engineer & Architect
          </h3>

          <Tabs defaultValue="background" className="w-full h-full">
            <TabsList className="">
              {TAB_MENUS.map((item, idx) => (
                <TabsTrigger
                  value={item.title.toLowerCase()}
                  key={idx}
                  className="data-[state=active]:bg-transparent data-[state=active]:shadow-none group"
                >
                  <div className="flex flex-row space-x-2.5 pb-6 border-b-4 border-transparent group-data-[state=active]:border-tundora">
                    <item.Icon className="text-black-pearl size-5" />
                    <span className="text-sm font-light group-data-[state=active]:font-medium text-black-pearl">
                      {item.title}
                    </span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            <Separator className="bg-tundora/50 h-[1px] ml-4 my-2 -mt-1" />
            <TabsContent value="background" className="p-5">
              <p className="text-base font-sans text-black-pearl">
                I start this journey in 2019 at{" "}
                <Link
                  href="https://www.instagram.com/univ.brawijaya/"
                  target="_blank"
                  className="text-brawijaya font-semibold"
                >
                  Brawijaya University
                </Link>
                , where I studied Computer Science. First semester? I can&apos;t
                do any code as fuck, LOL. Then quarter life crisis hit me, and I
                realized I needed to choose my path. Long story short, I
                practiced more and more code on my own.
              </p>
              <br />
              <p className="text-base font-sans text-black-pearl">
                Fast forward to 2021, I challenge myself to become an instructor
                to facilitate learning for others. Then, I landed my first
                internship at{" "}
                <Link
                  href="https://www.bni.co.id/"
                  target="_blank"
                  className="text-bni font-semibold"
                >
                  Bank Negara Indonesia
                </Link>{" "}
                as a fullstack developer. This is where I gained valuable
                experience working on real-world projects and collaborate with
                professionals.
              </p>
              <br />
              <p className="text-base font-sans text-black-pearl">
                After that, I opened my own freelance project while finishing my
                studies. At least there was five projects I worked on during
                that time. This experience taught me how to manage my time
                effectively and deliver high-quality work to clients.
              </p>
              <br />
              <p className="text-base font-sans text-black-pearl">
                Now, I work as a fullstack web3 developer at{" "}
                <Link
                  href="https://tokenminds.co/"
                  target="_blank"
                  className="text-tokenminds font-semibold"
                >
                  TokenMinds
                </Link>{" "}
                , where I focused on building dApp applications. Mostly I do
                work on smart contract integration and some backend stuff. Web3
                gave me a lot of opportunities, winning some{" "}
                <Link
                  href="https://devfolio.co/@wildanzrrr"
                  target="_blank"
                  className="text-brawijaya font-semibold"
                >
                  hackathons
                </Link>
                , attending global conferences, and building a network with
                other founders and builders.
              </p>
            </TabsContent>
            <TabsContent value="experience">
              Change your experience here.
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
