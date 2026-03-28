'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, Phone, CheckCircle, ShieldCheck, Star, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Appointment = () => {
    return (
        <section className="py-20 lg:py-24 bg-white relative overflow-hidden italic">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[200px] rounded-full translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse"></div>
            <div className="container mx-auto px-8 relative z-10 flex flex-col lg:flex-row gap-24 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:w-1/2 flex flex-col gap-8"
                >
                    <div className="flex items-center gap-3">
                        <span className="bg-accent/10 border border-accent/20 text-accent px-6 py-2 rounded-[20px] text-[10px] font-black tracking-[0.3em] uppercase italic transition-all hover:bg-accent/20">
                            Book Your Visit
                        </span>
                        <div className="h-[1px] w-20 bg-gradient-to-r from-accent/30 to-transparent"></div>
                    </div>
                    <h1 className="font-outfit text-4xl lg:text-5xl font-black text-primary leading-[0.9] tracking-tighter italic lg:-ml-1 decoration-slate-900/5 underline decoration-4 underline-offset-[14px]">
                        Gentle <br/><span className="text-accent underline decoration-primary/5 decoration-4">Priority Consultation</span>
                    </h1>
                    <p className="text-lg text-slate-400 font-bold uppercase tracking-tighter decoration-accent/10 underline decoration-2 underline-offset-4 decoration-2 max-w-lg leading-relaxed italic italic-spacing">
                        Register for a professional consultation with Dr. Suresh, MDS. We prioritize clinical excellence and procedural safety for every patient with 3 decades of surgical legacy.
                    </p>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] italic mb-4 max-w-md leading-relaxed">
                        By registering online, you ensure a priority diagnostic window. We recommend arriving 10 minutes early for initial bio-compatibility screening and digital history mapping. Our clinic follows Level 4 Sterilization for every consultation.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                         {[
                            { icon: Calendar, text: "Clinical Allocation", sub: "Select your preferred date window." },
                            { icon: ShieldCheck, text: "Procedural Safety", sub: "Sterilization Level 4+ Protocols." },
                            { icon: Star, text: "Expert Consultation", sub: "MDS Lead Specialist Supervision." },
                            { icon: CheckCircle, text: "Digital Mapping", sub: "CBCT Integrated Diagnostics." },
                         ].map((item, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-6 rounded-[32px] border border-slate-100/50 shadow-xl transition-all hover:scale-[1.02] group hover:border-accent"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="p-3 bg-primary/5 text-primary rounded-xl group-hover:bg-accent group-hover:text-white transition-all">
                                        <item.icon size={18} />
                                    </div>
                                    <span className="font-black text-slate-500 text-[9px] uppercase tracking-[0.3em] italic leading-none">{item.text}</span>
                                </div>
                                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed italic">{item.sub}</p>
                            </motion.div>
                         ))}
                    </div>

                    <div className="mt-10 p-8 bg-slate-50 rounded-[40px] border border-slate-100/50 italic group">
                       <h4 className="font-outfit text-xl font-black text-primary mb-3 tracking-tighter decoration-accent/10 underline decoration-2 underline-offset-4">Clinical Preparedness</h4>
                       <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.2em] leading-relaxed">
                         Please carry any previous dental X-rays or medical reports. For pediatric consultations, ensure the child is relaxed; our staff specializes in clinical anxiety management modules. Open Mon-Sat: 6:00 PM - 8:30 PM.
                       </p>
                    </div>
                </motion.div>

                <div className="lg:w-1/2 bg-slate-50 p-10 rounded-[48px] border border-slate-100/50 shadow-2xl relative group ring-1 ring-slate-900/5">
                    <div className="absolute top-8 right-8 bg-white/40 backdrop-blur-2xl p-4 rounded-2xl text-accent shadow-2xl transition-transform group-hover:rotate-12 z-20">
                        <Calendar size={24} />
                    </div>
                    <h2 className="font-outfit text-2xl font-black text-primary mb-10 italic tracking-tighter uppercase decoration-slate-900/5 underline decoration-4 underline-offset-8 relative z-10">Consulting Form</h2>
                    
                    <form className="space-y-8 relative z-10">
                        <div className="space-y-6">
                            {[
                                { icon: User, label: "Full Name", placeholder: "Patient Name", name: "name" },
                                { icon: Phone, label: "Phone Number", placeholder: "+91", name: "phone" },
                            ].map((field, idx) => (
                                <div key={idx} className="flex flex-col gap-3 group">
                                    <label className="font-black text-slate-400 text-[9px] uppercase tracking-[0.4em] italic mb-1 group-focus-within:text-accent transition-colors">
                                        {field.label}
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-accent transition-colors">
                                           <field.icon size={16} />
                                        </div>
                                        <input 
                                            type="text" 
                                            placeholder={field.placeholder}
                                            className="w-full bg-white p-6 pl-14 rounded-[24px] border border-slate-100 shadow-inner focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all font-black text-lg italic tracking-tighter placeholder:opacity-30"
                                        />
                                    </div>
                                </div>
                            ))}
                            <div className="flex flex-col gap-3 group">
                                <label className="font-black text-slate-400 text-[9px] uppercase tracking-[0.4em] italic mb-1 group-hover:text-accent transition-colors">Select Procedure</label>
                                <select className="w-full bg-white p-6 rounded-[24px] border border-slate-100 shadow-inner focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all font-black text-lg italic tracking-tighter appearance-none cursor-pointer">
                                    <option>General Checkup</option>
                                    <option>Root Canal</option>
                                    <option>Dental Implants</option>
                                    <option>Surgical Extraction</option>
                                    <option>Braces & Alignment</option>
                                </select>
                            </div>
                        </div>
                        <button className="w-full bg-primary text-white p-6 rounded-[24px] font-black text-lg shadow-2xl shadow-primary/30 hover:-translate-y-2 transition-all active:scale-95 italic-spacing tracking-tight uppercase tracking-widest flex items-center justify-center gap-3 group/btn">
                           Register Visit <ArrowRight className="text-accent group-hover/btn:translate-x-1 transition-transform" size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default function AppointmentPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Appointment />
            <Footer />
        </main>
    );
}
