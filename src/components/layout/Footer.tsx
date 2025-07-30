"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

function Footer() {
  return (
    <footer id="footer" className="bg-[#F5FCFF] mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 md:py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <Image src="/logo.svg" alt="logo" width={120} height={40} />

          {/* Navigation Links (hidden on mobile) */}
          <nav className="hidden md:flex gap-6 text-sm font-medium">
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
              href="#contactme"
              className="text-[#282938] hover:text-[#5E3BEE] transition-colors"
            >
              Contact
            </Link>
            <Link
              href="#blogs"
              className="text-[#282938] hover:text-[#5E3BEE] transition-colors"
            >
              Blogs
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
          <div className="flex gap-4 text-[#282938]">
            <a
              href="https://github.com/kunalkumar156"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#5E3BEE] transition-colors"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://devsavant.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#5E3BEE] transition-colors"
            >
              <SiHashnode size={22} />
            </a>
            <a
              href="https://twitter.com/btwitskishor"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#5E3BEE] transition-colors"
            >
              <FaTwitter size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/kishor-kunal-8a5656196/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#5E3BEE] transition-colors"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border border-[#282938]/25" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center">
          <p className="text-xs md:text-sm text-[#282938]">
            Crafted with ❤️ by Kishor Kunal
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
