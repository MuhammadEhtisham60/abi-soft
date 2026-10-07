import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DigitalSpireVisual from "@/components/DigitalSpireVisual";
import { Arrow, Back, MapPinIcon, GlobeNetworkIcon, LayersIcon, PhoneIcon, WebIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us – ABI Technologies & Digital Solutions | Nexora",
  description: "Learn about ABI Technologies & Digital Solutions. USA-based engineering team delivering custom AI, enterprise software, modern web platforms, mobile apps, and UI/UX design.",
};

export default function AboutPage() {
  const mail = "mailto:umar@abitechsolutions.com?subject=Strategic%20Partnership%20Enquiry";

  return (
    <div className="sv-page-wrapper">
      {/* Floating Nav with Dropdown & Mobile Drawer */}
      <Navbar activePage="about" />

      {/* ── 1. HERO SECTION ── */}
      <header className="sv-hero-container">

        {/* Hero Content */}
        <div className="sv-hero-content">
          <div className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sv-sep">/</span>
            <span className="sv-current">About Us</span>
          </div>

          <div className="sv-category-badge">
            <span className="sv-badge-pulse-dot" />
            <span>USA-BASED • GLOBAL DIGITAL ENGINEERING</span>
          </div>

          <h1 className="sv-hero-title">
            Architecting the Future of Digital Business.
          </h1>

          <p className="sv-hero-tagline">Smarter Technology. Deterministic Scale. Measurable ROI.</p>
          <p className="sv-hero-desc">
            ABI Technologies &amp; Digital Solutions (Nexora) partners with ambitious businesses worldwide to build custom AI workflows, scalable enterprise software, high-converting web applications, native mobile apps, and iconic UI/UX design systems.
          </p>

          <div className="sv-hero-actions">
            <Link href="/contact" className="hero-btn-primary sv-cta-main">
              Get in Touch with Us <Arrow />
            </Link>
            <a className="hero-btn-secondary sv-cta-phone" href="tel:+15027135115">
              <PhoneIcon /> Call +1 (502) 713-5115
            </a>
          </div>

          {/* Stats Bar */}
          <div className="sv-hero-stats-grid">
            <div className="sv-stat-card">
              <div className="sv-stat-val">100%</div>
              <div className="sv-stat-label">Code &amp; IP Ownership</div>
              <div className="sv-stat-sub">Zero vendor lock-in or recurring seat fees</div>
            </div>
            <div className="sv-stat-card">
              <div className="sv-stat-val">99.9%</div>
              <div className="sv-stat-label">Platform Reliability</div>
              <div className="sv-stat-sub">High-availability cloud infrastructure</div>
            </div>
            <div className="sv-stat-card">
              <div className="sv-stat-val">5</div>
              <div className="sv-stat-label">Core Disciplines</div>
              <div className="sv-stat-sub">AI, Software, Web, Mobile &amp; Design</div>
            </div>
            <div className="sv-stat-card">
              <div className="sv-stat-val">24/7</div>
              <div className="sv-stat-label">Global Client Support</div>
              <div className="sv-stat-sub">Serving clients across all global time zones</div>
            </div>
          </div>
        </div>
      </header>

      {/* ── 2. MAIN BODY CONTENT ── */}
      <div className="sv-body-light">
        {/* Mission & Vision */}
        <section className="sec">
          <div className="about-split-grid">
            <div>
              <div className="svc-pill-badge">
                <span>OUR MISSION &amp; PHILOSOPHY</span>
              </div>
              <h2 className="about-title-large">
                We bridge the gap between <em>complex technology</em> and real business growth.
              </h2>
              <p className="about-p">
                Too many companies are trapped between inflexible, expensive off-the-shelf software and bloated agency teams that take months to deliver basic prototypes.
              </p>
              <p className="about-p">
                At ABI Technologies, we do things differently. We combine senior full-stack engineering, cutting-edge generative AI, and human-centered design to build software that is lean, lightning-fast, and proprietary to your business.
              </p>

              <div className="about-values-list">
                <div className="about-val-item">
                  <div className="about-val-icon">⚡</div>
                  <div>
                    <b>Radical Velocity &amp; Transparency</b>
                    <p>Two-week sprint cycles with live preview links, direct Slack access, and weekly video walkthroughs.</p>
                  </div>
                </div>

                <div className="about-val-item">
                  <div className="about-val-icon">🛡️</div>
                  <div>
                    <b>Enterprise-Grade Security &amp; Data Sovereignty</b>
                    <p>Zero training on your proprietary data. SOC2, HIPAA, and GDPR-ready architectures deployed in your own cloud VPC.</p>
                  </div>
                </div>

                <div className="about-val-item">
                  <div className="about-val-icon">📈</div>
                  <div>
                    <b>Business ROI Over Technology Hype</b>
                    <p>Every line of code and AI prompt is engineered to eliminate operational bottlenecks, reduce costs, or drive new revenue.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div className="about-visual-side">
              <div className="digital-spire-container" style={{ minHeight: 560 }}>
                <DigitalSpireVisual />
              </div>
            </div>
          </div>
        </section>

        {/* Leadership & Founder's Message */}
        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="about-founder-box">
            <div className="about-founder-quote-mark">“</div>
            <div className="about-founder-content">
              <h3>A Message from Our Leadership</h3>
              <p className="about-founder-quote">
                &ldquo;Our vision for ABI Technologies is simple: to be the most trusted, dependable digital engineering partner for modern businesses. When you work with us, you are not just hiring developers—you are gaining a dedicated technical leadership team that cares about your bottom-line success as much as you do.&rdquo;
              </p>
              <div className="about-founder-profile">
                <div className="about-founder-avatar">UD</div>
                <div>
                  <b>Umar Darraz</b>
                  <small>Founder &amp; CEO, ABI Technologies &amp; Digital Solutions</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars of Excellence */}
        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="head">
            <div className="svc-pill-badge">
              <span>WHY CHOOSE US</span>
            </div>
            <h2>Why Forward-Thinking Businesses <em>Partner with Nexora</em></h2>
            <p className="lead">Built on American accountability, technical excellence, and transparent client partnerships.</p>
          </div>

          <div className="sv-market-drivers-grid">
            <div className="sv-market-card">
              <div className="sv-driver-header">
                <span className="sv-driver-num">01</span>
                <span className="sv-driver-pill">Accountability</span>
              </div>
              <h3>USA-Based Leadership</h3>
              <p>Registered in the United States with transparent contracts, mutual NDA protections, and direct telephone &amp; video accessibility during US working hours.</p>
            </div>

            <div className="sv-market-card">
              <div className="sv-driver-header">
                <span className="sv-driver-num">02</span>
                <span className="sv-driver-pill">End-to-End</span>
              </div>
              <h3>Full-Stack Multidisciplinary Team</h3>
              <p>From initial market research and UI/UX design to backend microservices, AI vector pipelines, and 24/7 DevOps monitoring—all under one unified roof.</p>
            </div>

            <div className="sv-market-card">
              <div className="sv-driver-header">
                <span className="sv-driver-num">03</span>
                <span className="sv-driver-pill">Zero Lock-In</span>
              </div>
              <h3>100% Asset &amp; IP Sovereignty</h3>
              <p>You own all source code repositories, databases, Figma design systems, and model weights. Zero recurring seat taxes or vendor lock-in fees.</p>
            </div>
          </div>
        </section>

        {/* Global Delivery Model */}
        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="about-global-card">
            <div className="about-global-content">
              <div className="svc-pill-badge" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}>
                <span>GLOBAL DELIVERY MODEL</span>
              </div>
              <h2>Serving Clients Worldwide Across Every Time Zone</h2>
              <p>
                Our remote-first infrastructure and round-the-clock engineering workflows enable seamless collaboration with clients in North America, the UK, Europe, the Middle East, and Asia-Pacific.
              </p>
              <div className="about-global-features">
                <div>
                  <b>🇺🇸 USA Headquarters</b>
                  <small>Executive leadership, contracts &amp; client management</small>
                </div>
                <div>
                  <b>🌐 Worldwide Sprints</b>
                  <small>Continuous 24-hour development &amp; monitoring cycles</small>
                </div>
                <div>
                  <b>💬 Direct Slack Channels</b>
                  <small>Real-time communication with dedicated project engineers</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Box */}
        <section className="sec sv-contact-sec" style={{ paddingTop: 0 }}>
          <div className="contact-card sv-contact-card">
            <div className="contact-bg-glow" />

            <div className="contact-content">
              <div className="contact-pill-badge">
                <span className="contact-pill-dot" />
                <span>Ready to Transform Your Business?</span>
              </div>
              <h2>
                Let&apos;s talk about your <em>next digital breakthrough.</em>
              </h2>
              <p>
                Reach out to Umar Darraz, Founder &amp; CEO, to explore how we can engineer your custom AI, software, or digital product.
              </p>
              <div className="contact-actions">
                <Link className="contact-btn-primary" href="/contact">
                  Contact Our Team <Arrow />
                </Link>
                <a className="contact-btn-secondary" href="tel:+15027135115">
                  Call +1 (502) 713-5115
                </a>
              </div>
            </div>

            <div className="contact-info-grid">
              <a className="contact-info-card" href="tel:+15027135115">
                <div className="contact-info-icon">
                  <PhoneIcon />
                </div>
                <div className="contact-info-text">
                  <small>Direct Telephone</small>
                  <b>+1 (502) 713-5115</b>
                </div>
              </a>

              <a className="contact-info-card" href="mailto:umar@abitechsolutions.com">
                <div className="contact-info-icon">
                  <WebIcon />
                </div>
                <div className="contact-info-text">
                  <small>Email</small>
                  <b>umar@abitechsolutions.com</b>
                </div>
              </a>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <MapPinIcon />
                </div>
                <div className="contact-info-text">
                  <small>Headquarters</small>
                  <b>USA Based, Serving Clients Worldwide</b>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
