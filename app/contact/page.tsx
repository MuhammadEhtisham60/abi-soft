"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Arrow, Back, PhoneIcon, WebIcon, MapPinIcon, Tick } from "@/components/Icons";

const serviceOptions = [
  "AI Solutions",
  "Software Development",
  "Website Development",
  "App Development",
  "Graphics & UI/UX Design",
];

const budgetOptions = ["Under $10,000", "$10,000 – $25,000", "$25,000 – $50,000", "$50,000+"];

const timelineOptions = ["Urgent (< 1 Month)", "1 – 3 Months", "3 – 6 Months", "Flexible / Exploring"];

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["AI Solutions"]);
  const [budget, setBudget] = useState<string>("$10,000 – $25,000");
  const [timeline, setTimeline] = useState<string>("1 – 3 Months");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (svc: string) => {
    if (selectedServices.includes(svc)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== svc));
      }
    } else {
      setSelectedServices([...selectedServices, svc]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`Project RFP from ${formData.name || "Client"} (${formData.company || "Company"})`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\n\nSelected Services: ${selectedServices.join(", ")}\nBudget Range: ${budget}\nEstimated Timeline: ${timeline}\n\nProject Scope & Objectives:\n${formData.message}`
    );

    // Open user's email client automatically with prefilled enquiry
    window.location.href = `mailto:umar@abitechsolutions.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="sv-page-wrapper">
      {/* Floating Nav with Dropdown & Mobile Drawer */}
      <Navbar activePage="contact" ctaText="Call Now" ctaHref="tel:+15027135115" />

      {/* ── 1. HERO SECTION ── */}
      <header className="sv-hero-container" style={{ paddingBottom: 60 }}>

        {/* Hero Content */}
        <div className="sv-hero-content" style={{ paddingBottom: 20 }}>
          <div className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sv-sep">/</span>
            <span className="sv-current">Contact Us</span>
          </div>

          <div className="sv-category-badge">
            <span className="sv-badge-pulse-dot" />
            <span>LET&apos;S TALK BUSINESS • DIRECT FOUNDER ACCESS</span>
          </div>

          <h1 className="sv-hero-title">
            Let&apos;s Build Something <em>Exceptional Together.</em>
          </h1>

          <p className="sv-hero-tagline">Tell us about your project. We respond within 4 business hours.</p>
          <p className="sv-hero-desc">
            Whether you are building a custom AI knowledge system, an enterprise cloud platform, a high-converting web storefront, or a mobile app, our team provides fixed-scope roadmap proposals with transparent milestones.
          </p>
        </div>
      </header>

      {/* ── 2. MAIN CONTACT & RFP SECTION ── */}
      <div className="sv-body-light">
        <section className="sec" style={{ paddingTop: 40 }}>
          <div className="contact-main-grid">
            {/* Left: Interactive RFP Form */}
            <div className="contact-form-card">
              <div className="contact-form-header">
                <h2>Request a Custom Scope &amp; Estimate</h2>
                <p>Fill in the details below to receive a scoped architectural proposal and project timeline.</p>
              </div>

              {submitted ? (
                <div className="contact-success-state">
                  <div className="contact-success-icon">✓</div>
                  <h3>Thank you for reaching out!</h3>
                  <p>
                    Your project details have been forwarded directly to Umar Darraz, Founder &amp; CEO. We will review your requirements and get back to you with a preliminary assessment shortly.
                  </p>
                  <button
                    type="button"
                    className="hero-btn-primary"
                    style={{ marginTop: 20 }}
                    onClick={() => setSubmitted(false)}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-interactive-form">
                  {/* Step 1: Select Services */}
                  <div className="contact-form-group">
                    <label className="contact-form-label">
                      1. What services are you interested in? <span className="contact-optional">(Select all that apply)</span>
                    </label>
                    <div className="contact-chips-grid">
                      {serviceOptions.map((svc) => {
                        const isSelected = selectedServices.includes(svc);
                        return (
                          <button
                            type="button"
                            key={svc}
                            className={`contact-chip-btn ${isSelected ? "active" : ""}`}
                            onClick={() => toggleService(svc)}
                          >
                            <span className="contact-chip-check">{isSelected ? "✓" : "+"}</span>
                            <span>{svc}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Budget Range */}
                  <div className="contact-form-group">
                    <label className="contact-form-label">2. Estimated Project Budget</label>
                    <div className="contact-pill-selector">
                      {budgetOptions.map((b) => (
                        <button
                          type="button"
                          key={b}
                          className={`contact-select-pill ${budget === b ? "active" : ""}`}
                          onClick={() => setBudget(b)}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Timeline */}
                  <div className="contact-form-group">
                    <label className="contact-form-label">3. Expected Delivery Timeline</label>
                    <div className="contact-pill-selector">
                      {timelineOptions.map((t) => (
                        <button
                          type="button"
                          key={t}
                          className={`contact-select-pill ${timeline === t ? "active" : ""}`}
                          onClick={() => setTimeline(t)}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 4: Contact Information */}
                  <div className="contact-form-group">
                    <label className="contact-form-label">4. Your Details</label>
                    <div className="contact-input-grid">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Your Full Name *"
                          className="contact-text-input"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Work Email Address *"
                          className="contact-text-input"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder="Phone / WhatsApp Number"
                          className="contact-text-input"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Company / Organization Name"
                          className="contact-text-input"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 5: Message */}
                  <div className="contact-form-group">
                    <label className="contact-form-label">5. Tell us about your project goals &amp; requirements</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Briefly describe what you would like to build, any existing software/designs, key feature requirements, or main business challenges..."
                      className="contact-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="hero-btn-primary contact-submit-btn">
                    Submit Project Inquiry &amp; Launch Email <Arrow />
                  </button>

                  <p className="contact-form-disclaimer">
                    🔒 <strong>Strict Privacy &amp; NDA:</strong> We never share your contact information. Mutual NDA available before exchanging technical documentation.
                  </p>
                </form>
              )}
            </div>

            {/* Right: Direct Information & Guarantees */}
            <div className="contact-sidebar">
              {/* Direct Reach Card */}
              <div className="contact-side-card">
                <h3>Direct Communication</h3>
                <p>Reach out directly to our leadership team for immediate technical consultation.</p>

                <div className="contact-side-channels">
                  <a className="contact-channel-item" href="tel:+15027135115">
                    <div className="contact-channel-icon">
                      <PhoneIcon />
                    </div>
                    <div>
                      <small>Direct Phone &amp; WhatsApp</small>
                      <b>+1 (502) 713-5115</b>
                    </div>
                  </a>

                  <a className="contact-channel-item" href="mailto:umar@abitechsolutions.com">
                    <div className="contact-channel-icon">
                      <WebIcon />
                    </div>
                    <div>
                      <small>Founder Direct Email</small>
                      <b>umar@abitechsolutions.com</b>
                    </div>
                  </a>

                  <div className="contact-channel-item">
                    <div className="contact-channel-icon">
                      <MapPinIcon />
                    </div>
                    <div>
                      <small>Headquarters &amp; Global Delivery</small>
                      <b>USA Based • Serving Clients Worldwide</b>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="contact-side-card">
                <h3>What Happens Next?</h3>
                <ol className="contact-next-steps">
                  <li>
                    <b>1. Discovery Consultation</b>
                    <p>We review your goals, data assets, and timeline in a confidential 30-minute discovery call.</p>
                  </li>
                  <li>
                    <b>2. Fixed-Scope Architectural Proposal</b>
                    <p>We deliver an itemized roadmap with clear milestone deliverables, tech stack details, and fixed pricing.</p>
                  </li>
                  <li>
                    <b>3. Sprint Kickoff &amp; Dedicated Slack</b>
                    <p>Upon approval, we spin up your staging environment, dedicate senior developers, and begin Sprint 1.</p>
                  </li>
                </ol>
              </div>

              {/* Guarantees Box */}
              <div className="contact-trust-box">
                <div className="contact-trust-title">Our Commitments to You:</div>
                <div className="contact-trust-item"><Tick /> <span>100% IP &amp; Source Code Ownership</span></div>
                <div className="contact-trust-item"><Tick /> <span>Mutual Non-Disclosure Agreement (NDA)</span></div>
                <div className="contact-trust-item"><Tick /> <span>4-Hour Initial Response Guarantee</span></div>
                <div className="contact-trust-item"><Tick /> <span>Transparent Fixed-Price Milestones</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial FAQ */}
        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="head">
            <div className="svc-pill-badge">
              <span>COMMERCIAL &amp; ENGAGEMENT FAQ</span>
            </div>
            <h2>Frequently Asked <em>Questions Before Starting</em></h2>
          </div>

          <div className="faq">
            <details>
              <summary>How quickly can our project kick off after signing?</summary>
              <p>
                We typically schedule the technical discovery and wireframing sprint within 3 to 5 business days after contract execution and mutual NDA signing.
              </p>
            </details>

            <details>
              <summary>What contract and engagement models do you support?</summary>
              <p>
                We offer both <strong>Fixed-Scope Milestone Deliveries</strong> (ideal for projects with clear requirements and predictable budgets) and <strong>Dedicated Agile Sprints</strong> (ideal for rapidly iterating SaaS products and continuous feature development).
              </p>
            </details>

            <details>
              <summary>Do you sign a Non-Disclosure Agreement (NDA) before we share details?</summary>
              <p>
                Yes. We frequently execute mutual NDAs prior to reviewing proprietary databases, business workflows, or confidential software architectures.
              </p>
            </details>

            <details>
              <summary>How will we communicate during the project build?</summary>
              <p>
                You will have a dedicated Slack or Teams channel with direct access to our technical leads and Founder Umar Darraz, alongside bi-weekly video sprint demos and live cloud staging links.
              </p>
            </details>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
