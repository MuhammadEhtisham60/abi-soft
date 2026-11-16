import type { Metadata } from "next";
import CaseStudyClient from "../case-study/CaseStudyClient";

export const metadata: Metadata = {
  title: "Case Studies & Enterprise Portfolio – Avantis Technologies & Digital Solutions",
  description:
    "Explore 9 verified enterprise case studies and production codebases built by Avantis Technologies: Dual-database ERPs, RAG AI legal engines, multi-tenant SaaS, and luxury mobility platforms.",
};

export default function CaseStudiesPage() {
  return <CaseStudyClient />;
}

