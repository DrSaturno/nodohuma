import React from 'react';

const PillarsDiagram = ({ activePillar, setActivePillar }) => {
  return (
    <div className="pillars-diagram-wrapper animate-fade-in">
      <svg className="pillars-diagram" viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Core connected background lines */}
        <g opacity="0.6">
          {/* Main Triangle */}
          <line x1="240" y1="90" x2="140" y2="270" stroke="#7a8d74" strokeWidth="2" className="diagram-lines" />
          <line x1="240" y1="90" x2="340" y2="270" stroke="#7a8d74" strokeWidth="2" className="diagram-lines" />
          <line x1="140" y1="270" x2="340" y2="270" stroke="#7a8d74" strokeWidth="2" className="diagram-lines" />
          
          {/* Node to center connectors */}
          <line x1="240" y1="90" x2="240" y2="210" stroke="#7a8d74" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="140" y1="270" x2="240" y2="210" stroke="#7a8d74" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="340" y1="270" x2="240" y2="210" stroke="#7a8d74" strokeWidth="1" strokeDasharray="3 3" />
        </g>

        {/* Dash Circle representing Cultura */}
        <circle 
          cx="240" 
          cy="210" 
          r="125" 
          stroke={activePillar === 'cultura' ? '#7a8d74' : '#a3b59d'} 
          strokeWidth={activePillar === 'cultura' ? '3' : '1.5'} 
          strokeDasharray="6 6" 
          style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}
          onClick={() => setActivePillar('cultura')}
          onMouseEnter={() => setActivePillar('cultura')}
        />

        {/* Vertices/Nodes */}
        
        {/* Vertex 1: Personas (Top) */}
        <g 
          className={`diagram-node ${activePillar === 'personas' ? 'active' : ''}`}
          onClick={() => setActivePillar('personas')}
          onMouseEnter={() => setActivePillar('personas')}
        >
          <circle cx="240" cy="90" r="10" fill="#232a25" stroke="#7a8d74" strokeWidth="2" />
          <circle cx="240" cy="90" r="20" fill="transparent" /> {/* Click helper */}
          <text x="240" y="60" textAnchor="middle" className="diagram-label" fill="#232a25">PERSONAS</text>
        </g>

        {/* Vertex 2: Procesos (Bottom-Left) */}
        <g 
          className={`diagram-node ${activePillar === 'procesos' ? 'active' : ''}`}
          onClick={() => setActivePillar('procesos')}
          onMouseEnter={() => setActivePillar('procesos')}
        >
          <circle cx="140" cy="270" r="10" fill="#232a25" stroke="#7a8d74" strokeWidth="2" />
          <circle cx="140" cy="270" r="20" fill="transparent" />
          <text x="140" y="305" textAnchor="middle" className="diagram-label" fill="#232a25">PROCESOS</text>
        </g>

        {/* Vertex 3: Estructura (Bottom-Right) */}
        <g 
          className={`diagram-node ${activePillar === 'estructura' ? 'active' : ''}`}
          onClick={() => setActivePillar('estructura')}
          onMouseEnter={() => setActivePillar('estructura')}
        >
          <circle cx="340" cy="270" r="10" fill="#232a25" stroke="#7a8d74" strokeWidth="2" />
          <circle cx="340" cy="270" r="20" fill="transparent" />
          <text x="340" y="305" textAnchor="middle" className="diagram-label" fill="#232a25">ESTRUCTURA</text>
        </g>

        {/* Center Node / Label for Cultura */}
        <g 
          className={`diagram-node ${activePillar === 'cultura' ? 'active' : ''}`}
          onClick={() => setActivePillar('cultura')}
          onMouseEnter={() => setActivePillar('cultura')}
        >
          <circle cx="240" cy="210" r="28" fill="#7a8d74" fillOpacity="0.1" stroke="#7a8d74" strokeWidth="1" />
          <circle cx="240" cy="210" r="8" fill="#7a8d74" />
          <circle cx="240" cy="210" r="35" fill="transparent" />
          <text x="240" y="175" textAnchor="middle" className="diagram-label" fill="#7a8d74">CULTURA</text>
        </g>
      </svg>
    </div>
  );
};

export default PillarsDiagram;
