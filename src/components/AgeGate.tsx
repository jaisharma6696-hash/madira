import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function AgeGate({ onVerified }: { onVerified: () => void }) {
  const [birthYear, setBirthYear] = useState('');
  const [error, setError] = useState('');
  const [isExiting, setIsExiting] = useState(false);

  const currentYear = new Date().getFullYear();

  const handleVerify = () => {
    const year = parseInt(birthYear);
    if (!year || year < 1900 || year > currentYear) {
      setError('Please enter a valid year.');
      return;
    }
    const age = currentYear - year;
    if (age >= 21) {
      setIsExiting(true);
      setTimeout(() => onVerified(), 1200);
    } else {
      setError('You must be 21 or older to enter this site.');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleVerify();
  };

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="gate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-brand-void flex flex-col items-center justify-center px-6 overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-gold/5 blur-[120px]" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
          </div>

          {/* Logo */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-center mb-16"
          >
            <div className="text-5xl md:text-7xl font-serif font-black gold-gradient tracking-[0.3em] uppercase">
              MADIRA
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-cream/30 mt-4">
              Himalayan Craft Spirits
            </div>
          </motion.div>

          {/* Age Verification Box */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="w-full max-w-md space-y-8 text-center"
          >
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
                Welcome
              </h2>
              <p className="text-sm text-brand-cream/40 leading-relaxed">
                This website contains information about alcoholic beverages.<br />
                Please confirm you are of legal drinking age.
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <input
                  type="number"
                  value={birthYear}
                  onChange={(e) => { setBirthYear(e.target.value); setError(''); }}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter your birth year"
                  className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white text-center text-xl font-serif tracking-wider placeholder:text-brand-cream/20 focus:border-brand-gold/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/10 transition-all"
                  min="1900"
                  max={currentYear}
                />
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-400/80 font-medium"
                >
                  {error}
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleVerify}
                className="w-full px-8 py-5 rounded-2xl bg-brand-gold text-brand-void font-black text-sm tracking-[0.2em] uppercase shadow-[0_0_40px_rgba(200,137,30,0.2)] hover:shadow-[0_0_60px_rgba(200,137,30,0.4)] transition-all"
              >
                Enter Site
              </motion.button>
            </div>

            <div className="pt-8 border-t border-white/5">
              <p className="text-[10px] text-brand-cream/20 leading-relaxed uppercase tracking-wider">
                By entering this site, you agree that you are of legal age to consume alcohol in your jurisdiction.
                Please drink responsibly.
              </p>
            </div>
          </motion.div>

          {/* Bottom decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent"
          />
        </motion.div>
      ) : (
        <motion.div
          key="exit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-brand-void flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="text-5xl font-serif font-black gold-gradient tracking-[0.3em] uppercase"
          >
            MADIRA
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
