"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Sections from "@/components/Sections";
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

      tl.from(".hero-nav", {
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

        {/* Floating Pill Navigation */}
        <header className="hero-nav">
          <Link href="/" className="hero-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.png" alt="ABI" className="hero-logo-img" />
          </Link>

          <nav className="hero-nav-links">
            <a href="#services">Services</a>
            <Link href="/about">About Us</Link>
            <a href="#process">How We Work</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="hero-nav-right">
            <Link href="/contact" className="hero-nav-contact mr-2">Contact Us</Link>
          </div>
        </header>

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
              <a href="#contact" className="hero-btn-secondary">
                Start a Project
              </a>
            </div>
            
            <div className="hero-tags">
              AI • SOFTWARE • WEB • APPS • DIGITAL SOLUTIONS
            </div>
          </div>
        </div>
      </main>

      <Sections />
    </>
  );
}
