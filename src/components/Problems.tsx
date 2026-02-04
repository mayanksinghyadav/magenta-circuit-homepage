import { Clock, Database, MessageSquare, RefreshCw } from "lucide-react";

const problems = [
  {
    icon: MessageSquare,
    title: "Manual follow-ups",
    description: "Spending hours chasing leads and sending repetitive messages",
  },
  {
    icon: Database,
    title: "Scattered data and tools",
    description: "Information spread across multiple platforms with no single source of truth",
  },
  {
    icon: Clock,
    title: "Slow response times",
    description: "Leads going cold because responses take too long",
  },
  {
    icon: RefreshCw,
    title: "Repetitive internal tasks",
    description: "Team members stuck doing the same manual work every day",
  },
];

const Problems = () => {
  return (
    <section className="px-6 py-24 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Problems We Solve
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Common challenges that slow down growing businesses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-background/50 hover:border-accent/30 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <problem.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
