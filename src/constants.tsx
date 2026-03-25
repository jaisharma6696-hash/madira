import { Slide, Stat } from './types';

export const BRAND_NAME = "MADIRA";

export const BRAND_VIDEO_URL = "/brand-story.mp4"; // Placeholder: Replace with user's specific video URL

export const CORE_VALUES = [
  { title: "Radical Transparency", desc: "From Himalayan spring source to the final seal, every drop is accounted for." },
  { title: "Provenance", desc: "We don't just make spirits; we bottle the geography of the Sirmour valley." },
  { title: "Precision", desc: "Dutch iStill technology ensures that Batch 001 is as perfect as Batch 100." },
];

export const VISUAL_IDENTITY = {
  colors: [
    { name: "Himalayan Navy", hex: "#0B1422", desc: "The deep, mysterious shadows of the mountain range at dusk." },
    { name: "Sun-drenched Gold", hex: "#C8891E", desc: "The first light hitting the peaks; a symbol of premium quality." },
    { name: "Glacial Cream", hex: "#F0E8D5", desc: "The purity of unrefined botanicals and mountain spring water." },
  ],
  typography: "Playfair Display (Serif) for legacy, Inter (Sans) for modern precision.",
};

export const BRAND_STORY = {
  title: "The Madira Story",
  subtitle: "Why Us? The Unfair Advantage.",
  content: "Madira was born from a simple observation: North India's premium spirits market was a 'black hole' for local craft. While Goa was celebrated for its gin, the massive North Indian consumer was paying a 'Goa Tax'—freight, duties, and listing fees—to drink spirits made 2,000km away.",
  founders: [
    {
      name: "The Retail King",
      role: "Distribution Moat",
      story: "Operating 16 of Gurgaon's most premium L-2 retail outlets. He doesn't just know the market; he IS the market. He knows exactly what the ₹2,000+ consumer asks for every Friday night."
    },
    {
      name: "The Brand Architect",
      role: "Operational Precision",
      story: "Ex-FMCG leader who saw the gap between 'mass-market' and 'true craft'. Obsessed with the chemistry of distillation and the psychology of luxury."
    }
  ],
  whyUs: [
    { 
      title: "We Own the Shelf", 
      desc: "Most brands die waiting for a listing. We launch with 16 premium stores on Day 1. Guaranteed distribution is our biggest moat.",
      icon: "Target"
    },
    { 
      title: "The Himalayan Edge", 
      desc: "We source water from a private spring at 3,000ft. It's not a marketing story; it's a mineral profile that defines our liquid.",
      icon: "Mountain"
    },
    { 
      title: "Vertical Integration", 
      desc: "We capture the 20% retailer margin internally, allowing us to price aggressively while maintaining luxury quality.",
      icon: "Zap"
    },
    {
      title: "Regulatory Shield",
      desc: "Local production in the North avoids interstate export/import hurdles that plague Goa-based brands.",
      icon: "ShieldCheck"
    }
  ]
};

export const PRODUCTS = [
  {
    id: "gin",
    name: "Madira Tulsi & Gondhoraj Gin",
    line: "Core Revenue Line",
    type: "Signature Botanical Gin",
    description: "Our flagship 'Hero' product. A sophisticated gin distilled with 12 hand-picked botanicals, featuring the bright, citrusy notes of Gondhoraj and the sacred warmth of Tulsi. Cut with low-TDS Himalayan spring water for a crisp, ethereal finish.",
    price: "₹1,550",
    details: [
      "Botanicals: Tulsi, Gondhoraj, Himalayan Juniper",
      "Water: Private Himalayan Spring (3,000ft)",
      "Process: iStill NextGen Cold Distillation",
      "ABV: 42.8%"
    ],
    comparison: "Bridges the gap between mass-craft (Greater Than) and ultra-premium (Stranger & Sons) by offering authentic Himalayan provenance at a competitive price point.",
    competitors: [
      { name: "Madira Gin", price: "₹1,550", origin: "Himalayas", features: "Himalayan Spring Water, Tulsi & Gondhoraj", isMadira: true },
      { name: "Stranger & Sons", price: "₹2,500+", origin: "Goa", features: "Premium Craft, 9 Botanicals", isMadira: false },
      { name: "Greater Than", price: "₹1,000+", origin: "Goa", features: "Mass Craft, London Dry Style", isMadira: false }
    ],
    positioning: "The 'Hero' Scaler: High-volume potential with premium craft credentials. Designed for the modern Indian palate seeking regional identity.",
  },
  {
    id: "vodka",
    name: "Madira Glacier Vodka",
    line: "Core Revenue Line",
    type: "Precision Grain Vodka",
    description: "A masterclass in purity. Distilled from 100% Himalayan grain and refined through glacial mineral filtration. The result is a vodka of exceptional clarity and a smooth, rounded mouthfeel with a hint of mountain minerals.",
    price: "₹1,450",
    details: [
      "Base: 100% Himalayan Grain",
      "Filtration: Multi-stage Glacial Mineral",
      "Water: Low-Mineral Mountain Source",
      "ABV: 40%"
    ],
    comparison: "A credible, high-provenance alternative to global giants like Absolut, offering a superior 'Grain-to-Glass' story at a more accessible price.",
    competitors: [
      { name: "Madira Vodka", price: "₹1,450", origin: "Himalayas", features: "100% Himalayan Grain, Glacial Mineral Filtration", isMadira: true },
      { name: "Absolut", price: "₹2,000+", origin: "Sweden", features: "Global Giant, Winter Wheat", isMadira: false },
      { name: "Magic Moments", price: "₹800+", origin: "India", features: "Mass Market, Triple Distilled", isMadira: false }
    ],
    positioning: "The Utility Scaler: A high-margin, high-volume workhorse for the portfolio, competing on liquid quality and Himalayan purity.",
  },
  {
    id: "rum",
    name: "Madira Sirmour Rum",
    line: "Core Revenue Line",
    type: "Barrel Aged Dark Rum",
    description: "A rich, evocative dark rum aged in charred oak within the temperate micro-climate of the Sirmour Valley. Notes of toasted vanilla, caramelised sugarcane, and a whisper of Himalayan honey.",
    price: "₹1,250",
    details: [
      "Aging: Oak Matured in Sirmour Valley",
      "Notes: Vanilla, Toasted Oak, Honey",
      "Base: Himalayan Sugarcane & Honey",
      "ABV: 42.8%"
    ],
    comparison: "The premium trade-up from Old Monk. Offers the complexity of aged craft rum (Segredo Aldeia) but at a price point that invites daily consumption.",
    competitors: [
      { name: "Madira Rum", price: "₹1,250", origin: "Sirmour Valley", features: "Himalayan Sugarcane & Honey, Oak Matured", isMadira: true },
      { name: "Segredo Aldeia", price: "₹1,800+", origin: "Goa", features: "Premium Craft, Jaggery & Sugarcane", isMadira: false },
      { name: "Old Monk", price: "₹500+", origin: "India", features: "Mass Market, Vatted Dark Rum", isMadira: false }
    ],
    positioning: "The Volume Disruptor: Targeting the massive Indian rum market with a 'Craft-at-Scale' proposition.",
  },
  {
    id: "whiskey-blended",
    name: "Madira 5-Year Reserve",
    line: "Premium Prestige Line",
    type: "Aged Blended Whisky",
    description: "A sophisticated blend of high-altitude malts and select grain spirits, aged for 5 years in charred American oak. Matured within the unique pressure zones of the Sirmour Valley to accelerate wood extraction.",
    price: "₹1,850",
    details: [
      "Aging: 5-Year Oak Matured",
      "Profile: Vanilla, Toasted Malt, Soft Smoke",
      "Maturation: High-Altitude Himalayan",
      "ABV: 42.8%"
    ],
    comparison: "Bridges the gap between entry-level scotch and local premium blends like Black Dog. Maturation at 3,000ft ensures a character depth rarely found in plain-matured whiskeys.",
    competitors: [
      { name: "Madira 5Y", price: "₹1,850", origin: "Himalayas", features: "5-Year Matured, Himalayan Provenance", isMadira: true },
      { name: "Black Dog", price: "₹2,200+", origin: "Scotland/India", features: "Legacy Blend, Peated", isMadira: false },
      { name: "Teacher's", price: "₹1,600+", origin: "Scotland/India", features: "High Malt Content, Smoky", isMadira: false }
    ],
    positioning: "The Prestige Anchor: A high-margin entry into the dominant whiskey segment, leveraging the 5-Year aging narrative for premiumization.",
  },
  {
    id: "single-malt",
    name: "Madira 7-Year High Pass",
    line: "Halo Icon Line",
    type: "Peated Single Malt",
    description: "A prestige 7-Year aged single malt. 100% malted barley, copper pot distilled and matured in the thin air of the Sirmour peaks. Direct competition for Indri-Trini, offering a more intense mountain maturation profile.",
    price: "₹4,500",
    details: [
      "Aging: 7-Year Cask Strength",
      "Base: 100% Malted Barley",
      "Distillation: Traditional Copper Pot",
      "ABV: 46%"
    ],
    comparison: "Challenging the excellence of Indri and Amrut. The 7-year thin-air maturation creates a profile of dried fruit and intense spice that is unique to the Madira range.",
    competitors: [
      { name: "Madira 7Y", price: "₹4,500", origin: "Himalayas", features: "7-Year Peak Maturation, Copper Pot", isMadira: true },
      { name: "Indri-Trini", price: "₹4,200+", origin: "India", features: "Multi-Cask, Award Winning", isMadira: false },
      { name: "Amrut", price: "₹4,000+", origin: "Bengaluru", features: "Tropical Maturation, Rich & Complex", isMadira: false }
    ],
    positioning: "The Brand Icon: A high-prestige product designed to compete at the very top of the Indian Single Malt category.",
  },
  {
    id: "madira-balls",
    name: "Madira Balls",
    line: "Innovation Line",
    type: "RTD / Cocktail Base",
    description: "India's first spherical craft cocktail pods. Designed for high-energy retail and travel, offering a premium cocktail experience in a revolutionary, portable format.",
    price: "₹250 - 350",
    details: [
      "Format: 180ml Spherical Pods",
      "Flavors: Elderflower Gin, Spiced Negroni",
      "Target: High-Energy Retail / Travel",
      "ABV: 8-12%",
      "Packaging: Recyclable PET Sphere"
    ],
    comparison: "A category creator. Offers a premium, craft-focused alternative to mass-market RTDs, capturing the 'convenience' trend with a luxury twist.",
    competitors: [
      { name: "Madira Balls", price: "₹250-350", origin: "Himalayas", features: "Spherical Pods, Premium Cocktail", isMadira: true },
      { name: "Breezer", price: "₹150+", origin: "Global", features: "Mass Market, Low ABV", isMadira: false },
      { name: "Jimmy's Cocktails", price: "₹100+", origin: "India", features: "Mixer Only, Non-Alcoholic", isMadira: false }
    ],
    positioning: "The Future of Convenience: A high-margin, innovative format that attracts a younger, tech-savvy demographic.",
  },
  {
    id: "buzz-balls",
    name: "Buzz Balls",
    line: "Innovation Line",
    type: "High-Proof RTD",
    description: "High-proof, stackable cocktail spheres designed for social occasions. A fun, high-energy format that bridges the gap between beer and full-bottle spirits.",
    price: "₹300",
    details: [
      "Format: Stackable 200ml Spheres",
      "ABV: 15% (High Proof)",
      "Occasion: Pre-gaming / Parties",
      "Launch: Q3 2026"
    ],
    comparison: "Directly targets the 'pre-game' and 'party' demographic currently underserved by traditional craft spirits.",
    competitors: [
      { name: "Buzz Balls", price: "₹300", origin: "Himalayas", features: "High-Proof (15%), Stackable", isMadira: true },
      { name: "Bro Code", price: "₹150+", origin: "India", features: "High ABV Beer, Mass Market", isMadira: false },
      { name: "Magic Moments RTD", price: "₹200+", origin: "India", features: "Standard RTD, Vodka Base", isMadira: false }
    ],
    positioning: "The Social Catalyst: A high-proof innovation designed for volume and social visibility.",
  },
];

export const GTM_STRATEGY = [
  { 
    phase: "Phase 1: Vertical Dominance", 
    desc: "Immediate listing across 16 owned L-2 stores in Gurgaon (Investor-owned). Guaranteed shelf space and priority display.",
    icon: "Store"
  },
  { 
    phase: "Phase 2: HORECA Seeding", 
    desc: "Strategic partnerships with top 50 bars in Delhi-NCR. Bartender advocacy programs and signature cocktail menus.",
    icon: "GlassWater"
  },
  { 
    phase: "Phase 3: Digital Storytelling", 
    desc: "Direct-to-consumer engagement through 'The Source' campaign, focusing on the Himalayan provenance and Dutch precision.",
    icon: "Globe"
  },
];

export const TRACTION = [
  { date: "Q4 2025", title: "Recipe & Supply Chain", desc: "Himalayan spring water source secured. iStill partnership finalized.", status: "done" },
  { date: "Q1 2026", title: "Retail Integration", desc: "MOU signed with 16 L-2 stores for priority listing.", status: "active" },
  { date: "Q2 2026", title: "Market Launch", desc: "Batch 01 production and HORECA seeding in Gurgaon.", status: "pending" }
];

export const TEAM = [
  { 
    name: "The Retail King", 
    role: "Retail & Distribution", 
    bio: "15+ years in Gurgaon liquor retail. Operates 16 L-2 stores. Deep excise & local network.", 
    expertise: ["Distribution", "Retail", "Excise"]
  },
  { 
    name: "The Brand Architect", 
    role: "Operations & Brand", 
    bio: "Ex-FMCG Lead. Expert in supply chain, manufacturing, and luxury brand positioning.", 
    expertise: ["Operations", "Manufacturing", "Branding"]
  }
];

export const FINANCIALS = [
  { label: "Gross Margin", value: "~62%", sub: "Premium Positioning", desc: "Premium positioning with efficient COGS" },
  { label: "EBITDA Margin", value: "30%", sub: "Year 3 Target", desc: "Lean operations & retail dominance" },
  { label: "Payback Period", value: "14 Months", sub: "Rapid ROI", desc: "Rapid capital recycling" }
];

export const MARKET_STATS: Stat[] = [
  { label: "India Craft Spirits", value: "₹22,100 Cr", sub: "Growing at 22.1% CAGR", accent: true },
  { label: "Super-Premium Growth", value: "23%", sub: "In 2024 alone", accent: true },
  { label: "Nao Spirits → Diageo", value: "₹130 Cr", sub: "At 3.7× revenue — the blueprint", accent: true },
  { label: "Craft Spirits by 2033", value: "₹1.62L Cr", sub: "From ₹22,100 Cr today", accent: true },
];

export const COMPETITION = [
  { category: "Gin", name: "Greater Than", origin: "Goa", price: "₹1,500", moat: "First mover, mass craft distribution." },
  { category: "Gin", name: "Stranger & Sons", origin: "Goa", price: "₹2,200", moat: "Global storytelling, premium export focus." },
  { category: "Gin", name: "Madira", origin: "Himalayas", price: "₹1,550", moat: "Owned Retail + Himalayan Provenance.", highlight: true },
  
  { category: "Vodka", name: "Absolut", origin: "Sweden", price: "₹2,400", moat: "Global brand equity, massive marketing." },
  { category: "Vodka", name: "Magic Moments", origin: "India", price: "₹900", moat: "Mass market dominance, low price point." },
  { category: "Vodka", name: "Madira", origin: "Himalayas", price: "₹1,450", moat: "Himalayan Grain + Glacial Filtration.", highlight: true },

  { category: "Whiskey", name: "Black Dog", origin: "Scotland/India", price: "₹2,100", moat: "Legacy brand, established luxury perception." },
  { category: "Whiskey", name: "Teacher's", origin: "Scotland/India", price: "₹1,900", moat: "Strong HORECA presence, high volume." },
  { category: "Whiskey", name: "Madira", origin: "Himalayas", price: "₹1,850", moat: "Mountain Aged + Direct Retail Access.", highlight: true },

  { category: "Rum", name: "Old Monk", origin: "India", price: "₹600", moat: "Cult following, unbeatable price-to-nostalgia." },
  { category: "Rum", name: "Segredo Aldeia", origin: "Goa", price: "₹1,800", moat: "Premium craft positioning, unique story." },
  { category: "Rum", name: "Madira", origin: "Himalayas", price: "₹1,250", moat: "Barrel Aged in Sirmour + Himalayan Honey.", highlight: true },

  { category: "Single Malt", name: "Amrut", origin: "Bangalore", price: "₹4,800", moat: "Global awards, first Indian single malt." },
  { category: "Single Malt", name: "Paul John", origin: "Goa", price: "₹4,200", moat: "Goa maturation, strong international footprint." },
  { category: "Single Malt", name: "Madira", origin: "Himalayas", price: "₹4,500", moat: "High-Altitude Maturation + Copper Pot Distilled.", highlight: true },

  { category: "RTD / Balls", name: "Buzzballz", origin: "USA", price: "N/A", moat: "Global category creator, high proof." },
  { category: "RTD / Balls", name: "Bacardi Breezer", origin: "Global", price: "₹150", moat: "Mass market, low ABV, high distribution." },
  { category: "RTD / Balls", name: "Madira Balls", origin: "Himalayas", price: "₹250-350", moat: "India's First Spherical Craft RTD.", highlight: true },
];

export const USE_OF_FUNDS = [
  { label: "Production", value: 30, details: "First 3 batches + inventory" },
  { label: "Marketing", value: 25, details: "HORECA seeding + Launch event" },
  { label: "Operations", value: 20, details: "Team + Licensing" },
  { label: "Cask Investment", value: 15, details: "Single Malt aging" },
  { label: "Working Capital", value: 10, details: "Excise float" },
];

export const SLIDES: Slide[] = [
  {
    id: "cover",
    number: "01",
    title: "MADIRA",
    subtitle: "Born in the Himalayas.",
    tagline: "Himalayan Spirits. Dutch Precision. From Botanical Gin to Single Malt Whiskey.",
    content: "Friends & Family Round · Confidential · March 2026",
    type: "cover"
  },
  {
    id: "brand-video",
    number: "02",
    title: "The Spirit of Madira",
    subtitle: "A visual journey from the Himalayan peaks to the premium shelf.",
    content: "Watch our brand story: Himalayan origin, Dutch precision, and the future of Indian craft spirits.",
    type: "video"
  },
  {
    id: "whynow",
    number: "03",
    title: "The Opportunity",
    subtitle: "India's premium spirits market is at an inflection point, driven by a growing middle class.",
    content: "Consumer preferences are shifting from 'volume' to 'value'. The premium gin segment is growing at 2x the rate of the overall spirits market, yet North India remains underserved by local craft brands.",
    type: "market"
  },
  {
    id: "market",
    number: "04",
    title: "Market Thesis",
    subtitle: "A ₹22,100 Cr market opportunity with a clear path to ₹1.6L Cr by 2033.",
    content: "The Indian craft spirits market hit ₹22,100 Crore in 2024 and is growing at 22% CAGR. Super-premium IMFL grew 23% in a single year. But almost all the action is in Goa and South India — North India's premium shelves are dominated by imports and one or two Goa brands paying punishing transport costs to get there.",
    stats: MARKET_STATS,
    type: "market"
  },
  {
    id: "advantage",
    number: "05",
    title: "Strategic Moat",
    subtitle: "Vertical integration through 16 owned retail stores provides guaranteed Day 1 distribution.",
    content: "Craft spirits brands typically spend ₹2–4 crore and 18 months negotiating shelf placement at Gurgaon's premium retail. Madira's co-founder operates 16 licensed L-2 liquor retail stores across Gurgaon — giving Madira guaranteed Day 1 distribution with zero cost and zero timeline.",
    type: "market"
  },
  {
    id: "competition",
    number: "06",
    title: "Competitive Landscape",
    subtitle: "Madira holds a structural cost advantage and regional provenance over Goa-based incumbents.",
    content: "While Goa-based brands pay ₹12-18/bottle in freight and import duties to reach the North, Madira is made in the North, for the North. We capture the 20% retailer margin that others lose.",
    type: "market"
  },
  {
    id: "product",
    number: "07",
    title: "Product Portfolio",
    subtitle: "Super-Premium Spirits & Category-Defining RTDs.",
    content: "From our flagship Himalayan Botanical Gin to Glacier Vodka, Reserve Whiskey, Aged Rum, and the category-defining Madira Balls, we are building a portfolio for every premium occasion.",
    type: "product"
  },
  {
    id: "gtm",
    number: "08",
    title: "Go-To-Market",
    subtitle: "Vertical Dominance → HORECA Seeding → Digital Storytelling.",
    content: "Our GTM strategy is built on the foundation of our 16 owned stores, ensuring immediate cash flow and consumer data from Day 1.",
    type: "gtm"
  },
  {
    id: "story",
    number: "09",
    title: "The Madira Story",
    subtitle: "Why Us? The Unfair Advantage.",
    content: "We don't just make spirits; we own the shelf. Madira is the first craft brand in India built on a foundation of guaranteed retail dominance.",
    type: "story"
  },
  {
    id: "traction",
    number: "10",
    title: "Execution Roadmap",
    subtitle: "MOU signed, 16 stores ready, and recipe finalized for immediate launch.",
    content: "We have secured manufacturing partnerships and guaranteed shelf space. Our pilot batch recipe has been validated by top Gurgaon bartenders.",
    type: "traction"
  },
  {
    id: "financials",
    number: "11",
    title: "Financial Outlook",
    subtitle: "Scalable unit economics with a clear path to EBITDA-positive by Year 2.",
    content: "Year 3 Base: ₹67.7 Cr Gross Revenue, ₹20.2 Cr EBITDA (30% margin). The 16-store base scenario turns cash-flow positive in Y2 Q2.",
    type: "financials"
  },
  {
    id: "team",
    number: "12",
    title: "Leadership Team",
    subtitle: "A unique blend of retail dominance, operational expertise, and brand vision.",
    content: "Our founders combine 15+ years of liquor retail experience in Gurgaon with deep expertise in manufacturing and luxury brand building.",
    type: "team"
  },
  {
    id: "funds",
    number: "13",
    title: "Investment Ask",
    subtitle: "₹75 Lakhs seed round to fuel production and capture the North Indian market.",
    content: "Capital is primarily allocated to production and high-impact HORECA activations, leveraging our existing retail footprint for organic growth.",
    type: "funds"
  }
];
