import React from 'react';
import { motion } from 'motion/react';
import { 
  Store, Zap, TrendingUp, Shield, BarChart3, 
  ArrowRight, CheckCircle2, Globe, Target, LayoutGrid
} from 'lucide-react';
import { cn } from '../ui';

const Section = ({ children, id, className = '' }: { children: React.ReactNode, id?: string, className?: string }) => (
  <section id={id} className={`py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

export function TradePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="min-h-screen bg-brand-void pt-32">
      {/* Hero */}
      <section className="px-6 max-w-7xl mx-auto space-y-12 mb-32 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-brand-gold/40" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">Trade & Distribution</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-black text-white leading-[0.85] tracking-tighter">
            Distribution <br />
            <span className="italic text-brand-gold/60 font-light">Dominance.</span>
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="grid md:grid-cols-2 gap-12 pt-12 border-t border-white/5"
        >
          <p className="text-xl md:text-2xl text-brand-cream/60 font-light leading-relaxed font-serif italic">
            "We don't wait for the market to move. We own the market's edge."
          </p>
          <div className="space-y-6 text-sm text-brand-cream/40 leading-relaxed font-light">
            <p>
              While other brands spend years fighting for shelf space, Madira launches with a 16-store retail moat. We are the only spirits house in India that owns its customer data and distribution infrastructure from Day 1.
            </p>
          </div>
        </motion.div>
      </section>

      {/* The Moat: 16 Stores */}
      <Section id="moat" className="bg-brand-navy/10 border-y border-white/5">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.4em]">Vertical Integration</div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">16 Proprietary <br />Retail Outlets</h2>
              <p className="text-lg text-brand-cream/60 font-light leading-relaxed">
                Located in Gurgaon’s highest-spending premium corridors, our L-2 stores serve as high-visibility marketing hubs and immediate revenue engines.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { label: "Location", val: "Gurgaon (NCR)", sub: "Prime Premium Zone" },
                { label: "Margin", val: "+20% Advantage", sub: "Retail Cap Capture" },
                { label: "Insights", val: "Real-time Data", sub: "Direct Consumer Feedback" },
                { label: "Logistics", val: "Zero Friction", sub: "Instant Stocking" }
              ].map((stat, i) => (
                <div key={i} className="glass-card p-6 border-white/5 space-y-2">
                  <div className="text-[10px] font-bold text-brand-gold/40 uppercase tracking-widest">{stat.label}</div>
                  <div className="text-xl font-serif font-bold text-white">{stat.val}</div>
                  <div className="text-[10px] text-brand-cream/40">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-brand-gold/20 shadow-2xl relative group">
              <img src="/images/whiskey-blended.png" alt="Retail Moat" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
              <div className="absolute inset-0 bg-linear-to-t from-brand-void via-brand-void/20 to-transparent" />
              <div className="absolute bottom-12 left-12 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-brand-gold flex items-center justify-center text-brand-void shadow-2xl">
                  <Store size={32} />
                </div>
                <div className="font-serif text-3xl font-bold text-white">The Retail Edge.</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Trade Matchup Table */}
      <Section id="matchup">
        <div className="space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.4em]">Comparative Math</div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">The Partner <span className="italic text-brand-gold/60">Advantage</span></h2>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-white/10 bg-brand-navy/30 backdrop-blur-md">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-8 text-[10px] font-bold uppercase tracking-widest text-brand-gold/40">Criteria</th>
                  <th className="p-8 text-xl font-serif text-brand-cream/60">Standard Brands</th>
                  <th className="p-8 text-xl font-serif text-brand-gold">Madira Partnership</th>
                </tr>
              </thead>
              <tbody className="text-brand-cream/80 font-light">
                {[
                  { crit: "Retail Margin", std: "Tier 1 - Fixed", mad: "Tier 1 + Integrated Hubs" },
                  { crit: "Stocking Priority", std: "Negotiated / Paid", mad: "Guaranteed Priority" },
                  { crit: "Market Data", std: "Lagging / Secondary", mad: "Live Point-of-Sale Insights" },
                  { crit: "Logistics", std: "3rd Party dependency", mad: "Proprietary Route-to-Market" }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-8 font-bold text-[10px] uppercase tracking-widest text-brand-gold/40">{row.crit}</td>
                    <td className="p-8 text-sm opacity-40 italic">{row.std}</td>
                    <td className="p-8 text-lg font-medium text-brand-cream">{row.mad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section id="trade-cta" className="text-center py-40">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-8xl font-serif font-bold text-white leading-tight gold-gradient pb-2">
              Secure Your <span className="italic">Frontier.</span>
            </h2>
            <p className="text-xl md:text-2xl text-brand-cream/60 font-light leading-relaxed max-w-2xl mx-auto">
              We are finalizing distribution agreements for Phase 1. Access the Trade Memorandum and secure your allocation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => window.open('mailto:jai.sharma6696@gmail.com?subject=Trade Partnership Inquiry: Madira')}
              className="px-12 py-5 rounded-full bg-brand-gold text-brand-void font-black text-sm tracking-[0.2em] uppercase shadow-2xl shadow-brand-gold/20 hover:scale-105 transition-all"
            >
              Request Trade Deck
            </button>
            <button 
              onClick={() => onNavigate('invest')}
              className="px-12 py-5 rounded-full border border-white/10 text-brand-cream font-bold text-sm tracking-[0.2em] uppercase hover:bg-white/5 transition-all"
            >
              Investor Thesis
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}
