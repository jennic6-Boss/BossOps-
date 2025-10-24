import { Card } from "@/components/ui/card";
import { Clock, Repeat, DollarSign, Sparkles } from "lucide-react";

const Outcomes = () => {
  const outcomes = [
    {
      icon: Clock,
      text: "Reclaim 10–40 hours every month with streamlined systems"
    },
    {
      icon: Repeat,
      text: "Automation that runs without constant oversight (clients report 15+ hours saved monthly)"
    },
    {
      icon: DollarSign,
      text: "AI tools that save time and deliver real ROI"
    },
    {
      icon: Sparkles,
      text: "Less stress, more clarity, more freedom to focus on growth"
    }
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Key Outcomes You Can Expect
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Here's what you can expect when we work together — structure, calm, and sustainable progress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <Card key={index} className="p-6 bg-card border-border hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <p className="font-body text-foreground leading-relaxed pt-2">
                    {outcome.text}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
