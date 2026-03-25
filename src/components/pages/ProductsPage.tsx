import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { PRODUCTS } from '../../constants';
import { ArrowRight, ArrowUpRight, Award, Beaker } from 'lucide-react';
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

export function ProductsPage({ onNavigate, onProductSelect }: { onNavigate: (page: string) => void, onProductSelect: (p: typeof PRODUCTS[0]) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-void pt-32 pb-40">
      {/* Portfolio Hero */}
      <section className="px-6 max-w-7xl mx-auto space-y-12 mb-32 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-brand-gold/40" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">The Portfolio</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-black text-white leading-[0.85] tracking-tighter">
            Sculpted <br />
            <span className="italic text-brand-gold/60 font-light">in Glass.</span>
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="grid md:grid-cols-2 gap-12 pt-12 border-t border-white/5"
        >
          <p className="text-xl md:text-2xl text-brand-cream/60 font-light leading-relaxed font-serif italic">
            "A vessel that forces you to respect the liquid inside."
          </p>
          <div className="space-y-6 text-sm text-brand-cream/40 leading-relaxed font-light">
            <p>
              Every Madira bottle is designed as a sculptural object. Heavy, thick-based flint glass sourced from legacy European producers ensures that when you pour, the weight grounds you in the present moment. 
            </p>
            <p>
              The label architecture relies heavily on blind embossing, tactile foils, and deep, unbleached cotton papers—textures that demand to be touched before the seal is even broken.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Packaging Detail Showcase */}
      <section className="relative w-full overflow-hidden mb-40">
        <div className="flex flex-col md:flex-row h-[70vh] md:h-[90vh]">
          <motion.div style={{ y: y1 }} className="flex-1 relative order-2 md:order-1">
            <img src="/images/single-malt.png" alt="Packaging Detail" className="absolute inset-0 w-full h-full object-cover opacity-80" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-brand-void to-transparent" />
          </motion.div>
          <div className="flex-1 bg-brand-navy border-l border-white/5 p-12 md:p-24 flex items-center order-1 md:order-2 z-10">
            <div className="space-y-8 max-w-xl">
               <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-brand-void mb-8 shadow-2xl shadow-brand-gold/20">
                 <Beaker size={20} />
               </div>
               <h3 className="text-4xl md:text-6xl font-serif font-bold text-white">The Object <br />of Ritual.</h3>
               <p className="text-lg text-brand-cream/60 leading-relaxed font-light">
                 Our packaging philosophy stems from minimalist monumentality. We stripped away the visual noise typical of the spirits category, leaving only the essential: deep obsidian glass, sun-scorched amber foil, and negative space absolute.
               </p>
               <div className="grid grid-cols-2 gap-8 pt-8">
                 <div className="space-y-2">
                   <div className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em]">Material</div>
                   <div className="text-sm text-white font-medium">Extra-flint crystalline glass, 800g base</div>
                 </div>
                 <div className="space-y-2">
                   <div className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em]">Labeling</div>
                   <div className="text-sm text-white font-medium">Cotton-fibre, blind embossed, copper foil</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immersive Products Grid */}
      <section className="px-6 max-w-7xl mx-auto space-y-32">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">The Collection</h2>
          <p className="text-brand-cream/40 tracking-widest uppercase text-xs font-bold">From Core to Halo</p>
        </div>

        <div className="space-y-40">
          {PRODUCTS.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center group cursor-pointer"
              onClick={() => onProductSelect(product)}
            >
              {/* Product Visual */}
              <div className={cn(
                "w-full lg:w-1/2 aspect-[3/4] relative overflow-hidden rounded-[2rem] border border-white/5 glass-card",
                i % 2 !== 0 ? "lg:order-2" : "lg:order-1"
              )}>
                <img 
                  src={PRODUCT_IMAGES[product.id] || "/images/gin.png"} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" 
                />
                
                {/* Visual Overlay Effects */}
                <div className="absolute inset-0 bg-brand-void/20 group-hover:bg-transparent transition-colors duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-brand-void via-brand-void/20 to-transparent opacity-80" />
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-brand-gold/5 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 rotate-12 pointer-events-none" />

                <div className="absolute bottom-10 left-10 p-4 bg-brand-navy/60 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gold flex items-center gap-2">
                    Experience Details <ArrowRight size={14} />
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className={cn(
                "w-full lg:w-1/2 space-y-10",
                i % 2 !== 0 ? "lg:order-1" : "lg:order-2"
              )}>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="text-[10px] px-3 py-1 rounded-full border border-brand-gold/20 text-brand-gold uppercase tracking-[0.2em] font-bold shadow-[0_0_15px_rgba(200,137,30,0.1)]">
                      {product.type}
                    </div>
                    {product.line === "Halo Icon Line" && (
                      <span className="flex flex-row items-center gap-2 text-[10px] text-white/40 uppercase tracking-widest font-bold">
                        <Award size={12} className="text-brand-gold" /> Halo Project
                      </span>
                    )}
                  </div>
                  <h3 className="text-5xl md:text-7xl font-serif font-black text-white group-hover:gold-gradient transition-all duration-500 tracking-tight leading-none">{product.name}</h3>
                  <div className="text-2xl font-serif text-brand-gold-light/60 italic">{product.price}</div>
                </div>

                <p className="text-xl text-brand-cream/60 leading-relaxed font-light border-l border-brand-gold/20 pl-6">
                  {product.description}
                </p>

                <div className="space-y-6">
                  <div className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em]">Sensory & Positioning</div>
                  <p className="text-sm text-brand-cream/40 leading-relaxed font-medium bg-white/5 p-6 rounded-2xl border border-white/5">
                    {product.positioning}
                  </p>
                  <ul className="grid grid-cols-2 gap-4">
                    {product.details.slice(0, 4).map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-brand-cream/60 text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 text-brand-gold uppercase tracking-[0.2em] text-[10px] font-bold pt-8 border-t border-white/5 w-full"
                >
                  <span className="w-8 h-8 rounded-full border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-void transition-colors">
                    <ArrowUpRight size={14} />
                  </span>
                  Dive into {product.name.split(' ')[0]}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
