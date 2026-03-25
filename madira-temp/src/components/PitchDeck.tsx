import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { SLIDES, BRAND_NAME, COMPETITION, USE_OF_FUNDS, PRODUCTS, GTM_STRATEGY, CORE_VALUES, VISUAL_IDENTITY, BRAND_STORY, TRACTION, TEAM, FINANCIALS, BRAND_VIDEO_URL } from '../constants';
import { cn } from './ui';
import { 
  ChevronRight, 
  ChevronLeft, 
  LayoutGrid, 
  FileText, 
  Check, 
  ArrowUpRight, 
  ShieldCheck, 
  TrendingUp, 
  Zap,
  Target,
  Droplets,
  Mountain,
  Layers,
  BarChart3,
  PieChart as PieIcon,
  X,
  Users,
  Calendar,
  Clock,
  Award,
  Briefcase,
  TrendingDown,
  Sparkles,
  Search,
  ArrowRight,
  Play
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

export function PitchDeck({ onSwitchToMemo }: { onSwitchToMemo: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState<typeof PRODUCTS[0] | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setActiveProduct(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const slide = SLIDES[currentSlide];

  const renderSlideContent = () => {
    switch (slide.id) {
      case 'brand-video':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center space-y-12">
            <div className="text-center space-y-4 max-w-3xl">
              <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-gold/60">Brand Film</div>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
                {slide.subtitle}
              </h2>
            </div>
            
            <div className="relative w-full max-w-5xl aspect-video rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl shadow-brand-gold/10">
              <img 
                src="https://images.unsplash.com/photo-1516533075015-a3838414c3ca?auto=format&fit=crop&q=80&w=2000" 
                alt="Himalayan Distillery" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-void/40 flex items-center justify-center group-hover:bg-brand-void/20 transition-all">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsVideoOpen(true)}
                  className="w-24 h-24 rounded-full bg-brand-gold text-brand-void flex items-center justify-center shadow-2xl shadow-brand-gold/50"
                >
                  <Play size={40} fill="currentColor" />
                </motion.button>
              </div>
              
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="space-y-1">
                  <div className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Duration</div>
                  <div className="text-white font-mono">01:45</div>
                </div>
                <div className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest">
                  4K Cinematic
                </div>
              </div>
            </div>
            
            <p className="text-xl text-brand-cream/80 max-w-2xl text-center font-light">
              {slide.content}
            </p>
          </div>
        );

      case 'whynow':
        return (
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center h-full">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-gold/60">The Inflection Point</div>
                <h2 className="text-5xl md:text-8xl font-serif font-bold text-white leading-[0.9] tracking-tighter">
                  {slide.subtitle}
                </h2>
              </div>
              <p className="text-xl text-brand-cream/80 leading-relaxed font-light border-l border-brand-gold/20 pl-8">
                {slide.content}
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                {[
                  { label: "Premium Gin", value: "+40%", sub: "YoY Growth" },
                  { label: "Demographics", value: "65%", sub: "Under 35 yrs" }
                ].map((stat, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-white/10 border border-white/10 group hover:border-brand-gold/40 transition-all">
                    <div className="text-[8px] font-bold uppercase tracking-widest text-brand-gold/60 mb-2">{stat.label}</div>
                    <div className="text-3xl font-serif font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-[10px] text-brand-cream/40 uppercase tracking-widest">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000" 
                alt="Premium Bar" 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-void via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12">
                <div className="glass-card p-10 border-brand-gold/40 text-center backdrop-blur-2xl bg-brand-navy/60">
                  <TrendingUp className="text-brand-gold mx-auto mb-6" size={40} />
                  <div className="text-3xl font-serif font-bold text-white leading-tight">Volume → Value</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'market':
        return (
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center h-full">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-gold/60">Market Thesis</div>
                <h2 className="text-5xl md:text-8xl font-serif font-bold text-white leading-[0.9] tracking-tighter">
                  {slide.subtitle}
                </h2>
              </div>
              <p className="text-xl text-brand-cream/80 leading-relaxed font-light border-l border-brand-gold/20 pl-8">
                {slide.content}
              </p>
              <div className="p-10 rounded-[3rem] bg-brand-gold/10 border border-brand-gold/30 flex items-center gap-10">
                <div className="flex -space-x-6">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-16 h-16 rounded-full border-4 border-brand-void bg-brand-navy flex items-center justify-center text-brand-gold text-sm font-bold shadow-xl">
                      {i}
                    </div>
                  ))}
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-serif font-bold text-white">150M+ Consumers</div>
                  <div className="text-[10px] text-brand-cream/60 uppercase tracking-widest font-bold">Gen-Z & Millennial Target</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {slide.stats?.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="p-10 rounded-[2.5rem] bg-brand-navy/60 border border-white/10 space-y-6 group hover:border-brand-gold/40 transition-all"
                >
                  <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-brand-gold/60">{stat.label}</div>
                  <div className="text-4xl md:text-5xl font-serif font-bold text-white">{stat.value}</div>
                  <div className="text-[10px] text-brand-cream/40 leading-tight uppercase tracking-widest">{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'story':
        return (
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center h-full">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold/60">The Narrative</div>
                <h2 className="text-4xl md:text-7xl font-serif font-bold text-white leading-[1.1] tracking-tight">
                  {BRAND_STORY.subtitle}
                </h2>
              </div>
              <p className="text-xl text-brand-cream/90 leading-relaxed font-serif italic border-l-2 border-brand-gold/40 pl-6">
                {BRAND_STORY.content}
              </p>
              
              <div className="grid gap-6 pt-4">
                {BRAND_STORY.whyUs.map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-8 h-px bg-brand-gold/40 group-hover:w-12 transition-all" />
                      <div className="font-bold text-white uppercase text-[10px] tracking-widest">{item.title}</div>
                    </div>
                    <p className="text-sm text-brand-cream/60 font-light pl-12">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold/60 mb-4">The Founders</div>
              {BRAND_STORY.founders.map((founder, i) => (
                <div key={i} className="p-8 rounded-[2.5rem] bg-brand-navy/60 border border-white/10 space-y-3 group hover:border-brand-gold/40 transition-all shadow-lg">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="font-serif text-2xl font-bold text-white">{founder.name}</div>
                      <div className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">{founder.role}</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                      {i === 0 ? <Briefcase size={18} /> : <Layers size={18} />}
                    </div>
                  </div>
                  <p className="text-sm text-brand-cream/60 leading-relaxed font-light italic">
                    "{founder.story}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'advantage':
        return (
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center h-full">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-gold/60">The Moat</div>
                <h2 className="text-5xl md:text-8xl font-serif font-bold text-white leading-[0.9] tracking-tighter">
                  {slide.subtitle}
                </h2>
              </div>
              <div className="space-y-8">
                {BRAND_STORY.whyUs.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex gap-8 items-start group"
                  >
                    <div className="w-16 h-16 rounded-[1.5rem] bg-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-brand-void transition-all shadow-lg">
                      {item.icon === 'Target' && <Target size={28} />}
                      {item.icon === 'Mountain' && <Mountain size={28} />}
                      {item.icon === 'Zap' && <Zap size={28} />}
                      {item.icon === 'ShieldCheck' && <ShieldCheck size={28} />}
                    </div>
                    <div className="space-y-2 pt-1">
                      <div className="font-bold text-white tracking-widest uppercase text-xs">{item.title}</div>
                      <p className="text-base text-brand-cream/60 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1000" 
                alt="Premium Retail" 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-void via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 p-10 glass-card border-brand-gold/40 backdrop-blur-2xl bg-brand-navy/60">
                <div className="text-[8px] font-bold uppercase tracking-[0.3em] text-brand-gold mb-3">Retail Dominance</div>
                <div className="text-3xl font-serif font-bold text-white">16 Licensed Outlets</div>
                <div className="text-sm text-brand-cream/60 mt-2 font-light">Gurgaon's Premium Corridor · Day 1 Distribution</div>
              </div>
            </div>
          </div>
        );

      case 'competition':
        return (
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center h-full">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-gold/60">Competitive Landscape</div>
                <h2 className="text-5xl md:text-8xl font-serif font-bold text-white leading-[0.9] tracking-tighter">
                  {slide.subtitle}
                </h2>
              </div>
              <p className="text-xl text-brand-cream/80 leading-relaxed font-light border-l border-brand-gold/20 pl-8">
                {slide.content}
              </p>
              <div className="p-10 rounded-[3rem] bg-brand-gold/10 border border-brand-gold/40 flex items-center gap-6 shadow-xl">
                <Zap className="text-brand-gold shrink-0" size={32} />
                <div className="text-lg text-brand-gold/90 font-medium leading-relaxed">
                  We are the only brand leveraging vertical integration to disrupt the North Indian market.
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {COMPETITION.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className={cn(
                    "p-10 rounded-[2.5rem] border transition-all flex justify-between items-center group shadow-md",
                    c.highlight 
                      ? "bg-brand-gold/20 border-brand-gold shadow-2xl shadow-brand-gold/30" 
                      : "bg-brand-navy/60 border-white/10 hover:border-brand-gold/40"
                  )}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="font-serif text-3xl font-bold text-white">{c.name}</div>
                      {c.highlight && <span className="px-3 py-1 rounded-full bg-brand-gold text-[10px] font-bold uppercase tracking-widest text-brand-void">Market Leader</span>}
                    </div>
                    <div className="text-[10px] text-brand-cream/60 uppercase tracking-widest font-bold">{c.origin} · {c.moat}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-mono font-bold text-brand-gold-light">{c.price}</div>
                    <div className="text-[8px] text-brand-cream/40 uppercase tracking-widest">Per 750ml</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'product':
        return (
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center h-full">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-gold/60">The Portfolio</div>
                <h2 className="text-5xl md:text-8xl font-serif font-bold text-white leading-[0.9] tracking-tighter">
                  {slide.subtitle}
                </h2>
              </div>
              <div className="grid gap-6">
                {PRODUCTS.map((product, i) => (
                  <motion.button 
                    key={product.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(200, 137, 30, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ 
                      x: { delay: 0.4 + i * 0.1 }, 
                      opacity: { delay: 0.4 + i * 0.1 },
                      scale: { duration: 0.3 },
                      boxShadow: { duration: 0.3 }
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setActiveProduct(product);
                    }}
                    className="p-10 rounded-[3rem] bg-brand-navy/60 border border-white/10 flex items-center justify-between group hover:border-brand-gold/60 transition-colors duration-300 text-left relative overflow-hidden shadow-xl"
                  >
                    <div className="absolute top-0 left-0 w-2 h-full bg-brand-gold scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                    <div className="space-y-3">
                      <div className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">{product.type}</div>
                      <div className="text-3xl font-serif font-bold text-white group-hover:translate-x-4 transition-transform">{product.name}</div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="text-2xl font-mono font-bold text-brand-gold-light">{product.price}</div>
                      <div className="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-void transition-all shadow-2xl shadow-brand-gold/0 group-hover:shadow-brand-gold/40">
                        <ArrowUpRight size={28} />
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
            <div className="relative h-full min-h-[600px] rounded-[5rem] overflow-hidden border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1000" 
                alt="Craft Spirits" 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-void via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 space-y-8">
                <div className="glass-card p-12 border-brand-gold/40 text-center backdrop-blur-3xl bg-brand-navy/60">
                  <Sparkles className="text-brand-gold mx-auto mb-8" size={48} />
                  <div className="text-4xl font-serif font-bold text-white leading-tight">"Crafting the Future of Indian Spirits."</div>
                </div>
                <div className="flex justify-center gap-6">
                  {["Small Batch", "Himalayan Water", "iStill Tech"].map((tag, i) => (
                    <div key={i} className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold text-brand-gold uppercase tracking-widest">{tag}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'gtm':
        return (
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center h-full">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-gold/60">GTM Strategy</div>
                <h2 className="text-5xl md:text-8xl font-serif font-bold text-white leading-[0.9] tracking-tighter">
                  {slide.subtitle}
                </h2>
              </div>
              <p className="text-xl text-brand-cream/80 leading-relaxed font-light border-l border-brand-gold/20 pl-8">
                {slide.content}
              </p>
              <div className="p-10 rounded-[3rem] bg-brand-gold/10 border border-brand-gold/40 space-y-8 shadow-xl">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-brand-gold flex items-center justify-center text-brand-void shadow-2xl shadow-brand-gold/40">
                    <Target size={32} />
                  </div>
                  <div className="font-serif text-3xl font-bold text-white">Vertical Integration</div>
                </div>
                <p className="text-lg text-brand-gold/90 leading-relaxed font-light">
                  Our 16 owned stores in Gurgaon are not just retail points; they are data hubs and marketing engines that de-risk our entire launch phase.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {GTM_STRATEGY.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="p-10 rounded-[2.5rem] bg-brand-navy/60 border border-white/10 space-y-4 group hover:border-brand-gold/40 transition-all shadow-lg"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold text-[12px] font-bold">
                      {i + 1}
                    </div>
                    <div className="text-[12px] font-bold text-brand-gold uppercase tracking-[0.2em]">{step.phase}</div>
                  </div>
                  <p className="text-lg text-brand-cream/80 leading-relaxed font-light">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'traction':
        return (
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center h-full">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-gold/60">Execution Roadmap</div>
                <h2 className="text-5xl md:text-8xl font-serif font-bold text-white leading-[0.9] tracking-tighter">
                  {slide.subtitle}
                </h2>
              </div>
              <div className="space-y-10">
                {TRACTION.map((item, i) => (
                  <div key={i} className="flex gap-10 relative">
                    {i !== TRACTION.length - 1 && <div className="absolute left-6 top-12 bottom-0 w-px bg-white/20" />}
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 shadow-2xl",
                      item.status === 'done' ? "bg-brand-gold text-brand-void" : 
                      item.status === 'active' ? "bg-brand-gold/20 text-brand-gold border border-brand-gold/40" : 
                      "bg-white/10 text-brand-cream/40 border border-white/20"
                    )}>
                      {item.status === 'done' ? <Check size={20} /> : <Clock size={20} />}
                    </div>
                    <div className="space-y-2 pt-1">
                      <div className="flex items-center gap-4">
                        <div className="text-[10px] font-bold text-brand-gold/80 uppercase tracking-widest">{item.date}</div>
                        {item.status === 'active' && <span className="px-3 py-1 rounded-full bg-brand-gold/20 text-[8px] font-bold text-brand-gold uppercase tracking-widest animate-pulse border border-brand-gold/40">Current Phase</span>}
                      </div>
                      <div className="font-bold text-white text-xl uppercase tracking-widest">{item.title}</div>
                      <p className="text-base text-brand-cream/80 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Award size={32} />, label: "Recipe", value: "Validated", sub: "Top Mixologists" },
                { icon: <Briefcase size={32} />, label: "Retail", value: "16 Stores", sub: "Priority Access" },
                { icon: <Layers size={32} />, label: "Supply", value: "Secured", sub: "Ashmira Distillery" },
                { icon: <ShieldCheck size={32} />, label: "License", value: "In-Process", sub: "Excise Dept" }
              ].map((card, i) => (
                <div key={i} className="p-10 rounded-[3rem] bg-brand-navy/60 border border-white/10 space-y-8 group hover:border-brand-gold/40 transition-all shadow-lg">
                  <div className="text-brand-gold group-hover:scale-110 transition-transform">{card.icon}</div>
                  <div>
                    <div className="text-[8px] font-bold uppercase tracking-widest text-brand-gold/60 mb-2">{card.label}</div>
                    <div className="text-3xl font-serif font-bold text-white mb-1">{card.value}</div>
                    <div className="text-[10px] text-brand-cream/40 uppercase tracking-widest">{card.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'team':
        return (
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center h-full">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-gold/60">Leadership</div>
                <h2 className="text-5xl md:text-8xl font-serif font-bold text-white leading-[0.9] tracking-tighter">
                  {slide.subtitle}
                </h2>
              </div>
              <p className="text-xl text-brand-cream/80 leading-relaxed font-light border-l border-brand-gold/20 pl-8">
                {slide.content}
              </p>
              <div className="p-10 rounded-[3rem] bg-brand-gold/10 border border-brand-gold/40 space-y-6 shadow-xl">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-brand-gold flex items-center justify-center text-brand-void shadow-2xl shadow-brand-gold/40">
                    <Award size={32} />
                  </div>
                  <div className="font-serif text-3xl font-bold text-white">The Competitive Advantage</div>
                </div>
                <p className="text-lg text-brand-gold/90 leading-relaxed font-light">
                  Our team combines the "Street Smart" of retail dominance with the "Scale Smart" of corporate operations. We don't just know how to make gin; we know exactly where and how it sells.
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
                    <div className="flex items-center justify-between">
                      <div className="font-serif text-3xl font-bold text-white">{member.name}</div>
                    </div>
                    <div className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">{member.role}</div>
                    <p className="text-base text-brand-cream/80 leading-relaxed font-light">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'financials':
        return (
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center h-full">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-gold/60">The Economics</div>
                <h2 className="text-5xl md:text-8xl font-serif font-bold text-white leading-[0.9] tracking-tighter">
                  {slide.subtitle}
                </h2>
              </div>
              <p className="text-xl text-brand-cream/80 leading-relaxed font-light border-l border-brand-gold/20 pl-8">
                {slide.content}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-10 rounded-[3rem] bg-brand-navy/60 border border-white/10 space-y-4 group hover:border-brand-gold/40 transition-all shadow-lg">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gold/60">Projected Y3 Revenue</div>
                  <div className="text-5xl font-serif font-bold text-white">₹67.7 Cr</div>
                  <div className="text-[10px] text-brand-gold/80 uppercase tracking-widest">16 Store Base Scenario</div>
                </div>
                <div className="p-10 rounded-[3rem] bg-brand-navy/60 border border-white/10 space-y-4 group hover:border-brand-gold/40 transition-all shadow-lg">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gold/60">Projected Y3 EBITDA</div>
                  <div className="text-5xl font-serif font-bold text-white">₹20.2 Cr</div>
                  <div className="text-[10px] text-brand-gold/80 uppercase tracking-widest">30% EBITDA Margin</div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="p-12 rounded-[4rem] bg-brand-gold/10 border border-brand-gold/40 space-y-10 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div className="text-[12px] font-bold uppercase tracking-[0.4em] text-brand-gold">Financial Moat</div>
                  <div className="px-4 py-1 rounded-full bg-brand-gold/20 text-[10px] font-bold text-brand-gold uppercase tracking-widest">High Margin</div>
                </div>
                <div className="space-y-8">
                  {FINANCIALS.map((stat, i) => (
                    <div key={i} className="space-y-3">
                      <div className="flex justify-between items-end">
                        <span className="text-lg text-brand-cream/80 font-light">{stat.label}</span>
                        <span className="text-4xl font-serif font-bold text-white">{stat.value}</span>
                      </div>
                      <div className="h-px bg-white/10 w-full" />
                      <p className="text-[10px] text-brand-cream/60 uppercase tracking-widest">{stat.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-brand-cream/60 leading-relaxed italic text-center pt-4">
                  *Based on 16-store base scenario in Gurgaon. Assumes standard excise and retail margins.
                </p>
              </div>
            </div>
          </div>
        );

      case 'funds':
        return (
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center h-full">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-gold/60">The Opportunity</div>
                <h2 className="text-5xl md:text-8xl font-serif font-bold text-white leading-[0.9] tracking-tighter">
                  {slide.subtitle}
                </h2>
              </div>
              <p className="text-xl text-brand-cream/80 leading-relaxed font-light border-l border-brand-gold/20 pl-8">
                {slide.content}
              </p>
              
              <div className="space-y-8">
                {USE_OF_FUNDS.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-8 group"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-brand-navy/60 border border-white/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-void transition-all shadow-lg">
                      <span className="text-xl font-serif font-bold">{item.value}%</span>
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="text-lg text-white font-medium tracking-wide uppercase">{item.label}</div>
                      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${item.value}%` }}
                          transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                          className="h-full bg-brand-gold"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('mailto:jai.sharma6696@gmail.com?subject=Investment Interest: Madira')}
                className="w-full p-8 rounded-[2.5rem] bg-brand-gold text-brand-void font-bold text-xl uppercase tracking-[0.3em] flex items-center justify-center gap-4 group shadow-2xl shadow-brand-gold/40"
              >
                Invest in the Future
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </div>

            <div className="relative aspect-square flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
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
                            className="hover:opacity-80 transition-opacity cursor-pointer"
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
          </div>
        );

      default:
        return (
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-start h-full">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold/60">Section {slide.number}</div>
                <h2 className="text-4xl md:text-7xl font-serif font-bold text-white leading-[1.1] tracking-tight">
                  {slide.subtitle}
                </h2>
              </div>
              <p className="text-lg text-brand-cream/80 leading-relaxed font-light italic">
                "{slide.content}"
              </p>
            </div>
            {slide.stats && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {slide.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="p-10 rounded-[2.5rem] bg-brand-navy/60 border border-white/10 space-y-4 shadow-lg"
                  >
                    <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-brand-gold/60">{stat.label}</div>
                    <div className="text-3xl md:text-5xl font-serif font-bold text-white">{stat.value}</div>
                    <div className="text-[10px] text-brand-cream/40 leading-tight">{stat.sub}</div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="relative h-screen w-full bg-brand-void overflow-hidden flex flex-col" ref={containerRef}>
      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <div 
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-12"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-brand-void/95 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center"
            >
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-20 backdrop-blur-md border border-white/10"
              >
                <X size={24} />
              </button>
              
              <video 
                src={BRAND_VIDEO_URL} 
                controls 
                autoPlay 
                muted
                playsInline
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-[60] px-6 md:px-12 py-6 flex justify-between items-center bg-brand-void/50 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-6">
          <div className="font-serif text-2xl font-black gold-gradient tracking-tighter">
            {BRAND_NAME}
          </div>
          <div className="h-6 w-px bg-white/10 hidden md:block" />
          <div className="hidden md:flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold/40">
            <span>Investor Presentation</span>
            <span className="w-1 h-1 rounded-full bg-brand-gold/20" />
            <span>Q1 2026</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full hover:bg-white/5 transition-colors text-brand-gold/60 hover:text-brand-gold"
          >
            <LayoutGrid size={20} />
          </button>
          <div className="h-6 w-px bg-white/10" />
          <button 
            onClick={onSwitchToMemo}
            className="flex items-center gap-3 px-6 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-[10px] font-bold uppercase tracking-widest text-brand-gold hover:bg-brand-gold hover:text-brand-void transition-all"
          >
            <FileText size={14} />
            <span>IC Memo</span>
          </button>
        </div>
      </header>

      {/* Grid Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[70] bg-brand-void/95 backdrop-blur-2xl p-12 md:p-24 overflow-y-auto"
          >
            <div className="max-w-6xl mx-auto space-y-16">
              <div className="flex justify-between items-center">
                <h2 className="text-4xl font-serif font-bold text-white">Slide Navigator</h2>
                <button onClick={() => setIsMenuOpen(false)} className="p-4 rounded-full bg-white/5 text-brand-gold hover:bg-white/10 transition-colors">
                  <X size={24} />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {SLIDES.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrentSlide(i);
                      setIsMenuOpen(false);
                    }}
                    className={cn(
                      "p-8 rounded-3xl border text-left transition-all group",
                      i === currentSlide 
                        ? "bg-brand-gold/10 border-brand-gold" 
                        : "bg-brand-navy/30 border-white/5 hover:border-brand-gold/20"
                    )}
                  >
                    <div className="text-[10px] font-bold text-brand-gold/40 mb-2 uppercase tracking-widest">Slide {s.number}</div>
                    <div className="text-xl font-serif font-bold text-white group-hover:text-brand-gold transition-colors">{s.title}</div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide Content */}
      <main className="flex-1 relative flex items-center justify-center px-6 md:px-24 pt-32 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-7xl w-full h-full flex flex-col justify-center"
          >
            {slide.type === 'cover' ? (
              <div className="space-y-12 text-center md:text-left">
                <div className="space-y-4">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-px w-24 bg-brand-gold origin-left hidden md:block"
                  />
                  <motion.h1 
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-7xl sm:text-9xl md:text-[12rem] font-serif font-black gold-gradient leading-[0.85] tracking-tighter"
                  >
                    {slide.title}
                  </motion.h1>
                </div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl md:text-6xl font-serif italic text-brand-cream/80">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg md:text-2xl font-light italic text-brand-cream/40 max-w-2xl mx-auto md:mx-0">
                    "{slide.tagline}"
                  </p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="pt-16 border-t border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-12"
                >
                  {[
                    { label: "Target Raise", value: "₹50 – 75 Lakhs", icon: <TrendingUp size={14} /> },
                    { label: "Valuation", value: "₹3.5 Cr Pre", icon: <PieIcon size={14} /> },
                    { label: "Round", value: "Friends & Family", icon: <Users size={14} /> },
                    { label: "Status", value: "Open", icon: <Check size={14} /> }
                  ].map((item, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-brand-gold/40 font-bold">
                        {item.icon}
                        {item.label}
                      </div>
                      <div className="text-lg font-serif font-bold text-white">{item.value}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            ) : renderSlideContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Progress & Controls */}
      <footer className="fixed bottom-0 left-0 right-0 z-[60] p-8 md:p-12 flex flex-col gap-8 pointer-events-none">
        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden pointer-events-auto">
          <motion.div 
            className="h-full bg-brand-gold"
            initial={{ width: 0 }}
            animate={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex gap-4 pointer-events-auto">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-brand-gold bg-brand-void/50 backdrop-blur-xl hover:bg-brand-gold hover:text-brand-void transition-all active:scale-90 group"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-brand-gold bg-brand-void/50 backdrop-blur-xl hover:bg-brand-gold hover:text-brand-void transition-all active:scale-90 group"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 pointer-events-auto">
            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold/40">
              {String(currentSlide + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold/40">
              Confidential · 2026
            </div>
          </div>
        </div>
      </footer>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-[1000px] h-[1000px] bg-brand-gold/5 rounded-full blur-[150px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-brand-navy/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `linear-gradient(var(--color-brand-gold) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-gold) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }} 
        />
      </div>
      {/* Product Detail Modal */}
      <AnimatePresence>
        {activeProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-brand-void/95 backdrop-blur-2xl"
            onClick={() => setActiveProduct(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-brand-navy/50 border border-white/10 rounded-[3rem] max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row relative shadow-2xl shadow-brand-gold/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveProduct(null)}
                className="absolute top-8 right-8 z-10 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-void transition-all"
              >
                <X size={20} />
              </button>

              {/* Left Side: Image/Visual (Placeholder for now) */}
              <div className="w-full md:w-2/5 relative bg-brand-navy overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1000" 
                  alt={activeProduct.name} 
                  className="w-full h-full object-cover grayscale opacity-40"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-void via-transparent to-transparent" />
                <div className="absolute bottom-12 left-12 right-12">
                  <div className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.5em] mb-4">The Liquid</div>
                  <h3 className="text-4xl font-serif font-bold text-white leading-tight">{activeProduct.name}</h3>
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="flex-1 overflow-y-auto p-8 md:p-16 space-y-12 hide-scrollbar">
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                      {activeProduct.type}
                    </div>
                    <div className="text-2xl font-mono font-bold text-brand-gold-light">{activeProduct.price}</div>
                  </div>
                  <p className="text-xl text-brand-cream/80 leading-relaxed font-light">
                    {activeProduct.description}
                  </p>
                </div>

                <div className="grid gap-12">
                  <div className="space-y-6">
                    <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold/40">Technical Specs</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {activeProduct.details?.map((detail: string, i: number) => (
                        <div key={i} className="flex items-center gap-4 group">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40 group-hover:bg-brand-gold transition-colors" />
                          <div className="text-sm text-brand-cream/60 font-mono tracking-tight">{detail}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold/40">Market Edge</div>
                    <div className="p-8 rounded-3xl bg-brand-gold/5 border border-brand-gold/20 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <TrendingUp size={48} />
                      </div>
                      <div className="relative z-10 overflow-x-auto">
                        <table className="w-full text-left text-sm text-brand-cream/80">
                          <thead>
                            <tr className="border-b border-brand-gold/20 text-brand-gold/60 text-[10px] uppercase tracking-wider">
                              <th className="pb-4 font-medium px-4">Brand</th>
                              <th className="pb-4 font-medium px-4">Price</th>
                              <th className="pb-4 font-medium px-4">Origin</th>
                              <th className="pb-4 font-medium px-4">Key Features</th>
                            </tr>
                          </thead>
                          <tbody>
                            {activeProduct.competitors?.map((comp: any, i: number) => (
                              <tr key={i} className={`border-b border-brand-gold/10 last:border-0 ${comp.isMadira ? 'bg-brand-gold/10' : ''}`}>
                                <td className={`py-4 px-4 font-serif ${comp.isMadira ? 'text-brand-gold font-bold' : ''}`}>{comp.name}</td>
                                <td className="py-4 px-4 font-mono">{comp.price}</td>
                                <td className="py-4 px-4">{comp.origin}</td>
                                <td className="py-4 px-4 text-xs">{comp.features}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-6">
                  <button 
                    onClick={() => setActiveProduct(null)}
                    className="flex-1 py-5 rounded-full bg-brand-gold text-brand-void font-bold text-xs tracking-[0.3em] uppercase hover:bg-brand-gold-light transition-all shadow-2xl shadow-brand-gold/20"
                  >
                    Close Details
                  </button>
                  <button 
                    onClick={() => window.open('mailto:jai.sharma6696@gmail.com?subject=Product Inquiry: ' + activeProduct.name)}
                    className="flex-1 py-5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-xs tracking-[0.3em] uppercase hover:bg-white/10 transition-all"
                  >
                    Request Sample
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
