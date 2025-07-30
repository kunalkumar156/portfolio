"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaJs, FaSass, FaNpm, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiRedux,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import SplitText from "../animations/SplitText";

type MySkillsProps = {
  IconComponent: React.ComponentType<{ className?: string }>;
  heading: string;
  para: string;
  delay?: number;
};

function MySkills({ IconComponent, heading, para, delay = 0 }: MySkillsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="w-full sm:w-[48%] lg:w-[23%] p-6 rounded-2xl 
                 backdrop-blur-xl bg-white/10 
                 shadow-[0_8px_30px_rgb(93,59,238,0.12)]
                 hover:shadow-[0_8px_40px_rgb(93,59,238,0.25)]
                 transition-all duration-300"
    >
      <div className="text-[35px] text-white bg-gradient-to-tr from-[#5E3BEE] to-purple-500 rounded-xl shadow-md w-fit h-fit p-3">
        <IconComponent className="w-8 h-8" />
      </div>
      <h3 className="text-xl md:text-2xl font-bold mt-4 mb-3 text-[#282938]">
        {heading}
      </h3>
      <p className="text-[#1C1E53] font-medium text-sm md:text-base">{para}</p>
    </motion.div>
  );
}

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="relative max-w-7xl mx-auto px-6 py-16 md:py-24"
    >
      {/* Gradient Background matching Hero */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-gradient-radial from-purple-400 via-pink-300 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute top-[-35%] right-[-25%] w-[600px] h-[600px] bg-gradient-radial from-blue-300 via-purple-200 to-transparent rounded-full blur-3xl opacity-40 animate-pulse" />
        <div
          className="absolute bottom-[-30%] right-[-10%] w-[500px] h-[500px] 
  bg-gradient-radial from-indigo-300 via-blue-200 to-transparent 
  rounded-full blur-3xl opacity-25"
        />
      </div>

      <p className="font-semibold text-[#5E3BEE] mb-3 ">My Skills</p>
      <SplitText
        text="My Expertise"
        className="text-3xl md:text-5xl font-bold text-[#282938] mb-12 "
        delay={20}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 20 }}
        to={{ opacity: 1, y: 0 }}
      />

      <div className="flex flex-wrap gap-8 justify-center">
        <MySkills
          IconComponent={FaJs}
          heading="JavaScript"
          para="Building interactive and dynamic web applications."
          delay={0.1}
        />
        <MySkills
          IconComponent={TbBrandNextjs}
          heading="Next.js"
          para="Creating blazing fast apps with Next.js."
          delay={0.2}
        />
        <MySkills
          IconComponent={FaReact}
          heading="React.js"
          para="Crafting seamless UI with React."
          delay={0.3}
        />
        <MySkills
          IconComponent={SiTypescript}
          heading="TypeScript"
          para="Enhancing projects with type safety and scalability."
          delay={0.4}
        />
        <MySkills
          IconComponent={SiTailwindcss}
          heading="Tailwind CSS"
          para="Utility-first CSS framework for efficient styling."
          delay={0.5}
        />
        <MySkills
          IconComponent={FaSass}
          heading="SASS"
          para="Styling with advanced preprocessor features."
          delay={0.6}
        />
        <MySkills
          IconComponent={SiMongodb}
          heading="MongoDB"
          para="Managing data efficiently with NoSQL databases."
          delay={0.7}
        />
        <MySkills
          IconComponent={SiRedux}
          heading="Redux"
          para="State management for scalable apps."
          delay={0.8}
        />
      </div>
    </section>
  );
}
