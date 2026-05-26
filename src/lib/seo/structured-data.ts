import { COHORT } from "@lib/data/cohort";

/**
 * Build a combined JSON-LD graph for the landing page.
 * Includes: Organization, Course, FAQPage, BreadcrumbList, WebSite.
 * Validate against https://validator.schema.org/ before launch.
 */
export function buildLandingJsonLd(siteUrl: string) {
  const orgId = `${siteUrl}#organization`;
  const courseId = `${siteUrl}#course`;
  const websiteId = `${siteUrl}#website`;

  const organization = {
    "@type": "EducationalOrganization",
    "@id": orgId,
    name: "Build Space",
    legalName: "Build Space LLP",
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    description:
      "Build Space runs Logic Labs, a 4-week live cohort for Indian Class 9 to 12 students to design, build and deploy real AI agents. Five students per cohort. One AI practitioner as the instructor.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs: [],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Admissions",
        email: COHORT.contact.email,
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };

  const course = {
    "@type": "Course",
    "@id": courseId,
    name: "Logic Labs Cohort 01 — Build an AI Agent in 4 Weeks",
    description:
      "A four-week live cohort for Indian Class 9 to 12 students. Build and deploy a working AI agent in Python. Five students per batch, one practitioner instructor, weekends only.",
    provider: { "@id": orgId },
    educationalLevel: "Secondary School (Class 9-12)",
    inLanguage: "en-IN",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
    },
    teaches: [
      "Python for AI",
      "Large language models",
      "AI agents and tool use",
      "Retrieval-augmented generation",
      "Deploying applications to production",
    ],
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        name: "Cohort 01",
        startDate: COHORT.startDate,
        endDate: COHORT.endDate,
        courseMode: "Online",
        courseSchedule: {
          "@type": "Schedule",
          duration: "PT2H",
          repeatFrequency: "Weekly",
          byDay: ["https://schema.org/Saturday", "https://schema.org/Sunday"],
        },
        instructor: {
          "@type": "Person",
          name: COHORT.instructor.name,
          jobTitle: "AI Engineer",
          description: COHORT.instructor.role,
        },
        location: {
          "@type": "VirtualLocation",
          url: siteUrl,
        },
        maximumAttendeeCapacity: COHORT.batchSize,
      },
    ],
    offers: {
      "@type": "Offer",
      price: String(COHORT.priceINR),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}#apply`,
      category: "Paid",
      eligibleRegion: { "@type": "Country", name: "IN" },
    },
  };

  const faqPage = {
    "@type": "FAQPage",
    mainEntity: COHORT.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Logic Labs Cohort 01",
        item: `${siteUrl}#cohort`,
      },
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    url: siteUrl,
    name: "Build Space",
    inLanguage: "en-IN",
    publisher: { "@id": orgId },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, course, faqPage, breadcrumb, website],
  };
}
