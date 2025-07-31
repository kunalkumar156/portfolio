"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
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
              <span className="font-semibold text-[#5E3BEE]">AuraUI</span>
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-medium">
            <Link
              href="#"
              className="text-[#282938] hover:text-[#5E3BEE] transition-colors"
            >
              Home
            </Link>
            <Link
              href="#portfolio"
              className="text-[#282938] hover:text-[#5E3BEE] transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="#aboutme"
              className="text-[#282938] hover:text-[#5E3BEE] transition-colors"
            >
              About Me
            </Link>
            <Link
              href="#blogs"
              className="text-[#282938] hover:text-[#5E3BEE] transition-colors"
            >
              Blogs
            </Link>
            <Link
              href="#contactme"
              className="text-[#282938] hover:text-[#5E3BEE] transition-colors"
            >
              Contact
            </Link>
            <a
              href="/resume.pdf"
              download="kishor-kunal-resume.pdf"
              className="text-[#282938] hover:text-[#5E3BEE] transition-colors"
            >
              Resume
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-5">
            <a
              href="https://github.com/kunalkumar156"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/20 backdrop-blur-md shadow-sm hover:shadow-md hover:bg-[#5E3BEE]/10 transition-all"
            >
              <FaGithub size={20} className="text-[#282938]" />
            </a>
            <a
              href="https://devsavant.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/20 backdrop-blur-md shadow-sm hover:shadow-md hover:bg-[#5E3BEE]/10 transition-all"
            >
              <SiHashnode size={20} className="text-[#282938]" />
            </a>
            <a
              href="https://twitter.com/btwitskishor"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/20 backdrop-blur-md shadow-sm hover:shadow-md hover:bg-[#5E3BEE]/10 transition-all"
            >
              <FaTwitter size={20} className="text-[#282938]" />
            </a>
            <a
              href="https://www.linkedin.com/in/kishor-kunal-8a5656196/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/20 backdrop-blur-md shadow-sm hover:shadow-md hover:bg-[#5E3BEE]/10 transition-all"
            >
              <FaLinkedin size={20} className="text-[#282938]" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-10 border-[#282938]/20" />

        {/* Bottom Section */}
        <div className="text-center text-sm text-[#1C1E53]">
          <p>
            © {new Date().getFullYear()} Crafted with ❤️ by{" "}
            <span className="font-semibold text-[#5E3BEE]">Kishor Kunal</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
