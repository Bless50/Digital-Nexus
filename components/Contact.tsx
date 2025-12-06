import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-20 relative z-10">
            {/* Gradient Background for Contact */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] to-violet-900/20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                    <div>
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">Let's Build Your Growth Engine</h2>
                        <p className="text-slate-300 text-lg mb-8">
                            Ready to look professional and get more clients? Contact us today.
                        </p>

                        <div className="space-y-6 mb-10">
                            {[
                                { icon: Phone, label: "WhatsApp & Phone", value: "+237 677 653 097" },
                                { icon: Mail, label: "Email", value: "blessnde184@gmail.com" },
                                { icon: MapPin, label: "Location", value: "Simbock, Yaoundé, Cameroon" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/10">
                                        <item.icon className="w-6 h-6 text-violet-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 uppercase font-semibold tracking-wider">{item.label}</p>
                                        <p className="text-xl font-bold text-white">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-violet-500/10 p-6 rounded-lg border border-violet-500/20">
                            <p className="flex items-start gap-3 text-violet-200">
                                <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded uppercase shrink-0 mt-1">Note</span>
                                Because we give personal attention to every project, our availability is limited. We accept projects by request only.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 lg:mt-0 glass-panel rounded-2xl p-8 shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6 text-white">Request a Consultation</h3>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Your Name</label>
                                <input type="text" id="name" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                            </div>
                            <div>
                                <label htmlFor="business" className="block text-sm font-medium text-slate-300 mb-1">Business Name</label>
                                <input type="text" id="business" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all" placeholder="My Business Ltd" />
                            </div>
                            <div>
                                <label htmlFor="package" className="block text-sm font-medium text-slate-300 mb-1">Interested Package</label>
                                <select id="package" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all [&>option]:bg-slate-900">
                                    <option>Starter (50,000 XAF)</option>
                                    <option>Growth (100,000 XAF)</option>
                                    <option>Professional (150,000+ XAF)</option>
                                    <option>Unsure / Need Advice</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                                <textarea id="message" rows={4} className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                            </div>
                            <button type="button" className="w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-bold py-4 rounded-lg shadow-lg shadow-violet-500/25 transition-transform active:scale-95">
                                Send Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
