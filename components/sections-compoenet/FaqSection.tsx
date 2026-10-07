"use client";

import { Arrow } from "../Icons";

const faqs = [
  ["What services do you offer?", "AI solutions, custom software, websites, mobile apps, and graphics with UI/UX design, all from one team."],
  ["Where are you based, and do you work with international clients?", "We are USA based and serve clients worldwide, working remotely across time zones."],
  ["How do I get started?", "Send us an email or give us a call. We will set up a discovery call to understand your goals, then share a clear, scoped plan."],
  ["How much does a project cost?", "It depends on scope and complexity. After a short discovery call we provide a clear quote, so you know what to expect before we start."],
];

export default function FaqSection() {
  return (
    <section className="sec" id="faq">
      <div className="faq-wrap">
        <div>
          <span className="pill">
            <i /> FAQ
          </span>
          <h2>
            Frequently asked <em>questions</em>
          </h2>
          <p className="lead">
            Can&apos;t find what you are looking for? Send us a message and we will get back to you.
          </p>
          <div className="cta">
            <a className="btn red" href="mailto:umar@abitechsolutions.com">
              Ask a question <Arrow />
            </a>
          </div>
        </div>
        <div className="faq">
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
