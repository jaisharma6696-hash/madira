import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { BRAND_NAME, MARKET_STATS, COMPETITION, USE_OF_FUNDS, GTM_STRATEGY, TRACTION, TEAM, FINANCIALS, PRODUCTS, BRAND_VIDEO_URL } from '../../constants';
import { 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Target, 
  Mountain, 
  Droplets, 
  Zap, 
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Palette,
  Compass,
  Layers,
  Play,
  Check,
  Clock,
  Award,
  Briefcase,
  Shield,
  ArrowUpRight,
  Sparkles,
  X,
  Loader2,
  Store,
  GlassWater,
  Globe,
  Volume2,
  VolumeX
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { InvestmentCalculator } from '../InvestmentCalculator';
import { cn } from '../ui';
import { NoiseOverlay } from '../NoiseOverlay';
import { CinematicHero } from '../CinematicHero';

const Section = ({ id, title, label, children, className }: { id: string; title: string; label: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`py-24 md:py-32 border-b border-white/5 ${className}`}>
    <div className="max-w-6xl mx-auto px-6">
      <div className="space-y-4 mb-16">
        <div className="section-label">{label}</div>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

export function HomePage({ onNavigate, onProductSelect }: { onNavigate: (page: string) => void, onProductSelect: (p: typeof PRODUCTS[0]) => void }) {
  const [compCategory, setCompCategory] = useState('Gin');
  const [isMuted, setIsMuted] = useState(true);
  
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-screen bg-brand-void relative overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        {/* Cinematic Frame / Mask */}
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black to-transparent z-10 pointer-events-none opacity-80" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black to-transparent z-10 pointer-events-none opacity-80" />
        
        <CinematicHero />

        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-12 right-12 z-20 p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-gold/40 text-brand-cream/60 transition-all backdrop-blur-md hidden md:flex group"
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 className="text-brand-gold group-hover:scale-110 transition-transform" size={20} />}
        </button>


        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="text-center space-y-8 md:space-y-12 max-w-6xl z-10"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-brand-gold/5 border border-brand-gold/15 text-brand-gold text-[10px] md:text-[12px] font-bold uppercase tracking-[0.4em] backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse shadow-[0_0_8px_rgba(200,137,30,0.8)]" />
            Friends & Family Round · March 2026
          </motion.div>
          
          <h1 className="text-7xl sm:text-9xl md:text-[14rem] font-black gold-gradient leading-[0.8] tracking-[-0.04em] flex justify-center flex-wrap overflow-hidden py-4 md:py-6">
            {BRAND_NAME.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%", opacity: 0, scale: 1.1 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.06 + 0.2
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="text-2xl sm:text-3xl md:text-5xl font-serif italic text-brand-cream/90 font-light tracking-wide max-w-4xl mx-auto leading-tight">
              India built the world’s oldest drinking culture. <br />
              It never built a global spirits house.
            </p>
            <p className="text-2xl md:text-4xl gold-gradient font-bold uppercase tracking-widest mt-4">
              Madira is that house.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 pt-12 px-6"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('products')}
              className="px-8 py-4 rounded-full bg-brand-gold text-brand-void font-bold text-[10px] tracking-[0.2em] uppercase shadow-2xl transition-all"
            >
              Explore Spirits
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { 
                const gola = PRODUCTS.find(p => p.line === "Innovation Line");
                if (gola) onProductSelect(gola);
              }}
              className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-brand-cream font-bold text-[10px] tracking-[0.2em] uppercase transition-all backdrop-blur-md"
            >
              Experience Gola
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('invest')}
              className="px-8 py-4 rounded-full border border-brand-gold/30 text-brand-gold font-bold text-[10px] tracking-[0.2em] uppercase transition-all backdrop-blur-md"
            >
              For Trade / Investors
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Category Creation Block */}
      <section className="py-24 md:py-40 bg-brand-void relative z-10 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold uppercase tracking-[0.5em] text-xs"
          >
            The Opportunity
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif font-bold text-white leading-tight"
          >
            $52B Market. <br />
            <span className="italic text-brand-gold/60">Zero global Indian luxury spirits brand.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-3xl text-brand-cream/40 font-light max-w-4xl mx-auto leading-relaxed"
          >
            This is not a brand launch. <br />
            <span className="text-brand-cream">This is a category creation.</span>
          </motion.p>
        </div>
      </section>

      {/* Dual Engine Section */}
      <section className="relative grid lg:grid-cols-2 min-h-[80vh] border-b border-white/5">
        {/* Left: Madira Luxury */}
        <motion.div 
          whileHover="hover"
          className="relative flex flex-col justify-center p-12 md:p-24 overflow-hidden group border-r border-white/5"
        >
          <div className="absolute inset-0 bg-brand-navy opacity-40 group-hover:opacity-60 transition-opacity duration-1000" />
          <motion.div 
            variants={{ hover: { scale: 1.05 } }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-0"
          >
            <img src="/bespoke/single_malt_cave.png" className="w-full h-full object-cover grayscale opacity-20" />
          </motion.div>
          
          <div className="relative z-10 space-y-6">
            <div className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px]">Madira</div>
            <h3 className="text-5xl md:text-7xl font-serif font-bold text-white">The Luxury <br /><span className="italic text-brand-gold/60">Engine</span></h3>
            <div className="space-y-4 pt-8">
              {['High Margin', 'Brand Building', 'Export Play'].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-brand-cream/60 font-light tracking-wide">
                  <div className="w-1 h-1 rounded-full bg-brand-gold" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Madira Gola Scale */}
        <motion.div 
          whileHover="hover"
          className="relative flex flex-col justify-center p-12 md:p-24 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-brand-gold/5 group-hover:bg-brand-gold/10 transition-colors duration-500" />
          <motion.div 
            variants={{ hover: { x: [0, -10, 10, -10, 0], y: [0, 5, -5, 5, 0] } }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror" }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,137,30,0.1)_0%,transparent_70%)]" />
          </motion.div>

          <div className="relative z-10 space-y-6">
            <div className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px]">Madira Gola</div>
            <h3 className="text-5xl md:text-7xl font-serif font-bold text-white">The Scale <br /><span className="italic text-brand-gold/60">Engine</span></h3>
            <div className="space-y-4 pt-8">
              {['High Velocity', 'Viral Format', 'Youth Adoption'].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-brand-cream/60 font-light tracking-wide">
                  <div className="w-1 h-1 rounded-full bg-brand-gold" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>


      {/* Brand Story & Identity Section */}
      <Section id="brand" label="Brand Identity" title="The Soul of Madira" className="bg-brand-navy/10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-brand-gold/40" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">The Story</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                Born at 3,000 Feet. <br />
                <span className="italic text-brand-gold/60">Refined for the World.</span>
              </h3>
              <p className="text-lg text-brand-cream/60 leading-relaxed font-light">
                Madira isn't just a name; it's a reclamation. For 5,000 years, India has distilled spirits from flowers, grains, and fruits. We are bringing that heritage back, using the precision of modern Dutch engineering (iStill) and the purity of Himalayan spring water.
              </p>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/5 italic text-brand-cream/40 font-light leading-relaxed">
                "We didn't start in a boardroom in Mumbai. We started at a natural spring in Sirmour, HP, where the water is so pure it needs no chemical treatment. That purity is the foundation of every drop we bottle."
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <Palette className="text-brand-gold" size={24} />
                <div className="font-bold text-white tracking-tight uppercase text-xs">Visual Identity</div>
                <p className="text-xs text-brand-cream/40 leading-relaxed">
                  Deep Himalayan Navy meets Sun-drenched Gold. Minimalist typography inspired by ancient Sanskrit manuscripts, reimagined for a global luxury audience.
                </p>
              </div>
              <div className="space-y-4">
                <Compass className="text-brand-gold" size={24} />
                <div className="font-bold text-white tracking-tight uppercase text-xs">Core Values</div>
                <p className="text-xs text-brand-cream/40 leading-relaxed">
                  Radical Transparency, Provenance-First Sourcing, and Zero-Compromise Engineering. We don't hide behind marketing; we lead with the liquid.
                </p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square rounded-[4rem] overflow-hidden group">
            <img 
              src="/bespoke/mountain_source.png" 
              alt="Himalayan Mountains" 
              className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand-void via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12 right-12 space-y-4">
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold">Sirmour, Himachal Pradesh</div>
              <div className="text-2xl font-serif font-bold text-white">The Source of Madira</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Product Section */}
      <Section id="product" label="The Portfolio" title="Strategic Architecture" className="bg-brand-navy/20">
        <div className="space-y-32">
          {/* Portfolio Lines */}
          {[
            {
              line: "Core Revenue Line",
              desc: "High-volume, premium-entry spirits designed for immediate market penetration and brand building.",
              products: PRODUCTS.filter(p => p.line === "Core Revenue Line")
            },
            {
              line: "Premium Prestige Line",
              desc: "A sophisticated bridge between our core range and ultra-premium reserves, targeting the established whiskey drinker.",
              products: PRODUCTS.filter(p => p.line === "Premium Prestige Line")
            },
            {
              line: "Halo Icon Line",
              desc: "Our crown jewel, leveraging high-altitude mountain maturation to build global prestige and collector value.",
              products: PRODUCTS.filter(p => p.line === "Halo Icon Line")
            },
            {
              line: "Innovation Line",
              desc: "Category-disrupting formats targeting the high-energy, convenience, and travel retail segments.",
              products: PRODUCTS.filter(p => p.line === "Innovation Line")
            }
          ].map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
                <div className="space-y-4 max-w-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-px bg-brand-gold/40" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">{group.line}</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-serif font-bold text-white">{group.line.split(' ')[0]} <span className="italic text-brand-gold/60">{group.line.split(' ')[1]}</span></h3>
                  <p className="text-brand-cream/60 font-light leading-relaxed">{group.desc}</p>
                </div>
                <div className="hidden md:block text-[10px] font-bold text-brand-gold/20 uppercase tracking-widest">
                  {group.products.length} {group.products.length === 1 ? 'Expression' : 'Expressions'}
                </div>
              </div>

              <div className={cn(
                "grid gap-6 md:gap-8",
                group.products.length === 1 ? "md:grid-cols-1 max-w-4xl" : 
                group.products.length === 2 ? "md:grid-cols-2" : 
                "md:grid-cols-2 lg:grid-cols-3"
              )}>
                {group.products.map((product, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => onProductSelect(product)}
                    className={cn(
                      "glass-card p-8 md:p-10 space-y-6 md:space-y-8 flex flex-col group cursor-pointer border-white/5 hover:border-brand-gold/40 hover:bg-brand-gold/[0.02] transition-all active:scale-[0.98] relative overflow-hidden",
                      group.line === "Halo Icon Line" ? "border-brand-gold/30 bg-brand-gold/[0.02]" : ""
                    )}
                  >
                    {/* Light Sweep Effect */}
                    <div className="absolute inset-0 bg-linear-to-tr from-transparent via-brand-gold/5 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                    
                    {/* Click Indicator Overlay */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-[8px] font-bold text-brand-gold uppercase tracking-widest">
                        View Details
                        <ArrowUpRight size={12} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gold/40">{product.type}</div>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-white group-hover:gold-gradient transition-all">{product.name}</h3>
                    </div>
                    <p className="text-sm md:text-base text-brand-cream/60 leading-relaxed italic font-light">
                      "{product.description}"
                    </p>
                    <div className="p-4 rounded-xl bg-brand-gold/5 border border-brand-gold/10">
                      <div className="text-[8px] font-bold uppercase tracking-widest text-brand-gold/40 mb-1">Market Positioning</div>
                      <p className="text-[10px] text-brand-gold/80 leading-tight font-medium">{product.positioning}</p>
                    </div>
                    <div className="space-y-6 flex-1 flex flex-col justify-end">
                      <div className="flex flex-wrap gap-2">
                        {product.details.slice(0, 3).map(tag => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-brand-cream/40 border border-white/5">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                        <span className="text-xl md:text-2xl font-serif font-bold text-brand-gold-light">{product.price}</span>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-brand-gold uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-all">
                          Explore
                          <ArrowRight size={14} className="-translate-x-1 group-hover:translate-x-0 transition-all" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Proof Section: The Moat */}
      <section className="py-24 md:py-40 bg-brand-navy/10 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 space-y-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="section-label">Structural Proof</div>
              <h2 className="text-5xl md:text-8xl font-serif font-bold text-white leading-tight">
                Forced <br />
                <span className="italic text-brand-gold/60">Inevitability.</span>
              </h2>
              <p className="text-xl md:text-2xl text-brand-cream/60 font-light leading-relaxed">
                Most brands launch with hope. <br />
                <span className="text-brand-cream">We launch with the shelf.</span>
              </p>
            </div>

            <div className="grid gap-6">
              {[
                { 
                  title: "16 OWNED STORES", 
                  value: "Guaranteed day-1 shelf", 
                  sub: "18 months advantage vs local competitors.",
                  icon: <Store className="text-brand-gold" size={24} /> 
                },
                { 
                  title: "₹100 RTD DOMINANCE", 
                  value: "The Premium Gap", 
                  sub: "BuzzBalls proved the format; we own the luxury tier.",
                  icon: <TrendingUp className="text-brand-gold" size={24} /> 
                },
                { 
                  title: "22% CAGR BOOM", 
                  value: "The Strategic Timing", 
                  sub: "India is entering its golden age of premiumisation.",
                  icon: <Target className="text-brand-gold" size={24} /> 
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="p-8 md:p-12 rounded-[3rem] bg-white/5 border border-white/10 hover:border-brand-gold/40 transition-all group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center">
                      {card.icon}
                    </div>
                    <div className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.4em]">Proof 0{i+1}</div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white tracking-tight">{card.title}</h3>
                    <div className="text-lg text-brand-gold/80 font-serif italic">{card.value}</div>
                    <p className="text-sm text-brand-cream/40 font-light">{card.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Comparison Table */}
      <section className="py-24 md:py-32 bg-brand-void border-b border-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          <div className="text-center space-y-4">
            <div className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px]">The Premium Gap</div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">Why Madira <span className="italic text-brand-gold/60">Wins</span></h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-brand-gold/20">
                  <th className="py-6 px-4 text-brand-cream/40 text-[10px] font-bold uppercase tracking-widest">Feature</th>
                  <th className="py-6 px-4 text-brand-cream/60 text-xl font-serif">BuzzBalls (Incumbent)</th>
                  <th className="py-6 px-4 text-brand-gold text-xl font-serif">Madira (The Future)</th>
                </tr>
              </thead>
              <tbody className="text-brand-cream/80">
                {[
                  { feature: "Price Point", incumbent: "₹100 (Mass)", madira: "₹350 (Premium)" },
                  { feature: "Liquid Quality", incumbent: "Industrial / Synthetic", madira: "Himalayan Craft Spirit" },
                  { feature: "Narrative", incumbent: "None / Functional", madira: "Civilisational / Luxury" },
                  { feature: "Margin Structure", incumbent: "Thin (Scalp play)", madira: "High (Luxury play)" },
                  { feature: "Retail Control", incumbent: "Merchant-led", madira: "Owned Ecosystem (16 Stores)" }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
                    <td className="py-6 px-4 font-bold text-[10px] uppercase tracking-widest text-brand-gold/40">{row.feature}</td>
                    <td className="py-6 px-4 text-sm font-light italic opacity-40">{row.incumbent}</td>
                    <td className="py-6 px-4 text-lg font-medium text-brand-cream">{row.madira}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Strategic Framework Section */}
      <Section id="strategy" label="Strategic Framework" title="The Investment Case">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Target className="text-brand-gold" />,
              label: "The Why",
              title: "Market Disruption",
              desc: "India's craft spirits market is at a 22% CAGR inflection point. Premiumization is no longer a trend; it's the new baseline for the 150M+ legal drinking age Gen-Z/Millennials."
            },
            {
              icon: <Layers className="text-brand-gold" />,
              label: "The What",
              title: "Vertical Integration",
              desc: "A Himalayan-born craft spirits house that owns its supply chain—from pure spring water sourcing to 16 proprietary retail outlets in India's highest-spending liquor market."
            },
            {
              icon: <Zap className="text-brand-gold" />,
              label: "The How",
              title: "Structural Moat",
              desc: "By eliminating middleman margins and freight costs from Goa, we capture a 20% EBITDA advantage that competitors simply cannot match without relocating their entire infrastructure."
            }
          ].map((item, i) => (
            <div key={i} className="glass-card p-10 space-y-6 border-t-2 border-t-brand-gold/20">
              <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center">
                {item.icon}
              </div>
              <div className="space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold/60">{item.label}</div>
                <h3 className="text-2xl font-serif font-bold text-white">{item.title}</h3>
              </div>
              <p className="text-sm text-brand-cream/40 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* GTM Strategy Sub-section */}
        <div className="mt-24 md:mt-32 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold/60">Execution Strategy</div>
            <h3 className="text-4xl md:text-7xl font-serif font-bold text-white leading-tight">Go-To-Market <span className="italic text-brand-gold/60">Roadmap</span></h3>
            <p className="text-lg md:text-xl text-brand-cream/60 leading-relaxed font-light">
              Our strategy is built on the foundation of our 16 owned stores, ensuring immediate cash flow and consumer data from Day 1.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-brand-gold/20 -translate-y-1/2 z-0" />
            
            {GTM_STRATEGY.map((step, i) => {
              const Icon = { Store, GlassWater, Globe }[step.icon as string] || Target;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="relative z-10 glass-card p-10 space-y-8 group hover:border-brand-gold/40 transition-all shadow-xl bg-brand-navy/40 backdrop-blur-md"
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-void transition-all duration-500">
                    <Icon size={32} />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-brand-gold/40 uppercase tracking-widest">Phase 0{i + 1}</span>
                      <div className="h-px flex-1 bg-brand-gold/10" />
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-white group-hover:text-brand-gold transition-colors">{step.phase.split(': ')[1]}</h4>
                    <p className="text-sm text-brand-cream/60 leading-relaxed font-light">{step.desc}</p>
                  </div>

                  <div className="pt-6 flex items-center gap-2 text-[10px] font-bold text-brand-gold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    Strategic Priority
                    <ArrowRight size={12} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="p-10 md:p-16 rounded-[3rem] bg-brand-gold/5 border border-brand-gold/20 flex flex-col md:flex-row items-center gap-12 shadow-2xl">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] bg-brand-gold flex items-center justify-center text-brand-void shadow-2xl shadow-brand-gold/40 shrink-0">
              <Target size={48} />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h4 className="text-3xl md:text-4xl font-serif font-bold text-white">The Vertical Integration Moat</h4>
              <p className="text-lg md:text-xl text-brand-gold/80 leading-relaxed font-light max-w-3xl">
                Our 16 owned stores in Gurgaon are not just retail points; they are data hubs and marketing engines that de-risk our entire launch phase. We capture the 20% retailer margin internally.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Traction Section */}
      <Section id="traction" label="The Momentum" title="Execution Roadmap" className="bg-brand-navy/10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-16 relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-4 bottom-4 w-px bg-linear-to-b from-brand-gold via-brand-gold/20 to-transparent hidden md:block" />
              
              {TRACTION.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-8 md:gap-12 relative group"
                >
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 z-10 shadow-2xl transition-all duration-500 group-hover:scale-110",
                    item.status === 'done' ? "bg-brand-gold text-brand-void" : 
                    item.status === 'active' ? "bg-brand-gold/20 text-brand-gold border border-brand-gold/40 ring-4 ring-brand-gold/10" : 
                    "bg-white/5 text-brand-cream/20 border border-white/10"
                  )}>
                    {item.status === 'done' ? <Check size={28} /> : <Clock size={28} />}
                  </div>
                  
                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.3em] bg-brand-gold/10 px-3 py-1 rounded-full">{item.date}</div>
                      {item.status === 'active' && (
                        <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold text-[8px] font-bold text-brand-void uppercase tracking-widest animate-pulse">
                          <Sparkles size={10} />
                          Active Phase
                        </span>
                      )}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-serif text-3xl font-bold text-white group-hover:text-brand-gold transition-colors">{item.title}</h4>
                      <p className="text-lg text-brand-cream/60 leading-relaxed font-light max-w-xl">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand-gold/20 blur-[100px] rounded-full opacity-20" />
            <div className="relative glass-card p-12 space-y-10 border-brand-gold/30 bg-brand-gold/[0.02]">
              <div className="space-y-4">
                <div className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.3em]">Market Readiness</div>
                <h4 className="text-4xl font-serif font-bold text-white leading-tight">Secured & <br /><span className="italic text-brand-gold/60">Validated</span></h4>
              </div>
              
              <div className="space-y-8">
                {[
                  { label: "Retail Partners", value: "16 Premium L-2 Stores", icon: <Store size={20} /> },
                  { label: "Production Tech", value: "iStill NextGen (Netherlands)", icon: <Zap size={20} /> },
                  { label: "Water Source", value: "Private Himalayan Spring", icon: <Droplets size={20} /> }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-gold/20 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                      {stat.icon}
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold text-brand-gold/40 uppercase tracking-widest">{stat.label}</div>
                      <div className="text-lg font-serif font-bold text-white">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Financials Section */}
      <Section id="financials" label="The Math" title="Financial Highlights">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6">
            <div className="p-8 md:p-10 rounded-3xl bg-brand-navy/50 border border-brand-gold/20 space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gold/40">Y3 Revenue</div>
                  <div className="text-3xl md:text-4xl font-serif font-bold text-white">₹67.7 Cr</div>
                </div>
                <div className="space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gold/40">Y3 EBITDA</div>
                  <div className="text-3xl md:text-4xl font-serif font-bold text-white">₹20.2 Cr</div>
                </div>
              </div>
              <div className="pt-8 border-t border-white/5 space-y-4">
                {FINANCIALS.map((stat, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-sm text-brand-cream/60">{stat.label}</span>
                    <span className="text-xl font-serif font-bold text-brand-gold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="p-8 md:p-10 rounded-3xl bg-brand-navy/50 border border-brand-gold/20 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gold/40 mb-2">Net Realization</div>
                  <div className="text-2xl md:text-4xl font-serif font-bold text-white">₹1,075 – 1,355</div>
                </div>
                <div className="sm:text-right">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gold/40 mb-2">Gross Profit</div>
                  <div className="text-2xl md:text-4xl font-serif font-bold text-brand-gold-light">~₹500 – 800</div>
                </div>
              </div>
              <div className="h-px bg-white/5" />
              <div className="flex items-center gap-4 text-xs md:text-sm text-brand-cream/40 leading-relaxed">
                <CheckCircle2 className="text-brand-gold shrink-0" size={18} />
                Break-even at ~4,000 bottles/month (Achievable by Month 5)
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-brand-cream/30 mb-2">Y3 Net Revenue</div>
                <div className="text-xl md:text-2xl font-serif font-bold text-white">₹67.7 Cr</div>
              </div>
              <div className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-brand-cream/30 mb-2">Y3 EBITDA</div>
                <div className="text-xl md:text-2xl font-serif font-bold text-white">₹20.2 Cr</div>
              </div>
            </div>
          </div>
        </div>

        {/* Use of Funds Sub-section */}
        <div className="mt-32 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold/60">Capital Allocation</div>
            <h3 className="text-3xl md:text-6xl font-serif font-bold text-white leading-tight">Use of <br /><span className="italic text-brand-gold/60">Funds</span></h3>
            <div className="space-y-8">
              {USE_OF_FUNDS.map((item, i) => (
                <div key={i} className="flex items-center gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-brand-navy/60 border border-white/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-void transition-all shadow-lg">
                    <span className="text-xl font-serif font-bold">{item.value}%</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="text-lg text-white font-medium tracking-wide uppercase">{item.label}</div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full bg-brand-gold"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square flex items-center justify-center">
            <div className="w-full h-full max-w-[500px] max-h-[500px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={USE_OF_FUNDS}
                    cx="50%"
                    cy="50%"
                    innerRadius="70%"
                    outerRadius="95%"
                    paddingAngle={12}
                    dataKey="value"
                    stroke="none"
                  >
                    {USE_OF_FUNDS.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={['#C8891E', '#E8A832', '#F5D98A', '#0B1422', '#64748b'][index % 5]} 
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <div className="text-[10px] font-bold text-brand-gold/60 uppercase tracking-[0.5em] mb-2">Total Raise</div>
                <div className="text-6xl font-serif font-bold text-white">₹75L</div>
                <div className="text-[10px] text-brand-cream/40 uppercase tracking-widest mt-2">Seed Round</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section id="team" label="Leadership" title="The Founders">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-xl text-brand-cream/60 leading-relaxed font-light border-l border-brand-gold/20 pl-8">
              Our team combines the "Street Smart" of retail dominance with the "Scale Smart" of corporate operations. We don't just know how to make gin; we know exactly where and how it sells.
            </p>
            <div className="p-10 rounded-[3rem] bg-brand-gold/10 border border-brand-gold/40 space-y-6 shadow-xl">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-[1.5rem] bg-brand-gold flex items-center justify-center text-brand-void shadow-2xl shadow-brand-gold/40">
                  <Award size={32} />
                </div>
                <div className="font-serif text-3xl font-bold text-white">The Competitive Advantage</div>
              </div>
              <p className="text-lg text-brand-gold/90 leading-relaxed font-light">
                Operating 16 of Gurgaon's most premium L-2 retail outlets. We don't just know the market; we IS the market.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            {TEAM.map((member, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-brand-navy/60 border border-white/10 flex gap-10 items-start group hover:border-brand-gold/40 transition-all shadow-lg">
                <div className="w-20 h-20 rounded-[1.5rem] bg-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-brand-void transition-all">
                  {i === 0 ? <Briefcase size={32} /> : <Layers size={32} />}
                </div>
                <div className="space-y-3">
                  <div className="font-serif text-3xl font-bold text-white">{member.name}</div>
                  <div className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">{member.role}</div>
                  <p className="text-base text-brand-cream/80 leading-relaxed font-light">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Investment Calculator Section */}
      <Section id="calculator" label="The Returns" title="Investment Calculator" className="bg-brand-gold/[0.02]">
        <InvestmentCalculator />
      </Section>

      {/* Invest Section */}
      {/* Final Conversion Section */}
      <section className="py-24 md:py-48 bg-brand-void relative overflow-hidden border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-8xl font-serif font-bold text-white leading-tight">
                This is the <br />
                <span className="italic text-brand-gold/60">Moment.</span>
              </h2>
              <p className="text-xl md:text-2xl text-brand-cream/60 font-light leading-relaxed max-w-xl">
                The timing window for Indian luxury spirits is open. <br />
                <span className="text-brand-cream">Are you building it with us?</span>
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* For Consumers */}
              <div className="glass-card p-10 space-y-8 group border-brand-gold/20 hover:border-brand-gold/60 transition-all">
                <div className="space-y-2">
                  <div className="text-[10px] font-bold text-brand-gold/40 uppercase tracking-widest">For Consumers</div>
                  <h3 className="text-3xl font-serif font-bold text-white">Experience</h3>
                </div>
                <p className="text-sm text-brand-cream/40 font-light">Discover the collection and find your nearest Madira experience point.</p>
                <button 
                  onClick={() => onNavigate('products')}
                  className="w-full py-4 rounded-full bg-white/5 border border-white/10 text-brand-cream font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-white/10 transition-all"
                >
                  Explore Collection
                </button>
              </div>

              {/* For Partners */}
              <div className="glass-card p-10 space-y-8 group border-brand-gold bg-brand-gold/5 hover:bg-brand-gold/10 transition-all">
                <div className="space-y-2">
                  <div className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">For Partners</div>
                  <h3 className="text-3xl font-serif font-bold text-white">Scale</h3>
                </div>
                <p className="text-sm text-brand-cream/60 font-medium">Access the Trade Deck and Investment Memorandum for Phase 1.</p>
                <button 
                  onClick={() => onNavigate('invest')}
                  className="w-full py-4 rounded-full bg-brand-gold text-brand-void font-bold text-[10px] tracking-[0.2em] uppercase hover:scale-105 transition-all shadow-xl shadow-brand-gold/20"
                >
                  Request Access
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
