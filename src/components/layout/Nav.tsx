"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Mail } from "lucide-react"; // Lucide icons

const MotionLink = motion(Link);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#expertise", label: "Expertise" },
  { href: "#aboutme", label: "About Me" },
  { href: "#blogs", label: "Blogs" },
  { href: "/resume.pdf", label: "Resume", download: true },
];

function Nav() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-0 w-full z-50 px-4"
    >
      <nav
        className="mx-auto flex items-center justify-between 
                   w-full max-w-6xl rounded-2xl 
                   bg-white/20 backdrop-blur-md shadow-lg 
                   border border-white/30 px-6 py-3"
      >
        {/* Logo */}

        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="logo" width={130} height={40} />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label, download }) => (
            <MotionLink
              key={label}
              href={href}
              download={download ? "kishor-kunal-resume.pdf" : undefined}
              className="text-sm font-medium text-[#1C1E53] transition-colors hover:text-[#5E3BEE]"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {label}
            </MotionLink>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button variant="purple" className="gap-2" asChild>
            <Link href="#contactme">
              <Mail className="h-4 w-4" />
              Contact Me
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 rounded-md hover:bg-white/20 transition">
                <Menu size={24} className="text-[#5E3BEE]" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 backdrop-blur-md">
              <SheetHeader>
                <SheetTitle className="flex justify-center">
                  <Image src="/logo.svg" alt="logo" width={100} height={40} />
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-6 text-center">
                {navLinks.map(({ href, label, download }) => (
                  <Link
                    key={label}
                    href={href}
                    download={download ? "kishor-kunal-resume.pdf" : undefined}
                    className="text-lg font-medium transition-colors hover:text-[#5E3BEE]"
                  >
                    {label}
                  </Link>
                ))}
                <Button variant="purple" className="gap-2" asChild>
                  <Link href="#contactme">
                    <Mail className="h-4 w-4" />
                    Contact Me
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.div>
  );
}

export default Nav;
