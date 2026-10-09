"use client";

import { Arrow, PhoneIcon, WebIcon, MapPinIcon } from "../Icons";

export default function ContactCtaSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-card">
        <div className="contact-bg-glow" />

        <div className="contact-content">
          <div className="contact-pill-badge">
            <span className="contact-pill-dot" />
            <span>Welcome to the Digital World</span>
          </div>
          <h2>
            Have an idea? <em>Let&apos;s build it.</em>
          </h2>
          <p>
            Tell us what you need: AI, custom software, web platforms, mobile apps, or UI/UX design. Reach out to our team and let&apos;s discuss your project.
          </p>
          <div className="contact-actions">
            <a className="contact-btn-primary" href="mailto:umar@abitechsolutions.com">
              <span>Let&apos;s Talk</span>
              <Arrow />
            </a>
          </div>
        </div>

        <div className="contact-info-grid">
          <a className="contact-info-card" href="tel:+15027135115">
            <div className="contact-info-icon">
              <PhoneIcon />
            </div>
            <div className="contact-info-text">
              <small>Direct Phone</small>
              <b>+1 (502) 713-5115</b>
            </div>
          </a>

          <a className="contact-info-card" href="mailto:umar@abitechsolutions.com">
            <div className="contact-info-icon">
              <WebIcon />
            </div>
            <div className="contact-info-text">
              <small>Email Inquiries</small>
              <b>umar@abitechsolutions.com</b>
            </div>
          </a>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <MapPinIcon />
            </div>
            <div className="contact-info-text">
              <small>Headquarters</small>
              <b>USA Based &bull; Global Delivery</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
