"use client";

import DigitalSpireVisual from "../DigitalSpireVisual";
import { GlobeNetworkIcon } from "../Icons";

export default function AboutSection() {
  return (
    <section className="sec about" id="about">
      <div className="about-content">
        <div className="about-pill-badge">
          <span className="about-pill-dot" />
          <span>USA Based</span>
        </div>
        <h2>
          Let&apos;s change the world,
          <br />
          <em>one digital solution at a time.</em>
        </h2>
        <p className="lead">
          ABI Technologies &amp; Digital Solutions partners with businesses of every size, delivering AI, software, web, apps and design to clients around the globe.
        </p>

        <div className="about-features">
          <div className="about-feat-item">
            <div className="about-feat-icon">
              <GlobeNetworkIcon />
            </div>
            <div className="about-feat-text">
              <b>Serving clients worldwide</b>
              <small>Remote-first delivery across every time zone</small>
            </div>
          </div>
        </div>
      </div>

      <div className="about-visual-wrapper">
        <DigitalSpireVisual />
      </div>
    </section>
  );
}
