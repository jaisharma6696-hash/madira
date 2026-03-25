import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Use MotionValues for GPU-accelerated, non-rendering position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Magnetic/Smooth Springs
  const springConfig = { stiffness: 400, damping: 35, mass: 0.2 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only show on devices with a mouse
    if (!window.matchMedia("(hover: hover)").matches) {
      return;
    }

    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('button, a, .magnetic, [role="button"]');
      
      if (interactive) {
        const rect = interactive.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Refined magnetic attraction (12% pull)
        mouseX.set(e.clientX + (centerX - e.clientX) * 0.12);
        mouseY.set(e.clientY + (centerY - e.clientY) * 0.12);
        setIsHovering(true);
      } else {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Click Ripple (GPU Path) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-gold pointer-events-none z-[9997]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isClicked ? 2 : 0,
          opacity: isClicked ? 0 : 0
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      
      {/* Inner Dot (GPU Path) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-brand-gold pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isClicked ? 0.8 : isHovering ? 0 : 1
        }}
      />
      
      {/* Outer Circle (GPU Path) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-gold/60 pointer-events-none z-[9998] backdrop-invert-[0.1]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isClicked ? 0.9 : isHovering ? 2.5 : 1,
          backgroundColor: isClicked ? 'rgba(200, 137, 30, 0.4)' : isHovering ? 'rgba(200, 137, 30, 0.1)' : 'transparent',
          borderColor: isHovering ? 'rgba(200, 137, 30, 0.2)' : 'rgba(200, 137, 30, 0.6)',
        }}
      />
    </>
  );
}
