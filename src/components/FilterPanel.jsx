import React from 'react';

export default function FilterPanel({
  searchQuery,
  setSearchQuery,
  selectedCompany,
  setSelectedCompany,
  selectedStatus,
  setSelectedStatus,
  selectedYear,
  setSelectedYear,
  companies,
  years,
  onReset
}) {
  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        <div className="md:col-span-5">
          <label className="block text-xs font-mono text-slate-400 mb-1">
            SEARCH MISSION / PAYLOAD / SITE
          </label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="e.g. Odysseus, TRIDENT, South Pole, Mare Crisium..."
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
          />
        </div>

        <div className="md:col-span-3">
          <label className="block text-xs font-mono text-slate-400 mb-1">
            COMMERCIAL PROVIDER
          </label>
          <select
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400"
          >
            <option value="All">All Providers</option>
            {companies.map((comp) => (
              <option key={comp} value={comp}>
                {comp}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs font-mono text-slate-400 mb-1">
            MISSION STATUS
          </label>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400"
          >
            <option value="All">All Statuses</option>
            <option value="Completed">Completed</option>
            <option value="Active">Active</option>
            <option value="Planned">Planned</option>
          </select>
        </div>

        <div className="md:col-span-2 flex items-end gap-2">
          <div className="flex-1">
            <label className="block text-xs font-mono text-slate-400 mb-1">
              YEAR
            </label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2 py-2 text-sm text-white focus:outline-none focus:border-cyan-400"
            >
              <option value="All">All</option>
              {years.map((yr) => (
                <option key={yr} value={String(yr)}>
                  {yr}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={onReset}
            title="Reset all filters"
            className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm border border-slate-700 transition"
          >
            ↺
          </button>
        </div>
      </div>
    </div>
  );
}
