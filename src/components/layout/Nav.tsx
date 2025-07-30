"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

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
    <nav className="w-full max-w-[1300px] mx-auto flex items-center justify-between py-4 px-4 text-[#1C1E53]">
      {/* Logo */}
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={140} height={50} />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map(({ href, label, download }) => (
          <MotionLink
            key={label}
            href={href}
            download={download ? "kishor-kunal-resume.pdf" : undefined}
            className="text-sm font-medium transition-colors hover:text-[#5E3BEE]"
            whileHover={{ y: -2 }}
          >
            {label}
          </MotionLink>
        ))}
      </div>

      {/* Contact Button */}
      <div className="hidden md:block">
        <Button variant="outline" asChild>
          <Link href="#contactme">Contact Me</Link>
        </Button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button>
              <RxHamburgerMenu size={24} className="text-[#5E3BEE]" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
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
              <Button className="mt-6 w-full" asChild>
                <Link href="#contactme">Contact Me</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Nav;
