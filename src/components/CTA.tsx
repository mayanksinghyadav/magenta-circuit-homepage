import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="px-6 py-24 bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Let automation handle the work while you focus on growth.
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Start with a free consultation to discover what's possible for your business.
        </p>
        <Button variant="accent" size="lg">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default CTA;
