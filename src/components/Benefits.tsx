import { Clock, Zap, Shield, Activity } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save hours every week",
    description: "Reclaim time spent on repetitive tasks",
  },
  {
    icon: Zap,
    title: "Faster lead responses",
    description: "Respond to inquiries in seconds, not hours",
  },
  {
    icon: Shield,
    title: "Fewer human errors",
    description: "Automated systems don't miss steps or make typos",
  },
  {
    icon: Activity,
    title: "Systems that work 24×7",
    description: "Your automation never sleeps, even when you do",
  },
];

const Benefits = () => {
  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What You Get
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real outcomes that impact your bottom line
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-accent/10 mb-5">
                <benefit.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
