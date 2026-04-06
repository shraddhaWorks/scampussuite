"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MessageSquare, GraduationCap, BarChart3, CreditCard, Building2, Users } from 'lucide-react';
import FeatureShowcase from '../features/feature';
import { pillars as pillarsData, PillarDataBase } from '../data/pillars';
import { useFeatureContext } from '@/context/FeatureContext';

// Helper function to get icon component by name
function getIconByName(iconName: string) {
  const icons: { [key: string]: React.ReactNode } = {
    Users: <Users className="w-6 h-6 text-white" />,
    MessageSquare: <MessageSquare className="w-6 h-6 text-white" />,
    GraduationCap: <GraduationCap className="w-6 h-6 text-white" />,
    BarChart3: <BarChart3 className="w-6 h-6 text-white" />,
    CreditCard: <CreditCard className="w-6 h-6 text-white" />,
    Building2: <Building2 className="w-6 h-6 text-white" />,
    Calendar: <Calendar className="w-6 h-6 text-white" />,
  };
  return icons[iconName] || null;
}

// Type for component use
interface PillarWithIcon extends PillarDataBase {
  icon: React.ReactNode;
}



const CampusNeeds = () => {
  const { openFeature } = useFeatureContext();

  // Transform pillars data to include icons
  const pillars: PillarWithIcon[] = pillarsData.map(pillar => ({
    ...pillar,
    icon: getIconByName(pillar.iconName)
  }));

  return (
    <div className="bg-black text-white min-h-screen selection:bg-orange-500/30 font-sans overflow-x-hidden" id="campus-needs">

            {/* Hero Header Section */}
            <section className="py-24 px-6 text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-ms mb-10">
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                    Powered by SCAMPUS
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
                    Everything Your <span className="text-gray-400">Campus</span> <br />
                    <span className="text-white">Needs</span>
                </h1>

                <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
                    Seven powerful pillars working in perfect harmony to transform your institution&apos;s operations and deliver exceptional experiences.
                </p>
            </section>

            {/* Main Pillars Zig-Zag Content */}
            <div className="max-w-7xl mx-auto px-6 space-y-40 pb-40 relative">

                {/* --- CENTRAL ORANGE GLOW LINE (From Video) --- */}
                {/* --- CENTRAL ORANGE GLOW DIAGONAL LINE --- */}
                <div className="absolute inset-0 hidden md:block z-0 pointer-events-none">

                    <div
                        className="absolute top-0 left-1/4 w-[2px] h-full -translate-x-1/2 
    bg-gradient-to-b from-orange-500/0 via-orange-500/30 to-orange-500/0
    -rotate-[12deg]
    origin-top
    shadow-[0_0_25px_rgba(249,115,22,0.6)]"
                    />

                </div>
                {pillars.map((pillar, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div key={index} className="relative group">

                            {/* STATIC BACKGROUND LETTER */}
                            <span className="absolute z-0 text-[26rem] font-black text-white/[0.03] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none hidden md:block leading-none">
                                {pillar.letter}
                            </span>

                            {/* SIDE ANIMATED CONTENT */}
                            <div
                                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 relative z-10`}
                            >
                                {/* Text Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex-1 space-y-8"
                                >
                                    <div className="space-y-6">
                                        <div className="w-16 h-16 rounded-2xl bg-orange-600 flex items-center justify-center shadow-[0_10px_30px_rgba(234,88,12,0.4)]">
                                            {pillar.icon}
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 flex items-center justify-center border border-orange-500/40 rounded-lg bg-orange-500/10 backdrop-blur-sm">
                                                <span className="text-orange-500 font-black text-xs">{pillar.letter}</span>
                                            </div>
                                            <span className="text-orange-500 text-[10px] font-black tracking-[0.25em] uppercase">
                                                {pillar.tag}
                                            </span>
                                        </div>
                                    </div>

                                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                                        {pillar.title}
                                    </h2>

                                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl">
                                      {pillar.features?.map((feature, idx) => (
                                        <div key={idx} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-gray-200 shadow-sm hover:border-orange-500/30 transition-colors">
                                          {feature}
                                        </div>
                                      ))}
                                    </div>

                                    <button onClick={() => openFeature(pillar, 0)} className="group flex items-center gap-3 bg-orange-500/10 hover:bg-orange-500/60 border border-orange-500/40 px-5 py-3 rounded-2xl transition-all duration-300">
                                        <span className="text-orange-500 font-bold text-sm  ">Learn More</span>
                                        <span className="text-orange-500 transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                                    </button>
                                </motion.div>

                                {/* Image Side with ZIG-ZAG SHADOW */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex-1 relative w-full group"
                                >
                                    <div className={`absolute -inset-4 bg-orange-600/40 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 
                      ${isEven ? '-top-10 -right-10' : '-top-10 -left-10'}`}></div>

                                    <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm">
                                        <img
                                            src={pillar.image}
                                            alt={pillar.title}
                                            className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                    );
                })}

            </div>
        </div>

    );
};

export default CampusNeeds;