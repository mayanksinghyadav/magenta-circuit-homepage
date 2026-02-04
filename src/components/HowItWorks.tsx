const steps = [
  {
    number: "01",
    title: "Understand your workflow",
    description: "We analyze your current processes to identify automation opportunities",
  },
  {
    number: "02",
    title: "Build automation",
    description: "Our team designs and develops custom automation systems for your needs",
  },
  {
    number: "03",
    title: "Test & launch",
    description: "Rigorous testing ensures everything works perfectly before going live",
  },
  {
    number: "04",
    title: "Ongoing improvement",
    description: "Continuous optimization keeps your systems running at peak performance",
  },
];

const HowItWorks = () => {
  return (
    <section className="px-6 py-24 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A straightforward process to transform your operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-border to-transparent" />
              )}
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-accent/30 bg-accent/5 mb-6">
                  <span className="text-accent font-bold text-lg">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
