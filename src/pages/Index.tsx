const Index = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="relative inline-block">
        <svg 
          className="w-[700px] h-[280px]" 
          viewBox="0 0 700 280"
        >
          <path
            d="M 60 70 Q 180 10, 350 45 Q 520 10, 640 70"
            fill="none"
            stroke="#DC2626"
            strokeWidth="10"
            strokeLinecap="round"
          />
          
          <path
            d="M 60 210 Q 180 270, 350 235 Q 520 270, 640 210"
            fill="none"
            stroke="#1F2937"
            strokeWidth="10"
            strokeLinecap="round"
          />
          
          <text
            x="350"
            y="160"
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-orbitron"
            style={{ fontSize: '90px', fontWeight: 900, letterSpacing: '4px' }}
          >
            <tspan fill="#DC2626" style={{ fontWeight: 900 }}>Cn</tspan>
            <tspan fill="#1F2937" style={{ fontWeight: 900 }}>Drive</tspan>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Index;
