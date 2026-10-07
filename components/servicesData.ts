export type ServiceStat = {
  value: string;
  label: string;
  sub?: string;
};

export type KeyDriver = {
  title: string;
  desc: string;
  badge?: string;
};

export type RoiMetric = {
  metric: string;
  label: string;
  detail: string;
  sub?: string;
};

export type ServicePillar = {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  deliverables: string[];
  badge: string;
};

export type TechCategory = {
  category: string;
  items: { name: string; tag?: string }[];
};

export type ServiceProcess = {
  step: number;
  phase: string;
  timeframe: string;
  title: string;
  desc: string;
  deliverables: string[];
};

export type ServiceUseCase = {
  industry: string;
  challenge: string;
  solution: string;
  impact: string;
  badge: string;
};

export type Service = {
  slug: string;
  t: string;
  p: string;
  intro: string;
  d: string[];
  big?: boolean;
  category: string;
  desc?: string;
  image?: string;
  features?: string[];
  tags: string[];
  heroStats: ServiceStat[];
  marketPerspective: {
    headline: string;
    subheadline: string;
    description: string;
    keyDrivers: KeyDriver[];
    roiMetrics: RoiMetric[];
  };
  pillars: ServicePillar[];
  techCategories: TechCategory[];
  processSteps: ServiceProcess[];
  useCases: ServiceUseCase[];
  offers: [string, string][];
  stack: string[];
  faq: [string, string][];
  guarantees: { title: string; desc: string }[];
};

export const services: Service[] = [
  {
    slug: "ai-solutions",
    t: "AI Solutions & Automation",
    p: "Smarter Technology. Better Tomorrow.",
    big: true,
    category: "Artificial Intelligence & Autonomous Systems",
    image: "/images/ai-ser.jpg",
    desc: "We build intelligent AI solutions that automate processes, enhance decision-making and create new opportunities for your business.",
    features: [
      "AI Chatbots & Autonomous Assistants",
      "Enterprise Workflow Automation",
      "Custom LLM & Private RAG Systems",
      "AI-Powered Document Intelligence",
      "Predictive Data Analytics & Forecasting",
    ],
    intro: "Transform repetitive operations into competitive advantages. We build custom generative AI assistants, secure private RAG knowledge engines, and autonomous multi-agent workflows engineered for measurable enterprise ROI.",
    d: ["M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V4a3 3 0 0 0-3 0ZM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"],
    tags: ["Autonomous Agents", "Enterprise RAG", "Workflow Automation", "Private LLM", "Predictive ML"],
    heroStats: [
      { value: "65%", label: "Operational Cost Reduction", sub: "Automating redundant business tasks" },
      { value: "< 2.5s", label: "Knowledge Query Speed", sub: "Enterprise RAG search across docs" },
      { value: "99.4%", label: "Data Extraction Accuracy", sub: "Document & contract intelligence" },
      { value: "4.2x", label: "Average 1st-Year ROI", sub: "Proven client operational leverage" },
    ],
    marketPerspective: {
      headline: "From Experimental AI to Deterministic Enterprise ROI",
      subheadline: "Why modern market leaders are adopting autonomous workflows today",
      description: "In 2025 and beyond, winning businesses do not rely on generic chat tools. They deploy proprietary, deterministic AI infrastructure connected directly to internal ERPs, CRMs, and document archives. Our systems execute zero-data-leakage workflows, ensuring strict data sovereignty while freeing hundreds of human hours every month.",
      keyDrivers: [
        {
          title: "Private Vector Knowledge (RAG)",
          desc: "Empower your teams and customers with instant answers extracted accurately from thousands of confidential PDFs, policies, and schemas.",
          badge: "Zero Hallucination Guardrails",
        },
        {
          title: "Autonomous Multi-Agent Chains",
          desc: "Deploy autonomous agent swarms that validate data, draft replies, trigger webhook actions, and escalate edge cases with zero human latency.",
          badge: "24/7 Continuous Execution",
        },
        {
          title: "Enterprise Data Privacy & Sovereignty",
          desc: "Zero model training on your proprietary data. Private VPC or on-prem deployments with complete role-based token encryption.",
          badge: "SOC2 & GDPR Compliant",
        },
      ],
      roiMetrics: [
        { metric: "18+ Hrs/Wk", label: "Knowledge Worker Savings", detail: "Eliminates repetitive data entry, email categorization, and manual lookups." },
        { metric: "90% Faster", label: "Customer Resolution", detail: "Tier-1 inquiries resolved instantly with conversational AI assistants." },
        { metric: "100%", label: "Data Isolation", detail: "Complete boundary control preventing vendor model contamination." },
      ],
    },
    pillars: [
      {
        title: "Custom LLM Assistants & Autonomous Agents",
        tagline: "High-accuracy conversational intelligence trained on your business domain.",
        description: "We design and deploy custom conversational agents that act as Tier-1 support reps, interactive sales concierges, and internal copilots. Connected to your live databases, they answer questions with exact context.",
        highlights: [
          "Domain-specific fine-tuning & prompt engineering",
          "Contextual memory and multi-turn conversation state",
          "Omnichannel deployment: Web, WhatsApp, Slack, Teams, and Mobile",
          "Human-in-the-loop escalation with full transcript audit",
        ],
        deliverables: ["Custom Trained Agent API", "Web Embed Widget", "Admin Dashboard", "Analytics & Log Tracker"],
        badge: "Conversational AI",
      },
      {
        title: "Enterprise RAG & Document Intelligence",
        tagline: "Turn unstructured documents and knowledge bases into instant queryable intelligence.",
        description: "Extract, classify, and summarize data from complex PDFs, invoices, contracts, and scanned forms. Our retrieval-augmented generation (RAG) pipelines eliminate hallucinations and cite exact source passages.",
        highlights: [
          "High-speed semantic search using Pinecone & Qdrant",
          "Automatic OCR & table extraction for financial invoices",
          "Real-time synchronization with Google Drive, Notion & S3",
          "Multi-tenant access controls and permission filtering",
        ],
        deliverables: ["Vector Search Engine", "Document Ingestion Pipeline", "Source-Citing Search UI", "REST Query API"],
        badge: "Knowledge Systems",
      },
      {
        title: "Workflow & Process Automation",
        tagline: "Hand redundant data pipelines and approval chains to self-correcting automations.",
        description: "Replace fractured spreadsheets and manual handoffs with automated background workers. We orchestrate complex integrations across CRM, accounting, billing, and communication tools.",
        highlights: [
          "Custom n8n, Make, and Zapier enterprise workflow architectures",
          "Automated lead enrichment and CRM syncing",
          "Exception handling, automated retries, and instant Slack alerts",
          "End-to-end webhook architecture with high concurrency",
        ],
        deliverables: ["Automated Flow Diagrams", "Production Server Instances", "Integration Webhooks", "Failover Monitoring"],
        badge: "Process Automation",
      },
      {
        title: "Predictive Analytics & Machine Learning",
        tagline: "Transform historical metrics into actionable forecasts and smart pricing algorithms.",
        description: "Harness supervised and unsupervised machine learning models to forecast inventory demand, detect customer churn risks, optimize algorithmic pricing, and uncover hidden revenue trends.",
        highlights: [
          "Customer churn prediction and behavioral scoring",
          "Demand forecasting and dynamic pricing engines",
          "Anomaly detection for fraud and cybersecurity threats",
          "Interactive executive dashboards with real-time alerts",
        ],
        deliverables: ["Predictive Model API", "Interactive BI Dashboard", "Data Cleansing Scripts", "Accuracy Benchmarks"],
        badge: "Predictive ML",
      },
    ],
    techCategories: [
      {
        category: "LLM & Foundation Models",
        items: [
          { name: "OpenAI GPT-4o / o1", tag: "Flagship Reasoning" },
          { name: "Claude 3.5 Sonnet", tag: "Code & Vision" },
          { name: "Llama 3.3 (Open Source)", tag: "Private Hosting" },
          { name: "Mistral Large", tag: "Multilingual" },
        ],
      },
      {
        category: "Orchestration & Vector Storage",
        items: [
          { name: "LangChain & LangGraph", tag: "Multi-Agent" },
          { name: "LlamaIndex", tag: "RAG Pipeline" },
          { name: "Pinecone / Qdrant", tag: "Vector Index" },
          { name: "pgvector (PostgreSQL)", tag: "Hybrid Search" },
        ],
      },
      {
        category: "Backend & Automation",
        items: [
          { name: "Python / FastAPI", tag: "High Throughput" },
          { name: "n8n Self-Hosted", tag: "Workflow Engine" },
          { name: "Node.js / TypeScript", tag: "Async Workers" },
          { name: "Redis & Celery", tag: "Task Queuing" },
        ],
      },
      {
        category: "Cloud Infrastructure & Security",
        items: [
          { name: "AWS Bedrock / SageMaker", tag: "Enterprise Cloud" },
          { name: "Azure OpenAI Service", tag: "HIPAA/SOC2" },
          { name: "Docker & Kubernetes", tag: "Containerization" },
          { name: "Guardrails AI", tag: "Safety & Filtering" },
        ],
      },
    ],
    processSteps: [
      {
        step: 1,
        phase: "Phase 1: Discovery & AI Feasibility",
        timeframe: "Week 1",
        title: "Data Audit & Architecture Blueprint",
        desc: "We analyze your existing data assets, identify high-impact automation opportunities, and design a secure architecture blueprint with clear ROI targets.",
        deliverables: ["Use-Case Feasibility Report", "Security Architecture Plan", "Fixed-Scope Sprint Roadmap"],
      },
      {
        step: 2,
        phase: "Phase 2: Prototype & RAG Setup",
        timeframe: "Weeks 2–3",
        title: "Vector Ingestion & Agent Sandbox",
        desc: "We configure private vector databases, vectorize your proprietary documentation, and build a functioning interactive prototype for internal review.",
        deliverables: ["Interactive Sandbox Demo", "Vector Ingestion Pipeline", "Prompt Benchmark Suite"],
      },
      {
        step: 3,
        phase: "Phase 3: Integration & Hardening",
        timeframe: "Weeks 4–6",
        title: "API Connections & Safety Guardrails",
        desc: "We connect the AI models to your live CRMs, ERPs, and databases while embedding deterministic fallback rules, rate-limits, and token cost controls.",
        deliverables: ["Production Webhook Integrations", "Guardrail Safety Filters", "Admin Monitoring Panel"],
      },
      {
        step: 4,
        phase: "Phase 4: Launch & Continuous Optimization",
        timeframe: "Week 7+",
        title: "Go-Live, Telemetry & Model Tuning",
        desc: "We deploy to production cloud infrastructure, monitor real-time inference latency, and continuously refine embeddings based on real-world queries.",
        deliverables: ["Cloud Deployment", "Telemetry & Error Logging", "24/7 SLA Support Agreement"],
      },
    ],
    useCases: [
      {
        industry: "Financial & Legal Services",
        challenge: "Manual review of 200+ page mortgage and compliance documents took 14 business days per client.",
        solution: "Engineered a private OCR & RAG pipeline extracting key clauses, risk flags, and tabular financials in 40 seconds.",
        impact: "Reduced processing turnaround by 82% while eliminating human transcription errors.",
        badge: "FinTech & Compliance",
      },
      {
        industry: "Global E-Commerce & Retail",
        challenge: "High support ticket volumes during peak seasons led to 6-hour response delays and abandoned carts.",
        solution: "Deployed a multilingual conversational AI concierge integrated with Shopify and Zendesk for instant resolution.",
        impact: "Resolved 68% of Tier-1 queries instantly without human agents; boosted conversion rate by 24%.",
        badge: "E-Commerce",
      },
      {
        industry: "B2B SaaS & Enterprise Ops",
        challenge: "Sales reps spent 12 hours weekly updating Salesforce records, drafting follow-ups, and scheduling demos.",
        solution: "Built autonomous AI workflow agents transcribing calls, enriching contact profiles, and drafting personalized proposals.",
        impact: "Freed 15+ hours per rep weekly, leading to a 31% increase in quarterly closed-won revenue.",
        badge: "Enterprise SaaS",
      },
    ],
    offers: [
      ["AI chatbots & assistants", "Support and sales assistants trained on your own content with strict accuracy guardrails."],
      ["Workflow automation", "Hand repetitive approvals, data entry and reporting to reliable autonomous workflows."],
      ["LLM & RAG integration", "Add language models to your product with vector databases and zero data leakage."],
      ["Document intelligence", "Extract, summarize and search contracts, invoices, and structured knowledge bases in seconds."],
      ["Predictive analytics & ML", "Turn historical data into forecasts, churn predictions, and actionable dashboards."],
      ["AI strategy & auditing", "A practical enterprise roadmap that picks high-ROI use cases before any build starts."],
    ],
    stack: ["OpenAI GPT-4o", "Claude 3.5", "Python", "FastAPI", "LangChain", "Pinecone", "n8n", "Docker", "AWS Bedrock"],
    faq: [
      ["Do I need my own labeled data to get started with AI?", "Not necessarily. We can start by utilizing your existing documentation (SOPs, PDF manuals, website content, CRM notes) via RAG (Retrieval-Augmented Generation), then progressively fine-tune custom models as your dataset matures."],
      ["Is our proprietary company data kept completely private and secure?", "Yes. We enforce enterprise-grade security protocols where zero client data is used for model training. We can deploy in your private AWS/Azure/GCP cloud VPC or self-hosted servers with full SOC2 and HIPAA compliance."],
      ["Can your AI solutions integrate with our existing software tools?", "Absolutely. We build standard REST/GraphQL APIs and webhooks that connect seamlessly with Salesforce, HubSpot, Zendesk, Slack, Shopify, PostgreSQL, Google Workspace, and proprietary databases."],
      ["How do you prevent AI hallucinations and ensure accuracy?", "We use strict Retrieval-Augmented Generation (RAG) with similarity thresholding, deterministic guardrail filters (Guardrails AI), and fallback rules that cite exact source citations for every single answer."],
    ],
    guarantees: [
      { title: "100% IP & Model Ownership", desc: "You own all code, configurations, embeddings, and architecture without licensing lock-in." },
      { title: "Strict Data Confidentiality (NDA)", desc: "Zero training on your proprietary data with mutual NDA protection before project kickoff." },
      { title: "US-Based Project Management", desc: "Clear communication, daily Slack channels, and scheduled milestone demos in US time zones." },
      { title: "Deterministic Performance SLAs", desc: "Sub-second vector lookup latency, 99.9% uptime targets, and continuous observability." },
    ],
  },
  {
    slug: "software-development",
    t: "Custom Software & Cloud",
    p: "Scalable Architecture for High-Growth Enterprises.",
    category: "Enterprise Software & Cloud Platforms",
    image: "/images/service-tech-featured.jpg",
    desc: "Custom software built around how your business really works: internal tools, customer platforms and integrations that scale as you grow.",
    features: [
      "Bespoke SaaS & Web Applications",
      "High-Throughput APIs & Microservices",
      "Internal Business Tools & Custom ERPs",
      "Cloud Architecture & DevOps CI/CD",
      "Legacy Code Modernization & Migration",
    ],
    intro: "Escape the limitations and per-seat taxes of off-the-shelf software. We engineer secure, multi-tenant SaaS platforms, distributed backends, and bespoke enterprise software built to scale effortlessly with your revenue.",
    d: ["M8 6l-6 6 6 6M16 6l6 6-6 6M14 4l-4 16"],
    tags: ["Custom SaaS", "Cloud Backends", "Enterprise ERP", "Microservices", "DevOps & CI/CD"],
    heroStats: [
      { value: "99.99%", label: "Platform Uptime SLA", sub: "Resilient cloud infrastructure" },
      { value: "100%", label: "Source Code Ownership", sub: "Zero recurring seat licenses" },
      { value: "10x", label: "Throughput Scalability", sub: "High-concurrency microservices" },
      { value: "2 Wks", label: "Agile Sprint Cycles", sub: "Continuous demos & rapid releases" },
    ],
    marketPerspective: {
      headline: "Eliminating Legacy Bottlenecks with Scalable Custom Architecture",
      subheadline: "Why commercial leaders choose bespoke software over rigid off-the-shelf SaaS",
      description: "Generic commercial software forces your unique operational advantages into rigid templates and penalizes growth with costly per-seat subscriptions. Bespoke enterprise engineering delivers complete IP ownership, bespoke workflows that match your exact operational model, and decoupled architecture capable of handling millions of transactions.",
      keyDrivers: [
        {
          title: "Full Codebase & IP Ownership",
          desc: "Never pay another per-seat license fee. Your software becomes a high-value proprietary balance sheet asset that you completely control.",
          badge: "Zero Vendor Lock-In",
        },
        {
          title: "High-Concurrency Cloud Architecture",
          desc: "Decoupled microservices and event-driven queues built to process surges in traffic with sub-50ms database latency.",
          badge: "Multi-Region Redundancy",
        },
        {
          title: "Seamless Enterprise Integrations",
          desc: "Consolidate scattered databases, payment gateways, ERPs, and legacy mainframes into one unified, real-time operating dashboard.",
          badge: "Unified Data Pipeline",
        },
      ],
      roiMetrics: [
        { metric: "$120k+", label: "Avg Annual SaaS Savings", detail: "Eliminating 3rd-party per-user licensing costs across growing enterprise teams." },
        { metric: "5x Faster", label: "Data Retrieval", detail: "Optimized PostgreSQL indexes and Redis caching replacing legacy manual lookups." },
        { metric: "Zero", label: "Downtime Deployments", detail: "Automated Blue/Green CI/CD pipelines keeping platforms live 24/7." },
      ],
    },
    pillars: [
      {
        title: "Bespoke SaaS Platforms & Customer Portals",
        tagline: "Subscription-ready, multi-tenant software engineered for global scale.",
        description: "From greenfield SaaS products to customer self-service portals, we build high-converting web applications with role-based access control, billing engines, and real-time collaboration features.",
        highlights: [
          "Multi-tenant database isolation with strict tenancy security",
          "Stripe & Paddle subscription billing with usage-based tiers",
          "Granular Role-Based Access Control (RBAC) & SAML/SSO",
          "Responsive, desktop-grade interfaces with sub-second page loads",
        ],
        deliverables: ["Full SaaS Source Code", "Multi-Tenant Architecture", "Stripe Billing Engine", "Superadmin Dashboard"],
        badge: "SaaS Platforms",
      },
      {
        title: "Internal Business Systems & Custom ERPs",
        tagline: "Unify operations, inventory, and analytics into one bespoke operating system.",
        description: "Replace messy spreadsheets and disconnected point solutions with a tailored enterprise resource management system tailored to your exact team workflows.",
        highlights: [
          "Custom inventory tracking, order management & dispatch flows",
          "Automated financial reconciliation & audit-ready reporting",
          "Real-time team collaboration with permission-gated access",
          "Integrations with QuickBooks, NetSuite, SAP & custom hardware",
        ],
        deliverables: ["Custom ERP Portal", "Database Schema Models", "User Permission Matrix", "Automated Excel Exporter"],
        badge: "Enterprise ERP",
      },
      {
        title: "High-Throughput APIs & Distributed Backends",
        tagline: "Fast, secure, and documented microservices built for heavy workloads.",
        description: "We architect resilient REST and GraphQL microservice ecosystems backed by message brokers, Redis caching, and relational databases engineered for 99.99% availability.",
        highlights: [
          "Node.js, Go, and Python (FastAPI) low-latency services",
          "Event-driven architecture with RabbitMQ, Kafka & Redis Queues",
          "Interactive OpenAPI (Swagger) & Postman documentation",
          "OAuth2, JWT authentication, and token rate limiting",
        ],
        deliverables: ["Microservices Repository", "OpenAPI Documentation", "Load Testing Benchmarks", "Docker Compose Files"],
        badge: "Backend Engineering",
      },
      {
        title: "Cloud Infrastructure & DevOps CI/CD",
        tagline: "Automated, secure, and scalable cloud hosting with zero-downtime deployments.",
        description: "We configure Infrastructure as Code (IaC) using Terraform, containerize services in Docker/Kubernetes, and establish automated CI/CD pipelines on AWS and Google Cloud.",
        highlights: [
          "Infrastructure as Code (Terraform) for repeatable environments",
          "Automated GitHub Actions pipelines with linting and unit tests",
          "Auto-scaling server clusters with health checks and alerts",
          "Continuous security scanning and automated database backups",
        ],
        deliverables: ["Terraform Scripts", "CI/CD Pipeline Workflows", "Kubernetes Configs", "24/7 Cloud Monitoring"],
        badge: "DevOps & Cloud",
      },
    ],
    techCategories: [
      {
        category: "Frontend & Full-Stack",
        items: [
          { name: "React 19 & Next.js 15", tag: "Modern SSR" },
          { name: "TypeScript", tag: "Type-Safe" },
          { name: "Tailwind CSS / SCSS", tag: "Design Systems" },
          { name: "TanStack Query & Zustand", tag: "State Management" },
        ],
      },
      {
        category: "Backend & Microservices",
        items: [
          { name: "Node.js / Express / NestJS", tag: "Async API" },
          { name: "Python / FastAPI / Django", tag: "Data & ML" },
          { name: "Go (Golang)", tag: "High Concurrency" },
          { name: "GraphQL & REST", tag: "Data Protocol" },
        ],
      },
      {
        category: "Databases & Caching",
        items: [
          { name: "PostgreSQL", tag: "Relational Core" },
          { name: "Redis", tag: "In-Memory Cache" },
          { name: "MongoDB", tag: "Document Store" },
          { name: "ClickHouse / Elasticsearch", tag: "Analytics & Logs" },
        ],
      },
      {
        category: "Cloud, DevOps & Security",
        items: [
          { name: "Amazon Web Services (AWS)", tag: "Cloud Leader" },
          { name: "Docker & Kubernetes (EKS)", tag: "Containers" },
          { name: "Terraform", tag: "IaC" },
          { name: "GitHub Actions", tag: "CI/CD Automation" },
        ],
      },
    ],
    processSteps: [
      {
        step: 1,
        phase: "Phase 1: Technical Scoping & Architecture",
        timeframe: "Weeks 1–2",
        title: "Requirements & Database Schema Design",
        desc: "We analyze your technical requirements, map entity relationships, design the database schema, and finalize the system architecture blueprint.",
        deliverables: ["System Architecture Diagram", "Database Entity Schema", "Technical Milestone Contract"],
      },
      {
        step: 2,
        phase: "Phase 2: UI Wireframing & Core Foundation",
        timeframe: "Weeks 3–4",
        title: "Interactive Wireframes & API Scaffold",
        desc: "We build interactive Figma prototypes of all user screens while spinning up backend database clusters, auth services, and CI/CD pipelines.",
        deliverables: ["Figma UI Prototypes", "API Boilerplate", "Staging Environment"],
      },
      {
        step: 3,
        phase: "Phase 3: Agile Core Engineering Sprints",
        timeframe: "Weeks 5–9",
        title: "Feature Sprints with Bi-Weekly Demos",
        desc: "We develop features in 2-week agile sprints. You receive live staging preview links and interactive sprint demos to test every feature in real-time.",
        deliverables: ["Sprint Demo Deployments", "Automated Test Suites", "Weekly Changelog Reports"],
      },
      {
        step: 4,
        phase: "Phase 4: QA, Load Testing & Cloud Launch",
        timeframe: "Weeks 10–11",
        title: "Security Penetration & Production Rollout",
        desc: "We perform rigorous load testing, vulnerability scanning, and data migration, followed by an orchestrated zero-downtime production launch.",
        deliverables: ["Production Release", "Source Code Handover", "Complete Documentation & SLA"],
      },
    ],
    useCases: [
      {
        industry: "Global Logistics & Freight Fleet",
        challenge: "Fragmented dispatch spreadsheets resulted in misplaced deliveries, manual invoicing delays, and driver communication breakdowns.",
        solution: "Engineered a custom cloud dispatch portal with live GPS tracking, automated driver route optimization, and instant invoice generation.",
        impact: "Reduced dispatcher overhead by 45% and accelerated invoice reconciliation from 10 days to under 2 hours.",
        badge: "Logistics & Supply Chain",
      },
      {
        industry: "FinTech & Automated Escrow",
        challenge: "Required an ultra-secure multi-party escrow platform handling $50M+ in quarterly transactions with strict regulatory compliance.",
        solution: "Architected a microservices backend with cryptographic audit logging, automated KYC verification, and bank-grade webhook reconciliation.",
        impact: "Processed $60M+ in year 1 with 100% data audit compliance and zero downtime incidents.",
        badge: "FinTech & Payments",
      },
      {
        industry: "Healthcare & Patient Management",
        challenge: "Legacy server crashing during peak morning appointment scheduling, losing critical patient data.",
        solution: "Modernized the legacy database into an auto-scaling AWS PostgreSQL cluster with HIPAA-compliant encrypted patient portals.",
        impact: "Eliminated server outages entirely; increased concurrent user handling from 200 to 15,000+ simultaneous requests.",
        badge: "HealthTech & HIPAA",
      },
    ],
    offers: [
      ["Custom web platforms", "Customer portals and multi-tenant SaaS products designed for your exact business workflows."],
      ["Internal business tools & ERPs", "Dashboards, admin panels and operational systems that replace scattered spreadsheets."],
      ["API & backend development", "Secure, well-documented microservices your web apps, mobile apps, and partners can rely on."],
      ["Cloud & DevOps CI/CD", "Reliable auto-scaling hosting, automated deployments, Docker containers, and 24/7 monitoring."],
      ["System integration & data migration", "Connect payments, accounting, CRM, ERP, and third-party platforms with zero data loss."],
      ["Maintenance & SLA support", "Continuous security updates, feature improvements, and proactive monitoring post-launch."],
    ],
    stack: ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "Redis", "Docker", "AWS", "Terraform"],
    faq: [
      ["Will our company own 100% of the source code and IP?", "Yes. Upon project completion and final milestone settlement, all intellectual property, source code repositories, database schemas, and documentation are transferred 100% to you. There are zero recurring per-seat fees."],
      ["How do we start a custom software project?", "We begin with a technical discovery call to map your business logic, edge cases, and user journeys. We then deliver a clear, fixed-price or dedicated-sprint technical scope with guaranteed milestones."],
      ["How do you handle security, testing, and compliance?", "Every codebase undergoes automated unit testing, end-to-end integration testing, static analysis, and vulnerability scans. We build to SOC2, HIPAA, and GDPR standards with encrypted storage and token-based auth."],
      ["What happens after launch? Do you provide ongoing maintenance?", "Yes. We offer flexible SLA support packages that include proactive server monitoring, regular security patches, performance tuning, and on-demand feature additions."],
    ],
    guarantees: [
      { title: "100% Source Code Ownership", desc: "Full git repository transfer with zero licensing restrictions or proprietary locks." },
      { title: "Rigorous QA & Test Coverage", desc: "Automated regression testing and manual QA verification before any production deployment." },
      { title: "Scalable Architecture Guarantee", desc: "Decoupled cloud infrastructure designed to handle 10x traffic surges effortlessly." },
      { title: "Dedicated US Management", desc: "Transparent sprint reporting with US-based leadership and clear accountability." },
    ],
  },
  {
    slug: "website-development",
    t: "High-Performance Websites",
    p: "Modern Websites. Stronger Brands. Higher Conversions.",
    category: "Modern Web Engineering & Headless CMS",
    image: "/images/service-showcase-1.jpg",
    desc: "Fast, modern websites that look sharp on every device and turn visitors into customers.",
    features: [
      "High-Conversion Enterprise Websites",
      "Headless CMS (Sanity, Strapi, WordPress)",
      "Shopify Plus & Next.js E-Commerce",
      "Interactive 3D & GSAP Micro-Animations",
      "99+ Core Web Vitals & Technical SEO",
    ],
    intro: "Your website is your company's most valuable digital asset. We engineer blazing-fast, visually breathtaking web platforms and e-commerce stores that establish immediate market authority, dominate search rankings, and convert traffic into revenue.",
    d: ["M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0ZM3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"],
    tags: ["Next.js 15", "Headless CMS", "E-Commerce", "GSAP Motion", "Core Web Vitals", "SEO Dominance"],
    heroStats: [
      { value: "98+", label: "Google PageSpeed Score", sub: "Sub-second global load times" },
      { value: "3.5x", label: "Average Conversion Uplift", sub: "CRO-engineered design layouts" },
      { value: "100%", label: "SEO & Mobile Optimized", sub: "Clean semantic SSR markup" },
      { value: "< 700ms", label: "Time to Interactive", sub: "Edge-cached global delivery" },
    ],
    marketPerspective: {
      headline: "Converting High-Value Visitors with Speed, Polish & SEO Dominance",
      subheadline: "Why modern digital leaders abandon slow, bloated page builders",
      description: "In competitive markets, a 1-second delay in page load drops conversion rates by over 20%. Clunky templates and bloated plugins ruin brand credibility. We build custom Next.js web applications and headless CMS platforms engineered for instant speed, interactive polish, and top Google search rankings.",
      keyDrivers: [
        {
          title: "Sub-Second Global Edge Delivery",
          desc: "Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR) deliver instant page transitions across any device worldwide.",
          badge: "Sub-Second Speed",
        },
        {
          title: "Empowering Headless CMS Workflows",
          desc: "Allow your marketing team to publish landing pages, case studies, and blog posts in minutes without touching a line of code.",
          badge: "Zero-Code Content Editing",
        },
        {
          title: "Engineered for Organic Search Ranking",
          desc: "Structured Schema.org JSON-LD, automated XML sitemaps, dynamic OpenGraph assets, and perfect semantic hierarchy.",
          badge: "Technical SEO Ready",
        },
      ],
      roiMetrics: [
        { metric: "+42%", label: "Average Inbound Leads", detail: "Optimized user flows and strategic CTA placement maximizing lead capture." },
        { metric: "99+", label: "Desktop & Mobile Performance", detail: "Green Core Web Vitals score directly lowering Google PPC acquisition costs." },
        { metric: "0.4s", label: "Global Edge Latency", detail: "Worldwide CDN caching ensuring snappy response times in every market." },
      ],
    },
    pillars: [
      {
        title: "Enterprise Corporate & Brand Websites",
        tagline: "Showcase your market leadership with bespoke, award-winning web design.",
        description: "We create distinctive, memorable corporate websites that position your brand as the obvious industry leader. Featuring smooth GSAP micro-animations, rich typography, and interactive components.",
        highlights: [
          "Bespoke layout design tailored to your exact brand positioning",
          "Interactive 3D visuals, smooth scrolling, and micro-interactions",
          "Fully responsive mobile-first architecture tested on 30+ viewports",
          "Internationalization (i18n) and multi-region localization support",
        ],
        deliverables: ["Custom Next.js Website", "Interactive Component Library", "Analytics Integration", "SEO Audit Report"],
        badge: "Corporate Web",
      },
      {
        title: "High-Volume E-Commerce & Storefronts",
        tagline: "High-conversion online stores with frictionless checkout and rapid inventory management.",
        description: "Whether building custom Shopify Plus storefronts or headless Next.js commerce platforms, we build shopping experiences engineered to maximize Average Order Value (AOV) and cart completion.",
        highlights: [
          "Shopify Plus custom theme development and headless Hydrogen setups",
          "1-Click checkout integration with Apple Pay, Google Pay & Klarna",
          "Advanced product filtering, live search, and dynamic upsell funnels",
          "Real-time inventory sync with ERP and warehouse fulfillment systems",
        ],
        deliverables: ["Custom Storefront Theme", "Payment Gateway Integration", "Inventory Sync Pipeline", "Checkout Funnel Audit"],
        badge: "E-Commerce",
      },
      {
        title: "Headless CMS & No-Code Marketing Hubs",
        tagline: "Empower your marketing team to publish content at the speed of thought.",
        description: "We decouple the frontend from the backend using modern Headless CMS platforms like Sanity.io, Strapi, and WordPress Headless, giving content creators complete publishing freedom.",
        highlights: [
          "Drag-and-drop page builder blocks customized for your brand",
          "Instant live preview before publishing changes to production",
          "Multi-author collaboration, draft revisions, and role permissions",
          "High-speed GraphQL / REST API content delivery",
        ],
        deliverables: ["Configured CMS Studio", "Custom Page Block Library", "Editor Video Documentation", "Media Asset Optimization"],
        badge: "Headless CMS",
      },
      {
        title: "Conversion Optimization (CRO) & Technical SEO",
        tagline: "Turn organic visitors into qualified inbound leads and paying customers.",
        description: "We apply data-driven conversion rate optimization principles and advanced technical SEO to ensure your website dominates Google rankings and drives measurable sales pipeline.",
        highlights: [
          "Structured JSON-LD Schema markup for rich Google search snippets",
          "Dynamic OpenGraph preview card generation for social sharing",
          "High-converting landing page layouts with A/B testing setup",
          "Deep integration with Google Analytics 4, Tag Manager & CRM tracking",
        ],
        deliverables: ["Schema.org Markup Code", "GA4 / GTM Dashboard", "Core Web Vitals Pass Certificate", "On-Page SEO Checklist"],
        badge: "CRO & SEO",
      },
    ],
    techCategories: [
      {
        category: "Frontend & Web Frameworks",
        items: [
          { name: "Next.js 15 (App Router)", tag: "SSR & ISR" },
          { name: "React 19", tag: "UI Component Tree" },
          { name: "TypeScript", tag: "Enterprise Stability" },
          { name: "Vanilla CSS & Tailwind", tag: "Modern Styling" },
        ],
      },
      {
        category: "Interactive Animations & Motion",
        items: [
          { name: "GSAP (GreenSock)", tag: "High-Performance Motion" },
          { name: "Lenis Smooth Scroll", tag: "Fluid Inertia" },
          { name: "Three.js / WebGL", tag: "3D Visuals" },
          { name: "Framer Motion", tag: "Micro-Interactions" },
        ],
      },
      {
        category: "Headless CMS & Commerce",
        items: [
          { name: "Sanity.io", tag: "Structured Content" },
          { name: "Strapi / Contentful", tag: "Headless API" },
          { name: "Shopify Plus / Hydrogen", tag: "E-Commerce" },
          { name: "Stripe Checkout", tag: "Global Payments" },
        ],
      },
      {
        category: "Hosting, CDN & SEO",
        items: [
          { name: "Vercel Edge Network", tag: "Global Serverless" },
          { name: "Cloudflare CDN", tag: "DDoS & Caching" },
          { name: "Google Analytics 4 & GTM", tag: "Telemetry" },
          { name: "Schema.org JSON-LD", tag: "SEO Architecture" },
        ],
      },
    ],
    processSteps: [
      {
        step: 1,
        phase: "Phase 1: Strategy & Information Architecture",
        timeframe: "Week 1",
        title: "Audience Profiling & Sitemap Blueprint",
        desc: "We analyze your target buyer personas, map conversion funnels, and structure the sitemap for optimal user journeys and search engine indexing.",
        deliverables: ["Information Architecture Map", "Conversion Funnel Wireframe", "SEO Keyword Plan"],
      },
      {
        step: 2,
        phase: "Phase 2: High-Fidelity UI/UX & Motion Design",
        timeframe: "Weeks 2–3",
        title: "Interactive Prototypes & Visual Polish",
        desc: "We craft stunning high-fidelity UI designs in Figma, including interactive micro-animations, typography pairings, and mobile responsive states.",
        deliverables: ["Figma Design System", "Clickable Web Prototype", "Approved Design Tokens"],
      },
      {
        step: 3,
        phase: "Phase 3: Next.js Engineering & CMS Setup",
        timeframe: "Weeks 4–5",
        title: "Full-Stack Development & Content Modeling",
        desc: "We build the responsive Next.js application, configure the headless CMS studio, implement custom GSAP animations, and link all lead capture forms.",
        deliverables: ["Live Staging Web Preview", "Configured CMS Dashboard", "CRM Form Integration"],
      },
      {
        step: 4,
        phase: "Phase 4: Optimization, SEO & Launch",
        timeframe: "Weeks 6–7",
        title: "Core Web Vitals Audit & Domain Go-Live",
        desc: "We run comprehensive PageSpeed audits, configure SSL and DNS, test forms across devices, and seamlessly point your domain to production.",
        deliverables: ["Production Launch", "100/100 PageSpeed Report", "CMS Training Video Library"],
      },
    ],
    useCases: [
      {
        industry: "Enterprise B2B Technology",
        challenge: "Old WordPress website loaded in 6.2 seconds with a 78% bounce rate, losing high-ticket enterprise RFPs.",
        solution: "Built a custom Next.js platform with GSAP micro-animations, interactive product tour, and Sanity CMS.",
        impact: "Load time dropped to 0.7s; organic search traffic increased by 140% and demo requests doubled in 90 days.",
        badge: "B2B Tech Platform",
      },
      {
        industry: "Direct-to-Consumer (D2C) Brand",
        challenge: "High checkout abandonment rate on an outdated e-commerce store with slow mobile performance.",
        solution: "Migrated to a custom headless Shopify store with 1-click Express Checkout and dynamic bundle upsells.",
        impact: "Mobile conversion rate rose by 38%; Average Order Value (AOV) increased from $64 to $89.",
        badge: "D2C E-Commerce",
      },
      {
        industry: "Commercial Real Estate & Investment",
        challenge: "Needed a prestigious corporate digital platform to attract international institutional investors.",
        solution: "Engineered an ultra-luxurious digital web portal with interactive 3D floorplans and investor document rooms.",
        impact: "Secured $22M+ in private investment allocations within the first 6 months post-launch.",
        badge: "Real Estate & Capital",
      },
    ],
    offers: [
      ["Business & brand websites", "Clear, credible, and high-impact digital experiences that present your company at its absolute best."],
      ["E-commerce & online shops", "High-conversion online stores with smooth 1-click checkout and automated inventory management."],
      ["Headless CMS & easy editing", "Update text, photos, case studies, and blog posts yourself with zero code required."],
      ["Landing pages & sales funnels", "Laser-focused landing pages engineered to convert ad campaigns into qualified enquiries."],
      ["SEO & Core Web Vitals", "Sub-second load times and semantic structure that search engines reward with higher rankings."],
      ["Redesign & safe migration", "Refresh an outdated site or migrate to modern Next.js infrastructure with zero SEO loss."],
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "Sanity CMS", "Shopify Plus", "Tailwind CSS", "GSAP", "Vercel", "Stripe"],
    faq: [
      ["Will our website look great and load fast on mobile devices?", "Yes. Every website we build is designed mobile-first and tested across 30+ screen resolutions and modern browsers to guarantee smooth 60fps performance."],
      ["Can our internal marketing team update content without developers?", "Yes. We configure intuitive Headless CMS platforms (such as Sanity, Strapi, or WordPress) where you can easily edit copy, upload images, and create new pages."],
      ["Do you handle website hosting, domains, and business emails?", "We can configure and manage everything for you on high-performance edge networks like Vercel and Cloudflare, ensuring 99.99% uptime and SSL encryption."],
      ["How do you ensure our existing Google search rankings are protected?", "We perform strict 301 URL redirect mapping, migrate all meta tags and structured schema data, and submit updated XML sitemaps to Google Search Console to preserve and boost search rankings."],
    ],
    guarantees: [
      { title: "90+ Google PageSpeed Guarantee", desc: "We optimize all assets and code to ensure lightning-fast sub-second loading." },
      { title: "100% Mobile & Cross-Browser Responsive", desc: "Flawless rendering across iPhones, Androids, tablets, and high-res desktops." },
      { title: "Zero Data or SEO Loss Migration", desc: "Meticulous 301 redirects ensuring your organic search equity stays intact." },
      { title: "Full CMS Ownership & Training", desc: "Complete training videos showing your team how to update any section in minutes." },
    ],
  },
  {
    slug: "app-development",
    t: "Mobile App Engineering",
    p: "Ideas Transformed into Powerful iOS & Android Applications.",
    category: "Mobile Application Engineering (iOS & Android)",
    image: "/images/service-showcase-2.jpg",
    desc: "From first sketch to the app stores: mobile apps for iOS and Android that people enjoy using.",
    features: [
      "Cross-Platform iOS & Android Apps",
      "Native Swift & Kotlin Performance",
      "Offline-First Data Synchronization",
      "In-App Purchases & Apple/Google Pay",
      "App Store Review & Launch Management",
    ],
    intro: "Capture mobile-first audiences with intuitive, high-performance mobile applications. We build cross-platform and native iOS & Android apps featuring 60fps gesture fluidness, offline data sync, biometrics, and seamless App Store launch approval.",
    d: ["M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2ZM11 18h2"],
    tags: ["iOS & Android", "React Native", "Flutter", "Offline Sync", "In-App Purchases", "App Store Launch"],
    heroStats: [
      { value: "4.9★", label: "App Store Approval Rate", sub: "Strict compliance with Apple/Google" },
      { value: "60/120", label: "FPS Fluid Animations", sub: "Native gesture performance" },
      { value: "50%", label: "Faster Time-to-Market", sub: "Cross-platform unified codebase" },
      { value: "99.9%", label: "Crash-Free Session Rate", sub: "Automated test suites & monitoring" },
    ],
    marketPerspective: {
      headline: "Winning the Mobile Screen with Native Performance & Retention UX",
      subheadline: "Why commercial apps require offline-first architecture and thumb-friendly UI",
      description: "Over 58% of global internet traffic is on mobile devices. Today's users abandon apps that stutter, crash, or fail offline. We engineer production-grade mobile applications with unified codebases that cut development costs in half while delivering 100% native fluidity, instant biometric login, and push notification engagement.",
      keyDrivers: [
        {
          title: "Single Codebase for Both App Stores",
          desc: "React Native and Flutter allow rapid dual-platform releases on iOS and Android with zero code divergence.",
          badge: "50% Cost Savings",
        },
        {
          title: "Offline-First Synchronization",
          desc: "Local SQLite caching and background sync queues ensure smooth user workflows even in low-connectivity environments.",
          badge: "Uninterrupted Offline UX",
        },
        {
          title: "Seamless Native Hardware Integration",
          desc: "Leverage Face ID / Touch ID, background GPS tracking, camera scanners, Bluetooth BLE, and Apple/Google Wallet.",
          badge: "Full Hardware Access",
        },
      ],
      roiMetrics: [
        { metric: "4.8★", label: "Average App Store Rating", sub: "Client apps maintaining stellar user satisfaction.", detail: "Polished onboarding flows and proactive crash reporting." },
        { metric: "3.2x", label: "Higher User Retention", sub: "Personalized push notification campaigns.", detail: "Targeted push triggers based on real-time user behavior." },
        { metric: "100%", label: "Store Approval Guarantee", sub: "Zero submission rejections.", detail: "Adhering strictly to Apple Human Interface & Google Play guidelines." },
      ],
    },
    pillars: [
      {
        title: "Cross-Platform iOS & Android Apps",
        tagline: "Build once, deploy everywhere with native speed and shared business logic.",
        description: "We utilize React Native and Flutter to build high-performance mobile apps for both the Apple App Store and Google Play Store simultaneously, reducing build time and ongoing maintenance overhead.",
        highlights: [
          "90%+ shared code between iOS and Android platforms",
          "Native bridge optimization for smooth 60fps animations",
          "Automated Over-The-Air (OTA) updates using Expo EAS",
          "Dark mode and accessibility compliance out of the box",
        ],
        deliverables: ["iOS & Android Build Bundles", "Cross-Platform Repository", "App Store Assets", "OTA Update Pipeline"],
        badge: "Cross-Platform",
      },
      {
        title: "Native iOS & Android Engineering",
        tagline: "High-performance native Swift & Kotlin modules for intensive hardware use cases.",
        description: "When apps require intensive background processing, custom Bluetooth peripherals, low-latency audio/video, or advanced AR/LiDAR scanning, we write dedicated native Swift and Kotlin modules.",
        highlights: [
          "Native Swift (SwiftUI) for iOS, watchOS, and iPadOS",
          "Native Kotlin (Jetpack Compose) for Android ecosystems",
          "Bluetooth Low Energy (BLE) and IoT hardware pairing",
          "Custom camera filters, audio synthesis, and real-time shaders",
        ],
        deliverables: ["Native Swift/Kotlin Modules", "Hardware SDK Integration", "Performance Benchmarks", "CocoaPods/Gradle Configs"],
        badge: "Native Modules",
      },
      {
        title: "Startup MVP Mobile Accelerators",
        tagline: "Launch your product concept to real App Store users in 4 to 6 weeks.",
        description: "We help early-stage startups and innovation teams rapidly validate ideas by building focused, high-polish MVP mobile apps engineered to collect real user data and secure venture funding.",
        highlights: [
          "Focused feature prioritization to launch fast and iterate",
          "Pre-built authentication, social login & onboarding flows",
          "In-app analytics tracking user activation and drop-off points",
          "Investor-ready clickable prototypes and App Store presence",
        ],
        deliverables: ["MVP App Store Release", "User Telemetry Dashboard", "Product Roadmap Guide", "Investor Demo Build"],
        badge: "Startup MVP",
      },
      {
        title: "App Store Optimization (ASO) & Maintenance",
        tagline: "End-to-end management of Apple & Google store listings and ongoing releases.",
        description: "We manage the entire submission lifecycle: preparing screenshots, passing review audits, configuring in-app subscriptions, and maintaining 99.9% crash-free telemetry post-launch.",
        highlights: [
          "Apple App Store & Google Play Console account setup",
          "In-App Purchases (IAP) & RevenueCat subscription setup",
          "Crashlytics, Sentry, and real-time user session recording",
          "Regular OS compatibility updates for new iOS/Android versions",
        ],
        deliverables: ["Live Store Listings", "In-App Subscription Config", "Crashlytics Setup", "Monthly Maintenance SLA"],
        badge: "Store Launch & ASO",
      },
    ],
    techCategories: [
      {
        category: "Mobile App Frameworks",
        items: [
          { name: "React Native & Expo", tag: "Cross-Platform" },
          { name: "Flutter (Dart)", tag: "UI Toolkit" },
          { name: "Swift & SwiftUI", tag: "Native iOS" },
          { name: "Kotlin & Jetpack Compose", tag: "Native Android" },
        ],
      },
      {
        category: "Mobile Backend & Real-Time Sync",
        items: [
          { name: "Firebase (Auth, Firestore, Cloud Functions)", tag: "Real-Time" },
          { name: "Supabase Mobile", tag: "PostgreSQL BaaS" },
          { name: "Node.js & WebSockets", tag: "Live Sockets" },
          { name: "GraphQL & REST APIs", tag: "Data Layer" },
        ],
      },
      {
        category: "Local Storage & State Management",
        items: [
          { name: "SQLite & WatermelonDB", tag: "Offline Database" },
          { name: "MMKV Fast Storage", tag: "Key-Value" },
          { name: "Zustand & Redux Toolkit", tag: "Global State" },
          { name: "React Query Mobile", tag: "Async Cache" },
        ],
      },
      {
        category: "Tooling, Payments & Deployment",
        items: [
          { name: "Fastlane & GitHub Actions", tag: "CI/CD" },
          { name: "RevenueCat & Stripe Mobile", tag: "Subscriptions" },
          { name: "Sentry & Firebase Crashlytics", tag: "Monitoring" },
          { name: "Apple TestFlight & Google Play Beta", tag: "Testing" },
        ],
      },
    ],
    processSteps: [
      {
        step: 1,
        phase: "Phase 1: UX Wireframing & App Architecture",
        timeframe: "Weeks 1–2",
        title: "User Flow Mapping & Technical Blueprint",
        desc: "We design intuitive screen-by-screen navigation flows optimized for mobile thumbs and map backend sync endpoints.",
        deliverables: ["Interactive User Flow Diagram", "Mobile Wireframes", "Backend API Blueprint"],
      },
      {
        step: 2,
        phase: "Phase 2: High-Fidelity UI & Clickable Prototype",
        timeframe: "Weeks 3–4",
        title: "Pixel-Perfect Design & Micro-Interactions",
        desc: "We design complete iOS and Android UI screens in Figma, including tactile haptic feedback, custom icons, and dark mode themes.",
        deliverables: ["Figma Mobile UI Kit", "Clickable Prototype on Phone", "Design Asset Export"],
      },
      {
        step: 3,
        phase: "Phase 3: Agile App Engineering & Cloud Sync",
        timeframe: "Weeks 5–8",
        title: "Frontend Build, Hardware APIs & Backend",
        desc: "We code the mobile app using React Native/Flutter, connect biometric authentication, push notification servers, and test with real beta testers.",
        deliverables: ["Weekly TestFlight Builds", "Google Play Internal Tracks", "API Integration"],
      },
      {
        step: 4,
        phase: "Phase 4: QA, App Store Review & Go-Live",
        timeframe: "Weeks 9–10",
        title: "Store Submission & Launch Telemetry",
        desc: "We prepare store screenshots, privacy policies, submit to Apple & Google review teams, and launch live on both stores with full monitoring.",
        deliverables: ["Live Apple App Store Link", "Live Google Play Link", "Crashlytics Dashboard & SLA"],
      },
    ],
    useCases: [
      {
        industry: "On-Demand Delivery & Logistics",
        challenge: "Needed a real-time driver tracking and customer order app capable of handling location updates every 3 seconds.",
        solution: "Engineered a React Native app with native background GPS geofencing, WebSocket order tracking, and push alerts.",
        impact: "Over 250,000 orders processed in first quarter with 99.98% crash-free sessions.",
        badge: "On-Demand Delivery",
      },
      {
        industry: "Digital Health & Telemedicine",
        challenge: "Required HIPAA-compliant video consultations, encrypted patient messaging, and biometric Face ID login.",
        solution: "Developed an intuitive iOS & Android app integrated with Twilio Video, encrypted SQLite storage, and Apple HealthKit.",
        impact: "Rated 4.9★ with 85,000+ active monthly patients and zero security compliance violations.",
        badge: "HealthTech Mobile",
      },
      {
        industry: "FinTech & Peer-to-Peer Wallet",
        challenge: "Building a next-gen digital banking card app with instant virtual card creation and NFC tap-to-pay support.",
        solution: "Built a secure mobile app connected to banking ledger APIs, biometrics, and dynamic Apple Wallet provisioning.",
        impact: "Acquired 100,000 users in 5 months; processed over $18M in monthly mobile card transactions.",
        badge: "FinTech Wallet",
      },
    ],
    offers: [
      ["iOS & Android mobile apps", "Native-quality mobile applications for the platforms and devices your customers use daily."],
      ["Cross-platform mobile apps", "One unified codebase for both Apple & Google stores, built faster and cheaper to maintain."],
      ["Startup MVP for mobile", "Launch a focused, high-polish first version to the App Stores and validate with real users."],
      ["Mobile UI/UX design", "Thumb-friendly navigation flows and tactile micro-interactions designed specifically for mobile screens."],
      ["Backend APIs & data sync", "User authentication, real-time data sync, push notification servers, and in-app payments."],
      ["Store submission & updates", "We handle Apple & Google developer guidelines, store review approvals, and future updates."],
    ],
    stack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Node.js", "GraphQL", "Fastlane", "PostgreSQL"],
    faq: [
      ["Should we build using Cross-Platform (React Native/Flutter) or Native?", "For 90% of business applications, cross-platform (React Native/Flutter) is the recommended route: it cuts development cost by ~50%, provides simultaneous iOS & Android releases, and delivers native 60fps performance. For specialized hardware/AR apps, we build native Swift/Kotlin."],
      ["Can you help us publish and manage the apps on the Apple and Google stores?", "Yes. We handle the entire submission process, including store metadata, screenshot design, privacy policy compliance, age ratings, and working through store review guidelines until live approval."],
      ["Can our app work offline when users have poor network connectivity?", "Yes. We implement offline-first caching architectures with SQLite or MMKV, allowing users to browse, create drafts, and view data offline. Changes automatically sync to the cloud once internet is restored."],
      ["How do in-app subscriptions and payment gateways work on mobile?", "We integrate with Apple In-App Purchases, Google Play Billing, and RevenueCat for digital subscriptions, as well as Stripe and Apple Pay for physical goods and services."],
    ],
    guarantees: [
      { title: "100% App Store Approval Guarantee", desc: "We guarantee approval on both Apple App Store and Google Play Store." },
      { title: "99.9% Crash-Free Session SLA", desc: "Rigorous automated testing and live Sentry/Crashlytics monitoring." },
      { title: "Complete Source Code Ownership", desc: "Full git repository ownership with zero third-party licensing fees." },
      { title: "Ongoing OS Version Support", desc: "Proactive compatibility maintenance for every new annual iOS and Android release." },
    ],
  },
  {
    slug: "graphics-ui-ux-design",
    t: "Brand & UI/UX Product Design",
    p: "Creative Experiences Built for Modern Brands.",
    category: "Brand Identity, Product Design & UI/UX Systems",
    image: "/images/ui-design-showcase.jpg",
    desc: "Design that makes your brand memorable and your product easy to use, from logos to complete website and app interfaces.",
    features: [
      "Strategic Brand Identity & Logos",
      "SaaS & Enterprise UI/UX Design",
      "Comprehensive Figma Design Systems",
      "Interactive Clickable Prototypes",
      "Conversion Rate Optimization (CRO)",
    ],
    intro: "Transform your product into a memorable, intuitive experience that commands premium market authority. We design distinctive brand identities, modular Figma design systems, and human-centered SaaS interfaces that captivate users and maximize conversions.",
    d: ["M12 3a9 9 0 1 0 0 18c1.5 0 2-1 1.5-2s0-2 1.5-2h2a3 3 0 0 0 3-3 9 9 0 0 0-8-11ZM7.5 11h.01M10 7.5h.01M14.5 7.5h.01"],
    tags: ["Brand Identity", "SaaS UI/UX", "Design Systems", "Figma Tokens", "Interactive Prototypes", "CRO"],
    heroStats: [
      { value: "40%", label: "Faster Dev Handoff", sub: "Tokenized component systems" },
      { value: "+240%", label: "User Engagement Boost", sub: "Intuitive human-centered UX" },
      { value: "100%", label: "Custom Vector Craft", sub: "Zero generic templates used" },
      { value: "150+", label: "Reusable UI Components", sub: "Scalable Figma design libraries" },
    ],
    marketPerspective: {
      headline: "Elevating Brand Authority & Product Adoption with Strategic Design",
      subheadline: "Why leading enterprises invest in cohesive design systems and user-tested UX",
      description: "Design is not merely how a product looks—it is how effortlessly it works and how strongly it converts. Cluttered user flows and disjointed visual branding create friction that destroys user retention. We design polished, cohesive brand systems and Figma component libraries that accelerate frontend development and build lasting customer trust.",
      keyDrivers: [
        {
          title: "Human-Centered Product UX",
          desc: "We map user journeys, eliminate cognitive friction, and design clean workflows that make complex enterprise software simple to use.",
          badge: "Friction-Free UX",
        },
        {
          title: "Modular Design Systems in Figma",
          desc: "Reusable auto-layout components, color/typography tokens, and dark/light modes that cut developer build time by 40%.",
          badge: "Figma Tokenized System",
        },
        {
          title: "Distinctive Visual Brand Identity",
          desc: "Custom vector logos, modern typography hierarchies, icon sets, and marketing assets that position you as an industry authority.",
          badge: "100% Bespoke Craft",
        },
      ],
      roiMetrics: [
        { metric: "40% Faster", label: "Developer Handoff", sub: "Clear Figma specifications.", detail: "Zero guesswork with tokenized auto-layout components." },
        { metric: "-35%", label: "User Onboarding Drop-Off", sub: "Tested visual hierarchy.", detail: "Simplified user steps verified through prototype testing." },
        { metric: "3x Higher", label: "Perceived Brand Value", sub: "Executive market polish.", detail: "Instant visual credibility helping win enterprise clients." },
      ],
    },
    pillars: [
      {
        title: "Brand Identity & Visual Guidelines",
        tagline: "A distinctive mark, color palette, and brand system that commands respect.",
        description: "We create unforgettable brand identities that tell your company's story: from logo design and typography pairing to comprehensive brand books and stationery assets.",
        highlights: [
          "Custom vector logo marks with full copyright ownership",
          "Color palettes, typography hierarchies, and contrast guidelines",
          "Comprehensive Brand Guidelines Book (PDF & Figma)",
          "Social media kit, email signatures, and business collateral",
        ],
        deliverables: ["Master Vector Logo Files", "Brand Style Guide", "Social Media Kit", "Stationery & Icon Pack"],
        badge: "Brand Identity",
      },
      {
        title: "Product UI/UX & Interactive Prototypes",
        tagline: "Clean, intuitive user interfaces for complex SaaS platforms and mobile apps.",
        description: "We translate complex business requirements into elegant, user-friendly digital interfaces. Using clickable Figma prototypes, you can test and validate flows before writing a single line of code.",
        highlights: [
          "User journey mapping, wireframing, and information architecture",
          "Desktop, tablet, and mobile responsive screen layouts",
          "Clickable interactive prototypes simulating real software behavior",
          "Usability testing and user feedback validation rounds",
        ],
        deliverables: ["Complete Screen UI Kit", "Clickable Figma Prototype", "User Flow Diagrams", "Asset Export Folder"],
        badge: "Product UI/UX",
      },
      {
        title: "Enterprise Design Systems & Tokens",
        tagline: "Scalable component libraries that keep your software unified forever.",
        description: "We build enterprise-grade Figma design systems with auto-layout variants, interactive component states, and design tokens that seamlessly map to React and Tailwind code.",
        highlights: [
          "150+ reusable UI components (buttons, modals, tables, inputs)",
          "Synchronized design tokens (colors, spacing, typography, shadows)",
          "Complete dark mode and light mode theme variants",
          "Developer-ready handoff documentation with Storybook alignment",
        ],
        deliverables: ["Figma Component Library", "Design Token JSON", "Style Documentation", "Dev Handoff Guide"],
        badge: "Design Systems",
      },
      {
        title: "Marketing Creatives & Motion Assets",
        tagline: "High-converting visual assets for ads, presentations, and social media.",
        description: "Elevate your marketing campaigns with high-impact visual creatives, investor pitch deck designs, custom illustrations, and Lottie micro-animations.",
        highlights: [
          "High-converting digital ad creative suites (Google, Meta, LinkedIn)",
          "Investor pitch deck & sales presentation design",
          "Custom 2D/3D vector illustrations and product diagrams",
          "Lottie animations for web and mobile micro-interactions",
        ],
        deliverables: ["Ad Creative Suite", "Investor Pitch Deck (Figma/PPT)", "Custom Vector Illustrations", "Lottie JSON Files"],
        badge: "Marketing Creatives",
      },
    ],
    techCategories: [
      {
        category: "UI/UX & Product Design",
        items: [
          { name: "Figma & FigJam", tag: "Industry Standard" },
          { name: "Tokens Studio", tag: "Design Tokens" },
          { name: "ProtoPie & Framer", tag: "Advanced Motion" },
          { name: "Miro", tag: "User Journey Maps" },
        ],
      },
      {
        category: "Graphic Design & Illustration",
        items: [
          { name: "Adobe Illustrator", tag: "Vector Mastery" },
          { name: "Adobe Photoshop", tag: "Asset Retouching" },
          { name: "Adobe InDesign", tag: "Print & Editorial" },
          { name: "Canva Pro (Brand Kits)", tag: "Team Templates" },
        ],
      },
      {
        category: "Motion & Micro-Interactions",
        items: [
          { name: "Adobe After Effects", tag: "Motion Graphics" },
          { name: "LottieFiles", tag: "Lightweight Web JSON" },
          { name: "Principle", tag: "Tactile Prototyping" },
          { name: "Jitter", tag: "UI Animation" },
        ],
      },
      {
        category: "Collaboration & Developer Handoff",
        items: [
          { name: "Storybook Alignment", tag: "Frontend Sync" },
          { name: "Zeplin & Dev Mode", tag: "CSS Inspection" },
          { name: "Notion & Loom", tag: "Documentation" },
          { name: "SVG / WebP Optimization", tag: "Lossless Export" },
        ],
      },
    ],
    processSteps: [
      {
        step: 1,
        phase: "Phase 1: Research & Discovery",
        timeframe: "Week 1",
        title: "Brand Archetype & Competitor Analysis",
        desc: "We dive into your brand values, analyze top competitors, define target user personas, and establish creative moodboards.",
        deliverables: ["Brand Discovery Moodboard", "User Persona Profiles", "Visual Direction Brief"],
      },
      {
        step: 2,
        phase: "Phase 2: Wireframing & Information Architecture",
        timeframe: "Week 2",
        title: "Low-Fidelity UX Flows & Structure",
        desc: "We design wireframes of all primary screens, mapping frictionless user journeys and validating layout hierarchy before visual styling.",
        deliverables: ["Low-Fidelity Wireframes", "User Navigation Map", "Information Architecture Plan"],
      },
      {
        step: 3,
        phase: "Phase 3: High-Fidelity UI & Design System",
        timeframe: "Weeks 3–4",
        title: "Visual Design, Components & Prototype",
        desc: "We craft the full visual design, establish color/typography tokens, build the reusable Figma component library, and link interactive states.",
        deliverables: ["Complete High-Fidelity Screens", "Interactive Figma Prototype", "Design System Library"],
      },
      {
        step: 4,
        phase: "Phase 4: Testing & Developer Handoff",
        timeframe: "Week 5",
        title: "Asset Export, Documentation & Handoff",
        desc: "We organize Figma files with clear developer annotations, export all SVG/WebP assets, and walk your engineering team through implementation.",
        deliverables: ["Dev-Ready Figma Workspace", "Exported Vector Assets", "Design Token Documentation"],
      },
    ],
    useCases: [
      {
        industry: "Enterprise B2B SaaS Platform",
        challenge: "A complex data analytics platform suffered from high churn because users found the interface overwhelming and confusing.",
        solution: "Redesigned the entire product UX with a modular design system, dark mode dashboards, and simplified data filtering.",
        impact: "User task completion time decreased by 54%; monthly churn dropped from 8.2% to 2.1%.",
        badge: "SaaS Dashboard Redesign",
      },
      {
        industry: "AI Startup Venture",
        challenge: "Needed a futuristic, investor-ready visual brand identity, pitch deck, and web product prototype in 3 weeks.",
        solution: "Crafted a distinctive visual identity, bespoke 3D vector graphics, interactive Figma prototype, and a 20-slide investor deck.",
        impact: "Successfully closed a $3.5M Seed funding round with commendation on product design polish.",
        badge: "AI Startup & Seed Round",
      },
      {
        industry: "Luxury Direct-to-Consumer Brand",
        challenge: "Inconsistent visual assets across social media, packaging, and website weakened consumer perception and pricing power.",
        solution: "Created an end-to-end brand identity book, custom typography palette, luxury packaging templates, and digital ad creative suite.",
        impact: "Allowed the brand to increase retail product prices by 40% with zero drop in sales volume.",
        badge: "Luxury Brand Identity",
      },
    ],
    offers: [
      ["Brand identity & logo design", "A distinctive mark, color palette, and typography system that positions you as a market leader."],
      ["Product UI/UX design", "Polished, intuitive interfaces for web applications, SaaS dashboards, and mobile apps."],
      ["UX research & wireframing", "Map user journeys and eliminate usability friction before costly development begins."],
      ["Interactive Figma prototypes", "Clickable prototypes you can test with users and present to stakeholders or investors early."],
      ["Design systems & token kits", "Reusable component libraries in Figma that keep every screen consistent and speed up coding."],
      ["Marketing creatives & pitch decks", "High-converting ad creatives, social media suites, and investor-ready presentation decks."],
    ],
    stack: ["Figma", "Illustrator", "Photoshop", "InDesign", "Framer", "Lottie", "Tokens Studio", "Storybook"],
    faq: [
      ["What file formats and deliverables will I receive?", "You receive full ownership of the master Figma workspace, vector source files (.AI, .EPS, .SVG), production-ready web assets (.PNG, .WebP), brand guidelines PDF, and design token JSON files."],
      ["Can you redesign an existing product or brand?", "Yes. We can perform a targeted UI/UX overhaul or full visual rebrand, auditing existing pain points and preserving established brand equity while modernizing the aesthetic."],
      ["Can your team also code and build the designs into a live application?", "Yes! Nexora is a full-service digital engineering team. Our developers work directly with our designers to turn approved Figma designs into pixel-perfect Next.js web platforms and mobile apps."],
      ["How many design revision rounds are included?", "We work collaboratively in transparent agile milestones. Each design phase includes dedicated feedback rounds to ensure every screen and interaction aligns 100% with your vision."],
    ],
    guarantees: [
      { title: "100% Copyright & Asset Ownership", desc: "You own all master Figma files, logos, vector assets, and design systems." },
      { title: "Zero Template Design Guarantee", desc: "Every logo, layout, and component is custom-crafted for your brand." },
      { title: "Developer-Ready Handoff", desc: "Pixel-perfect Figma specs, auto-layout tokens, and organized asset exports." },
      { title: "Fast-Track Collaborative Revisions", desc: "Daily communication and rapid feedback integration via Figma and Slack." },
    ],
  },
];
