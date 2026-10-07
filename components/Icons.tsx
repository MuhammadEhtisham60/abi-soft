export const Ic = ({ d }: { d: string[] }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {d.map((p) => <path key={p} d={p} />)}
  </svg>
);

export const Arrow = () => <Ic d={["M5 12h14M13 6l6 6-6 6"]} />;
export const Back = () => <Ic d={["M19 12H5M11 6l-6 6 6 6"]} />;
export const Tick = () => <Ic d={["M5 12l5 5 9-10"]} />;

export const BrainIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-5.04Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-5.04Z"/>
    <circle cx="8" cy="8" r="1" fill="currentColor"/>
    <circle cx="16" cy="8" r="1" fill="currentColor"/>
    <circle cx="7" cy="13" r="1" fill="currentColor"/>
    <circle cx="17" cy="13" r="1" fill="currentColor"/>
    <path d="M8 8l4 3 4-3M7 13h5 5"/>
  </svg>
);

export const CodeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
);

export const WebIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#0284c7" strokeWidth="1.8" />
    <path d="M3.6 9h16.8M3.6 15h16.8" stroke="#0284c7" strokeWidth="1.6" />
    <ellipse cx="12" cy="12" rx="4.5" ry="9" stroke="#0284c7" strokeWidth="1.6" />
    <circle cx="16.5" cy="7.5" r="3.5" fill="#f0f9ff" stroke="#0284c7" strokeWidth="1.5" />
    <path d="M15 9l3-3" stroke="#0284c7" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="5.5" y="2.5" width="13" height="19" rx="3" fill="url(#phoneBodyGrad)" stroke="#38bdf8" strokeWidth="1.5" />
    <line x1="10" y1="5.5" x2="14" y2="5.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
    <defs>
      <linearGradient id="phoneBodyGrad" x1="5.5" y1="2.5" x2="18.5" y2="21.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38bdf8" />
        <stop offset="1" stopColor="#0284c7" />
      </linearGradient>
    </defs>
  </svg>
);

export const BrushIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="14" height="14" rx="2.5" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1.5" />
    <path d="m14 6 3.5 3.5m-3.5-3.5L9 11a2 2 0 0 0-.5 1.2V15h2.8c.45 0 .88-.18 1.2-.5L17.5 9.5m-3.5-3.5 2-2a1.8 1.8 0 0 1 2.5 2.5L17.5 9.5" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.5 14.5l2-2" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export const GlobeNetworkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

export const LayersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
);
