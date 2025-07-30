"use client";

import React from "react";
import Image from "next/image";

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
    <div className="rounded-lg shadow-md bg-white mb-8 md:mb-0 overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full md:w-1/3">
      <a href={blogLink} target="_blank" rel="noopener noreferrer">
        <Image
          src={`/${blogImage}`}
          alt="blog image"
          width={400}
          height={250}
          className="w-full rounded-t-lg object-cover"
        />
      </a>
      <div className="p-4 text-center">
        <a
          href={blogLink}
          target="_blank"
          rel="noopener noreferrer"
          className="arrow-button text-[#282938] font-semibold text-lg md:text-xl block hover:no-underline"
        >
          {blogTitle}
        </a>
        <p className="text-sm md:text-base text-[#1C1E53] mt-2">
          {blogDescription}
        </p>
      </div>
    </div>
  );
}

function Blogs() {
  return (
    <section className="bg-[#F5FCFF] py-12 md:py-24" id="blogs">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-semibold text-[#282938] mb-2">Blogs</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#282938] mb-12">
          Explore My Recent Blogs
        </h2>

        {/* First row */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <BlogBox
            key="blog1"
            blogTitle="AURA UI - A COMPONENT LIBRARY"
            blogLink="https://devsavant.hashnode.dev/auraui-component-library-crafting-seamless-frontend-experiences"
            blogImage="auraui.avif"
            blogDescription="Design elegant React sites fast with Aura UI’s advanced component library."
          />
          <BlogBox
            key="blog2"
            blogTitle="BACKEND DEVLOPMENT BASICS"
            blogLink="https://devsavant.hashnode.dev/backend-development-basics-an-overview"
            blogImage="backend.avif"
            blogDescription="Unlock the basics of backend development and start building powerful applications from the ground up."
          />
          <BlogBox
            key="blog3"
            blogTitle="DSA SHORT NOTES"
            blogLink="https://devsavant.hashnode.dev/data-structures-and-algorithms-simplified-your-quick-guide-to-key-concepts"
            blogImage="dsa.avif"
            blogDescription="Data Structures And Algorithms Simplified: Your Quick Guide to Key Concepts"
          />
        </div>

        {/* Second row */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <BlogBox
            key="blog4"
            blogTitle="THE BLOCKCHAIN"
            blogLink="https://devsavant.hashnode.dev/the-blockchain"
            blogImage="blog1.avif"
            blogDescription="Demystifying Blockchain: A Concise Introduction And Easy-to-Understand Guide"
          />
          <BlogBox
            key="blog5"
            blogTitle="HISTORY OF WEB DEVELOPMENT"
            blogLink="https://devsavant.hashnode.dev/history-of-web-development"
            blogImage="blog2.avif"
            blogDescription="Web Development Evolution: Tracing the Historical Milestones"
          />
          <BlogBox
            key="blog6"
            blogTitle="BIG O NOTATION"
            blogLink="https://devsavant.hashnode.dev/simplified-guide-to-big-o-notation-making-algorithms-easier-to-understand"
            blogImage="blog3.avif"
            blogDescription="Simplified Guide to Big O Notation: Making Algorithms Easier to Understand"
          />
        </div>
      </div>
    </section>
  );
}

export default Blogs;
