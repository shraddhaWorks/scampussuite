"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowLeft, MoveRight, ChevronDown, Rocket } from 'lucide-react';
import ContactModal from '../common/ContactModal';

export interface SubFeature {
  title: string;
  description: string;
  benefits: string[];
  image: string;
  sections?: ContentSection[];
}

export interface ContentSection {
  title: string;
  content: string;
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const scrollToDetails = () => {
    const element = document.getElementById('details-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const activeFeature = pillarData.subFeatures?.[activeTab] ?? null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      ref={scrollContainerRef}
      className="fixed inset-0 z-[100] bg-black overflow-y-auto selection:bg-orange-500/30 scroll-smooth"
    >
      {/* BACKGROUND DECORATION */}
      <span className="fixed z-0 text-[20rem] md:text-[30rem] font-black text-white/[0.02] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none hidden md:block">
        {pillarData.letter}
      </span>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* STICKY HEADER & TABS CONTAINER */}
        <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md pt-10 pb-4">
          {/* HEADER */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <button 
              onClick={onBack}
              className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold uppercase tracking-widest text-[10px]">Back To Home</span>
            </button>

            <div className="flex items-center gap-4">
               <div className="text-right hidden sm:block">
                  <span className="text-orange-500 text-[9px] font-black tracking-widest uppercase block">
                      {pillarData.tag}
                  </span>
                  <h2 className="text-lg font-bold text-white">{pillarData.title}</h2>
               </div>
               <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center shadow-lg">
                  {pillarData.icon}
               </div>
            </div>
          </div>

          {/* TAB SELECTOR */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar border-b border-white/5">
            {pillarData.subFeatures.map((feat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`relative px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap
                  ${activeTab === idx ? "text-orange-500" : "text-gray-500 hover:text-gray-300"}`}
              >
                {feat.title}
                {activeTab === idx && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="py-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center min-h-[60vh]"
            >
              <div className="space-y-8 order-2 lg:order-1">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      {activeFeature?.title}
                  </h3>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                      {activeFeature?.description}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {activeFeature?.benefits?.map((point, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                      <p className="text-gray-300 text-sm font-medium leading-snug">{point}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button 
                    onClick={() => setIsModalOpen(true)} 
                    className="w-full sm:w-auto bg-orange-600 hover:bg-orange-500 px-7 py-3.5 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-all text-white shadow-lg"
                  >
                    Book a Demo <MoveRight className="w-4 h-4" />
                  </button>
                  
                  <button 
                    onClick={scrollToDetails}
                    className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 px-7 py-3.5 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-all text-white"
                  >
                    Learn More <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                  <div className="relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-white/5 group shadow-2xl">
                      <img 
                          src={activeFeature?.image} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                          alt={activeFeature?.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* DETAILS SECTION */}
          <div id="details-section" className="mt-32 space-y-32">
            {activeFeature?.sections?.map((section, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-16`}
              >
                <div className="flex-1 space-y-4">
                  <h4 className="text-2xl font-bold text-white">{section.title}</h4>
                  <p className="text-gray-400 text-base leading-relaxed">{section.content}</p>
                </div>
                <div className="flex-1 w-full">
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                    <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* COMMON BANNER 1 */}
          <div className="rounded-[2rem] p-8 md:p-14 bg-gradient-to-br from-orange-600/20 to-orange-900/5 border border-orange-500/20 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden group mt-24">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-[80px] -mr-32 -mt-32 rounded-full" />
            <div className="space-y-4 relative z-10">
              <span className="bg-orange-600/20 text-orange-500 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Start Today our ERP</span>
              <h3 className="text-3xl md:text-4xl pt-4 font-bold text-white max-w-lg leading-tight">Ready to Revolutionize Your Educational Institution?</h3>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group bg-white text-black hover:bg-orange-500 hover:text-white px-10 py-5 rounded-2xl font-black text-xs flex items-center gap-4 transition-all relative z-10 shadow-2xl active:scale-95"
            >
              Book a Free Demo <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* COMMON BANNER 2 */}
          <div className="grid md:grid-cols-2 gap-16 items-center pb-20 pt-10 border-t border-white/5 mt-10">
            <div className="relative">
                <div className="absolute -inset-10 bg-orange-600/5 blur-[100px] rounded-full" />
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-inner p-2 bg-white/5">
                    <img 
                      src="/scampusshow.webp" 
                      alt="SCAMPUS Interface" 
                      className="w-full h-auto rounded-2xl"
                    />
                </div>
            </div>
            <div className="space-y-8">
               <div className="space-y-3 mb-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                        <Rocket className="text-white w-5 h-5" fill="white" />
                    </div>
                    <p className="text-gray-400 font-black text-sm uppercase tracking-[0.3em]">All-In-One</p>
                  </div>
                  <h3 className="text-4xl font-bold text-white leading-tight">AI-Driven ERP Suite <br/> <span className="text-orange-500">for Your College</span></h3>
               </div>
               <p className="text-gray-400 text-lg leading-relaxed font-medium mb-1">
                 Experience a unified platform designed to streamline every aspect of your institution, from administration to classroom engagement. Our theme-optimized interface ensures clarity and speed.
               </p>
               <div className="flex gap-4 pt-4">
                 {['Fast', 'Reliable', 'Secure'].map((tag) => (
                    <span key={tag} className="text-[10px] font-bold text-orange-500/70 border border-orange-500/20 px-3 py-1 rounded-md uppercase tracking-tighter">
                        {tag}
                    </span>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </motion.div>
  );
};

export default FeatureShowcase;