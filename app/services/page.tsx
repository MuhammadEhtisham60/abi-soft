import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/components/servicesData";
import { Arrow, PhoneIcon, Tick, LayersIcon, GlobeNetworkIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Our Services – Custom AI, Enterprise Software, Web & Mobile Engineering | Nexora",
  description:
    "Explore ABI Technologies & Digital Solutions full suite of digital services: Custom AI & Autonomous RAG, Bespoke SaaS & Enterprise Software, Next.js Web Platforms, iOS/Android Mobile Apps, and Figma UI/UX Design.",
};

// Category Icons mapping
function ServiceCategoryIcon({ slug }: { slug: string }) {
  if (slug === "ai-solutions") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    );
  }
  if (slug === "software-development") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    );
  }
  if (slug === "website-development") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    );
  }
  if (slug === "app-development") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    );
  }
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <div className="sv-page-wrapper">
      {/* Floating Navbar */}
      <Navbar activePage="services" />

      {/* ── 1. HERO SECTION ── */}
      <header className="sv-hero-container">
        <div className="sv-hero-content">
          {/* <div className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sv-sep">/</span>
            <span className="sv-current">Services</span>
          </div> */}

          {/* <div className="sv-category-badge">
            <span className="sv-badge-pulse-dot" />
            <span>FULL-SPECTRUM DIGITAL ENGINEERING</span>
          </div> */}

          <h1 className="sv-hero-title">
            End-to-End Technology &amp; Design Built for Scale.
          </h1>

          <p className="sv-hero-tagline">
            Smarter Technology. Deterministic Scale. Measurable Enterprise ROI.
          </p>
          <p className="sv-hero-desc">
            We partner with ambitious enterprises and high-growth brands to build proprietary AI workflows, bespoke SaaS platforms, high-converting websites, native mobile apps, and iconic UI/UX design systems.
          </p>

          <div className="sv-hero-actions">
            <Link href="/contact" className="hero-btn-primary sv-cta-main">
              Request a Project Quote <Arrow />
            </Link>
            <a className="hero-btn-secondary sv-cta-phone" href="tel:+15027135115">
              <PhoneIcon /> Call +1 (502) 713-5115
            </a>
          </div>

          {/* Stats Bar */}
          {/* <div className="sv-hero-stats-grid">
            <div className="sv-stat-card">
              <div className="sv-stat-val">100%</div>
              <div className="sv-stat-label">Code &amp; IP Ownership</div>
              <div className="sv-stat-sub">Zero vendor lock-in or recurring seat fees</div>
            </div>
            <div className="sv-stat-card">
              <div className="sv-stat-val">99.9%</div>
              <div className="sv-stat-label">Platform Reliability SLA</div>
              <div className="sv-stat-sub">High-availability cloud architectures</div>
            </div>
            <div className="sv-stat-card">
              <div className="sv-stat-val">5</div>
              <div className="sv-stat-label">Core Disciplines</div>
              <div className="sv-stat-sub">AI, Software, Web, Mobile &amp; Design</div>
            </div>
            <div className="sv-stat-card">
              <div className="sv-stat-val">2-Wk</div>
              <div className="sv-stat-label">Agile Sprint Delivery</div>
              <div className="sv-stat-sub">Continuous live demos &amp; rapid releases</div>
            </div>
          </div> */}
        </div>
      </header>

      {/* ── 2. SERVICES CATALOG DIRECTORY ── */}
      <main className="sv-body-light">
        <section className="sec" id="services-catalog" style={{ paddingTop: "60px" }}>
          <div className="head" style={{ maxWidth: "780px", margin: "0 auto 48px", textAlign: "center" }}>
            <div className="svc-pill-badge">
              <span>OUR SERVICE DIRECTORY</span>
            </div>
            <h2 style={{ fontSize: "clamp(30px, 3.8vw, 44px)", fontWeight: 800, color: "#0f172a", marginBottom: "14px" }}>
              Explore Our <span className="proc-title-blue">Core Capabilities</span>
            </h2>
            <p className="lead" style={{ color: "#64748b", fontSize: "16px", lineHeight: "1.6" }}>
              Every solution is custom-architected by senior engineers and designers to solve your specific operational challenges and drive measurable bottom-line growth.
            </p>
          </div>

          {/* Services Cards List */}
          <div className="services-catalog-grid" style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            {services.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <article
                  key={service.slug}
                  id={service.slug}
                  className="service-directory-card"
                  style={{
                    background: "#ffffff",
                    borderRadius: "24px",
                    border: "1px solid #e2e8f0",
                    padding: "36px",
                    boxShadow: "0 8px 30px rgba(15, 23, 42, 0.04)",
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "28px",
                    transition: "all 0.35s ease",
                  }}
                >
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px", alignItems: "center" }}>
                    {/* Left Info Column */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      {/* Badge & Number */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <div
                            style={{
                              width: "44px",
                              height: "44px",
                              borderRadius: "12px",
                              background: "#f0f7fe",
                              color: "#0284c7",
                              display: "grid",
                              placeItems: "center",
                              border: "1px solid rgba(2, 132, 199, 0.2)",
                            }}
                          >
                            <ServiceCategoryIcon slug={service.slug} />
                          </div>
                          <span
                            style={{
                              fontSize: "11px",
                              fontWeight: 700,
                              textTransform: "uppercase",
                              color: "#0284c7",
                              background: "#eff6ff",
                              border: "1px solid #bfdbfe",
                              padding: "4px 12px",
                              borderRadius: "999px",
                              letterSpacing: "0.04em",
                            }}
                          >
                            {service.category}
                          </span>
                        </div>
                        <span style={{ fontSize: "14px", fontWeight: 800, color: "#cbd5e1" }}>
                          0{index + 1}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <div>
                        <h3 style={{ fontSize: "26px", fontWeight: 800, color: "#0f172a", marginBottom: "6px", letterSpacing: "-0.015em" }}>
                          <Link href={`/services/${service.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                            {service.t}
                          </Link>
                        </h3>
                        <p style={{ fontSize: "14.5px", fontWeight: 600, color: "#0284c7" }}>
                          {service.p}
                        </p>
                      </div>

                      {/* Description */}
                      <p style={{ fontSize: "14.5px", lineHeight: "1.65", color: "#475569" }}>
                        {service.intro || service.desc}
                      </p>

                      {/* Key Highlights Checklist */}
                      {service.features && (
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "10px", marginTop: "6px" }}>
                          {service.features.slice(0, 4).map((feat) => (
                            <div key={feat} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: "#334155" }}>
                              <span style={{ color: "#0284c7", fontWeight: 800, flexShrink: 0 }}>✓</span>
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Chips */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "8px" }}>
                        {service.stack.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            style={{
                              fontSize: "11px",
                              fontWeight: 600,
                              color: "#475569",
                              background: "#f8fafc",
                              border: "1px solid #e2e8f0",
                              padding: "3px 10px",
                              borderRadius: "6px",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", marginTop: "12px" }}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="hero-btn-primary"
                          style={{
                            padding: "10px 22px",
                            fontSize: "13.5px",
                            borderRadius: "10px",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            textDecoration: "none",
                          }}
                        >
                          Explore Detailed Blueprint <Arrow />
                        </Link>
                        <Link
                          href={`/contact?service=${service.slug}`}
                          style={{
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "#0284c7",
                            textDecoration: "none",
                            padding: "10px 14px",
                          }}
                        >
                          Request Scope →
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Hero Metrics & Image Showcase */}
                    <div
                      style={{
                        background: "linear-gradient(135deg, #f8fafc 0%, #f0f7fe 100%)",
                        borderRadius: "18px",
                        border: "1px solid #e2e8f0",
                        padding: "24px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "18px",
                      }}
                    >
                      {/* Stat Highlights */}
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
                        {service.heroStats?.slice(0, 4).map((st) => (
                          <div
                            key={st.label}
                            style={{
                              background: "#ffffff",
                              borderRadius: "12px",
                              padding: "14px",
                              border: "1px solid rgba(226, 232, 240, 0.8)",
                              boxShadow: "0 2px 8px rgba(15, 23, 42, 0.02)",
                            }}
                          >
                            <div style={{ fontSize: "20px", fontWeight: 800, color: "#0284c7", letterSpacing: "-0.02em" }}>
                              {st.value}
                            </div>
                            <div style={{ fontSize: "12px", fontWeight: 700, color: "#0f172a", marginTop: "2px" }}>
                              {st.label}
                            </div>
                            {st.sub && (
                              <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>
                                {st.sub}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Perspective Snippet */}
                      {service.marketPerspective && (
                        <div
                          style={{
                            background: "rgba(255, 255, 255, 0.9)",
                            borderRadius: "12px",
                            padding: "16px",
                            border: "1px solid rgba(2, 132, 199, 0.2)",
                          }}
                        >
                          <small style={{ fontSize: "10.5px", fontWeight: 700, textTransform: "uppercase", color: "#0369a1", letterSpacing: "0.05em" }}>
                            Enterprise Advantage
                          </small>
                          <p style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", margin: "4px 0 2px" }}>
                            {service.marketPerspective.headline}
                          </p>
                          <p style={{ fontSize: "12px", color: "#64748b", lineHeight: "1.45" }}>
                            {service.marketPerspective.subheadline}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ── 3. CLIENT GUARANTEES & VALUE PILLARS ── */}
        <section className="sec" style={{ paddingTop: "20px", paddingBottom: "60px" }}>
          <div className="head" style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 40px" }}>
            <div className="svc-pill-badge">
              <span>OUR ENGAGEMENT PROMISE</span>
            </div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "#0f172a", marginBottom: "12px" }}>
              Enterprise Standards. <span className="proc-title-blue">Zero Surprises.</span>
            </h2>
            <p className="lead" style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.6" }}>
              Every engagement is backed by transparent contracts, US-based leadership, and strict quality assurance SLAs.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "18px",
                padding: "26px",
                boxShadow: "0 4px 16px rgba(15, 23, 42, 0.03)",
              }}
            >
              <div style={{ fontSize: "28px", marginBottom: "12px" }}>🛡️</div>
              <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>
                100% IP &amp; Code Ownership
              </h3>
              <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: "1.55" }}>
                You retain complete legal ownership of all source code, database schemas, and AI models. Zero proprietary vendor lock-in.
              </p>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "18px",
                padding: "26px",
                boxShadow: "0 4px 16px rgba(15, 23, 42, 0.03)",
              }}
            >
              <div style={{ fontSize: "28px", marginBottom: "12px" }}>⚡</div>
              <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>
                Fixed-Scope Agile Sprints
              </h3>
              <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: "1.55" }}>
                2-week milestone cycles with live staging previews, daily Slack communication, and guaranteed milestone deliverables.
              </p>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "18px",
                padding: "26px",
                boxShadow: "0 4px 16px rgba(15, 23, 42, 0.03)",
              }}
            >
              <div style={{ fontSize: "28px", marginBottom: "12px" }}>🔒</div>
              <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>
                Data Sovereignty &amp; NDA
              </h3>
              <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: "1.55" }}>
                Mutual NDA protection from day one. SOC2, HIPAA, and GDPR-compliant architecture deployed securely in your private cloud VPC.
              </p>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "18px",
                padding: "26px",
                boxShadow: "0 4px 16px rgba(15, 23, 42, 0.03)",
              }}
            >
              <div style={{ fontSize: "28px", marginBottom: "12px" }}>🤝</div>
              <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>
                US-Based Management
              </h3>
              <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: "1.55" }}>
                Registered in the USA with dedicated account executives accessible by phone and video across all US time zones.
              </p>
            </div>
          </div>
        </section>

        {/* ── 4. CALL TO ACTION BANNER ── */}
        <section className="sec" style={{ paddingTop: 0, paddingBottom: "90px" }}>
          <div
            style={{
              background: "linear-gradient(135deg, #0f172a 0%, #0369a1 100%)",
              borderRadius: "24px",
              padding: "48px 36px",
              color: "#ffffff",
              textAlign: "center",
              boxShadow: "0 20px 60px rgba(2, 132, 199, 0.25)",
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            <span
              style={{
                fontSize: "11.5px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#7dd3fc",
                background: "rgba(255, 255, 255, 0.12)",
                padding: "5px 14px",
                borderRadius: "999px",
                display: "inline-block",
                marginBottom: "18px",
              }}
            >
              Ready to Build?
            </span>
            <h2 style={{ fontSize: "clamp(28px, 3.8vw, 42px)", fontWeight: 900, marginBottom: "14px", color: "#ffffff" }}>
              Let’s Architect Your Next Breakthrough.
            </h2>
            <p style={{ fontSize: "16px", color: "#e0f2fe", maxWidth: "620px", margin: "0 auto 28px", lineHeight: "1.6" }}>
              Schedule a technical discovery session with our senior engineers to receive a fixed-scope proposal, timeline, and architectural blueprint.
            </p>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                className="hero-btn-primary"
                style={{
                  padding: "14px 34px",
                  fontSize: "15px",
                  fontWeight: 700,
                  borderRadius: "50px",
                  background: "#ffffff",
                  color: "#0369a1",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                  textDecoration: "none",
                }}
              >
                Schedule Technical Discovery <Arrow />
              </Link>
              <a
                href="tel:+15027135115"
                className="hero-btn-secondary"
                style={{
                  padding: "14px 28px",
                  fontSize: "14.5px",
                  fontWeight: 600,
                  borderRadius: "50px",
                  background: "rgba(255, 255, 255, 0.15)",
                  color: "#ffffff",
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  textDecoration: "none",
                }}
              >
                <PhoneIcon /> +1 (502) 713-5115
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
