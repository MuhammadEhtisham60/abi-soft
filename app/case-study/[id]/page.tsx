import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allProjects, getProjectById } from "@/components/projectsData";
import { Arrow, PhoneIcon, WebIcon, MapPinIcon } from "@/components/Icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return allProjects.map((p) => ({ id: p.id }));
}

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return {};

  return {
    title: project.seoMetadata.metaTitle || `${project.shortTitle} – Case Study | ABI Technologies`,
    description: project.seoMetadata.metaDescription || project.shortDesc,
    keywords: [
      project.seoMetadata.primaryKeyword,
      ...project.tags,
      "Enterprise Case Study",
      "ABI Technologies",
    ],
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  const mail = `mailto:umar@abitechsolutions.com?subject=${encodeURIComponent(
    `Case Study Enquiry: ${project.shortTitle}`
  )}`;

  // Find related projects (excluding current)
  const relatedProjects = allProjects
    .filter((p) => p.id !== project.id && (p.serviceCategory === project.serviceCategory || p.serviceSlugs.some((s) => project.serviceSlugs.includes(s))))
    .slice(0, 2);

  return (
    <div className="cs-hub-wrapper">
      {/* Floating Header Navigation */}
      <Navbar activePage="case-study" />

      {/* ── 1. CASE STUDY DETAIL HERO ── */}
      <header className="cs-hero-container" style={{ textAlign: "left", paddingBottom: 50 }}>
        <div className="sv-banner-container" style={{ maxWidth: 1240, margin: "0 auto" }}>
          {/* Breadcrumbs */}
          <div className="sv-breadcrumb" style={{ marginBottom: 20 }}>
            <Link href="/">Home</Link>
            <span className="sv-sep">/</span>
            <Link href="/case-study">Case Studies</Link>
            <span className="sv-sep">/</span>
            <span className="sv-current">{project.shortTitle}</span>
          </div>

          {/* Badges */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 18 }}>
            <div className="sv-category-tag" style={{ margin: 0 }}>
              <span className="sv-category-dot" />
              <span>{project.category.toUpperCase()}</span>
            </div>
            <span className="sv-project-tag-pill" style={{ background: "#e0f2fe", color: "#0369a1", borderColor: "#bae6fd", fontWeight: 700 }}>
              Verified Production System
            </span>
          </div>

          {/* Main Title */}
          <h1 className="sv-banner-title" style={{ fontSize: 36, lineHeight: 1.25, marginBottom: 16 }}>
            {project.title}
          </h1>

          {/* Short description preview */}
          <p className="sv-banner-desc" style={{ maxWidth: 960, fontSize: 17, lineHeight: 1.7, color: "#475569" }}>
            {project.shortDesc}
          </p>

          {/* Actions */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 24 }}>
            <a href={mail} className="sv-proj-btn-primary">
              Inquire About This Architecture <Arrow />
            </a>
            <Link href="/case-study" className="sv-proj-btn-outline">
              ← View All Case Studies
            </Link>
          </div>
        </div>
      </header>

      {/* ── 2. MAIN TECHNICAL SPECIFICATION BODY ── */}
      <main className="sv-projects-sec" style={{ paddingTop: 40, paddingBottom: 60 }}>
        <div className="sv-project-card" style={{ boxShadow: "0 10px 40px rgba(15, 23, 42, 0.06)" }}>
          {/* Section 1: Deep Architectural Overview */}
          <div style={{ marginBottom: 36 }}>
            <div className="svc-pill-badge" style={{ marginBottom: 12 }}>
              <span>SYSTEM ARCHITECTURE &amp; SCOPE</span>
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: "#0f172a", marginBottom: 14 }}>
              Detailed Architectural Overview
            </h2>
            <div className="sv-project-overview-box" style={{ background: "#f8fafc", padding: "26px 30px", fontSize: 16 }}>
              <p style={{ fontSize: 15.5, lineHeight: 1.8, color: "#334155", margin: 0 }}>
                {project.overview}
              </p>
            </div>
          </div>

          {/* Section 2: Key Implemented Features */}
          <div style={{ marginBottom: 36 }}>
            <div className="svc-pill-badge" style={{ marginBottom: 12 }}>
              <span>DELIVERED CAPABILITIES</span>
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: "#0f172a", marginBottom: 16 }}>
              Key Implemented Features &amp; Modules
            </h2>
            <div className="sv-project-features-grid" style={{ gap: "16px 24px" }}>
              {project.features.map((feat, idx) => (
                <div key={idx} className="sv-project-feat-item" style={{ fontSize: 14.5, lineHeight: 1.6 }}>
                  <span className="sv-project-check" style={{ width: 22, height: 22, fontSize: 12 }}>✓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Verified Technology Stack */}
          <div style={{ marginBottom: 36 }}>
            <div className="svc-pill-badge" style={{ marginBottom: 12 }}>
              <span>INFRASTRUCTURE &amp; STACK</span>
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: "#0f172a", marginBottom: 16 }}>
              Verified Technology Stack Matrix
            </h2>
            <div className="sv-project-stack-grid" style={{ padding: 24 }}>
              {project.techStack.frontend && (
                <div className="sv-stack-col">
                  <span className="sv-stack-label">Frontend &amp; UI Framework</span>
                  <span className="sv-stack-val" style={{ fontSize: 14 }}>{project.techStack.frontend}</span>
                </div>
              )}
              {project.techStack.backend && (
                <div className="sv-stack-col">
                  <span className="sv-stack-label">Backend &amp; API Logic</span>
                  <span className="sv-stack-val" style={{ fontSize: 14 }}>{project.techStack.backend}</span>
                </div>
              )}
              {project.techStack.databaseStorage && (
                <div className="sv-stack-col">
                  <span className="sv-stack-label">Databases &amp; Cloud Storage</span>
                  <span className="sv-stack-val" style={{ fontSize: 14 }}>{project.techStack.databaseStorage}</span>
                </div>
              )}
              {project.techStack.integrations && (
                <div className="sv-stack-col">
                  <span className="sv-stack-label">Integrations &amp; Protocols</span>
                  <span className="sv-stack-val" style={{ fontSize: 14 }}>{project.techStack.integrations}</span>
                </div>
              )}
              {project.techStack.asyncRealtime && (
                <div className="sv-stack-col">
                  <span className="sv-stack-label">Async Tasks &amp; WebSockets</span>
                  <span className="sv-stack-val" style={{ fontSize: 14 }}>{project.techStack.asyncRealtime}</span>
                </div>
              )}
              {project.techStack.devops && (
                <div className="sv-stack-col">
                  <span className="sv-stack-label">DevOps &amp; Cloud Hosting</span>
                  <span className="sv-stack-val" style={{ fontSize: 14 }}>{project.techStack.devops}</span>
                </div>
              )}
            </div>
          </div>

          {/* Section 4: Tags & Keywords */}
          <div style={{ paddingTop: 20, borderTop: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div className="sv-project-tags">
              <span style={{ fontSize: 12, fontWeight: 700, color: "#64748b", alignSelf: "center", marginRight: 4 }}>
                Technologies:
              </span>
              {project.tags.map((tag) => (
                <span key={tag} className="sv-project-tag-pill">
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              {project.serviceSlugs.map((slug) => (
                <Link key={slug} href={`/services/${slug}`} className="sv-proj-btn-outline" style={{ fontSize: 12, padding: "6px 14px" }}>
                  Related Service: {slug.replace(/-/g, " ").toUpperCase()} →
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Related Case Studies ── */}
        {relatedProjects.length > 0 && (
          <div style={{ marginTop: 60 }}>
            <div className="svc-pill-badge">
              <span>EXPLORE MORE CASE STUDIES</span>
            </div>
            <h2 style={{ fontSize: 26, fontWeight: 800, color: "#0f172a", marginBottom: 24 }}>
              Related Production Deliveries
            </h2>
            <div className="sv-case-cards-grid">
              {relatedProjects.map((rel) => (
                <div key={rel.id} className="sv-case-compact-card">
                  <div className="sv-case-card-header">
                    <span className="sv-case-badge">{rel.category}</span>
                  </div>
                  <h3 className="sv-case-card-title">{rel.title}</h3>
                  <p className="sv-case-card-desc">{rel.shortDesc}</p>
                  <div className="sv-case-tags">
                    {rel.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="sv-case-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="sv-case-card-footer">
                    <Link href={`/case-study/${rel.id}`} className="sv-case-view-btn">
                      <span>Full Case Study</span>
                      <Arrow />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* ── 3. BOTTOM FOUNDER CONTACT CTA ── */}
      <section className="sec sv-contact-sec" style={{ paddingTop: 0 }}>
        <div className="contact-card sv-contact-card">
          <div className="contact-bg-glow" />

          <div className="contact-content">
            <div className="contact-pill-badge">
              <span className="contact-pill-dot" />
              <span>Architectural Consultation</span>
            </div>
            <h2>
              Need a system engineered like <em>{project.shortTitle}?</em>
            </h2>
            <p>
              Schedule a technical discovery session with Umar Darraz, Founder &amp; CEO. We will discuss your exact requirements, evaluate architecture options, and propose a concrete milestone delivery plan.
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
                <small>Direct Line</small>
                <b>+1 (502) 713-5115</b>
              </div>
            </a>

            <a className="contact-info-card" href={mail}>
              <div className="contact-info-icon">
                <WebIcon />
              </div>
              <div className="contact-info-text">
                <small>Direct Email</small>
                <b>umar@abitechsolutions.com</b>
              </div>
            </a>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <MapPinIcon />
              </div>
              <div className="contact-info-text">
                <small>Global Presence</small>
                <b>USA-Based, Serving Clients Worldwide</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

