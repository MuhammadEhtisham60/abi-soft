"use client";

import { useEffect, useRef } from "react";
import Footer from "./Footer";
import {
  SolutionsSection,
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
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Our Services Carousel (#services) — header then showcase container
      const servicesSection = containerRef.current?.querySelector("#services");
      if (servicesSection) {
        const svcChildren = Array.from(servicesSection.children);
        const svcHeader = svcChildren[0]?.children;
        const svcShowcase = svcChildren[1];

        const svcTl = gsap.timeline({
          scrollTrigger: {
            trigger: servicesSection,
            start: "top 84%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        });

        if (svcHeader?.length) {
          svcTl.from(svcHeader, {
            y: 26,
            opacity: 0,
            stagger: 0.12,
            duration: 0.7,
            clearProps: "transform,opacity",
          });
        }
        if (svcShowcase) {
          svcTl.from(
            svcShowcase,
            {
              y: 36,
              scale: 0.98,
              opacity: 0,
              duration: 0.85,
              clearProps: "transform,opacity",
            },
            "-=0.35"
          );
        }
      }

      // 2. Our Solutions (#solutions) — header then 5 cards one by one
      const solSection = containerRef.current?.querySelector("#solutions");
      if (solSection) {
        const solTl = gsap.timeline({
          scrollTrigger: {
            trigger: solSection,
            start: "top 84%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        });

        solTl
          .from("#solutions .sol-head > *", {
            y: 26,
            opacity: 0,
            stagger: 0.12,
            duration: 0.7,
            clearProps: "transform,opacity",
          })
          .from(
            "#solutions .sol-card",
            {
              y: 36,
              scale: 0.97,
              opacity: 0,
              stagger: 0.12,
              duration: 0.65,
              clearProps: "transform,opacity",
            },
            "-=0.3"
          );
      }

      // 3. About Section (#about) — content, features, then visual spire
      const aboutSection = containerRef.current?.querySelector("#about");
      if (aboutSection) {
        const aboutTl = gsap.timeline({
          scrollTrigger: {
            trigger: aboutSection,
            start: "top 82%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        });

        aboutTl
          .from("#about .about-content > *", {
            y: 28,
            opacity: 0,
            stagger: 0.12,
            duration: 0.75,
            clearProps: "transform,opacity",
          })
          .from(
            "#about .about-feat-item",
            {
              y: 20,
              opacity: 0,
              stagger: 0.12,
              duration: 0.6,
              clearProps: "transform,opacity",
            },
            "-=0.4"
          )
          .from(
            "#about .about-visual-wrapper",
            {
              scale: 0.95,
              y: 24,
              opacity: 0,
              duration: 0.9,
              clearProps: "transform,opacity",
            },
            "-=0.5"
          );
      }

      // 4. Process Section (#process) — header, tree, then 5 steps one by one
      const procSection = containerRef.current?.querySelector("#process");
      if (procSection) {
        const procCards = procSection.querySelectorAll(".proc-card-wrapper");
        const connTree = procSection.querySelector(".proc-conn-tree");
        const ctaWrap = procSection.querySelector(".proc-cta-wrap");

        const procTl = gsap.timeline({
          scrollTrigger: {
            trigger: procSection,
            start: "top 84%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        });

        procTl.from("#process .proc-head > *", {
          y: 24,
          opacity: 0,
          stagger: 0.1,
          duration: 0.65,
          clearProps: "transform,opacity",
        });

        if (connTree) {
          procTl.from(
            connTree,
            {
              opacity: 0,
              duration: 0.45,
              clearProps: "opacity",
            },
            "-=0.25"
          );
        }

        if (procCards.length) {
          procTl.from(
            procCards,
            {
              y: 30,
              opacity: 0,
              stagger: 0.12,
              duration: 0.6,
              clearProps: "transform,opacity",
            },
            "-=0.2"
          );
        }

        if (ctaWrap) {
          procTl.from(
            ctaWrap,
            {
              y: 18,
              opacity: 0,
              duration: 0.5,
              clearProps: "transform,opacity",
            },
            "-=0.25"
          );
        }
      }

      // 5. FAQ Section (#faq) — heading then questions one by one
      const faqSection = containerRef.current?.querySelector("#faq");
      if (faqSection) {
        const faqTl = gsap.timeline({
          scrollTrigger: {
            trigger: faqSection,
            start: "top 84%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        });

        faqTl
          .from("#faq .faq-wrap > div:first-child > *", {
            y: 26,
            opacity: 0,
            stagger: 0.12,
            duration: 0.7,
            clearProps: "transform,opacity",
          })
          .from(
            "#faq .faq details",
            {
              y: 22,
              opacity: 0,
              stagger: 0.1,
              duration: 0.6,
              clearProps: "transform,opacity",
            },
            "-=0.35"
          );
      }

      // 6. Contact CTA Section (#contact) — card then info items one by one
      const contactSection = containerRef.current?.querySelector("#contact");
      if (contactSection) {
        const contactTl = gsap.timeline({
          scrollTrigger: {
            trigger: contactSection,
            start: "top 84%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        });

        contactTl
          .from("#contact .contact-card", {
            scale: 0.97,
            y: 32,
            opacity: 0,
            duration: 0.85,
            clearProps: "transform,opacity",
          })
          .from(
            "#contact .contact-info-card",
            {
              y: 22,
              opacity: 0,
              stagger: 0.12,
              duration: 0.6,
              clearProps: "transform,opacity",
            },
            "-=0.45"
          );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="light" ref={containerRef}>
      {/* <DestinationCarousel /> */}
      <SolutionsSection />
      <AboutSection />
      <ProcessSection />
      <FaqSection />
      <ContactCtaSection />
      <Footer />
    </div>
  );
}
