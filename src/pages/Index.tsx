import { useState } from 'react';

const Index = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
      
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center animate-fade-in">
        <div 
          className="inline-block cursor-pointer transition-all duration-500 ease-out"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            transform: isHovered ? 'scale(1.05) perspective(1000px) rotateY(5deg)' : 'scale(1) perspective(1000px) rotateY(0deg)',
          }}
        >
          <div className="relative">
            <div className={`absolute -inset-8 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur-3xl opacity-50 ${isHovered ? 'animate-glow-pulse' : ''}`}></div>
            
            <h1 className="relative font-orbitron text-8xl md:text-9xl font-black tracking-wider">
              <span className="bg-gradient-to-r from-primary via-white to-secondary bg-clip-text text-transparent drop-shadow-2xl">
                Cn
              </span>
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent drop-shadow-2xl">
                Drive
              </span>
            </h1>
            
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className={`h-1 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500 ${isHovered ? 'w-96' : 'w-64'}`}></div>
            </div>
            
            <p className="mt-8 font-orbitron text-xl md:text-2xl text-muted-foreground tracking-widest uppercase">
              Drive Into The Future
            </p>
          </div>
        </div>

        <div className="mt-16 flex justify-center gap-4 flex-wrap">
          {['Инновации', 'Технологии', 'Скорость'].map((word, index) => (
            <div
              key={word}
              className="px-6 py-3 border border-primary/30 rounded-lg bg-card/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="font-orbitron text-sm tracking-wider text-foreground/80">
                {word}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all duration-300 cursor-pointer group">
            <span className="font-orbitron text-lg font-bold tracking-wide">
              Начать путешествие
            </span>
            <svg 
              className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-orbitron text-xs text-muted-foreground/50 tracking-widest">
        © 2024 CNDRIVE — ALL RIGHTS RESERVED
      </div>
    </div>
  );
};

export default Index;
