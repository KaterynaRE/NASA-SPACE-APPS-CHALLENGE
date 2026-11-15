import React from 'react';

export default function StatsBar({ missions }) {
  const totalMissions = missions.length;
  const totalPayloads = missions.reduce((sum, m) => sum + m.payloads.length, 0);
  const uniqueCompanies = new Set(missions.map((m) => m.company)).size;
  const southPoleMissions = missions.filter((m) => m.lat <= -70).length;

  const stats = [
    { label: 'Filtered Missions', value: totalMissions, code: 'MSN-CNT' },
    { label: 'NASA Payloads', value: totalPayloads, code: 'PLD-TOT' },
    { label: 'Commercial Vendors', value: uniqueCompanies, code: 'CLPS-VND' },
    { label: 'South Pole / Polar', value: southPoleMissions, code: 'POL-REG' }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
      {stats.map((item) => (
        <div
          key={item.code}
          className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>{item.label}</span>
            <span className="text-cyan-500/70">{item.code}</span>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-white mt-2 font-mono">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}
