const Index = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="relative inline-block">
        <svg 
          className="w-[800px] h-[280px]" 
          viewBox="0 0 800 280"
        >
          <path
            d="M 100 80 Q 250 15, 400 15 Q 550 15, 700 80"
            fill="none"
            stroke="#E11D48"
            strokeWidth="12"
            strokeLinecap="round"
          />
          
          <path
            d="M 100 200 Q 250 265, 400 265 Q 550 265, 700 200"
            fill="none"
            stroke="#1F2937"
            strokeWidth="12"
            strokeLinecap="round"
          />
          
          <text
            x="400"
            y="155"
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-orbitron"
            style={{ fontSize: '105px', fontWeight: 900, letterSpacing: '2px' }}
          >
            <tspan fill="#000000">Cn</tspan>
            <tspan fill="#DC2626">Drive</tspan>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Index;