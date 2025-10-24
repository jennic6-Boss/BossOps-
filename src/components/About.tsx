const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left */}
            <div className="space-y-6">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Hi, I'm Jen Ellis — Your Operations Partner Who Gets It
              </h2>
              
              <div className="space-y-5 text-lg text-foreground/90 leading-relaxed font-light">
                <p>
                  I help overwhelmed entrepreneurs turn operational chaos into clarity with intuitive systems, step-by-step processes, and <strong className="font-semibold text-accent">AI tools that deliver real results</strong>.
                </p>
                
                <p>
                  After <strong className="font-semibold text-accent">20 years as an escrow officer</strong> and <strong className="font-semibold text-accent">2 years supporting over 20 small businesses virtually</strong>—from real estate investors, creative agencies, and small businesses—I've spent my career building reliable workflows, managing complex transactions, and keeping operations running smoothly behind the scenes.
                </p>
                
                <p>
                  I created <strong className="font-semibold text-accent">BossOps</strong> after one too many days with 20 browser tabs open, toggling back and forth between systems, drowning in emails — and I knew there had to be a better way.
                </p>

                <p>
                  Now I help other entrepreneurs cut through the noise, streamline their days, and finally feel in control of their business operations.
                </p>

                <p>
                  Whether you need <strong className="font-semibold text-accent">inbox sanity</strong>, <strong className="font-semibold text-accent">SOPs that run themselves</strong>, or an <strong className="font-semibold text-accent">AI implementation partner who speaks human</strong> — I'm here to simplify your overwhelm.
                </p>
              </div>

              <div className="pt-6">
                <p className="text-2xl font-heading font-semibold text-accent border-t-2 border-accent/30 pt-6">
                  You focus on growth. I'll handle the operations.
                </p>
              </div>
            </div>

            {/* Image Placeholder - Right */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-pale-gold border-4 border-accent/20 shadow-gold overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-accent/40">
                  {/* Placeholder for image */}
                  <p className="font-heading text-lg text-center px-8">
                    [Your professional photo will go here]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
