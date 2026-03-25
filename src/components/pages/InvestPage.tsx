import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, Shield, Target, BarChart3, Users, 
  Mountain, Droplets, Store, Zap, Award, ArrowRight,
  CheckCircle2, PieChart, Layers, Globe, Clock
} from 'lucide-react';
import { MARKET_STATS, FINANCIALS, TRACTION, USE_OF_FUNDS, TEAM } from '../../constants';

const Section = ({ children, id, className = '' }: { children: React.ReactNode, id?: string, className?: string }) => (
  <section id={id} className={`py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const StatCard = ({ label, value, sub, icon }: { label: string, value: string, sub: string, icon: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-8 md:p-10 rounded-3xl bg-brand-navy/40 border border-white/5 hover:border-brand-gold/20 transition-all group space-y-6"
  >
    <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-void transition-all">
      {icon}
    </div>
    <div>
      <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold/60">{label}</div>
      <div className="text-3xl md:text-4xl font-serif font-bold text-white mt-2">{value}</div>
      <div className="text-xs text-brand-cream/40 mt-1">{sub}</div>
    </div>
  </motion.div>
);

export function InvestPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="min-h-screen bg-brand-void">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-gold/5 blur-[150px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl mx-auto space-y-8 relative z-10"
        >
          <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-gold/60">
            Investor Relations · Seed Round · 2026
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-serif font-black text-white leading-[0.9] tracking-tighter">
            Why Invest in <span className="gold-gradient italic">Madira</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-cream/50 max-w-3xl mx-auto font-light leading-relaxed">
            India's craft spirits market is at an inflection point. Madira is positioned to capture this moment with an unfair structural advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('mailto:jai.sharma6696@gmail.com?subject=Investment Interest: Madira')}
              className="px-10 py-5 rounded-full bg-brand-gold text-brand-void font-bold text-sm tracking-[0.2em] uppercase shadow-[0_0_40px_rgba(200,137,30,0.2)]"
            >
              Schedule a Call
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('pitchdeck')}
              className="px-10 py-5 rounded-full border border-white/10 text-brand-cream font-bold text-sm tracking-[0.2em] uppercase hover:bg-white/5 transition-colors"
            >
              View Pitch Deck
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* The Opportunity */}
      <Section id="opportunity">
        <div className="space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">The Opportunity</div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              A ₹22,100 Cr Market <br /><span className="italic text-brand-gold/60">Growing at 22% CAGR</span>
            </h2>
            <p className="text-lg text-brand-cream/50 leading-relaxed font-light">
              India's premium spirits landscape is undergoing a dramatic shift. Consumers are migrating from volume to value, creating unprecedented opportunities for authentic craft brands.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {MARKET_STATS.map((stat, i) => (
              <StatCard key={i} label={stat.label} value={stat.value} sub={stat.sub} icon={<TrendingUp size={20} />} />
            ))}
          </div>
        </div>
      </Section>

      {/* Why Madira — 5 Pillars */}
      <Section id="pillars" className="border-t border-white/5">
        <div className="space-y-20">
          <div className="max-w-3xl space-y-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">The Moat</div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Five Structural <span className="italic text-brand-gold/60">Advantages</span>
            </h2>
          </div>

          <div className="space-y-12">
            {[
              {
                num: "01",
                title: "Owned Distribution",
                subtitle: "16 Premium L-2 Retail Stores",
                desc: "While craft brands spend ₹2-4 Crore and 18 months negotiating shelf placement, Madira has guaranteed Day 1 distribution through 16 owned retail outlets across Gurgaon's premium corridor. This eliminates the #1 killer of craft spirits startups: distribution.",
                icon: <Store size={28} />,
                stats: [
                  { label: "Retail Outlets", value: "16" },
                  { label: "Distribution Cost", value: "₹0" },
                  { label: "Time to Shelf", value: "Day 1" }
                ]
              },
              {
                num: "02",
                title: "Himalayan Provenance",
                subtitle: "Private Spring Water + Ancient Botanicals",
                desc: "India's only spirits brand with a private Himalayan spring water source and access to rare high-altitude botanicals. This terroir cannot be replicated by competitors in Goa or South India — it's a permanent geographic moat.",
                icon: <Mountain size={28} />,
                stats: [
                  { label: "Water Source", value: "Private" },
                  { label: "Altitude", value: "4,000ft+" },
                  { label: "Botanicals", value: "12 Native" }
                ]
              },
              {
                num: "03",
                title: "Dutch Precision Technology",
                subtitle: "iStill NextGen from Netherlands",
                desc: "We paired ancient ingredients with the world's most advanced distillation technology. The iStill system provides batch-level consistency, real-time quality monitoring, and the ability to produce multiple spirit categories from a single setup — crucial for a multi-product portfolio.",
                icon: <Zap size={28} />,
                stats: [
                  { label: "Technology", value: "iStill" },
                  { label: "Consistency", value: "99.9%" },
                  { label: "Spirit Types", value: "6" }
                ]
              },
              {
                num: "04",
                title: "20% Margin Advantage",
                subtitle: "Vertical Integration = Higher Returns",
                desc: "By owning both production and retail, Madira captures the 20% retailer margin that every other brand loses. Combined with lower freight costs (we are in North India, selling to North India), our unit economics are structurally superior.",
                icon: <BarChart3 size={28} />,
                stats: [
                  { label: "Extra Margin", value: "+20%" },
                  { label: "Freight Savings", value: "₹12-18/btl" },
                  { label: "Net Realization", value: "₹1,075-1,355" }
                ]
              },
              {
                num: "05",
                title: "Category Creation: Madira Balls",
                subtitle: "India's First Spherical Craft RTD",
                desc: "Madira Balls is India's first spherical ready-to-drink cocktail — a category that doesn't yet exist in the Indian market. Inspired by Buzzballz (a $500M+ brand in the US), we're creating a brand-new consumption occasion that targets Gen-Z and festival culture.",
                icon: <Globe size={28} />,
                stats: [
                  { label: "Category", value: "First-of-Kind" },
                  { label: "US Comparable", value: "$500M+" },
                  { label: "Target", value: "Gen-Z" }
                ]
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="grid lg:grid-cols-[1fr_2fr] gap-12 p-10 md:p-14 rounded-[2rem] bg-brand-navy/30 border border-white/5 hover:border-brand-gold/20 transition-all"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-brand-gold/40 font-mono">{pillar.num}</span>
                    <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                      {pillar.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">{pillar.title}</h3>
                    <div className="text-xs text-brand-gold mt-2 uppercase tracking-widest font-bold">{pillar.subtitle}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {pillar.stats.map((stat, j) => (
                      <div key={j}>
                        <div className="text-[8px] font-bold text-brand-cream/30 uppercase tracking-widest">{stat.label}</div>
                        <div className="text-lg font-serif font-bold text-white mt-1">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-base text-brand-cream/60 leading-relaxed font-light">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Financial Projections */}
      <Section id="financials" className="border-t border-white/5">
        <div className="space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">The Numbers</div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Financial <span className="italic text-brand-gold/60">Projections</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-3xl bg-brand-gold/10 border border-brand-gold/30 space-y-8">
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">3-Year Revenue Target</div>
              <div className="text-6xl md:text-7xl font-serif font-bold text-white">₹67.7 Cr</div>
              <div className="space-y-4">
                {[
                  { year: "Year 1", revenue: "₹8.4 Cr", growth: "Launch" },
                  { year: "Year 2", revenue: "₹27.1 Cr", growth: "+223%" },
                  { year: "Year 3", revenue: "₹67.7 Cr", growth: "+150%" }
                ].map((yr, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
                    <span className="text-sm text-brand-cream/60 font-bold uppercase tracking-widest">{yr.year}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-xl font-serif font-bold text-white">{yr.revenue}</span>
                      <span className="text-[10px] font-bold text-brand-gold bg-brand-gold/10 px-2 py-1 rounded-full">{yr.growth}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-10 rounded-3xl bg-brand-navy/40 border border-white/5 space-y-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">Key Metrics</div>
                {FINANCIALS.map((stat, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
                    <span className="text-sm text-brand-cream/60">{stat.label}</span>
                    <span className="text-2xl font-serif font-bold text-white">{stat.value}</span>
                  </div>
                ))}
              </div>

              <div className="p-8 rounded-3xl bg-brand-navy/40 border border-white/5 flex items-center gap-6">
                <CheckCircle2 className="text-brand-gold shrink-0" size={32} />
                <div>
                  <div className="text-white font-bold">Break-even: Month 5</div>
                  <div className="text-xs text-brand-cream/40">At ~4,000 bottles/month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Use of Funds */}
      <Section id="funds" className="border-t border-white/5">
        <div className="space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">Capital Allocation</div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Use of <span className="italic text-brand-gold/60">Funds</span>
            </h2>
            <p className="text-lg text-brand-cream/50 leading-relaxed font-light">
              We are raising ₹50-75 Lakhs in our Seed round. Every rupee is allocated to revenue-generating activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {USE_OF_FUNDS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-8 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand-navy/60 border border-white/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-void transition-all shadow-lg">
                    <span className="text-xl font-serif font-bold">{item.value}%</span>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-lg text-white font-medium uppercase tracking-wide">{item.label}</span>
                      <span className="text-xs text-brand-cream/40">{item.details}</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full bg-brand-gold"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-12 rounded-3xl bg-brand-gold/10 border border-brand-gold/30 space-y-8 flex flex-col justify-center">
              <div className="text-center space-y-4">
                <div className="text-[10px] font-bold text-brand-gold/60 uppercase tracking-[0.5em]">Total Raise</div>
                <div className="text-7xl font-serif font-bold text-white">₹75L</div>
                <div className="text-[10px] text-brand-cream/40 uppercase tracking-widest">Seed Round · Closing Q1 2026</div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="text-center">
                  <div className="text-[10px] font-bold text-brand-cream/30 uppercase tracking-widest">Min. Ticket</div>
                  <div className="text-xl font-serif font-bold text-white mt-1">₹2.5L</div>
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-bold text-brand-cream/30 uppercase tracking-widest">Instrument</div>
                  <div className="text-xl font-serif font-bold text-white mt-1">SAFE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Traction Timeline */}
      <Section id="traction" className="border-t border-white/5">
        <div className="space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">Execution</div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Traction & <span className="italic text-brand-gold/60">Roadmap</span>
            </h2>
          </div>

          <div className="space-y-0">
            {TRACTION.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 md:gap-12 relative py-8"
              >
                {i !== TRACTION.length - 1 && <div className="absolute left-[23px] top-[60px] bottom-0 w-px bg-white/10" />}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 ${
                  item.status === 'done' ? 'bg-brand-gold text-brand-void' :
                  item.status === 'active' ? 'bg-brand-gold/20 text-brand-gold border border-brand-gold/40 animate-pulse' :
                  'bg-white/10 text-brand-cream/40 border border-white/20'
                }`}>
                  {item.status === 'done' ? <CheckCircle2 size={20} /> : <Clock size={20} />}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-brand-gold/80 uppercase tracking-widest">{item.date}</span>
                    {item.status === 'active' && (
                      <span className="px-3 py-1 rounded-full bg-brand-gold/20 text-[8px] font-bold text-brand-gold uppercase tracking-widest border border-brand-gold/40">Current</span>
                    )}
                  </div>
                  <div className="text-xl font-bold text-white uppercase tracking-widest">{item.title}</div>
                  <p className="text-sm text-brand-cream/60 leading-relaxed font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section id="team" className="border-t border-white/5">
        <div className="space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">Leadership</div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              The <span className="italic text-brand-gold/60">Founders</span>
            </h2>
            <p className="text-lg text-brand-cream/50 leading-relaxed font-light">
              Our team combines the "Street Smart" of retail dominance with the "Scale Smart" of corporate operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {TEAM.map((member, i) => (
              <div key={i} className="p-10 rounded-[2rem] bg-brand-navy/40 border border-white/5 hover:border-brand-gold/20 transition-all space-y-6 group">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-void transition-all">
                    <Users size={28} />
                  </div>
                  <div>
                    <div className="text-2xl font-serif font-bold text-white">{member.name}</div>
                    <div className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">{member.role}</div>
                  </div>
                </div>
                <p className="text-sm text-brand-cream/60 leading-relaxed font-light">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="py-32 md:py-40 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-gold/5 blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
              Ready to build the future of Indian craft spirits?
            </h2>
            <p className="text-xl text-brand-cream/50 max-w-2xl mx-auto font-light">
              We are currently closing our Seed round. Join us in bringing Himalayan provenance to the world.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('mailto:jai.sharma6696@gmail.com?subject=Investment Interest: Madira')}
              className="px-12 py-5 rounded-full bg-brand-gold text-brand-void font-black text-sm tracking-[0.2em] uppercase shadow-[0_0_40px_rgba(200,137,30,0.3)] hover:shadow-[0_0_60px_rgba(200,137,30,0.5)] transition-all"
            >
              Invest Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('icmemo')}
              className="px-12 py-5 rounded-full border border-white/10 text-brand-cream font-bold text-sm tracking-[0.2em] uppercase hover:bg-white/5 transition-colors"
            >
              Read IC Memo
            </motion.button>
          </div>
          <div className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/5">
            {[
              { label: "Target Raise", value: "₹50-75L" },
              { label: "Min. Ticket", value: "₹2.5L" },
              { label: "Round Status", value: "Closing Soon" }
            ].map((item, i) => (
              <div key={i} className="space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gold/40">{item.label}</div>
                <div className="text-xl font-serif font-bold text-white">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
