const Footer = () => {
  return (
    <footer className="px-6 py-12 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-sm">M</span>
          </div>
          <span className="font-semibold text-foreground">MagentaCircuit</span>
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} MagentaCircuit. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
