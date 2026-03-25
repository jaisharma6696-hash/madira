import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, Droplets, Mountain, Sparkles, Feather, TrendingUp, Shield } from 'lucide-react';
import { PRODUCTS, COMPETITION } from '../../constants';
import { cn } from '../ui';

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

export function ProductDetailPage({ product, onNavigate }: { product: typeof PRODUCTS[0] | null, onNavigate: (page: string) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-brand-void flex items-center justify-center flex-col gap-8">
        <div className="text-2xl text-brand-cream/60 font-serif">No product selected.</div>
        <button onClick={() => onNavigate('products')} className="px-8 py-4 border border-brand-gold/40 text-brand-gold uppercase tracking-widest text-xs font-bold rounded-full hover:bg-brand-gold hover:text-brand-void transition-colors">Return to Portfolio</button>
      </div>
    );
  }

  const categoryComps = COMPETITION.filter(c => c.category === CATEGORY_MAP[product.id]);

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-void relative">
      <div className="absolute top-8 left-8 md:top-12 md:left-12 z-[101]">
        <button 
          onClick={() => onNavigate('products')}
          className="w-12 h-12 rounded-full border border-white/10 glass-card flex items-center justify-center text-brand-cream/60 hover:text-white transition-all group hover:border-brand-gold/40"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Side: Sticky Product Visual */}
        <div className="lg:w-1/2 lg:h-screen lg:sticky top-0 relative overflow-hidden order-2 lg:order-1 border-r border-white/5">
          <motion.img 
            initial={{ scale: 1.1, filter: 'brightness(0)' }}
            animate={{ scale: 1, filter: 'brightness(1)' }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            src={PRODUCT_IMAGES[product.id] || "/images/gin.png"} 
            alt={product.name} 
            className="w-full h-[60vh] lg:h-full object-cover grayscale opacity-90"
          />
          <div className="absolute inset-0 bg-linear-to-t from-brand-void via-brand-void/20 to-transparent lg:bg-linear-to-r lg:from-transparent lg:via-brand-void/10 lg:to-brand-void opacity-90" />
          
          <div className="absolute bottom-12 left-12 lg:bottom-24 lg:left-24 space-y-4 max-w-sm mix-blend-difference pointer-events-none">
            <div className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gold-light/80">From Ritual to Object</div>
            <div className="text-sm text-white/60 font-serif italic leading-relaxed">
              "We don't sell liquor; we sell an artifact. The heavy base commands presence, while the gold foil whispers an unspoken legacy."
            </div>
          </div>
        </div>

        {/* Right Side: Scroll Narrative */}
        <div className="lg:w-1/2 p-8 md:p-16 lg:px-24 lg:py-32 space-y-32 order-1 lg:order-2">
          
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
              <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-serif font-black text-white leading-[0.9] tracking-tighter">
                {product.name}
              </h1>
              <div className="text-2xl font-serif text-brand-gold-light/60 italic mt-4">{product.price}</div>
            </div>
            <p className="text-xl md:text-2xl text-brand-cream/60 leading-relaxed font-light border-l border-brand-gold/20 pl-6 lg:pl-8">
              {product.description}
            </p>
          </motion.div>

          <div className="space-y-16">
            <div className="space-y-4">
              <h3 className="text-3xl font-serif font-bold text-white">The Craftsmanship</h3>
              <p className="text-brand-cream/40 leading-relaxed font-light">
                {product.positioning} Every curve of the bottle has been designed strictly to elevate the pour, maintaining an editorial distance from the generic tropes of modern alcohol.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Mountain size={20} />, label: "Source", desc: "Himalayan Spring Water" },
                { icon: <Droplets size={20} />, label: "Process", desc: "iStill Precision Dutch Engineering" },
                { icon: <Feather size={20} />, label: "Label", desc: "Blind-embossed Archival Cotton" },
                { icon: <Sparkles size={20} />, label: "Finish", desc: "Hand-applied Copper Foil" }
              ].map((spec, idx) => (
                <div key={idx} className="p-6 rounded-3xl glass-card space-y-4">
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

          <div className="space-y-12">
            <h3 className="text-3xl font-serif font-bold text-white">Material Narrative</h3>
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden group">
              <img src="/images/whiskey-blended.png" alt="Detail" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-x-0 bottom-0 p-8 pt-24 bg-linear-to-t from-brand-void to-transparent">
                <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest bg-brand-void/60 px-3 py-1 rounded-full backdrop-blur-md">Tactile Typographics</span>
              </div>
            </div>
            
            <p className="text-brand-cream/60 leading-relaxed font-light">
              The label serves as a textural interface before the first sip is ever taken. The unbleached cotton paper absorbs the ambient light, creating severe, micro-shadows under the blind-embossed lettering. It's an exercise in restraint—achieving high impact through negative space.
            </p>

            <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden group">
              <img src="/images/rum.png" alt="Glass Base" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-x-0 bottom-0 p-8 pt-24 bg-linear-to-t from-brand-void to-transparent">
                <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest bg-brand-void/60 px-3 py-1 rounded-full backdrop-blur-md">800g Flint Glass Base</span>
              </div>
            </div>
          </div>

          {/* Competitive Comparison Section */}
          {categoryComps.length > 0 && (
            <div className="space-y-12 pt-16 border-t border-white/5">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-brand-gold/40" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">Competitive Landscape</span>
                </div>
                <h3 className="text-3xl font-serif font-bold text-white">The Structural <span className="italic text-brand-gold/60">Advantage</span></h3>
                <p className="text-sm text-brand-cream/40 leading-relaxed font-light">
                  {product.comparison}
                </p>
              </div>

              <div className="space-y-6">
                {categoryComps.map((comp, i) => (
                  <div 
                    key={i}
                    className={cn(
                      "p-6 md:p-8 rounded-2xl border transition-all space-y-4 relative overflow-hidden",
                      comp.highlight 
                        ? "bg-brand-gold/10 border-brand-gold/40 shadow-xl shadow-brand-gold/10" 
                        : "bg-brand-navy/30 border-white/5"
                    )}
                  >
                    {comp.highlight && (
                      <div className="absolute top-0 right-0 px-4 py-1 bg-brand-gold text-brand-void text-[8px] font-bold uppercase tracking-widest rounded-bl-xl">
                        Our Edge
                      </div>
                    )}
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <div className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">{comp.origin}</div>
                        <div className="text-xl font-serif font-bold text-white">{comp.name}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] font-bold text-brand-cream/30 uppercase tracking-widest">Price</div>
                        <div className="text-lg font-serif font-bold text-white">{comp.price}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      {comp.highlight ? <Shield size={16} className="text-brand-gold shrink-0 mt-0.5" /> : <TrendingUp size={16} className="text-brand-cream/30 shrink-0 mt-0.5" />}
                      <p className="text-sm text-brand-cream/60 leading-relaxed">{comp.moat}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4">
                <div className="flex items-center gap-3 text-brand-gold">
                  <TrendingUp size={20} />
                  <span className="text-xs font-bold uppercase tracking-widest">Growth Potential</span>
                </div>
                <p className="text-xs text-brand-cream/40 leading-relaxed">
                  Targeting the premium segment with a structural cost advantage of 20% over Goa-based competitors. Our owned retail stores guarantee immediate shelf placement and consumer data.
                </p>
              </div>
            </div>
          )}

          <div className="pt-16 border-t border-white/5 space-y-10">
            <div className="space-y-4">
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">Sensory Profile</div>
              <ul className="space-y-4">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-brand-gold shrink-0">·</div>
                    <span className="text-sm text-brand-cream/80 font-light">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="py-24 text-center space-y-8">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-cream/40">Secure This Allocation</div>
            <h2 className="text-4xl font-serif font-bold text-white gold-gradient pb-2">{product.name}</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('mailto:jai.sharma6696@gmail.com?subject=Acquisition Inquiry: ' + product.name)}
                className="px-12 py-5 rounded-full bg-brand-gold text-brand-void font-black text-sm tracking-[0.2em] uppercase shadow-[0_0_40px_rgba(200,137,30,0.3)] hover:shadow-[0_0_60px_rgba(200,137,30,0.5)] hover:bg-brand-gold-light transition-all hover:-translate-y-1"
              >
                Acquire Allocation
              </button>
              <button 
                onClick={() => window.open('mailto:jai.sharma6696@gmail.com?subject=Sample Request: ' + product.name)}
                className="px-12 py-5 rounded-full border border-white/10 text-brand-cream font-bold text-sm tracking-[0.2em] uppercase hover:bg-white/5 transition-all"
              >
                Request Sample
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
