'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Stethoscope, Clock, Phone, ArrowRight, Star, Activity, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden italic">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-white ring-1 ring-slate-100/10"></div>
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10 animate-pulse"></div>
      
      <div className="container mx-auto px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="flex items-center gap-3">
            <span className="bg-accent/10 border border-accent/20 text-accent px-6 py-2 rounded-[20px] text-[10px] font-black tracking-[0.3em] uppercase italic transition-all hover:bg-accent/20">
              30+ Years Legacy
            </span>
            <div className="h-[1px] w-20 bg-gradient-to-r from-accent/30 to-transparent"></div>
          </div>
          <h1 className="font-outfit text-4xl lg:text-5xl font-black text-primary leading-[0.9] tracking-tighter italic lg:-ml-1">
            Gentle <br/>
            <span className="text-accent underline decoration-primary/5 decoration-4 underline-offset-[12px]">Precision</span>
          </h1>
          <div className="space-y-4">
            <p className="font-outfit text-xl lg:text-2xl text-primary font-black tracking-tighter opacity-80 decoration-slate-900/5 decoration-4 underline-offset-4 italic">
               கே.எஸ்.வி பல் மருத்துவமனை
            </p>
            <p className="text-lg text-slate-500 max-w-lg leading-relaxed font-bold uppercase tracking-tighter decoration-accent/10 underline decoration-2 underline-offset-4 decoration-2 italic italic-spacing">
              Providing medical-grade restorative dentistry under the legacy of Dr. L. Suresh, BDS (Dental Surgeon) since 1995. Experience clinical precision and a gentle touch.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 items-center">
            <Link href="/appointment" className="group relative bg-primary text-white p-6 px-10 rounded-[32px] font-black text-xl shadow-2xl shadow-primary/40 hover:-translate-y-2 transition-all active:scale-95 italic tracking-tight uppercase tracking-widest overflow-hidden">
               <span className="relative z-10 flex items-center gap-3 text-sm text-balance">Consult Dr. L. Suresh, BDS <ArrowRight className="text-accent transition-transform group-hover:translate-x-2" size={18} /></span>
               <div className="absolute inset-0 bg-primary-dark opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link> 
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 bg-indigo-100/30 blur-[150px] rounded-full animate-pulse z-0"></div>
          <div className="relative z-10 p-4 bg-white/40 backdrop-blur-3xl rounded-[64px] border border-white shadow-2xl ring-1 ring-slate-900/5 transition-transform hover:scale-[1.01] duration-1000">
             <img 
                src="/dental_mirror_macro.png" 
                className="w-full rounded-[48px] shadow-2xl" 
                alt="Clinical Precision" 
             />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[40px] shadow-2xl border border-slate-50 z-20 transition-transform hover:scale-110 duration-500 ring-1 ring-slate-900/5">
             <div className="flex items-center gap-4 mb-1">
               <ShieldCheck size={32} className="text-primary" />
               <div className="flex flex-col">
                 <span className="text-4xl font-black text-accent tracking-tighter italic">30+</span>
                 <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.4em] italic mb-1">Clinical Years</span>
               </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Metrics = () => {
  const data = [
    { title: "Specialties", value: "6+", icon: Stethoscope },
    { title: "Surgical Success", value: "1,000+", icon: ShieldCheck },
    { title: "Consulting Hours", value: "Check Branches", icon: Clock },
    { title: "Clinical Standards", value: "9+ STARS", icon: Star },
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-50 overflow-hidden italic">
      <div className="container mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
         {data.map((item, i) => (
           <motion.div 
             key={i}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="flex flex-col items-center text-center gap-4 p-8 rounded-[40px] border border-slate-50 hover:border-accent group transition-all hover:scale-105"
           >
              <div className="w-16 h-16 bg-primary/5 text-primary flex items-center justify-center rounded-[20px] group-hover:bg-accent group-hover:text-white transition-all">
                <item.icon size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-primary group-hover:text-accent transition-colors tracking-tighter italic">{item.value}</span>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mt-1.5 italic">{item.title}</span>
              </div>
           </motion.div>
         ))}
      </div>
    </section>
  );
};

const ClinicalTrust = () => {
    const points = [
        { label: "Clinical Excellence", val: "30+ Years", detail: "Dedicated medical precision since 1995. Focused on procedural safety and gentle patient outcomes.", icon: ShieldCheck },
        { label: "Surgical Mastery", val: "Expert Lead", detail: "Led by a specialist with 3 decades of procedural expertise in root canals and tooth impactions.", icon: Stethoscope },
        { label: "Pristine Standards", val: "Level 4 Hygiene", detail: "Strict sterilization protocols ensuring 100% patient safety during every procedure.", icon: Activity },
        { label: "Procedural Trust", val: "1,000+ Cases", detail: "Trusted by thousands for specialized dental restoration and high-grade clinical outcomes.", icon: Star }
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden italic">
            <div className="container mx-auto px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="lg:w-1/2 flex flex-col gap-8"
                    >
                         <h2 className="font-outfit text-4xl lg:text-5xl font-black text-primary leading-[0.9] tracking-tighter italic decoration-slate-900/5 underline decoration-4 underline-offset-[12px]">
                            Why Trust <br/><span className="text-accent underline decoration-primary/5 decoration-4">Our Clinic?</span>
                         </h2>
                         <p className="text-lg text-slate-500 font-bold uppercase tracking-tighter leading-relaxed max-w-lg italic italic-spacing selection:bg-accent/20">
                            We bridge the gap between traditional expert care and modern digital dentistry. Every procedure is a blend of 3 decades of experience and zero-pain technology. Our specialized focus on Endodontics and Tooth Impaction ensures maximum safety.
                         </p>
                         <p className="text-xs text-slate-400 font-black uppercase tracking-[0.3em] italic mb-4 max-w-md">
                             KSV Dental Clinic is recognized for its uncompromising sterilization standards and B.D.S. (Dental Surgeon) led surgical expertise. We provide a sanctuary for anxious patients seeking high-grade dental restoration.
                         </p>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                             {points.map((p, i) => (
                                 <div key={i} className="flex gap-4 items-start group">
                                     <div className="p-3 bg-white rounded-2xl shadow-xl transition-transform group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
                                         <p.icon size={20} className="text-primary group-hover:text-white" />
                                     </div>
                                     <div className="flex flex-col">
                                         <span className="text-xl font-black text-primary tracking-tighter italic leading-none group-hover:text-accent transition-colors">{p.val}</span>
                                         <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mt-1 italic">{p.label}</span>
                                     </div>
                                 </div>
                             ))}
                         </div>
                    </motion.div>
                    
                </div>
            </div>
        </section>
    );
};

const ClinicalNetwork = () => {
    const branches = [
        { 
            name: "Modern Theatre Branch", 
            location: "Yercaud Main Road", 
            address: "Shop No.- TK-3, Venkatathri Nilayam, Yercaud Main Road, Near Modern Theatre, Salem-636008",
            phone: "+91 94880 21937",
            hours: "6:00 PM - 8:30 PM",
            map: "https://www.google.com/maps/search/?api=1&query=Venkatathri+Nilayam+Yercaud+Main+Road+Salem"
        },
        { 
            name: "Omalur Branch", 
            location: "Near Taluk Office", 
            address: "87/6, Swaminathan Complex, near Taluk Office, Omalur",
            phone: "+91 94880 21937",
            hours: "10:00 AM - 2:00 PM",
            map: "https://www.google.com/maps/search/?api=1&query=Swaminathan+Complex+Omalur+Taluk+Office"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden italic">
            <div className="container mx-auto px-8 relative z-10">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="font-outfit text-4xl lg:text-5xl font-black text-primary leading-[0.9] tracking-tighter italic decoration-slate-900/5 underline decoration-4 underline-offset-[12px] mb-6">
                        Our <br/><span className="text-accent underline decoration-primary/5 decoration-4">Clinical Network</span>
                    </h2>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.4em] italic leading-relaxed max-w-lg">
                        Strategic dental hubs delivering the legacy of Dr. Suresh, BDS across Salem and Omalur. Every branch maintains Level 4+ Sterilization standards.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {branches.map((branch, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-slate-50 p-10 rounded-[48px] border border-slate-100 shadow-2xl relative group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full translate-x-12 -translate-y-12 group-hover:bg-accent/10 transition-colors"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-4 bg-white rounded-2xl shadow-xl text-primary group-hover:bg-accent group-hover:text-white transition-all transform group-hover:rotate-12">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-2xl font-black text-primary tracking-tighter italic leading-none group-hover:text-accent transition-colors">{branch.name}</span>
                                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mt-1.5 italic">{branch.location}</span>
                                    </div>
                                </div>
                                <div className="space-y-4 mb-10">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-[1px] h-full bg-accent/20"></div>
                                        <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest leading-relaxed italic">{branch.address}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Phone size={14} className="text-accent" />
                                        <span className="text-sm font-black text-primary italic tracking-tight uppercase group-hover:text-accent transition-colors">{branch.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Clock size={14} className="text-slate-400" />
                                        <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.4em] italic">{branch.hours}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="flex-1 bg-primary text-white p-4 rounded-2xl font-black text-[10px] uppercase italic shadow-xl shadow-primary/20 text-center hover:bg-primary-dark transition-all active:scale-95">
                                        Call Branch
                                    </a>
                                    <a href={branch.map} target="_blank" rel="noopener noreferrer" className="flex-1 bg-white border border-slate-200 p-4 rounded-2xl font-black text-[10px] text-primary uppercase italic shadow-xl shadow-slate-200/50 text-center hover:border-accent hover:text-accent transition-all active:scale-95">
                                        Get Directions
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FinalCTA = () => (
    <section className="py-24 bg-primary relative overflow-hidden italic">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 blur-[200px] rounded-full translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="container mx-auto px-8 relative z-10 text-center">
            <h2 className="font-outfit text-4xl lg:text-5xl font-black text-white leading-[0.9] tracking-tighter italic mb-10">
                Ready for a <br/><span className="text-accent underline decoration-white/10 decoration-4 underline-offset-[12px]">Healthy Smile?</span>
            </h2>
            <Link href="/appointment" className="inline-flex bg-accent text-white p-6 px-10 rounded-[32px] font-black text-xl shadow-2xl shadow-accent/40 hover:-translate-y-2 transition-all active:scale-95 italic tracking-tight uppercase tracking-widest decoration-white/10 underline decoration-2 underline-offset-8">
               Consult Dr. L. Suresh, BDS
            </Link>
            <p className="mt-12 text-white/40 text-[10px] uppercase font-black tracking-[0.4em] italic leading-relaxed">Trusted Dental Care Since 1995 • Specialist Clinical Excellence</p>
        </div>
    </section>
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Metrics />
      <ClinicalTrust />
      <ClinicalNetwork />
      <FinalCTA />
      <Footer />
    </main>
  );
}
