const Index = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="relative">
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 800 400" 
          style={{ transform: 'translate(-10%, -15%)', width: '120%', height: '130%' }}
        >
          <path
            d="M 150 200 L 180 180 L 220 170 L 280 165 L 350 165 L 450 165 L 520 165 L 580 170 L 620 180 L 650 200 L 660 220 L 665 240 L 665 260 L 660 280 L 640 290 L 580 295 L 520 298 L 450 298 L 350 298 L 280 298 L 220 295 L 160 290 L 140 280 L 135 260 L 135 240 L 140 220 Z"
            fill="none"
            stroke="#000000"
            strokeWidth="3"
            strokeDasharray="10,8"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.4"
          />
          <ellipse cx="250" cy="298" rx="35" ry="35" fill="none" stroke="#000000" strokeWidth="3" strokeDasharray="10,8" opacity="0.4" />
          <ellipse cx="550" cy="298" rx="35" ry="35" fill="none" stroke="#000000" strokeWidth="3" strokeDasharray="10,8" opacity="0.4" />
          <path
            d="M 300 165 L 320 140 L 380 140 L 400 165"
            fill="none"
            stroke="#000000"
            strokeWidth="3"
            strokeDasharray="10,8"
            strokeLinecap="round"
            opacity="0.4"
          />
          <path
            d="M 450 165 L 470 140 L 530 140 L 550 165"
            fill="none"
            stroke="#000000"
            strokeWidth="3"
            strokeDasharray="10,8"
            strokeLinecap="round"
            opacity="0.4"
          />
        </svg>

        <div className="relative z-10 text-center">
          <h1 className="font-orbitron text-7xl md:text-8xl font-black tracking-wider">
            <span className="text-black">
              Cn
            </span>
            <span className="text-red-600">
              Drive
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Index;
