'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-[100] transition-all duration-700",
      scrolled ? "bg-white/90 backdrop-blur-2xl py-3 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border-b border-white/20" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group relative">
          <div className="relative overflow-hidden rounded-[16px] shadow-xl transition-transform group-hover:rotate-6 active:scale-95 duration-500">
            <img 
              src="/logo.jpeg" 
              className="w-[44px] h-[44px] object-cover" 
              alt="KSV Logo" 
            />
          </div>
          <div className="flex flex-col">
            <span className="font-outfit font-black text-2xl text-primary leading-none italic-spacing transform transition-all group-hover:scale-110">KSV</span>
            <span className="text-[9px] font-black text-accent tracking-[0.4em] mt-1 uppercase transition-colors group-hover:text-primary">Dental Clinic</span>
          </div>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map(item => (
            <Link 
              key={item.path}
              href={item.path} 
              className={cn(
                "font-bold uppercase tracking-[0.2em] text-[10px] transition-all relative group py-2",
                pathname === item.path ? "text-primary" : "text-slate-400 hover:text-primary"
              )}
            >
              {item.name}
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-500",
                pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
              )}></span>
            </Link>
          ))}
          <Link href="/appointment" className="group flex items-center gap-3 bg-primary text-white p-3 px-6 rounded-[20px] font-black italic tracking-tight text-xs shadow-2xl shadow-primary/30 hover:-translate-y-1 transition-all active:scale-95">
            <Calendar size={16} className="text-accent group-hover:rotate-12 transition-transform" />
            Consulting
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="lg:hidden p-4 bg-slate-100 rounded-[20px] text-primary transition-all active:scale-90"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-3xl overflow-hidden border-b border-primary/5"
          >
            <div className="container mx-auto px-8 py-8 flex flex-col gap-6 text-left">
              {navItems.map(item => (
                <Link 
                  key={item.path}
                  href={item.path} 
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "text-xl font-black tracking-tight uppercase transition-colors italic",
                    pathname === item.path ? "text-accent" : "text-primary hover:text-accent"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <Link 
                  href="/appointment" 
                  onClick={() => setMenuOpen(false)}
                  className="bg-primary text-white p-4 px-8 rounded-[20px] font-black text-lg uppercase italic shadow-xl shadow-primary/20 text-center group flex items-center justify-center gap-3"
                >
                  <Calendar size={20} className="text-accent" /> Book Consulting
                </Link>
                <a href="tel:+919488021937" className="flex items-center gap-3 text-primary font-black text-sm italic py-2">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                    <Phone size={14} className="text-accent" />
                  </div>
                  +91 94880 21937
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
