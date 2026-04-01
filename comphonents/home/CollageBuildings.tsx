"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BarChart2, DollarSign, BookOpen, Home } from "lucide-react";

// Helper component for floating animation logic
const FloatingNode = ({ children, className, delay = 0 }: { children: React.ReactNode, className: string, delay?: number }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ 
      y: [0, -12, 0], // Moves up 12px and back
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export function CollageBuildings() {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      
      {/* Top Left - Library */}
      <FloatingNode className="absolute left-[10%] top-[18%]" delay={0}>
        <div className="bg-[#181A20]/80 backdrop-blur-md rounded-xl shadow-2xl px-4 py-3 flex flex-col items-center border border-white/5">
          <BookOpen className="text-[#FF6A00] w-7 h-7 mb-1" />
          <span className="text-[10px] uppercase tracking-wider text-white opacity-60">Faculty</span>
        </div>
      </FloatingNode>

      {/* Top Right - Faculty */}
      <FloatingNode className="absolute right-[12%] top-[20%]" delay={0.5}>
        <div className="bg-[#181A20]/80 backdrop-blur-md rounded-xl shadow-2xl px-4 py-3 flex flex-col items-center border border-white/5">
          <GraduationCap className="text-[#FF6A00] w-7 h-7 mb-1" />
          <span className="text-[10px] uppercase tracking-wider text-white opacity-60">Students</span>
        </div>
      </FloatingNode>

      {/* Center Right - Fees (Highlighted) */}
      <FloatingNode className="absolute left-[78%] top-[60%] md:left-[78%] md:top-[55%]"  delay={1.2}>
        <div className="bg-[#181A20] rounded-xl shadow-[0_0_30px_rgba(255,106,0,0.2)] px-5 py-3 flex flex-col items-center border border-[#FF6A00]/50">
          <DollarSign className="text-[#FF6A00] w-6 h-6 mb-1" />
          <span className="text-[10px] uppercase tracking-wider text-[#FF6A00] font-bold">Fees</span>
          
        </div>
      </FloatingNode>

      {/* Middle Left - Analytics */}
      <FloatingNode className="absolute left-[5%] top-[70%] md:left-[15%] md:top-[48%]" delay={0.8}>
        <div className="bg-[#181A20]/80 backdrop-blur-md rounded-xl shadow-2xl px-4 py-3 flex flex-col items-center border border-white/5">
          <BarChart2 className="text-[#FF6A00] w-7 h-7 mb-1" />
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-wider text-white opacity-60">Perfomance</span>
            <span className="text-[10px] text-[#FF6A00] font-bold flex items-center gap-1">
              <span className="w-1 h-1 bg-[#FF6A00] rounded-full animate-pulse" /> LIVE
            </span>
          </div>
        </div>
      </FloatingNode>

      {/* Bottom Left - Hostel */}
      <FloatingNode className="absolute right-[5%] bottom-[15%] md:right-[25%] md:bottom-[5%]" delay={1.5}>
        <div className="bg-[#181A20]/80 backdrop-blur-md rounded-xl shadow-2xl px-4 py-3 flex flex-col items-center border border-white/5">
          <Home className="text-[#FF6A00] w-7 h-7 mb-1" />
          <span className="text-[10px] uppercase tracking-wider text-white opacity-60">Parents</span>
        </div>
      </FloatingNode>

    </div>
  );
}