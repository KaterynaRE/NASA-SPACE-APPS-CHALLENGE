import React from 'react';

export default function MissionModal({ mission, onClose }) {
  if (!mission) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-cyan-500/40 rounded-2xl max-w-3xl w-full p-6 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center font-mono"
        >
          ✕
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
          <span>{mission.id}</span>
          <span>•</span>
          <span>{mission.status.toUpperCase()}</span>
        </div>

        <h2 className="text-2xl font-bold text-white">{mission.missionName}</h2>
        <p className="text-sm text-slate-300 mt-2 leading-relaxed">
          {mission.description}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5 bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs">
          <div>
            <span className="text-slate-500 font-mono block">PROVIDER</span>
            <span className="text-white font-semibold mt-0.5 block">{mission.company}</span>
          </div>
          <div>
            <span className="text-slate-500 font-mono block">LANDER VEHICLE</span>
            <span className="text-white font-semibold mt-0.5 block">{mission.lander}</span>
          </div>
          <div>
            <span className="text-slate-500 font-mono block">LAUNCH VEHICLE</span>
            <span className="text-white font-semibold mt-0.5 block">{mission.rocket}</span>
          </div>
          <div>
            <span className="text-slate-500 font-mono block">LANDING REGION</span>
            <span className="text-white font-semibold mt-0.5 block">{mission.landingSite}</span>
          </div>
          <div>
            <span className="text-slate-500 font-mono block">SELENOGRAPHIC COORDS</span>
            <span className="text-cyan-400 font-mono mt-0.5 block">
              LAT {mission.lat}° / LNG {mission.lng}°
            </span>
          </div>
          <div>
            <span className="text-slate-500 font-mono block">LAUNCH DATE</span>
            <span className="text-white font-mono mt-0.5 block">{mission.launchDate}</span>
          </div>
        </div>

        {/* JPL Horizons System Ephemeris & Power/Comm Assessment */}
        <div className="mb-5 bg-slate-950/90 border border-cyan-500/30 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              Sun & Earth Ephemeris • Power & Comm Assessment (JPL Horizons Data)
            </h4>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300">
              JPL HORIZONS
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800">
              <span className="text-slate-400 font-mono block text-[11px]">SUN ELEVATION ANGLE:</span>
              <span className="text-amber-300 font-medium mt-0.5 block">{mission.ephemeris.sunElevation}</span>
            </div>
            <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800">
              <span className="text-slate-400 font-mono block text-[11px]">EARTH ELEVATION ANGLE:</span>
              <span className="text-cyan-300 font-medium mt-0.5 block">{mission.ephemeris.earthElevation}</span>
            </div>
            <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800">
              <span className="text-slate-400 font-mono block text-[11px]">SOLAR POWER ASSESSMENT:</span>
              <span className="text-slate-200 mt-0.5 block">{mission.ephemeris.powerAssessment}</span>
            </div>
            <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800">
              <span className="text-slate-400 font-mono block text-[11px]">COMMUNICATION WINDOW:</span>
              <span className="text-slate-200 mt-0.5 block">{mission.ephemeris.commAssessment}</span>
            </div>
          </div>
        </div>

        {/* Quickmap, Moon Trek & CSA Terrain Context */}
        <div className="mb-5 bg-slate-950/90 border border-slate-800 rounded-xl p-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            Surface Topography & Horizon Profile (LRO Quickmap / Moon Trek / CSA)
          </h4>
          <div className="space-y-2 text-xs text-slate-300">
            <div>
              <span className="text-slate-500 font-mono">LRO TOPOGRAPHY: </span>
              <span>{mission.terrain.topography}</span>
            </div>
            <div>
              <span className="text-slate-500 font-mono">3D HORIZON MASK: </span>
              <span>{mission.terrain.horizonMask}</span>
            </div>
            <div>
              <span className="text-slate-500 font-mono">ARTEMIS & CSA CONTEXT: </span>
              <span>{mission.terrain.partnerContext}</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            Manifested NASA Payloads & Instruments ({mission.payloads.length})
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
            {mission.payloads.map((item) => (
              <li key={item} className="text-xs text-slate-200 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Working Official Challenge Resource Links (Zero 404s) */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <a
              href={mission.links.quickmap}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 transition"
            >
              LRO Quickmap ↗
            </a>
            <a
              href={mission.links.moonTrek}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 transition"
            >
              NASA Moon Trek ↗
            </a>
            <a
              href={mission.links.horizons}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 transition"
            >
              JPL Horizons ↗
            </a>
            <a
              href={mission.links.csaPortal}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 transition"
            >
              CSA Moon Exploration ↗
            </a>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs font-mono transition shrink-0"
          >
            Close Telemetry
          </button>
        </div>
      </div>
    </div>
  );
}
