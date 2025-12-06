import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Check, Smartphone, Globe, ShieldCheck, Star, Layout, ArrowRight, BarChart, Users, Search } from 'lucide-react';

export default function Services() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <>
            {/* Problem / Value Section - Bento Grid Style */}
            <section className="py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-base text-violet-400 font-semibold tracking-wide uppercase">The Reality</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold text-white sm:text-4xl">
                            Why Local Businesses Lose Customers
                        </p>
                    </div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]"
                    >
                        {/* Large Card */}
                        <motion.div variants={item} className="md:col-span-2 glass p-8 rounded-3xl glass-hover relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Layout className="w-48 h-48 text-violet-500" />
                            </div>
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 bg-violet-500/20 text-violet-400 rounded-2xl flex items-center justify-center mb-6">
                                        <Layout className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Instant Clarity</h3>
                                    <p className="text-slate-400 text-lg">Customers find prices, location, and services instantly without calling. No more lost leads due to confusion.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Tall Card */}
                        <motion.div variants={item} className="md:row-span-2 glass p-8 rounded-3xl glass-hover relative overflow-hidden group">
                            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                                <ShieldCheck className="w-64 h-64 text-blue-500" />
                            </div>
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Credibility & Trust</h3>
                                <p className="text-slate-400 mb-6">A professional domain shows you are a serious business, not a scam. In Cameroon, trust is everything.</p>
                                <div className="mt-auto space-y-3">
                                    {["Secure SSL", "Professional Email", "Verified Business"].map((tag, i) => (
                                        <div key={i} className="flex items-center text-sm text-slate-300 bg-white/5 p-2 rounded-lg">
                                            <Check className="w-4 h-4 text-green-400 mr-2" /> {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Small Card 1 */}
                        <motion.div variants={item} className="glass p-6 rounded-3xl glass-hover flex flex-col justify-center group">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-10 h-10 bg-pink-500/20 text-pink-400 rounded-xl flex items-center justify-center">
                                    <Star className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold text-white">Premium Feel</h3>
                            </div>
                            <p className="text-slate-400 text-sm">High-quality design signals that you offer high-quality services.</p>
                        </motion.div>

                        {/* Small Card 2 */}
                        <motion.div variants={item} className="glass p-6 rounded-3xl glass-hover flex flex-col justify-center group">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-10 h-10 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center">
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold text-white">Conversion</h3>
                            </div>
                            <p className="text-slate-400 text-sm">Turn 'just looking' visitors into paying clients with clear calls to action.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section - Detailed Grid */}
            <section id="services" className="py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center mb-16">
                        <h2 className="text-base text-violet-400 font-semibold tracking-wide uppercase">Our Services</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold text-white sm:text-4xl">
                            More Than Just Design—A Growth Solution
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="col-span-1 md:col-span-2 glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-violet-500 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/30">
                                        <Zap className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Full-Stack Digital Presence</h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div>
                                        <p className="text-slate-300 mb-6 leading-relaxed">
                                            We handle everything from the initial concept to the final launch. You don't need to worry about technical details.
                                        </p>
                                        <ul className="space-y-3">
                                            {["Market Research", "Copywriting that sells", "Modern UI Design"].map((item, i) => (
                                                <li key={i} className="flex items-center text-slate-300">
                                                    <div className="w-1.5 h-1.5 bg-violet-400 rounded-full mr-3"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                                        <h4 className="text-white font-semibold mb-4">Technical Stack</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["React", "TypeScript", "Tailwind", "Vite", "Framer Motion"].map((tech, i) => (
                                                <span key={i} className="text-xs font-medium text-violet-300 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="space-y-8">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="glass rounded-3xl p-8 relative overflow-hidden"
                            >
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-8 -mb-8"></div>
                                <Smartphone className="w-10 h-10 text-blue-400 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">Mobile First</h3>
                                <p className="text-slate-400 text-sm">
                                    Over 80% of internet traffic in Cameroon is on mobile. We design for phones first.
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="glass rounded-3xl p-8 relative overflow-hidden"
                            >
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -mr-8 -mb-8"></div>
                                <Globe className="w-10 h-10 text-emerald-400 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">SEO Optimized</h3>
                                <p className="text-slate-400 text-sm">
                                    Structured data and semantic HTML to help you rank on Google Search.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
