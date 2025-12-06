import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#0b1120] text-slate-400 py-12 border-t border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-violet-600 to-blue-600 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-xs">DN</span>
                    </div>
                    <span className="font-bold text-white text-lg">Digital Nexus</span>
                </div>
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Digital Nexus. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
