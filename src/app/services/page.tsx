'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, HeartPulse, Microscope, Activity, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ServicesListing = () => {
    const services = [
        { 
          id: 'root-canal', 
          category: "Common", 
          title: "Root Canal", 
          tamil: "ரூட் கெனால்", 
          img: "/root_canal_procedure_modern_1774466412654.png", 
          desc: "Expert, painless treatment to save your natural tooth with 30 years of endodontic precision.", 
          icon: HeartPulse 
        },
        { 
          id: 'implants', 
          category: "Surgical", 
          title: "Dental Implants", 
          tamil: "பல் இம்ப்ளான்ட்", 
          img: "/dental_implant_closeup_1774466284954.png", 
          desc: "Digital precise extraction for maximum safety and high-grade titanium implants.", 
          icon: Microscope 
        },
        { 
          id: 'braces', 
          category: "Orthodontics", 
          title: "Braces & Alignment", 
          tamil: "பல் சீரமைப்பு", 
          img: "/dental_braces_orthodontics_1774466314667.png", 
          desc: "Corrective treatments for a perfect, healthy smile using aesthetic ceramic and traditional braces.", 
          icon: Activity 
        },
        { 
          id: 'surgery', 
          category: "Surgical", 
          title: "Tooth Impaction", 
          tamil: "தாக்கப்பட்ட பல்", 
          img: "/impacted_tooth_surgery_explanation_1774466382768.png", 
          desc: "Gentle surgical removal of impacted wisdom teeth with zero nerve damage guarantee.", 
          icon: ShieldCheck 
        },
        { 
          id: 'crowns', 
          category: "Restorative", 
          title: "Crown & Bridge", 
          tamil: "பல் கிரீடம்", 
          img: "/dental_crown_bridge_1774466347661.png", 
          desc: "High-grade prosthetics for tooth restoration using Zirconia and E-max ceramic.", 
          icon: HeartPulse 
        },
        { 
          id: 'pediatric', 
          category: "Common", 
          title: "Pediatric Care", 
          tamil: "குழந்தைகள் சிகிச்சை", 
          img: "/pediatric_dentistry_child_happy_1774468124717.png", 
          desc: "Gentle and friendly care for your little ones in an anxiety-free environment.", 
          icon: Star 
        },
    ];

    return (
        <section className="py-20 lg:py-24 bg-white min-h-screen relative overflow-hidden italic">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[200px] rounded-full translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse"></div>
            <div className="container mx-auto px-8 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto flex flex-col items-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="flex flex-col gap-6"
                    >
                      <h1 className="font-outfit text-4xl lg:text-5xl font-black text-primary leading-[0.9] tracking-tighter italic lg:-ml-1 decoration-slate-900/5 underline decoration-4 underline-offset-[14px]">
                          Clinical <br/><span className="text-accent underline decoration-primary/5 decoration-4">Specialties</span>
                      </h1>
                      <p className="font-outfit text-xl lg:text-2xl text-primary font-black tracking-tighter opacity-80 decoration-slate-900/5 decoration-4 underline-offset-4 italic">சிறப்பு பல் மருத்துவ சேவைகள்</p>
                      <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] italic max-w-xl mx-auto leading-relaxed">
                        Under the expert MDS leadership of Dr. L. Suresh, KSV Dental Clinic provides a full spectrum of high-grade restorative and surgical treatments. We specialize in digital-first procedures that minimize recovery time while maximizing clinical outcomes.
                      </p>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group bg-white rounded-[48px] border border-slate-100/50 p-3 shadow-2xl transition-all duration-700 hover:shadow-primary/10 hover:-translate-y-2"
                        >
                            <Link href={`/services/${service.id}`} className="block relative overflow-hidden rounded-[40px] aspect-[4/3] shadow-inner ring-1 ring-slate-900/5 transition-transform group-hover:scale-[1.01] duration-700">
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-700"></div>
                                <div className="absolute top-4 left-4 z-20 bg-white/40 backdrop-blur-xl p-3 rounded-2xl border border-white/50 text-white shadow-2xl transform transition-transform group-hover:scale-110">
                                   <service.icon size={20} className="text-primary group-hover:text-accent transition-colors" />
                                </div>
                                <Image 
                                    src={service.img} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 brightness-[0.85] group-hover:brightness-100" 
                                    alt={service.title} 
                                    fill
                                    unoptimized
                                />
                            </Link>
                            <div className="px-8 py-10 flex flex-col gap-3">
                                <div className="flex flex-col">
                                   <h3 className="font-outfit text-xl lg:text-2xl font-black text-primary transition-colors group-hover:text-accent tracking-tighter selection:bg-accent/20">
                                       {service.title}
                                   </h3>
                                   <div className="text-accent font-outfit text-lg font-black italic-spacing mb-1 underline decoration-accent/20 underline-offset-4 decoration-2">
                                    {service.tamil}
                                </div>
                                </div>
                                <p className="text-slate-400 text-[10px] leading-relaxed group-hover:text-slate-600 transition-colors uppercase font-black tracking-[0.2em] decoration-accent/10 underline decoration-2 underline-offset-4 decoration-2 italic mb-4">
                                    {service.desc}
                                </p>
                                <div className="flex flex-col gap-4 mb-6 pt-4 border-t border-slate-50">
                                   <div className="flex items-center gap-2">
                                      <div className="w-1 h-1 bg-accent rounded-full"></div>
                                      <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest italic">Digital Mapping Enabled</span>
                                   </div>
                                </div>
                                <Link 
                                    href={`/services/${service.id}`} 
                                    className="flex items-center gap-3 text-primary font-black uppercase text-[9px] tracking-[0.4em] italic-spacing transition-all group-hover:gap-4 group-hover:text-accent hover:translate-x-2"
                                >
                                    Start Procedure <ArrowRight className="text-accent group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <div className="mt-24 text-center flex flex-col items-center gap-10">
                   <div className="max-w-2xl bg-slate-50 p-12 rounded-[56px] border border-slate-100/50 shadow-2xl relative group">
                      <div className="absolute -top-6 -left-6 bg-accent text-white p-4 rounded-2xl shadow-xl transition-transform group-hover:rotate-12">
                         <ShieldCheck size={24} />
                      </div>
                      <h4 className="font-outfit text-2xl font-black text-primary mb-4 italic tracking-tighter">Clinical Assurance</h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em] italic leading-relaxed">
                        Every service listed is performed under Dr. Suresh's direct supervision, utilizing biocompatible materials and digital diagnostics to ensure international standards of dental healthcare.
                      </p>
                   </div>
                   <Link href="/appointment" className="bg-primary text-white p-8 px-12 rounded-[32px] font-black text-2xl shadow-2xl shadow-primary/30 hover:-translate-y-2 transition-all active:scale-95 italic-spacing tracking-tight uppercase tracking-widest decoration-white/10 underline decoration-2 underline-offset-6">
                     Consult Dr. Suresh
                   </Link>
                </div>
            </div>
        </section>
    );
};

export default function ServicesPage() {
    return (
        <main>
            <Navbar />
            <ServicesListing />
            <Footer />
        </main>
    );
}
