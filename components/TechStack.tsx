import React, { useState, useRef } from 'react';
import { flushSync } from 'react-dom';
import { Code2, Monitor, Database, PenTool, Layers, Terminal, Cpu } from 'lucide-react';

const technologies = [
    { name: 'React', category: 'Frontend', icon: Code2, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
    { name: 'Tailwind CSS', category: 'Frontend', icon: Layers, color: 'text-sky-400', bg: 'bg-sky-500/10' },
    { name: 'TypeScript', category: 'Frontend', icon: Monitor, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { name: 'Node.js', category: 'Backend', icon: Terminal, color: 'text-green-400', bg: 'bg-green-500/10' },
    { name: 'PostgreSQL', category: 'Backend', icon: Database, color: 'text-blue-300', bg: 'bg-blue-400/10' },
    { name: 'Vite', category: 'Tools', icon: Cpu, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { name: 'Figma', category: 'Design', icon: PenTool, color: 'text-pink-400', bg: 'bg-pink-500/10' },
];

const categories = ['All', 'Frontend', 'Backend', 'Design', 'Tools'];

export default function TechStack() {
    const [activeFilter, setActiveFilter] = useState('All');
    const containerRef = useRef<HTMLDivElement>(null);

    const filteredTechs = activeFilter === 'All'
        ? technologies
        : technologies.filter(t => t.category === activeFilter);

    const handleFilterChange = async (category: string) => {
        // Feature detection for Scoped View Transitions (Chrome 140+)
        // We cast to 'any' because strict types might not have this experimental method yet.
        const element = containerRef.current as any;

        if (element && typeof element.startViewTransition === 'function') {
            await element.startViewTransition(() => {
                flushSync(() => {
                    setActiveFilter(category);
                });
            }).finished;
        }
        // Fallback to Global View Transitions (Chrome 111+)
        else if (document.startViewTransition) {
            await document.startViewTransition(() => {
                flushSync(() => {
                    setActiveFilter(category);
                });
            }).finished;
        } else {
            // No View Transitions support
            setActiveFilter(category);
        }
    };

    return (
        <section className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-base text-violet-400 font-semibold tracking-wide uppercase">Our Toolkit</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold text-white sm:text-4xl">
                        Built With Modern Technologies
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
                        We use the latest tools to ensure your website is fast, secure, and scalable.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleFilterChange(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === category
                                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25'
                                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Tech Grid - The Transition Scope */}
                {/* We add a unique view-transition-name to the container if we want to scope it via CSS, 
                    but calling element.startViewTransition() automatically scopes it to this subtree. */}
                <div
                    ref={containerRef}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    style={{
                        // Often helpful to set a containment for the scoped transition
                        // contain: 'layout paint' 
                    }}
                >
                    {filteredTechs.map((tech) => (
                        <div
                            key={tech.name}
                            className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-colors"
                            style={{
                                // Each element needs a unique view-transition-name to be tracked individually during the transition
                                viewTransitionName: `tech-${tech.name.toLowerCase().replace(/\s+/g, '-')}`
                            }}
                        >
                            <div className={`w-16 h-16 ${tech.bg} ${tech.color} rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300`}>
                                <tech.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">{tech.name}</h3>
                            <span className="text-xs text-slate-500 uppercase tracking-wider">{tech.category}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
