import React from 'react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { BRAND_NAME, COMPETITION, USE_OF_FUNDS, PRODUCTS, GTM_STRATEGY, CORE_VALUES, BRAND_STORY, TRACTION, TEAM, FINANCIALS, MARKET_STATS } from '../constants';
import { cn } from './ui';
import { 
  FileText, Check, ArrowUpRight, ShieldCheck, TrendingUp, Zap,
  Target, Droplets, Mountain, Layers, BarChart3,
  Users, Clock, Award, Briefcase, Sparkles, ArrowRight, Store,
  CheckCircle2, Globe, ChevronDown
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Section = ({ children, id, label, title, className = '' }: { children: React.ReactNode, id?: string, label?: string, title?: string, className?: string }) => (
  <section id={id} className={`py-20 md:py-28 px-4 md:px-12 max-w-7xl mx-auto ${className}`}>
    {(label || title) && (
      <div className="mb-12 md:mb-16 space-y-3">
        {label && <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold/60">{label}</div>}
        {title && <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">{title}</h2>}
      </div>
    )}
    {children}
  </section>
);

export function PitchDeck({ onSwitchToMemo, onNavigate }: { onSwitchToMemo: () => void, onNavigate: (p: string) => void }) {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-brand-void text-brand-cream overflow-x-hidden">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-[60] px-4 md:px-8 py-4 flex justify-between items-center bg-brand-void/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-3 md:gap-6">
          <button 
            onClick={() => onNavigate('home')}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-gold/20 text-brand-cream/60 hover:text-brand-gold flex items-center justify-center transition-all"
            title="Back to Website"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </button>
          <div className="font-serif text-lg md:text-xl font-black gold-gradient tracking-tighter">{BRAND_NAME}</div>
          <div className="hidden sm:flex items-center gap-2 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold/40">
            <span>Investor Deck</span>
            <span className="w-1 h-1 rounded-full bg-brand-gold/20" />
            <span>Q1 2026</span>
          </div>
        </div>
        <button 
          onClick={onSwitchToMemo}
          className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-gold hover:text-brand-gold-light transition-colors"
        >
          <FileText size={14} />
          <span className="hidden sm:inline">IC Memo</span>
          <span className="sm:hidden">Memo</span>
        </button>
      </header>

      {/* Cover Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 md:px-6 pt-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] rounded-full bg-brand-gold/5 blur-[120px]" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-5xl mx-auto space-y-6 md:space-y-8 relative z-10"
        >
          <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.5em] text-brand-gold/60">
            Friends & Family Round · Confidential · March 2026
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-black text-white leading-[0.85] tracking-tighter">
            MADIRA
          </h1>
          <p className="text-lg md:text-2xl text-brand-cream/50 max-w-2xl mx-auto font-light leading-relaxed">
            Born in the Himalayas. Dutch Precision.<br className="hidden md:block" /> From Botanical Gin to Single Malt Whiskey.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <button 
              onClick={() => window.open('mailto:jai.sharma6696@gmail.com?subject=Investment Interest: Madira')}
              className="px-8 py-4 rounded-full bg-brand-gold text-brand-void font-bold text-xs tracking-[0.2em] uppercase shadow-xl"
            >
              Invest Now
            </button>
            <button 
              onClick={onSwitchToMemo}
              className="px-8 py-4 rounded-full border border-white/10 text-brand-cream font-bold text-xs tracking-[0.2em] uppercase hover:bg-white/5 transition-colors"
            >
              Read IC Memo
            </button>
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-gold/30"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* Brand Story */}
      <Section id="story" label="The Narrative" title={BRAND_STORY.subtitle}>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="space-y-8">
            <p className="text-lg md:text-xl text-brand-cream/80 leading-relaxed font-serif italic border-l-2 border-brand-gold/40 pl-6">
              {BRAND_STORY.content}
            </p>
            <div className="space-y-6 pt-4">
              {BRAND_STORY.whyUs.map((item, i) => (
                <div key={i} className="group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 md:w-8 h-px bg-brand-gold/40 group-hover:w-10 md:group-hover:w-12 transition-all" />
                    <div className="font-bold text-white uppercase text-[10px] tracking-widest">{item.title}</div>
                  </div>
                  <p className="text-sm text-brand-cream/60 font-light pl-9 md:pl-12">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold/60 mb-4">The Founders</div>
            {BRAND_STORY.founders.map((founder, i) => (
              <div key={i} className="p-6 md:p-8 rounded-2xl md:rounded-[2rem] bg-brand-navy/60 border border-white/10 space-y-3 hover:border-brand-gold/40 transition-all">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="font-serif text-xl md:text-2xl font-bold text-white">{founder.name}</div>
                    <div className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">{founder.role}</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                    {i === 0 ? <Briefcase size={18} /> : <Layers size={18} />}
                  </div>
                </div>
                <p className="text-sm text-brand-cream/60 leading-relaxed font-light italic">"{founder.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Market Opportunity */}
      <Section id="market" label="Market Thesis" title={<>A ₹22,100 Cr Market <span className="italic text-brand-gold/60">Growing at 22% CAGR</span></> as any}>
        <div className="space-y-12">
          <p className="text-base md:text-lg text-brand-cream/60 leading-relaxed font-light max-w-4xl">
            The Indian craft spirits market hit ₹22,100 Crore in 2024 and is growing at 22% CAGR. Super-premium IMFL grew 23% in a single year. But almost all the action is in Goa and South India — North India's premium shelves are dominated by imports.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {MARKET_STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 md:p-8 rounded-2xl md:rounded-[2rem] bg-brand-navy/60 border border-white/10 space-y-3 md:space-y-4 hover:border-brand-gold/40 transition-all"
              >
                <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-brand-gold/60">{stat.label}</div>
                <div className="text-2xl md:text-4xl font-serif font-bold text-white">{stat.value}</div>
                <div className="text-[9px] md:text-[10px] text-brand-cream/40 uppercase tracking-widest leading-tight">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Strategic Moat */}
      <Section id="moat" label="The Moat" title={<>Strategic <span className="italic text-brand-gold/60">Advantage</span></> as any}>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="space-y-8">
            {BRAND_STORY.whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 md:gap-6 items-start group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-brand-void transition-all">
                  {item.icon === 'Target' && <Target size={22} />}
                  {item.icon === 'Mountain' && <Mountain size={22} />}
                  {item.icon === 'Zap' && <Zap size={22} />}
                  {item.icon === 'ShieldCheck' && <ShieldCheck size={22} />}
                </div>
                <div className="space-y-1 pt-1">
                  <div className="font-bold text-white tracking-widest uppercase text-xs">{item.title}</div>
                  <p className="text-sm text-brand-cream/60 leading-relaxed font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="p-8 md:p-10 rounded-2xl md:rounded-[3rem] bg-brand-gold/10 border border-brand-gold/40 space-y-6">
            <div className="flex items-center gap-4">
              <Store className="text-brand-gold" size={28} />
              <div className="font-serif text-2xl md:text-3xl font-bold text-white">16 Licensed Outlets</div>
            </div>
            <p className="text-base text-brand-gold/90 leading-relaxed font-light">
              Gurgaon's Premium Corridor · Day 1 Distribution · Zero cost shelf placement. We don't just know the market; we ARE the market.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              {[
                { label: "Outlets", value: "16" },
                { label: "Distribution Cost", value: "₹0" },
                { label: "Time to Shelf", value: "Day 1" }
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-[8px] font-bold text-brand-cream/30 uppercase tracking-widest">{s.label}</div>
                  <div className="text-lg font-serif font-bold text-white mt-1">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Product Portfolio */}
      <Section id="products" label="The Portfolio" title={<>Super-Premium Spirits & <span className="italic text-brand-gold/60">Category-Defining RTDs</span></> as any}>
        <div className="grid gap-4 md:gap-6">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 md:p-8 rounded-2xl md:rounded-[2rem] bg-brand-navy/60 border border-white/10 hover:border-brand-gold/40 transition-all cursor-pointer overflow-hidden"
              onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-8">
                <div className="space-y-1">
                  <div className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">{product.type} · {product.line}</div>
                  <div className="text-xl md:text-2xl font-serif font-bold text-white">{product.name}</div>
                </div>
                <div className="flex items-center gap-4 md:gap-8">
                  <div className="text-xl md:text-2xl font-mono font-bold text-brand-gold-light">{product.price}</div>
                  <ChevronDown size={18} className={cn("text-brand-cream/40 transition-transform", expandedProduct === product.id && "rotate-180")} />
                </div>
              </div>
              {expandedProduct === product.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="pt-4 mt-4 border-t border-white/5 space-y-3"
                >
                  <p className="text-sm text-brand-cream/60 leading-relaxed">{product.description}</p>
                  <p className="text-xs text-brand-cream/40 italic">{product.comparison}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Competitive Landscape */}
      <Section id="competition" label="Competitive Landscape" title={<>Structural Cost <span className="italic text-brand-gold/60">Advantage</span></> as any}>
        <div className="space-y-8">
          <p className="text-base md:text-lg text-brand-cream/60 leading-relaxed font-light max-w-4xl">
            While Goa-based brands pay ₹12-18/bottle in freight to reach the North, Madira is made in the North, for the North. We capture the 20% retailer margin that others lose.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-brand-navy/60 border-b border-white/10">
                  <th className="px-4 md:px-6 py-3 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-brand-gold/60">Category</th>
                  <th className="px-4 md:px-6 py-3 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-brand-gold/60">Brand</th>
                  <th className="px-4 md:px-6 py-3 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-brand-gold/60">Price</th>
                  <th className="px-4 md:px-6 py-3 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-brand-gold/60 hidden md:table-cell">Moat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {COMPETITION.map((c, i) => (
                  <tr key={i} className={cn("transition-colors", c.highlight ? "bg-brand-gold/10" : "hover:bg-white/5")}>
                    <td className="px-4 md:px-6 py-3 text-xs text-brand-cream/40">{c.category}</td>
                    <td className="px-4 md:px-6 py-3 text-sm font-bold text-white">
                      {c.name}
                      {c.highlight && <span className="ml-2 px-2 py-0.5 rounded-full bg-brand-gold text-[8px] font-bold text-brand-void uppercase">★</span>}
                    </td>
                    <td className="px-4 md:px-6 py-3 text-sm font-mono text-brand-gold-light">{c.price}</td>
                    <td className="px-4 md:px-6 py-3 text-xs text-brand-cream/50 hidden md:table-cell">{c.moat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* GTM Strategy */}
      <Section id="gtm" label="Go-To-Market" title={<>Vertical Dominance → <span className="italic text-brand-gold/60">Digital Storytelling</span></> as any}>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {GTM_STRATEGY.map((step, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-2xl md:rounded-[2rem] bg-brand-navy/60 border border-white/10 space-y-4 hover:border-brand-gold/40 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold text-xs font-bold">{i + 1}</div>
                <div className="text-xs font-bold text-brand-gold uppercase tracking-[0.2em]">{step.phase}</div>
              </div>
              <p className="text-sm text-brand-cream/70 leading-relaxed font-light">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Traction */}
      <Section id="traction" label="Execution Roadmap" title={<>Traction & <span className="italic text-brand-gold/60">Milestones</span></> as any}>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-0">
            {TRACTION.map((item, i) => (
              <div key={i} className="flex gap-6 md:gap-8 relative py-6">
                {i !== TRACTION.length - 1 && <div className="absolute left-[19px] top-[48px] bottom-0 w-px bg-white/10" />}
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10",
                  item.status === 'done' ? "bg-brand-gold text-brand-void" :
                  item.status === 'active' ? "bg-brand-gold/20 text-brand-gold border border-brand-gold/40 animate-pulse" :
                  "bg-white/10 text-brand-cream/40 border border-white/20"
                )}>
                  {item.status === 'done' ? <Check size={16} /> : <Clock size={16} />}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[10px] font-bold text-brand-gold/80 uppercase tracking-widest">{item.date}</span>
                    {item.status === 'active' && <span className="px-2 py-0.5 rounded-full bg-brand-gold/20 text-[8px] font-bold text-brand-gold uppercase tracking-widest border border-brand-gold/40">Current</span>}
                  </div>
                  <div className="text-base font-bold text-white uppercase tracking-wider">{item.title}</div>
                  <p className="text-xs text-brand-cream/60 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6 content-start">
            {[
              { icon: <Award size={24} />, label: "Recipe", value: "Validated", sub: "Top Mixologists" },
              { icon: <Briefcase size={24} />, label: "Retail", value: "16 Stores", sub: "Priority Access" },
              { icon: <Layers size={24} />, label: "Supply", value: "Secured", sub: "Ashmira Distillery" },
              { icon: <ShieldCheck size={24} />, label: "License", value: "In-Process", sub: "Excise Dept" }
            ].map((card, i) => (
              <div key={i} className="p-5 md:p-8 rounded-2xl md:rounded-[2rem] bg-brand-navy/60 border border-white/10 space-y-4 md:space-y-6 hover:border-brand-gold/40 transition-all">
                <div className="text-brand-gold">{card.icon}</div>
                <div>
                  <div className="text-[8px] font-bold uppercase tracking-widest text-brand-gold/60 mb-1">{card.label}</div>
                  <div className="text-xl md:text-2xl font-serif font-bold text-white">{card.value}</div>
                  <div className="text-[9px] text-brand-cream/40 uppercase tracking-widest mt-1">{card.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section id="team" label="Leadership" title={<>The <span className="italic text-brand-gold/60">Founders</span></> as any}>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="space-y-6">
            <p className="text-base md:text-lg text-brand-cream/60 leading-relaxed font-light border-l border-brand-gold/20 pl-6">
              Our team combines the "Street Smart" of retail dominance with the "Scale Smart" of corporate operations. We don't just know how to make gin; we know exactly where and how it sells.
            </p>
            <div className="p-6 md:p-8 rounded-2xl md:rounded-[2rem] bg-brand-gold/10 border border-brand-gold/40 space-y-4">
              <div className="flex items-center gap-4">
                <Award className="text-brand-gold" size={24} />
                <div className="font-serif text-xl md:text-2xl font-bold text-white">The Competitive Advantage</div>
              </div>
              <p className="text-sm text-brand-gold/90 leading-relaxed font-light">
                Operating 16 of Gurgaon's most premium L-2 retail outlets. We don't just know the market; we ARE the market.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            {TEAM.map((member, i) => (
              <div key={i} className="p-6 md:p-8 rounded-2xl md:rounded-[2rem] bg-brand-navy/60 border border-white/10 flex gap-4 md:gap-6 items-start hover:border-brand-gold/40 transition-all">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
                  {i === 0 ? <Briefcase size={24} /> : <Layers size={24} />}
                </div>
                <div className="space-y-2">
                  <div className="font-serif text-xl md:text-2xl font-bold text-white">{member.name}</div>
                  <div className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">{member.role}</div>
                  <p className="text-xs md:text-sm text-brand-cream/70 leading-relaxed font-light">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Financials */}
      <Section id="financials" label="The Economics" title={<>Financial <span className="italic text-brand-gold/60">Highlights</span></> as any}>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-6">
            <div className="p-6 md:p-10 rounded-2xl md:rounded-[2rem] bg-brand-gold/10 border border-brand-gold/30 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gold/60">Y3 Revenue</div>
                  <div className="text-3xl md:text-4xl font-serif font-bold text-white mt-1">₹67.7 Cr</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gold/60">Y3 EBITDA</div>
                  <div className="text-3xl md:text-4xl font-serif font-bold text-white mt-1">₹20.2 Cr</div>
                </div>
              </div>
              <div className="pt-6 border-t border-white/10 space-y-4">
                {FINANCIALS.map((stat, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-sm text-brand-cream/60">{stat.label}</span>
                    <span className="text-lg md:text-xl font-serif font-bold text-white">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-5 md:p-6 rounded-2xl bg-brand-navy/60 border border-white/10 flex items-center gap-4">
              <CheckCircle2 className="text-brand-gold shrink-0" size={20} />
              <span className="text-sm text-brand-cream/60">Break-even at ~4,000 bottles/month (Month 5)</span>
            </div>
          </div>

          {/* Use of Funds + Pie */}
          <div className="space-y-8">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold/60">Use of Funds · ₹75L Raise</div>
            <div className="relative aspect-square max-w-[300px] mx-auto">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={USE_OF_FUNDS} cx="50%" cy="50%" innerRadius="65%" outerRadius="95%" paddingAngle={8} dataKey="value" stroke="none">
                    {USE_OF_FUNDS.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={['#C8891E', '#E8A832', '#F5D98A', '#0B1422', '#64748b'][index % 5]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <div className="text-4xl md:text-5xl font-serif font-bold text-white">₹75L</div>
                <div className="text-[10px] text-brand-cream/40 uppercase tracking-widest mt-1">Seed Round</div>
              </div>
            </div>
            <div className="space-y-3">
              {USE_OF_FUNDS.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: ['#C8891E', '#E8A832', '#F5D98A', '#0B1422', '#64748b'][i % 5] }} />
                  <div className="flex justify-between flex-1">
                    <span className="text-sm text-white font-medium">{item.label}</span>
                    <span className="text-sm text-brand-gold font-bold">{item.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 px-4 md:px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-gold/5 blur-[100px]" />
        </div>
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
            Join the Journey
          </h2>
          <p className="text-base md:text-lg text-brand-cream/50 font-light">
            We are closing our Seed round. Build the future of Indian craft spirits with us.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => window.open('mailto:jai.sharma6696@gmail.com?subject=Investment Interest: Madira')}
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-brand-gold text-brand-void font-black text-sm tracking-[0.2em] uppercase shadow-xl"
            >
              Invest Now
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="w-full sm:w-auto px-10 py-5 rounded-full border border-white/10 text-brand-cream font-bold text-sm tracking-[0.2em] uppercase hover:bg-white/5 transition-colors"
            >
              Return to Story
            </button>
            <button
              onClick={onSwitchToMemo}
              className="w-full sm:w-auto px-10 py-5 rounded-full border border-white/10 text-brand-cream font-bold text-sm tracking-[0.2em] uppercase hover:bg-white/5 transition-colors"
            >
              Read IC Memo
            </button>
          </div>
          <div className="pt-8 grid grid-cols-3 gap-6 border-t border-white/5">
            {[
              { label: "Target", value: "₹75L" },
              { label: "Min. Ticket", value: "₹2.5L" },
              { label: "Status", value: "Closing" }
            ].map((item, i) => (
              <div key={i}>
                <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-brand-gold/40">{item.label}</div>
                <div className="text-lg md:text-xl font-serif font-bold text-white mt-1">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-brand-cream/30 font-bold">
          <div>{BRAND_NAME} · Confidential Investor Presentation</div>
          <div>March 2026</div>
        </div>
      </footer>
    </div>
  );
}
