const Index = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="relative inline-block">
        <svg 
          className="w-[700px] h-[250px]" 
          viewBox="0 0 700 250"
        >
          <path
            d="M 50 125 Q 50 40, 350 40 Q 650 40, 650 125 Q 650 210, 350 210 Q 50 210, 50 125"
            fill="none"
            stroke="#DC2626"
            strokeWidth="7"
            strokeLinecap="round"
          />
          
          <text
            x="350"
            y="140"
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-orbitron"
            style={{ fontSize: '85px', fontWeight: 900, letterSpacing: '3px' }}
          >
            <tspan fill="#DC2626">Cn</tspan>
            <tspan fill="#1F2937">Drive</tspan>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Index;
