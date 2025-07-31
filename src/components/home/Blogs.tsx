"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SplitText from "../animations/SplitText";

const MotionDiv = motion.div;

function BlogBox({
  blogTitle,
  blogLink,
  blogImage,
  blogDescription,
}: {
  blogTitle: string;
  blogLink: string;
  blogImage: string;
  blogDescription: string;
}) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative rounded-2xl 
             bg-white/10 backdrop-blur-xl
             border border-white/20
             shadow-[0_8px_30px_rgb(93,59,238,0.12)] 
             hover:shadow-[0_8px_40px_rgb(93,59,238,0.25)] 
             transition-shadow duration-300
             w-full md:w-1/3"
    >
      {/* Image */}
      <a href={blogLink} target="_blank" rel="noopener noreferrer">
        <Image
          src={`/${blogImage}`}
          alt={blogTitle}
          width={400}
          height={250}
          className="w-full h-56 object-cover rounded-t-2xl 
               "
        />
      </a>

      {/* Content */}
      <div className="p-5 text-center min-h-[160px] flex flex-col justify-center">
        <a
          href={blogLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#282938] font-bold text-lg md:text-xl block hover:text-[#5E3BEE] transition-colors duration-300"
        >
          {blogTitle}
        </a>
        <p className="text-sm md:text-base text-[#1C1E53] mt-3 leading-relaxed">
          {blogDescription}
        </p>
      </div>
    </MotionDiv>
  );
}

function Blogs() {
  return (
    <section
      id="blogs"
      className="relative max-w-7xl mx-auto px-6 py-16 md:py-24"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-gradient-radial from-purple-300 via-indigo-300 to-transparent rounded-full blur-3xl opacity-30 -z-10" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-gradient-radial from-blue-300 via-purple-200 to-transparent rounded-full blur-3xl opacity-30" />
      </div>

      <p className="font-semibold text-[#5E3BEE] mb-3 ml-1">Blogs</p>
      <SplitText
        text="Explore My Recent Blogs"
        className="text-2xl md:text-5xl font-bold text-[#282938] mb-16"
        delay={20}
        duration={1.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 20 }}
        to={{ opacity: 1, y: 0 }}
      />

      {/* Blog Rows (keep old layout style for thicker cards) */}
      <div className="flex flex-col md:flex-row items-stretch gap-8 mb-12">
        <BlogBox
          blogTitle="AURA UI - A COMPONENT LIBRARY"
          blogLink="https://devsavant.hashnode.dev/auraui-component-library-crafting-seamless-frontend-experiences"
          blogImage="auraui.avif"
          blogDescription="Design elegant React sites fast with Aura UI’s advanced component library."
        />
        <BlogBox
          blogTitle="BACKEND DEVELOPMENT BASICS"
          blogLink="https://devsavant.hashnode.dev/backend-development-basics-an-overview"
          blogImage="backend.avif"
          blogDescription="Unlock the basics of backend development and start building powerful applications from the ground up."
        />
        <BlogBox
          blogTitle="DSA SHORT NOTES"
          blogLink="https://devsavant.hashnode.dev/data-structures-and-algorithms-simplified-your-quick-guide-to-key-concepts"
          blogImage="dsa.avif"
          blogDescription="Data Structures And Algorithms Simplified: Your Quick Guide to Key Concepts."
        />
      </div>

      <div className="flex flex-col md:flex-row items-stretch gap-8">
        <BlogBox
          blogTitle="THE BLOCKCHAIN"
          blogLink="https://devsavant.hashnode.dev/the-blockchain"
          blogImage="blog1.avif"
          blogDescription="Demystifying Blockchain: A Concise Introduction And Easy-to-Understand Guide."
        />
        <BlogBox
          blogTitle="HISTORY OF WEB DEVELOPMENT"
          blogLink="https://devsavant.hashnode.dev/history-of-web-development"
          blogImage="blog2.avif"
          blogDescription="Web Development Evolution: Tracing the Historical Milestones."
        />
        <BlogBox
          blogTitle="BIG O NOTATION"
          blogLink="https://devsavant.hashnode.dev/simplified-guide-to-big-o-notation-making-algorithms-easier-to-understand"
          blogImage="blog3.avif"
          blogDescription="Simplified Guide to Big O Notation: Making Algorithms Easier to Understand."
        />
      </div>
    </section>
  );
}

export default Blogs;
