"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MessageSquare, GraduationCap, BarChart3, CreditCard, Building2, Users } from 'lucide-react';
import FeatureShowcase, { PillarData } from '../features/feature';

const pillars: PillarData[] = [
    {
        letter: 'S',
        tag: 'UNIFIED MANAGEMENT',
        title: 'Students & Staff',
        desc: 'Comprehensive student and staff management system with automated workflows, digital records, and seamless onboarding processes. Track attendance, performance, and engagement all in one place.',
        icon: <Users className="w-6 h-6 text-white" />,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
        subFeatures: [
            {
                title: "Digital Onboarding",
                description: "Paperless documentation and automated verification workflows for new admissions.",
                benefits: ["Document OCR", "Biometric Integration", "Auto-ID Gen"],
                image: "https://images.unsplash.com/photo-1554224155-16974a4ea2c5?auto=format&fit=crop&q=80"
            },
            {
                title: "Attendance Intelligence",
                description: "Automated attendance tracking with exception alerts and analytics.",
                benefits: ["Smart QR scans", "Absent flags", "Daily reports"],
                image: "https://images.unsplash.com/photo-1581091012184-3b90a0e468b4?auto=format&fit=crop&q=80"
            },
            {
                title: "Performance Dashboards",
                description: "Real-time KPIs for student achievement and teacher success.",
                benefits: ["Grade curves", "Growth trends", "Custom filters"],
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
            },
            {
                title: "Staff Roster & HR",
                description: "Centralized employee records, scheduling and payroll snapshots.",
                benefits: ["Shift planners", "Leave requests", "Contract reminders"],
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
            },
            {
                title: "Feedback Loops",
                description: "Two-way student and staff input channels for continuous improvement.",
                benefits: ["Surveys", "Action items", "Engagement streams"],
                image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&q=80"
            }
        ]
    },
    {
        letter: 'C',
        tag: 'REAL-TIME CONNECTIVITY',
        title: 'Communication',
        desc: 'Instant notifications, announcements, and messaging system. Keep everyone connected with push notifications, email alerts, and in-app communication channels for students, staff, and parents.',
        icon: <MessageSquare className="w-6 h-6 text-white" />,
        image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=800",
        subFeatures: [
            {
                title: "Unified Messaging",
                description: "Send bulk notifications across email, SMS, and in-app channels in one click.",
                benefits: ["Template library", "Delivery insights", "Multi-channel"],
                image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80"
            },
            {
                title: "Event Announcements",
                description: "Automated event reminders, updates, and calendar sync.",
                benefits: ["Auto follow-ups", "RSVP tracking", "Push alerts"],
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
            },
            {
                title: "Parent Engagement",
                description: "Dedicated portal for parent communications and student progress summaries.",
                benefits: ["Live chat", "Report cards", "Alerts"],
                image: "https://images.unsplash.com/photo-1581091870627-c24e539dd3dc?auto=format&fit=crop&q=80"
            },
            {
                title: "Emergency Broadcast", 
                description: "High-priority alerts with acknowledgement and escalation workflows.",
                benefits: ["Geo-targeted", "Read receipts", "SLA logs"],
                image: "https://images.unsplash.com/photo-1581092580515-3c2efd7de0ee?auto=format&fit=crop&q=80"
            },
            {
                title: "Feedback Channels",
                description: "Structured feedback survey routing with sentiment analytics.",
                benefits: ["Pulse checks", "AI insights", "Auto tickets"],
                image: "https://images.unsplash.com/photo-1590608897129-79efbb8cb3ff?auto=format&fit=crop&q=80"
            }
        ]
    },
    {
        letter: 'A',
        tag: 'EXCELLENCE IN EDUCATION',
        title: 'Academics',
        desc: 'Digital classrooms, assignment management, grade tracking, and curriculum planning. Empower educators with tools for lesson planning, assessments, and student progress monitoring.',
        icon: <GraduationCap className="w-6 h-6 text-white" />,
        image: "https://images.unsplash.com/photo-1607013407627-6ee814329547?w=500&auto=format&fit=crop&q=60",
        subFeatures: [
            {
                title: "Curriculum Builder",
                description: "Drag-and-drop course design with standards tagging.",
                benefits: ["Version history", "Shared libraries", "Standards mapping"],
                image: "https://images.unsplash.com/photo-1587614382346-4ec4c23ecf35?auto=format&fit=crop&q=80"
            },
            {
                title: "Assessment Engine",
                description: "Create auto-graded, rubric-based and project assessments.",
                benefits: ["Question bank", "Adaptive difficulty", "Live grading"],
                image: "https://images.unsplash.com/photo-1559028012-4810c5f7f3a5?auto=format&fit=crop&q=80"
            },
            {
                title: "Gradebook Analytics",
                description: "Visualized classroom performance and equity checks.",
                benefits: ["Heatmaps", "Intervention flags", "Trend lines"],
                image: "https://images.unsplash.com/photo-1581091012184-3b90a0e468b4?auto=format&fit=crop&q=80"
            },
            {
                title: "Learning Paths",
                description: "Personalized student learning journeys and mastery tracking.",
                benefits: ["Recommendations", "Milestone badges", "Relearning plans"],
                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
            },
            {
                title: "Collaboration Spaces",
                description: "Virtual group workspaces with shared docs and discussion boards.",
                benefits: ["Real-time editing", "Peer reviews", "Resource sharing"],
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
            }
        ]
    },
    {
        letter: 'M',
        tag: 'DATA-DRIVEN INSIGHTS',
        title: 'Monitoring',
        desc: 'Real-time analytics, performance dashboards, and comprehensive reporting. Monitor key metrics, track trends, and make informed decisions with powerful data visualization tools.',
        icon: <BarChart3 className="w-6 h-6 text-white" />,
        image: "https://plus.unsplash.com/premium_photo-1748853983673-6e48199324fe?w=500&auto=format&fit=crop&q=60",
        subFeatures: [
            {
                title: "Analytics Hub",
                description: "Unified KPI dashboards across campus operations.",
                benefits: ["Custom widgets", "Snapshot export", "Smart alerts"],
                image: "https://images.unsplash.com/photo-1551516594-2a53d496f061?auto=format&fit=crop&q=80"
            },
            {
                title: "Predictive Modeling",
                description: "Student attrition and resource demand forecasts.",
                benefits: ["Regression models", "What-if scenarios", "What-if sliders"],
                image: "https://images.unsplash.com/photo-1561414920-f132b60f06e4?auto=format&fit=crop&q=80"
            },
            {
                title: "Compliance Tracker",
                description: "Automated reporting for accreditation and audit readiness.",
                benefits: ["Policy mapping", "Gap alerts", "Automated exports"],
                image: "https://images.unsplash.com/photo-1517242027353-96af1f7a5cf9?auto=format&fit=crop&q=80"
            },
            {
                title: "Resource Utilization",
                description: "Track lab, classroom and facility usage in real time.",
                benefits: ["Occupancy heatmap", "Peak alerts", "Utilization trend"],
                image: "https://images.unsplash.com/photo-1491897554428-130a60dd4757?auto=format&fit=crop&q=80"
            },
            {
                title: "Actionable Insights",
                description: "AI-driven recommendations for performance improvement.",
                benefits: ["Issue tickets", "Smart next steps", "Impact scoring"],
                image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80"
            }
        ]
    },
    {
        letter: 'P',
        tag: 'FINANCIAL EXCELLENCE',
        title: 'Payments',
        desc: 'Streamlined fee collection, invoice generation, and financial tracking. Accept online payments, manage scholarships, and automate billing processes with complete transparency.',
        icon: <CreditCard className="w-6 h-6 text-white" />,
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
        subFeatures: [
            {
                title: "Smart Billing",
                description: "Automated invoicing and multi-cycle fee plans.",
                benefits: ["Partial payments", "Auto-retry", "SMS reminders"],
                image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&q=80"
            },
            {
                title: "Scholarship Manager",
                description: "Automated scholarship eligibility and award workflows.",
                benefits: ["Slot management", "Approval flows", "Distribution tracking"],
                image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80"
            },
            {
                title: "Expense Tracking",
                description: "Department budgets, invoices and spend audit trails.",
                benefits: ["Category tags", "Threshold alerts", "Financial years"],
                image: "https://images.unsplash.com/photo-1588776814546-d8b5b6ad6b89?auto=format&fit=crop&q=80"
            },
            {
                title: "Payment Gateway", 
                description: "Secure multi-currency and multi-method checkout support.",
                benefits: ["Card/UPI/ACH", "PCI compliance", "Refund automation"],
                image: "https://images.unsplash.com/photo-1549421263-64a4f20e376c?auto=format&fit=crop&q=80"
            },
            {
                title: "Financial Reports",
                description: "Real-time cashflow and audit-ready financial statements.",
                benefits: ["P&L overview", "Receivables aging", "Forecast tools"],
                image: "https://images.unsplash.com/photo-1543418239-2d85f27b499b?auto=format&fit=crop&q=80"
            }
        ]
    },
    {
        letter: 'U',
        tag: 'CAMPUS MANAGEMENT',
        title: 'University Operations',
        desc: 'Manage hostel allocations, transport logistics, library resources, and facility bookings. Streamline campus operations with automated workflows and resource optimization.',
        icon: <Building2 className="w-6 h-6 text-white" />,
        image: "https://images.unsplash.com/photo-1731977188312-889e607b8c6a?w=500&auto=format&fit=crop&q=60",
        subFeatures: [
            {
                title: "Facility Booking",
                description: "Centralized reservations for rooms, labs and equipment.",
                benefits: ["Booking calendar", "Conflict checks", "Usage fees"],
                image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80"
            },
            {
                title: "Transport Scheduling",
                description: "Route management and live bus tracking for campus transit.",
                benefits: ["Pick-up alerts", "ETA updates", "Capacity planning"],
                image: "https://images.unsplash.com/photo-1528256952176-78409138514e?auto=format&fit=crop&q=80"
            },
            {
                title: "Inventory Control",
                description: "Asset tracking for labs, libraries and office equipment.",
                benefits: ["Check-in/out", "Maintenance logs", "Life-cycle alerts"],
                image: "https://images.unsplash.com/photo-1517142089942-ba376ce32a1e?auto=format&fit=crop&q=80"
            },
            {
                title: "Security Admin", 
                description: "Visitor management and access control monitoring.",
                benefits: ["ID workflows", "visitor passes", "incident logs"],
                image: "https://images.unsplash.com/photo-1609695535237-7a9aa122fcf6?auto=format&fit=crop&q=80"
            },
            {
                title: "Housekeeping Tasking",
                description: "Automated cleaning schedules with status dashboards.",
                benefits: ["Task assignment", "Service ratings", "completion reports"],
                image: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?auto=format&fit=crop&q=80"
            }
        ]
    },
    {
        letter: 'S',
        tag: 'SMART TIME MANAGEMENT',
        title: 'Scheduling',
        desc: 'Automated timetable generation, exam scheduling, and event planning. Intelligent conflict resolution ensures optimal resource allocation and scheduling efficiency.',
        icon: <Calendar className="w-6 h-6 text-white" />,
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800",
        subFeatures: [
            {
                title: "Timetable Generator",
                description: "Auto-build course schedules with professor and room constraints.",
                benefits: ["Conflict minimization", "cross-term sync", "export to calendar"],
                image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80"
            },
            {
                title: "Exam Engine",
                description: "Schedule exams, assign invigilators and publish results securely.",
                benefits: ["Seat planners", "question banks", "proctoring alerts"],
                image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80"
            },
            {
                title: "Event Planner",
                description: "Campus event workflows with resource and attendee management.",
                benefits: ["Invite tracking", "notifications", "check-in"],
                image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80"
            },
            {
                title: "Faculty Load", 
                description: "Balanced task distribution and credits per instructor.",
                benefits: ["Workload analytics", "auto-assign", "compliance checks"],
                image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80"
            },
            {
                title: "Holiday Calendar",
                description: "Dynamic holidays and custom blackout dates for schedule safety.",
                benefits: ["localization", "rollover rules", "auto-check"],
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
            }
        ]
    }
];

const CampusNeeds = () => {
    const [selectedPillar, setSelectedPillar] = React.useState<PillarData | null>(null);
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

                                    <p className="text-gray-400 text-lg leading-relaxed max-w-md font-medium">
                                        {pillar.desc}
                                    </p>

                                    <button onClick={() => setSelectedPillar(pillar)} className="group flex items-center gap-3 bg-orange-500/10 hover:bg-orange-500/60 border border-orange-500/40 px-5 py-3 rounded-2xl transition-all duration-300">
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
            <AnimatePresence>
  {selectedPillar && (
    <FeatureShowcase pillarData={selectedPillar} onBack={() => setSelectedPillar(null)} />
  )}
</AnimatePresence>
        </div>
        
    );
};

export default CampusNeeds;