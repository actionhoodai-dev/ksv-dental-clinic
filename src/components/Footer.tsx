'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-10 overflow-hidden relative selection:bg-accent selection:text-white selection:bg-accent/20">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-primary/20 blur-[150px] rounded-full -translate-y-1/2"></div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-white p-1 rounded-xl shadow-2xl transition-transform group-hover:rotate-12 duration-500 overflow-hidden">
                <img src="/logo.jpeg" className="w-[36px] h-[36px] object-cover rounded-lg" alt="KSV Logo" />
              </div>
              <div className="flex flex-col">
                <span className="font-outfit font-black text-2xl tracking-tighter italic-spacing uppercase leading-none">KSV</span>
                <span className="text-[8px] font-black text-accent tracking-[0.4em] uppercase mt-0.5 transition-colors group-hover:text-white leading-none">Dental Clinic</span>
              </div>
            </Link>
            <p className="text-slate-400 font-bold leading-relaxed max-w-xs italic uppercase tracking-tighter text-[11px] decoration-accent/10 underline decoration-2 underline-offset-4 transition-colors hover:text-white">Providing high-grade dental care for over 30 years with a legacy of gentle precision and medical excellence.</p>
          </div>
          
          <div>
            <h4 className="font-outfit font-black text-[9px] mb-8 uppercase tracking-[0.4em] text-accent">Clinical Hub</h4>
            <ul className="space-y-3 text-slate-400 font-black uppercase tracking-widest text-[9px]">
               {[ 
                 { name: 'Home', path: '/' },
                 { name: 'About', path: '/about' },
                 { name: 'Services', path: '/services' },
                 { name: 'Gallery', path: '/gallery' },
                 { name: 'Contact', path: '/contact' }
               ].map(item => (
                 <li key={item.path}>
                   <Link href={item.path} className="hover:text-white transition-all flex items-center gap-3 group">
                      <span className="w-1 h-1 bg-accent rounded-full group-hover:w-4 transition-all duration-300"></span>
                      {item.name}
                   </Link>
                 </li>
               ))}
            </ul>
          </div>

          <div>
            <h4 className="font-outfit font-black text-[9px] mb-8 uppercase tracking-[0.4em] text-accent">Reach Us</h4>
             <div className="space-y-6">
                <a href="tel:+919488021937" className="flex gap-4 items-center group cursor-pointer hover:translate-x-1 transition-transform">
                   <div className="p-3 bg-white/5 rounded-xl border border-white/5 transition-transform group-hover:scale-110 group-hover:bg-accent group-hover:border-accent">
                     <Phone size={16} className="text-accent group-hover:text-white" />
                   </div>
                   <div className="flex flex-col">
                     <span className="text-white font-black text-lg italic tracking-wide leading-none group-hover:text-accent transition-colors">+91 94880 21937</span>
                     <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.3em] mt-1 leading-none">Mon-Sat: 6PM - 8:30PM</span>
                   </div>
                </a>
                <a href="https://www.google.com/maps/search/?api=1&query=KSV+Dental+Clinic+Salem" target="_blank" rel="noopener noreferrer" className="flex gap-4 items-center group cursor-pointer hover:translate-x-1 transition-transform">
                   <div className="p-3 bg-white/5 rounded-xl border border-white/5 transition-transform group-hover:scale-110 group-hover:bg-accent group-hover:border-accent">
                     <MapPin size={16} className="text-accent group-hover:text-white" />
                   </div>
                   <div className="flex flex-col">
                     <span className="text-white font-black text-md italic tracking-tight italic leading-none group-hover:text-accent transition-colors">KSV Dental Clinic</span>
                     <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.2em] mt-1 italic leading-none">SALEM</span>
                   </div>
                </a>
             </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-outfit font-black text-[9px] mb-0 uppercase tracking-[0.4em] text-accent">Clinical Authority</h4>
            <div className="p-8 bg-white/5 rounded-[32px] border border-white/5 relative overflow-hidden group hover:scale-[1.02] transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="text-white font-black text-xl mb-1 block tracking-tighter italic">1,000+ Smiles</span>
                <p className="text-[8px] text-slate-500 uppercase font-black tracking-[0.3em] leading-relaxed italic">Successful surgeries & specialized care.</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[8px] font-black text-slate-500 uppercase tracking-[0.4em]">
          <p>&copy; 2026 KSV Dental Hospital. Advanced Medical Group.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
