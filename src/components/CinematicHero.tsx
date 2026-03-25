import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const HERO_SCENES = [
  {
    url: "/bespoke/mountain_source.png",
    label: "Himalayan Source"
  },
  {
    url: "/bespoke/rum_barrels.png",
    label: "Sirmour Casks"
  },
  {
    url: "/images/gin.png",
    label: "Madira Gin"
  },
  {
    url: "/bespoke/vodka_glacier.png",
    label: "Glacier Vodka"
  },
  {
    url: "/bespoke/whiskey_istill.png",
    label: "Precision Distillation"
  },
  {
    url: "/bespoke/single_malt_cave.png",
    label: "Himalayan Cellar"
  }
];

export function CinematicHero() {
  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % HERO_SCENES.length);
    }, 4000); // 4 seconds per scene
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-black overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScene}
          initial={{ opacity: 0, scale: 1.15, filter: 'blur(10px) grayscale(0.2)' }}
          animate={{ opacity: 0.6, scale: 1.05, filter: 'blur(0px) grayscale(0)' }}
          exit={{ opacity: 0, scale: 1, filter: 'blur(10px) grayscale(0.2)' }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={HERO_SCENES[currentScene].url} 
            alt={HERO_SCENES[currentScene].label}
            className="w-full h-full object-cover contrast-110"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-brand-void/30 mix-blend-multiply" />
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-brand-void/80" />
      
      {/* Subtle Motion Flare */}
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.05, 1],
          x: [-10, 10, -10]
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute inset-0 bg-linear-to-tr from-brand-gold/5 via-transparent to-transparent pointer-events-none"
      />
    </div>
  );
}
