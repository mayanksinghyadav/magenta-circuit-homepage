import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-sm">M</span>
          </div>
          <span className="font-semibold text-foreground">MagentaCircuit</span>
        </div>
        
        <Button variant="accent" size="sm">
          Book a Call
        </Button>
      </div>
    </header>
  );
};

export default Header;
