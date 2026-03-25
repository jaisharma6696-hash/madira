import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, DollarSign, PieChart, ArrowRight, Info, X, Calendar, LayoutGrid, List, ShieldCheck, Target, BookOpen } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export function InvestmentCalculator() {
  const [investment, setInvestment] = useState<number>(500000); // 5 Lakhs default
  // Hardcoded to strictly align with user's specific 3.5 Cr valuation strategy
  const [preMoneyValuation] = useState<number>(35000000); // 3.5 Cr locked
  const [showFutureRound, setShowFutureRound] = useState<boolean>(false);
  const [activeScenario, setActiveScenario] = useState<'conservative' | 'bull' | null>(null);
  const [projectionYear, setProjectionYear] = useState<2 | 3>(3);
  const [viewMode, setViewMode] = useState<'grid' | 'compare'>('grid');
  
  const postMoneyValuation = preMoneyValuation + investment;
  const initialEquity = (investment / postMoneyValuation) * 100;
  
  // Future Round Dilution (assuming 15% fresh dilution in next round)
  const nextRoundDilution = 0.15; 
  const dilutedEquity = initialEquity * (1 - nextRoundDilution);
  
  const equityPercentage = showFutureRound ? dilutedEquity : initialEquity;

  // Financial Projections
  const projections = {
    2: { revenue: 28000000, consMult: 3.0, bullMult: 5.0 },
    3: { revenue: 67700000, consMult: 3.7, bullMult: 7.0 }
  };

  const currentProj = projections[projectionYear];
  
  const exitValue3x = currentProj.revenue * currentProj.consMult;
  const exitValue7x = currentProj.revenue * currentProj.bullMult;
  
  const investorExit3x = (equityPercentage / 100) * exitValue3x;
  const investorExit7x = (equityPercentage / 100) * exitValue7x;
  
  const roi3x = (investorExit3x / investment);
  const roi7x = (investorExit7x / investment);

  const formatCurrency = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(2)} L`;
    return `₹${val.toLocaleString()}`;
  };

  const scenarios = {
    conservative: {
      title: `Conservative Exit (${currentProj.consMult}x Revenue)`,
      why: "Standard M&A multiple for profitable FMCG/Alco-bev brands in India achieving scale without excessive burn. Assumes steady growth and positive unit economics via our owned retail moat.",
      how: "Strategic acquisition by a domestic incumbent (e.g., Radico Khaitan, Allied Blenders) seeking to expand their premium craft portfolio cheaply.",
      valuation: formatCurrency(exitValue3x)
    },
    bull: {
      title: `Bull Case Exit (${currentProj.bullMult}x Revenue)`,
      why: "Premium multiple reserved for high-growth 'Category Creators'. At Year 3, assuming ₹67.7Cr revenue, establishing the Himalayan brand moat commands severe valuation premiums.",
      how: "Unicorn-track IPO or global conglomerate buyout (e.g., Diageo, Pernod Ricard) moving aggressively to capture India's premiumization wave.",
      valuation: formatCurrency(exitValue7x)
    }
  };

  const chartData = [
    {
      name: 'Conservative',
      value: exitValue3x,
      color: 'rgba(212, 175, 55, 0.2)', // brand-gold with low opacity
      hoverColor: 'rgba(212, 175, 55, 0.5)'
    },
    {
      name: 'Bull Case',
      value: exitValue7x,
      color: 'rgba(200, 137, 30, 0.6)', // brand-gold with high opacity
      hoverColor: 'rgba(200, 137, 30, 1)'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Round Overview Header */}
      <div className="grid md:grid-cols-4 gap-4 md:gap-6">
        {[
          { label: "Current Round", value: "Seed / F&F", icon: <ShieldCheck size={16} /> },
          { label: "Target Raise", value: "₹50L - ₹75L", icon: <TrendingUp size={16} /> },
          { label: "Min. Investment", value: "₹2.5 Lakhs", icon: <DollarSign size={16} /> },
          { label: "Strategic Moat", value: "Owned Retail", icon: <Target size={16} /> }
        ].map((item, i) => (
          <div key={i} className="p-4 rounded-2xl bg-brand-gold/5 border border-brand-gold/10 flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
              {item.icon}
            </div>
            <div>
              <div className="text-[8px] font-bold uppercase tracking-widest text-brand-gold/40">{item.label}</div>
              <div className="text-sm font-bold text-white">{item.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Consultant's Perspective / Thesis Summary */}
      <div className="p-8 md:p-10 rounded-[2.5rem] bg-brand-navy/40 border border-brand-gold/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
          <BookOpen size={120} />
        </div>
        <div className="relative z-10 grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4 md:col-span-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-[8px] font-bold uppercase tracking-widest text-brand-gold">
              <span className="w-1 h-1 rounded-full bg-brand-gold" />
              Consultant's Perspective
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight">The Investment <br />Thesis in 60 Seconds</h3>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gold/60">Structural Advantage</div>
              <p className="text-sm text-brand-cream/60 leading-relaxed font-light">
                Madira bypasses the traditional "Goa-to-North" supply chain, capturing a <span className="text-white font-medium">20% margin uplift</span> through local production and owned retail. This is a structural moat that competitors cannot replicate without massive CapEx.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gold/60">Execution De-risking</div>
              <p className="text-sm text-brand-cream/60 leading-relaxed font-light">
                The #1 risk for craft spirits is distribution. By leveraging <span className="text-white font-medium">16 proprietary L-2 stores</span>, we guarantee Day 1 shelf placement and real-time consumer feedback loops—eliminating the 18-month listing lag.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start relative">
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white">Investment Parameters</h3>
            <p className="text-xs md:text-sm text-brand-cream/60 leading-relaxed">
              Adjust the slider to see how your investment converts into equity and projected returns based on our revenue targets.
            </p>
          </div>

          <div className="space-y-8 p-6 md:p-8 rounded-3xl bg-brand-navy/30 border border-white/5">
            {/* Investment Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-[10px] font-bold uppercase tracking-widest text-brand-gold/60">Investment Amount</label>
                <span className="text-lg md:text-xl font-mono font-bold text-brand-gold-light">{formatCurrency(investment)}</span>
              </div>
              <div className="relative py-4">
                <input 
                  type="range" 
                  min="250000" 
                  max="7500000" 
                  step="50000"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-brand-gold/20 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                />
                {/* Progress Bar Overlay */}
                <div 
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-2 bg-brand-gold rounded-lg pointer-events-none transition-all duration-300"
                  style={{ width: `${((investment - 250000) / (7500000 - 250000)) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-[8px] md:text-[10px] text-brand-cream/30 font-mono">
                <span>MIN ₹2.5L</span>
                <span>MAX ₹75L</span>
              </div>
            </div>

            {/* Valuation Lock-in Notice */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-[10px] font-bold uppercase tracking-widest text-brand-gold/60">Pre-Money Valuation (Locked)</label>
                <span className="text-lg md:text-xl font-mono font-bold text-brand-gold-light">{formatCurrency(preMoneyValuation)}</span>
              </div>
              <div className="p-4 rounded-xl border border-brand-gold/20 bg-brand-gold/5 text-[10px] md:text-xs text-brand-cream/60 leading-relaxed font-light mt-2">
                This seed round is strictly priced at ₹3.5 Crore Pre-Money. Unlike competing brands that burn millions over 18 months for distribution, Madira is completely de-risked via <span className="text-white font-bold">16 proprietary L-2 retail stores</span> on Day 1. You are buying in at floor value.
              </div>
            </div>
          </div>

            {/* Equity Progress Card */}
            <div className="p-5 md:p-6 rounded-2xl bg-brand-gold/5 border border-brand-gold/20 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                    <PieChart size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gold/60">
                      {showFutureRound ? "Diluted Stake (Post-Series A)" : "Your Current Equity Stake"}
                    </div>
                    <div className="text-2xl md:text-3xl font-serif font-bold text-white">{equityPercentage.toFixed(2)}%</div>
                  </div>
                </div>
                <button 
                  onClick={() => setShowFutureRound(!showFutureRound)}
                  className={`px-3 py-1.5 rounded-lg text-[8px] font-bold uppercase tracking-widest transition-all border ${showFutureRound ? 'bg-brand-gold text-brand-void border-brand-gold' : 'text-brand-cream/40 border-white/10 hover:border-brand-gold/40'}`}
                >
                  {showFutureRound ? "Reset" : "Simulate Next Round"}
                </button>
              </div>
              
              {/* Animated Progress Bar for Equity */}
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(equityPercentage * 5, 100)}%` }}
                  className="h-full bg-brand-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                />
              </div>

              {showFutureRound && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="pt-4 border-t border-brand-gold/10 space-y-3"
                >
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gold/60 flex items-center gap-2">
                    <TrendingUp size={12} />
                    Next Round Simulation (₹15 - 20 Cr Valuation)
                  </div>
                  <p className="text-[10px] text-brand-cream/40 leading-relaxed italic">
                    Assuming a future round at ₹15 Cr with 15% fresh dilution. Your stake dilutes from {initialEquity.toFixed(2)}% to {dilutedEquity.toFixed(2)}%, but the value of your holding increases as the company valuation grows.
                  </p>
                  <div className="pt-2 border-t border-brand-gold/5">
                    <div className="text-[8px] font-bold uppercase tracking-widest text-brand-gold/40 mb-1">Valuation Rationale (Current Round)</div>
                    <p className="text-[9px] text-brand-cream/30 leading-relaxed">
                      The ₹3.5 Cr valuation is based on our unique structural advantage: 16 owned retail stores providing guaranteed distribution, which typically takes 18-24 months and ₹2-3 Cr in marketing spend for competitors to achieve. This "Day 1" revenue potential significantly de-risks the investment.
                    </p>
                  </div>
                </motion.div>
              )}
              
              <div className="flex justify-between items-center">
                <div className="text-[8px] text-brand-cream/30 uppercase tracking-widest">
                  {showFutureRound ? "Value Appreciation: High" : "Dilution Impact: Low"}
                </div>
                {!showFutureRound && (
                  <div className="text-[8px] text-brand-gold uppercase tracking-widest font-bold">
                    Seed Round Valuation: {formatCurrency(postMoneyValuation)}
                  </div>
                )}
              </div>
            </div>
        </div>

        <div className="space-y-6">
          {/* Controls Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 md:mb-6">
            <div className="space-y-1">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-white">Exit Scenarios</h3>
              <div className="flex items-center gap-2 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-brand-gold/40">
                <Info size={10} />
                <span>Click cards for analysis</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 p-1 rounded-full bg-white/5 border border-white/10">
              <button 
                onClick={() => setProjectionYear(2)}
                className={`px-4 py-1.5 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-widest transition-all ${projectionYear === 2 ? 'bg-brand-gold text-brand-void' : 'text-brand-cream/40 hover:text-white'}`}
              >
                Year 2
              </button>
              <button 
                onClick={() => setProjectionYear(3)}
                className={`px-4 py-1.5 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-widest transition-all ${projectionYear === 3 ? 'bg-brand-gold text-brand-void' : 'text-brand-cream/40 hover:text-white'}`}
              >
                Year 3
              </button>
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex justify-end gap-2 mb-4">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-brand-gold/20 text-brand-gold' : 'text-brand-cream/20 hover:text-brand-cream/40'}`}
              title="Grid View"
            >
              <LayoutGrid size={18} />
            </button>
            <button 
              onClick={() => setViewMode('compare')}
              className={`p-2 rounded-lg transition-all ${viewMode === 'compare' ? 'bg-brand-gold/20 text-brand-gold' : 'text-brand-cream/20 hover:text-brand-cream/40'}`}
              title="Compare View"
            >
              <List size={18} />
            </button>
          </div>
          
          <AnimatePresence mode="wait">
            {viewMode === 'grid' ? (
              <motion.div 
                key="grid"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="grid gap-4"
              >
                {/* Conservative Scenario */}
                <motion.div 
                  onClick={() => setActiveScenario('conservative')}
                  className="p-6 md:p-8 rounded-3xl bg-brand-navy/50 border border-white/5 relative overflow-hidden group cursor-pointer hover:border-brand-gold/40 transition-all active:scale-[0.98]"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <TrendingUp size={60} className="md:size-20" />
                  </div>
                  <div className="relative z-10 space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-brand-gold/5 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-brand-gold/40 flex items-center gap-2">
                        Conservative <Info size={10} />
                      </span>
                      <span className="text-xl md:text-2xl font-serif font-bold text-brand-gold-light">{roi3x.toFixed(1)}x Return</span>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-brand-cream/30">Projected Payout</div>
                      <div className="text-3xl md:text-4xl font-serif font-bold text-white">{formatCurrency(investorExit3x)}</div>
                    </div>
                    <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[10px] md:text-xs text-brand-cream/40 italic">
                      <span>Based on {scenarios.conservative.valuation} Valuation</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>

                {/* Bull Scenario */}
                <motion.div 
                  onClick={() => setActiveScenario('bull')}
                  className="p-6 md:p-8 rounded-3xl bg-brand-gold/10 border border-brand-gold/30 relative overflow-hidden group cursor-pointer hover:border-brand-gold/60 transition-all active:scale-[0.98]"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-brand-gold">
                    <DollarSign size={60} className="md:size-20" />
                  </div>
                  <div className="relative z-10 space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-brand-gold/20 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-brand-gold flex items-center gap-2">
                        Bull Case <Info size={10} />
                      </span>
                      <span className="text-xl md:text-2xl font-serif font-bold text-brand-gold-light">{roi7x.toFixed(1)}x Return</span>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gold/40">Projected Payout</div>
                      <div className="text-3xl md:text-4xl font-serif font-bold text-white">{formatCurrency(investorExit7x)}</div>
                    </div>
                    <div className="pt-4 border-t border-brand-gold/10 flex justify-between items-center text-[10px] md:text-xs text-brand-gold/60 italic">
                      <span>Based on {scenarios.bull.valuation} Valuation</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div 
                key="compare"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="rounded-3xl bg-brand-navy/30 border border-white/5 overflow-hidden"
              >
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="p-4 md:p-6 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-brand-cream/40">Metric</th>
                      <th className="p-4 md:p-6 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-brand-gold/60">Conservative</th>
                      <th className="p-4 md:p-6 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-brand-gold">Bull Case</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs md:text-sm">
                    {[
                      { label: "Revenue Multiple", cons: `${currentProj.consMult}x`, bull: `${currentProj.bullMult}x` },
                      { label: "Exit Valuation", cons: scenarios.conservative.valuation, bull: scenarios.bull.valuation },
                      { label: "ROI Multiple", cons: `${roi3x.toFixed(1)}x`, bull: `${roi7x.toFixed(1)}x`, highlight: true },
                      { label: "Your Payout", cons: formatCurrency(investorExit3x), bull: formatCurrency(investorExit7x), highlight: true }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 md:p-6 text-brand-cream/60 font-medium">{row.label}</td>
                        <td className={`p-4 md:p-6 font-mono ${row.highlight ? 'text-white font-bold' : 'text-brand-cream/40'}`}>{row.cons}</td>
                        <td className={`p-4 md:p-6 font-mono ${row.highlight ? 'text-brand-gold font-bold' : 'text-brand-gold/60'}`}>{row.bull}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="p-4 bg-brand-gold/5 text-center">
                  <div className="text-[8px] font-bold uppercase tracking-widest text-brand-gold/60">
                    Bull Case yields {(roi7x / roi3x).toFixed(1)}x more than Conservative
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Revenue/Valuation Projection Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 md:p-8 rounded-3xl bg-brand-navy/30 border border-white/5 space-y-6"
          >
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <h4 className="text-lg font-serif font-bold text-white">Projected Exit Valuation</h4>
                <p className="text-[10px] text-brand-cream/40 uppercase tracking-widest">Year {projectionYear} Comparison</p>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-bold text-brand-gold/60 uppercase tracking-widest">Target Revenue</div>
                <div className="text-xl font-serif font-bold text-white">{formatCurrency(currentProj.revenue)}</div>
              </div>
            </div>
            
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'rgba(240, 232, 213, 0.4)', fontSize: 10, fontWeight: 'bold' }}
                    dy={10}
                  />
                  <YAxis hide />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255,255,255,0.02)' }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-brand-void border border-brand-gold/20 p-4 rounded-xl shadow-2xl">
                            <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest mb-1">{payload[0].payload.name}</p>
                            <p className="text-xl font-serif font-bold text-white">{formatCurrency(payload[0].value as number)}</p>
                            <p className="text-[8px] text-brand-cream/40 uppercase tracking-widest mt-1">Estimated Valuation</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={60}>
                    {chartData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color}
                        className="transition-all duration-300 hover:opacity-100"
                        style={{ fill: entry.color }}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <p className="text-[8px] md:text-[10px] text-brand-cream/30 leading-relaxed text-center px-4 md:px-8">
            *Calculations are illustrative and based on projected Year {projectionYear} performance. Early-stage investments carry significant risk. Please consult with financial advisors before committing capital.
          </p>
        </div>
      </div>

      {/* Explanation Modal */}
      <AnimatePresence>
        {activeScenario && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-brand-void/90 backdrop-blur-md"
            onClick={() => setActiveScenario(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-card p-8 md:p-12 max-w-lg w-full space-y-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveScenario(null)}
                className="absolute top-6 right-6 text-brand-cream/40 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">Scenario Analysis (Year {projectionYear})</div>
                <h4 className="text-2xl md:text-3xl font-serif font-bold text-white">{scenarios[activeScenario].title}</h4>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gold/40">Why this happens</div>
                  <p className="text-sm md:text-base text-brand-cream/80 leading-relaxed font-light">
                    {scenarios[activeScenario].why}
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gold/40">How it happens</div>
                  <p className="text-sm md:text-base text-brand-cream/80 leading-relaxed font-light">
                    {scenarios[activeScenario].how}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-cream/40">Exit Valuation</div>
                  <div className="text-lg font-mono font-bold text-brand-gold">{scenarios[activeScenario].valuation}</div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5">
                <button 
                  onClick={() => setActiveScenario(null)}
                  className="w-full py-4 rounded-full bg-brand-gold text-brand-void font-bold text-sm tracking-widest uppercase"
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
