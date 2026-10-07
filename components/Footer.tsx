"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { services } from "./servicesData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".foot-in > div", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
        y: 25,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power2.out",
      });

      gsap.from(".copy", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="foot" ref={footerRef}>
      <div className="foot-in" style={{ gridTemplateColumns: "1.4fr 1fr 1fr 1.1fr" }}>
        <div>
          <b>ABI Technologies &amp; Digital Solutions</b>
          <p>Welcome to the Digital World. USA-based engineering team delivering custom AI, enterprise software, web platforms, mobile apps, and UI/UX design worldwide.</p>
        </div>
        <div>
          <h4>Services</h4>
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}>{s.t}</Link>
          ))}
        </div>
        <div>
          <h4>Company</h4>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/#process">How We Work</Link>
          <Link href="/contact">Contact &amp; RFP</Link>
          <Link href="/#faq">Insights &amp; FAQ</Link>
        </div>
        <div>
          <h4>Contact &amp; Location</h4>
          <a href="tel:+15027135115">+1 (502) 713-5115</a>
          <a href="mailto:umar@abitechsolutions.com">umar@abitechsolutions.com</a>
          <p style={{ marginTop: 8, fontSize: 13, color: "#64748b" }}>
            <strong>Umar Darraz</strong>, Founder &amp; CEO<br />
            USA Based • Global Delivery
          </p>
        </div>
      </div>
      <div className="copy">© 2026 ABI Technologies &amp; Digital Solutions. All rights reserved.</div>
    </footer>
  );
}
