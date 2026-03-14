import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Menu, X, Calendar, MessageSquare, Lightbulb, ThumbsUp, Rocket, Star, Mail, Clock, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

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

const steps = [
  {
    icon: Calendar,
    title: "Book Your Consultation",
    description: "Select a time below. 30 minutes, completely free. No credit card, no obligation.",
  },
  {
    icon: MessageSquare,
    title: "We Chat About Your Goals",
    description: "You tell me your challenges. I explain how the 12-week plan works. We discuss expectations openly.",
  },
  {
    icon: Lightbulb,
    title: "I Make a Recommendation",
    description: "Either the 12-week plan is right for you, or it's not. If yes: pricing ($599), timeline, next steps. If no: I'll be honest and suggest alternatives.",
  },
  {
    icon: ThumbsUp,
    title: "You Decide",
    description: "No pressure. Sleep on it. If interested: payment link and start date selection. If not: the door is always open.",
  },
  {
    icon: Rocket,
    title: "Your 12-Week Transformation Begins",
    description: "Week 1: custom plan + first call. Weeks 2–12: weekly coaching, adjustments, results. Week 12: check-in about next steps.",
  },
];

const testimonials = [
  {
    name: "Jessica T.",
    context: "About the consultation",
    quote: "The consultation was so helpful. He really listened to me and didn't pressure me at all. I felt comfortable from the very first minute.",
    stars: 5,
  },
  {
    name: "Ryan M.",
    context: "About the 12-week plan",
    quote: "Best investment I've made in myself. 12 weeks changed my life—my body, my confidence, my habits. I wish I'd started sooner.",
    stars: 5,
  },
  {
    name: "Priya K.",
    context: "About monthly coaching",
    quote: "After 12 weeks I wanted to keep going. Monthly coaching keeps me accountable and I'm still improving 8 months later.",
    stars: 5,
  },
];

const faqs = [
  {
    q: "Is the consultation really free?",
    a: "Yes, completely free. No credit card required. No obligation to buy anything. It's a genuine conversation about your goals.",
  },
  {
    q: "What if I'm nervous about starting?",
    a: "That's totally normal. We'll talk through everything in the consultation. You'll know exactly what you're getting into before you commit to anything.",
  },
  {
    q: "What time zone are you in?",
    a: "Eastern Time (ET). The calendar automatically shows times in your local timezone, so just pick what works for you.",
  },
  {
    q: "Can I reschedule?",
    a: "Yes, no problem at all. Just message me and we'll find another time that works for you.",
  },
  {
    q: "What's the next step after I book?",
    a: "You'll get an email confirmation with a Zoom link. 30 minutes before the call, click the link and we'll chat. Simple as that.",
  },
];

const Contact = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const booking = useReveal();
  const journey = useReveal();
  const testimonialsReveal = useReveal();
  const faqReveal = useReveal();
  const bio = useReveal();
  const contactInfo = useReveal();

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
                className={`text-sm font-medium transition-colors ${l === "Contact" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
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
          Free Consultation
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 leading-tight">
          Let's Start Your{" "}
          <span className="text-gradient">Transformation</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Book a free 30-minute consultation. We'll discuss your goals and see if the 12-week plan is right for you.
        </p>
      </section>

      {/* CALENDAR BOOKING WIDGET */}
      <section ref={booking.ref} className={`${booking.className} max-w-4xl mx-auto px-4 pb-28`}>
        <div className="bg-card border-2 border-primary/30 rounded-2xl p-6 md:p-10 relative overflow-hidden shadow-[0_0_60px_hsl(110,100%,55%,0.06)]">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary" />
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-7 w-7 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black mb-2">Book Your Free Consultation</h2>
            <p className="text-muted-foreground text-sm">30 minutes · Completely free · No obligation</p>
          </div>

          {/* Placeholder for Calendly/Acuity embed */}
          <div className="bg-secondary/30 border border-border rounded-xl min-h-[480px] flex flex-col items-center justify-center p-8">
            <Calendar className="h-16 w-16 text-muted-foreground/30 mb-6" />
            <p className="text-lg font-semibold text-foreground mb-2">Calendar Booking Widget</p>
            <p className="text-sm text-muted-foreground text-center max-w-md mb-6 leading-relaxed">
              Connect your Calendly, Acuity Scheduling, or Cal.com account to embed your booking calendar here. Clients will see your real-time availability and book directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                <Calendar className="mr-2 h-4 w-4" /> Connect Calendar
              </Button>
              <Button variant="outline" className="border-border hover:border-primary hover:text-primary font-semibold">
                <Mail className="mr-2 h-4 w-4" /> Email Instead
              </Button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-xs text-muted-foreground">30 minutes</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-xs text-muted-foreground">Video call (Zoom)</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-xs text-muted-foreground">100% free, no obligation</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section ref={journey.ref} className={`${journey.className} max-w-4xl mx-auto px-4 pb-28`}>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
          Your Journey <span className="text-gradient">Starts Here</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here's exactly what happens from booking to transformation. No surprises.
        </p>

        <div className="relative space-y-0">
          {/* Vertical line */}
          <div className="absolute left-[1.6rem] md:left-8 top-8 bottom-8 w-px bg-border" />

          {steps.map((step, i) => (
            <div key={step.title} className="relative flex gap-5 md:gap-8 py-6">
              {/* Step number circle */}
              <div className="relative z-10 shrink-0">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 ${
                  i === 0 ? "bg-primary/10 border-primary" : "bg-card border-border"
                }`}>
                  <step.icon className={`h-5 w-5 md:h-6 md:w-6 ${i === 0 ? "text-primary" : "text-muted-foreground"}`} />
                </div>
              </div>

              {/* Content */}
              <div className="pt-1 md:pt-3">
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Step {i + 1}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-1.5">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section ref={testimonialsReveal.ref} className={`${testimonialsReveal.className} max-w-6xl mx-auto px-4 pb-28`}>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
          What Clients <span className="text-gradient">Say</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} className="bg-card border-border">
              <CardContent className="p-6 md:p-8 flex flex-col h-full">
                <Badge variant="outline" className="self-start mb-4 text-xs text-muted-foreground border-border">
                  {t.context}
                </Badge>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1 text-sm italic">
                  "{t.quote}"
                </p>
                <p className="text-sm font-bold text-foreground">— {t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* COACH BIO */}
      <section ref={bio.ref} className={`${bio.className} max-w-4xl mx-auto px-4 pb-28`}>
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-5 gap-0">
            {/* Photo placeholder */}
            <div className="md:col-span-2 bg-secondary/30 min-h-[300px] md:min-h-full flex items-center justify-center relative">
              <div className="text-center p-8">
                <User className="h-20 w-20 text-muted-foreground/20 mx-auto mb-4" />
                <p className="text-xs text-muted-foreground">Coach photo</p>
              </div>
            </div>

            {/* Bio content */}
            <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
              <Badge variant="outline" className="self-start mb-4 text-xs text-primary border-primary/30 uppercase tracking-widest font-bold">
                Your Coach
              </Badge>
              <h2 className="text-2xl md:text-3xl font-black mb-4">
                Hi, I'm <span className="text-gradient">Coach Lamarche</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I've transformed <span className="text-foreground font-semibold">150+ lives</span> by teaching sustainable nutrition and personalized training. My approach is simple: understand your goals, build a plan that fits your life, and coach you through the hard parts.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm not here to sell you. I'm here to help you decide if coaching is right for you. Let's talk about your goals—no pressure, no gimmicks.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-secondary text-secondary-foreground border-0 hover:bg-secondary">5+ Years Experience</Badge>
                <Badge className="bg-secondary text-secondary-foreground border-0 hover:bg-secondary">Certified Coach</Badge>
                <Badge className="bg-secondary text-secondary-foreground border-0 hover:bg-secondary">150+ Transformations</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqReveal.ref} className={`${faqReveal.className} max-w-3xl mx-auto px-4 pb-28`}>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-10">
          Booking <span className="text-gradient">FAQ</span>
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

      {/* CONTACT INFO */}
      <section ref={contactInfo.ref} className={`${contactInfo.className} max-w-2xl mx-auto px-4 pb-28`}>
        <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center">
          <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-black mb-2">Prefer to Email First?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Not ready to book a call? No problem. Send me an email and we'll connect at your pace.
          </p>
          <a
            href="mailto:coach@trainwithlamarche.com"
            className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:underline underline-offset-4"
          >
            <Mail className="h-5 w-5" />
            coach@trainwithlamarche.com
          </a>
          <p className="text-xs text-muted-foreground mt-3">Usually responds within 24 hours</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4">
        <div className="max-w-2xl mx-auto text-center bg-card border border-primary/20 rounded-2xl p-10 md:p-14 relative overflow-hidden shadow-[0_0_60px_hsl(110,100%,55%,0.06)]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Your Transformation Is{" "}
              <span className="text-gradient">One Call Away</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              30 minutes. Free. No pressure. Just a conversation about your goals.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-10 h-14 shadow-[0_0_30px_hsl(110,100%,55%,0.25)]">
              Book Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-xs text-muted-foreground mt-4">Free · No obligation · No credit card</p>
          </div>
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

export default Contact;
