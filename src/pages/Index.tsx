import { useState, useEffect, useRef } from "react";
import {
  Menu, X, Instagram, Facebook, Youtube, Star, ArrowRight,
  Check, ChevronLeft, ChevronRight,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Component as EtherealShadow } from "@/components/ui/etheral-shadow";

/* ─── helpers ─── */
function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════
   DATA
═══════════════════════════════════════════ */
const stats = [
  { value: "150+", label: "Transformations" },
  { value: "12", label: "Week Programme" },
  { value: "5+", label: "Years Coaching" },
  { value: "100%", label: "Custom Plans" },
];

const features = [
  "Custom workout plan built for your goals & schedule",
  "Personalised nutrition — no cookie-cutter diets",
  "Coach access & check-ins so you're never stuck",
  "Adjustments every week based on your progress",
  "Long-term coaching and accountability to protect your results",
];

const transformations: { name: string; timeframe: string; result: string; img: string }[] = [
  { name: "", timeframe: "", result: "", img: "/609A37A9-B788-47D8-8F3C-CE224805536F.JPG.jpg" },
  { name: "", timeframe: "", result: "", img: "/7A635435-4832-411C-8819-E26D993CC9E8%202.JPEG.jpeg" },
  { name: "", timeframe: "", result: "", img: "/IMG_6086.jpg" },
  { name: "", timeframe: "", result: "", img: "/IMG_6082%202.jpg" },
  { name: "", timeframe: "", result: "", img: "/IMG_6081%202.jpg" },
  { name: "", timeframe: "", result: "", img: "/IMG_6078%202.jpg" },
  { name: "", timeframe: "", result: "", img: "/IMG_6075%202.jpg" },
  { name: "", timeframe: "", result: "", img: "/IMG_6070%202.jpg" },
  { name: "", timeframe: "", result: "", img: "/IMG_6069%202.jpg" },
  { name: "", timeframe: "", result: "", img: "/IMG_6067%202.jpg" },
  { name: "", timeframe: "", result: "", img: "/IMG_6065%202.jpg" },
  { name: "", timeframe: "", result: "", img: "/IMG_6064%202.jpg" },
  { name: "", timeframe: "", result: "", img: "/IMG_6057%202.jpg" },
];

const allTransformationItems = [...transformations, ...transformations, ...transformations];

const CARD_W = 280;
const CARD_GAP = 16;
const SCROLL_AMOUNT = CARD_W + CARD_GAP;

const testimonials = [
  { name: "Sarah M.", text: "I lost 22 lbs and finally feel confident in my own skin. The weekly calls kept me accountable when I wanted to quit.", stars: 5 },
  { name: "Marcus T.", text: "Down 35 lbs and kept it off. The monthly coaching after the 12 weeks is genuinely a game-changer.", stars: 5 },
  { name: "Priya K.", text: "From complete beginner to running my first 10K. I couldn't have done it alone.", stars: 5 },
];

const processSteps = [
  { n: "01", title: "Book Free Call", desc: "30 minutes, no pressure. We talk goals." },
  { n: "02", title: "We Discuss Goals", desc: "I learn everything about your body, schedule, and history." },
  { n: "03", title: "Get Your Plan", desc: "Custom workout + nutrition plan built specifically for you." },
  { n: "04", title: "You Decide", desc: "Take a day. There's zero pressure to commit on the call." },
  { n: "05", title: "Transformation Starts", desc: "We begin Week 1 and I'm with you every step of the way." },
];

const faqItems = [
  {
    q: "Do I have to continue with long-term coaching after 12 weeks?",
    a: "No — completely optional. About 70% of clients continue because the results feel amazing and they want to protect them. But 30% feel confident going solo, and that's great too.",
  },
  {
    q: "What if I've failed at fitness before?",
    a: "Good. That means you're ready for something different. We focus on sustainable habits, not quick fixes or extreme approaches.",
  },
  {
    q: "Can you customise for dietary restrictions (vegan, gluten-free, etc.)?",
    a: "Absolutely. Every meal plan is personalised to your preferences, allergies, and dietary restrictions.",
  },
  {
    q: "Is this online or in-person?",
    a: "All coaching is delivered online via video calls and email. You can be anywhere in the world.",
  },
  {
    q: "What equipment do I need?",
    a: "We customise workouts based on what you have — home gym, full gym, minimal equipment. We adapt.",
  },
  {
    q: "Can I cancel long-term coaching anytime?",
    a: "Yes, anytime. No contracts, no penalties. Just let me know and we'll wrap up. The door is always open if you want to return.",
  },
  {
    q: "How long do clients typically stay?",
    a: "The initial plan is 12 weeks. Average monthly coaching client stays 6–12 months. You decide when to stop.",
  },
];

/* ═══════════════════════════════════════════
   1. NAVBAR
═══════════════════════════════════════════ */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Results", id: "transformations" },
    { label: "How It Works", id: "how-it-works" },
    { label: "Pricing", id: "pricing" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${scrolled ? "bg-[#111111]/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <img src="/logo.png" alt="Train With Lamarche" className="h-10 w-auto" style={{ mixBlendMode: "screen" }} />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-white/60 hover:text-white text-sm font-semibold tracking-wide transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            onClick={() => scrollTo("contact")}
            className="bg-[#00d4d4] hover:bg-[#0099b3] active:scale-95 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-[background-color,transform]"
          >
            Book Free Call
          </button>
        </div>

        <button className="md:hidden text-white p-1" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#2a2a2a] px-6 pb-6 pt-2">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => { scrollTo(l.id); setOpen(false); }}
              className="block w-full text-left py-3 text-white/70 hover:text-white font-semibold border-b border-[#2a2a2a] last:border-0"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => { scrollTo("contact"); setOpen(false); }}
            className="mt-4 w-full bg-[#00d4d4] text-white font-bold py-3 rounded-lg"
          >
            Book Free Call
          </button>
        </div>
      )}
    </nav>
  );
}

/* ═══════════════════════════════════════════
   2. HERO
═══════════════════════════════════════════ */
function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">

      {/* Left half — dark base + ethereal shadow effect */}
      <div className="absolute inset-y-0 left-0 w-1/2">
        <EtherealShadow
          color="rgba(0, 180, 180, 0.55)"
          animation={{ scale: 80, speed: 30 }}
          noise={{ opacity: 0.4, scale: 1.5 }}
          sizing="fill"
          className="absolute inset-0"
        />
      </div>

      {/* Right half — video */}
      <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-video.mp4"
        />
        <div className="absolute inset-0/40" />
        {/* left edge blends into dark left half */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-l from-transparent to-[#111111]" />
        {/* right edge fade */}
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-r from-transparent to-[#111111]" />
      </div>

      {/* Top & bottom fades */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#111111] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#111111] pointer-events-none" />

      {/* Aqua radial glow behind text */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full bg-[#00d4d4]/5 blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 border border-[#00d4d4]/40 bg-[#00d4d4]/10 text-[#00d4d4] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
            Online Coaching
          </div>

          <h1
            className="font-black text-white leading-[0.9] mb-6"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)", letterSpacing: "-0.01em" }}
          >
            The coaching<br />
            that will<br />
            <span className="text-[#00d4d4]">transform</span><br />
            your physique.
          </h1>

          <p className="text-white/55 text-lg max-w-md mb-10 leading-relaxed">
            Custom 1-on-1 coaching built around your life. Real results in 12 weeks — guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo("contact")}
              className="bg-[#00d4d4] hover:bg-[#0099b3] active:scale-95 text-white font-bold px-8 py-4 rounded-lg text-base transition-[background-color,transform] aqua-glow"
            >
              Start My Transformation
            </button>
            <button
              onClick={() => scrollTo("transformations")}
              className="border border-white/25 hover:border-white/50 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-lg text-base transition-[border-color,color]"
            >
              See Results ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   3. STATS STRIP
═══════════════════════════════════════════ */
function StatsStrip() {
  return (
    <section className="relative overflow-hidden border-y border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-[#2a2a2a]">
        {stats.map(s => (
          <Reveal key={s.label}>
            <div className="flex flex-col items-center text-center px-6 py-2">
              <span className="text-4xl font-black text-[#00d4d4] tracking-tight">{s.value}</span>
              <span className="text-white/45 text-xs font-semibold mt-1.5 tracking-widest uppercase">{s.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   4. VALUE PROP
═══════════════════════════════════════════ */
function ValueProp() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="text-[#00d4d4] font-bold tracking-widest uppercase text-xs mb-5">The Method</p>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.0] mb-6" style={{ letterSpacing: "0.04em" }}>
              Fix Your Habits.<br />
              Transform Your Body.<br />
              <span className="text-[#00d4d4]">Live Fit.</span>
            </h2>
            <p className="text-white/55 leading-relaxed mb-3 font-medium">
              At Train With Lamarche, we don't rely on extreme diets or temporary programs. Our coaching focuses on building the habits, nutrition, and training systems that create real, lasting transformation.
            </p>
            <p className="text-white/55 leading-relaxed mb-8 font-medium">
              We help you build a body that performs, looks great, and fits your life — not the other way around.
            </p>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 bg-[#00d4d4] hover:bg-[#0099b3] active:scale-95 text-white font-bold px-6 py-3 rounded-lg transition-[background-color,transform]"
            >
              Book Free Consultation <ArrowRight size={16} />
            </button>
          </Reveal>

          <Reveal delay={150}>
            <div className="space-y-3">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4 border border-[#2a2a2a] hover:border-[#00d4d4]/30 rounded-xl p-5 transition-[border-color]">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#00d4d4]/20 flex items-center justify-center mt-0.5">
                    <Check size={11} className="text-[#00d4d4]" strokeWidth={3} />
                  </div>
                  <span className="text-white/75 font-medium leading-snug text-sm">{f}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   5. TRANSFORMATIONS CAROUSEL
═══════════════════════════════════════════ */
function Transformations() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isProgrammatic = useRef(false);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function loopCheck() {
    const el = scrollRef.current;
    if (!el) return;
    const setW = el.scrollWidth / 3;
    if (el.scrollLeft < setW * 0.5) {
      el.scrollLeft += setW;
    } else if (el.scrollLeft > setW * 1.5 + el.clientWidth) {
      el.scrollLeft -= setW;
    }
  }

  function onScroll() {
    if (!isProgrammatic.current) loopCheck();
  }

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    requestAnimationFrame(() => { el.scrollLeft = el.scrollWidth / 3; });
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  function doScroll(direction: 1 | -1) {
    const el = scrollRef.current;
    if (!el) return;
    isProgrammatic.current = true;
    if (scrollTimer.current) clearTimeout(scrollTimer.current);
    el.scrollBy({ left: direction * SCROLL_AMOUNT, behavior: "smooth" });
    scrollTimer.current = setTimeout(() => {
      isProgrammatic.current = false;
      loopCheck();
    }, 500);
  }

  return (
    <section id="transformations" className="relative pt-10 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <Reveal>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight" style={{ letterSpacing: "0.04em" }}>
            See Results<br />
            <span className="text-white/35">In Just 12 Weeks</span>
          </h2>
          <p className="text-white/50 mt-4 font-medium">Real clients, real results. 12-week programmes, 6-month journeys, and 1-year success stories.</p>
        </Reveal>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Left button */}
        <button
          onClick={() => doScroll(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full/90 border border-[#2a2a2a] hover:border-[#00d4d4]/50 hover:bg-[#00d4d4]/10 text-white flex items-center justify-center backdrop-blur-sm transition-[border-color,background-color] shadow-lg"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right button */}
        <button
          onClick={() => doScroll(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full/90 border border-[#2a2a2a] hover:border-[#00d4d4]/50 hover:bg-[#00d4d4]/10 text-white flex items-center justify-center backdrop-blur-sm transition-[border-color,background-color] shadow-lg"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#111111] to-transparent z-[1] pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#111111] to-transparent z-[1] pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto px-16 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {allTransformationItems.map((t, i) => (
            <div
              key={`${t.img}-${i}`}
              className="group relative flex-shrink-0 rounded-2xl overflow-hidden border border-[#2a2a2a] hover:border-[#00d4d4]/30 transition-[border-color,transform] hover:scale-[1.02]"
              style={{ width: CARD_W, height: Math.round(CARD_W * 9 / 7) }}
            >
              <img
                src={t.img}
                alt={t.name || "Transformation"}
                className="w-full h-full object-cover transition-[transform] duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/15 to-transparent" />

              {/* Name / result overlay — shown when populated */}
              {(t.name || t.result) && (
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  {t.name && <p className="text-white font-bold text-sm leading-tight">{t.name}</p>}
                  {t.result && <p className="text-[#00d4d4] font-semibold text-xs mt-0.5">{t.result}</p>}
                  {t.timeframe && <p className="text-white/45 text-xs mt-0.5">{t.timeframe}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   6. TESTIMONIALS
═══════════════════════════════════════════ */
function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <p className="text-[#00d4d4] font-bold tracking-widest uppercase text-xs mb-4">Social Proof</p>
          <h2 className="text-5xl md:text-6xl font-black text-white" style={{ letterSpacing: "0.04em" }}>Trusted By Real People</h2>
          <p className="text-white/40 mt-3 font-medium">150+ transformations and counting</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="bg-[#111111] border border-[#2a2a2a] hover:border-[#00d4d4]/20 rounded-2xl p-7 flex flex-col gap-4 transition-[border-color]">
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={14} className="text-[#00d4d4] fill-[#00d4d4]" />
                  ))}
                </div>
                <p className="text-white/75 leading-relaxed font-medium text-sm flex-1">"{t.text}"</p>
                <p className="text-white font-bold text-sm">— {t.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   7. HOW IT WORKS
═══════════════════════════════════════════ */
function HowItWorks() {
  const phases = [
    {
      badge: "Phase 1",
      title: "The Transformation",
      sub: "12 Weeks",
      items: ["Custom workout plan", "Custom meal plan", "Weekly coaching calls", "Full body + mind transformation"],
      note: "Everything you need to change your physique in 12 weeks.",
    },
    {
      badge: "Phase 2",
      title: "Long-Term Coaching",
      sub: "Ongoing",
      items: ["Bi-weekly coaching calls", "Continuous plan adjustments", "Accountability + progression"],
      note: "Continue after Week 12. Cancel anytime.",
      tag: "Most clients continue this phase",
    },
  ];

  return (
    <section id="how-it-works" className="relative overflow-hidden py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-[#00d4d4] font-bold tracking-widest uppercase text-xs mb-4">The Process</p>
          <h2 className="text-5xl md:text-6xl font-black text-white" style={{ letterSpacing: "0.04em" }}>How It Works</h2>
          <p className="text-white/45 mt-4 max-w-xl mx-auto font-medium">Two phases designed to transform you — then keep you transformed.</p>
        </Reveal>

        {/* Two phase cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {phases.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="bg-[#0c0c0c] border border-[#2a2a2a] rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className="bg-[#00d4d4]/15 text-[#00d4d4] font-bold text-xs tracking-widest uppercase px-3 py-1.5 rounded-full">{p.badge}</span>
                  <span className="text-white/35 text-sm font-medium">{p.sub}</span>
                  {p.tag && (
                    <span className="ml-auto bg-[#00d4d4]/10 text-[#00d4d4] font-semibold text-xs px-2.5 py-1 rounded-full">{p.tag}</span>
                  )}
                </div>
                <h3 className="text-2xl font-black text-white mb-5">{p.title}</h3>
                <ul className="space-y-3 mb-5">
                  {p.items.map(item => (
                    <li key={item} className="flex items-center gap-3 text-white/70 font-medium text-sm">
                      <Check size={14} className="text-[#00d4d4] flex-shrink-0" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-white/35 text-sm italic">{p.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   8. PRICING
═══════════════════════════════════════════ */
function Pricing() {
  const plans = [
    {
      name: "12-Week Plan",
      tag: "Most Popular",
      price: "$599",
      period: "one-time",
      features: [
        "Custom workout plan",
        "Custom meal plan",
        "Coach access & check-ins",
        "Email support + adjustments",
        "Progress tracking with photos",
      ],
      cta: "Start My Transformation",
      highlight: true,
    },
    {
      name: "Long-Term Coaching",
      tag: "Accountability & Results",
      price: "$149",
      period: "/month · Cancel Anytime",
      features: [
        "Bi-weekly 30-min coaching calls",
        "Continuous plan adjustments",
        "Email support (24-hour response)",
        "Accountability + motivation",
      ],
      cta: "Learn More",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="relative overflow-hidden py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <p className="text-[#00d4d4] font-bold tracking-widest uppercase text-xs mb-4">Invest in Yourself</p>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight" style={{ letterSpacing: "0.04em" }}>
            Finally Achieve the Results<br />
            <span className="text-white/35">You've Been Waiting For</span>
          </h2>
          <p className="text-white/40 mt-4 font-medium">No hidden fees. No contracts. Just results.</p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div className={`rounded-2xl p-8 flex flex-col h-full relative overflow-hidden ${p.highlight ? "bg-[#111111] border-2 border-[#00d4d4]/50 aqua-glow-sm" : "bg-[#111111] border border-[#2a2a2a]"}`}>
                {p.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00d4d4] to-transparent" />
                )}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-black text-white">{p.name}</h3>
                    <span className={`text-xs font-bold tracking-wide mt-1 inline-block ${p.highlight ? "text-[#00d4d4]" : "text-white/40"}`}>{p.tag}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-black text-white">{p.price}</span>
                  <span className="text-white/40 text-sm ml-2 font-medium">{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-white/70 text-sm font-medium">
                      <Check size={14} className="text-[#00d4d4] flex-shrink-0" strokeWidth={3} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollTo("contact")}
                  className={`w-full font-bold py-3.5 rounded-lg transition-[background-color,transform] active:scale-95 ${p.highlight ? "bg-[#00d4d4] hover:bg-[#0099b3] text-white" : "border border-[#2a2a2a] hover:border-[#00d4d4]/40 text-white/70 hover:text-white"}`}
                >
                  {p.cta}
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   9. FAQ
═══════════════════════════════════════════ */
function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden py-28">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <p className="text-[#00d4d4] font-bold tracking-widest uppercase text-xs mb-4">FAQ</p>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight" style={{ letterSpacing: "0.04em" }}>
            Any Questions Before<br />
            <span className="text-white/35">We Get Started?</span>
          </h2>
        </Reveal>

        <Accordion type="single" collapsible className="space-y-3">
          {faqItems.map((item, i) => (
            <Reveal key={i} delay={i * 60}>
              <AccordionItem
                value={`faq-${i}`}
                className="bg-[#0c0c0c] border border-[#2a2a2a] rounded-xl px-6 overflow-hidden data-[state=open]:border-[#00d4d4]/30 transition-[border-color]"
              >
                <AccordionTrigger
                  className="text-white font-bold text-base text-left py-5 hover:no-underline [&>svg]:text-[#00d4d4] hover:text-[#00d4d4] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "normal" }}
                >
                  {item.q}
                </AccordionTrigger>
                <AccordionContent
                  className="text-white/90 text-base leading-relaxed pb-6 font-medium"
                  style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "normal" }}
                >
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            </Reveal>
          ))}
        </Accordion>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   10. CONTACT
═══════════════════════════════════════════ */
function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <Reveal>
            <p className="text-[#00d4d4] font-bold tracking-widest uppercase text-xs mb-5">Free Consultation</p>
            <h2 className="text-5xl font-black text-white leading-tight mb-5" style={{ letterSpacing: "0.04em" }}>
              Ready to Start?
            </h2>
            <p className="text-white/55 leading-relaxed font-medium mb-8">
              Book a free 30-minute call. We'll talk about your goals, I'll explain exactly how the programme works, and you decide — no pressure, no obligation.
            </p>
            <div className="space-y-4">
              {[["30 minutes", "No pressure, no pitch"], ["Video call (Zoom)", "Join from anywhere in the world"], ["100% free", "No obligation to commit"]].map(([title, sub]) => (
                <div key={title} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#00d4d4] flex-shrink-0" />
                  <div>
                    <p className="text-white font-bold text-sm">{title}</p>
                    <p className="text-white/40 text-xs font-medium">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-[#2a2a2a]">
              <p className="text-white font-black">Coach Lamarche</p>
              <p className="text-white/45 text-sm font-medium mt-1">5+ years · 150+ transformations · Certified Coach</p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#00d4d4]/10 border border-[#00d4d4]/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#00d4d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-white font-black text-lg mb-2">Book Your Free Call</p>
              <p className="text-white/45 text-sm font-medium mb-8 leading-relaxed">
                Connect your calendar below, or email directly to schedule a time that works for you.
              </p>
              {/* Calendar widget placeholder — integrate Calendly, Acuity, or Cal.com */}
              <div className="bg-[#0c0c0c] border border-dashed border-[#2a2a2a] rounded-xl p-8 mb-6 text-white/25 text-sm font-medium">
                [ Calendar booking widget ]<br />
                <span className="text-xs mt-1 block">Calendly · Acuity · Cal.com</span>
              </div>
              <p className="text-white/35 text-sm font-medium">
                Or email us at{" "}
                <a href="mailto:coach@trainwithlamarche.com" className="text-[#00d4d4] hover:underline font-semibold">
                  coach@trainwithlamarche.com
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   11. FOOTER
═══════════════════════════════════════════ */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#111111] border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <img src="/logo.png" alt="Train With Lamarche" className="h-9 w-auto mb-4" style={{ mixBlendMode: "screen" }} />
            <p className="text-white/40 text-sm font-medium leading-relaxed max-w-xs">Transform your body. Transform your life.</p>
          </div>

          <div>
            <p className="text-white font-bold text-xs tracking-widest uppercase mb-5">Quick Links</p>
            <ul className="space-y-3">
              {[["Results", "transformations"], ["How It Works", "how-it-works"], ["Pricing", "pricing"], ["FAQ", "faq"], ["Contact", "contact"]].map(([label, id]) => (
                <li key={id}>
                  <button onClick={() => scrollTo(id)} className="text-white/45 hover:text-white text-sm font-medium transition-colors">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-bold text-xs tracking-widest uppercase mb-5">Connect</p>
            <div className="flex gap-3 mb-6">
              {[{ icon: Instagram, label: "Instagram", href: "https://www.instagram.com/sebaslamarche/" }, { icon: Facebook, label: "Facebook", href: "#" }, { icon: Youtube, label: "YouTube", href: "#" }].map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 rounded-lg border border-[#2a2a2a] hover:border-[#00d4d4]/40 hover:text-[#00d4d4] text-white/50 flex items-center justify-center transition-[border-color,color]">
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <a href="mailto:coach@trainwithlamarche.com" className="text-white/40 hover:text-white text-sm font-medium transition-colors">
              coach@trainwithlamarche.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-[#2a2a2a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs font-medium">© {year} TrainWithLamarche. All rights reserved.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-white/25 hover:text-[#00d4d4] text-xs font-medium transition-colors">
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   PAGE
═══════════════════════════════════════════ */
export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Single full-page ethereal background */}
      <EtherealShadow
        color="rgba(0, 180, 180, 0.18)"
        animation={{ scale: 55, speed: 18 }}
        noise={{ opacity: 0.25, scale: 1.8 }}
        sizing="fill"
        style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
      />
      <Navbar />
      <Hero />
      <StatsStrip />
      <ValueProp />
      <Transformations />
      <Testimonials />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
