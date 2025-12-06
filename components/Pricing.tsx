import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Globe, Server, Wrench, Info } from 'lucide-react';
import { PricingPackage } from '../types';

const packages: PricingPackage[] = [
    {
        name: "Essential",
        price: "50,000 XAF",
        description: "Perfect for getting your business online quickly with a professional look.",
        features: [
            "One Page Website",
            "Business Information Section",
            "Services Overview",
            "Location Map & Contact Form",
            "Basic SEO Setup",
            "Delivery in 2 Days"
        ],
        recommended: false
    },
    {
        name: "Growth",
        price: "100,000 XAF",
        description: "A complete multi-page solution designed to build trust and capture leads.",
        features: [
            "Multi-Page Website (Home, About, Services, Contact)",
            "Photo Gallery / Portfolio",
            "SEO Optimized Content",
            "WhatsApp Chat Integration",
            "Google Business Profile Guidance",
            "Delivery in 5 Days"
        ],
        recommended: true
    },
    {
        name: "Professional",
        price: "150,000+ XAF",
        description: "Custom features for businesses ready to dominate their local market.",
        features: [
            "Full Custom Design",
            "Booking System or Service Catalog",
            "Advanced SEO Strategy",
            "Priority Support",
            "Custom Features Request",
            "Delivery in 7-10 Days"
        ],
        recommended: false
    }
];

const addOnServices = [
    {
        icon: Globe,
        name: "Domain Name",
        price: "10,000 - 15,000 XAF",
        period: "/year",
        description: "Your professional web address (e.g., yourbusiness.com). Registered in your name—you own it.",
        color: "blue"
    },
    {
        icon: Server,
        name: "Web Hosting",
        price: "15,000 - 25,000 XAF",
        period: "/year",
        description: "Reliable hosting to keep your website fast and online 24/7. Includes SSL certificate for security.",
        color: "emerald"
    },
    {
        icon: Wrench,
        name: "Monthly Maintenance",
        price: "10,000 - 25,000 XAF",
        period: "/month",
        description: "Content updates, security patches, backups, and technical support. Keep your site fresh and secure.",
        color: "violet"
    }
];

export default function Pricing() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="packages" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-base text-violet-400 font-semibold tracking-wide uppercase">Packages</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold text-white sm:text-4xl">
                        Transparent Pricing. No Hidden Fees.
                    </p>
                </div>

                {/* What's Included Notice */}
                <div className="max-w-3xl mx-auto mb-12">
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                        <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                        <p className="text-sm text-blue-200">
                            <span className="font-semibold">Package prices cover design & development only.</span> Hosting, domain registration, and monthly maintenance are separate services — see Add-On Services below. We help you set everything up!
                        </p>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {packages.map((pkg, index) => (
                        <SpotlightCard key={index} pkg={pkg} index={index} scrollToSection={scrollToSection} />
                    ))}
                </div>

                {/* Add-On Services Section */}
                <div className="mt-8">
                    <div className="text-center mb-12">
                        <h3 className="text-base text-violet-400 font-semibold tracking-wide uppercase">Add-On Services</h3>
                        <p className="mt-2 text-2xl leading-8 font-bold text-white sm:text-3xl">
                            Keep Your Website Running Smoothly
                        </p>
                        <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
                            These essential services ensure your website stays online, secure, and up-to-date. We help you set up everything so you maintain full ownership.
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
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                                    service.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' :
                                        'bg-violet-500/20 text-violet-400'
                                    }`}>
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-1">{service.name}</h4>
                                <div className="flex items-baseline gap-1 mb-3">
                                    <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                                        {service.price}
                                    </span>
                                    <span className="text-sm text-slate-500">{service.period}</span>
                                </div>
                                <p className="text-sm text-slate-400">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Maintenance Plans Note */}
                    <div className="mt-8 text-center">
                        <p className="text-slate-400 text-sm">
                            <span className="text-white font-medium">Not sure what you need?</span> We'll advise you based on your business needs during our consultation.
                        </p>
                    </div>
                </div>
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
            {/* Spotlight Effect */}
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
                    Best Value
                </motion.div>
            )}

            <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-2 text-white">{pkg.name}</h3>
                <div className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    {pkg.price}
                </div>
                <p className="text-xs text-slate-500 mb-4">Design & Development</p>
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
        </motion.div>
    );
}
