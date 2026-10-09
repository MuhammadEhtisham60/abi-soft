"use client";

import { useEffect, useRef } from "react";
import Footer from "./Footer";
import {
  ServicesSection,
  AboutSection,
  DestinationCarousel,
  ProcessSection,
  FaqSection,
  ContactCtaSection,
} from "./sections-compoenet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Sections() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Services section header reveal
      gsap.from(".svc-head > *", {
        scrollTrigger: {
          trigger: ".svc-head",
          start: "top 85%",
        },
        y: 28,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
      });

      // Bento cards entrance
      gsap.from(".svc-ai-card", {
        scrollTrigger: {
          trigger: ".svc-bento",
          start: "top 82%",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        clearProps: "all",
      });

      gsap.from(".svc-small-card", {
        scrollTrigger: {
          trigger: ".svc-small-grid",
          start: "top 82%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        clearProps: "all",
      });

      // Background ambient glow floating animation
      gsap.to(".svc-ambient-glow", {
        x: -15,
        y: -10,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 2. About section & Digital Spire Visual
      gsap.from("#about .about-content > *", {
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from("#about .about-feat-item", {
        scrollTrigger: {
          trigger: "#about .about-features",
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from("#about .about-visual-wrapper", {
        scrollTrigger: {
          trigger: "#about .about-visual-wrapper",
          start: "top 85%",
        },
        scale: 0.94,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // 3. Process section animation (immediate, smooth entrance)
      const procSection = containerRef.current?.querySelector("#process");
      if (procSection) {
        const procCards = procSection.querySelectorAll(".proc-card-wrapper");
        const connTree = procSection.querySelector(".proc-conn-tree");
        const ctaWrap = procSection.querySelector(".proc-cta-wrap");

        // Header reveals immediately
        gsap.from("#process .proc-head > *", {
          scrollTrigger: {
            trigger: procSection,
            start: "top 92%",
            once: true,
          },
          y: 20,
          opacity: 0,
          stagger: 0.08,
          duration: 0.45,
          ease: "power2.out",
        });

        // Connecting tree fade in
        if (connTree) {
          gsap.from(connTree, {
            scrollTrigger: {
              trigger: procSection,
              start: "top 90%",
              once: true,
            },
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        }

        // Cards animate IMMEDIATELY without waiting for previous animations
        gsap.from(procCards, {
          scrollTrigger: {
            trigger: procSection,
            start: "top 90%",
            once: true,
          },
          y: 22,
          opacity: 0,
          stagger: 0.06,
          duration: 0.45,
          ease: "power2.out",
          clearProps: "all",
        });

        if (ctaWrap) {
          gsap.from(ctaWrap, {
            scrollTrigger: {
              trigger: procSection,
              start: "top 85%",
              once: true,
            },
            y: 15,
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            clearProps: "all",
          });
        }
      }

      // 4. FAQ section
      gsap.from("#faq .faq-wrap > div:first-child > *", {
        scrollTrigger: {
          trigger: "#faq",
          start: "top 80%",
        },
        y: 25,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from("#faq .faq details", {
        scrollTrigger: {
          trigger: "#faq .faq",
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: "power2.out",
      });

      // 5. Contact CTA Box
      gsap.from("#contact .contact-card", {
        scrollTrigger: {
          trigger: "#contact",
          start: "top 80%",
        },
        scale: 0.96,
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from("#contact .contact-info-card", {
        scrollTrigger: {
          trigger: "#contact .contact-info-grid",
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="light" ref={containerRef}>
      {/* <ServicesSection /> */}
      <DestinationCarousel />
      <AboutSection />
      <ProcessSection />
      <FaqSection />
      <ContactCtaSection />
      <Footer />
    </div>
  );
}
