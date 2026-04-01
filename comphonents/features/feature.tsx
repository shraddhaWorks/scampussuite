"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowLeft, MoveRight } from 'lucide-react';
import ContactModal from '../common/ContactModal';

export interface SubFeature {
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

export interface PillarData {
  letter: string;
  tag: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  image: string;
  subFeatures: SubFeature[];
}

interface FeatureShowcaseProps {
  pillarData: PillarData;
  onBack: () => void;
}

const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({ pillarData, onBack }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent background scroll when viewing details
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Professional transitions
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
  };

  const activeFeature = pillarData.subFeatures?.[activeTab] ?? null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black overflow-y-auto custom-scrollbar selection:bg-orange-500/30 p-4 md:p-0"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      {/* STATIC BACKGROUND LETTER */}
      <span className="fixed z-0 text-[40rem] font-black text-white/[0.02] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none hidden md:block leading-none">
        {pillarData.letter}
      </span>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-20">
        
        {/* TOP NAV BAR */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold uppercase tracking-widest text-xs">Back to Overview</span>
          </button>

          <div className="flex items-center gap-6">
             <div className="text-right hidden md:block">
                <span className="text-orange-500 text-[10px] font-black tracking-[0.3em] uppercase block mb-1">
                    {pillarData.tag}
                </span>
                <h2 className="text-2xl font-bold">{pillarData.title}</h2>
             </div>
             <div className="w-14 h-14 rounded-2xl bg-orange-600 flex items-center justify-center shadow-[0_10px_30px_rgba(234,88,12,0.3)]">
                {pillarData.icon}
             </div>
          </div>
        </div>

        {/* HORIZONTAL FEATURE SELECTOR */}
        <div className="flex items-center gap-2 mb-16 overflow-x-auto no-scrollbar border-b border-white/5 pb-1">
          {pillarData.subFeatures.map((feat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`relative px-8 py-4 text-sm font-bold uppercase tracking-tighter transition-all whitespace-nowrap
                ${activeTab === idx ? "text-orange-500" : "text-gray-500 hover:text-gray-300"}`}
            >
              {feat.title}
              {activeTab === idx && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.8)]"
                />
              )}
            </button>
          ))}
        </div>

        {/* CONTENT GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            {...fadeUp}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            {/* LEFT: TEXT & LIST */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                    {activeFeature?.title}
                </h3>
                <p className="text-gray-400 text-xl leading-relaxed font-medium">
                    {activeFeature?.description}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {activeFeature?.benefits?.map((point, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    key={i} 
                    className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-orange-500/30 transition-colors group"
                  >
                    <CheckCircle2 className="w-6 h-6 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-200 font-semibold">{point}</p>
                  </motion.div>
                ))}
              </div>

              <button onClick={() => setIsModalOpen(true)} className="w-full md:w-auto bg-orange-600 hover:bg-orange-500 px-8 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-3 transition-all">
                Book a Demo <MoveRight className="w-4 h-4" />
              </button>
            </div>

            {/* RIGHT: IMAGE CARD */}
            <div className="relative aspect-[4/5] lg:aspect-square group">
                <div className="absolute -inset-4 bg-orange-500/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                    <img 
                        src={activeFeature?.image} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                        alt={activeFeature?.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8">
                        <span className="text-orange-500 font-black text-xs tracking-widest uppercase">Module Insight</span>
                        <p className="text-white text-sm font-medium opacity-70">Visual preview of the {activeFeature.title} interface</p>
                    </div>
                </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </motion.div>
  );
};

export default FeatureShowcase;