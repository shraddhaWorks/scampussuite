"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import ContactModal from "./ContactModal";
import Link from 'next/link';
import { pillars, PillarDataBase } from '../data/pillars';
import { useFeatureContext } from '@/context/FeatureContext';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const [mobileSelectedPillar, setMobileSelectedPillar] = useState<PillarDataBase | null>(null);
  const [featuresHovering, setFeaturesHovering] = useState(false);
  const [hoveredPillar, setHoveredPillar] = useState<PillarDataBase | null>(null);
  const { openFeature } = useFeatureContext();
  // New State for the Popup
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    { label: "Features", id: "campus-needs", isDropdown: true },
    { label: "How It Works", id: "working" },
    { label: "Contact", id: "contact" },
    { label: "Team", id: "team" },
  ];
  // Helper to open modal and close mobile menu if it's open
  const handleGetStarted = () => {
    setIsModalOpen(true);
    setMobileMenuOpen(false);
  };

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
    <>
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
        <Link href="/" className="cursor-pointer transition-transform hover:scale-105 active:scale-95">
          <div className="flex items-center gap-3">
            <div className="p-1 flex items-center justify-center">
              <img
                src="https://shraddha.org.in/shraddha-logo-navbar.svg"
                alt="Shraddha Logo"
                style={{ width: '85px'}} // Increased from 70px to 85px
                className="object-contain"
              />
            </div>
            {/* If you have text next to it, it goes here */}
          </div>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-10 relative">
          {navLinks.map((link) => (
            <div key={link.id} className="relative">
              {link.isDropdown ? (
                <div 
                  onMouseEnter={() => setFeaturesHovering(true)}
                  onMouseLeave={() => setFeaturesHovering(false)}
                  className="relative"
                >
                  <button className="text-gray-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1">
                    {link.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  
                  {/* Mega Menu Dropdown */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={featuresHovering ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-full left-0 mt-0 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl min-w-[800px] p-6 z-50 ${
                      featuresHovering ? 'pointer-events-auto' : 'pointer-events-none'
                    }`}
                    onMouseLeave={() => setHoveredPillar(null)}
                  >
                    <div className="flex gap-8">
                      {/* Main Features List - Always Visible */}
                      <div className="flex-1">
                        
                        <div className="space-y-2">
                          {pillars.map((pillar, index) => (
                            <div
                              key={`pillar-${index}`}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group"
                              onMouseEnter={() => setHoveredPillar(pillar)}
                            >
                              <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                                <span className="text-orange-500 font-bold text-xs">{pillar.letter}</span>
                              </div>
                              <div className="flex-1">
                                <h3 className="text-sm font-medium text-white group-hover:text-orange-400 transition-colors">{pillar.title}</h3>
                                
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Sub-features Panel - Shows on Hover */}
                      <div className="flex-1 border-l border-white/10 pl-6" onMouseEnter={() => {}}>
                        {hoveredPillar ? (
                          <div>
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
                                <span className="text-orange-500 font-bold text-xs">{hoveredPillar.letter}</span>
                              </div>
                              <h4 className="text-white font-semibold text-sm">{hoveredPillar.title}</h4>
                            </div>
                            <div className="space-y-2">
                              {hoveredPillar.subFeatures.map((subFeature: any, idx: number) => (
                                <button
                                  key={idx}
                                  onClick={() => {
                                    openFeature(hoveredPillar, idx);
                                    setFeaturesHovering(false);
                                  }}
                                  className="block w-full text-left p-3 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-orange-500/50 group"
                                >
                                  <div className="flex items-start gap-3">
                                    <span className="text-orange-500/70 mt-0.5">•</span>
                                    <div>
                                      <div className="font-medium group-hover:text-orange-400 transition-colors">{subFeature.title}</div>
                                      <div className="text-xs text-gray-400 group-hover:text-gray-300 mt-1 line-clamp-2">{subFeature.description}</div>
                                    </div>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center h-full text-gray-500">
                            <div className="text-center">
                              <div className="text-2xl mb-2">👆</div>
                              <p className="text-sm">Hover over a feature to see details</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ) : (
                <a
                  href={`#${link.id}`}
                  className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}
        </div>



        {/* DESKTOP ACTION BUTTON */}
        <div className="hidden md:block">
          <button onClick={handleGetStarted} className="bg-orange border border-orange-500/40 text-orange-400 hover:bg-orange-500 hover:text-white px-6 py-2.5 rounded-2xl  text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_5px_15px_rgba(255,106,0,0.2)]">
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
            link.isDropdown ? (
              <div key={link.id} className="space-y-2">
                <button
                  onClick={() => {
                    setMobileFeaturesOpen(!mobileFeaturesOpen);
                    setMobileSelectedPillar(null);
                  }}
                  className="flex items-center justify-between w-full text-white text-sm font-bold pb-4"
                >
                  {link.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileFeaturesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileFeaturesOpen && (
                  <div className="space-y-3 pl-3 border-l border-white/10">
                    {pillars.map((pillar, index) => (
                      <div key={`mobile-pillar-${index}`}>
                        <button
                          onClick={() => setMobileSelectedPillar(pillar)}
                          className="w-full text-left text-sm text-gray-200 py-2 px-2 rounded-lg hover:bg-white/5 transition-colors"
                        >
                          {pillar.title}
                        </button>
                        {mobileSelectedPillar?.title === pillar.title && (
                          <div className="space-y-2 pl-4 mt-2">
                            {pillar.subFeatures.map((subFeature, idx) => (
                              <button
                                key={idx}
                                onClick={() => {
                                  openFeature(pillar, idx);
                                  setMobileMenuOpen(false);
                                  setMobileFeaturesOpen(false);
                                  setMobileSelectedPillar(null);
                                }}
                                className="block w-full text-left text-sm text-gray-300 py-2 px-2 rounded-lg hover:bg-white/5 transition-colors"
                              >
                                {subFeature.title}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-white text-sm font-bold pb-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          ))}
          <button onClick={handleGetStarted} className="w-full bg-[#FF6A00] text-white py-4 rounded-xl font-bold text-lg mt-4">
            Get Started
          </button>
        </motion.div>
      </motion.nav>
      {/* THE POPUP COMPONENT */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}