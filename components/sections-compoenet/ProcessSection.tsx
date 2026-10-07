"use client";

import React, { useState, useEffect, useRef } from "react";

// Process Steps Data (from Algoritx UpgradeBusiness)
export const upgradeBusinessData = {
  badge: "Enterprise Software Development",
  heading: "How We Work",
  subheading: "Upgrade Your Business. Safely. Strategically. On Schedule.",
  description:
    "A great outcome begins with a great process. Here's exactly how we take your idea from conversation to production without chaos, rework, or surprises.",
  items: [
    {
      num: "01",
      title: "Discovery",
      subtitle: "We Listen Before We Build",
      description:
        "We align goals, requirements, constraints, and success metrics upfront.",
      deliverable:
        "Signed-off project scope, technical requirements document, risk register.",
      icon: "laptop",
    },
    {
      num: "02",
      title: "Blueprint",
      subtitle: "Clarity Before Code",
      description:
        "We define scope, architecture, timelines, risks, and delivery milestones.",
      deliverable:
        "System architecture diagrams, Figma prototypes, approved design system.",
      icon: "scan",
    },
    {
      num: "03",
      title: "Engineering",
      subtitle: "Engineering With Precision",
      description:
        "We build, test, and iterate through structured sprint based execution.",
      deliverable:
        "Staged releases, weekly sprint reports, automated test coverage above 80%.",
      icon: "network",
      highlighted: true,
    },
    {
      num: "04",
      title: "Launch",
      subtitle: "Launch Confidently. Operate Reliably.",
      description:
        "We deploy, monitor, optimize, and ensure full production readiness.",
      deliverable:
        "Live production environment, monitoring dashboards, runbook, 30-day support SLA.",
      icon: "gear",
    },
    {
      num: "05",
      title: "Evolution",
      subtitle: "Rigorous QA & Security",
      description:
        "We deliver maintenance, enhancements, and continuous improvement cycles.",
      deliverable:
        "Complete test suite, performance benchmarks, and QA sign-off.",
      icon: "testing",
    },
  ],
};

// Process Icons
function UBIcon({ kind }: { kind: string }) {
  const sxProps = { width: 38, height: 38, display: "block" };

  if (kind === "laptop")
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={sxProps}
      >
        <path d="M8 12h28a2 2 0 0 1 2 2v18H6V14a2 2 0 0 1 2-2Z" />
        <path d="M2 36h44" />
        <path d="M16 26l3-3 3 3 5-5 4 4" />
        <path d="M16 18h6" />
      </svg>
    );

  if (kind === "scan")
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={sxProps}
      >
        <rect x="6" y="8" width="28" height="22" rx="2" />
        <path d="M12 14h12M12 18h6M12 22h10" />
        <circle cx="32" cy="32" r="6" />
        <path d="m38 38 4 4" />
      </svg>
    );

  if (kind === "network")
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={sxProps}
      >
        <circle cx="24" cy="24" r="6" />
        <circle cx="24" cy="8" r="4" />
        <circle cx="24" cy="40" r="4" />
        <circle cx="8" cy="16" r="4" />
        <circle cx="40" cy="16" r="4" />
        <circle cx="8" cy="32" r="4" />
        <circle cx="40" cy="32" r="4" />
        <path d="M24 12v6M24 30v6M19 20l-8-2M29 20l8-2M19 28l-8 2M29 28l8 2" />
      </svg>
    );

  if (kind === "gear")
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={sxProps}
      >
        <circle cx="24" cy="24" r="5" />
        <path d="M24 6v6M24 36v6M6 24h6M36 24h6M11 11l4 4M33 33l4 4M11 37l4-4M33 15l4-4" />
      </svg>
    );

  if (kind === "testing")
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={sxProps}
      >
        <path d="M42 20v19a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4h20" />
        <path d="m16 20 8 8 16-16" />
      </svg>
    );

  return null;
}

// Single Process Card Component
interface UBCardProps {
  item: (typeof upgradeBusinessData.items)[0];
  isActive: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

function UBCard({ item, isActive, onHoverStart, onHoverEnd }: UBCardProps) {
  const [hovered, setHovered] = useState(false);
  const isCurrentlyActive = hovered || isActive;

  return (
    <div
      className={`proc-card-wrapper ${isCurrentlyActive ? "active" : ""}`}
      onMouseEnter={() => {
        setHovered(true);
        onHoverStart?.();
      }}
      onMouseLeave={() => {
        setHovered(false);
        onHoverEnd?.();
      }}
    >
      <div className={`proc-card ${isCurrentlyActive ? "active" : ""}`}>
        <div className="proc-card-top">
          <div className="proc-card-icon">
            <UBIcon kind={item.icon} />
          </div>
          <span className="proc-card-num">{item.num}</span>
        </div>
        <h3 className="proc-card-title">{item.title}</h3>
        <p className="proc-card-desc">{item.description}</p>
      </div>
    </div>
  );
}

export default function ProcessSection({
  autoAnimate = true,
  ctaHref = "#contact",
}: {
  autoAnimate?: boolean;
  ctaHref?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInViewRef = useRef(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const items = upgradeBusinessData.items;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!autoAnimate) return;

    const timer = setInterval(() => {
      if (!isInViewRef.current || isPaused) return;
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 1500);

    return () => clearInterval(timer);
  }, [items.length, autoAnimate, isPaused]);

  // Mobile scroll handler
  const handleScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, clientWidth } = trackRef.current;
    if (clientWidth > 0) {
      const newIndex = Math.round(scrollLeft / clientWidth);
      setCurrentSlide(newIndex);
    }
  };

  const scrollToSlide = (index: number) => {
    if (!trackRef.current) return;
    const clientWidth = trackRef.current.clientWidth;
    trackRef.current.scrollTo({
      left: index * clientWidth,
      behavior: "smooth",
    });
    setCurrentSlide(index);
  };

  return (
    <section
      ref={sectionRef}
      className="sec proc-section"
      id="process"
      aria-label="How we work process"
    >
      {/* Header */}
      <div className="proc-head">
        <div className="proc-pill-badge">
          <span className="proc-pill-dot" />
          <span>{upgradeBusinessData.badge}</span>
        </div>
        <h2>{upgradeBusinessData.heading}</h2>
      </div>

      <div className="proc-container">
        {/* Connector Tree (SVG for Desktop) */}
        <div className="proc-conn-tree" aria-hidden="true">
          <svg
            viewBox="0 0 1000 64"
            preserveAspectRatio="none"
            style={{ position: "absolute", inset: 0, height: "100%", width: "100%" }}
            fill="none"
            stroke="rgba(209, 213, 219, 0.5)"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M 500 0 L 500 64" />
            <path d="M 500 18 Q 500 28 490 28 L 110 28 Q 100 28 100 38 L 100 64" />
            <path d="M 500 18 Q 500 28 490 28 L 310 28 Q 300 28 300 38 L 300 64" />
            <path d="M 500 18 Q 500 28 510 28 L 690 28 Q 700 28 700 38 L 700 64" />
            <path d="M 500 18 Q 500 28 510 28 L 890 28 Q 900 28 900 38 L 900 64" />
          </svg>
        </div>

        {/* Desktop & Tablet Cards Grid */}
        <ol className="proc-grid">
          {items.map((it, i) => (
            <li key={it.num} style={{ listStyle: "none" }}>
              <UBCard
                item={it}
                isActive={autoAnimate && i === activeIndex}
                onHoverStart={() => setIsPaused(true)}
                onHoverEnd={() => setIsPaused(false)}
              />
            </li>
          ))}
        </ol>

        {/* Mobile Swipeable Carousel */}
        <div className="proc-mobile-carousel">
          <div
            className="proc-mobile-track"
            ref={trackRef}
            onScroll={handleScroll}
          >
            {items.map((it) => (
              <div key={it.num} className="proc-mobile-slide">
                <UBCard item={it} isActive={false} />
              </div>
            ))}
          </div>

          <div className="proc-mobile-dots">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slide ${i + 1}`}
                onClick={() => scrollToSlide(i)}
                className={`proc-mobile-dot ${i === currentSlide ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
