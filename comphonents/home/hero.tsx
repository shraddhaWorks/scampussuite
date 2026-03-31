"use client";

import React, { useRef } from "react";
import { CollageBuildings } from "./CollageBuildings";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 1. Circle Animations
  const circleScale = useTransform(smoothProgress, [0, 0.7], [1, 25]);
  const circleOpacity = useTransform(smoothProgress, [0, 0.6, 0.8], [1, 1, 0]);
  
  // 2. SCAMPUS Text Transitions
  // Starts White (in circle) -> Turns Orange (in headline)
  const textColor = useTransform(smoothProgress, [0, 0.5], ["#FFFFFF", "#FF6A00"]);
  const textY = useTransform(smoothProgress, [0, 0.8], ["0%", "0%"]); // Keep centered vertically
  const textScale = useTransform(smoothProgress, [0, 0.8], [0.9, 1]);
  const scampusX = useTransform(smoothProgress, [0, 0.5], [-270, 0]);

  // 3. Headline Appearance
  const headlineOpacity = useTransform(smoothProgress, [0.6, 0.8], [0, 1]);
  const headlineScale = useTransform(smoothProgress, [0.6, 0.8], [0.95, 1]);

  // Collage visibility: show only before transition (first 0.6 scroll)
  const collageOpacity = useTransform(smoothProgress, [0, 0.55, 0.6], [1, 1, 0]);

  return (
    <div ref={containerRef} className="h-[250vh] bg-black font-sans">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* COLLAGE BUILDINGS (Desktop only, before transition) */}
        <motion.div style={{ opacity: collageOpacity }} className="absolute inset-0 z-20 pointer-events-none hidden md:block">
          <CollageBuildings />
        </motion.div>

        {/* THE ROTATING PORTAL */}
        <motion.div
          style={{ scale: circleScale, opacity: circleOpacity }}
          className="absolute z-10 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
        >
          {/* Dashed Border - Constant Slow Rotation */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-[#FF6A00] rounded-full opacity-60"
          />
          {/* Inner Glow */}
          <div className="w-[80%] h-[80%] bg-[#FF6A00] rounded-full blur-[60px] opacity-20" />
        </motion.div>

        {/* MAIN UI LAYER */}
        <div className="relative z-20 w-full flex flex-col items-center">
          
          {/* UNIFIED HEADLINE & SCAMPUS */}
          <motion.div 
            style={{ scale: headlineScale }}
            className="flex flex-col items-center justify-center text-center px-6"
          >
            {/* "Run Your Entire" */}
            <motion.span 
              style={{ opacity: headlineOpacity }}
              className="text-white text-4xl md:text-7xl font-extrabold tracking-tight mb-2"
            >
              Run Your Entire
            </motion.span>

            {/* "Institution with SCAMPUS" - This row stays perfectly aligned */}
            <div className="flex items-center justify-center gap-x-3 md:gap-x-5 whitespace-nowrap">
              <motion.span 
                style={{ opacity: headlineOpacity }}
                className="text-white text-4xl md:text-7xl font-extrabold tracking-tight"
              >
                Institution with
              </motion.span>
              
              <motion.span
                style={{ 
                  color: textColor,
                  scale: textScale,
                  x: scampusX,
                }}
                className="text-4xl md:text-7xl font-black uppercase tracking-tighter drop-shadow-[0_0_20px_rgba(255,106,0,0.4)]"
              >
                SCAMPUS
              </motion.span>
            </div>

            {/* "ERP Suite" */}
            <motion.span 
              style={{ opacity: headlineOpacity }}
              className="text-white text-4xl md:text-7xl font-extrabold tracking-tight mt-2"
            >
              ERP Suite
            </motion.span>
          </motion.div>

        </div>

        {/* FOOTER INDICATOR */}
        <motion.div 
           style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
           className="absolute bottom-4 flex flex-col items-center gap-3"
        >
           <span className="text-gray-500 text-[10px] uppercase tracking-[0.3em]">Initiating System</span>
           <div className="w-[1px] h-12 bg-gradient-to-b from-[#FF6A00] to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}