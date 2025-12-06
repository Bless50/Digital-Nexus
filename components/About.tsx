import React from 'react';

export default function About() {
    return (
        <section id="about" className="py-20 bg-[#0f172a] relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
                            About Digital Nexus
                        </h2>
                        <p className="text-lg text-slate-400 mb-6">
                            We are a dedicated web design team focused purely on helping small businesses in Cameroon succeed in the digital age.
                        </p>

                        <h3 className="text-xl font-bold text-white mb-4">Our Values</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {["Clarity", "Trust", "Speed", "Professionalism"].map((val, i) => (
                                <div key={i} className="flex items-center p-3 bg-white/5 border border-white/10 rounded-lg">
                                    <span className="w-2 h-2 bg-violet-500 rounded-full mr-3 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></span>
                                    <span className="font-medium text-slate-200">{val}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0 relative">
                        <div className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md">
                            <div className="flex items-start gap-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex-shrink-0 flex items-center justify-center text-slate-400 border border-white/10">
                                    <span className="font-bold text-2xl text-white">DN</span>
                                </div>
                                <div>
                                    <p className="text-slate-300 italic mb-4">
                                        "I started this service because I saw too many great Cameroonian businesses losing customers simply because they didn't have a trustworthy online presence. We fix that problem, fast."
                                    </p>
                                    <p className="font-bold text-white">Lead Developer</p>
                                    <p className="text-sm text-violet-400">Digital Nexus</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
