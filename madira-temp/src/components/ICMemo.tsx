import { motion } from 'motion/react';
import { BRAND_NAME, MARKET_STATS, COMPETITION, USE_OF_FUNDS, CORE_VALUES, VISUAL_IDENTITY, PRODUCTS, GTM_STRATEGY } from '../constants';
import { cn } from './ui';
import { Presentation, ArrowUpRight, TrendingUp, ShieldCheck, Users, Target, PieChart, Info, Droplets, Zap, Sparkles, Layout } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart as RePieChart, Pie } from 'recharts';

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-4 rounded-xl shadow-2xl border border-slate-100 space-y-1">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{data.item}</p>
        <p className="text-xl font-serif font-bold text-slate-900">{data.cost}</p>
        <p className="text-xs text-brand-gold font-medium">{data.percent} of MRP</p>
        <p className="text-[10px] text-slate-500 italic mt-2 border-t pt-2">{data.details}</p>
      </div>
    );
  }
  return null;
};

export function ICMemo({ onSwitchToDeck }: { onSwitchToDeck: () => void }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-gold/20 flex flex-col">
      {/* Top Bar */}
      <header className="sticky top-0 z-[60] bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 md:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="font-serif text-lg md:text-xl font-black tracking-tight text-slate-900">
            {BRAND_NAME} <span className="text-slate-400 font-light hidden sm:inline">IC Memo</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-slate-100 text-[8px] md:text-[10px] font-bold uppercase tracking-wider text-slate-500">
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-slate-900">
              Investment Memo: Madira
            </h1>
            <p className="text-lg md:text-xl text-slate-500 font-light">
              Reclaiming India's 5,000-year-old spirits heritage through premium craft distillation and innovative RTD formats.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Status</div>
              <div className="text-sm font-semibold text-emerald-600">Active Diligence</div>
            </div>
            <div className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Target Raise</div>
              <div className="text-sm font-semibold text-slate-900">₹50 – 75 Lakhs</div>
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
            <div className="col-span-2 space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
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
                <ul className="space-y-2 text-sm text-slate-700">
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
                    <div className="font-bold text-slate-900">{value.title}</div>
                    <p className="text-sm text-slate-500 leading-relaxed">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-lg font-bold uppercase tracking-widest text-slate-400">Visual Identity</h3>
              <div className="grid grid-cols-3 gap-4">
                {VISUAL_IDENTITY.colors.map((color, i) => (
                  <div key={i} className="space-y-2">
                    <div className="aspect-square rounded-xl border border-slate-200" style={{ backgroundColor: color.hex }} />
                    <div className="text-[10px] font-bold text-slate-900 uppercase tracking-tighter">{color.name}</div>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Typography</div>
                <div className="text-sm font-serif text-slate-900">{VISUAL_IDENTITY.typography}</div>
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
              <div key={i} className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-100 space-y-4 group hover:border-brand-gold/20 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">{product.type}</div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900">{product.name}</h3>
                  </div>
                  <div className="text-xl font-mono font-bold text-slate-900">{product.price}</div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{product.description}</p>
                <div className="pt-4 border-t border-slate-200">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Comparative Analysis</div>
                  <p className="text-xs text-slate-500 italic">{product.comparison}</p>
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
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-3">
                <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold font-bold text-xs">
                  {i + 1}
                </div>
                <div className="font-bold text-slate-900 text-sm uppercase tracking-tight">{step.phase}</div>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
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
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">{stat.label}</div>
                <div className="text-2xl font-serif font-bold text-slate-900">{stat.value}</div>
                <div className="text-[10px] text-slate-500 mt-1">{stat.sub}</div>
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
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-400">Brand</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-400">Origin</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-400">Price</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-400">Moat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {COMPETITION.map((c, i) => (
                  <tr key={i} className={cn("transition-colors", c.highlight ? "bg-brand-gold/5" : "hover:bg-slate-50")}>
                    <td className="px-6 py-4 font-bold text-slate-900">{c.name}</td>
                    <td className="px-6 py-4 text-slate-600">{c.origin}</td>
                    <td className="px-6 py-4 text-slate-600">{c.price}</td>
                    <td className="px-6 py-4 text-slate-600">{c.moat}</td>
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
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: ['#C8891E', '#E8A832', '#F5D98A', '#0B1422', '#64748b'][i % 5] }} />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">{item.label}</span>
                      <span className="text-xs font-bold text-brand-gold">{item.value}%</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{item.details}</p>
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
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-serif text-xl font-bold text-brand-gold">JS</div>
                <div>
                  <div className="font-bold text-slate-900">Jai Vardhan Sharma</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Founder & CEO</div>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                PGDM(O), MDI Gurgaon 2025. BCG Strategy certified. 
                Experience in CEO's Office at LTH Group and Rodic Consultants. 
                Founder of Raxidi Coffee Estate.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-serif text-xl font-bold text-brand-gold">RP</div>
                <div>
                  <div className="font-bold text-slate-900">Retail Partner</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Distribution Director</div>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Owner/Operator of 16 licensed L-2 liquor retail stores in Gurgaon. 
                Provides deep consumer insight and guaranteed Day 1 shelf placement.
              </p>
            </div>
          </div>
        </section>

        {/* Invest Now Section */}
        <section className="pt-12 pb-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Ready to build the future of Indian craft spirits?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We are currently closing our Seed round. Join us in bringing Himalayan provenance to the world.
            </p>
          </div>
          <button 
            className="px-12 py-5 rounded-full bg-brand-gold text-white font-bold text-sm tracking-[0.2em] uppercase hover:bg-brand-gold/90 transition-all shadow-xl shadow-brand-gold/20"
            onClick={() => window.open('mailto:jai.sharma6696@gmail.com?subject=Investment Interest: Madira')}
          >
            Invest Now
          </button>
        </section>

        {/* Footer */}
        <footer className="pt-24 pb-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">
          <div>Madira · Confidential Investment Memo</div>
          <div>March 2026</div>
        </footer>
      </main>
    </div>
  );
}
