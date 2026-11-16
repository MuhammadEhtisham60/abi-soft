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
  imageAlt: string;
  badge: string;
  titleLine1: string;
  titleHighlight: string;
  titleLine3: string;
  desc: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  shortLabel: string;
}

const SLIDE_DURATION_MS = 6500;

const heroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    image: "/images/slides/slide-1.webp",
    imageAlt: "Enterprise software engineers collaborating around cloud infrastructure dashboards",
    badge: "SCALABLE SOFTWARE • CLOUD-NATIVE",
    titleLine1: "BUILT TO SCALE,",
    titleHighlight: "FROM THE FIRST USER",
    titleLine3: "TO THE MILLION.",
    desc: "Reliable platforms, clean APIs, and scalable architectures designed to grow with your business.",
    primaryCtaText: "Explore Our Solutions",
    primaryCtaLink: "#services",
    secondaryCtaText: "Start a Project",
    secondaryCtaLink: "/contact",
    shortLabel: "Enterprise & Cloud",
  },
  {
    id: "slide-2",
    image: "/images/slides/slide-2.webp",
    imageAlt: "Modern software development workspace with web and mobile application interfaces",
    badge: "MOBILE & WEB APPLICATION DEVELOPMENT",
    titleLine1: "TURN YOUR IDEAS INTO",
    titleHighlight: "POWERFUL DIGITAL",
    titleLine3: "EXPERIENCES.",
    desc: "Beautiful, high-performance web and mobile applications designed to engage users and accelerate business growth.",
    primaryCtaText: "Explore Development",
    primaryCtaLink: "/services/app-development",
    secondaryCtaText: "Get Free Estimate",
    secondaryCtaLink: "/contact",
    shortLabel: "Web & Mobile Apps",
  },
  {
    id: "slide-3",
    image: "/images/slides/slide-3.webp",
    imageAlt: "Futuristic AI neural network, data visualization, and intelligent automation environment",
    badge: "AI • AUTOMATION • DIGITAL INNOVATION",
    titleLine1: "BUILD SMARTER.",
    titleHighlight: "AUTOMATE FASTER.",
    titleLine3: "GROW FURTHER.",
    desc: "Transform your business with intelligent AI solutions, automation, and data-driven digital innovation.",
    primaryCtaText: "Discover AI Solutions",
    primaryCtaLink: "/services/ai-solutions",
    secondaryCtaText: "Let's Talk",
    secondaryCtaLink: "/contact",
    shortLabel: "AI & Automation",
  },
];

export default function Home() {
  const stageRef = useRef<HTMLElement>(null);
  const bgWrapRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const slideBgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressFillRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const progressTweenRef = useRef<gsap.core.Tween | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(((index % heroSlides.length) + heroSlides.length) % heroSlides.length);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  // Scroll-linked subtle parallax for hero background
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !stageRef.current || !bgWrapRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(bgWrapRef.current, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: stageRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, stageRef);

    return () => ctx.revert();
  }, []);

  // Slide transition: background cinematic fade + zoom + sequential text/CTA entrance
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      slideBgRefs.current.forEach((el, idx) => {
        if (!el) return;
        const img = el.querySelector(".hero-slide-img");
        if (idx === currentSlide) {
          gsap.killTweensOf([el, img]);
          if (prefersReducedMotion) {
            gsap.set(el, { opacity: 1, zIndex: 2 });
            if (img) gsap.set(img, { scale: 1 });
          } else {
            gsap.fromTo(
              el,
              { opacity: 0, zIndex: 2 },
              { opacity: 1, duration: 0.9, ease: "power2.out" }
            );
            if (img) {
              gsap.fromTo(
                img,
                { scale: 1.08 },
                { scale: 1, duration: 6.5, ease: "power1.out" }
              );
            }
          }
        } else {
          gsap.killTweensOf(el);
          gsap.to(el, {
            opacity: 0,
            zIndex: 1,
            duration: prefersReducedMotion ? 0 : 0.75,
            ease: "power2.inOut",
          });
        }
      });

      if (!prefersReducedMotion && textColRef.current) {
        const badge = textColRef.current.querySelector(".hero-badge");
        const titleLines = textColRef.current.querySelectorAll(".hero-title-line");
        const desc = textColRef.current.querySelector(".hero-desc");
        const feat = textColRef.current.querySelector(".about-feat-item");
        const actions = textColRef.current.querySelector(".hero-actions");

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        if (badge) {
          tl.fromTo(
            badge,
            { opacity: 0, y: 14, scale: 0.94 },
            { opacity: 1, y: 0, scale: 1, duration: 0.45 }
          );
        }
        if (titleLines.length) {
          tl.fromTo(
            titleLines,
            { opacity: 0, y: 26 },
            { opacity: 1, y: 0, stagger: 0.09, duration: 0.65 },
            "-=0.25"
          );
        }
        if (desc) {
          tl.fromTo(
            desc,
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.55 },
            "-=0.4"
          );
        }
        if (feat) {
          tl.fromTo(
            feat,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.45 },
            "-=0.35"
          );
        }
        if (actions) {
          tl.fromTo(
            actions,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.45 },
            "-=0.3"
          );
        }
      }
    }, stageRef);

    return () => ctx.revert();
  }, [currentSlide]);

  // Progress bar animation & autoplay synchronized with hover pause/resume
  useEffect(() => {
    progressTweenRef.current?.kill();
    progressFillRefs.current.forEach((bar, idx) => {
      if (!bar) return;
      gsap.killTweensOf(bar);
      gsap.set(bar, { scaleX: idx < currentSlide ? 1 : 0 });
    });

    const activeBar = progressFillRefs.current[currentSlide];
    if (!activeBar) return;

    const tween = gsap.fromTo(
      activeBar,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: SLIDE_DURATION_MS / 1000,
        ease: "none",
        paused: isPaused,
        onComplete: () => {
          nextSlide();
        },
      }
    );

    progressTweenRef.current = tween;

    return () => {
      tween.kill();
    };
  }, [currentSlide, nextSlide]);

  // Pause / resume active progress tween on hover without resetting progress
  useEffect(() => {
    if (!progressTweenRef.current) return;
    if (isPaused) {
      progressTweenRef.current.pause();
    } else {
      progressTweenRef.current.play();
    }
  }, [isPaused]);

  // Touch / swipe gesture handlers for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > 45) {
      if (touchDeltaX.current < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

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
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        aria-roledescription="carousel"
        aria-label="ABI Technologies Featured Solutions"
      >
        {/* Background Slides with GSAP cross-fade & zoom */}
        <div className="hero-bg-wrap" ref={bgWrapRef} aria-hidden="true">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.id}
              ref={(el) => {
                slideBgRefs.current[idx] = el;
              }}
              className={`hero-slide-bg ${currentSlide === idx ? "active" : ""}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.image}
                alt={slide.imageAlt}
                className="hero-slide-img"
                loading={idx === 0 ? "eager" : "lazy"}
                fetchPriority={idx === 0 ? "high" : "auto"}
                decoding={idx === 0 ? "sync" : "async"}
              />
            </div>
          ))}
          <div className="hero-bg-overlay" />
        </div>

        {/* Hero Content Container */}
        <div className="hero-container">
          <div className="hero-text-col" ref={textColRef}>
            {/* Category Badge */}
            <div className="hero-badge">
              <span className="about-pill-dot" />
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
            <div className="about-feat-item" style={{ marginBottom: 24 }}>
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
              {active.primaryCtaLink.startsWith("#") ? (
                <a href={active.primaryCtaLink} className="hero-btn-primary">
                  {active.primaryCtaText}
                </a>
              ) : (
                <Link href={active.primaryCtaLink} className="hero-btn-primary">
                  {active.primaryCtaText}
                </Link>
              )}
              <Link href={active.secondaryCtaLink} className="hero-btn-secondary">
                {active.secondaryCtaText}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Slider Controls: 3 Progress Indicators + Prev/Next Arrows */}
        <div className="hero-controls-bar">
          <div className="hero-progress-indicators" role="tablist" aria-label="Hero Slide Indicators">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={currentSlide === idx}
                aria-label={`Slide ${idx + 1}: ${slide.shortLabel}`}
                className={`hero-progress-btn ${currentSlide === idx ? "active" : ""}`}
                onClick={() => goToSlide(idx)}
              >
                <span className="hero-progress-label">
                  0{idx + 1} · {slide.shortLabel}
                </span>
                <span className="hero-progress-track">
                  <span
                    className="hero-progress-fill"
                    ref={(el) => {
                      progressFillRefs.current[idx] = el;
                    }}
                  />
                </span>
              </button>
            ))}
          </div>

          <div className="hero-arrow-controls">
            <span className="hero-slide-counter" aria-live="polite">
              0{currentSlide + 1} / 0{heroSlides.length}
            </span>
            <button
              type="button"
              className="hero-arrow-btn"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              className="hero-arrow-btn"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </main>

      <Sections />
    </>
  );
}
