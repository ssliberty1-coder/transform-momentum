import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Check, Target, Infinity, Users, TrendingUp, ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, className: visible ? "animate-fade-up" : "opacity-0" };
}

const phase1Features = [
  "Custom workout plan (tailored to YOUR goals)",
  "Custom meal plan (based on YOUR preferences)",
  "Weekly 30-min video coaching calls",
  "Email support + adjustments",
  "Video exercise library",
  "Progress tracking + before/after photos",
  "Full body + mind transformation",
];

const phase2Features = [
  "Bi-weekly 30-min coaching calls",
  "Continuous plan adjustments",
  "Email support (24-hour response)",
  "Accountability + motivation",
  "Progressive training + nutrition",
  "Community access",
];

const faqs = [
  {
    q: "Do I have to continue monthly coaching after 12 weeks?",
    a: "No. You're not locked in. It's completely optional. But most clients choose to continue because the support and accountability help them maintain results forever.",
  },
  {
    q: "What's the difference between the 12-week plan and monthly coaching?",
    a: "The 12-week plan is intensive—weekly calls, rapid results, full transformation focus. Monthly coaching is maintenance-focused—bi-weekly calls, habit reinforcement, progression. Different phases, different needs.",
  },
  {
    q: "Can I cancel monthly coaching?",
    a: "Yes, anytime. No contracts, no penalties. We want you to continue because you WANT to, not because you're locked in.",
  },
  {
    q: "Why continue monthly coaching?",
    a: "Because results feel amazing, and most people want to protect them. The accountability and support prevents backsliding and keeps you improving. Think of it as insurance for your transformation.",
  },
];

const navLinks = ["Home", "About", "Services", "Transformations", "Pricing", "Contact"];

const Services = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const intro = useReveal();
  const cards = useReveal();
  const after = useReveal();
  const faq = useReveal();
  const cta = useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-black tracking-tight">
            Train<span className="text-primary">WithLamarche</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link key={l} to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l}
              </Link>
            ))}
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Book Consultation
            </Button>
          </div>
          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
            {navLinks.map((l) => (
              <Link key={l} to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="block text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>
                {l}
              </Link>
            ))}
            <Button size="sm" className="w-full bg-primary text-primary-foreground font-semibold">Book Consultation</Button>
          </div>
        )}
      </nav>

      {/* PAGE HEADER */}
      <section className="pt-32 pb-12 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
          How We Transform Lives<br />
          <span className="text-gradient">(And Keep You Transformed)</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Two phases: Intensive transformation, then optional lifetime maintenance
        </p>
      </section>

      {/* INTRODUCTION */}
      <section ref={intro.ref} className={`${intro.className} max-w-3xl mx-auto px-4 pb-20`}>
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Most fitness plans end at 12 weeks. <span className="text-foreground font-semibold">Ours are just getting started.</span>
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            The 12-week transformation is the first phase. Many clients continue with monthly coaching to maintain momentum and keep improving forever.
          </p>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section ref={cards.ref} className={`${cards.className} max-w-6xl mx-auto px-4 pb-24`}>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Phase 1 */}
          <Card className="bg-card border-primary/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-5 w-5 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Phase 1</span>
              </div>
              <CardTitle className="text-2xl md:text-3xl font-black">The 12-Week Transformation</CardTitle>
              <div className="mt-3">
                <span className="text-4xl font-black text-primary">$599</span>
                <span className="text-muted-foreground ml-2">one-time investment</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Best for: <span className="text-foreground">Anyone serious about changing their life</span></p>
              <p className="text-sm text-muted-foreground">Duration: <span className="text-foreground">12 weeks</span></p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2.5">
                {phase1Features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                Intensive, results-focused coaching. Weekly calls keep you accountable and progressing rapidly. By week 12, you'll be transformed physically and mentally.
              </p>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base h-12">
                Start Your Transformation <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Phase 2 */}
          <Card className="bg-card border-border relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-muted-foreground/30" />
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-2">
                <Infinity className="h-5 w-5 text-muted-foreground" />
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Phase 2 · Optional</span>
              </div>
              <CardTitle className="text-2xl md:text-3xl font-black">Monthly Ongoing Coaching</CardTitle>
              <div className="mt-3">
                <span className="text-4xl font-black text-foreground">$149</span>
                <span className="text-muted-foreground ml-2">/month · cancel anytime</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Best for: <span className="text-foreground">Clients who completed Phase 1 and want to maintain + progress</span></p>
              <p className="text-sm text-muted-foreground">Duration: <span className="text-foreground">Ongoing (start after 12 weeks)</span></p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2.5">
                {phase2Features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                Lighter than the intensive plan, but keeps you on track. Most clients continue this phase long-term to lock in their transformation and keep improving. Your results don't have an expiration date.
              </p>
              <div className="bg-secondary/50 rounded-lg p-3 text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">OPTIONAL</strong>—You only continue if YOU want to. Many clients feel confident going solo. But most choose this phase because the support helps them maintain results forever.
              </div>
              <Button variant="outline" className="w-full font-bold text-base h-12 border-border hover:border-primary hover:text-primary">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* WHAT HAPPENS AFTER 12 WEEKS */}
      <section ref={after.ref} className={`${after.className} max-w-4xl mx-auto px-4 pb-24`}>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-10">
          You're Transformed. <span className="text-gradient">Now What?</span>
        </h2>
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            At week 12, you'll have accomplished an incredible transformation. You've built new habits, improved your body, and changed your mindset.
          </p>
          <p className="text-foreground font-semibold">Here's what typically happens:</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-secondary/30 rounded-xl p-6 border border-primary/20">
              <div className="flex items-center gap-2 mb-3">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-2xl font-black text-primary">70%</span>
                <span className="text-sm font-semibold">continue monthly coaching</span>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• They love the results and want to protect them</li>
                <li>• The accountability keeps them consistent</li>
                <li>• They keep progressing instead of plateauing</li>
                <li>• Most stay for 6-12+ months</li>
              </ul>
            </div>
            <div className="bg-secondary/30 rounded-xl p-6 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-muted-foreground" />
                <span className="text-2xl font-black text-foreground">30%</span>
                <span className="text-sm font-semibold">graduate and go solo</span>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• They feel confident in what they've learned</li>
                <li>• They have the knowledge and habits to continue alone</li>
                <li>• The door is always open if they want to return</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-foreground font-semibold text-lg pt-2">
            Either way, you've won. The transformation is real and sustainable.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faq.ref} className={`${faq.className} max-w-3xl mx-auto px-4 pb-24`}>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-10">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA */}
      <section ref={cta.ref} className={`${cta.className} py-24 px-4`}>
        <div className="max-w-2xl mx-auto text-center bg-card border border-border rounded-2xl p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Still deciding?</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Book a free consultation. We'll talk about your goals and whether the 12-week plan (+ optional monthly coaching) is right for you.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-10 h-14">
            Book Free Consultation
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-4">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p className="font-semibold text-foreground mb-1">TrainWithLamarche</p>
          <p>Transform. Maintain. Dominate.</p>
          <p className="mt-4">&copy; {new Date().getFullYear()} TrainWithLamarche. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Services;
