import React, { useState } from 'react';
import { generateBusinessStrategy } from '../services/geminiService';
import { Sparkles, ArrowRight, Loader2, Target, Store, Briefcase } from 'lucide-react';

const StrategyGenerator: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [goal, setGoal] = useState('');
  const [strategy, setStrategy] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !businessType || !goal) return;

    setLoading(true);
    setStrategy('');
    setError('');

    try {
      const result = await generateBusinessStrategy(businessName, businessType, goal);
      setStrategy(result);
    } catch (err) {
      setError('Failed to generate strategy. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative group">
      {/* Gradient Border Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

      <div className="relative bg-[#0f172a] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        <div className="p-8 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-violet-400 animate-pulse" />
            <h3 className="text-2xl font-bold text-white">Free Business Strategy Audit</h3>
          </div>

          <p className="text-slate-300 mb-8">
            Not sure if you need a website? Tell us about your business, and our AI consultant will explain exactly how a professional site helps you achieve your specific goal in the Cameroonian market.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Business Name</label>
              <div className="relative">
                <Store className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Mama Foufou Palace"
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Business Type</label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  placeholder="e.g. Restaurant, Boutique, Consultant"
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Primary Goal</label>
              <div className="relative">
                <Target className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all appearance-none [&>option]:bg-slate-900"
                  required
                >
                  <option value="" disabled>Select a goal...</option>
                  <option value="Get more local customers">Get more local customers</option>
                  <option value="Look more professional to partners">Look more professional to partners</option>
                  <option value="Reduce time answering same questions">Reduce time answering same questions</option>
                  <option value="Sell products online">Sell products online</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-lg shadow-violet-500/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Analyzing Market...
                </>
              ) : (
                <>
                  Generate Strategy <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {strategy && (
            <div className="mt-8 bg-white/5 rounded-xl p-6 border border-violet-500/30 animate-fadeIn relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-blue-500"></div>
              <h4 className="text-violet-400 font-semibold mb-2 text-sm uppercase tracking-wide flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Your Digital Opportunity
              </h4>
              <p className="text-slate-200 leading-relaxed whitespace-pre-wrap">{strategy}</p>

              <div className="mt-6 pt-4 border-t border-white/10">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group/btn"
                >
                  Let's Make This Happen
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {error && (
            <div className="mt-4 text-red-400 text-sm text-center bg-red-500/10 p-3 rounded-lg border border-red-500/20">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StrategyGenerator;