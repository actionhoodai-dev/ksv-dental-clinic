const { useState, useEffect } = React;

// Extremely defensive library detection
const getMotion = () => {
    // Try all known global names for Framer Motion CDN
    const MotionGlobal = window.Motion || window.FramerMotion || window.framerMotion;
    
    if (!MotionGlobal) {
        console.warn("Framer Motion not found, using fallbacks.");
        return { motion: new Proxy({}, { get: () => (p) => p.children }), AnimatePresence: (p) => p.children };
    }

    // Some CDNs export 'motion' as a property, others export the function itself
    const motion = MotionGlobal.motion || (typeof MotionGlobal === 'function' ? MotionGlobal : null);
    const AnimatePresence = MotionGlobal.AnimatePresence || ((p) => p.children);

    if (!motion) {
        console.warn("motion function not found in global, using fallbacks.");
        return { motion: new Proxy({}, { get: () => (p) => p.children }), AnimatePresence };
    }

    return { motion, AnimatePresence };
};

const { motion, AnimatePresence } = getMotion();

// --- Navbar Component ---
const Navbar = ({ activePage = 'home' }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/index.html', id: 'home' },
        { name: 'About', path: '/about.html', id: 'about' },
        { name: 'Services', path: '/services.html', id: 'services' },
        { name: 'Gallery', path: '/gallery.html', id: 'gallery' },
        { name: 'Contact', path: '/contact.html', id: 'contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl py-3 shadow-xl' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="/index.html" className="flex items-center gap-4 group">
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <img src="/legacy/ksv-dental-clinic-logo.jpeg" className="h-12 w-12 rounded-2xl shadow-2xl border-2 border-white relative z-10 transition-transform group-hover:rotate-6 group-hover:scale-110" alt="KSV Logo" />
                    </div>
                    <div className="flex flex-col text-left">
                        <span className="font-outfit font-black text-2xl text-[#2F2A6B] leading-none tracking-tighter">KSV</span>
                        <span className="text-[9px] uppercase font-black text-[#F07D1A] tracking-[0.4em] mt-1 group-hover:text-primary transition-colors">Dental Hospital</span>
                    </div>
                </a>
                
                <div className="hidden lg:flex items-center gap-10 font-bold uppercase tracking-widest text-[11px]">
                    {navItems.map(item => (
                        <a 
                            key={item.id}
                            href={item.path} 
                            className={`transition-all duration-300 relative group py-2 ${activePage === item.id ? 'text-[#2F2A6B]' : 'text-gray-400 hover:text-primary'}`}
                        >
                            {item.name}
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${activePage === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </a>
                    ))}
                    <a href="/appointment.html" className="bg-primary text-white px-8 py-3.5 rounded-[20px] shadow-2xl shadow-primary/30 hover:-translate-y-1 transition-all active:scale-95 border border-white/10 italic">
                        Book Appointment
                    </a>
                </div>

                <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-[#2F2A6B] p-3 hover:bg-gray-100 rounded-2xl transition-all">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
            
            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden bg-white border-b border-gray-100 overflow-hidden shadow-2xl"
                    >
                        <div className="container mx-auto px-6 py-12 flex flex-col gap-10">
                            {navItems.map(item => (
                                <a 
                                    key={item.id}
                                    href={item.path} 
                                    onClick={() => setMenuOpen(false)}
                                    className={`text-3xl font-black italic tracking-tighter uppercase ${activePage === item.id ? 'text-[#F07D1A]' : 'text-[#2F2A6B]'}`}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <a href="/appointment.html" className="bg-primary text-white px-10 py-6 rounded-3xl font-black text-center text-xl shadow-2xl shadow-primary/30 uppercase italic">
                                Book Appointment
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

// --- Footer Component ---
const Footer = () => {
    return (
        <footer className="bg-[#080718] text-white pt-32 pb-16 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full -translate-y-1/2"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
                    <div className="space-y-10">
                        <div className="flex items-center gap-4 group">
                            <div className="bg-white p-1.5 rounded-2xl shadow-2xl transition-transform group-hover:rotate-12">
                                <img src="/legacy/ksv-dental-clinic-logo.jpeg" className="h-14 w-14 object-cover rounded-xl" alt="KSV Logo" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-outfit font-black text-4xl tracking-tighter leading-none uppercase italic">KSV</span>
                                <span className="text-[10px] font-black text-accent tracking-[0.4em] uppercase mt-1">Dental Hospital</span>
                            </div>
                        </div>
                        <p className="text-gray-500 font-bold leading-relaxed max-w-xs italic uppercase tracking-tighter decoration-accent/10 underline decoration-2 underline-offset-4 decoration-2">Providing high-end dental care for over 30 years with a legacy of gentle precision and medical excellence.</p>
                    </div>
                    
                    <div>
                        <h4 className="font-outfit font-black text-sm mb-12 uppercase tracking-[0.4em] text-accent">Clinical Hub</h4>
                        <ul className="space-y-6 text-gray-500 font-black uppercase tracking-widest text-[11px]">
                            <li><a href="/index.html" className="hover:text-white transition-all flex items-center gap-4 group"><span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:w-6 transition-all"></span> Home</a></li>
                            <li><a href="/services.html" className="hover:text-white transition-all flex items-center gap-4 group"><span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:w-6 transition-all"></span> Treatments</a></li>
                            <li><a href="/about.html" className="hover:text-white transition-all flex items-center gap-4 group"><span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:w-6 transition-all"></span> Legacy</a></li>
                            <li><a href="/contact.html" className="hover:text-white transition-all flex items-center gap-4 group"><span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:w-6 transition-all"></span> Reach Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-outfit font-black text-sm mb-12 uppercase tracking-[0.4em] text-accent">Reach Out</h4>
                        <div className="space-y-10">
                            <div className="flex gap-6 items-center group">
                                <div className="p-5 bg-white/5 rounded-3xl text-accent border border-white/5 shadow-2xl transition-transform group-hover:scale-110">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white font-black text-2xl italic tracking-wide">+91 94880 21937</span>
                                    <span className="text-[10px] font-black text-gray-700 uppercase tracking-[0.3em] mt-1">Available 6:00PM - 8:30PM</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-10">
                        <h4 className="font-outfit font-black text-sm mb-2 uppercase tracking-[0.4em] text-accent">Modernized By</h4>
                        <div className="p-10 bg-white/5 rounded-[48px] border border-white/5 backdrop-blur-2xl shadow-inner relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <span className="text-white font-black text-3xl mb-2 block tracking-tighter italic transition-transform group-hover:scale-110">Actionhood AI</span>
                            <p className="text-[10px] text-gray-700 uppercase font-black tracking-[0.3em] leading-relaxed">Pioneering Digital Medical Hubs.</p>
                        </div>
                    </div>
                </div>

                <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10 text-[10px] font-black text-gray-800 uppercase tracking-[0.4em]">
                    <p>&copy; 2026 KSV Dental Hospital. Advanced Medical Group.</p>
                    <div className="flex gap-12">
                        <a href="#" className="hover:text-white transition-colors">Privacy Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Global Components for easy access
window.SharedUI = { Navbar, Footer };
