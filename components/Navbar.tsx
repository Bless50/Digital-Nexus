import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const [readingProgress, setReadingProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Calculate reading progress
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setReadingProgress(progress);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className={`pointer-events-auto w-full max-w-5xl rounded-full border border-white/10 transition-all duration-300 relative overflow-hidden ${scrolled
                    ? 'bg-[#0f172a]/70 backdrop-blur-xl shadow-2xl shadow-black/20 py-3'
                    : 'bg-[#0f172a]/40 backdrop-blur-md py-4'
                    }`}
            >
                {/* Progress Bar */}
                <div
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-violet-500 to-blue-500 transition-all duration-100"
                    style={{ width: `${readingProgress}%` }}
                />

                <div className="px-6 flex justify-between items-center relative z-10">
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-violet-500/20">
                            <span className="text-white font-bold text-xs">DN</span>
                        </div>
                        <span className="font-bold text-lg tracking-tight text-white hidden sm:block">Digital Nexus</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {['Services', 'Packages', 'About', 'FAQ'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-slate-300 hover:text-white px-4 py-2 rounded-full hover:bg-white/5 transition-all text-sm font-medium"
                            >
                                {item}
                            </button>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('contact')}
                            className="ml-2 bg-white text-black hover:bg-slate-200 px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-white/10"
                        >
                            Book Now
                        </motion.button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-300 hover:text-white p-2 bg-white/5 rounded-full">
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="absolute top-full left-0 right-0 mt-2 mx-4 p-2 bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                        >
                            <div className="space-y-1">
                                {['Services', 'Packages', 'About', 'FAQ'].map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => scrollToSection(item.toLowerCase())}
                                        className="block w-full text-left px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white font-medium rounded-xl transition-colors"
                                    >
                                        {item}
                                    </button>
                                ))}
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="block w-full text-left px-4 py-3 text-black font-bold bg-white rounded-xl mt-2"
                                >
                                    Book Consultation
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
}
