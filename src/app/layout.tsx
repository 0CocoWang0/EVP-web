import type { Metadata } from "next";
import { Poppins, Playfair_Display, Merriweather } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-merriweather",
});

const siteUrl = "https://www.evp-lab.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "EVP Lab — Etienne Vachon-Presseau | Chronic Pain Research, McGill University",
    template: "%s | EVP Lab — McGill University",
  },
  description:
    "The Etienne Vachon-Presseau Lab at McGill University — Pioneering chronic pain research through neuroimaging, machine learning, and population health studies.",
  keywords: [
    "Etienne Vachon-Presseau",
    "Etienne Vachon Presseau",
    "etienne vachon presseau",
    "etienne vachon-presseau",
    "EVP Lab",
    "chronic pain research",
    "pain neuroscience",
    "McGill University",
    "neuroimaging",
    "pain research lab",
    "Canada Research Chair",
    "brain mechanisms of pain",
    "machine learning pain",
    "Alan Edwards Centre for Research on Pain",
  ],
  applicationName: "Etienne Vachon-Presseau Lab",
  authors: [{ name: "Etienne Vachon-Presseau" }],
  creator: "EVP Lab",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "EVP Lab — McGill University",
    title:
      "EVP Lab — Etienne Vachon-Presseau | Chronic Pain Research, McGill University",
    description:
      "Pioneering chronic pain research through neuroimaging, machine learning, and population health studies at McGill University.",
    images: [
      {
        url: "/images/team2.png",
        width: 1200,
        height: 630,
        alt: "EVP Lab Team at McGill University",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EVP Lab — Etienne Vachon-Presseau | Chronic Pain Research",
    description:
      "Pioneering chronic pain research through neuroimaging, machine learning, and population health studies at McGill University.",
    images: ["/images/team2.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Etienne Vachon-Presseau Lab",
      alternateName: "EVP Lab",
      url: siteUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "ResearchOrganization",
      name: "EVP Lab — Etienne Vachon-Presseau Lab",
      alternateName: "EVP Lab",
      url: siteUrl,
      logo: `${siteUrl}/logos/evplab-logo.png`,
      description:
        "Chronic pain research lab at McGill University led by Dr. Etienne Vachon-Presseau, Canada Research Chair in Chronic Pain.",
      foundingDate: "2019-08",
      founder: {
        "@type": "Person",
        name: "Etienne Vachon-Presseau",
        jobTitle:
          "Assistant Professor, Canada Research Chair in Chronic Pain (Tier 2)",
        affiliation: {
          "@type": "EducationalOrganization",
          name: "McGill University",
        },
        url: `${siteUrl}/team`,
      },
      parentOrganization: {
        "@type": "EducationalOrganization",
        name: "McGill University",
        url: "https://www.mcgill.ca",
      },
      department: {
        "@type": "Organization",
        name: "Faculty of Dental Medicine and Oral Health Sciences",
      },
      memberOf: {
        "@type": "Organization",
        name: "Alan Edwards Centre for Research on Pain",
        url: "https://www.mcgill.ca/painresearch/",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "845 Sherbrooke Street West",
        addressLocality: "Montréal",
        addressRegion: "QC",
        postalCode: "H3A 0G4",
        addressCountry: "CA",
      },
      knowsAbout: [
        "Chronic Pain",
        "Neuroimaging",
        "Machine Learning",
        "Pain Neuroscience",
        "Population Health",
        "fMRI",
        "PET Imaging",
      ],
    },
  ];

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="EVP Lab" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${playfairDisplay.variable} ${merriweather.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
