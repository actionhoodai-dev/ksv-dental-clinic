'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, Microscope, Activity, Star, Calendar, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  { 
    id: 'root-canal', 
    title: "Root Canal", 
    tamil: "ரூட் கெனால்", 
    img: "/root_canal_procedure_modern_1774466412654.png", 
    desc: "Saving natural teeth with Painless Rotary Endodontics. We combine 30 years of clinical experience with modern digital diagnostics (CBCT-integrated) to ensure perfect procedural outcomes.",
    metrics: [{ label: "Success Rate", value: "98%" }, { label: "Clinical Years", value: "30+" }],
    icon: HeartPulse
  },
  { 
    id: 'implants', 
    title: "Dental Implants", 
    tamil: "பல் இம்ப்ளான்ட்", 
    img: "/dental_implant_closeup_1774466284954.png", 
    desc: "Restore your natural bite and smile with high-grade titanium implants that look and feel just like your original teeth. We use digital guided surgery for maximum precision and comfort.",
    metrics: [{ label: "Titanium Grade", value: "Bio" }, { label: "Patient Comfort", value: "Max" }],
    icon: Microscope
  },
  { 
    id: 'braces', 
    title: "Braces & Alignment", 
    tamil: "பல் சீரமைப்பு", 
    img: "/dental_braces_orthodontics_1774466314667.png", 
    desc: "Corrective orthodontic treatments for both children and adults. We specialize in aesthetic ceramic braces and traditional metal braces to give you a perfectly confident smile.",
    metrics: [{ label: "Duration", value: "6m+" }, { label: "Alignment", value: "Perfect" }],
    icon: Activity
  },
  { 
    id: 'surgery', 
    title: "Tooth Impaction", 
    tamil: "தாக்கப்பட்ட பல்", 
    img: "/impacted_tooth_surgery_explanation_1774466382768.png", 
    desc: "Specialized removal of impacted wisdom teeth with minimal trauma. We use advanced surgical protocols to ensure zero nerve damage and rapid healing.",
    metrics: [{ label: "Nerve Safety", value: "100%" }, { label: "Recovery", value: "Fast" }],
    icon: ShieldCheck
  },
  { 
    id: 'crowns', 
    title: "Crown & Bridge", 
    tamil: "பல் கிரீடம்", 
    img: "/dental_crown_bridge_1774466347661.png", 
    desc: "High-grade restorative prosthetics to save damaged teeth and replace missing ones. We use Zirconia and E-max ceramics for highly natural-looking, durable results.",
    metrics: [{ label: "Aesthetic", value: "High" }, { label: "Durability", value: "Peak" }],
    icon: HeartPulse
  },
  { 
    id: 'pediatric', 
    title: "Pediatric Care", 
    tamil: "குழந்தைகள் சிகிச்சை", 
    img: "/pediatric_dentistry_child_happy_1774468124717.png", 
    desc: "Gentle, anxiety-free dental care for children of all ages. We focus on preventive dentistry and creating positive dental experiences for our smallest patients.",
    metrics: [{ label: "Friendly Env", value: "High" }, { label: "Child Smile", value: "100%" }],
    icon: Star
  },
];

export default function ServiceDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = React.use(params);
    const service = services.find(s => s.id === id) || services[0];
    
    return (
        <main className="min-h-screen">
            <Navbar />
            
            <section className="bg-white py-24 lg:py-32 relative overflow-hidden italic">
                <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/5 blur-[200px] rounded-full translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse"></div>
                <div className="container mx-auto px-10 relative z-10 flex flex-col lg:flex-row gap-20 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:w-1/2 flex flex-col gap-10"
                    >
                        <nav className="flex gap-4 text-[10px] font-black tracking-[0.4em] text-accent uppercase italic mb-4 decoration-accent/10 underline decoration-2 underline-offset-4 decoration-2">
                             <Link href="/">Home</Link> <span className="opacity-30">/</span> <Link href="/services">Treatments</Link> <span className="opacity-30">/</span> <span className="text-primary italic font-black uppercase tracking-widest">{service.title}</span>
                        </nav>
                        
                        <div className="space-y-4">
                           <h1 className="font-outfit text-5xl lg:text-7xl font-black text-primary leading-[0.9] tracking-tighter italic decoration-slate-900/5 underline decoration-4 underline-offset-[14px]">
                               Clinical <br/><span className="text-accent underline decoration-primary/5 decoration-4">{service.title}</span>
                           </h1>
                           <p className="font-outfit text-3xl text-primary font-black italic tracking-tighter origin-left decoration-slate-900/5 decoration-8 underline-offset-10 mt-4">
                              {service.tamil}
                           </p>
                        </div>
                        
                        <p className="text-lg text-slate-400 font-bold uppercase tracking-tighter decoration-accent/10 underline decoration-2 underline-offset-4 decoration-2 max-w-xl leading-relaxed italic italic-spacing selection:bg-accent/20">
                            {service.desc}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-8">
                           {service.metrics.map((m, idx) => (
                             <div key={idx} className="bg-slate-50 p-8 rounded-[40px] border border-slate-100/50 shadow-2xl transition-all hover:scale-105 group hover:border-accent">
                               <div className="text-4xl font-black text-primary mb-1 tracking-tighter italic group-hover:text-accent font-outfit">{m.value}</div>
                               <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] font-outfit">{m.label}</div>
                             </div>
                           ))}
                        </div>
                        
                        <div className="flex flex-wrap gap-8 mt-4">
                            <Link href="/appointment" className="group bg-primary text-white p-8 px-12 rounded-[32px] font-black text-xl shadow-2xl shadow-primary/30 hover:-translate-y-2 transition-all active:scale-95 italic-spacing tracking-tight uppercase tracking-widest flex items-center gap-4">
                                Book Procedure <Calendar className="text-accent transition-transform group-hover:rotate-12" size={24} />
                            </Link>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.85, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:w-1/2 relative group"
                    >
                        <div className="absolute inset-0 bg-indigo-100/40 blur-[150px] rounded-full animate-pulse transition-all group-hover:bg-indigo-200/40"></div>
                        <div className="relative z-10 p-4 bg-white/40 backdrop-blur-3xl rounded-[64px] border border-white shadow-2xl transition-all duration-700 hover:rotate-2">
                            <Image 
                                src={service.img} 
                                width={800} 
                                height={600} 
                                className="w-full rounded-[48px] shadow-2xl transform transition-transform duration-1000 group-hover:scale-[1.01]" 
                                alt={service.title} 
                                unoptimized
                            />
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[48px] shadow-2xl border border-slate-50 z-20 transition-transform hover:scale-110 duration-500 shadow-primary/10">
                             <service.icon size={40} className="text-primary group-hover:text-accent transition-colors" />
                             <div className="mt-4">
                               <span className="text-2xl font-black text-primary tracking-tighter italic block">{service.title}</span>
                               <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em] block mt-1">Procedure Type</span>
                             </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            
            <section className="py-24 bg-slate-50 italic overflow-hidden">
                <div className="container mx-auto px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex flex-col gap-10"
                        >
                            <h2 className="font-outfit text-4xl lg:text-6xl font-black text-primary leading-[0.9] tracking-tighter italic decoration-accent/10 underline decoration-4 underline-offset-8">Clinical Process</h2>
                            <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.4em] italic mb-4">Establishing Medical Excellence in Every Step</p>
                            <div className="space-y-8">
                                {[
                                    { step: "01", title: "Diagnostic Mapping", text: "Comprehensive digital scans and CBCT history check for procedural safety." },
                                    { step: "02", title: "Specialized Treatment", text: "Dr. Suresh, BDS (Dental Surgeon) led intervention using international clinical protocols." },
                                    { step: "03", title: "Recovery Guidance", text: "Post-procedural mapping and personalized healing protocols for zero-pain recovery." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-8 group">
                                        <div className="text-4xl font-black text-accent/20 group-hover:text-accent transition-colors italic">{item.step}</div>
                                        <div className="flex flex-col">
                                            <h4 className="font-outfit text-xl font-black text-primary tracking-tighter italic uppercase">{item.title}</h4>
                                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed italic">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="bg-white p-12 rounded-[56px] border border-slate-100/50 shadow-2xl relative group"
                        >
                            <div className="absolute -top-6 -right-6 bg-accent text-white p-6 rounded-2xl shadow-xl transition-transform group-hover:rotate-12">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="font-outfit text-3xl font-black text-primary mb-8 italic tracking-tighter uppercase decoration-slate-900/5 underline decoration-4 underline-offset-8">Clinical Assurance</h3>
                            <div className="space-y-6">
                                {[
                                    "High-grade clinical protocols for all tools",
                                    "Bio-compatible materials (Zirconia/E-max)",
                                    "Dr. Suresh, BDS's direct surgical supervision",
                                    "Advanced anxiety-free surgical modules",
                                    "Long-term restoration sustainability focus"
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center gap-4 group/item">
                                        <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center transition-all group-hover/item:w-10 group-hover/item:bg-accent group-hover/item:text-white">
                                            <ArrowRight size={10} />
                                        </div>
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] italic group-hover/item:text-primary transition-colors">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            
            <section className="py-24 bg-primary text-center italic overflow-hidden">
                 <div className="container mx-auto px-10 relative z-10">
                    <h2 className="font-outfit text-5xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter italic mb-10 decoration-white/5 underline decoration-4 underline-offset-[14px]">
                       Start Your <br/><span className="text-accent underline decoration-white/10 decoration-4">Recovery Today</span>
                    </h2>
                    <Link href="/appointment" className="inline-flex bg-accent text-white p-8 px-16 rounded-[40px] font-black text-2xl shadow-2xl shadow-accent/40 hover:-translate-y-2 transition-all active:scale-95 italic-spacing tracking-tight uppercase tracking-widest decoration-white/10 underline decoration-2 underline-offset-4">
                        Consult Dr. Suresh, BDS
                    </Link>
                    <p className="mt-12 text-white/40 text-[9px] uppercase font-black tracking-[0.4em] italic mb-2 leading-relaxed">Trusted Dental Care Since 1995 • Specialist Clinical Excellence • Salem</p>
                 </div>
            </section>
            
            <Footer />
        </main>
    );
}
