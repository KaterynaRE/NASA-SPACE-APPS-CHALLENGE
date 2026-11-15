# Lunar Landing Site Navigator & CLPS Mission Browser | NASA Space Apps Challenge 2026

Interactive web application for exploring lunar landing sites, NASA Commercial Lunar Payload Services (CLPS) missions, South Pole lighting/communication constraints, and surface topography.

## Key Features
- **Multi-Parameter Search & Filtering:** Search by mission name, lander vehicle, lunar landing site, or scientific payload; filter by commercial provider, mission status, and launch year.
- **Interactive Selenographic Hologram Map:** Visualizes lunar landing coordinates from the North Pole to the South Pole with interactive telemetry pins.
- **Solar & Earth Ephemeris Assessments:** Integrates angular elevation data for the Sun and Earth at each landing site to evaluate solar power generation and Direct-to-Earth (DTE) communication windows.
- **Topography & Horizon Analysis:** Displays crater slope, terrain roughness, and local horizon conditions alongside direct links to official NASA mapping tools.

## NASA & Space Agency Partner Resources Used
- **LRO Quickmap (ASU / NASA):** High-resolution lunar imagery and LRO topographic data used to characterize landing site slopes and South Pole terrain (`https://quickmap.lroc.asu.edu/`).
- **NASA Moon Trek:** Interactive 3D lunar visualization portal used for spatial terrain context and local horizon profile evaluation (`https://trek.nasa.gov/moon/`).
- **NASA JPL Horizons System:** Ephemeris computation tool used to derive angular positions of the Sun and Earth from specific selenographic coordinates for power and communication assessments (`https://ssd.jpl.nasa.gov/horizons/`).
- **CSA Moon Exploration Portal (Canadian Space Agency):** Reference portal for international lunar exploration contributions and Artemis program context (`https://www.asc-csa.gc.ca/eng/astronomy/moon-exploration/`).

## Quick Start
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
