import { Users, Globe, MessageCircle, Workflow, Settings } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Lead Handling Automation",
    description: "Capture, qualify, and route leads automatically without manual intervention",
  },
  {
    icon: Globe,
    title: "Website to Business System Integration",
    description: "Connect your website forms directly to your CRM, email, and internal tools",
  },
  {
    icon: MessageCircle,
    title: "AI Website Chat Assistant",
    description: "Intelligent chat that answers questions and captures leads 24/7",
  },
  {
    icon: Workflow,
    title: "Internal Process Automation",
    description: "Streamline onboarding, reporting, and team workflows",
  },
  {
    icon: Settings,
    title: "Custom Automation Setup",
    description: "Tailored solutions built specifically for your unique business needs",
  },
];

const Services = () => {
  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Automation solutions that deliver real business outcomes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-border bg-card hover:border-accent/30 transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-accent/10 w-fit mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
