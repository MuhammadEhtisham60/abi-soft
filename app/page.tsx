"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Sections from "@/components/Sections";
import Navbar from "@/components/Navbar";
import { GlobeNetworkIcon } from "@/components/Icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroSlide {
  id: string;
  image: string;
  badge: string;
  flag: string;
  titleLine1: string;
  titleHighlight: string;
  titleLine3: string;
  desc: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  tooltip: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    image: "/images/slides/slide1.jpg",
    badge: "USA-BASED • SERVING CLIENTS WORLDWIDE",
    flag: "🇺🇸",
    titleLine1: "BUILDING THE",
    titleHighlight: "DIGITAL INFRASTRUCTURE",
    titleLine3: "OF TOMORROW.",
    desc: "AI-powered solutions, scalable software, and modern digital experiences engineered to help businesses grow, operate, and compete globally.",
    primaryCtaText: "Explore Our Solutions",
    primaryCtaLink: "#services",
    secondaryCtaText: "Start a Project",
    secondaryCtaLink: "/contact",
    tooltip: "Digital Infrastructure",
  },
  {
    id: "slide-2",
    image: "/images/slides/slide2.jpg",
    badge: "AI SOLUTIONS • USA-BASED",
    flag: "🇺🇸",
    titleLine1: "AUTOMATE THE",
    titleHighlight: "WORK THAT",
    titleLine3: "HOLDS YOU BACK.",
    desc: "Custom AI systems that handle repetitive tasks, surface insights from your data, and free your team to focus on the work that grows the business.",
    primaryCtaText: "Explore AI Solutions",
    primaryCtaLink: "/services/ai-solutions",
    secondaryCtaText: "Start a Project",
    secondaryCtaLink: "/contact",
    tooltip: "AI Solutions",
  },
  {
    id: "slide-3",
    image: "/images/slides/slide3.jpg",
    badge: "SCALABLE SOFTWARE • CLOUD-NATIVE",
    flag: "🇺🇸",
    titleLine1: "BUILT TO SCALE",
    titleHighlight: "FROM THE FIRST",
    titleLine3: "USER TO THE MILLION.",
    desc: "Reliable platforms, clean APIs, and architecture designed to grow with your traffic, so your product keeps working as your customers multiply.",
    primaryCtaText: "Explore Scalable Software",
    primaryCtaLink: "/services/software-development",
    secondaryCtaText: "Start a Project",
    secondaryCtaLink: "/contact",
    tooltip: "Scalable Software",
  },
];

export default function Home() {
  const stageRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  // Initial Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", {
        scale: 0.85,
        opacity: 0,
        y: 15,
        duration: 0.6,
        ease: "back.out(1.7)",
      })
        .from(
          ".hero-title-line",
          {
            y: 35,
            opacity: 0,
            stagger: 0.12,
            duration: 0.8,
          },
          "-=0.3"
        )
        .from(
          ".hero-desc",
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          ".hero-text-col .about-feat-item",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".hero-actions",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          ".hero-right-dots",
          {
            opacity: 0,
            x: 20,
            duration: 0.6,
          },
          "-=0.3"
        );
    }, stageRef);

    return () => ctx.revert();
  }, []);

  // Animate text transition when slide changes
  useEffect(() => {
    if (!textColRef.current) return;
    gsap.fromTo(
      textColRef.current.children,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power2.out" }
    );
  }, [currentSlide]);

  // Auto-play timer (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const active = heroSlides[currentSlide];

  return (
    <>
      {/* Floating Light Pill Navigation with Dropdown & Responsive Drawer */}
      <Navbar activePage="home" />

      <main
        className="hero-stage"
        ref={stageRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Slides with smooth cross-fade */}
        <div className="hero-bg-wrap" aria-hidden="true">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`hero-slide-bg ${currentSlide === idx ? "active" : ""}`}
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
          ))}
          <div className="hero-bg-overlay" />
        </div>

        {/* Concentric Ring Navigation Dots on Right Side */}
        <nav className="hero-right-dots" aria-label="Slide Navigation">
          {heroSlides.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              className={`hero-right-dot ${currentSlide === idx ? "active" : ""}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Slide ${idx + 1}: ${slide.tooltip}`}
              aria-current={currentSlide === idx ? "true" : undefined}
            >
              <span className="hero-dot-ring">
                <span className="hero-dot-core" />
              </span>
              <span className="hero-right-dot-tooltip">{slide.tooltip}</span>
            </button>
          ))}
        </nav>

        {/* Hero Content Container */}
        <div className="hero-container">
          <div className="hero-text-col" ref={textColRef}>
            {/* Category / Location Badge */}
            <div className="hero-badge">
              <span className="hero-flag">{active.flag}</span>
              <span>{active.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              <span className="hero-title-line">{active.titleLine1}</span>
              <span className="hero-title-line hero-highlight">{active.titleHighlight}</span>
              <span className="hero-title-line">{active.titleLine3}</span>
            </h1>

            {/* Subtitle / Description */}
            <p className="hero-desc">{active.desc}</p>

            {/* Worldwide Feature Item */}
            <div className="about-feat-item" style={{ marginBottom: 28 }}>
              <div className="about-feat-icon">
                <GlobeNetworkIcon />
              </div>
              <div className="about-feat-text">
                <b>Serving clients worldwide</b>
                <small>Remote-first delivery across every time zone</small>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="hero-actions">
              <a href={active.primaryCtaLink} className="hero-btn-primary">
                {active.primaryCtaText}
              </a>
              <Link href={active.secondaryCtaLink} className="hero-btn-secondary">
                {active.secondaryCtaText}
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Sections />
    </>
  );
}
