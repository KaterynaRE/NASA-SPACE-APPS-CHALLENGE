import React from 'react';

export default function Header() {
  return (
    <header className="border-b border-cyan-500/20 bg-slate-900/80 backdrop-blur-md sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <img
            src="/favicon.svg"
            alt="Lunar Mission Navigator Logo"
            className="w-11 h-11 rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.25)]"
          />
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                NASA Space Apps 2026
              </span>
              <span className="text-xs font-mono text-slate-400">
                Lunar Landing Site Navigator • CLPS Browser
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-0.5">
              Lunar Landing Site & CLPS Mission Navigator
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href="https://quickmap.lroc.asu.edu/"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 transition"
          >
            LRO Quickmap ↗
          </a>
          <a
            href="https://trek.nasa.gov/moon/"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 transition"
          >
            Moon Trek 3D ↗
          </a>
          <a
            href="https://ssd.jpl.nasa.gov/horizons/"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 transition"
          >
            JPL Horizons ↗
          </a>
          <a
            href="https://www.asc-csa.gc.ca/eng/astronomy/moon-exploration/"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 transition"
          >
            CSA Moon Portal ↗
          </a>
        </div>
      </div>
    </header>
  );
}
