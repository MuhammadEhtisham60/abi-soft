import type { MetadataRoute } from "next";
import { services } from "@/components/servicesData";
import { allProjects } from "@/components/projectsData";

const BASE_URL = "https://www.koderfors.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/case-study`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/case-studies`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/team`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = allProjects.map((project) => ({
    url: `${BASE_URL}/case-study/${project.id}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes];
}
