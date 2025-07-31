"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub, FaNpm } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

function Footer() {
  return (
    <footer className="relative pt-16 pb-10">
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-gradient-radial from-purple-300 via-pink-200 to-transparent blur-3xl opacity-40" />
        <div className="bottom-[-25%] right-[-15%] w-[500px] h-[500px] bg-gradient-radial from-indigo-200 via-blue-100 to-transparent blur-3xl opacity-40" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo + Tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Image src="/logo.svg" alt="logo" width={140} height={40} />
            <p className="text-sm text-[#1C1E53]">
              Building with passion — powered by{" "}
              <a
                href="https://www.auraui.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#5E3BEE]"
              >
                auraUI
              </a>
            </p>
          </div>
          {/* Social Icons */}
          <div className="flex gap-5">
            {[
              {
                href: "https://github.com/kunalkumar156",
                icon: <FaGithub size={20} />,
                label: "GitHub",
              },
              {
                href: "https://www.npmjs.com/~kunalkumar156",
                icon: <FaNpm size={20} />,
                label: "NPM",
              },
              {
                href: "https://devsavant.hashnode.dev/",
                icon: <SiHashnode size={20} />,
                label: "Hashnode",
              },
              {
                href: "https://twitter.com/btwitskishor",
                icon: <FaTwitter size={20} />,
                label: "Twitter",
              },
              {
                href: "https://www.linkedin.com/in/kishor-kunal-8a5656196/",
                icon: <FaLinkedin size={20} />,
                label: "LinkedIn",
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="group p-2 rounded-full bg-white/20 backdrop-blur-md 
                 shadow-sm transition-all duration-300 hover:shadow-lg 
                 hover:bg-[#5E3BEE]/20"
              >
                <span
                  className="text-[#1C1E53] group-hover:text-[#5E3BEE] 
                   transition-colors duration-300"
                >
                  {item.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="my-10 border-[#282938]/20" />

        {/* Bottom Section */}
        <div className="text-center text-sm text-[#1C1E53]">
          <p>
            © {new Date().getFullYear()} Crafted with ❤️ by{" "}
            <a
              href="https://www.linkedin.com/in/kishor-kunal-8a5656196/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#5E3BEE]"
            >
              Kishor Kunal
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
