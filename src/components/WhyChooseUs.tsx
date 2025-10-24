import { Card } from "@/components/ui/card";
import { Handshake, TrendingUp, Layers, Heart } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Your Friendly Behind-the-Scenes Partner",
      description: "I'm not just a service provider — I'm the business partner who has your back. My approach is warm, collaborative, and judgment-free. You'll never feel talked down to or overwhelmed by tech jargon. Instead, you'll get honest advice, reliable support, and someone who genuinely celebrates your wins with you.",
      icon: Handshake
    },
    {
      title: "AI That Delivers ROI — Not Hype",
      description: "I don't chase shiny objects or push tools you don't need. Every solution I recommend is proven, tested, and built to save you time and money. We start with what moves the needle, then scale from there.",
      icon: TrendingUp
    },
    {
      title: "Built for Real Business, Not Theory",
      description: "With over a decade managing high-stakes transactions and supporting entrepreneurs in the trenches, I understand what it takes to keep a business running smoothly. I bring real-world experience, not just certifications and courses.",
      icon: Layers
    },
    {
      title: "Empathy Meets Strategy",
      description: "Running a business shouldn't feel lonely or chaotic. I combine strategic thinking with genuine care — so you get results without the burnout. You'll have a partner who understands the pressure you're under and helps you create sustainable systems that actually stick.",
      icon: Heart
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            The BossOps Approach
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const colors = [
              { bg: 'bg-muted/30', icon: 'text-muted' },
              { bg: 'bg-terracotta/20', icon: 'text-terracotta' },
              { bg: 'bg-accent/10', icon: 'text-accent' },
              { bg: 'bg-muted/30', icon: 'text-muted' }
            ];
            const color = colors[index % colors.length];
            
            return (
              <Card 
                key={index} 
                className={`p-10 ${color.bg} border-2 border-border shadow-card hover:shadow-elegant hover:scale-[1.02] transition-all duration-300`}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-background rounded-full mb-6 shadow-elegant`}>
                  <Icon className={`w-10 h-10 ${color.icon}`} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  {reason.title}
                </h3>
                <p className="font-body text-foreground/80 leading-relaxed font-light text-lg">
                  {reason.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
