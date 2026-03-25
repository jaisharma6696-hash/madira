import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Droplets, Mountain, Sparkles, Feather, TrendingUp, Shield, BarChart3, Target, LayoutGrid } from 'lucide-react';
import { PRODUCTS, COMPETITION } from '../../constants';
import { InvestmentCalculator } from '../InvestmentCalculator';
import { cn } from '../ui';
import { NoiseOverlay } from '../NoiseOverlay';

const PRODUCT_IMAGES: Record<string, string> = {
  "gin": "/images/gin.png",
  "vodka": "/images/vodka.png",
  "rum": "/images/rum.png",
  "whiskey-blended": "/images/whiskey-blended.png",
  "single-malt": "/images/single-malt.png",
  "madira-balls": "/images/madira-balls.png",
  "buzz-balls": "/images/buzz-balls.png"
};

const CATEGORY_MAP: Record<string, string> = {
  'gin': 'Gin',
  'vodka': 'Vodka',
  'whiskey-blended': 'Whiskey',
  'rum': 'Rum',
  'single-malt': 'Single Malt',
  'madira-balls': 'RTD / Balls',
  'buzz-balls': 'RTD / Balls'
};
const PRODUCT_GALLERIES: Record<string, string[]> = {
  "gin": [
    "/images/gin.png",
    "/bespoke/gin_botanicals.png",
    "/madira_gin_angle_3_v2_1774451160568.png"
  ],
  "vodka": [
    "/images/vodka.png",
    "/bespoke/vodka_glacier.png",
    "/madira_vodka_angle_3_v2_1774451180182.png"
  ],
  "rum": [
    "/images/rum.png",
    "/bespoke/rum_barrels.png",
    "/madira_rum_angle3_v9_1774452020000_png_1774453173843.png"
  ],
  "whiskey-blended": [
    "/images/whiskey-blended.png",
    "/bespoke/whiskey_istill.png",
    "/madira_whiskey_angle3_v9_1774452000000_png_1774453358704.png"
  ],
  "single-malt": [
    "/images/single-malt.png",
    "/bespoke/single_malt_cave.png",
    "/madira_single_malt_angle3_v9_1774452040000_png_1774453403401.png"
  ],
  "buzz-balls": [
    "/madira_balls_rtd_1774439700507.png",
    "/bespoke/buzz_balls_lifestyle.png",
    "/madira_buzz_balls_angle3_v9_1774452060000_png_1774453456799.png"
  ],
  "madira-balls": [
    "/madira_balls_1774435259923.png",
    "/bespoke/balls_serving.png",
    "/madira_balls_angle3_v9_1774452080000_png_1774453504958.png"
  ]
};

export function ProductDetailPage({ product, onNavigate, onProductSelect }: { product: typeof PRODUCTS[0] | null, onNavigate: (page: string) => void, onProductSelect: (p: typeof PRODUCTS[0]) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(0);

  // Reset gallery position when the product changes
  React.useEffect(() => {
    setActiveImage(0);
  }, [product?.id]);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-brand-void flex items-center justify-center flex-col gap-8">
        <div className="text-2xl text-brand-cream/60 font-serif">No product selected.</div>
        <button onClick={() => onNavigate('products')} className="px-8 py-4 border border-brand-gold/40 text-brand-gold uppercase tracking-widest text-xs font-bold rounded-full hover:bg-brand-gold hover:text-brand-void transition-colors">Return to Portfolio</button>
      </div>
    );
  }

  const categoryComps = COMPETITION.filter(c => c.category === CATEGORY_MAP[product.id]);
  const gallery = PRODUCT_GALLERIES[product.id] || [PRODUCT_IMAGES[product.id], PRODUCT_IMAGES[product.id], PRODUCT_IMAGES[product.id]];

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-void relative">
      <div className="absolute top-8 left-8 md:top-12 md:left-12 z-[101]">
        <button 
          onClick={() => onNavigate('products')}
          className="w-12 h-12 rounded-full border border-white/10 bg-brand-void/50 backdrop-blur-md flex items-center justify-center text-brand-cream/60 hover:text-white hover:bg-white/10 transition-all group hover:border-brand-gold/40"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="flex flex-col xl:flex-row w-full">
        
        {/* Left Side: Interactive Image Gallery */}
        <div className="xl:w-1/2 xl:h-screen xl:sticky top-0 relative overflow-hidden order-1 border-r border-white/5 flex">
          
          {/* Thumbnails */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4 hidden md:flex">
            {gallery.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={cn(
                  "w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300",
                  activeImage === idx ? "border-brand-gold scale-110" : "border-white/10 hover:border-white/30 opacity-50 hover:opacity-100 grayscale hover:grayscale-0"
                )}
              >
                <img src={img} alt={`Angle ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Main Display */}
          <div className="w-full h-[60vh] xl:h-full relative bg-brand-navy/20">
            <AnimatePresence mode="wait">
              <motion.img 
                key={activeImage}
                initial={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                src={gallery[activeImage]} 
                alt={product.name} 
                className={cn(
                  "w-full h-full object-cover",
                  activeImage === 0 ? "object-contain grayscale-[0.2]" : "object-cover grayscale"
                )}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-linear-to-t from-brand-void via-brand-void/20 to-transparent xl:bg-linear-to-r xl:from-transparent xl:via-brand-void/10 xl:to-brand-void opacity-90 pointer-events-none" />
          </div>

          <div className="absolute bottom-12 left-12 md:left-32 lg:bottom-24 lg:left-32 space-y-4 max-w-sm pointer-events-none z-20 mix-blend-difference">
            <div className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gold-light/80">Angle 0{activeImage + 1}</div>
            <div className="text-sm text-white/60 font-serif italic leading-relaxed">
              {activeImage === 0 ? "The bottle geometry is designed to capture and refract ambient light, serving as a structural centerpiece." 
               : activeImage === 1 ? "Distilled using precision Dutch engineering and high-altitude Himalayan spring water."
               : "Textural contrast between the cold flint glass and the warm, blind-embossed cotton label."}
            </div>
          </div>
        </div>

        {/* Right Side: Scroll Narrative */}
        <div className="xl:w-1/2 p-8 md:p-16 lg:px-24 lg:py-32 space-y-32 order-2">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.3em]">{product.line}</span>
                <div className="flex-1 h-px bg-brand-gold/20" />
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-serif font-black text-white leading-[0.9] tracking-tighter">
                {product.name}
              </h1>
              <div className="text-xl md:text-2xl text-brand-gold font-light tracking-widest mt-4 uppercase">
                Designed for modern Indian palates.
              </div>
              <div className="text-2xl font-serif text-brand-gold-light/60 italic mt-2">{product.price}</div>
            </div>
            
            <p className="text-xl md:text-2xl text-brand-cream/60 leading-relaxed font-light border-l-2 border-brand-gold/40 pl-6 lg:pl-8">
              {product.description}
            </p>

            {/* Mobile Thumbnails */}
            <div className="flex gap-4 md:hidden pt-8 pb-4 overflow-x-auto no-scrollbar">
              {gallery.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "w-20 h-20 shrink-0 rounded-2xl overflow-hidden border-2 transition-all duration-300",
                    activeImage === idx ? "border-brand-gold ring-4 ring-brand-gold/20 scale-95" : "border-white/10 opacity-50 grayscale"
                  )}
                >
                  <img src={img} alt={`Angle ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Core Brand Thesis */}
          <div className="space-y-16">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Target className="text-brand-gold" size={24} />
                <h3 className="text-3xl font-serif font-bold text-white">The Narrative Why</h3>
              </div>
              <p className="text-lg text-brand-cream/40 leading-relaxed font-light">
                {product.positioning} Madira exists to bridge the gap between ancient Himalayan distillation and the global luxury stage. We don't just follow recipes; we engineer moments of civilisational pride through liquid excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Mountain size={20} />, label: "Source", desc: "Himalayan Spring Water" },
                { icon: <Droplets size={20} />, label: "Process", desc: "Dutch iStill Precision" },
                { icon: <Feather size={20} />, label: "Label", desc: "Blind-embossed Cotton" },
                { icon: <Sparkles size={20} />, label: "Finish", desc: "Hand-applied Foiling" }
              ].map((spec, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-brand-navy/40 border border-white/5 space-y-4 hover:border-brand-gold/20 transition-all">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center">
                    {spec.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold/60">{spec.label}</div>
                    <div className="text-sm text-white font-medium mt-1">{spec.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Matchup Table */}
          {categoryComps.length > 0 && (
            <div className="space-y-12 pt-16 border-t border-white/5">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <BarChart3 className="text-brand-gold" size={24} />
                  <h3 className="text-3xl font-serif font-bold text-white">The Structural <span className="italic text-brand-gold/60">Advantage</span></h3>
                </div>
                <p className="text-base text-brand-cream/40 leading-relaxed font-light max-w-2xl">
                  {product.comparison} We capture the margin that others lose to freight. Here is how we position against the incumbent players in the {CATEGORY_MAP[product.id]} segment.
                </p>
              </div>

              <div className="overflow-x-auto rounded-3xl border border-white/10 bg-brand-navy/20 backdrop-blur-sm">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b border-white/10 bg-black/20">
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-brand-gold/60">Brand</th>
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-brand-gold/60">Origin</th>
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-brand-gold/60">Price</th>
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-brand-gold/60">The Moat</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {categoryComps.map((comp, i) => (
                      <tr key={i} className={cn(
                        "transition-colors group",
                        comp.highlight ? "bg-brand-gold/10" : "hover:bg-white/5"
                      )}>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <span className={cn("font-serif font-bold text-lg", comp.highlight ? "text-brand-gold" : "text-white")}>
                              {comp.name}
                            </span>
                            {comp.highlight && <Shield size={14} className="text-brand-gold" />}
                          </div>
                        </td>
                        <td className="px-6 py-5 text-sm text-brand-cream/60">{comp.origin}</td>
                        <td className="px-6 py-5">
                          <span className="font-mono text-sm tracking-wider bg-black/40 px-3 py-1 rounded-md text-brand-cream/80">
                            {comp.price}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-sm font-light text-brand-cream/50 leading-relaxed">
                          {comp.moat}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-8 rounded-3xl bg-brand-gold/5 border border-brand-gold/20 space-y-4">
                <div className="flex items-center gap-3 text-brand-gold">
                  <TrendingUp size={20} />
                  <span className="text-xs font-bold uppercase tracking-widest">Growth Potential</span>
                </div>
                <p className="text-sm text-brand-gold/80 leading-relaxed font-light">
                  Targeting the premium segment with a structural cost advantage of 20% over Goa-based competitors. Our owned retail stores guarantee immediate shelf placement and consumer data from Day 1.
                </p>
              </div>
            </div>
          )}

          {/* Sensory Ritual & Tasting Notes */}
          <div className="pt-16 border-t border-white/5 space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <LayoutGrid className="text-brand-gold" size={24} />
                <h3 className="text-3xl font-serif font-bold text-white">The Tasting Ritual</h3>
              </div>
              <div className="grid gap-4">
                {product.details.map((detail, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-gold/30 transition-colors list-none"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold text-[10px] shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div className="space-y-1">
                      <span className="text-base text-brand-cream/80 font-light leading-relaxed">{detail}</span>
                    </div>
                  </motion.li>
                ))}
              </div>
            </div>
          </div>

          {/* Next Product Navigation */}
          <div className="pt-32 pb-16 border-t border-white/5">
            <div className="text-center space-y-8">
              <div className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.4em]">Continue the Journey</div>
              
              {(() => {
                const currentIndex = PRODUCTS.findIndex(p => p.id === product.id);
                const nextProduct = PRODUCTS[(currentIndex + 1) % PRODUCTS.length];
                return (
                  <button 
                    onClick={() => onProductSelect(nextProduct as any)}
                    className="group space-y-6"
                  >
                    <div className="text-4xl md:text-6xl font-serif font-black text-white group-hover:text-brand-gold transition-colors">
                      {nextProduct.name} <ArrowUpRight className="inline-block ml-2 opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={32} />
                    </div>
                    <div className="text-sm text-brand-cream/40 uppercase tracking-[0.2em] font-bold">Discover {nextProduct.line}</div>
                  </button>
                );
              })()}
            </div>
          </div>

          {/* Final CTAs */}
          <div className="py-24 text-center space-y-8">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">
              Secure This Allocation
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white gold-gradient pb-2">Experience {product.name}</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button 
                onClick={() => window.open('mailto:jai.sharma6696@gmail.com?subject=Acquisition Inquiry: ' + product.name)}
                className="px-10 py-5 rounded-full bg-brand-gold text-brand-void font-black text-sm tracking-[0.2em] uppercase shadow-[0_0_40px_rgba(200,137,30,0.3)] hover:shadow-[0_0_60px_rgba(200,137,30,0.5)] transition-all hover:-translate-y-1"
              >
                Acquire Allocation
              </button>
              <button 
                onClick={() => onNavigate('invest')}
                className="px-10 py-5 rounded-full border border-brand-gold/20 text-brand-gold font-bold text-sm tracking-[0.2em] uppercase hover:bg-brand-gold/5 transition-all"
              >
                Request Trade Deck
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
