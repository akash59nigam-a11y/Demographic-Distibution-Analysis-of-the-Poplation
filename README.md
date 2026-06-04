# 🌍 World Population Distribution Chart

> An interactive bar chart visualizing 8B+ people by **geographic region** and **income classification** — built with React, Vite, and Recharts.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white&style=flat-square)
![Recharts](https://img.shields.io/badge/Recharts-2-22C55E?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-f97316?style=flat-square)

---

## 📸 Preview

| By Region | By Income |
|-----------|-----------|
| East Asia & Pacific leads with 2.36B | Lower Middle Income group is the largest at 3.08B |

---

## ✨ Features

- **Toggle view** — switch between geographic region and World Bank income classification
- **Custom bar shapes** — rounded corners with a soft top-glow effect
- **Interactive tooltips** — hover any bar for population (in billions) and country count
- **Legend cards** — percentage breakdown grid below the chart
- **Responsive** — adapts from mobile to widescreen; chart scrolls horizontally on tiny screens
- **Dark theme** — rich `#020817` background with carefully tuned contrast

---

## 🗂️ Project Structure

```
world-population-chart/
├── public/
│   └── favicon.svg              # Custom SVG favicon
├── src/
│   ├── components/
│   │   ├── PopulationChart.jsx  # Main page component (chart + toggle + layout)
│   │   ├── CustomBar.jsx        # Custom Recharts bar shape
│   │   ├── CustomTooltip.jsx    # Custom hover tooltip
│   │   └── LegendCards.jsx      # Summary cards grid
│   ├── data/
│   │   └── populationData.js    # All chart data (single source of truth)
│   ├── App.jsx                  # Root component
│   ├── main.jsx                 # React DOM entry point
│   └── index.css                # Global reset + base styles
├── index.html                   # HTML shell (Vite entry)
├── vite.config.js               # Vite configuration
├── package.json
├── .eslintrc.cjs
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation & Running

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/world-population-chart.git
cd world-population-chart

# 2. Install dependencies
npm install

# 3. Start the dev server (opens at http://localhost:3000)
npm run dev
```

### Build for Production

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

---

## 📊 Data Source

All population figures are sourced from the **World Bank** open data portal:

- **Indicator**: `SP.POP.TOTL` — Total Population
- **Year**: 2023 estimates
- **URL**: https://data.worldbank.org/indicator/SP.POP.TOTL

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev/) | UI library |
| [Vite 5](https://vitejs.dev/) | Build tool & dev server |
| [Recharts 2](https://recharts.org/) | Composable chart components |
| [Sora](https://fonts.google.com/specimen/Sora) | Display / body font |
| [DM Mono](https://fonts.google.com/specimen/DM+Mono) | Numbers / monospaced labels |

---

## 🔧 Customization

**Update data** → edit `src/data/populationData.js`

**Change colors** → update the `color` field in each data object

**Add a new view** → add a new array in `populationData.js`, extend the toggle in `PopulationChart.jsx`

---

## 📄 License

MIT © 2024 — free to use, modify, and distribute.

---

*Made with React + Recharts · Data by World Bank*
