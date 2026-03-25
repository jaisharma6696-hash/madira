import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Button({ 
  className, 
  variant = 'primary', 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost' }) {
  const variants = {
    primary: 'bg-linear-to-br from-brand-gold to-brand-gold/80 text-brand-void hover:shadow-lg hover:shadow-brand-gold/20',
    secondary: 'bg-brand-navy border border-brand-gold/30 text-brand-cream hover:bg-brand-navy/80',
    ghost: 'bg-transparent text-brand-muted hover:text-brand-cream hover:bg-white/5',
  };

  return (
    <button 
      className={cn(
        'px-6 py-2.5 rounded-full font-medium transition-all active:scale-95 disabled:opacity-50',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn('glass-card p-6', className)}>
      {children}
    </div>
  );
}
