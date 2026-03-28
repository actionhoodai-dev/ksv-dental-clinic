'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ArrowRight, UserCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
    return (
        <section className="py-20 lg:py-24 bg-white relative overflow-hidden italic">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[200px] rounded-full translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse"></div>
            <div className="container mx-auto px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col gap-8"
                    >
                        <div className="flex items-center gap-3">
                            <span className="bg-accent/10 border border-accent/20 text-accent px-6 py-2 rounded-[20px] text-[10px] font-black tracking-[0.3em] uppercase italic transition-all hover:bg-accent/20">
                                Connect With Us
                            </span>
                            <div className="h-[1px] w-20 bg-gradient-to-r from-accent/30 to-transparent"></div>
                        </div>
                        <h1 className="font-outfit text-5xl lg:text-7xl font-black text-primary leading-[0.9] tracking-tighter italic lg:-ml-1 decoration-slate-900/5 underline decoration-4 underline-offset-[14px]">
                            Let's <br/><span className="text-accent underline decoration-primary/5 decoration-4">Connect</span>
                        </h1>
                        <p className="text-lg text-slate-400 font-bold uppercase tracking-tighter decoration-accent/10 underline decoration-2 underline-offset-4 decoration-2 max-w-lg leading-relaxed italic italic-spacing transition-colors hover:text-slate-600">
                             Visit us for world-class dental care in a comfortable environment. Professional treatments with Dr. Suresh's 30 years of expertise and international-standard sterilization.
                        </p>
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] italic mb-4 max-w-md leading-relaxed">
                            Located centrally for your convenience, KSV Dental Clinic is the region's benchmark for specialized restorative care. We ensure every patient receives personalized diagnostic mapping before any procedure begins.
                        </p>
                        
                        <div className="space-y-8">
                            {[
                                { icon: UserCheck, title: "Clinical Specialist", value: "Dr. L. Suresh, MDS", sub: "30+ Years Surgical Experience", color: "primary" },
                                { icon: MapPin, title: "Clinical Location", value: "KSV Dental Clinic", sub: "Salem", color: "accent" },
                                { icon: Phone, title: "Consulting Helpline", value: "+91 94880 21937", sub: "Mon-Sat: 6PM - 8:30PM", color: "primary" },
                            ].map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-8 items-start group"
                                >
                                    <div className={`w-14 h-14 bg-${item.color}/10 text-${item.color} flex items-center justify-center rounded-[20px] shadow-2xl transition-transform group-hover:scale-110 shadow-${item.color}/10`}>
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <p className="font-black text-slate-500 text-[9px] uppercase tracking-[0.4em] mb-2 italic leading-none">{item.title}</p>
                                         <p className="font-outfit text-xl lg:text-2xl font-black text-primary group-hover:text-accent transition-colors tracking-tighter italic leading-none">{item.value}</p>
                                         <p className="text-[8px] font-black text-slate-400 uppercase tracking-[0.3em] mt-1.5 italic transition-colors hover:text-slate-600 leading-none">{item.sub}</p>
                                     </div>
                                 </motion.div>
                             ))}
                         </div>
                     </motion.div>

                     <div className="flex flex-col gap-10">
                        <motion.div 
                           initial={{ opacity: 0, scale: 0.95 }}
                           whileInView={{ opacity: 1, scale: 1 }}
                           className="bg-slate-50 p-6 lg:p-10 rounded-[48px] border border-slate-100/50 shadow-2xl transition-all hover:shadow-primary/5 relative group"
                        >
                            <div className="absolute top-6 right-6 lg:top-8 lg:right-8 bg-white/40 backdrop-blur-2xl p-3 lg:p-4 rounded-2xl text-accent shadow-2xl transition-transform group-hover:rotate-12">
                               <MapPin size={24} />
                            </div>
                            <h2 className="font-outfit text-2xl lg:text-3xl font-black text-primary mb-8 italic tracking-tighter uppercase decoration-slate-900/5 underline decoration-4 underline-offset-8 pr-12 lg:pr-0">Find The Clinic</h2>
                           <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest italic mb-6">Central Clinical Landmark for Advanced Care</p>
                           <div className="w-full aspect-video bg-white/40 backdrop-blur-3xl rounded-[32px] overflow-hidden shadow-inner border-[8px] border-white italic transition-transform group-hover:scale-[1.01] duration-700">
                               <iframe 
                                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d488.35442537239794!2d78.17293520369482!3d11.706067806011859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf16a65bc7919%3A0x49580e7d0408b44a!2sKSV%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1774692144762!5m2!1sen!2sin" 
                                 width="100%" 
                                 height="100%" 
                                 style={{ border: 0 }} 
                                 allowFullScreen 
                                 loading="lazy" 
                                 referrerPolicy="no-referrer-when-downgrade"
                               ></iframe>
                           </div>
                           <div className="mt-10 flex justify-between items-center group/btn">
                              <div className="flex flex-col">
                                 <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.3em] italic">Open Daily</span>
                                 <span className="text-xl font-black text-primary italic">6:00 PM - 8:30 PM</span>
                              </div>
                              <Link href="/appointment" className="bg-primary text-white p-4 px-8 rounded-[24px] font-black text-xs uppercase italic shadow-2xl shadow-primary/20 hover:-translate-y-1 transition-all flex items-center gap-3">
                                Start Consultation <ArrowRight className="text-accent group-hover/btn:translate-x-1 transition-transform" size={14} />
                              </Link>
                           </div>
                       </motion.div>
                       <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] italic text-center max-w-sm mx-auto leading-relaxed">
                         Emergency cases handled with priority within clinical hours. For after-hours guidance, please use our online consulting registration for next-day priority.
                       </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Contact />
            <Footer />
        </main>
    );
}
