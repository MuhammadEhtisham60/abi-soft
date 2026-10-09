"use client";

import { Arrow } from "../Icons";

const faqs = [
  {
    q: "What services do you offer?",
    a: "AI solutions, custom software engineering, modern web applications, mobile apps, and UI/UX design — all delivered by our specialized, cross-functional team.",
  },
  {
    q: "Where are you based, and do you work with international clients?",
    a: "We are proudly USA-based with headquarters in the United States and serve clients globally across North America, Europe, Asia, and worldwide with seamless remote-first collaboration.",
  },
  {
    q: "How do I get started with a project?",
    a: "Send us a message or schedule a consultation. We will arrange a 30-minute discovery call to evaluate your goals, discuss architecture, and provide a clear, scoped execution plan.",
  },
  {
    q: "How much does a project cost and what are your timelines?",
    a: "Costs and timelines depend on project scope and complexity. After our initial discovery call, we provide a transparent, milestone-based quote and delivery roadmap so you know exactly what to expect before we begin.",
  },
  {
    q: "How do you handle security and IP ownership?",
    a: "You retain 100% full intellectual property and code ownership upon completion. We adhere to rigorous security standards, non-disclosure agreements (NDAs), and enterprise-grade data protection practices.",
  },
];

export default function FaqSection() {
  return (
    <section className="sec faq-section-container" id="faq">
      <div className="faq-wrap">
        <div className="faq-intro-col">
          <div className="faq-pill-badge">
            <span className="faq-pill-dot" />
            <span>FAQ &amp; INSIGHTS</span>
          </div>
          <h2>
            Frequently Asked <em>Questions</em>
          </h2>
          <p className="lead">
            Everything you need to know about working with ABI Technologies. Have additional questions? We&apos;re here to help.
          </p>
          <div className="faq-cta-box">
            <a className="faq-ask-btn" href="mailto:umar@abitechsolutions.com">
              <span>Ask a Question</span>
              <Arrow />
            </a>
            <div className="faq-support-meta">
              <span className="faq-online-dot" />
              <span>Direct engineer response &bull; <strong>&lt; 2 hrs</strong></span>
            </div>
          </div>
        </div>

        <div className="faq">
          {faqs.map((item, idx) => (
            <details key={idx} className="faq-item" open={idx === 0}>
              <summary>
                <span className="faq-question-text">{item.q}</span>
                <span className="faq-chevron" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </summary>
              <div className="faq-body">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
