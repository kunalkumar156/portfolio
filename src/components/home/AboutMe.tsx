"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SplitText from "../animations/SplitText";

function AboutMe() {
  return (
    <section
      id="aboutme"
      className="relative max-w-7xl mx-auto px-6 py-16 md:py-24"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-gradient-radial from-pink-300 via-purple-300 to-transparent rounded-full blur-3xl opacity-30" />
        <div
          className="absolute top-[-20%] left-[-10%] w-[300px] h-[500px] 
     bg-gradient-radial from-purple-300 via-violet-300 to-transparent 
     rounded-full blur-3xl opacity-40"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative">
            <Image
              src="/aboutme.png"
              alt="About me image"
              width={600}
              height={500}
              className="rounded-2xl shadow-xl bg-white/70 object-contain"
            />
            {/* Decorative glow */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-tr from-purple-400 via-pink-300 to-transparent rounded-full blur-2xl opacity-40 -z-10" />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <p className="font-semibold text-[#5E3BEE] mb-3">About Me</p>
          <SplitText
            text="Kunal here"
            className="text-3xl md:text-5xl font-bold text-[#282938] mb-12 "
            delay={20}
            duration={1.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
          />

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
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMe;
