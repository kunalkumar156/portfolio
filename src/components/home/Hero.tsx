"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F5FCFF]">
      {/* Background Animated Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] bg-gradient-radial from-purple-300 via-pink-200 to-transparent rounded-full blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-[-15%] right-[-15%] w-[600px] h-[600px] bg-gradient-radial from-blue-300 via-purple-200 to-transparent rounded-full blur-3xl opacity-40 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center md:text-left max-w-xl"
          >
            <p className="text-[#282938] font-semibold text-lg md:text-xl mb-4">
              Hi, I&apos;m Kishor Kunal
            </p>
            <h1 className="text-[#282938] font-bold text-3xl md:text-6xl leading-snug md:leading-tight mb-6">
              I am a <span className="text-[#5E3BEE]">Web Developer.</span>{" "}
              Crafting Seamless Front-End Experiences
            </h1>

            <p className="text-[#282938] text-sm md:text-lg mb-10 md:w-3/4 mx-auto md:mx-0">
              Transforming ideas into visually stunning and intuitive web
              interfaces and passionate about creating beautiful user
              experiences with the latest web technologies.{" "}
              <span className="text-[#5E3BEE] font-semibold">
                Let&apos;s bring your projects to life!
              </span>
            </p>

            <Link href="#contactme">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-xl font-semibold text-white bg-[#5E3BEE] hover:bg-white hover:text-[#5E3BEE] border-2 border-[#5E3BEE] transition-all duration-300 shadow-lg"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex justify-center md:justify-end"
          >
            <Image
              src="/heroillustration.png"
              alt="Hero Illustration"
              width={520}
              height={420}
              className="object-contain drop-shadow-xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
