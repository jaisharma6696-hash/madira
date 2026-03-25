import React from 'react';

export interface Stat {
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
}

export interface InvestmentResult {
  equity: number;
  exitValue3x: number;
  exitValue7x: number;
  roi3x: number;
  roi7x: number;
}

export interface Slide {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  tagline?: string;
  content: string | React.ReactNode;
  stats?: Stat[];
  type: 'cover' | 'market' | 'product' | 'financial' | 'team' | 'gtm' | 'story' | 'traction' | 'financials' | 'funds' | 'video';
}
