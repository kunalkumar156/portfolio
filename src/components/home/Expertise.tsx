"use client";

import React from "react";
import { FaJs, FaSass, FaNpm } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

type MySkillsProps = {
  IconComponent: React.ComponentType<{ className?: string }>;
  heading: string;
  para: string;
};

function MySkills({ IconComponent, heading, para }: MySkillsProps) {
  return (
    <div className="w-full md:w-[45%] lg:w-[23%] bg-[#F5FCFF] p-6 rounded-lg mb-6 border-b-2 border-white hover:border-[#5E3BEE] transition-all duration-300">
      <div className="text-[35px] text-[#016b6b] bg-white rounded-md shadow-md w-fit h-fit p-3">
        <IconComponent className="w-8 h-8" />
      </div>
      <h3 className="text-xl md:text-2xl font-bold mt-4 mb-3 text-[#282938]">
        {heading}
      </h3>
      <p className="text-[#1C1E53] font-medium text-sm md:text-base">{para}</p>
    </div>
  );
}

export default function Expertise() {
  return (
    <section id="expertise" className="max-w-6xl mx-auto px-6 py-12 md:py-20">
      <p className="font-semibold text-[#282938] mb-3">My Skills</p>
      <h2 className="text-3xl md:text-4xl font-bold text-[#282938] mb-6">
        My Expertise
      </h2>

      <div className="flex flex-col md:flex-row md:flex-wrap gap-6">
        <MySkills
          IconComponent={FaJs}
          heading="JavaScript"
          para="Building interactive and dynamic web applications."
        />
        <MySkills
          IconComponent={TbBrandNextjs}
          heading="Next.js"
          para="Building server-side rendered and statically generated React apps."
        />
        <MySkills
          IconComponent={FaNpm}
          heading="UI Libraries"
          para="Experience with various UI libraries and component ecosystems."
        />
        <MySkills
          IconComponent={FaSass}
          heading="SASS"
          para="Styling web applications with the power of SASS preprocessor."
        />
        <MySkills
          IconComponent={SiTailwindcss}
          heading="Tailwind CSS"
          para="Utilizing utility-first CSS framework for efficient styling."
        />
      </div>
    </section>
  );
}
