"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="bg-[#F5FCFF]">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="text-center md:text-left max-w-xl">
            <p className="text-[#282938] font-semibold text-lg md:text-xl mb-3">
              Hi, I&apos;m Kishor Kunal
            </p>
            <h1 className="text-[#282938] font-bold text-3xl md:text-5xl leading-snug mb-4">
              I am a <span className="text-[#5E3BEE]">Web Developer.</span>{" "}
              Crafting Seamless Front-End Experiences
            </h1>

            <p className="text-[#282938] text-sm md:text-base mb-6 md:w-3/4 mx-auto md:mx-0">
              Transforming ideas into visually stunning and intuitive web
              interfaces and passionate about creating beautiful user
              experiences with the latest web technologies.{" "}
              <span className="text-[#5E3BEE] font-semibold">
                Let&apos;s bring your projects to life!
              </span>
            </p>

            <Link href="#contactme">
              <button className="opposite-button">Get In Touch</button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full flex justify-center md:justify-end">
            <Image
              src="/heroillustration.png"
              alt="Hero Illustration"
              width={500}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
