"use client";

import Link from "next/link";
import { services } from "../servicesData";
import { Arrow } from "../Icons";

function SolutionIcon({ slug }: { slug: string }) {
  switch (slug) {
    case "ai-solutions":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="7" y="7" width="10" height="10" rx="2" />
          <rect x="10" y="10" width="4" height="4" rx="0.6" />
          <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
        </svg>
      );
    case "software-development":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="8 7 3 12 8 17" />
          <polyline points="16 7 21 12 16 17" />
          <line x1="14" y1="5" x2="10" y2="19" />
        </svg>
      );
    case "website-development":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3.6 9h16.8M3.6 15h16.8" />
          <ellipse cx="12" cy="12" rx="4.2" ry="9" />
        </svg>
      );
    case "app-development":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
          <line x1="10.5" y1="18" x2="13.5" y2="18" />
        </svg>
      );
    default:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m12 19 7-7 3 3-7 7-3-3z" />
          <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="m2 2 7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );
  }
}

export default function SolutionsSection() {
  return (
    <section className="sol-section" id="solutions">
      <div className="sol-head">
        <div className="svc-pill-badge">
          <span className="svc-pill-dot" />
          <span>Our Services</span>
        </div>
        <h2>
          Everything Your Business Needs to  <em>Go Digital</em>
        </h2>
        {/* <p className="lead">
          Explore our core engineering capabilities—from custom AI automation to full-stack platforms and mobile apps.
        </p> */}
      </div>

      <div className="sol-bento-grid">
        {services.map((service, idx) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="sol-card"
          >
            <div className="sol-card-top">
              <div className="sol-icon-box">
                <SolutionIcon slug={service.slug} />
              </div>
              <span className="sol-num">0{idx + 1}</span>
            </div>

            <h3 className="sol-title">{service.t}</h3>
            <p className="sol-desc">{service.p}</p>

            <span className="sol-link">
              <span>Explore service</span>
              <Arrow />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
