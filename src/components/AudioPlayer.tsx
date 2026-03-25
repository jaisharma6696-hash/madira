import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export function AudioPlayer({ autoStart = false }: { autoStart?: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Luxury cinematic ambient track
  const AUDIO_URL = "https://assets.mixkit.co/music/preview/mixkit-ambient-tech-126.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.loop = true;
    }
  }, []);

  useEffect(() => {
    if (autoStart && isInitialized && !isMuted) {
      setIsPlaying(true);
      audioRef.current?.play().catch(() => {
        // Handle browser block
        setIsPlaying(false);
      });
    }
  }, [autoStart, isInitialized, isMuted]);

  const togglePlay = () => {
    if (!isInitialized) setIsInitialized(true);
    
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play().catch(() => {
        console.error("Audio playback blocked by browser.");
      });
      setIsPlaying(true);
      setIsMuted(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    audioRef.current.muted = newMuted;
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex items-center gap-3">
      <audio ref={audioRef} src={AUDIO_URL} />
      
      <AnimatePresence>
        {isPlaying && !isMuted && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 backdrop-blur-md"
          >
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                animate={{ height: [4, 12, 4] }}
                transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                className="w-0.5 bg-brand-gold rounded-full"
              />
            ))}
            <span className="text-[8px] font-bold text-brand-gold uppercase tracking-widest ml-1">Atmosphere</span>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={togglePlay}
        className="w-12 h-12 rounded-full bg-brand-void/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-brand-cream/60 hover:text-brand-gold hover:border-brand-gold/40 transition-all group"
      >
        {!isPlaying ? (
          <Music size={18} className="group-hover:scale-110 transition-transform" />
        ) : isMuted ? (
          <VolumeX size={18} onClick={toggleMute} />
        ) : (
          <Volume2 size={18} onClick={toggleMute} />
        )}
      </button>
    </div>
  );
}
