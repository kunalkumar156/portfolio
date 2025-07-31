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
      className="group relative rounded-2xl 
                 bg-white/10 backdrop-blur-xl
                 border border-white/20
                 shadow-[0_8px_30px_rgb(93,59,238,0.12)] 
                 hover:shadow-[0_8px_40px_rgb(93,59,238,0.25)] 
                 transition-all duration-300"
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Image */}
      <div className="bg-gradient-to-tr from-purple-50 via-white to-purple-50">
        <img
          src={image}
          alt={heading}
          className="w-full max-h-[400px] object-contain rounded-t-2xl"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-[22px] font-bold text-[#282938] mb-3 group-hover:text-[#5E3BEE] transition-colors">
          {heading}
        </h3>
        <p className="text-sm text-[#1C1E53] mb-6 line-clamp-3">{para}</p>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          {/* Project */}
          <Button
            asChild
            variant="outline"
            className={cn(
              "rounded-full text-sm font-medium flex items-center gap-2 px-4 py-2",
              isProjectDisabled
                ? "bg-gray-100 text-gray-500 pointer-events-none cursor-not-allowed"
                : "bg-gradient-to-r from-[#5E3BEE]/10 to-purple-500/10 text-[#5E3BEE] hover:from-[#5E3BEE] hover:to-purple-500 hover:text-white transition-all duration-300",
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
              "rounded-full text-sm font-medium flex items-center gap-2 px-4 py-2",
              isGitHubDisabled
                ? "bg-gray-100 text-gray-500 pointer-events-none cursor-not-allowed"
                : "bg-gradient-to-r from-[#5E3BEE]/10 to-purple-500/10 text-[#5E3BEE] hover:from-[#5E3BEE] hover:to-purple-500 hover:text-white transition-all duration-300 ease-in",
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
    <section
      id="portfolio"
      className="relative max-w-7xl mx-auto px-6 py-20 md:py-28"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 ">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-gradient-radial from-purple-400 via-indigo-300 to-transparent blur-3xl opacity-20" />
        <div className="absolute bottom-[-15%] right-[-15%] w-[600px] h-[600px] bg-gradient-radial from-indigo-300 via-purple-200 to-transparent blur-3xl opacity-20" />
      </div>

      {/* Header */}
      <div className="text-center mb-16">
        <p className="font-semibold text-[#5E3BEE] mb-3">Recent Projects</p>
        <h2 className="text-3xl md:text-5xl font-bold text-[#282938]">
          My Portfolio
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
          para="Asva Ventures is a web3 related platform that explores the latest advancements in web technologies. It is a freelance project done by me."
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
