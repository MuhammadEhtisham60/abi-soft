"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Sections from "@/components/Sections";
import { Arrow } from "@/components/Icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const stageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".sv-nav-light, .hero-nav", {
        y: -30,
        opacity: 0,
        duration: 0.8,
      })
        .from(".hero-badge", {
          scale: 0.85,
          opacity: 0,
          y: 15,
          duration: 0.6,
          ease: "back.out(1.7)",
        }, "-=0.4")
        .from(".hero-title-line", {
          y: 35,
          opacity: 0,
          stagger: 0.12,
          duration: 0.8,
        }, "-=0.3")
        .from(".hero-desc", {
          y: 20,
          opacity: 0,
          duration: 0.7,
        }, "-=0.5")
        .from(".hero-actions > *", {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
        }, "-=0.4");
    }, stageRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <main className="hero-stage" ref={stageRef}>
        {/* Background Image and Overlays */}
        <div className="hero-bg-wrap" aria-hidden="true">
          <div className="hero-bg-image" />
          <div className="hero-bg-overlay" />
        </div>

        {/* Floating Light Pill Navigation (Matching Service Detail page) */}
        <nav className="sv-nav-light" aria-label="Main Navigation">
          <Link href="/" className="hero-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/dark-logo.png" alt="ABI" className="hero-logo-img" style={{ height: 36, width: "auto" }} />
          </Link>

          <div className="sv-nav-center">
            <Link href="/" className="sv-nav-link sv-nav-link-active">
              <span>Home</span>
              <span className="sv-nav-active-bar" />
            </Link>
            <Link href="/#services" className="sv-nav-link">
              Services
            </Link>
            <Link href="/about" className="sv-nav-link">
              About
            </Link>
            <Link href="/contact" className="sv-nav-link">
              Contact
            </Link>
          </div>

          <div className="sv-nav-right">
            <Link className="sv-nav-cta-btn" href="/contact">
              Get Free Estimate <Arrow />
            </Link>
          </div>
        </nav>

        {/* Hero Content with hero.jpg background */}
        <div className="hero-container">
          <div className="hero-text-col">
            <div className="hero-badge">
              <span className="hero-flag">🇺🇸</span>
              <span>USA-BASED • SERVING CLIENTS WORLDWIDE</span>
            </div>

            <h1 className="hero-title">
              <span className="hero-title-line">BUILDING THE</span>
              <span className="hero-title-line hero-highlight">DIGITAL INFRASTRUCTURE</span>
              <span className="hero-title-line">OF TOMORROW.</span>
            </h1>

            <p className="hero-desc">
              AI-powered solutions, scalable software, and modern digital experiences engineered to help businesses grow, operate, and compete globally.
            </p>

            <div className="hero-actions">
              <a href="#services" className="hero-btn-primary">
                Explore Our Solutions
              </a>
              <Link href="/contact" className="hero-btn-secondary">
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Sections />
    </>
  );
}
