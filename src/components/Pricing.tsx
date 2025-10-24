import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      name: "Essentials",
      icon: "🧹",
      goal: "Stop Scrambling",
      hours: "12–20 hours",
      price: "$650",
      description: "Designed for the entrepreneur who's juggling too much and needs breathing room.",
      features: [
        "Inbox decluttering & management",
        "Calendar organization & optimization",
        "Task tracker setup",
        "Monthly progress summary"
      ],
      perfectFor: "Perfect for small business owners ready to get organized and stay consistent.",
      popular: false,
      bgColor: "bg-secondary"
    },
    {
      name: "Growth",
      icon: "🚀",
      goal: "Scale Without Overwhelm",
      hours: "20–40 hours",
      price: "$1,500",
      description: "For the entrepreneur ready to systemize and scale with less chaos.",
      features: [
        "Everything in Essentials",
        "Process mapping",
        "Automation setup",
        "Weekly check-ins",
        "SOP documentation"
      ],
      perfectFor: "Perfect for business owners scaling without the burnout.",
      popular: true,
      bgColor: "bg-gradient-pale-gold"
    },
    {
      name: "Executive",
      icon: "👑",
      goal: "Reclaim Your CEO Role",
      hours: "40+ hours",
      price: "$3,000",
      description: "For leaders ready to fully step into the CEO seat and let systems drive results.",
      features: [
        "Everything in Growth",
        "Full operations audit",
        "Custom dashboards",
        "90-day strategic plan",
        "Weekly strategy calls"
      ],
      perfectFor: "Perfect for founders ready to step fully into your CEO role.",
      popular: false,
      bgColor: "bg-background"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your Support Level
          </h2>
          <p className="font-body text-xl text-foreground/80 max-w-3xl mx-auto font-light leading-relaxed">
            I offer ongoing monthly support focused on results — not hours. Each package includes estimated time saved, so you know your ROI from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`p-8 ${pkg.bgColor} border-2 ${
                pkg.popular ? 'border-accent shadow-luxury' : 'border-border shadow-card'
              } hover:shadow-luxury transition-all duration-300 relative hover:scale-[1.02]`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground font-heading font-bold px-6 py-2 rounded-full text-sm shadow-gold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{pkg.icon}</div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="font-body text-accent font-semibold mb-4 text-xl">{pkg.goal}</p>
                <div className="mb-4">
                  <span className="font-heading text-4xl font-bold text-foreground">{pkg.price}</span>
                  <span className="font-body text-foreground/70">/month</span>
                </div>
                <p className="font-body text-sm text-foreground/80 mb-4 font-light leading-relaxed">
                  {pkg.description}
                </p>
                <div className="inline-block bg-accent/10 px-4 py-2 rounded-full">
                  <p className="font-body text-sm font-semibold text-accent">
                    ✅ Save {pkg.hours}/month
                  </p>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground font-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="font-body text-sm text-foreground/70 mb-6 italic font-light">
                🎯 {pkg.perfectFor}
              </p>

              <Button 
                variant="gold"
                className="w-full font-heading shadow-gold hover:shadow-luxury"
                asChild
              >
                <a href="https://calendar.app.google/Da7khsGn6ECBnNKfA" target="_blank" rel="noopener noreferrer">
                  Let's Build Your System
                </a>
              </Button>
            </Card>
          ))}
        </div>

        <p className="font-body text-center text-foreground/70 mt-16 max-w-3xl mx-auto text-lg font-light">
          All packages focus on measurable outcomes, not hours logged — you'll know your ROI from day one.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
