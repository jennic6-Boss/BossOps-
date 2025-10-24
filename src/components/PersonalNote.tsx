const PersonalNote = () => {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-elegant">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Note from Jen
            </h2>
            
            <div className="space-y-4 text-lg text-foreground leading-relaxed">
              <p className="font-body">
                I built BossOps after years of trying to do it all — and realizing that <strong className="text-primary">structure + AI is the secret to getting our time and sanity back</strong>.
              </p>
              
              <p className="font-body">
                I'm not selling a course or pretending to have it all figured out. I'm a fellow business owner who tests tools, implements systems, and shares what's proven to work.
              </p>
              
              <p className="font-body">
                Most entrepreneurs don't need more information — they need <strong className="text-primary">clarity, structure, and a partner who helps them revolutionize ideas into action</strong>. That's exactly what I do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalNote;
