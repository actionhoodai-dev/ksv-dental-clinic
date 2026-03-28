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
        { id: 1, title: "Modern Clinical Hub", tamil: "மருத்துவமனை", img: "/modern_dental_operatory_1774618733698.png" },
        { id: 2, title: "Digital Diagnostics", tamil: "மின்நிலை கண்டறிதல்", img: "/digital_dentistry_mapping_1774618825873.png" },
        { id: 3, title: "Hospital Reception", tamil: "வரவேற்பு அறை", img: "/premium_clinic_reception_1774618904312.png" },
        { id: 4, title: "Surgical Precision", tamil: "அறுவை சிகிச்சை", img: "/sterile_dental_instruments_1774618989338.png" },
        { id: 5, title: "Patient Consultation", tamil: "நோயாளி ஆலோசனை", img: "/patient_consultation_warm_1774619143038.png" },
        { id: 6, title: "Specialized Infrastructure", tamil: "சிறப்பு கட்டமைப்பு", img: "/clinic_interior_1772036674056.png" },
    ];

    return (
        <section className="py-20 lg:py-24 bg-white relative overflow-hidden italic">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[200px] rounded-full translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse"></div>
            <div className="container mx-auto px-8 relative z-10 flex flex-col items-center">
                <div className="text-center mb-20 max-w-3xl mx-auto flex flex-col items-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="flex flex-col gap-6"
                    >
                      <h1 className="font-outfit text-4xl md:text-7xl font-black text-primary leading-[0.9] tracking-tighter italic">
                          Clinical <br/><span className="text-accent underline decoration-primary/5 decoration-4 md:underline-offset-[12px] underline-offset-8">Gallery</span>
                      </h1>
                      <p className="text-lg md:text-xl text-slate-400 font-black italic tracking-widest decoration-accent/10 underline decoration-2 underline-offset-4 decoration-2 uppercase mb-2 transition-colors hover:text-slate-600">
                          30 Years of Procedural Success • Digital Diagnostics
                      </p>
                      <p className="font-outfit text-2xl md:text-3xl text-primary font-black italic tracking-tighter origin-center decoration-slate-900/5 decoration-4 underline-offset-4 md:scale-x-110">மருத்துவ சிகிச்சை புகைப்படங்கள்</p>
                      <p className="text-[9px] md:text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] italic max-w-xl mx-auto leading-relaxed px-4">
                         Explore our clinical breakthroughs in digital endodontics and complex surgical extractions. Every image represents a journey from pain to a perfect, healthy smile.
                      </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-4">
                    {images.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative rounded-[40px] md:rounded-[48px] overflow-hidden border-[8px] md:border-[12px] border-white shadow-2xl transition-all duration-700 hover:shadow-primary/10 hover:-translate-y-2 ring-1 ring-slate-900/5 aspect-square"
                        >
                            <Image 
                                src={item.img} 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.9] group-hover:brightness-100" 
                                alt={item.title} 
                                fill
                                unoptimized
                            />
                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-primary/95 via-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center text-center backdrop-blur-sm duration-500">
                                <h4 className="text-white font-outfit text-2xl font-black italic-spacing mb-1 underline decoration-accent/20 underline-offset-4 decoration-2 italic uppercase">
                                   {item.title}
                                </h4>
                                <p className="text-accent font-black text-[9px] tracking-[0.4em] uppercase">{item.tamil}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <div className="mt-24 text-center flex flex-col items-center gap-10">
                   <p className="text-slate-400 font-bold uppercase tracking-[0.4em] text-[9px] italic">Ready for your transformation?</p>
                   <Link href="/appointment" className="bg-primary text-white p-8 px-12 rounded-[32px] font-black text-2xl shadow-2xl shadow-primary/30 hover:-translate-y-2 transition-all active:scale-95 italic-spacing tracking-tight uppercase tracking-widest decoration-white/10 underline decoration-2 underline-offset-6">
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
