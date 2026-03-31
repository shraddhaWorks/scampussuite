"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageSquare, GraduationCap, BarChart3, CreditCard, Building2, Users } from 'lucide-react';

const pillars = [
    {
        letter: 'S',
        tag: 'UNIFIED MANAGEMENT',
        title: 'Students & Staff',
        desc: 'Comprehensive student and staff management system with automated workflows, digital records, and seamless onboarding processes. Track attendance, performance, and engagement all in one place.',
        icon: <Users className="w-6 h-6 text-white" />,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
    },
    {
        letter: 'C',
        tag: 'REAL-TIME CONNECTIVITY',
        title: 'Communication',
        desc: 'Instant notifications, announcements, and messaging system. Keep everyone connected with push notifications, email alerts, and in-app communication channels for students, staff, and parents.',
        icon: <MessageSquare className="w-6 h-6 text-white" />,
        image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=800"
    },
    {
        letter: 'A',
        tag: 'EXCELLENCE IN EDUCATION',
        title: 'Academics',
        desc: 'Digital classrooms, assignment management, grade tracking, and curriculum planning. Empower educators with tools for lesson planning, assessments, and student progress monitoring.',
        icon: <GraduationCap className="w-6 h-6 text-white" />,
        image: "https://images.unsplash.com/photo-1607013407627-6ee814329547?w=500&auto=format&fit=crop&q=60"
    },
    {
        letter: 'M',
        tag: 'DATA-DRIVEN INSIGHTS',
        title: 'Monitoring',
        desc: 'Real-time analytics, performance dashboards, and comprehensive reporting. Monitor key metrics, track trends, and make informed decisions with powerful data visualization tools.',
        icon: <BarChart3 className="w-6 h-6 text-white" />,
        image: "https://plus.unsplash.com/premium_photo-1748853983673-6e48199324fe?w=500&auto=format&fit=crop&q=60"
    },
    {
        letter: 'P',
        tag: 'FINANCIAL EXCELLENCE',
        title: 'Payments',
        desc: 'Streamlined fee collection, invoice generation, and financial tracking. Accept online payments, manage scholarships, and automate billing processes with complete transparency.',
        icon: <CreditCard className="w-6 h-6 text-white" />,
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800"
    },
    {
        letter: 'U',
        tag: 'CAMPUS MANAGEMENT',
        title: 'University Operations',
        desc: 'Manage hostel allocations, transport logistics, library resources, and facility bookings. Streamline campus operations with automated workflows and resource optimization.',
        icon: <Building2 className="w-6 h-6 text-white" />,
        image: "https://images.unsplash.com/photo-1731977188312-889e607b8c6a?w=500&auto=format&fit=crop&q=60"
    },
    {
        letter: 'S',
        tag: 'SMART TIME MANAGEMENT',
        title: 'Scheduling',
        desc: 'Automated timetable generation, exam scheduling, and event planning. Intelligent conflict resolution ensures optimal resource allocation and scheduling efficiency.',
        icon: <Calendar className="w-6 h-6 text-white" />,
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800"
    },
];

const CampusNeeds = () => {
    return (
        <div className="bg-black text-white min-h-screen selection:bg-orange-500/30 font-sans overflow-x-hidden">

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
                    Seven powerful pillars working in perfect harmony to transform your institution's operations and deliver exceptional experiences.
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

                                    <p className="text-gray-400 text-lg leading-relaxed max-w-md font-medium">
                                        {pillar.desc}
                                    </p>

                                    <button className="group flex items-center gap-3 bg-orange-500/10 hover:bg-orange-500/60 border border-orange-500/40 px-5 py-3 rounded-2xl transition-all duration-300">
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