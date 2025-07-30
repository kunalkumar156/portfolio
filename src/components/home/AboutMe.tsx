"use client";

import React from "react";
import Image from "next/image";

function AboutMe() {
  return (
    <section id="aboutme" className="max-w-6xl mx-auto mb-12 px-6">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        {/* Image Section */}
        <div className="w-[90%] md:w-1/2">
          <Image
            src="/aboutme.png"
            alt="About me image"
            width={600}
            height={500}
            className="rounded-lg object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="w-[90%] md:w-1/2 md:p-20">
          <p className="font-semibold text-[#282938] mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#282938] mb-5">
            Kunal here
          </h2>
          <p className="text-[#1C1E53] leading-relaxed">
            I&apos;m a web developer specializing in front-end technologies with
            a diverse set of skills and experiences. My journey in web
            development has been enriched by working with various tools,
            frameworks, and the component library that I am building –{" "}
            <span className="font-semibold text-[#5E3BEE]">AuraUI</span>.
          </p>
          <p className="text-[#1C1E53] mt-5 leading-relaxed">
            I am well-versed in building responsive and accessible user
            interfaces using AuraUI, Chakra UI, and Material-UI. My proficiency
            extends to collaborating with design teams, where I leverage tools
            like Figma and Canva to bring creative concepts to life.
          </p>
          <p className="text-[#1C1E53] mt-5 leading-relaxed">
            In addition, I am comfortable working in a Linux environment,
            ensuring smooth development workflows. I am always eager to explore
            new technologies and frameworks, including AuraUI, to enhance my
            skills and deliver high-quality web applications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
