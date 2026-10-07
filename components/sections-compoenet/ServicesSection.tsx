"use client";

import Link from "next/link";
import { services } from "../servicesData";
import { CodeIcon, WebIcon, PhoneIcon, BrushIcon } from "../Icons";

const getServiceIcon = (slug: string) => {
  switch (slug) {
    case "software-development":
      return <CodeIcon />;
    case "website-development":
      return <WebIcon />;
    case "app-development":
      return <PhoneIcon />;
    case "graphics-ui-ux-design":
      return <BrushIcon />;
    default:
      return <CodeIcon />;
  }
};

export default function ServicesSection() {
  const ai = services.find((s) => s.big) || services[0];
  const otherServices = services.filter((s) => !s.big);

  return (
    <section className="svc-section-wrap" id="services">
      {/* Ambient background decoration */}
      <div className="svc-bg-ambient" aria-hidden="true">
        <div className="svc-dots svc-dots-tl" />
        <div className="svc-dots svc-dots-tr" />
        <div className="svc-ambient-glow" />
      </div>

      {/* Section Header */}
      <div className="svc-head">
        <div className="svc-pill-badge">
          <span>OUR SERVICES</span>
        </div>
        <h2>
          Everything Your Business Needs to <em>Go Digital</em>
        </h2>
        <p>
          From AI to app development, our technology team builds the tools, platforms and digital experiences that help businesses grow.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="svc-bento">
        {/* Left: AI Solutions featured card */}
        <Link href={`/services/${ai.slug}`} className="svc-ai-card">
          <div className="svc-ai-content">
            <h3 className="svc-ai-title">{ai.t}</h3>
            <p className="svc-ai-subtitle">{ai.p}</p>
            <p className="svc-ai-desc">{ai.desc}</p>

            <ul className="svc-ai-checklist">
              {ai.features?.map((f) => (
                <li key={f} className="svc-ai-check-item">
                  <span className="svc-ai-check-icon">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <span className="svc-ai-learn">
              Learn more <span className="svc-arrow">→</span>
            </span>
          </div>
        </Link>

        {/* Right: 2×2 grid of modern white cards */}
        <div className="svc-small-grid">
          {otherServices.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="svc-small-card">
              <div className="svc-small-top">
                <div className="svc-small-icon">{getServiceIcon(s.slug)}</div>
                <h3 className="svc-small-title">{s.t}</h3>
                <p className="svc-small-tagline">{s.p}</p>
                <div className="svc-tags-wrap">
                  {s.tags.map((tag) => (
                    <span key={tag} className="svc-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="svc-learn-btn">
                Learn more <span className="svc-arrow">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
