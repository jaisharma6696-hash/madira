import React from 'react';

export function Footer({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <footer className="py-16 md:py-24 border-t border-white/5 bg-brand-void relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-start">
        {/* Brand */}
        <div className="space-y-6">
          <div className="text-3xl font-black gold-gradient tracking-[0.3em] uppercase">MADIRA</div>
          <p className="text-sm text-brand-cream/40 leading-relaxed max-w-xs">
            A Himalayan craft spirits company reclaiming ancient heritage for the modern world.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold/60">Navigate</div>
          <div className="flex flex-col gap-3">
            {onNavigate && (
              <>
                <button onClick={() => { onNavigate('home'); window.scrollTo(0, 0); }} className="text-left text-sm text-brand-cream/40 hover:text-white transition-colors">Story</button>
                <button onClick={() => { onNavigate('products'); window.scrollTo(0, 0); }} className="text-left text-sm text-brand-cream/40 hover:text-white transition-colors">Portfolio</button>
                <button onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('thesis')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-left text-sm text-brand-cream/40 hover:text-white transition-colors">Thesis</button>
                <a href="mailto:jai.sharma6696@gmail.com" className="text-sm text-brand-gold hover:text-brand-gold-light transition-colors">Invest</a>
              </>
            )}
          </div>
        </div>

        {/* Legal */}
        <div className="md:text-right space-y-4">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold/40">
            Confidential · Investor Relations {new Date().getFullYear()}
          </div>
          <div className="text-xs text-brand-cream/20">
            © {new Date().getFullYear()} Madira Spirits Pvt. Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
