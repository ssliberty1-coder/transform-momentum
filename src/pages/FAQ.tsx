import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const navLinks = ["Home", "About", "Services", "Transformations", "Pricing", "Contact"];

const sections = [
  {
    title: "About the Coaching",
    items: [
      {
        q: "How does this coaching work?",
        a: "Two phases. Phase 1: 12-week transformation ($599, weekly calls). Phase 2: Monthly coaching ($149/month, bi-weekly calls, optional). Most clients continue Phase 2 to maintain results.",
      },
      {
        q: "What's the difference between the 12-week plan and monthly coaching?",
        a: "The 12-week plan is intensive—rapid transformation, weekly calls, custom plans created from scratch. Monthly coaching is maintenance—habit reinforcement, bi-weekly calls, progression. Different phases, different needs.",
      },
      {
        q: "Do I have to continue monthly coaching after 12 weeks?",
        a: "No. Completely optional. About 70% of clients continue because the results feel amazing and they want to protect them. But 30% feel confident going solo, and that's great too.",
      },
      {
        q: "What results can I expect?",
        a: "Physical transformation (losing fat, gaining muscle, strength), but more importantly: confidence, control over your nutrition, sustainable habits. Check out our transformations page for real examples.",
      },
      {
        q: "How long does coaching take?",
        a: "The initial plan is 12 weeks. If you continue monthly coaching, that's ongoing (you decide when to stop). Most clients stay 6–12+ months.",
      },
      {
        q: "Do I need to be fit to start?",
        a: "No. Our plans are customized to YOUR current fitness level. We have clients ranging from complete beginners to advanced athletes.",
      },
    ],
  },
  {
    title: "The 12-Week Plan",
    items: [
      {
        q: "What's included in the $599 12-week plan?",
        a: "Custom workout plan, custom meal plan, weekly video coaching calls, email support, unlimited adjustments, progress tracking with photos, and a video exercise library. Everything you need to transform in 12 weeks.",
      },
      {
        q: "Is the 12-week plan a contract?",
        a: "No. It's a one-time $599 payment for 12 weeks of coaching. Once you complete week 12, you decide if you want to continue monthly coaching ($149/month). No long-term contracts anywhere.",
      },
      {
        q: "Can I pause or extend the 12-week plan?",
        a: "Yes, we can adjust the timeline if needed. Life happens. We're flexible.",
      },
    ],
  },
  {
    title: "Monthly Coaching",
    items: [
      {
        q: "What's monthly coaching like?",
        a: "$149/month for bi-weekly 30-minute calls, plan adjustments, email support, and accountability. It's lighter than the intensive 12-week plan, but keeps you on track and progressing.",
      },
      {
        q: "How long do most clients stay on monthly coaching?",
        a: "Average is 6–12 months, but some stay longer. Depends on your goals. As long as it's providing value, keep going. When you feel confident solo, that's great too.",
      },
      {
        q: "Can I cancel monthly coaching?",
        a: "Yes, anytime. No contracts, no penalties. Just let me know and we'll wrap up. Door is always open if you want to return.",
      },
      {
        q: "Why is monthly coaching worth it?",
        a: "Because results feel amazing and most people want to protect them. The accountability prevents backsliding, keeps you consistent, and helps you keep improving. Think of it as insurance for your transformation.",
      },
    ],
  },
  {
    title: "Nutrition & Workouts",
    items: [
      {
        q: "Will I have to give up foods I love?",
        a: "No. We teach sustainable nutrition, which means eating foods you enjoy in quantities that support your goals. High-volume, nutritious foods—not restriction.",
      },
      {
        q: "Can you customize for dietary restrictions (vegan, gluten-free, etc.)?",
        a: "Absolutely. Every meal plan is personalized to your preferences, allergies, and dietary restrictions.",
      },
      {
        q: "What equipment do I need?",
        a: "We customize workouts based on what you have. Home gym, full gym, minimal equipment—we adapt.",
      },
      {
        q: "Can you do online coaching?",
        a: "Yes! All our coaching is delivered online via video calls and email. You can be anywhere in the world.",
      },
    ],
  },
  {
    title: "Pricing & Payments",
    items: [
      {
        q: "Why is the 12-week plan $599 instead of monthly?",
        a: "It's a one-time investment for intensive, life-changing coaching. After 12 weeks, monthly coaching ($149/month) is optional for ongoing maintenance.",
      },
      {
        q: "What's the total cost if I do 12 weeks + 9 months of monthly coaching?",
        a: "$599 + (9 × $149) = $1,940 for a full year. Most clients see this as incredible value given the transformation + ongoing support.",
      },
      {
        q: "Do you offer payment plans for the $599?",
        a: "Yes. We offer a payment plan of 3 payments of $199 if that helps make it more accessible.",
      },
      {
        q: "What's your refund policy?",
        a: "We offer a 30-day money-back guarantee on the 12-week plan. If you're not satisfied, full refund, no questions asked.",
      },
    ],
  },
  {
    title: "The Process",
    items: [
      {
        q: "How does the free consultation work?",
        a: "30-minute video call where we discuss your goals, challenges, and lifestyle. I'll explain how the 12-week plan works. No pressure—we only work together if it's a good fit.",
      },
      {
        q: "How long does it take to get my custom plan?",
        a: "Once you book the 12-week plan, you'll get your custom workout and meal plan within 3–5 business days. Then we start with week 1 whenever you're ready.",
      },
      {
        q: "What happens at week 10?",
        a: "You'll get an email talking about the transformation you've made and introducing monthly coaching as an option. At week 12 we discuss it in detail. No pressure either way.",
      },
      {
        q: "How will you track my progress?",
        a: "Through regular progress photos, body measurements, strength and performance tracking, and open conversation during our calls. Data plus how you feel—both matter.",
      },
    ],
  },
  {
    title: "Commitment & Mindset",
    items: [
      {
        q: "What if I've failed at fitness before?",
        a: "Good. That means you're ready for something different. We focus on sustainable habits, not quick fixes or extreme approaches.",
      },
      {
        q: "Is this just for weight loss?",
        a: "No. Clients have various goals: weight loss, muscle gain, strength, confidence, mental health. We customize to YOUR goal.",
      },
      {
        q: "What if I travel during my plan?",
        a: "We have workout and meal options for travelers. Your plan is flexible and adapts to your lifestyle.",
      },
      {
        q: "What if I have a busy week and can't stick to the plan?",
        a: "Life happens. We adjust. This isn't about perfection—it's about consistency and sustainability.",
      },
      {
        q: "How is this different from an app or online program?",
        a: "You get personalized coaching, direct support, and real accountability. It's not one-size-fits-all. Apps don't care if you succeed. I do.",
      },
    ],
  },
];

const FAQ = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

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
              <Link key={l} to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
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
          FAQ
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 leading-tight">
          Frequently Asked{" "}
          <span className="text-gradient">Questions</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Find answers to common questions about the 12-week plan and monthly coaching.
        </p>
      </section>

      {/* FAQ SECTIONS */}
      <div className="max-w-3xl mx-auto px-4 pb-28 space-y-12">
        {sections.map((section, si) => (
          <section key={section.title}>
            <h2 className="text-xl md:text-2xl font-black mb-5 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-black shrink-0">
                {si + 1}
              </span>
              {section.title}
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {section.items.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`s${si}-q${i}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline text-sm md:text-base">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        ))}
      </div>

      {/* FINAL CTA */}
      <section className="py-24 px-4">
        <div className="max-w-2xl mx-auto text-center bg-card border border-border rounded-2xl p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Still Have <span className="text-gradient">Questions?</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
            Book a free consultation and let's chat! We'll answer everything and discuss whether the 12-week plan is right for you.
          </p>
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-10 h-14 shadow-[0_0_30px_hsl(110,100%,55%,0.25)]">
            <Link to="/contact">
              Book Your Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
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

export default FAQ;
