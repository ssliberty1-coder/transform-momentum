import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Check, Target, Infinity, ArrowRight, ChevronDown, Menu, X, Shield, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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

const navLinks = ["Home", "About", "Services", "Transformations", "Pricing", "Contact"];

const phase1Features = [
  "Custom workout plan (your fitness level, your goals, your equipment)",
  "Custom meal plan (your preferences, your lifestyle, no restriction)",
  "Weekly 30-minute video coaching calls",
  "Email support + unlimited adjustments",
  "Progress tracking with photos",
  "Video exercise library with demonstrations",
  "Complete body transformation + mental confidence shift",
];

const phase2Features = [
  "Bi-weekly 30-minute coaching calls",
  "Continuous plan adjustments + progression",
  "Email support (24-hour response)",
  "Accountability + motivation",
  "Access to community + exclusive content",
  "Progressive training and nutrition",
  "Peace of mind that you won't slide backward",
];

const faqs = [
  {
    q: "Why is the 12-week plan $599 instead of monthly?",
    a: "It's a one-time investment for intensive, life-changing coaching. After 12 weeks, monthly coaching ($149/month) is optional for ongoing support.",
  },
  {
    q: "What happens after the 12 weeks?",
    a: "You can continue with monthly coaching ($149/month) to maintain your results and keep improving. Or you can go solo with the knowledge and habits you've built. Completely your choice.",
  },
  {
    q: "How much will I spend total if I continue monthly coaching?",
    a: "12-Week plan ($599) + 9 months of monthly coaching ($149 × 9 = $1,341) = $1,940 total for a full year. Most clients stay longer, so the lifetime value is higher—but the results are priceless.",
  },
  {
    q: "Can I pause monthly coaching?",
    a: "Yes, you can pause or cancel anytime. No contracts, no penalties. We want you to stay because you want to, not because you're locked in.",
  },
  {
    q: "Is monthly coaching worth it?",
    a: "Most of our long-term clients say yes. The accountability and support prevent backsliding and help you keep improving. Think of it as insurance for your transformation.",
  },
];

const comparisonData = [
  { feature: "Price", phase1: "$599", phase2: "$149/month" },
  { feature: "Duration", phase1: "12 weeks", phase2: "Ongoing" },
  { feature: "Call Frequency", phase1: "Weekly", phase2: "Bi-weekly" },
  { feature: "Custom Plans", phase1: "✓ Full custom", phase2: "✓ Updates" },
  { feature: "Support", phase1: "Email", phase2: "Email" },
  { feature: "Best For", phase1: "Transformation", phase2: "Maintenance" },
];

const Pricing = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const cards = useReveal();
  const journey = useReveal();
  const comparison = useReveal();
  const guarantee = useReveal();
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
              <Link
                key={l}
                to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                className={`text-sm font-medium transition-colors ${l === "Pricing" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
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
      <section className="pt-32 pb-16 px-4 text-center max-w-4xl mx-auto">
        <Badge variant="outline" className="mb-6 text-primary border-primary/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
          Pricing & Plans
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 leading-tight">
          Transparent Pricing,{" "}
          <span className="text-gradient">Real Results</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Invest in your transformation. Then maintain it forever.
        </p>
      </section>

      {/* PRICING CARDS */}
      <section ref={cards.ref} className={`${cards.className} max-w-6xl mx-auto px-4 pb-28`}>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Card 1: 12-Week */}
          <Card className="bg-card border-2 border-primary/40 relative overflow-hidden shadow-[0_0_60px_hsl(110,100%,55%,0.08)]">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary" />
            <span className="absolute -top-0 right-6 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-b-lg">
              Most Popular
            </span>
            <CardHeader className="pb-2 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-5 w-5 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Phase 1</span>
              </div>
              <CardTitle className="text-2xl md:text-3xl font-black">12-Week Transformation Plan</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">The Entry Point to Change Your Life</p>
              <div className="mt-4 mb-2">
                <span className="text-5xl md:text-6xl font-black text-primary">$599</span>
                <span className="text-muted-foreground ml-3 text-sm">one-time investment</span>
              </div>
              <p className="text-xs text-muted-foreground">Duration: <span className="text-foreground font-medium">12 weeks</span></p>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-3">
                {phase1Features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                This is where it starts. Intensive, personalized coaching designed to transform your body and mind in 12 weeks. Weekly calls keep you accountable and progressing rapidly.
              </p>
              <p className="text-xs text-muted-foreground">
                <Clock className="inline h-3 w-3 mr-1" />
                Start whenever you want. 12 weeks from your start date.
              </p>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base h-13 shadow-[0_0_30px_hsl(110,100%,55%,0.25)]">
                Start Your Transformation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Card 2: Monthly */}
          <Card className="bg-card border border-border relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-muted-foreground/30" />
            <CardHeader className="pb-2 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <Infinity className="h-5 w-5 text-muted-foreground" />
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Phase 2 · Optional</span>
              </div>
              <CardTitle className="text-2xl md:text-3xl font-black">Monthly Coaching</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">Lock In Your Results Forever</p>
              <div className="mt-4 mb-2">
                <span className="text-5xl md:text-6xl font-black text-foreground">$149</span>
                <span className="text-muted-foreground ml-2 text-sm">/month · cancel anytime</span>
              </div>
              <p className="text-xs text-muted-foreground">Duration: <span className="text-foreground font-medium">Ongoing (start month 13+)</span></p>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-3">
                {phase2Features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                This is how you maintain. Most clients continue this phase to protect their transformation and keep improving. It's lighter than the 12-week plan but keeps you on track, accountable, and progressing.
              </p>
              <div className="bg-secondary/50 rounded-lg p-3 text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">OPTIONAL</strong>—Many clients continue this. Some go solo. Your choice.
              </div>
              <Button variant="outline" className="w-full font-bold text-base h-13 border-border hover:border-primary hover:text-primary">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* JOURNEY VISUALIZATION */}
      <section ref={journey.ref} className={`${journey.className} max-w-5xl mx-auto px-4 pb-28`}>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
          Your <span className="text-gradient">Journey</span>
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {/* Phase 1 */}
          <div className="relative grid md:grid-cols-2 gap-8 mb-12">
            <div className="md:text-right md:pr-12">
              <div className="bg-card border-2 border-primary/40 rounded-2xl p-6 md:p-8 relative shadow-[0_0_40px_hsl(110,100%,55%,0.06)]">
                <div className="absolute left-[-2rem] md:left-auto md:right-[-2rem] top-8 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">Month 1–3</Badge>
                <h3 className="text-xl font-black mb-2">12-Week Transformation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Weekly calls, custom plans, rapid results. This is the intensive phase where your body and mind transform.
                </p>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-primary" />
                  <span className="text-lg font-black text-primary">$599</span>
                  <span className="text-xs text-muted-foreground">one-time</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block" />
          </div>

          {/* Arrow connector */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-col items-center gap-1 text-muted-foreground">
              <ChevronDown className="h-5 w-5 text-primary animate-bounce" />
              <span className="text-xs font-bold uppercase tracking-widest">Then</span>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative grid md:grid-cols-2 gap-8">
            <div className="hidden md:block" />
            <div className="md:pl-12">
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 relative">
                <div className="absolute left-[-2rem] md:left-[-2rem] top-8 w-4 h-4 rounded-full bg-muted-foreground border-4 border-background" />
                <Badge variant="outline" className="mb-3 text-muted-foreground border-border">Month 4+</Badge>
                <h3 className="text-xl font-black mb-2">Monthly Coaching <span className="text-muted-foreground font-normal text-sm">(Optional)</span></h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Bi-weekly calls, habit maintenance, progression. Lighter touch, same accountability. Most clients stay 6–12+ months.
                </p>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="text-lg font-black text-foreground">$149</span>
                  <span className="text-xs text-muted-foreground">/month · cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section ref={comparison.ref} className={`${comparison.className} max-w-4xl mx-auto px-4 pb-28`}>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
          Plan <span className="text-gradient">Comparison</span>
        </h2>
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-foreground font-bold w-1/3">Feature</TableHead>
                <TableHead className="text-primary font-bold text-center">
                  <div className="flex flex-col items-center gap-1">
                    <Target className="h-4 w-4" />
                    <span>12-Week Plan</span>
                  </div>
                </TableHead>
                <TableHead className="text-muted-foreground font-bold text-center">
                  <div className="flex flex-col items-center gap-1">
                    <Infinity className="h-4 w-4" />
                    <span>Monthly Coaching</span>
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row) => (
                <TableRow key={row.feature} className="border-border">
                  <TableCell className="font-medium text-foreground">{row.feature}</TableCell>
                  <TableCell className="text-center text-sm text-muted-foreground">{row.phase1}</TableCell>
                  <TableCell className="text-center text-sm text-muted-foreground">{row.phase2}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* MONEY-BACK GUARANTEE */}
      <section ref={guarantee.ref} className={`${guarantee.className} max-w-4xl mx-auto px-4 pb-28`}>
        <div className="bg-card border border-primary/20 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              We're Confident in <span className="text-gradient">Our Work</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-lg">
              Coach Lamarche offers a <span className="text-foreground font-semibold">30-day money-back guarantee</span> on the 12-week plan. If you're not satisfied, you get a full refund—no questions asked. We believe in our coaching enough to back it up.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faq.ref} className={`${faq.className} max-w-3xl mx-auto px-4 pb-28`}>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-10">
          Pricing <span className="text-gradient">FAQ</span>
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

      {/* FINAL CTA */}
      <section ref={cta.ref} className={`${cta.className} py-24 px-4`}>
        <div className="max-w-2xl mx-auto text-center bg-card border border-border rounded-2xl p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready to <span className="text-gradient">Transform?</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
            The first step is a free consultation. Let's discuss your goals and whether this approach is right for you.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-10 h-14 shadow-[0_0_30px_hsl(110,100%,55%,0.25)]">
            Book Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-xs text-muted-foreground mt-4">No commitment. No pressure. Just a conversation.</p>
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

export default Pricing;
