import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Jen streamlined my workflow, saved hours every week, and helped me close deals faster. Her support directly improved my efficiency and bottom line.",
      name: "Jasmine, Realtor"
    },
    {
      quote: "Jen is loyal, honest, approachable, and fun to work with. She made my operations smoother, my time more productive, and my business more profitable. She's the behind-the-scenes partner every business owner needs.",
      name: "Emily B."
    },
    {
      quote: "Jen's automations freed up my time so I could focus on clients — not paperwork. My productivity's up, my costs are down, and my results are better than ever.",
      name: "Chris, Real Estate Professional"
    },
    {
      quote: "Working with Jen long-term has been a game-changer. She's consistent, proactive, and always thinking three steps ahead for my business.",
      name: "Catherine, Long-Term Client"
    }
  ];

  return (
    <section className="py-24 bg-gradient-pale-gold">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const isLast = index === testimonials.length - 1;
            return (
              <Card 
                key={index} 
                className={`p-10 ${
                  index % 2 === 0 ? 'bg-muted/30' : 'bg-terracotta/20'
                } border-2 border-border shadow-card hover:shadow-elegant transition-all duration-300 relative ${
                  isLast ? 'md:col-span-2 md:max-w-3xl md:mx-auto' : ''
                }`}
              >
                <div className="absolute top-6 left-6 text-accent/20 text-7xl font-heading leading-none">"</div>
                <div className="relative pt-8">
                  <p className="font-body text-foreground leading-relaxed mb-6 text-lg font-light italic">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-accent/30"></div>
                    <p className="font-heading font-semibold text-accent text-lg">
                      {testimonial.name}
                    </p>
                    <div className="h-px flex-1 bg-accent/30"></div>
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

export default Testimonials;