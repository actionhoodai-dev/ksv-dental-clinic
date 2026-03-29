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
                             Visit us for world-class dental care in a comfortable environment. Professional treatments with Dr. Suresh, BDS's 30 years of expertise and international-standard sterilization.
                        </p>
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] italic mb-4 max-w-md leading-relaxed">
                            Located centrally for your convenience, KSV Dental Clinic is the region's benchmark for specialized restorative care. We ensure every patient receives personalized diagnostic mapping before any procedure begins.
                        </p>
                        
                        <div className="space-y-8">
                            {[
                                { icon: UserCheck, title: "Clinical Specialist", value: "Dr. L. Suresh, BDS (Dental Surgeon)", sub: "Reg No. 2799 • 30+ Years Experience", color: "primary" },
                                { icon: Mail, title: "Clinical Email", value: "ksvdentalclinicsalem@gmail.com", sub: "Official Inquiry Channel", color: "accent" },
                                { icon: Phone, title: "Consulting Helpline", value: "+91 94880 21937", sub: "Mon-Sat: Check Branches", color: "primary" },
                            ].map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start group"
                                >
                                    <div className={`w-14 h-14 bg-${item.color}/10 text-${item.color} flex items-center justify-center rounded-[20px] shadow-2xl transition-transform group-hover:scale-110 shadow-${item.color}/10 shrink-0`}>
                                        <item.icon size={24} />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="font-black text-slate-500 text-[9px] uppercase tracking-[0.4em] mb-2 italic leading-none">{item.title}</p>
                                         <p className="font-outfit text-xl lg:text-2xl font-black text-primary group-hover:text-accent transition-colors tracking-tighter italic leading-none break-words">{item.value}</p>
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
                            <h2 className="font-outfit text-2xl lg:text-3xl font-black text-primary mb-8 italic tracking-tighter uppercase decoration-slate-900/5 underline decoration-4 underline-offset-8">Our Branches</h2>
                            
                            <div className="space-y-8">
                                {[
                                    { 
                                        name: "Modern Theatre Branch", 
                                        sub: "Yercaud Main Road", 
                                        address: "Shop No.- TK-3, Venkatathri Nilayam, Yercaud Main Road, Near Modern Theatre, Salem-636008",
                                        phone: "+91 94880 21937",
                                        map: "https://www.google.com/maps/search/?api=1&query=Venkatathri+Nilayam+Yercaud+Main+Road+Salem",
                                        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31252.17409240897!2d78.173!3d11.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf16a65bc7919%3A0x49580e7d0408b44a!2sYercaud+Main+Road!5e0"
                                    },
                                    { 
                                        name: "Omalur Branch", 
                                        sub: "Near Taluk Office", 
                                        address: "87/6, Swaminathan Complex, near Taluk Office, Omalur",
                                        phone: "+91 94880 21937",
                                        map: "https://www.google.com/maps/search/?api=1&query=Swaminathan+Complex+Omalur+Taluk+Office"
                                        // mapEmbed removed as per user request
                                    }
                                ].map((branch, idx) => (
                                    <div key={idx} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-xl group/branch">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="flex flex-col">
                                                <span className="text-xl font-black text-primary tracking-tighter italic group-hover/branch:text-accent transition-colors">{branch.name}</span>
                                                <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.3em] mt-1 italic">{branch.sub}</span>
                                            </div>
                                            <div className="p-3 bg-accent/5 text-accent rounded-xl group-hover/branch:bg-accent group-hover/branch:text-white transition-all">
                                                <MapPin size={18} />
                                            </div>
                                        </div>
                                        {branch.mapEmbed && (
                                            <div className="w-full h-40 bg-slate-100 rounded-2xl overflow-hidden mb-6 ring-1 ring-slate-900/5">
                                                <iframe 
                                                    src={branch.mapEmbed} 
                                                    width="100%" 
                                                    height="100%" 
                                                    style={{ border: 0 }} 
                                                    allowFullScreen 
                                                    loading="lazy" 
                                                ></iframe>
                                            </div>
                                        )}
                                        {!branch.mapEmbed && (
                                            <div className="w-full h-20 flex items-center justify-center bg-slate-50/50 rounded-2xl mb-6 border border-slate-100/50">
                                                <MapPin className="text-slate-200" size={32} />
                                            </div>
                                        )}
                                        <div className="flex flex-col gap-4">
                                            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-relaxed italic">{branch.address}</p>
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-50">
                                            <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-primary font-black text-sm italic group-hover/branch:text-accent transition-colors">
                                                <Phone size={14} className="text-accent" /> {branch.phone}
                                            </a>
                                            <Link href="/appointment" className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] hover:text-primary transition-colors italic">Book Visit →</Link>
                                        </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] italic text-center max-w-sm mx-auto leading-relaxed">
                          Strategic clinical presence across the region. Both branches follow international procedural safety and digital sterilization modules.
                        </p>
                     </div>
                   <a href="mailto:ksvdentalclinicsalem@gmail.com" className="flex gap-4 items-center group cursor-pointer hover:translate-x-1 transition-transform pt-4 border-t border-white/5">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5 transition-transform group-hover:scale-110 group-hover:bg-accent group-hover:border-accent">
                      <Mail size={16} className="text-accent group-hover:text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white font-black text-sm italic tracking-tight leading-none group-hover:text-accent transition-colors truncate max-w-[200px]">ksvdentalclinicsalem@gmail.com</span>
                      <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.3em] mt-1.5 leading-none italic">Official Clinical Email</span>
                    </div>
                 </a>
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
