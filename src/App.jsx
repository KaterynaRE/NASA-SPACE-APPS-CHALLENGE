import React, { useState, useMemo } from 'react';
import missionsData from './data/missions.json';
import Header from './components/Header';
import StatsBar from './components/StatsBar';
import FilterPanel from './components/FilterPanel';
import LunarHologramMap from './components/LunarHologramMap';
import MissionCard from './components/MissionCard';
import MissionModal from './components/MissionModal';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [activeMission, setActiveMission] = useState(null);

  const companies = useMemo(
    () => [...new Set(missionsData.map((m) => m.company))],
    []
  );
  const years = useMemo(
    () => [...new Set(missionsData.map((m) => m.launchYear))].sort(),
    []
  );

  const filteredMissions = useMemo(() => {
    return missionsData.filter((mission) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        mission.missionName.toLowerCase().includes(q) ||
        mission.lander.toLowerCase().includes(q) ||
        mission.landingSite.toLowerCase().includes(q) ||
        mission.payloads.some((p) => p.toLowerCase().includes(q));

      const matchesCompany =
        selectedCompany === 'All' || mission.company === selectedCompany;
      const matchesStatus =
        selectedStatus === 'All' || mission.status === selectedStatus;
      const matchesYear =
        selectedYear === 'All' || String(mission.launchYear) === selectedYear;

      return matchesSearch && matchesCompany && matchesStatus && matchesYear;
    });
  }, [searchQuery, selectedCompany, selectedStatus, selectedYear]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCompany('All');
    setSelectedStatus('All');
    setSelectedYear('All');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <StatsBar missions={filteredMissions} />

        <FilterPanel
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCompany={selectedCompany}
          setSelectedCompany={setSelectedCompany}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          companies={companies}
          years={years}
          onReset={handleResetFilters}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <LunarHologramMap
              missions={filteredMissions}
              activeMission={activeMission}
              onSelectMission={(m) => setActiveMission(m)}
            />
          </div>

          <div className="lg:col-span-8">
            {filteredMissions.length === 0 ? (
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-12 text-center">
                <p className="text-slate-400 font-mono text-sm">
                  No lunar missions match your filter criteria.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="mt-4 px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg text-xs font-mono border border-cyan-500/30"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredMissions.map((mission) => (
                  <MissionCard
                    key={mission.id}
                    mission={mission}
                    onSelect={(m) => setActiveMission(m)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <MissionModal
        mission={activeMission}
        onClose={() => setActiveMission(null)}
      />
    </div>
  );
}
