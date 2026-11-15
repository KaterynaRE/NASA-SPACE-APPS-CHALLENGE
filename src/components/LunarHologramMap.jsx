import React from 'react';

export default function LunarHologramMap({ missions, onSelectMission, activeMission }) {
  const getCoordinates = (lat, lng) => {
    const normalizedX = 50 + (lng / 180) * 38;
    const normalizedY = 50 - (lat / 90) * 42;
    return {
      left: `${Math.min(88, Math.max(12, normalizedX))}%`,
      top: `${Math.min(90, Math.max(10, normalizedY))}%`
    };
  };

  return (
    <div className="bg-slate-900/90 border border-cyan-500/30 rounded-xl p-4 hologram-grid relative overflow-hidden flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
            Holographic Selenographic Globe
          </span>
          <h2 className="text-base font-semibold text-white">
            Lunar Landing Site Coordinates
          </h2>
        </div>
        <span className="text-xs font-mono px-2 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
          CLICK PIN TO INSPECT
        </span>
      </div>

      <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto my-4 rounded-full border-2 border-cyan-400/50 bg-slate-950 shadow-[0_0_40px_rgba(6,182,212,0.18)] flex items-center justify-center">
        <svg className="w-full h-full opacity-30" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="98" fill="none" stroke="#22d3ee" strokeWidth="1" />
          <ellipse cx="100" cy="100" rx="65" ry="98" fill="none" stroke="#22d3ee" strokeWidth="0.7" strokeDasharray="3 3" />
          <ellipse cx="100" cy="100" rx="30" ry="98" fill="none" stroke="#22d3ee" strokeWidth="0.7" strokeDasharray="3 3" />
          <line x1="2" y1="100" x2="198" y2="100" stroke="#22d3ee" strokeWidth="0.8" />
          <line x1="15" y1="50" x2="185" y2="50" stroke="#22d3ee" strokeWidth="0.6" strokeDasharray="3 3" />
          <line x1="15" y1="150" x2="185" y2="150" stroke="#22d3ee" strokeWidth="0.6" strokeDasharray="3 3" />
          <line x1="100" y1="2" x2="100" y2="198" stroke="#22d3ee" strokeWidth="0.8" />
        </svg>

        <span className="absolute top-2 text-[10px] font-mono text-cyan-400/70">NORTH POLE (90°N)</span>
        <span className="absolute bottom-2 text-[10px] font-mono text-cyan-400/70">SOUTH POLE (90°S)</span>

        {missions.map((mission) => {
          const pos = getCoordinates(mission.lat, mission.lng);
          const isSelected = activeMission?.id === mission.id;

          return (
            <button
              key={mission.id}
              onClick={() => onSelectMission(mission)}
              style={pos}
              className={`group absolute -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full pulse-marker transition transform hover:scale-125 focus:outline-none ${
                isSelected ? 'bg-amber-400 ring-4 ring-amber-400/40' : 'bg-cyan-400'
              }`}
              title={`${mission.missionName} (${mission.landingSite})`}
            >
              <span className="pointer-events-none opacity-0 group-hover:opacity-100 transition bg-slate-950/95 text-cyan-200 border border-cyan-500/40 text-[10px] font-mono px-2 py-1 rounded whitespace-nowrap absolute bottom-5 left-1/2 -translate-x-1/2 z-20 shadow-lg">
                {mission.missionName} ({mission.lat}°, {mission.lng}°)
              </span>
            </button>
          );
        })}
      </div>

      <div className="space-y-2 border-t border-slate-800 pt-3 text-xs font-mono">
        <div className="flex items-center justify-between text-slate-400">
          <span>ACTIVE PINS: {missions.length}</span>
          <span className="text-cyan-400">LRO / HORIZONS GRID</span>
        </div>
        <p className="text-[11px] text-slate-400 leading-relaxed">
          Coordinates cross-referenced with <span className="text-cyan-300">LRO Quickmap</span> topography & <span className="text-cyan-300">JPL Horizons</span> Sun/Earth elevation telemetry.
        </p>
      </div>
    </div>
  );
}
