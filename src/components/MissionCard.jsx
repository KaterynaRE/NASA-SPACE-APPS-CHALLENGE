import React from 'react';

export default function MissionCard({ mission, onSelect }) {
  const statusStyles = {
    Completed: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    Active: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    Planned: 'bg-amber-500/10 text-amber-400 border-amber-500/30'
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-xl p-5 flex flex-col justify-between transition group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-mono text-cyan-400">{mission.id}</span>
          <span
            className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${
              statusStyles[mission.status] || statusStyles.Planned
            }`}
          >
            {mission.status}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition">
          {mission.missionName}
        </h3>
        <p className="text-xs font-mono text-slate-400 mt-0.5">
          {mission.company} • Lander: <span className="text-slate-200">{mission.lander}</span>
        </p>

        <div className="mt-4 space-y-1.5 text-xs text-slate-300 bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
          <div className="flex justify-between gap-2">
            <span className="text-slate-500 font-mono">LANDING SITE:</span>
            <span className="font-medium text-right">{mission.landingSite}</span>
          </div>
          <div className="flex justify-between gap-2">
            <span className="text-slate-500 font-mono">COORDINATES:</span>
            <span className="font-mono text-cyan-300">
              {mission.lat}°, {mission.lng}°
            </span>
          </div>
          <div className="flex justify-between gap-2">
            <span className="text-slate-500 font-mono">SUN ELEVATION:</span>
            <span className="font-mono text-amber-300 truncate max-w-[180px]">
              {mission.ephemeris.sunElevation.split('(')[0]}
            </span>
          </div>
        </div>

        <div className="mt-4">
          <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1.5">
            NASA Payloads ({mission.payloads.length}):
          </span>
          <div className="flex flex-wrap gap-1.5">
            {mission.payloads.slice(0, 3).map((payload) => (
              <span
                key={payload}
                className="text-[11px] bg-slate-800 text-slate-200 px-2 py-0.5 rounded border border-slate-700 truncate max-w-[210px]"
              >
                {payload}
              </span>
            ))}
            {mission.payloads.length > 3 && (
              <span className="text-[11px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/30 font-mono">
                +{mission.payloads.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={() => onSelect(mission)}
        className="mt-5 w-full py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono uppercase tracking-wider transition"
      >
        Inspect Site & NASA Telemetry →
      </button>
    </div>
  );
}
