import type { Metadata } from "next";
import CaseStudyClient from "./CaseStudyClient";

export const metadata: Metadata = {
  title: "Case Studies & Enterprise Portfolio – KoderFors Technologies & Digital Solutions",
  description:
    "Explore 9 verified enterprise case studies and production codebases built by KoderFors Technologies: Dual-database ERPs, RAG AI legal engines, multi-tenant SaaS, and luxury mobility platforms.",
  keywords: [
    "Enterprise Case Studies",
    "Verified Software Portfolio",
    "Legal RAG AI",
    "Dual Database ERP",
    "Multi-Tenant SaaS",
    "Next.js Villa RMS",
    "KoderFors Technologies",
  ],
};

export default function CaseStudyPage() {
  return <CaseStudyClient />;
}

