import type { Metadata } from "next";
import CaseStudyClient from "./CaseStudyClient";

export const metadata: Metadata = {
  title: "Case Studies & Enterprise Portfolio – ABI Technologies & Digital Solutions",
  description:
    "Explore 9 verified enterprise case studies and production codebases built by ABI Technologies: Dual-database ERPs, RAG AI legal engines, multi-tenant SaaS, and luxury mobility platforms.",
  keywords: [
    "Enterprise Case Studies",
    "Verified Software Portfolio",
    "Legal RAG AI",
    "Dual Database ERP",
    "Multi-Tenant SaaS",
    "Next.js Villa RMS",
    "ABI Technologies",
  ],
};

export default function CaseStudyPage() {
  return <CaseStudyClient />;
}

