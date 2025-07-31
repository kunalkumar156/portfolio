"use client";

import React from "react";
import { motion } from "framer-motion";
import SplitText from "../animations/SplitText";
import { Button } from "@/components/ui/button";

export default function ContactCTA() {
  return (
    <section
      id="contactme"
      className="relative max-w-6xl mx-auto px-6 py-20 md:py-28"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-15%] left-[-10%] w-[400px] h-[400px] bg-gradient-radial from-purple-400 via-pink-300 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-[-20%] right-[-15%] w-[500px] h-[500px] bg-gradient-radial from-indigo-300 via-blue-200 to-transparent rounded-full blur-3xl opacity-25" />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center">
        <p className="font-semibold text-[#5E3BEE] mb-3">Let’s Collaborate</p>
        <SplitText
          text="Get In Touch With Me"
          className="text-3xl md:text-5xl font-bold text-[#282938] mb-6"
          delay={20}
          duration={1.8}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
        />
        <p className="text-[#1C1E53] max-w-2xl mb-10">
          Whether you have a project idea, want to collaborate, or simply want
          to say hello, I’d love to hear from you. Let’s create something
          amazing together.
        </p>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Button
            asChild
            className="px-10 py-6 text-lg rounded-full shadow-[0_8px_30px_rgb(93,59,238,0.15)] 
                       hover:shadow-[0_8px_40px_rgb(93,59,238,0.25)] 
                       bg-gradient-to-r from-[#5E3BEE] via-purple-500 to-pink-400 
                       text-white font-semibold transition-all duration-300"
          >
            <a
              href="mailto:yoyokunal156@gmail.com?subject=Let's Connect&body=Hi Kunal,"
              target="_blank"
              rel="noopener noreferrer"
            >
              ✨ Send me an Email
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
