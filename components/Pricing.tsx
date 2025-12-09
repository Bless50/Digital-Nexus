import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, RefreshCw, FilePlus, Palette, Camera, ShieldCheck, CreditCard } from 'lucide-react';
import { PricingPackage } from '../types';

const packages: PricingPackage[] = [
    {
        name: "Essential",
        price: "120,000 XAF",
        description: "Year 1 - Everything Included. Perfect for getting started.",
        features: [
            "Professional one-page website",
            "Mobile responsive design",
            "Business information section",
            "Services overview",
            "Contact form & location map",
            "Basic SEO setup",
            "Domain name (Year 1 included)",
            "Web hosting (Year 1 included)",
            "Delivery in 3-5 days"
        ],
        renewalPrice: "50,000 XAF",
        recommended: false
    },
    {
        name: "Growth",
        price: "180,000 XAF",
        description: "Year 1 - Everything Included. Our most popular choice.",
        features: [
            "Everything in Essential",
            "Multi-section professional design",
            "Photo gallery showcase",
            "Customer testimonials section",
            "WhatsApp integration",
            "SEO optimized content",
            "Google Business Profile setup assistance",
            "Domain name (Year 1 included)",
            "Web hosting (Year 1 included)",
            "Delivery in 5-7 days"
        ],
        renewalPrice: "60,000 XAF",
        recommended: true
    },
    {
        name: "Professional",
        price: "250,000 XAF",
        description: "Year 1 - Everything Included. For established businesses.",
        features: [
            "Everything in Growth",
            "Full custom design tailored to your brand",
            "Advanced booking system or e-commerce features",
            "Priority support & unlimited revisions",
            "Advanced SEO strategy",
            "Custom features on request",
            "Domain name (Year 1 included)",
            "Premium web hosting (Year 1 included)",
            "Delivery in 7-10 days"
        ],
        renewalPrice: "75,000 XAF",
        recommended: false
    }
];

const addOnServices = [
    {
        icon: RefreshCw,
        name: "Content Updates",
        price: "10,000 XAF",
        period: "per update",
        description: "Keep your site current with text or image changes as needed.",
        color: "blue"
    },
    {
        icon: FilePlus,
        name: "Additional Page",
        price: "20,000 XAF",
        period: "per page",
        description: "Expand your website with new pages as your business grows.",
        color: "violet"
    },
    {
        icon: ShieldCheck,
        name: "Monthly Maintenance",
        price: "20,000 XAF",
        period: "/month",
        description: "Includes 2 content updates, backups, and security monitoring.",
        color: "emerald"
    },
];

export default function Pricing() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const getColorClasses = (color: string) => {
        switch (color) {
            case 'blue': return 'bg-blue-500/20 text-blue-400';
            case 'emerald': return 'bg-emerald-500/20 text-emerald-400';
            case 'violet': return 'bg-violet-500/20 text-violet-400';
            case 'fuchsia': return 'bg-fuchsia-500/20 text-fuchsia-400';
            case 'orange': return 'bg-orange-500/20 text-orange-400';
            default: return 'bg-slate-500/20 text-slate-400';
        }
    };

    return (
        <section id="packages" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-base text-violet-400 font-semibold tracking-wide uppercase">Packages</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold text-white sm:text-4xl">
                        All-Inclusive Pricing for Year 1
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
                        Clear renewal pricing for Year 2+. No hidden fees.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {packages.map((pkg, index) => (
                        <SpotlightCard key={index} pkg={pkg} index={index} scrollToSection={scrollToSection} />
                    ))}
                </div>

                {/* Add-On Services Section */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h3 className="text-base text-violet-400 font-semibold tracking-wide uppercase">Optional Add-Ons</h3>
                        <p className="mt-2 text-2xl leading-8 font-bold text-white sm:text-3xl">
                            Available after your website is launched
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {addOnServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all group"
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${getColorClasses(service.color)}`}>
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-1">{service.name}</h4>
                                <div className="flex items-baseline gap-1 mb-3">
                                    <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                                        {service.price}
                                    </span>
                                    {service.period && <span className="text-sm text-slate-500 ml-1">{service.period}</span>}
                                </div>
                                <p className="text-sm text-slate-400">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* What's Included / Key Notes Section */}

            </div>
        </section>
    );
}

function SpotlightCard({ pkg, index, scrollToSection }: { pkg: PricingPackage, index: number, scrollToSection: (id: string) => void }) {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setPosition({ x: 0, y: 0 });
    };

    const handleBlur = () => {
        setIsFocused(false);
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={() => setIsFocused(true)}
            onMouseLeave={() => setIsFocused(false)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative rounded-2xl p-8 flex flex-col border transition-colors duration-300 overflow-hidden group ${pkg.recommended
                ? 'bg-white/5 border-violet-500/50 shadow-2xl shadow-violet-900/20 scale-105 z-10'
                : 'bg-white/5 border-white/10 hover:border-white/20 text-slate-300'
                }`}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
                }}
            />

            {pkg.recommended && (
                <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute top-4 right-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full shadow-lg z-20"
                >
                    Most Popular
                </motion.div>
            )}

            <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-2 text-white">{pkg.name}</h3>
                <div className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    {pkg.price}
                </div>

                <p className="mb-6 text-sm text-slate-400">{pkg.description}</p>

                <ul className="space-y-4 mb-8 flex-1">
                    {pkg.features.map((feature, idx) => (
                        <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (idx * 0.05) }}
                            className="flex items-start"
                        >
                            <Check className={`w-5 h-5 mr-3 shrink-0 ${pkg.recommended ? 'text-violet-400' : 'text-slate-500'}`} />
                            <span className="text-sm text-slate-300">{feature}</span>
                        </motion.li>
                    ))}
                </ul>

                <div className="mt-auto">
                    {pkg.renewalPrice && (
                        <div className="mb-4 pt-4 border-t border-white/10">
                            <p className="text-xs text-slate-500 mb-1">Year 2+ Renewal</p>
                            <p className="text-lg font-semibold text-blue-300">{pkg.renewalPrice} <span className="text-xs text-slate-500 font-normal">/ year</span></p>
                        </div>
                    )}

                    <button
                        onClick={() => scrollToSection('contact')}
                        className={`w-full py-3 px-4 rounded-lg font-bold text-center transition-all ${pkg.recommended
                            ? 'bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white shadow-lg shadow-violet-500/25'
                            : 'bg-white/10 hover:bg-white/20 text-white'
                            }`}
                    >
                        Choose {pkg.name}
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
