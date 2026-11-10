/*
  Illustrations génériques (cartes Expertise et projet phare), dessinées en SVG (aucune image à charger).
  Même univers que le visuel d'accueil : fond bleu nuit, traits lumineux indigo, violet et turquoise.
  Les couleurs sont fixes : le rendu est identique en thème clair et en thème sombre.
*/

const C = {
  bg: '#0a0b26',
  panel: '#15184a',
  line: '#5b63f5',
  violet: '#8b5cf6',
  light: '#b4bcff',
  teal: '#4fc9c0',
}

function Frame({ id, glowX, children }: { id: string; glowX: number; children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id={`${id}-glow`} cx={glowX} cy="90" r="170" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3a3fd0" stopOpacity="0.55" />
          <stop offset="1" stopColor={C.bg} stopOpacity="0" />
        </radialGradient>
        <pattern id={`${id}-grid`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="#fff" strokeOpacity="0.045" />
        </pattern>
      </defs>
      <rect width="320" height="180" fill={C.bg} />
      <rect width="320" height="180" fill={`url(#${id}-grid)`} />
      <rect width="320" height="180" fill={`url(#${id}-glow)`} />
      {children}
    </svg>
  )
}

/* 01 · Data Engineering : des sources convergent vers un entrepôt */
function PipelineVisual() {
  const sources = [45, 90, 135]
  const disks = [116, 92, 68]
  return (
    <Frame id="ev-pipe" glowX={240}>
      <defs>
        <linearGradient id="ev-pipe-flow" x1="0" x2="1">
          <stop offset="0" stopColor={C.line} />
          <stop offset="1" stopColor={C.light} />
        </linearGradient>
        <linearGradient id="ev-pipe-disk" x1="0" x2="1">
          <stop offset="0" stopColor="#2a2f9c" />
          <stop offset="0.5" stopColor="#5b63f5" />
          <stop offset="1" stopColor="#2a2f9c" />
        </linearGradient>
      </defs>
      {sources.map((y) => (
        <g key={y}>
          <path
            d={`M56 ${y} C104 ${y} 100 90 146 90`}
            fill="none"
            stroke="url(#ev-pipe-flow)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <rect x="30" y={y - 13} width="26" height="26" rx="6" fill={C.panel} stroke={C.line} strokeOpacity="0.7" />
          <path d={`M37 ${y - 4}h12M37 ${y + 1}h12M37 ${y + 6}h7`} stroke={C.light} strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="56" cy={y} r="2.5" fill="#fff" />
        </g>
      ))}
      <circle cx="160" cy="90" r="22" fill={C.line} fillOpacity="0.12" />
      <circle cx="160" cy="90" r="14" fill={C.panel} stroke={C.light} strokeWidth="1.5" />
      <path d="M154 90l4 4 8-8" fill="none" stroke={C.teal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M174 90H214" stroke={C.light} strokeWidth="2" strokeLinecap="round" strokeDasharray="1 6" />
      {disks.map((y) => (
        <g key={y}>
          <path d={`M218 ${y}v16a32 9 0 0 0 64 0v-16`} fill="url(#ev-pipe-disk)" />
          <ellipse cx="250" cy={y} rx="32" ry="9" fill="#8087ff" />
          <ellipse cx="250" cy={y} rx="32" ry="9" fill="none" stroke="#fff" strokeOpacity="0.35" />
          <circle cx="228" cy={y + 13} r="1.6" fill={C.teal} />
        </g>
      ))}
    </Frame>
  )
}

/* 02 · Analytics : série temporelle, tendance et projection */
function AnalyticsVisual() {
  const past = 'M28 130 L60 114 L92 121 L124 94 L156 101 L188 72 L220 80'
  const future = 'M220 80 L256 54 L292 40'
  return (
    <Frame id="ev-ana" glowX={200}>
      <defs>
        <linearGradient id="ev-ana-area" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={C.violet} stopOpacity="0.45" />
          <stop offset="1" stopColor={C.violet} stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ev-ana-line" x1="0" x2="1">
          <stop offset="0" stopColor={C.line} />
          <stop offset="1" stopColor={C.light} />
        </linearGradient>
      </defs>
      {[48, 82, 116, 150].map((y) => (
        <path key={y} d={`M28 ${y}H292`} stroke="#fff" strokeOpacity="0.09" strokeDasharray="2 5" />
      ))}
      <path d={`${past} L220 150 L28 150 Z`} fill="url(#ev-ana-area)" />
      <path d="M220 80 L256 40 L292 18 L292 62 L256 68 Z" fill={C.teal} fillOpacity="0.16" />
      <path d={past} fill="none" stroke="url(#ev-ana-line)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d={future} fill="none" stroke={C.teal} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 5" />
      <path d="M220 34V150" stroke="#fff" strokeOpacity="0.25" />
      <circle cx="220" cy="80" r="9" fill={C.light} fillOpacity="0.2" />
      <circle cx="220" cy="80" r="4.5" fill="#fff" />
      <circle cx="292" cy="40" r="3.5" fill={C.teal} />
      <rect x="28" y="24" width="54" height="7" rx="3.5" fill="#fff" fillOpacity="0.5" />
      <rect x="28" y="37" width="32" height="5" rx="2.5" fill="#fff" fillOpacity="0.2" />
    </Frame>
  )
}

/* 03 · Machine Learning : nuages de points segmentés et frontière de décision */
function ClusterVisual() {
  const groups = [
    {
      color: C.line,
      center: [84, 118],
      pts: [[62, 110], [74, 128], [80, 104], [90, 122], [98, 108], [104, 130], [70, 96], [92, 138], [110, 116]],
    },
    {
      color: C.violet,
      center: [158, 62],
      pts: [[138, 54], [150, 72], [156, 46], [166, 60], [174, 76], [180, 52], [146, 38], [168, 86], [186, 66]],
    },
    {
      color: C.teal,
      center: [244, 112],
      pts: [[222, 104], [234, 124], [240, 98], [250, 116], [258, 132], [264, 106], [230, 88], [252, 90], [270, 122]],
    },
  ]
  return (
    <Frame id="ev-ml" glowX={160}>
      <path d="M118 30 C128 80 150 104 196 112 C214 116 206 148 200 162" fill="none" stroke="#fff" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 5" />
      {groups.map(({ color, center, pts }) => (
        <g key={color}>
          <circle cx={center[0]} cy={center[1]} r="38" fill={color} fillOpacity="0.12" />
          <circle cx={center[0]} cy={center[1]} r="38" fill="none" stroke={color} strokeOpacity="0.45" strokeDasharray="2 4" />
          {pts.map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="3.2" fill={color} />
          ))}
          <path
            d={`M${center[0] - 5} ${center[1]}h10M${center[0]} ${center[1] - 5}v10`}
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      ))}
    </Frame>
  )
}

/* 04 · Business Intelligence : tableau de bord, barres et répartition */
function DashboardVisual() {
  const bars = [34, 52, 44, 68, 58, 86]
  const R = 30
  const circ = 2 * Math.PI * R
  return (
    <Frame id="ev-bi" glowX={110}>
      <rect x="24" y="22" width="166" height="136" rx="10" fill={C.panel} fillOpacity="0.75" stroke="#fff" strokeOpacity="0.12" />
      <rect x="38" y="36" width="46" height="7" rx="3.5" fill="#fff" fillOpacity="0.55" />
      <rect x="38" y="49" width="28" height="5" rx="2.5" fill="#fff" fillOpacity="0.2" />
      <path d="M38 142H176" stroke="#fff" strokeOpacity="0.18" />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={40 + i * 23}
          y={142 - h}
          width="14"
          height={h}
          rx="3"
          fill={i === bars.length - 1 ? C.teal : i % 2 ? C.violet : C.line}
        />
      ))}
      <rect x="202" y="22" width="94" height="88" rx="10" fill={C.panel} fillOpacity="0.75" stroke="#fff" strokeOpacity="0.12" />
      <g transform="rotate(-90 249 66)" fill="none" strokeWidth="11">
        <circle cx="249" cy="66" r={R} stroke="#fff" strokeOpacity="0.1" />
        <circle cx="249" cy="66" r={R} stroke={C.line} strokeDasharray={`${circ * 0.46} ${circ}`} />
        <circle cx="249" cy="66" r={R} stroke={C.violet} strokeDasharray={`${circ * 0.26} ${circ}`} strokeDashoffset={-circ * 0.48} />
        <circle cx="249" cy="66" r={R} stroke={C.teal} strokeDasharray={`${circ * 0.16} ${circ}`} strokeDashoffset={-circ * 0.76} />
      </g>
      <rect x="202" y="120" width="94" height="38" rx="10" fill={C.panel} fillOpacity="0.75" stroke="#fff" strokeOpacity="0.12" />
      <circle cx="216" cy="139" r="3.5" fill={C.teal} />
      <rect x="226" y="132" width="40" height="6" rx="3" fill="#fff" fillOpacity="0.55" />
      <rect x="226" y="143" width="56" height="4" rx="2" fill="#fff" fillOpacity="0.2" />
    </Frame>
  )
}

// Même ordre que la liste `expertise` de lib/portfolio-data.ts
export const expertiseVisuals = [PipelineVisual, AnalyticsVisual, ClusterVisual, DashboardVisual]

/* Projet phare : frontière efficiente, portefeuilles simulés et portefeuille retenu */
export function FrontierVisual() {
  const cloud = [
    [118, 128], [134, 112], [150, 126], [158, 100], [172, 118], [176, 138], [190, 96], [198, 122],
    [210, 82], [214, 108], [226, 132], [232, 94], [244, 78], [248, 112], [262, 90], [268, 126],
    [280, 70], [284, 104], [142, 140], [204, 142], [252, 140], [166, 84],
  ]
  return (
    <Frame id="ev-front" glowX={150}>
      <defs>
        <linearGradient id="ev-front-line" x1="0" x2="1">
          <stop offset="0" stopColor={C.violet} />
          <stop offset="1" stopColor={C.light} />
        </linearGradient>
      </defs>
      <path d="M34 22V156H296" fill="none" stroke="#fff" strokeOpacity="0.28" strokeLinecap="round" />
      {cloud.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="2.6" fill={C.line} fillOpacity="0.75" />
      ))}
      <path d="M34 123.6 L290 24.4" stroke={C.teal} strokeWidth="1.5" strokeDasharray="5 5" strokeLinecap="round" />
      <path
        d="M112 152 C70 118 100 72 290 50"
        fill="none"
        stroke="url(#ev-front-line)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="145.5" cy="80.4" r="13" fill={C.teal} fillOpacity="0.2" />
      <circle cx="145.5" cy="80.4" r="5" fill="#fff" />
      <circle cx="145.5" cy="80.4" r="5" fill="none" stroke={C.teal} strokeWidth="2" />
      <circle cx="95.4" cy="124.5" r="3.5" fill={C.violet} stroke="#fff" strokeOpacity="0.7" />
    </Frame>
  )
}
