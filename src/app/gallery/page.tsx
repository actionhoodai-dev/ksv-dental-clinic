'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Shovel, ShieldCheck, HeartPulse, Microscope, Activity, Star, Calendar, ArrowRight, Image as ImageIcon } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Gallery = () => {
    const images = [
        { id: 1, title: "Precision Instruments", tamil: "துல்லியமான கருவிகள்", img: "/dental_mirror_macro.png" },
        { id: 2, title: "Clinical Workspace", tamil: "மருத்துவ பணிமனை", img: "/clinical_chair_detail.png" },
        { id: 3, title: "Hygiene Standards", tamil: "சுகாதார தரநிலைகள்", img: "/sterile_instrument_tray.png" },
        { id: 4, title: "Procedural Lighting", tamil: "சிகிச்சை ஒளி", img: "/surgical_light_abstract.png" },
        { id: 5, title: "Medical Supplies", tamil: "மருத்துவ பொருட்கள்", img: "/clinical_supplies_detail.png" },
        { id: 6, title: "Dental Health", tamil: "பல் ஆரோக்கியம்", img: "/healthy_teeth_macro_clinical.png" },
    ];

    return (
        <section className="bg-slate-50 py-20 lg:py-24 relative overflow-hidden italic min-h-screen">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[200px] rounded-full translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse"></div>
            <div className="container mx-auto px-8 relative z-10 text-center mb-20">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="flex flex-col gap-6"
                >
                  <h1 className="font-outfit text-4xl lg:text-5xl font-black text-primary leading-[0.9] tracking-tighter italic">
                      Clinical <br/><span className="text-accent underline decoration-primary/5 decoration-4 md:underline-offset-[12px] underline-offset-8">Details</span>
                  </h1>
                  <p className="text-lg md:text-xl text-slate-400 font-black italic tracking-widest decoration-accent/10 underline decoration-2 underline-offset-4 decoration-2 uppercase mb-2 transition-colors hover:text-slate-600">
                      30 Years of Procedural Success • Trusted Care
                  </p>
                  <p className="font-outfit text-xl lg:text-2xl text-primary font-black italic tracking-tighter origin-center decoration-slate-900/5 decoration-4 underline-offset-4 md:scale-x-110">மருத்துவ சிகிச்சை விவரங்கள்</p>
                  <p className="text-[9px] md:text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] italic max-w-xl mx-auto leading-relaxed px-4">
                     Explore the specialized tools and pristine environment behind our clinical excellence. Every detail is managed with Dr. Suresh's MDS-level expertise and strict hygiene protocols.
                  </p>
                </motion.div>
            </div>

            <div className="container mx-auto px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {images.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative rounded-[40px] md:rounded-[48px] overflow-hidden border-[8px] md:border-[12px] border-white shadow-2xl transition-all duration-700 hover:shadow-primary/10 hover:-translate-y-2 ring-1 ring-slate-900/5 aspect-square"
                        >
                            <img 
                                src={item.img} 
                                alt={item.title} 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.9] group-hover:brightness-100" 
                            />
                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-primary/95 via-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center text-center backdrop-blur-sm duration-500">
                                <h4 className="text-white font-outfit text-xl font-black italic-spacing mb-1 underline decoration-accent/20 underline-offset-4 decoration-2 italic uppercase">
                                   {item.title}
                                </h4>
                                <p className="text-accent font-black text-[9px] tracking-[0.4em] uppercase">{item.tamil}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            <div className="container mx-auto px-8 relative z-10 mt-24 text-center">
               <div className="flex flex-col items-center gap-10">
                  <p className="text-slate-400 font-bold uppercase tracking-[0.4em] text-[9px] italic">Ready for your transformation?</p>
                  <Link href="/appointment" className="bg-primary text-white p-6 px-10 rounded-[32px] font-black text-xl shadow-2xl shadow-primary/30 hover:-translate-y-2 transition-all active:scale-95 italic-spacing tracking-tight uppercase tracking-widest decoration-white/10 underline decoration-2 underline-offset-6">
                    Book Consulting
                  </Link>
               </div>
            </div>
        </section>
    );
};

export default function GalleryPage() {
    return (
        <main>
            <Navbar />
            <Gallery />
            <Footer />
        </main>
    );
}
