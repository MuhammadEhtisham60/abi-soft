"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allProjects, type ProjectCaseStudy } from "@/components/projectsData";
import { Arrow, PhoneIcon, WebIcon, MapPinIcon } from "@/components/Icons";

const filterCategories = [
  "All Projects",
  "Artificial Intelligence & RAG",
  "Enterprise SaaS & ERP",
  "Luxury Hospitality & Travel",
  "EdTech & GovTech",
] as const;

export default function CaseStudyClient() {
  const [activeFilter, setActiveFilter] = useState<string>("All Projects");
  const mail = "mailto:mzleodye75@gmail.com?subject=Case%20Study%20Architecture%20Inquiry";

  const filteredProjects =
    activeFilter === "All Projects"
      ? allProjects
      : allProjects.filter((p) => p.serviceCategory === activeFilter);

  return (
    <div className="cs-hub-wrapper">
      {/* Floating Header Navigation */}
      <Navbar activePage="case-study" />

      {/* ── 1. CASE STUDY HERO BANNER ── */}
      <header className="cs-hero-container">
        <div className="cs-hero-inner">
          {/* Breadcrumb */}
          <div className="sv-breadcrumb" style={{ justifyContent: "center", marginBottom: 18 }}>
            <Link href="/">Home</Link>
            <span className="sv-sep">/</span>
            <span className="sv-current">Case Studies</span>
          </div>

          {/* Badge */}
          <div className="cs-badge">
            <span className="cs-badge-dot" />
            <span>AUTHENTIC FULL-STACK EVIDENCE • ZERO UNSUBSTANTIATED CLAIMS</span>
          </div>

          {/* Main Title */}
          <h1 className="cs-hero-title">
            Enterprise Architectures <em>Verified in Production.</em>
          </h1>

          {/* Description */}
          <p className="cs-hero-desc">
            Explore deep-dive technical case studies across dual-database ERPs, RAG legal intelligence, multi-tenant SaaS engines, and high-concurrency luxury mobility systems engineered by ABI Technologies.
          </p>

          {/* Metrics Row */}
          <div className="cs-metrics-row">
            <div className="cs-metric-card">
              <div className="cs-metric-val">9+</div>
              <div className="cs-metric-lbl">Production Platforms Built</div>
            </div>
            <div className="cs-metric-card">
              <div className="cs-metric-val">100%</div>
              <div className="cs-metric-lbl">Client Code &amp; IP Ownership</div>
            </div>
            <div className="cs-metric-card">
              <div className="cs-metric-val">&lt; 50ms</div>
              <div className="cs-metric-lbl">Optimized DB Query Latency</div>
            </div>
            <div className="cs-metric-card">
              <div className="cs-metric-val">USA</div>
              <div className="cs-metric-lbl">Based Leadership &amp; Delivery</div>
            </div>
          </div>
        </div>
      </header>

      {/* ── 2. INTERACTIVE CATEGORY FILTER ── */}
      <section className="cs-filter-sec">
        <div className="cs-filter-bar" role="tablist" aria-label="Filter case studies by industry">
          {filterCategories.map((cat) => {
            const count =
              cat === "All Projects"
                ? allProjects.length
                : allProjects.filter((p) => p.serviceCategory === cat).length;
            const isActive = activeFilter === cat;

            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`cs-filter-btn ${isActive ? "active" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
                <span className="cs-filter-count">{count}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ── 3. CASE STUDIES PROJECT CARDS ── */}
      <main className="sv-projects-sec" style={{ paddingTop: 30 }}>
        <div className="sv-projects-list">
          {filteredProjects.map((proj, idx) => (
            <article key={proj.id} className="sv-project-card" id={proj.id}>
              {/* Card Top Header */}
              <div className="sv-project-card-top">
                <div className="sv-project-meta-badges">
                  <span className="sv-project-num">Case Study 0{idx + 1}</span>
                  <span className="sv-project-cat-pill">{proj.category}</span>
                </div>
                <div className="sv-project-tags" style={{ margin: 0 }}>
                  <span className="sv-project-tag-pill" style={{ background: "#ebf2fa", color: "#064789", borderColor: "#c5d9eb" }}>
                    Verified Production Codebase
                  </span>
                </div>
              </div>

              {/* Title & Preview */}
              <h2 className="sv-project-card-title">{proj.title}</h2>
              <p className="sv-project-card-desc">{proj.shortDesc}</p>

              {/* Technical Overview Box */}
              <div className="sv-project-overview-box">
                <h3 className="sv-project-subhead">Architecture &amp; Operational Overview</h3>
                <p>{proj.overview}</p>
              </div>

              {/* Key Implemented Features */}
              <div className="sv-project-features-block">
                <h3 className="sv-project-subhead">Key Implemented Features</h3>
                <div className="sv-project-features-grid">
                  {proj.features.map((feat, fIdx) => (
                    <div key={fIdx} className="sv-project-feat-item">
                      <span className="sv-project-check">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Matrix */}
              <div className="sv-project-stack-wrap">
                <h3 className="sv-project-subhead">Verified Technology Stack &amp; Infrastructure</h3>
                <div className="sv-project-stack-grid">
                  {proj.techStack.frontend && (
                    <div className="sv-stack-col">
                      <span className="sv-stack-label">Frontend &amp; UI Architecture</span>
                      <span className="sv-stack-val">{proj.techStack.frontend}</span>
                    </div>
                  )}
                  {proj.techStack.backend && (
                    <div className="sv-stack-col">
                      <span className="sv-stack-label">Backend &amp; API Logic</span>
                      <span className="sv-stack-val">{proj.techStack.backend}</span>
                    </div>
                  )}
                  {proj.techStack.databaseStorage && (
                    <div className="sv-stack-col">
                      <span className="sv-stack-label">Databases &amp; Cloud Storage</span>
                      <span className="sv-stack-val">{proj.techStack.databaseStorage}</span>
                    </div>
                  )}
                  {proj.techStack.integrations && (
                    <div className="sv-stack-col">
                      <span className="sv-stack-label">Integrations &amp; Protocol Gateway</span>
                      <span className="sv-stack-val">{proj.techStack.integrations}</span>
                    </div>
                  )}
                  {proj.techStack.asyncRealtime && (
                    <div className="sv-stack-col">
                      <span className="sv-stack-label">Async Workers &amp; WebSockets</span>
                      <span className="sv-stack-val">{proj.techStack.asyncRealtime}</span>
                    </div>
                  )}
                  {proj.techStack.devops && (
                    <div className="sv-stack-col">
                      <span className="sv-stack-label">DevOps &amp; Cloud Deployment</span>
                      <span className="sv-stack-val">{proj.techStack.devops}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Tags & Action Bar */}
              <div className="sv-project-footer">
                <div className="sv-project-tags">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="sv-project-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="sv-project-actions">
                  <Link href={`/case-study/${proj.id}`} className="sv-proj-btn-primary">
                    View Full Case Study <Arrow />
                  </Link>
                  <a href={mail} className="sv-proj-btn-outline">
                    Inquire Architecture
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* ── 4. BOTTOM FOUNDER CONTACT CTA ── */}
      <section className="sec sv-contact-sec" style={{ paddingTop: 20 }}>
        <div className="contact-card sv-contact-card">
          <div className="contact-bg-glow" />

          <div className="contact-content">
            <div className="contact-pill-badge">
              <span className="contact-pill-dot" />
              <span>Direct Founder Consultation</span>
            </div>
            <h2>
              Ready to engineer your <em>next breakthrough system?</em>
            </h2>
            <p>
              Schedule a confidential discovery call directly with Umar Darraz, Founder &amp; CEO. We analyze your technical scope, evaluate infrastructure tradeoffs, and provide a fixed-scope architectural blueprint.
            </p>
            <div className="contact-actions">
              <Link className="contact-btn-primary" href="/contact">
                Start Your Project <Arrow />
              </Link>
              <a className="contact-btn-secondary" href="tel:+15027135115">
                Call +1 (502) 713-5115
              </a>
            </div>
          </div>

          <div className="contact-info-grid">
            <a className="contact-info-card" href="tel:+15027135115">
              <div className="contact-info-icon">
                <PhoneIcon />
              </div>
              <div className="contact-info-text">
                <small>Direct Line</small>
                <b>+1 (502) 713-5115</b>
              </div>
            </a>

            <a className="contact-info-card" href={mail}>
              <div className="contact-info-icon">
                <WebIcon />
              </div>
              <div className="contact-info-text">
                <small>Direct Email</small>
                <b>mzleodye75@gmail.com</b>
              </div>
            </a>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <MapPinIcon />
              </div>
              <div className="contact-info-text">
                <small>Global Presence</small>
                <b>USA-Based, Serving Clients Worldwide</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

