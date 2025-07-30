"use client";

import React from "react";
import { motion } from "framer-motion";
import { RxArrowTopRight } from "react-icons/rx";
import { Button } from "@/components/ui/button"; // shadcn button
import { cn } from "@/lib/utils";

const MotionDiv = motion.div;

interface PortfolioCardProps {
  image: string;
  heading: string;
  para: string;
  link: string;
  link2: string;
  isGitHubDisabled?: boolean;
  isProjectDisabled?: boolean;
}

function PortfolioCard({
  image,
  heading,
  para,
  link,
  link2,
  isGitHubDisabled,
  isProjectDisabled,
}: PortfolioCardProps) {
  return (
    <MotionDiv
      className="rounded-2xl shadow-lg bg-white overflow-hidden"
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Image */}
      <div className="bg-gray-50">
        <img
          src={image}
          alt={heading}
          className="w-full max-h-[400px] object-contain rounded-t-2xl"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-[20px] font-bold text-[#282938] mb-2">{heading}</h3>
        <p className="text-sm text-[#1C1E53] mb-4 line-clamp-3">{para}</p>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          {/* Project */}
          <Button
            asChild
            variant="outline"
            className={cn(
              "rounded-full text-sm font-medium flex items-center gap-2",
              isProjectDisabled
                ? "bg-gray-100 text-gray-500 pointer-events-none cursor-not-allowed"
                : "bg-teal-50 text-teal-700 hover:bg-teal-100",
            )}
          >
            <a
              href={isProjectDisabled ? undefined : link2}
              target="_blank"
              rel="noopener noreferrer"
            >
              {isProjectDisabled ? "On Development" : "View Project"}
              <RxArrowTopRight />
            </a>
          </Button>

          {/* GitHub */}
          <Button
            asChild
            variant="outline"
            className={cn(
              "rounded-full text-sm font-medium flex items-center gap-2",
              isGitHubDisabled
                ? "bg-gray-100 text-gray-500 pointer-events-none cursor-not-allowed"
                : "bg-teal-50 text-teal-700 hover:bg-teal-100",
            )}
          >
            <a
              href={isGitHubDisabled ? undefined : link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {isGitHubDisabled ? "Private Repo" : "GitHub"}
              <RxArrowTopRight />
            </a>
          </Button>
        </div>
      </div>
    </MotionDiv>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="max-w-6xl mx-auto px-6 my-16">
      <p className="font-semibold text-[#282938] mb-2">Recent Projects</p>
      <h2 className="text-3xl md:text-4xl font-bold text-[#282938] mb-12">
        My Portfolio
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <PortfolioCard
          image="auraui.png"
          heading="AuraUI"
          para="AuraUI is a high-performance component library for building stunning and responsive React websites with ease."
          link="https://github.com/Shubham0850/auraui"
          link2="https://www.auraui.com/"
        />
        <PortfolioCard
          image="asvaventures.png"
          heading="Asva Ventures"
          para="Asva Ventures is a web 3 related platform that explores the latest advancements in web technologies. It is a freelance project done by me."
          link=""
          link2="https://asvaventures.com/"
          isGitHubDisabled
        />
        <PortfolioCard
          image="natours.png"
          heading="Natours"
          para="Natours is a nature tour packages website, providing a platform for users to explore and book various nature tours."
          link="https://github.com/kunalkumar156/Natours-Exciting-tours-for-adventrous-peoples-"
          link2="https://natours-exciting-tours-for-adventrous-peoples.vercel.app/"
        />
        <PortfolioCard
          image="auraicons.png"
          heading="Aura Icons"
          para="Aura Icons is a collection of beautiful and customizable icons designed to enhance the visual appeal of your web projects."
          link="https://github.com/Shubham0850/aura-icons"
          link2="https://icons.auraui.com/"
        />
        <PortfolioCard
          image="tweak.png"
          heading="Tweak"
          para="Tweak is a simple and powerful Mac app that helps you customize, organize, and manage your workflow effortlessly with just a command."
          link="https://github.com/kunalkumar156/tweaktext"
          link2="https://tweak-frontend.vercel.app/"
        />
      </div>
    </section>
  );
}
