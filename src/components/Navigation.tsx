import React, { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from './ui';

export function Navigation({ currentPage, onNavigate }: { currentPage: string, onNavigate: (page: string) => void }) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navTo = (page: string, anchor?: string) => {
    onNavigate(page);
    setIsMobileOpen(false);
    if (anchor) {
      setTimeout(() => document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' }), 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-[100] flex items-center justify-between md:justify-center w-[90%] md:w-auto gap-4 md:gap-8 px-6 md:px-10 py-4 md:rounded-full rounded-2xl transition-all duration-700 ease-out",
          isScrolled ? "bg-brand-navy/60 backdrop-blur-2xl border border-white/10 shadow-2xl" : "bg-transparent border-transparent"
        )}
      >
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => navTo('home')} className={cn("text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:scale-105", currentPage === 'home' ? "text-white" : "text-brand-cream/60 hover:text-white")}>Story</button>
          <button onClick={() => navTo('products')} className={cn("text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:scale-105", currentPage === 'products' ? "text-white" : "text-brand-cream/60 hover:text-white")}>Portfolio</button>
        </div>
        
        <button onClick={() => navTo('home')} className="text-lg md:text-xl font-black gold-gradient tracking-[0.3em] hover:scale-105 transition-transform uppercase">MADIRA</button>
        
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => navTo('trade')} className={cn("text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:scale-105", currentPage === 'trade' ? "text-white" : "text-brand-cream/60 hover:text-white")}>Trade</button>
          <button onClick={() => navTo('invest')} className={cn("text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:scale-105", currentPage === 'invest' ? "text-brand-gold-light" : "text-brand-gold hover:text-brand-gold-light")}>Invest</button>
        </div>

        <button className="md:hidden text-white ml-auto" onClick={() => setIsMobileOpen(true)}>
          <Menu size={20} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-brand-void/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-12"
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors" onClick={() => setIsMobileOpen(false)}>
              <X size={32} />
            </button>
            <button onClick={() => navTo('home')} className="text-3xl font-serif text-white uppercase tracking-[0.2em]">Story</button>
            <button onClick={() => navTo('products')} className="text-3xl font-serif text-white uppercase tracking-[0.2em]">Portfolio</button>
            <button onClick={() => navTo('trade')} className="text-3xl font-serif text-white uppercase tracking-[0.2em] mt-8">Trade</button>
            <button onClick={() => navTo('invest')} className="text-3xl font-serif text-brand-gold uppercase tracking-[0.2em]">Invest</button>
            <button onClick={() => navTo('pitchdeck')} className="text-3xl font-serif text-white uppercase tracking-[0.2em]">Deck</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
