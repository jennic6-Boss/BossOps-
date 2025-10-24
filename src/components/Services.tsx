import { Card } from "@/components/ui/card";
import { Mail, FileText, Target, Bot, BarChart } from "lucide-react";

const Services = () => {
  const services = [
    { 
      title: "Inbox & Calendar Management", 
      description: "Smart filters that auto-sort by priority, scheduling tools that eliminate back-and-forth, and inbox rules that keep you at zero",
      icon: Mail
    },
    { 
      title: "SOP & Process Documentation", 
      description: "Step-by-step guides for onboarding, client workflows, and recurring tasks so your team knows exactly what to do",
      icon: FileText
    },
    { 
      title: "CRM Setup & Optimization", 
      description: "Automated follow-ups, lead scoring systems, and pipeline dashboards that show you exactly where every opportunity stands",
      icon: Target
    },
    { 
      title: "AI Integration & Automation", 
      description: "Custom ChatGPT workflows, Zapier automations, and AI assistants trained on your business processes",
      icon: Bot
    },
    { 
      title: "Operations Management", 
      description: "Dashboards that give you visibility, processes that scale with growth, and systems that free you to be the CEO",
      icon: BarChart
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            How I Help You Simplify Chaos
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Every system I build is designed to free your time, reduce costs, and help your business grow sustainably.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-8 bg-forest-green-900 border-forest-green-700 hover:shadow-elegant transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;