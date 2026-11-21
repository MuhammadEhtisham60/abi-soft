export type ProjectCaseStudy = {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  serviceCategory: string; // Used for filtering
  serviceSlugs: string[]; // Slugs of services this project belongs to
  shortDesc: string;
  overview: string;
  features: string[];
  techStack: {
    frontend?: string;
    backend?: string;
    databaseStorage?: string;
    integrations?: string;
    asyncRealtime?: string;
    devops?: string;
  };
  tags: string[];
  seoMetadata: {
    metaTitle: string;
    metaDescription: string;
    primaryKeyword: string;
    supportingKeywords: string;
  };
  image?: string;
};

export const allProjects: ProjectCaseStudy[] = [
  {
    id: "luxury-explorers-erp",
    title: "Luxury Explorers ERP — Enterprise Resource Planning, Double-Entry Accounting & Multi-Destination Project Logistics Platform",
    shortTitle: "Luxury Explorers ERP",
    category: "Enterprise Resource Planning (ERP) & FinTech",
    serviceCategory: "Enterprise SaaS & ERP",
    serviceSlugs: ["software-development"],
    shortDesc: "Luxury Explorers ERP is an enterprise operations and accounting platform engineered for luxury architectural fit-out and real estate operations. It centralizes double-entry bookkeeping, multi-currency ledger adjustments, and statutory VAT filing while synchronizing multi-destination corporate project logistics, employee contracts, and procurement workflows within a single high-security portal.",
    overview: "Engineered to resolve the operational friction of large-scale interior architecture, construction fit-out, and corporate events, Luxury Explorers ERP unifies commercial sales pipelines with strict financial governance. Built upon a dual-database architecture separating transactional operations from employee logistics, the platform delivers full double-entry general ledger management, automated VAT compliance, and transaction locking to prevent retrospective tampering. Its frontend, architected in React 18 with Redux Toolkit and Material-UI, empowers finance teams and project directors to orchestrate complex Request for Proposal (RFP) lifecycles across international destinations. From chartered flight coordination and supplier bills to automated credit revaluations and audit-ready PDF generation, the platform ensures total fiscal transparency and operational control.",
    features: [
      "Double-Entry General Ledger & Transaction Locking: Enforces immutable debit-credit balancing across journal entries, multi-currency accounts, and automated VAT returns, with strict fiscal period locking.",
      "Multi-Destination Project & RFP Logistics: Coordinates complex multi-city operational workflows, managing client requirements for flights, corporate accommodations, visa assistance, and ground transport.",
      "Enterprise Identity & HRMS Lifecycle: Administers role-based access control, departmental hierarchies, employee salary structures, leave accruals, and full-and-final settlement calculations.",
      "High-Performance Financial Data Export: Features parallelized data streaming and client-side document processing for real-time PDF generation and high-volume Excel reporting.",
      "Secure Document & Asset Repository: Facilitates hierarchical corporate file storage with pre-signed direct AWS S3 uploads and soft-delete trash recovery."
    ],
    techStack: {
      frontend: "React 18, Redux Toolkit, Material-UI v5, Syncfusion Document Suite, React-PDF, Axios",
      backend: "Python 3.11+, Django 4.2 LTS, Django REST Framework, Knox Token Authentication",
      databaseStorage: "Dual PostgreSQL Instances (Primary CRM DB + Secondary HR DB), Redis, AWS S3",
      asyncRealtime: "Celery, Redis Message Broker, Django Channels (WebSockets)",
      devops: "Docker, Bitbucket Pipelines, AWS EC2 Ubuntu Deployment Automation"
    },
    tags: ["React 18", "Django REST Framework", "Dual PostgreSQL", "Double-Entry Accounting", "Redux Toolkit", "AWS S3"],
    seoMetadata: {
      metaTitle: "Luxury Explorers ERP | Enterprise Accounting & Project Management Software",
      metaDescription: "Discover Luxury Explorers ERP, a dual-database enterprise platform uniting double-entry accounting, VAT compliance, and multi-destination project logistics.",
      primaryKeyword: "Enterprise Accounting ERP Software",
      supportingKeywords: "Double-entry ledger system, multi-destination RFP software, real estate fit-out ERP, Django React enterprise software"
    },
    image: "/images/service-tech-featured.webp"
  },
  {
    id: "sublime-vip-concierge",
    title: "Sublime VIP Concierge — Ultra-Luxury Travel, Private Aviation Charter & Multi-Tenant Enterprise Mobility Engine",
    shortTitle: "Sublime VIP Concierge",
    category: "Luxury Hospitality & Corporate Mobility",
    serviceCategory: "Luxury Hospitality & Travel",
    serviceSlugs: ["software-development", "app-development", "graphics-ui-ux-design"],
    shortDesc: "Sublime VIP Concierge is a premier digital lifestyle and mobility platform for Ultra-High-Net-Worth individuals and enterprise organizations. Integrated with private jet charter dispatch, Amadeus GDS luxury hotel suites, and chauffeur limousine booking, it powers white-label portals for prominent regional institutions including Aldar Properties, STC, and PIF.",
    overview: "Sublime VIP Concierge bridges the gap between elite hospitality providers and discerning global clients. The platform orchestrates an integrated suite of luxury mobility services—allowing members to charter private aircraft with custom flight legs, book luxury 5-star hotel suites via direct Amadeus and Leonardo GDS integration, reserve premium chauffeur fleets, and secure reservations at exclusive restaurants. The architecture features a unified Django booking and payments engine coupled with specialized React frontend applications. While private clients access a comprehensive VIP interface with 24/7 concierge chat and tokenized Tap Payments checkout, corporate partners (such as Aldar Properties, STC, and PIF) utilize dedicated white-label portals featuring enterprise single sign-on and bespoke corporate travel allowances.",
    features: [
      "Private Aviation Charter Dispatch: Enables clients to configure bespoke flight itineraries, select aircraft categories, specify passenger manifests, and receive verified charter quotations.",
      "Amadeus & Leonardo GDS Suite Integration: Connects directly with global distribution systems to display live availability, luxury amenities, and negotiated corporate rates for 5-star hotels worldwide.",
      "Multi-Tenant White-Label Architecture: Delivers branded corporate travel portals for enterprise partners (Aldar, STC, PIF) with custom domain routing and dedicated permission scopes.",
      "Chauffeur & Fine Dining Reservations: Coordinates premium limousine transfers with geospatial route mapping alongside reservations at partner culinary venues.",
      "Tokenized Secure Payments & Live Concierge Chat: Integrates Tap Payments SDK for PCI-compliant pre-authorizations and real-time WebSocket chat with personal concierge specialists."
    ],
    techStack: {
      frontend: "React 18, Redux Toolkit, Material-UI, Vis.gl Google Maps, Tap Payments SDK, React-Slick",
      backend: "Python 3.12, Django 5.0, Django REST Framework, Celery Distributed Task Queue",
      integrations: "Amadeus Hospitality API, Leonardo Hotel Media API, Tap Payments Gateway, Aldar SSO",
      databaseStorage: "PostgreSQL, Redis Cache, Django Channels (WebSockets), AWS S3",
      devops: "Ubuntu Cloud Instances, Gunicorn, Nginx, Systemd Daemon Management"
    },
    tags: ["React 18", "Django 5.0", "Amadeus GDS", "Tap Payments", "Private Aviation", "White-Label SaaS"],
    seoMetadata: {
      metaTitle: "Sublime VIP Concierge | Private Jet & Luxury Hotel Booking Platform",
      metaDescription: "Experience Sublime Concierge, a bespoke platform powering private aviation charters, Amadeus GDS luxury hotel suites, and enterprise white-label portals.",
      primaryKeyword: "Luxury VIP Concierge Software",
      supportingKeywords: "Private jet charter booking engine, Amadeus hotel GDS integration, white-label corporate travel portal, luxury concierge app"
    },
    image: "/images/mobile-hero.jpg"
  },
  {
    id: "cafl-ai-legal-rag",
    title: "CAFL AI — Computer-Assisted Legal Framework & Conversational RAG Intelligence Platform",
    shortTitle: "CAFL AI Legal Intelligence",
    category: "LegalTech & Artificial Intelligence",
    serviceCategory: "Artificial Intelligence & RAG",
    serviceSlugs: ["ai-solutions"],
    shortDesc: "CAFL AI is a specialized legal technology platform that accelerates judicial document analysis and statutory research using Retrieval-Augmented Generation (RAG). Built for legal practitioners and enterprise law firms, it pairs a streaming WebSocket consultation interface with automated statutory citations, Azure Blob SAS file ingestion, and Stripe subscription billing.",
    overview: "Legal practitioners require meticulous accuracy, verified statutory precedent, and absolute confidentiality when conducting legal research. CAFL AI delivers an enterprise-grade artificial intelligence workspace designed specifically for legal document discovery and statutory consultation. Featuring a dual-surface architecture, CAFL AI provides legal professionals with an interactive chat interface that streams responses with inline statutory citations, case precedent references, and document exhibit verification. Simultaneously, the enterprise backoffice portal empowers administrators to manage chunked legal document uploads to Azure Blob Storage via Shared Access Signatures (SAS), monitor token consumption quotas, configure tiered Stripe subscription plans, and review granular activity audit logs.",
    features: [
      "Conversational RAG with Verified Citations: Streams intelligent legal analyses over WebSockets, presenting clickable statutory citations that highlight exact sections and source exhibits.",
      "Secure Azure Blob Knowledge Base Ingestion: Manages hierarchical legal document repositories with pre-signed chunked SAS uploads directly from the browser to cloud storage.",
      "Dynamic Chat Quota & Token Management: Enforces tiered token allowances and request frequency limits tailored to individual subscription tiers.",
      "Stripe Subscription Billing & Invoicing: Automates recurring subscription lifecycles, checkout sessions, plan upgrades, and invoice generation for law practices.",
      "Enterprise Case Organization: Equips attorneys with project folders, case archiving, starred precedent indexing, and exportable conversation summaries."
    ],
    techStack: {
      frontend: "Vite, React 18, Redux Toolkit, Material-UI, TanStack React Table, Lucide Icons, SimpleBar",
      backend: "Python 3.12, Django 5.2, Django REST Framework, Django Channels (WebSockets), Celery",
      integrations: "OpenAI API / Vector Ingestion, Stripe Billing API, Google OAuth 2.0",
      databaseStorage: "Azure Blob Storage (SAS Tokens), Redis Broker, Vector DB Embeddings",
      devops: "Zero-Downtime Blue/Green Deployment Automation, Docker, Ubuntu Cloud Servers"
    },
    tags: ["Vite", "React 18", "RAG AI", "Django Channels", "Azure Blob SAS", "Stripe Billing"],
    seoMetadata: {
      metaTitle: "CAFL AI | Legal RAG Intelligence & Statutory Analysis Software",
      metaDescription: "Explore CAFL AI, an enterprise legal tech platform combining conversational RAG, verified statutory citations, Azure Blob storage, and Stripe billing.",
      primaryKeyword: "Legal AI & Document Intelligence Platform",
      supportingKeywords: "Legal RAG software, statutory citation search, AI legal assistant, conversational law tech, Django Vite legal software"
    },
    image: "/images/ai-ser.webp"
  },
  {
    id: "ownify-ai-maas",
    title: "Ownify AI — Multi-Tenant Model-as-a-Service, Headless Visual Website Builder & Automation Platform",
    shortTitle: "Ownify AI (MaaS)",
    category: "B2B SaaS & Marketing Technology",
    serviceCategory: "Enterprise SaaS & ERP",
    serviceSlugs: ["software-development", "website-development", "ai-solutions"],
    shortDesc: "Ownify AI is a multi-tenant B2B SaaS platform enabling businesses to deploy branded digital experiences, manage isolated tenant data schemas, and construct dynamic landing pages with a drag-and-drop visual builder. It integrates automated custom domain DNS provisioning, multi-schema PostgreSQL databases, and autonomous web data extraction.",
    overview: "Ownify AI (MaaS) provides digital agencies and marketing organizations with an all-in-one infrastructure for deploying branded web presences and automated client marketing funnels. Utilizing schema-level tenant isolation, the platform guarantees complete data privacy and performance stability across thousands of enterprise tenants on a shared application cluster. The system features an intuitive visual website builder allowing users to assemble modular layouts with live multi-viewport previews and real-time component styling. To streamline client onboarding, Ownify AI incorporates an automated 5-step custom domain configuration wizard that verifies DNS CNAME records, provisions SSL certificates, and maps domains directly to the tenant's isolated database schema.",
    features: [
      "Multi-Tenant Schema Isolation: Enforces strict tenant data partitioning using django-tenants, ensuring each enterprise operates within an isolated PostgreSQL schema.",
      "Visual Drag-and-Drop Website Builder: Features modular layout blocks, responsive design previews (desktop, tablet, mobile), and deep style customizations without manual coding.",
      "Automated Custom Domain & DNS Onboarding: Guides tenants through domain entry, DNS record verification, SSL provisioning, and live schema activation.",
      "Autonomous Web Scraping Engine: Employs anti-bot stealth scraping utilities with proxy rotation and cloud media synchronization to aggregate market intelligence.",
      "Centralized Marketing Conversation Hub: Unifies multi-channel lead messaging, internal notes, and conversation export tools for marketing operations."
    ],
    techStack: {
      frontend: "Vite, React 18, Zustand, Redux Toolkit, Material-UI, TanStack Table, MUI X Data Grid",
      backend: "Python 3.12, Django 5.2, django-tenants (Multi-Schema PostgreSQL), Celery",
      databaseStorage: "Azure Blob Storage, AWS S3 Automated Synchronization, Redis Cache",
      integrations: "Custom Domain DNS Verification Engine, Nginx Dynamic Reverse Proxy, Stealth Scrapers",
      devops: "Docker Containerization, Automated SSL Engine, Multi-Tenant Cloud Cluster"
    },
    tags: ["Multi-Tenant", "django-tenants", "React 18", "Zustand", "Headless CMS", "DNS Automation"],
    seoMetadata: {
      metaTitle: "Ownify AI | Multi-Tenant SaaS, Visual Headless CMS & Marketing Engine",
      metaDescription: "Build and deploy isolated multi-tenant digital portals with Ownify AI, featuring a visual website builder, custom domain provisioning, and stealth data scraping.",
      primaryKeyword: "Multi-Tenant SaaS Platform",
      supportingKeywords: "Visual website builder SaaS, multi-schema PostgreSQL CMS, custom domain DNS automation, headless CMS builder"
    },
    image: "/images/website-development.webp"
  },
  {
    id: "epstein-files-investigative",
    title: "EpsteinFiles — High-Throughput Investigative Document Intelligence & Vector Search Engine",
    shortTitle: "EpsteinFiles Search",
    category: "LegalTech & Investigative Intelligence",
    serviceCategory: "Artificial Intelligence & RAG",
    serviceSlugs: ["ai-solutions"],
    shortDesc: "EpsteinFiles is a specialized investigative search platform engineered to query and analyze millions of unredacted court transcripts, depositions, and evidentiary exhibits. Optimized with PgBouncer connection pooling and dedicated vector indices, it delivers sub-second keyword discovery and contextual AI synthesis.",
    overview: "Investigative journalism and legal discovery often require parsing millions of pages of unstructured court filings, scanned affidavits, and multi-party depositions. EpsteinFiles provides researchers, legal teams, and journalists with a high-throughput search and conversational analysis interface optimized for massive evidentiary corpuses. Built on an optimized database architecture utilizing PgBouncer for high-concurrency connection pooling, the platform enables hundreds of simultaneous researchers to run deep vector and full-text queries. Users can interrogate the archive using an interactive chat interface that returns exact page citations, exhibit references, and OCR confidence indicators, ensuring complete evidentiary integrity.",
    features: [
      "High-Concurrency Vector Discovery: Pairs high-density vector embeddings with PgBouncer-mediated PostgreSQL connections to sustain intense query workloads during major investigative releases.",
      "Precise Evidentiary Attribution: Displays direct page citations, document exhibit identifiers, and optical character recognition confidence scores alongside AI responses.",
      "Bulk Document Ingestion Pipeline: Manages the automated ingestion and indexing of massive PDF court archives stored in Azure Blob Storage.",
      "Granular Activity Auditing: Records researcher queries, document views, and case export events for regulatory and research compliance."
    ],
    techStack: {
      frontend: "Vite, React 18, Redux Toolkit, Material-UI, TanStack Table, Iconsax",
      backend: "Python 3.12, Django 5.2, PgBouncer Connection Pooler, Django Channels",
      databaseStorage: "Azure Blob Storage, PostgreSQL Vector Extensions, Redis Queue",
      devops: "GitHub Actions Workflows, Automated Health Checking, Ubuntu Cloud Cluster"
    },
    tags: ["React 18", "Vector Search", "PgBouncer", "Legal Discovery", "Azure Blob", "Django Channels"],
    seoMetadata: {
      metaTitle: "EpsteinFiles | High-Concurrency Legal Document Search & Discovery",
      metaDescription: "Discover EpsteinFiles, an investigative intelligence platform engineered with vector search and PgBouncer connection pooling to analyze complex court filings.",
      primaryKeyword: "Legal Document Discovery Software",
      supportingKeywords: "High-concurrency document search, investigative legal intelligence, court transcript vector search, PgBouncer Django architecture"
    },
    image: "/images/ai.jpg"
  },
  {
    id: "luxury-explorers-collection-lec",
    title: "Luxury Explorers Collection (LEC) — Bespoke Luxury Villa Rental & Reservation Management System",
    shortTitle: "Luxury Explorers Collection (LEC)",
    category: "Luxury Hospitality & TravelTech",
    serviceCategory: "Luxury Hospitality & Travel",
    serviceSlugs: ["website-development", "graphics-ui-ux-design"],
    shortDesc: "Luxury Explorers Collection (LEC) is a specialized hospitality platform for ultra-luxury villa rentals and estate reservations. It combines an experiential Next.js 14 guest portal with an automated backend Reservation Management System (RMS) handling seasonal pricing tiers, villa availability, and concierge inquiry workflows.",
    overview: "Catering to discerning travelers seeking exclusive private villas across premier global destinations, Luxury Explorers Collection delivers an intuitive, frictionless digital booking experience. The platform is designed with a dual-layer architecture: a cinematic guest portal that showcases private estates through fluid parallax animations, and a transactional Next.js 14 App Router booking engine that communicates directly with the Django RMS backend. The platform calculates dynamic seasonal pricing, evaluates blackout dates, and coordinates bespoke reservation inquiries. Guests can explore villa amenities, review bedroom configurations, and request personalized concierge services, while estate managers maintain full oversight of reservations, client profiles, and automated confirmation receipts.",
    features: [
      "Dynamic Seasonal Pricing & Quotations: Computes live rental rates based on seasonal tier rules, minimum stay requirements, and guest capacity limits.",
      "Next.js 14 App Router Booking Workflow: Delivers fast, server-side rendered villa listings, interactive availability calendars, and direct inquiry forms.",
      "Cinematic Estate Brand Experience: Employs GSAP ScrollTrigger timelines, horizontal gallery scrolls, and responsive image parallax to showcase ultra-luxury architecture.",
      "Automated Inquiry & Notification Engine: Triggers instant email notifications and booking receipts via Amazon SES / Boto3 upon receipt of reservation requests."
    ],
    techStack: {
      frontend: "Next.js 14 (App Router), React 18, GSAP (GreenSock Animation Platform), Material-UI, Emotion",
      backend: "Python 3.12, Django 5.2, Django REST Framework, Pillow Imaging Library",
      databaseStorage: "AWS S3 (High-Resolution Media Hosting), PostgreSQL, Bitbucket Pipelines",
      integrations: "Amazon SES, Boto3 AWS SDK, Stripe Pre-Authorizations",
      devops: "Vercel Edge Network, AWS CloudFront, Dockerized Django Backend"
    },
    tags: ["Next.js 14", "GSAP Animations", "Django 5.2", "Hospitality RMS", "AWS S3", "Dynamic Pricing"],
    seoMetadata: {
      metaTitle: "Luxury Explorers Collection | Ultra-Luxury Villa Rentals & RMS",
      metaDescription: "Reserve ultra-exclusive private villas with Luxury Explorers Collection, powered by a dynamic Next.js reservation engine and Django RMS backend.",
      primaryKeyword: "Luxury Villa Rental Platform",
      supportingKeywords: "Ultra-luxury vacation rental booking, villa reservation management system, Next.js hospitality platform, bespoke estate booking engine"
    },
    image: "/images/service-tech-featured.webp"
  },
  {
    id: "vibelink-campus-community",
    title: "VibeLink — Higher Education Student Engagement, Club Governance & Event Ticketing Platform",
    shortTitle: "VibeLink Campus Platform",
    category: "EdTech & Community Management",
    serviceCategory: "EdTech & GovTech",
    serviceSlugs: ["app-development", "website-development"],
    shortDesc: "VibeLink is a digital campus ecosystem connecting university students, academic clubs, and administrative councils. Powered by a responsive React dashboard and an asynchronous transactional email microservice integrated with Firebase Admin SDK, it streamlines club leadership governance, event approvals, and student engagement.",
    overview: "Modern universities and student organizations require structured digital tools to manage extracurricular life, student clubs, and campus events. VibeLink provides a centralized administration portal where student leaders and university administrators collaborate seamlessly. The platform enables student bodies to register new academic and cultural clubs, delegate officer roles, and submit campus events for administrative clearance. Backed by a dedicated Django REST microservice, VibeLink manages user authentication lifecycles via the Firebase Admin SDK and delivers asynchronous, responsive MIME email notifications for student onboarding, event tickets, and governance alerts.",
    features: [
      "Student & Club Governance Directory: Organizes campus clubs into categorized directories with assigned leadership roles and administrative oversight.",
      "Event Approval & Ticketing Lifecycle: Coordinates event proposals, faculty approvals, attendee registration, and ticketing capacity tracking.",
      "Firebase User Lifecycle Integration: Connects with Firebase Admin SDK to orchestrate secure student sign-ups, password resets, and session tokens.",
      "Threaded Transactional Email Delivery: Utilizes asynchronous background workers to dispatch branded HTML notifications with zero latency impact on user operations."
    ],
    techStack: {
      frontend: "React 18, Vite, Redux Toolkit, Material-UI, Lucide React, Axios",
      backend: "Django REST Framework, Firebase Admin SDK, Python MIME Multi-Part Email Engine",
      databaseStorage: "Firebase Authentication, SQLite / Internal Django Engine",
      devops: "Docker, Cloud Run, Transactional SMTP Gateway"
    },
    tags: ["React 18", "Vite", "Firebase Admin SDK", "Campus Management", "Transactional Email", "Redux Toolkit"],
    seoMetadata: {
      metaTitle: "VibeLink | Student Club Governance & Campus Event Management Platform",
      metaDescription: "Explore VibeLink, a modern campus community platform streamlining university club governance, student event ticketing, and Firebase user lifecycle management.",
      primaryKeyword: "Campus Student Engagement Platform",
      supportingKeywords: "University club management software, student event approval portal, Firebase education portal, campus community management system"
    },
    image: "/images/app-development.webp"
  },
  {
    id: "bes-hr-payroll-portal",
    title: "BES HR & Payroll Portal — Enterprise Workforce Management, Biometric Attendance & Payroll Engine",
    shortTitle: "BES HR & Payroll Portal",
    category: "Human Resource Management Systems (HRMS)",
    serviceCategory: "Enterprise SaaS & ERP",
    serviceSlugs: ["software-development"],
    shortDesc: "BES HR & Payroll Portal is an enterprise Human Resource Management System (HRMS) managing employee lifecycles, automated biometric attendance reconciliation, interview candidate evaluations, and statutory payroll calculations within a unified React 18 corporate portal.",
    overview: "Engineered to handle comprehensive workforce operations across multi-tiered corporate structures, the BES Portal integrates daily employee attendance tracking with payroll computation. The platform provides intuitive interfaces for employee onboarding, leave entitlement management, interview candidate assessment scorecards, and internal helpdesk ticketing, ensuring operational efficiency and labor compliance.",
    features: [
      "Automated Biometric & Daily Attendance: Tracks employee shift attendance, overtime accruals, and leave requests with approval workflows.",
      "Interview & Candidate Evaluation Pipeline: Provides recruitment teams with candidate scorecards, resume viewers, and interview schedule tracking.",
      "Asset & Inventory Allocation: Logs hardware equipment and corporate asset issuances across global teams.",
      "Salary Structure & Payroll Reporting: Formulates automated monthly salary structures and generates downloadable payslips (@react-pdf/renderer)."
    ],
    techStack: {
      frontend: "React 18, Redux Toolkit, Material-UI v5, CKEditor 5, React-PDF, Bootstrap",
      backend: "Enterprise HRMS Backend, Attendance Reconciliation Engine",
      databaseStorage: "Relational PostgreSQL, Cloud Document Storage",
      devops: "Enterprise VPN Integration, Automated Daily Offsite Backups"
    },
    tags: ["React 18", "Redux Toolkit", "HRMS", "Payroll Engine", "Attendance Management"],
    seoMetadata: {
      metaTitle: "BES HR & Payroll Portal | Enterprise Workforce & Biometric Management",
      metaDescription: "Explore BES HR & Payroll Portal, an enterprise workforce platform delivering biometric attendance reconciliation and statutory payroll calculations.",
      primaryKeyword: "Enterprise HRMS & Payroll Software",
      supportingKeywords: "Biometric attendance HRMS, enterprise payroll engine, candidate interview pipeline, React HR portal"
    },
    image: "/images/service-tech-featured.webp"
  },
  {
    id: "uae-social-welfare-portal",
    title: "UAE Social Welfare & Financial Aid Portal — Bilingual Citizen Assistance & Case Review System",
    shortTitle: "UAE Social Welfare Portal",
    category: "GovTech & Public Welfare",
    serviceCategory: "EdTech & GovTech",
    serviceSlugs: ["app-development", "graphics-ui-ux-design"],
    shortDesc: "A government-grade financial assistance portal engineered for sovereign citizen welfare applications. Integrated with UAE PASS national single sign-on and full bilingual (Arabic & English) localization, it enables applicants to submit aid requests while providing review committees with scoring tools and document verification workflows.",
    overview: "Designed in accordance with UAE digital government standards, the Financial Aid Portal delivers an accessible, secure interface for citizens seeking financial assistance. The platform integrates seamlessly with the UAE PASS national digital identity framework (salcf_web_stage) to authenticate applicants instantly. Review boards utilize dedicated administrative portals featuring household financial assessment scoring, income verification document viewers, and real-time applicant communication channels.",
    features: [
      "UAE PASS National Identity Integration: Supports seamless citizen authentication via official UAE PASS OAuth2 protocols.",
      "Full Bilingual Localization (Arabic & English): Provides native right-to-left (RTL) Arabic typography alongside standard English interfaces using i18next.",
      "Household Need & Eligibility Scoring: Algorithms evaluate family income, dependents, and financial obligations to score aid eligibility.",
      "Secure Evidence & Document Verification: Facilitates the confidential upload and review of financial statements and identity credentials."
    ],
    techStack: {
      frontend: "React 18, Vite, Redux Toolkit, Material-UI v5, i18next (Bilingual AR/EN), UAE PASS SSO",
      backend: "GovTech Secure Middleware, Case Review & Scoring Engine",
      databaseStorage: "Secure Government-Grade Encrypted Database, Cloud Audit Vault",
      devops: "Sovereign Cloud Deployment, Strict Zero-Trust Architecture"
    },
    tags: ["UAE PASS", "GovTech", "React 18", "Bilingual RTL", "Financial Aid", "Vite"],
    seoMetadata: {
      metaTitle: "UAE Social Welfare & Financial Aid Portal | Citizen Case Review System",
      metaDescription: "Explore the UAE Social Welfare & Financial Aid Application Portal, featuring UAE PASS single sign-on, bilingual Arabic/English RTL support, and automated eligibility scoring.",
      primaryKeyword: "GovTech Social Welfare Portal",
      supportingKeywords: "UAE PASS authentication, bilingual RTL government portal, financial aid scoring system, citizen case management"
    },
    image: "/images/ui-design.webp"
  }
];

export function getProjectsByService(serviceSlug: string): ProjectCaseStudy[] {
  return allProjects.filter((p) => p.serviceSlugs.includes(serviceSlug));
}

export function getProjectById(id: string): ProjectCaseStudy | undefined {
  return allProjects.find((p) => p.id === id);
}

