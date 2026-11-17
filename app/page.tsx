"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Sections from "@/components/Sections";
import Navbar from "@/components/Navbar";
import { Arrow } from "@/components/Icons";
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

const SLIDE_DURATION_MS = 6000;

const heroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    image: "/images/slides/slide4.jpg",
    imageAlt: "Enterprise software engineers collaborating around cloud infrastructure dashboards",
    badge: "SCALABLE SOFTWARE • CLOUD-NATIVE",
    titleLine1: "Built to Scale,",
    titleHighlight: "From the First User",
    titleLine3: "to the Million.",
    desc: "Reliable platforms, clean APIs, and scalable architectures designed to grow with your business.",
    primaryCtaText: "Explore Our Solutions",
    primaryCtaLink: "#services",
    secondaryCtaText: "Start a Project",
    secondaryCtaLink: "/contact",
    shortLabel: "Enterprise & Cloud",
  },
  {
    id: "slide-2",
    image: "/images/slides/slide5.jpg",
    imageAlt: "Modern software development workspace with web and mobile application interfaces",
    badge: "MOBILE & WEB APPLICATION DEVELOPMENT",
    titleLine1: "Turn Your Ideas Into",
    titleHighlight: "Powerful Digital",
    titleLine3: "Experiences.",
    desc: "Beautiful, high-performance web and mobile applications designed to engage users and accelerate business growth.",
    primaryCtaText: "Explore Development",
    primaryCtaLink: "/services/app-development",
    secondaryCtaText: "Get Free Estimate",
    secondaryCtaLink: "/contact",
    shortLabel: "Web & Mobile Apps",
  },
  {
    id: "slide-3",
    image: "/images/slides/slide7.jpg",
    imageAlt: "Futuristic AI neural network, data visualization, and intelligent automation environment",
    badge: "AI • AUTOMATION • DIGITAL INNOVATION",
    titleLine1: "Build Smarter.",
    titleHighlight: "Automate Faster.",
    titleLine3: "Grow Further.",
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
  const prevSlideRef = useRef<number>(0);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayedSlide, setDisplayedSlide] = useState(0);
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

  // Subtle scroll-linked parallax on background
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

  // GSAP slide transition: seamless cross-dissolve (previous image stays solid underneath until new slide fades in)
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const prevIdx = prevSlideRef.current;
    const isInitial = prevIdx === currentSlide;

    const ctx = gsap.context(() => {
      slideBgRefs.current.forEach((el, idx) => {
        if (!el) return;
        const img = el.querySelector(".hero-slide-img");
        gsap.killTweensOf([el, img]);

        if (idx === currentSlide) {
          if (prefersReducedMotion || isInitial) {
            gsap.set(el, { opacity: 1, zIndex: 2 });
            if (img && !prefersReducedMotion) {
              gsap.fromTo(
                img,
                { scale: 1.07 },
                { scale: 1, duration: 6, ease: "power1.out" }
              );
            } else if (img) {
              gsap.set(img, { scale: 1 });
            }
          } else {
            gsap.fromTo(
              el,
              { opacity: 0, zIndex: 2 },
              {
                opacity: 1,
                duration: 0.9,
                ease: "power2.out",
                onComplete: () => {
                  const prevEl = slideBgRefs.current[prevIdx];
                  if (prevEl && prevIdx !== currentSlide) {
                    gsap.set(prevEl, { opacity: 0, zIndex: 0 });
                  }
                },
              }
            );
            if (img) {
              gsap.fromTo(
                img,
                { scale: 1.07 },
                { scale: 1, duration: 6, ease: "power1.out" }
              );
            }
          }
        } else if (idx === prevIdx && !isInitial && !prefersReducedMotion) {
          gsap.set(el, { opacity: 1, zIndex: 1 });
        } else {
          gsap.set(el, { opacity: 0, zIndex: 0 });
        }
      });

      prevSlideRef.current = currentSlide;
    }, stageRef);

    return () => ctx.revert();
  }, [currentSlide]);

  // Smooth text exit-then-swap when currentSlide changes
  useEffect(() => {
    if (displayedSlide === currentSlide) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !textColRef.current) {
      setDisplayedSlide(currentSlide);
      return;
    }

    const targets = [
      textColRef.current.querySelector(".hero-badge"),
      ...Array.from(textColRef.current.querySelectorAll(".hero-title-line")),
      textColRef.current.querySelector(".hero-desc"),
      ...Array.from(textColRef.current.querySelectorAll(".hero-actions > *")),
    ].filter(Boolean);

    gsap.killTweensOf(targets);
    const exitTween = gsap.to(targets, {
      opacity: 0,
      y: -12,
      stagger: 0.03,
      duration: 0.26,
      ease: "power2.in",
      onComplete: () => {
        setDisplayedSlide(currentSlide);
      },
    });

    return () => {
      exitTween.kill();
    };
  }, [currentSlide, displayedSlide]);

  // Smooth staggered text entrance whenever displayedSlide updates
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !textColRef.current) return;

    const ctx = gsap.context(() => {
      const badge = textColRef.current!.querySelector(".hero-badge");
      const titleLines = textColRef.current!.querySelectorAll(".hero-title-line");
      const desc = textColRef.current!.querySelector(".hero-desc");
      const buttons = textColRef.current!.querySelectorAll(".hero-actions > *");

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      if (badge) {
        tl.fromTo(
          badge,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.45 }
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
      if (buttons.length) {
        tl.fromTo(
          buttons,
          { opacity: 0, y: 16, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.08, duration: 0.5 },
          "-=0.35"
        );
      }
    }, textColRef);

    return () => ctx.revert();
  }, [displayedSlide]);

  // Autoplay (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

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

  const active = heroSlides[displayedSlide];

  return (
    <>
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
        aria-label="KoderFors Technologies Featured Solutions"
      >
        {/* Background Slides */}
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
                loading="eager"
                fetchPriority={idx === 0 ? "high" : "auto"}
                decoding={idx === 0 ? "sync" : "async"}
              />
            </div>
          ))}
          <div className="hero-bg-overlay" />
        </div>

        {/* Right-Side Vertical Dot Indicators */}
        <nav className="hero-side-dots" aria-label="Slide Navigation">
          {heroSlides.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              className={`hero-side-dot ${currentSlide === idx ? "active" : ""}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Slide ${idx + 1}: ${slide.shortLabel}`}
              aria-current={currentSlide === idx ? "true" : undefined}
            >
              <span className="hero-side-dot-tooltip">{slide.shortLabel}</span>
            </button>
          ))}
        </nav>

        {/* Left-Aligned Editorial Hero Content */}
        <div className="hero-container">
          <div className="hero-text-col" ref={textColRef}>
            <div className="hero-badge">
              <span>{active.badge}</span>
            </div>

            <h1 className="hero-title">
              <span className="hero-title-line">{active.titleLine1}</span>
              <span className="hero-title-line hero-highlight">{active.titleHighlight}</span>
              <span className="hero-title-line">{active.titleLine3}</span>
            </h1>

            <p className="hero-desc">{active.desc}</p>

            <div className="hero-actions">
              {active.primaryCtaLink.startsWith("#") ? (
                <a href={active.primaryCtaLink} className="hero-btn-primary">
                  <span>{active.primaryCtaText}</span>
                  <Arrow />
                </a>
              ) : (
                <Link href={active.primaryCtaLink} className="hero-btn-primary">
                  <span>{active.primaryCtaText}</span>
                  <Arrow />
                </Link>
              )}
              <Link href={active.secondaryCtaLink} className="hero-btn-secondary">
                {active.secondaryCtaText}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom-Center Scroll Indicator */}
        <a href="#services" className="hero-scroll-cue" aria-label="Scroll to services">
          <span>SCROLL</span>
          <span className="hero-scroll-line" aria-hidden="true" />
        </a>
      </main>

      <Sections />
    </>
  );
}



