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
            I&apos;m a web developer passionate about crafting modern,
            high-performance experiences. I built{" "}
            <a
              href="https://www.auraui.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#5E3BEE] hover:underline"
            >
              AuraUI
            </a>
            , an open-source React component library, and specialize in React,
            Next.js, Vite, and TypeScript/JavaScript.
          </p>

          <p className="text-[#1C1E53] mt-5 leading-relaxed">
            My backend expertise includes working with{" "}
            <span className="font-semibold text-[#5E3BEE]">Supabase</span> for
            auth, databases, and APIs, along with Git/GitHub for version control
            and open-source collaboration. I enjoy designing smooth interactions
            with{" "}
            <span className="font-semibold text-[#5E3BEE]">Framer Motion</span>{" "}
            and building scalable solutions with REST APIs and schemas.
          </p>

          <p className="text-[#1C1E53] mt-5 leading-relaxed">
            Beyond web, I explore{" "}
            <span className="font-semibold text-[#5E3BEE]">Electron</span> for
            desktop apps and even AppleScript automation. With a strong design
            eye using Figma/Canva and a Linux-based workflow, I aim to deliver
            projects that blend performance, design, and innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMe;
