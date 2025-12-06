import React from 'react';
import { motion } from 'framer-motion';
import StrategyGenerator from './StrategyGenerator';

export default function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                    <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-violet-400 mr-2 animate-pulse"></span>
                            Now accepting new clients in Cameroon
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl mb-6"
                        >
                            <span className="block">Professional Websites for</span>
                            <span className="block text-gradient">Cameroon Businesses</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-3 text-base text-slate-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 leading-relaxed"
                        >
                            Most small businesses lose customers because they are invisible online. We build professional, high-trust websites that turn clicks into customers.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4"
                        >
                            <button onClick={() => scrollToSection('contact')} className="btn-primary flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white md:py-4 md:text-lg">
                                Request Your Website
                            </button>
                            <button onClick={() => scrollToSection('packages')} className="flex items-center justify-center px-8 py-3 border border-white/10 text-base font-medium rounded-full text-slate-300 bg-white/5 hover:bg-white/10 backdrop-blur-sm md:py-4 md:text-lg transition-all hover:scale-105">
                                See Packages
                            </button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                        className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 perspective-1000"
                    >
                        <div className="relative z-10 transform transition-transform hover:scale-[1.02] duration-500">
                            <StrategyGenerator />
                        </div>
                        {/* Decorative elements behind the generator */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-violet-600/20 to-blue-600/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
