import { motion } from 'motion/react';
import { BRAND_NAME, MARKET_STATS, COMPETITION, USE_OF_FUNDS, CORE_VALUES, VISUAL_IDENTITY, PRODUCTS, GTM_STRATEGY } from '../constants';
import { cn } from './ui';
import { Presentation, ArrowUpRight, TrendingUp, ShieldCheck, Users, Target, PieChart, Info, Droplets, Zap, Sparkles, Layout } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart as RePieChart, Pie } from 'recharts';

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-4 rounded-xl shadow-2xl border border-brand-gold/10 space-y-1">
        <p className="text-xs font-bold text-brand-gold/60 uppercase tracking-wider">{data.item}</p>
        <p className="text-xl font-serif font-bold text-brand-void">{data.cost}</p>
        <p className="text-xs text-brand-gold font-medium">{data.percent} of MRP</p>
        <p className="text-[10px] text-brand-void/40 italic mt-2 border-t pt-2">{data.details}</p>
      </div>
    );
  }
  return null;
};

export function ICMemo({ onSwitchToDeck, onNavigate }: { onSwitchToDeck: () => void, onNavigate: (p: string) => void }) {
  return (
    <div className="min-h-screen bg-white text-brand-void font-sans selection:bg-brand-gold/20 flex flex-col">
      {/* Top Bar */}
      <header className="sticky top-0 z-[60] bg-white/80 backdrop-blur-md border-b border-brand-gold/10 px-4 md:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3 md:gap-4">
          <button 
            onClick={() => onNavigate('home')}
            className="w-8 h-8 rounded-full bg-brand-gold/5 hover:bg-brand-gold/10 text-brand-gold flex items-center justify-center transition-all"
            title="Back to Website"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </button>
          <div className="font-serif text-lg md:text-xl font-black tracking-tight text-brand-void">
            {BRAND_NAME} <span className="text-brand-gold/40 font-light hidden sm:inline">IC Memo</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-brand-gold/5 text-[8px] md:text-[10px] font-bold uppercase tracking-wider text-brand-gold/60">
            Confidential
          </span>
        </div>
        <button 
          onClick={onSwitchToDeck}
          className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-gold hover:text-brand-gold/80 transition-colors"
        >
          <Presentation size={14} />
          <span className="hidden sm:inline">Visual Deck</span>
          <span className="sm:hidden">Deck</span>
        </button>
      </header>

      <main className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16 space-y-20 md:space-y-24">
        {/* Header Section */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-brand-void">
              Investment Memo: Madira
            </h1>
            <p className="text-lg md:text-xl text-brand-void/60 font-light">
              Reclaiming India's 5,000-year-old spirits heritage through premium craft distillation and innovative RTD formats.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Status</div>
              <div className="text-sm font-semibold text-emerald-600">Active Diligence</div>
            </div>
            <div className="px-4 py-2 rounded-lg bg-brand-gold/5 border border-brand-gold/10">
              <div className="text-[10px] uppercase tracking-wider text-brand-gold/40 font-bold mb-1">Target Raise</div>
              <div className="text-sm font-semibold text-brand-void">₹50 – 75 Lakhs</div>
            </div>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <Target className="text-brand-gold" size={24} />
            <h2 className="text-2xl font-serif font-bold">Executive Summary</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="col-span-2 space-y-4 text-brand-void/60 leading-relaxed text-sm md:text-base">
              <p>
                Madira is a dual-brand spirits company targeting the explosive growth in Indian craft spirits (22% CAGR). 
                The company leverages a unique structural advantage: <strong>16 owned retail stores in Gurgaon</strong> (provided by a key investor), 
                providing guaranteed Day 1 distribution and a 20% margin uplift over competitors.
              </p>
              <p>
                The product strategy focuses on <strong>Provenance and Precision</strong>. By combining Himalayan spring water and ancient botanicals with modern Dutch iStill technology, 
                Madira creates a brand moat that global giants like Diageo are actively looking to acquire.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-brand-gold/5 border border-brand-gold/10">
                <div className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-2">Key Thesis</div>
                <ul className="space-y-2 text-sm text-brand-void/80">
                  <li className="flex gap-2">
                    <ShieldCheck size={16} className="text-brand-gold shrink-0" />
                    Distribution Moat (16 stores)
                  </li>
                  <li className="flex gap-2">
                    <TrendingUp size={16} className="text-brand-gold shrink-0" />
                    Category Creation (RTDs)
                  </li>
                  <li className="flex gap-2">
                    <Users size={16} className="text-brand-gold shrink-0" />
                    Founder-Market Fit
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Identity & Core Values */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <Sparkles className="text-brand-gold" size={24} />
            <h2 className="text-2xl font-serif font-bold">Brand Identity & Values</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-lg font-bold uppercase tracking-widest text-slate-400">Core Values</h3>
              <div className="space-y-4">
                {CORE_VALUES.map((value, i) => (
                  <div key={i} className="space-y-1">
                    <div className="font-bold text-brand-void">{value.title}</div>
                    <p className="text-sm text-brand-void/60 leading-relaxed">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-lg font-bold uppercase tracking-widest text-brand-gold/40">Visual Identity</h3>
              <div className="grid grid-cols-3 gap-4">
                {VISUAL_IDENTITY.colors.map((color, i) => (
                  <div key={i} className="space-y-2">
                    <div className="aspect-square rounded-xl border border-brand-gold/20" style={{ backgroundColor: color.hex }} />
                    <div className="text-[10px] font-bold text-brand-void uppercase tracking-tighter">{color.name}</div>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl bg-brand-gold/5 border border-brand-gold/10">
                <div className="text-[10px] font-bold text-brand-gold/60 uppercase tracking-widest mb-1">Typography</div>
                <div className="text-sm font-serif text-brand-void">{VISUAL_IDENTITY.typography}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Deep Dive */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <Droplets className="text-brand-gold" size={24} />
            <h2 className="text-2xl font-serif font-bold">Product Portfolio</h2>
          </div>
          <div className="grid gap-6">
            {PRODUCTS.map((product, i) => (
              <div key={i} className="p-6 md:p-8 rounded-2xl bg-brand-gold/5 border border-brand-gold/10 space-y-4 group hover:border-brand-gold/20 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">{product.type}</div>
                    <h3 className="text-2xl font-serif font-bold text-brand-void">{product.name}</h3>
                  </div>
                  <div className="text-xl font-mono font-bold text-brand-void">{product.price}</div>
                </div>
                <p className="text-sm text-brand-void/60 leading-relaxed">{product.description}</p>
                <div className="pt-4 border-t border-brand-gold/10">
                  <div className="text-[10px] font-bold text-brand-gold/40 uppercase tracking-widest mb-2">Comparative Analysis</div>
                  <p className="text-xs text-brand-void/40 italic">{product.comparison}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GTM Strategy */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <Layout className="text-brand-gold" size={24} />
            <h2 className="text-2xl font-serif font-bold">Go-To-Market Strategy</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {GTM_STRATEGY.map((step, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-brand-gold/10 shadow-sm space-y-3">
                <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold font-bold text-xs">
                  {i + 1}
                </div>
                <div className="font-bold text-brand-void text-sm uppercase tracking-tight">{step.phase}</div>
                <p className="text-xs text-brand-void/40 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Market Data */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-brand-gold" size={24} />
            <h2 className="text-2xl font-serif font-bold">Market Opportunity</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {MARKET_STATS.map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-brand-gold/5 border border-brand-gold/10">
                <div className="text-[10px] uppercase tracking-widest text-brand-gold/40 font-bold mb-2">{stat.label}</div>
                <div className="text-2xl font-serif font-bold text-brand-void">{stat.value}</div>
                <div className="text-[10px] text-brand-void/40 mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Competition */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <Users className="text-brand-gold" size={24} />
            <h2 className="text-2xl font-serif font-bold">Competitive Landscape</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-brand-gold/10">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-brand-gold/5 border-b border-brand-gold/10">
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-brand-gold/40">Brand</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-brand-gold/40">Origin</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-brand-gold/40">Price</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-brand-gold/40">Moat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-gold/5">
                {COMPETITION.map((c, i) => (
                  <tr key={i} className={cn("transition-colors", c.highlight ? "bg-brand-gold/10" : "hover:bg-brand-gold/5")}>
                    <td className="px-6 py-4 font-bold text-brand-void">{c.name}</td>
                    <td className="px-6 py-4 text-brand-void/60">{c.origin}</td>
                    <td className="px-6 py-4 text-brand-void/60">{c.price}</td>
                    <td className="px-6 py-4 text-brand-void/60">{c.moat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Use of Funds */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <PieChart className="text-brand-gold" size={24} />
            <h2 className="text-2xl font-serif font-bold">Use of Funds</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RePieChart>
                  <Pie
                    data={USE_OF_FUNDS}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {USE_OF_FUNDS.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={['#C8891E', '#E8A832', '#F5D98A', '#0B1422', '#64748b'][index % 5]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RePieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              {USE_OF_FUNDS.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-gold/5 transition-colors group">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-brand-void">{item.label}</span>
                      <span className="text-xs font-bold text-brand-gold">{item.value}%</span>
                    </div>
                    <p className="text-xs text-brand-void/40 mt-1">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <Users className="text-brand-gold" size={24} />
            <h2 className="text-2xl font-serif font-bold">The Team</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center font-serif text-xl font-bold text-brand-gold">JS</div>
                <div>
                  <div className="font-bold text-brand-void">Jai Vardhan Sharma</div>
                  <div className="text-xs text-brand-gold/60 uppercase tracking-wider">Founder & CEO</div>
                </div>
              </div>
              <p className="text-sm text-brand-void/60 leading-relaxed">
                Serial strategist and founder with a deep focus on Alco-bev premiumization. Leveraging structural supply chain moats to build the next generation of Himalayan craft spirits.
              </p>
            </div>
            {/* Retail Partner */}
            <div className="p-8 rounded-3xl bg-brand-gold/5 border border-brand-gold/10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center font-serif text-xl font-bold text-brand-gold">RP</div>
                <div>
                  <div className="font-bold text-brand-void">Retail Partner</div>
                  <div className="text-xs text-brand-gold/60 uppercase tracking-wider">Distribution Director</div>
                </div>
              </div>
              <p className="text-sm text-brand-void/60 leading-relaxed">
                Operating 16 L-2 retail stores in strategic locations, providing Madira with an unfair distribution advantage and real-time market data from Day 1.
              </p>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-24 text-center space-y-8 bg-brand-gold/5 rounded-[3rem] border border-brand-gold/10 px-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-void">Ready to build the future of Indian craft spirits?</h2>
            <p className="text-brand-void/60 max-w-2xl mx-auto">
              Join us in scaling India's first Himalayan-native spirits portfolio. Limited allocation remaining for the current seed round.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => window.open('mailto:jai.sharma6696@gmail.com?subject=Investment Interest: Madira')}
              className="px-12 py-5 rounded-full bg-brand-gold text-brand-void font-bold text-sm tracking-[0.2em] uppercase shadow-xl hover:shadow-2xl transition-all"
            >
              Request Access
            </button>
            <button 
              onClick={() => onNavigate('home')}
              className="px-12 py-5 rounded-full border border-brand-gold/20 text-brand-gold/60 font-bold text-sm tracking-[0.2em] uppercase hover:bg-brand-gold/5 transition-all"
            >
              Return to Story
            </button>
          </div>
        </section>
      </main>

      <footer className="pt-24 pb-12 border-t border-brand-gold/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-brand-gold/40 font-bold">
        <div>Madira · Confidential Investment Memo</div>
        <div>March 2026</div>
      </footer>
    </div>
  );
}
