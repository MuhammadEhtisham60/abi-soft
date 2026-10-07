"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Arrow, Back, Ic, Tick, PhoneIcon, WebIcon, MapPinIcon } from "./Icons";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { services, type Service } from "./servicesData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServiceDetail({ service: s }: { service: Service }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<number>(0);
  const mail = `mailto:umar@abitechsolutions.com?subject=${encodeURIComponent("Project Enquiry: " + s.t)}`;
  const others = services.filter((x) => x.slug !== s.slug);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Banner Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".sv-nav-light", {
        y: -25,
        opacity: 0,
        duration: 0.7,
      })
        .from(
          ".sv-breadcrumb",
          {
            y: 15,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3"
        )
        .from(
          ".sv-category-tag",
          {
            y: 15,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3"
        )
        .from(
          ".sv-banner-title",
          {
            y: 30,
            opacity: 0,
            duration: 0.75,
          },
          "-=0.3"
        )
        .from(
          ".sv-banner-desc",
          {
            y: 20,
            opacity: 0,
            duration: 0.65,
          },
          "-=0.4"
        )
        .from(
          ".sv-banner-right",
          {
            x: 35,
            opacity: 0,
            duration: 0.85,
            ease: "power3.out",
          },
          "-=0.5"
        );

      // 2. Market Perspective Reveal
      gsap.from(".sv-market-card", {
        scrollTrigger: {
          trigger: ".sv-market-sec",
          start: "top 82%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });

      // 3. Core Pillars Cards
      gsap.from(".sv-pillar-card", {
        scrollTrigger: {
          trigger: ".sv-pillars-grid",
          start: "top 80%",
        },
        y: 45,
        opacity: 0,
        stagger: 0.15,
        duration: 0.85,
        ease: "power3.out",
      });

      // 4. Tech Categories
      gsap.from(".sv-tech-group", {
        scrollTrigger: {
          trigger: ".sv-tech-sec",
          start: "top 82%",
        },
        y: 35,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
      });

      // 5. Process Timeline
      gsap.from(".sv-process-step", {
        scrollTrigger: {
          trigger: ".sv-process-grid",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });

      // 6. Use Cases
      gsap.from(".sv-usecase-card", {
        scrollTrigger: {
          trigger: ".sv-usecases-grid",
          start: "top 82%",
        },
        y: 35,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });

      // 7. FAQs
      gsap.from(".faq details", {
        scrollTrigger: {
          trigger: ".faq",
          start: "top 82%",
        },
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "power2.out",
      });

      // 8. Bottom CTA Card
      gsap.from(".sv-contact-card", {
        scrollTrigger: {
          trigger: ".sv-contact-sec",
          start: "top 85%",
        },
        scale: 0.95,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [s.slug]);

  const serviceImage = s.image || "/images/service-tech-featured.jpg";

  return (
    <div className="sv-page-wrapper" ref={containerRef}>
      {/* Floating Pill Header Nav with Dropdown & Mobile Drawer */}
      <Navbar activePage="services" />

      {/* ── 1. SERVICE DETAIL BANNER (LIGHT BLUE THEME MATCHING SCREENSHOT) ── */}
      <header className="sv-banner-hero">
        {/* Banner Two-Column Content */}
        <div className="sv-banner-container">
          <div className="sv-banner-grid">
            
            {/* Left Column: Breadcrumbs + Category Tag + Title + 1-2 line description */}
            <div className="sv-banner-left">
              {/* Breadcrumb */}
              <div className="sv-breadcrumb">
                <Link href="/">Home</Link>
                <span className="sv-sep">/</span>
                <Link href="/#services">Services</Link>
                <span className="sv-sep">/</span>
                <span className="sv-current">{s.t}</span>
              </div>

              {/* Category tag with blue dot */}
              <div className="sv-category-tag">
                <span className="sv-category-dot" />
                <span>{s.category.toUpperCase()}</span>
              </div>

              {/* Service Title */}
              <h1 className="sv-banner-title">
                {s.t}
              </h1>

              {/* Detail below (just 1 to 2 lines) */}
              <p className="sv-banner-desc">
                {s.desc || s.p}
              </p>
            </div>

            {/* Right Column: Service Related Image */}
            <div className="sv-banner-right">
              <div className="sv-hero-banner-image-wrap">
                <div className="sv-banner-img-frame">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={serviceImage}
                    alt={s.t}
                    className="sv-hero-banner-image"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* ── 2. MAIN CONTENT BODY (LIGHT ENTERPRISE THEME) ── */}
      <div className="sv-body-light">
        {/* ── 2A. MARKET PERSPECTIVE & STRATEGIC VALUE SECTION ── */}
        <section className="sec sv-market-sec">
          <div className="head">
            <div className="svc-pill-badge">
              <span>MARKET PERSPECTIVE 2025–2026</span>
            </div>
            <h2>{s.marketPerspective.headline}</h2>
            <p className="lead">{s.marketPerspective.subheadline}</p>
          </div>

          <div className="sv-market-narrative-card">
            <p className="sv-market-desc-text">{s.marketPerspective.description}</p>
          </div>

          {/* Key Strategic Drivers Grid */}
          <div className="sv-market-drivers-grid">
            {s.marketPerspective.keyDrivers.map((driver, idx) => (
              <div key={idx} className="sv-market-card">
                <div className="sv-driver-header">
                  <span className="sv-driver-num">0{idx + 1}</span>
                  {driver.badge && <span className="sv-driver-pill">{driver.badge}</span>}
                </div>
                <h3>{driver.title}</h3>
                <p>{driver.desc}</p>
              </div>
            ))}
          </div>
<br></br>
          {/* ROI Highlights Banner */}
          <div className="sv-roi-banner">
            <div className="sv-roi-header">
              <span className="sv-roi-icon">⚡</span>
              <h4>Measurable Business Impact</h4>
            </div>
            <div className="sv-roi-grid">
              {s.marketPerspective.roiMetrics.map((roi, idx) => (
                <div key={idx} className="sv-roi-item">
                  <span className="sv-roi-metric">{roi.metric}</span>
                  <b>{roi.label}</b>
                  <small>{roi.detail}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 2B. CORE CAPABILITIES & DEEP SERVICE PILLARS ── */}
        <section className="sec sv-pillars-sec">
          <div className="head">
            <div className="svc-pill-badge">
              <span>CORE ARCHITECTURAL PILLARS</span>
            </div>
            <h2>Engineered for Scale, <em>Built for Performance</em></h2>
            <p className="lead">Comprehensive solutions designed to integrate cleanly with your business operations.</p>
          </div>

          <div className="sv-pillars-grid">
            {s.pillars.map((pillar, idx) => (
              <div key={idx} className="sv-pillar-card">
                <div className="sv-pillar-top">
                  <span className="sv-pillar-badge">{pillar.badge}</span>
                  <span className="sv-pillar-num">Pillar 0{idx + 1}</span>
                </div>
                <h3>{pillar.title}</h3>
                <p className="sv-pillar-tagline">{pillar.tagline}</p>
                <p className="sv-pillar-desc">{pillar.description}</p>

                {/* Feature Highlights */}
                <div className="sv-pillar-highlights">
                  <b>Key Capabilities:</b>
                  <ul>
                    {pillar.highlights.map((h, hIdx) => (
                      <li key={hIdx}>
                        <span className="sv-check">✓</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="sv-pillar-deliv-box">
                  <span className="sv-deliv-title">Included Deliverables:</span>
                  <div className="sv-deliv-tags">
                    {pillar.deliverables.map((deliv, dIdx) => (
                      <span key={dIdx} className="sv-deliv-chip">{deliv}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 2C. TECHNOLOGY ECOSYSTEM & INFRASTRUCTURE ── */}
        <section className="sec sv-tech-sec">
          <div className="head">
            <div className="svc-pill-badge">
              <span>TECHNOLOGY ECOSYSTEM</span>
            </div>
            <h2>Modern Technologies. <em>Zero Legacy Debt.</em></h2>
            <p className="lead">We engineer with battle-tested frameworks, modern clouds, and industry-standard protocols.</p>
          </div>

          <div className="sv-tech-grid">
            {s.techCategories.map((group, idx) => (
              <div key={idx} className="sv-tech-group">
                <div className="sv-tech-group-title">
                  <span className="sv-tech-dot" />
                  <h4>{group.category}</h4>
                </div>
                <div className="sv-tech-items-wrap">
                  {group.items.map((item, iIdx) => (
                    <div key={iIdx} className="sv-tech-item-chip">
                      <span className="sv-tech-name">{item.name}</span>
                      {item.tag && <span className="sv-tech-subtag">{item.tag}</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 2D. 4-STEP AGILE DELIVERY PROCESS ── */}
        {/* <section className="sec sv-process-sec">
          <div className="head">
            <div className="svc-pill-badge">
              <span>DELIVERY LIFECYCLE</span>
            </div>
            <h2>From Discovery to Cloud, <em>In Four Steps</em></h2>
            <p className="lead">A transparent, milestone-driven execution methodology with zero guesswork.</p>
          </div>

          <div className="sv-process-grid">
            {s.processSteps.map((step) => (
              <div key={step.step} className="sv-process-step">
                <div className="sv-step-header">
                  <div className="sv-step-badge">{step.step}</div>
                  <span className="sv-step-time">{step.timeframe}</span>
                </div>
                <div className="sv-step-phase">{step.phase}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>

                <div className="sv-step-milestones">
                  <b>Key Deliverables:</b>
                  <div className="sv-step-tags">
                    {step.deliverables.map((del, dIdx) => (
                      <span key={dIdx} className="proc-deliv-chip">{del}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* ── 2E. PROVEN USE CASES & REAL-WORLD SOLUTIONS ── */}
        {/* <section className="sec sv-usecases-sec">
          <div className="head">
            <div className="svc-pill-badge">
              <span>REAL-WORLD SOLUTIONS</span>
            </div>
            <h2>Measurable Impact <em>Across Industries</em></h2>
            <p className="lead">Explore how our engineering solves critical business challenges.</p>
          </div>

          <div className="sv-usecases-grid">
            {s.useCases.map((uc, idx) => (
              <div key={idx} className="sv-usecase-card">
                <div className="sv-uc-badge">{uc.badge}</div>
                <h3>{uc.industry}</h3>

                <div className="sv-uc-block">
                  <div className="sv-uc-label sv-red-label">The Challenge</div>
                  <p>{uc.challenge}</p>
                </div>

                <div className="sv-uc-block">
                  <div className="sv-uc-label sv-blue-label">Engineered Solution</div>
                  <p>{uc.solution}</p>
                </div>

                <div className="sv-uc-impact-box">
                  <div className="sv-uc-impact-label">Business Outcome</div>
                  <p>{uc.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* ── 2F. ENTERPRISE GUARANTEES & TRUST ── */}
        {/* <section className="sec sv-guarantees-sec">
          <div className="sv-guarantees-card">
            <div className="sv-guarantees-head">
              <h3>Enterprise Trust &amp; Commercial Guarantees</h3>
              <p>Transparent agreements, complete code ownership, and US-based accountability.</p>
            </div>
            <div className="sv-guarantees-grid">
              {s.guarantees.map((g, idx) => (
                <div key={idx} className="sv-guarantee-item">
                  <span className="sv-g-icon">🛡️</span>
                  <div>
                    <b>{g.title}</b>
                    <p>{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* ── 2G. FAQ ACCORDION ── */}
        <section className="sec sv-faq-sec">
          <div className="head">
            <div className="svc-pill-badge">
              <span>FAQ</span>
            </div>
            <h2>Technical &amp; Commercial <em>Questions Answered</em></h2>
            <p className="lead">Clear answers regarding code ownership, delivery timelines, pricing, and communication.</p>
          </div>

          <div className="faq">
            {s.faq.map(([q, a]) => (
              <details key={q}>
                <summary>
                  <span>{q}</span>
                  <span className="faq-chevron" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── 2H. READY TO BUILD? FOUNDER CONTACT BOX ── */}
        <section className="sec sv-contact-sec">
          <div className="contact-card sv-contact-card">
            <div className="contact-bg-glow" />

            <div className="contact-content">
              <div className="contact-pill-badge">
                <span className="contact-pill-dot" />
                <span>Let's Discuss Your Project</span>
              </div>
              <h2>
                Ready to engineer your <em>{s.t}?</em>
              </h2>
              <p>
                Schedule a confidential discovery call with Umar Darraz, Founder &amp; CEO. We will analyze your requirements and provide a clear, scoped architectural roadmap.
              </p>
              <div className="contact-actions">
                <a className="contact-btn-primary" href={mail}>
                  Start Your Project <Arrow />
                </a>
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
                  <b>umar@abitechsolutions.com</b>
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

        {/* ── 2I. EXPLORE COMPLEMENTARY SERVICES ── */}
        <section className="sec sv-more-sec" style={{ paddingTop: 0 }}>
          <div className="head" style={{ marginBottom: 36 }}>
            <div className="svc-pill-badge">
              <span>EXPLORE MORE</span>
            </div>
            <h2>Complementary <em>Digital Solutions</em></h2>
          </div>

          <div className="sv-other-grid">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="sv-other-card">
                <div className="sv-other-icon">
                  <Ic d={o.d} />
                </div>
                <h3 className="sv-other-title">{o.t}</h3>
                <p className="sv-other-tagline">{o.p}</p>
                <span className="svc-learn-btn">
                  Explore Service <span className="svc-arrow">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── FOOTER ── */}
        <Footer />
      </div>
    </div>
  );
}
