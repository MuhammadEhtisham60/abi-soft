"use client";

import { Arrow } from "../Icons";

// Process Step Illustrations
const DiscoverIllustration = () => (
  <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="process-illu illu-discover">
    <rect x="15" y="15" width="90" height="60" rx="14" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
    <circle cx="46" cy="40" r="11" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
    <path d="M37 57C37 51.5 41 47 46 47C51 47 55 51.5 55 57" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="68" cy="38" r="9" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1.5" />
    <path d="M61 53C61 49 64 45.5 68 45.5C72 45.5 75 49 75 53" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
    <g className="illu-lens">
      <circle cx="48" cy="36" r="18" fill="white" fillOpacity="0.6" stroke="#0284C7" strokeWidth="2.5" />
      <circle cx="48" cy="36" r="14" fill="url(#lens_grad)" />
      <path d="M61 49L76 64" stroke="#0284C7" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M61 49L76 64" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" />
    </g>
    <defs>
      <linearGradient id="lens_grad" x1="34" y1="22" x2="62" y2="50" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" stopOpacity="0.25" />
        <stop offset="1" stopColor="#0284C7" stopOpacity="0.05" />
      </linearGradient>
    </defs>
  </svg>
);

const DesignIllustration = () => (
  <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="process-illu illu-design">
    <rect x="12" y="14" width="96" height="64" rx="10" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
    <path d="M12 24H108" stroke="#F1F5F9" strokeWidth="1.5" />
    <circle cx="20" cy="19" r="2.2" fill="#0284C7" />
    <circle cx="26" cy="19" r="2.2" fill="#38BDF8" />
    <circle cx="32" cy="19" r="2.2" fill="#CBD5E1" />
    <rect x="20" y="30" width="38" height="38" rx="6" fill="#F8FAFC" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="3 3" />
    <rect x="64" y="30" width="36" height="18" rx="6" fill="url(#design_grad1)" />
    <rect x="64" y="52" width="36" height="16" rx="4" fill="#F1F5F9" />
    <circle cx="35" cy="45" r="5" fill="#38BDF8" className="illu-swatch1" />
    <circle cx="45" cy="52" r="5" fill="#0284C7" className="illu-swatch2" />
    <circle cx="30" cy="55" r="5" fill="#00C8FF" className="illu-swatch3" />
    <defs>
      <linearGradient id="design_grad1" x1="64" y1="30" x2="100" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
    </defs>
  </svg>
);

const BuildIllustration = () => (
  <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="process-illu illu-build">
    <rect x="42" y="12" width="66" height="52" rx="8" fill="#0F172A" />
    <path d="M42 22H108" stroke="#1E293B" strokeWidth="1" />
    <circle cx="48" cy="17" r="1.5" fill="#EF4444" />
    <circle cx="53" cy="17" r="1.5" fill="#F59E0B" />
    <circle cx="58" cy="17" r="1.5" fill="#10B981" />
    <rect x="48" y="28" width="18" height="3" rx="1.5" fill="#38BDF8" className="illu-code1" />
    <rect x="70" y="28" width="24" height="3" rx="1.5" fill="#0284C7" className="illu-code2" />
    <rect x="52" y="35" width="34" height="3" rx="1.5" fill="#10B981" className="illu-code3" />
    <rect x="52" y="42" width="22" height="3" rx="1.5" fill="#F59E0B" className="illu-code4" />
    <rect x="48" y="49" width="12" height="3" rx="1.5" fill="#38BDF8" />
    <rect x="14" y="34" width="42" height="42" rx="8" fill="url(#chip_bg)" stroke="#0284C7" strokeWidth="1.5" />
    <rect x="22" y="42" width="26" height="26" rx="5" fill="#0369A1" stroke="#38BDF8" strokeWidth="1" />
    <path d="M22 34V30M35 34V30M48 34V30" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
    <path d="M22 76V80M35 76V80M48 76V80" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 42H10M14 55H10M14 68H10" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
    <path d="M56 42H60M56 55H60M56 68H60" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
    <path d="M31 51H39M35 47V55" stroke="#E0F2FE" strokeWidth="2" strokeLinecap="round" className="illu-chip-core" />
    <defs>
      <linearGradient id="chip_bg" x1="14" y1="34" x2="56" y2="76" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0F172A" />
        <stop offset="1" stopColor="#1E293B" />
      </linearGradient>
    </defs>
  </svg>
);

const LaunchIllustration = () => (
  <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="process-illu illu-launch">
    <path d="M15 65 Q 40 60, 65 38 T 105 18" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 3" />
    <path d="M15 65 L 45 55 L 75 35 L 105 18" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
    <circle cx="45" cy="55" r="3" fill="#0284C7" />
    <circle cx="75" cy="35" r="3" fill="#0284C7" />
    <circle cx="105" cy="18" r="4" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.5" />
    <path d="M10 74C10 70 14 66 18 66C20 63 24 62 28 64C31 61 36 62 38 66C42 66 45 70 45 74H10Z" fill="#CBD5E1" opacity="0.6" />
    <path d="M25 78C25 74 29 70 34 70C36 67 41 66 45 68C48 65 54 66 56 70C60 70 64 74 64 78H25Z" fill="#E2E8F0" />
    <g transform="translate(48, 12) rotate(15)" className="illu-rocket">
      <path d="M16 42C16 48 10 54 10 54C10 54 18 51 20 45C22 51 30 54 30 54C30 54 24 48 24 42H16Z" fill="url(#flame_grad2)" />
      <path d="M20 6C20 6 30 18 30 32H10C10 18 20 6 20 6Z" fill="#0284C7" />
      <path d="M20 6C20 6 25 18 25 32H15C15 18 20 6 20 6Z" fill="#38BDF8" />
      <circle cx="20" cy="20" r="4" fill="#FFFFFF" stroke="#0369A1" strokeWidth="1.5" />
      <path d="M10 26L4 36H10V26Z" fill="#00C8FF" />
      <path d="M30 26L36 36H30V26Z" fill="#00C8FF" />
    </g>
    <path d="M85 10L86.5 13.5L90 15L86.5 16.5L85 20L83.5 16.5L80 15L83.5 13.5L85 10Z" fill="#38BDF8" />
    <path d="M20 25L21 27.5L23.5 28.5L21 29.5L20 32L19 29.5L16.5 28.5L19 27.5L20 25Z" fill="#0284C7" />
    <defs>
      <linearGradient id="flame_grad2" x1="20" y1="42" x2="20" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="1" stopColor="#0284C7" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const processSteps = [
  {
    num: 1,
    time: "Week 1",
    title: "Discover",
    desc: "We learn your goals, your users and your constraints before writing a line of code.",
    deliverables: ["Research", "Strategy", "Roadmap"],
    illustration: DiscoverIllustration,
  },
  {
    num: 2,
    time: "Weeks 2–3",
    title: "Design",
    desc: "Wireframes and polished UI that make the idea tangible and easy to approve.",
    deliverables: ["Wireframes", "UI/UX Kit", "Prototypes"],
    illustration: DesignIllustration,
  },
  {
    num: 3,
    time: "Weeks 4–7",
    title: "Build",
    desc: "Clean, scalable code with regular demos so you always see progress.",
    deliverables: ["Agile Sprints", "Clean Code", "QA Testing"],
    illustration: BuildIllustration,
  },
  {
    num: 4,
    time: "Week 8+",
    title: "Launch & grow",
    desc: "We ship, measure results and keep improving after go-live.",
    deliverables: ["Deployment", "Analytics", "Scaling"],
    illustration: LaunchIllustration,
  },
];

export default function ProcessSection() {
  return (
    <section className="sec proc-section" id="process" aria-label="How we work process">
      <div className="proc-head">
        <div className="proc-pill-badge">
          <span className="proc-pill-dot" />
          <span>How we work</span>
        </div>
        <h2>
          From idea to launch, <span className="proc-title-blue">in four steps</span>
        </h2>
      </div>

      <div className="proc-container">
        {/* SVG Connector Line */}
        <svg className="proc-conn-svg" viewBox="0 0 1000 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path className="proc-conn-line-bg" d="M 50 19 L 950 19" stroke="#E2E8F0" strokeWidth="2.5" strokeDasharray="6 6" />
          <path className="proc-conn-line-path" d="M 50 19 L 950 19" stroke="url(#proc_line_grad)" strokeWidth="3.5" strokeLinecap="round" />
          <defs>
            <linearGradient id="proc_line_grad" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="0.5" stopColor="#0284C7" />
              <stop offset="1" stopColor="#0099FF" />
            </linearGradient>
          </defs>
        </svg>

        {/* Cards Grid */}
        <ol className="proc-grid">
          {processSteps.map((step) => {
            const Illustration = step.illustration;
            return (
              <li className="proc-card" key={step.num}>
                {/* Top Row: Step Node & Time Chip */}
                <div className="proc-card-header">
                  <div className="proc-badge-wrap">
                    <div className="proc-badge-glow" />
                    <div className="proc-badge">{step.num}</div>
                  </div>
                  <span className="proc-time-chip">{step.time}</span>
                </div>

                {/* Illustration Visual */}
                <div className="proc-illu-wrap">
                  <Illustration />
                </div>

                {/* Text Content */}
                <h3 className="proc-card-title">{step.title}</h3>
                <p className="proc-card-desc">{step.desc}</p>

                {/* Deliverable Tag Chips */}
                <div className="proc-deliverables">
                  {step.deliverables.map((item) => (
                    <span key={item} className="proc-deliv-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </li>
            );
          })}
        </ol>

        {/* Slim CTA Row below cards */}
        <div className="proc-cta-row">
          <div className="proc-cta-text">
            <b>Ready to start your project?</b>
            <small>Transparent process, clear milestones, zero surprises.</small>
          </div>
          <div className="proc-cta-actions">
            <a href="#contact" className="proc-cta-btn-primary">
              Start your project <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
