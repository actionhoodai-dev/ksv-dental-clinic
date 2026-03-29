'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Stethoscope, Clock, Phone, HeartPulse, Microscope, Activity, Star, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <section className="bg-white py-20 lg:py-24 relative overflow-hidden italic">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[200px] rounded-full translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse"></div>
      <div className="container mx-auto px-8 relative z-10 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl flex flex-col gap-8 text-center items-center"
        >
          <div className="flex items-center gap-3">
            <span className="bg-accent/10 border border-accent/20 text-accent px-6 py-2 rounded-[20px] text-[10px] font-black tracking-[0.3em] uppercase italic transition-all hover:bg-accent/20">
              Clinical Legacy
            </span>
            <div className="h-[1px] w-20 bg-gradient-to-r from-accent/30 to-transparent"></div>
          </div>
          <h1 className="font-outfit text-4xl lg:text-5xl font-black text-primary leading-[0.9] tracking-tighter italic lg:-ml-1 decoration-slate-900/5 underline decoration-4 underline-offset-[14px]">
            Decades of <br/><span className="text-accent underline decoration-primary/5 decoration-4">Surgical Mastery</span>
          </h1>
          <div className="space-y-6">
            <p className="font-outfit text-xl lg:text-2xl text-primary font-black tracking-tighter opacity-80 decoration-slate-900/5 decoration-4 underline-offset-8 italic">
               கே.எஸ்.வி பல் மருத்துவமனை
            </p>
            <p className="text-lg text-slate-500 max-w-2xl leading-relaxed font-bold uppercase tracking-tighter decoration-accent/10 underline decoration-2 underline-offset-4 decoration-2 italic italic-spacing selection:bg-accent/20 text-justify">
              Founded in 1995 with a vision to provide specialized dental care, KSV Dental Clinic has become a benchmark for medical excellence. Under the leadership of Dr. L. Suresh, BDS (Dental Surgeon), we integrate 3 decades of expertise with modern digital precision.
            </p>
            <div className="space-y-4 text-slate-400 font-black uppercase tracking-[0.3em] italic leading-relaxed text-justify max-w-2xl mx-auto">
               <p>
                 Dr. Suresh, BDS's journey began with a commitment to pain-free dentistry. Over 30 years, he has successfully treated thousands of complex endodontic and surgical extraction cases, carving a niche in high-grade restorative treatments in the region.
               </p>
               <p className="border-t border-accent/20 pt-4">
                 Our mission is simple: to provide international-standard dental care with a gentle touch. We believe that every patient deserves a safe, sterile, and anxiety-free clinical environment.
               </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 w-full max-w-2xl">
              <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100/50 shadow-2xl transition-all hover:scale-105 group hover:border-accent">
                <div className="text-3xl font-black text-primary mb-1 tracking-tighter italic group-hover:text-accent font-outfit">30+</div>
                <div className="text-[8px] font-black text-slate-400 uppercase tracking-[0.4em] font-outfit">Clinical Years</div>
              </div>
              <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100/50 shadow-2xl transition-all hover:scale-105 group hover:border-accent">
                <div className="text-3xl font-black text-accent mb-1 tracking-tighter italic group-hover:text-primary font-outfit">1,000+</div>
                <div className="text-[8px] font-black text-slate-400 uppercase tracking-[0.4em] font-outfit">Successful Procedures</div>
              </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <About />
      <Footer />
    </main>
  );
}
