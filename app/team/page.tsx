import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Arrow, PhoneIcon, WebIcon, MapPinIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Our Team – ABI Technologies & Digital Solutions",
  description:
    "Meet the senior engineers, AI architects, and product designers behind ABI Technologies & Digital Solutions. USA-based technical leadership delivering custom digital engineering worldwide.",
};

interface TeamMember {
  initials: string;
  name: string;
  role: string;
  image?: string;
  location: string;
  bio: string;
  tags: string[];
  isFounder?: boolean;
}

const leadershipTeam: TeamMember[] = [
  {
    initials: "UD",
    name: "Umar Darraz",
    role: "Founder & Chief Executive Officer",
    image: "/images/team/umar-darraz.jpg",
    location: "🇺🇸 United States",
    bio: "Visionary technologist and systems architect leading ABI Technologies. Umar oversees executive product strategy, client engineering relationships, and deterministic delivery of custom enterprise platforms and AI ecosystems.",
    tags: ["Executive Strategy", "Enterprise Architecture", "AI Systems", "Client Partnerships"],
    isFounder: true,
  },
  {
    initials: "AV",
    name: "Alex Vance",
    role: "Principal AI & Machine Learning Architect",
    image: "/images/team/alex-vance.jpg",
    location: "🌐 Global Delivery Hub",
    bio: "Specializing in Large Language Model fine-tuning, retrieval-augmented generation (RAG), vector databases, and real-time inference pipelines that solve complex business automation challenges.",
    tags: ["Generative AI", "LangChain / LlamaIndex", "Vector Search", "Python / PyTorch"],
  },
  {
    initials: "TM",
    name: "Tariq Munir",
    role: "Lead Full-Stack Cloud Architect",
    image: "/images/team/tariq-munir.jpg",
    location: "🌐 Global Delivery Hub",
    bio: "Expert in distributed cloud systems, scalable microservices, and serverless architectures. Drives high-concurrency Next.js and Node.js enterprise software with 99.99% uptime guarantees.",
    tags: ["Next.js / React", "Node.js & Go", "AWS / GCP Cloud", "PostgreSQL / Redis"],
  },
  {
    initials: "ER",
    name: "Elena Rostova",
    role: "Head of Product & UI/UX Design Systems",
    image: "/images/team/elena-rostova.jpg",
    location: "🌐 Global Delivery Hub",
    bio: "Obsessed with human-centric interfaces, high-conversion user journeys, and robust Figma design token frameworks that bridge the gap between aesthetic beauty and developer execution.",
    tags: ["Figma Design Systems", "UI/UX Architecture", "Micro-Interactions", "User Research"],
  },
  {
    initials: "MS",
    name: "Marcus Sterling",
    role: "Senior Mobile & Native Platform Lead",
    image: "/images/team/marcus-sterling.jpg",
    location: "🌐 Global Delivery Hub",
    bio: "Pioneering cross-platform mobile experiences with React Native, Swift, and Kotlin. Focuses on 60 FPS performance, offline-first sync, biometric authentication, and frictionless App Store releases.",
    tags: ["React Native", "iOS (Swift)", "Android (Kotlin)", "Offline Sync"],
  },
  {
    initials: "SL",
    name: "Sophia Lin",
    role: "Director of Client Solutions & Agile Delivery",
    image: "/images/team/sophia-lin.jpg",
    location: "🇺🇸 United States",
    bio: "Dedicated to transparent client communication, two-week sprint velocity, and milestone governance. Ensures client partners enjoy direct Slack access, weekly video demos, and deterministic timelines.",
    tags: ["Agile / Scrum Governance", "Sprint Delivery", "Client Success", "Technical RFP"],
  },
];

const specializedSquads = [
  {
    icon: "🧠",
    title: "AI & Cognitive Computing Squad",
    description:
      "Engineers dedicated to custom neural network development, conversational AI agents, multimodal pipelines, and proprietary enterprise knowledge embeddings.",
    capabilities: [
      "Custom RAG & Enterprise Vector Knowledge Bases",
      "Fine-Tuned Small Language Models (SLMs & LLMs)",
      "Autonomous Workflow & Task Agents",
      "Confidential Cloud & On-Prem AI Deployments",
    ],
  },
  {
    icon: "⚡",
    title: "Full-Stack & Cloud Architecture Squad",
    description:
      "Senior backend and frontend specialists crafting bulletproof web applications, multi-tenant SaaS platforms, and secure API gateways.",
    capabilities: [
      "High-Performance Next.js & React Web Platforms",
      "Microservices & Event-Driven Distributed Architectures",
      "SOC2, HIPAA & GDPR Compliant Data Schemas",
      "Automated CI/CD DevOps & Kubernetes Clusters",
    ],
  },
  {
    icon: "📱",
    title: "Mobile & Edge Engineering Squad",
    description:
      "Crafting intuitive, lightning-fast iOS and Android applications engineered for viral user retention and high conversion.",
    capabilities: [
      "Cross-Platform Native (React Native & Flutter)",
      "Pure Native Swift & Kotlin Core Modules",
      "Real-Time WebSockets & Push Notification Engine",
      "End-to-End App Store Submission & Compliance",
    ],
  },
  {
    icon: "🎨",
    title: "UI/UX & Interactive Design Studio",
    description:
      "Award-winning product designers building world-class brand identities, component libraries, and engaging digital experiences.",
    capabilities: [
      "Enterprise Figma Design Systems & Token Libraries",
      "Conversion-Optimized Checkout & Onboarding Funnels",
      "High-Fidelity Interactive Prototypes",
      "Custom Motion Graphics & 3D Interactive Elements",
    ],
  },
];

export default function TeamPage() {
  return (
    <div className="sv-page-wrapper">
      {/* Navigation */}
      <Navbar activePage="team" />

      {/* ── HERO SECTION ── */}
      <header className="sv-hero-container">
        <div className="sv-hero-content">
          <div className="sv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sv-sep">/</span>
            <span className="sv-current">Our Team</span>
          </div>

          <div className="sv-category-badge">
            <span className="sv-badge-pulse-dot" />
            <span>SENIOR ENGINEERING TALENT • USA LEADERSHIP</span>
          </div>

          <h1 className="sv-hero-title">
            The Senior Engineers &amp; Architects Behind Your Growth.
          </h1>

          <p className="sv-hero-tagline">
            No Juniors. No Hand-offs. Pure Technical Excellence.
          </p>
          <p className="sv-hero-desc">
            At ABI Technologies &amp; Digital Solutions, our multidisciplinary collective of senior full-stack developers, AI researchers, cloud architects, and UI/UX designers work directly with you to turn ambitious business visions into market-leading software.
          </p>

          <div className="sv-hero-actions">
            <Link href="/contact" className="hero-btn-primary sv-cta-main">
              Partner With Our Team <Arrow />
            </Link>
            <a className="hero-btn-secondary sv-cta-phone" href="tel:+15027135115">
              <PhoneIcon /> Call +1 (502) 713-5115
            </a>
          </div>
        </div>
      </header>

      {/* ── MAIN BODY CONTENT ── */}
      <div className="sv-body-light">
        {/* Leadership Roster */}
        <section className="sec">
          <div className="head">
            <div className="svc-pill-badge">
              <span>CORE LEADERSHIP</span>
            </div>
            <h2>Meet Our <em>Technical Leadership</em></h2>
            <p className="lead">
              Seasoned digital architects committed to engineering integrity, high velocity, and tangible business ROI.
            </p>
          </div>

          <div className="team-lead-grid">
            {leadershipTeam.map((member) => (
              <div
                key={member.name}
                className={`team-card ${member.isFounder ? "team-card-founder" : ""}`}
              >
                <div className="team-avatar-wrapper">
                  {member.image ? (
                    <div className="team-avatar-img-frame">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={member.image}
                        alt={member.name}
                        className="team-avatar-photo"
                      />
                    </div>
                  ) : (
                    <div className={member.isFounder ? "team-avatar" : "team-avatar-glow"}>
                      {member.initials}
                    </div>
                  )}
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <span className="team-role">{member.role}</span>
                    <span className="team-location-pill">{member.location}</span>
                  </div>
                </div>

                <p className="team-bio">{member.bio}</p>

                <div className="team-tags">
                  {member.tags.map((tag) => (
                    <span key={tag} className="team-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Specialized Squads */}
        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="head">
            <div className="svc-pill-badge">
              <span>MULTIDISCIPLINARY CAPABILITY</span>
            </div>
            <h2>Specialized <em>Engineering Squads</em></h2>
            <p className="lead">
              Cross-functional units tailored to tackle every layer of your modern digital transformation.
            </p>
          </div>

          <div className="team-squads-grid">
            {specializedSquads.map((squad) => (
              <div key={squad.title} className="team-squad-card">
                <div className="team-squad-icon-badge">{squad.icon}</div>
                <h3>{squad.title}</h3>
                <p>{squad.description}</p>
                <ul className="team-squad-list">
                  {squad.capabilities.map((cap) => (
                    <li key={cap}>{cap}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* The ABI Engineering Standard */}
        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="about-global-card">
            <div className="about-global-content">
              <div
                className="svc-pill-badge"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "#fff",
                  borderColor: "rgba(255,255,255,0.3)",
                }}
              >
                <span>THE ABI ENGINEERING STANDARD</span>
              </div>
              <h2>How Our Team Operates Differently</h2>
              <p>
                We eliminate the layers of project management bureaucracy and junior bait-and-switch common in traditional agencies. When you partner with ABI Technologies, you get direct, unfiltered access to senior engineering talent.
              </p>
              <div className="about-global-features">
                <div>
                  <b>🎯 100% Senior Engineers</b>
                  <small>No junior developers practicing on your mission-critical code.</small>
                </div>
                <div>
                  <b>💬 Direct Slack &amp; Teams Access</b>
                  <small>Real-time collaboration and daily check-ins with your assigned leads.</small>
                </div>
                <div>
                  <b>🛡️ Complete IP &amp; Code Ownership</b>
                  <small>You own every repository, database schema, and Figma file from day one.</small>
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
                <span>Ready to Work With Us?</span>
              </div>
              <h2>
                Let&apos;s build your next <em>game-changing software.</em>
              </h2>
              <p>
                Schedule an initial technical discovery session with Umar Darraz and our lead engineering architects today.
              </p>
              <div className="contact-actions">
                <Link className="contact-btn-primary" href="/contact">
                  Start Your Project <Arrow />
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

        {/* Global Footer */}
        <Footer />
      </div>
    </div>
  );
}
