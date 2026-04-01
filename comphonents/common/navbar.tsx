"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Features", id: "campus-needs" },
    { label: "How It Works", id: "working" },
    { label: "Contact", id: "contact" }
  ];

  // Trigger visibility after 100px of scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
      setMobileMenuOpen(false);
    }
  });

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-[100] px-6 py-4 flex items-center justify-between bg-black/40 backdrop-blur-xl "
    >
      {/* LOGO SECTION */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#FF6A00] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,106,0,0.3)]">
          <span className="text-white font-black text-xl">S</span>
        </div>
        <span className="text-white font-bold tracking-tight text-xl">SCAMPUS</span>
      </div>

      {/* DESKTOP NAV LINKS */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* DESKTOP ACTION BUTTON */}
      <div className="hidden md:block">
        <button className="bg-orange border border-orange-500/40 text-orange-400 hover:bg-orange-500 hover:text-white px-6 py-2.5 rounded-2xl  text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_5px_15px_rgba(255,106,0,0.2)]">
          Get Started
        </button>
      </div>

      {/* MOBILE MENU TOGGLE */}
      <button
        className="md:hidden text-white p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X /> : <Menu />}
      </button>

      {/* MOBILE MENU OVERLAY */}
      <motion.div
        initial={false}
        animate={{ x: mobileMenuOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 top-[72px] bg-black/95 backdrop-blur-2xl z-[-1] flex flex-col p-8 gap-8 md:hidden"
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="text-white text-sm font-bold pb-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <button className="w-full bg-[#FF6A00] text-white py-4 rounded-xl font-bold text-lg mt-4">
          Get Started
        </button>
      </motion.div>
    </motion.nav>
  );
}