const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="relative inline-block">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-xl"></div>
          
          <h1 className="relative font-orbitron text-7xl md:text-8xl font-black tracking-wider">
            <span className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
              Cn
            </span>
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Drive
            </span>
          </h1>
        </div>
        
        <div className="mt-6 h-0.5 w-48 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        
        <p className="mt-6 font-orbitron text-lg text-muted-foreground tracking-widest uppercase">
          Drive Into The Future
        </p>
      </div>
    </div>
  );
};

export default Index;
