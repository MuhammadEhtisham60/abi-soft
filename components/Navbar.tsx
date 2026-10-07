"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "./servicesData";
import { Arrow } from "./Icons";

type NavbarProps = {
  activePage?: "home" | "services" | "about" | "contact";
  className?: string;
  ctaText?: string;
  ctaHref?: string;
};

export default function Navbar({
  activePage,
  className = "",
  ctaText = "Get Free Estimate",
  ctaHref = "/contact",
}: NavbarProps) {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  // Determine active route
  const isHome = activePage === "home" || pathname === "/";
  const isServices = activePage === "services" || pathname.startsWith("/services");
  const isAbout = activePage === "about" || pathname === "/about";
  const isContact = activePage === "contact" || pathname === "/contact";

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close menus on route changes
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="sv-nav-sticky-container">
        <header className={`sv-nav-light ${className}`} aria-label="Main Navigation">
        {/* Logo */}
        <Link href="/" className="hero-logo" onClick={() => setMobileMenuOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/dark-logo.png" alt="ABI" className="hero-logo-img" style={{ height: 36, width: "auto" }} />
        </Link>

        {/* Desktop Navigation */}
        <div className="sv-nav-center">
          <Link href="/" className={`sv-nav-link ${isHome ? "sv-nav-link-active" : ""}`}>
            <span>Home</span>
            {isHome && <span className="sv-nav-active-bar" />}
          </Link>

          {/* Services Dropdown */}
          <div
            className="sv-nav-dropdown-wrapper"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={`sv-nav-link sv-nav-dropdown-btn ${isServices ? "sv-nav-link-active" : ""}`}
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-expanded={dropdownOpen}
            >
              <span>Services</span>
              <svg
                className={`sv-chevron-icon ${dropdownOpen ? "sv-chevron-open" : ""}`}
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              {isServices && <span className="sv-nav-active-bar" />}
            </button>

            {/* Dropdown Menu Card */}
            {dropdownOpen && (
              <div className="sv-dropdown-menu" role="menu">
                <div className="sv-dropdown-header">
                  <span className="sv-dropdown-badge">Our Solutions</span>
                  <p className="sv-dropdown-subtext">Enterprise-grade engineering & digital innovation</p>
                </div>

                <div className="sv-dropdown-grid">
                  {services.map((s, idx) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="sv-dropdown-item"
                      role="menuitem"
                      style={{ animationDelay: `${(idx + 1) * 55}ms` }}
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="sv-dropdown-item-icon">
                        <span className="sv-dropdown-dot" />
                      </div>
                      <div className="sv-dropdown-item-info">
                        <span className="sv-dropdown-item-title">{s.t}</span>
                        <span className="sv-dropdown-item-desc">{s.p}</span>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="sv-dropdown-footer">
                  <Link href="/#services" className="sv-dropdown-viewall" onClick={() => setDropdownOpen(false)}>
                    <span>Explore all services on overview</span>
                    <Arrow />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/about" className={`sv-nav-link ${isAbout ? "sv-nav-link-active" : ""}`}>
            <span>About</span>
            {isAbout && <span className="sv-nav-active-bar" />}
          </Link>

          <Link href="/contact" className={`sv-nav-link ${isContact ? "sv-nav-link-active" : ""}`}>
            <span>Contact</span>
            {isContact && <span className="sv-nav-active-bar" />}
          </Link>
        </div>

        {/* Desktop Right CTA */}
        <div className="sv-nav-right">
          <Link className="sv-nav-cta-btn" href={ctaHref}>
            {ctaText} <Arrow />
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="sv-mobile-toggle-btn"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </header>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="sv-mobile-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="sv-mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="sv-mobile-drawer-header">
              <Link href="/" className="hero-logo" onClick={() => setMobileMenuOpen(false)}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/dark-logo.png" alt="ABI" className="hero-logo-img" style={{ height: 32, width: "auto" }} />
              </Link>
              <button
                type="button"
                className="sv-mobile-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <nav className="sv-mobile-nav-links">
              <Link
                href="/"
                className={`sv-mobile-link ${isHome ? "sv-mobile-link-active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div className="sv-mobile-accordion">
                <button
                  type="button"
                  className={`sv-mobile-link sv-mobile-accordion-btn ${isServices ? "sv-mobile-link-active" : ""}`}
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                >
                  <span>Services</span>
                  <svg
                    className={`sv-chevron-icon ${mobileServicesOpen ? "sv-chevron-open" : ""}`}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {mobileServicesOpen && (
                  <div className="sv-mobile-services-sublist">
                    {services.map((s, idx) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="sv-mobile-sublink"
                        style={{ animationDelay: `${(idx + 1) * 45}ms` }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="sv-mobile-sublink-dot" />
                        <span className="sv-mobile-sublink-text">
                          <strong style={{ display: 'block', color: '#0f172a' }}>{s.t}</strong>
                          <span style={{ display: 'block', fontSize: '11px', color: '#64748b' }}>{s.p}</span>
                        </span>
                      </Link>
                    ))}
                    <Link
                      href="/#services"
                      className="sv-mobile-sublink sv-mobile-sublink-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>Explore all services overview →</span>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className={`sv-mobile-link ${isAbout ? "sv-mobile-link-active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className={`sv-mobile-link ${isContact ? "sv-mobile-link-active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>

            <div className="sv-mobile-drawer-footer">
              <Link
                className="sv-nav-cta-btn sv-mobile-cta-btn"
                href={ctaHref}
                onClick={() => setMobileMenuOpen(false)}
              >
                {ctaText} <Arrow />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
