import { Card } from "@/components/ui/card";
import { Search, FileText, Wrench, Calendar } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "1",
      title: "Intake Call & Systems Audit",
      description: "We start with a deep-dive discovery call where I learn your business inside and out. I'll audit your current systems, identify bottlenecks, and pinpoint where you're losing the most time.",
      icon: Search
    },
    {
      number: "2",
      title: "Customized Action Plan",
      description: "Within 48 hours, you'll receive a personalized roadmap showing exactly what we'll tackle first, what results to expect, and your projected time savings.",
      icon: FileText
    },
    {
      number: "3",
      title: "Implementation & Training",
      description: "I build, test, and implement your new systems — then train you and your team so everyone knows how to use them. No tech left behind.",
      icon: Wrench
    },
    {
      number: "4",
      title: "Weekly Check-Ins & Optimization",
      description: "We meet weekly to review progress, troubleshoot challenges, and refine systems as your business evolves. I'm your ongoing partner, not a one-and-done consultant.",
      icon: Calendar
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            How We Work Together: The BossOps Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="p-8 bg-gradient-gold border-warm-gold hover:shadow-gold transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <span className="font-heading text-2xl font-bold text-primary-foreground">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
