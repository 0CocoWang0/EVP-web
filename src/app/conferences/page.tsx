"use client";

import { useEffect, useState } from "react";

interface Conference {
  name: string;
  year: number;
  location?: string;
  description: string;
  slug: string;
  cover: string;
  photos?: string[];
}

const conferences: Conference[] = [
  {
    name: "McGill Pain Day 2025",
    year: 2025,
    location: "McGill University, Montreal",
    description:
      "Annual McGill Pain Day. Lab members presenting latest research on chronic pain.",
    slug: "mcgill-pain-day-2025",
    cover: "/conference/McGill-Pain-Day-2025/mcgillpainday-2025-cover.png",
  },
  {
    name: "EFIC 2025",
    year: 2025,
    description:
      "European Pain Federation Congress. Lab members presenting latest research on chronic pain prediction and brain biomarkers.",
    slug: "efic-2025",
    cover: "/conference/EFIC-2025/EFIC2025-cover.png",
    photos: [
      "/conference/EFIC-2025/photo1.png",
      "/conference/EFIC-2025/photo2.png",
    ],
  },
  {
    name: "QPRN 2025",
    year: 2025,
    description:
      "Quebec Pain Research Network annual meeting. Presentations on data-driven approaches to understanding chronic pain.",
    slug: "qprn-2025",
    cover: "/conference/QPRN-2025/QPRN2025-cover.png",
    photos: ["/conference/QPRN-2025/photo1.png"],
  },
  {
    name: "CPS 2024",
    year: 2024,
    description:
      "Canadian Pain Society Annual Scientific Meeting. Presentations on biopsychosocial frameworks for chronic pain.",
    slug: "cps-2024",
    cover: "/conference/CPS/CPS-2024/CPS2024-cover.png",
  },
  {
    name: "IASP 2024",
    year: 2024,
    description:
      "International Association for the Study of Pain World Congress. Multiple poster and oral presentations from lab members.",
    slug: "iasp-2024",
    cover: "/conference/IASP/IASP-2024/IASP2024-cover.png",
    photos: [
      "/conference/IASP/IASP-2024/photo1.png",
      "/conference/IASP/IASP-2024/photo2.png",
    ],
  },
  {
    name: "CPS 2023",
    year: 2023,
    description:
      "Canadian Pain Society Annual Scientific Meeting. Presentations on biopsychosocial frameworks for chronic pain.",
    slug: "cps-2023",
    cover: "/conference/CPS/CPS-2023/CPS2023-cover.png",
    photos: ["/conference/CPS/CPS-2023/photo1.png"],
  },
  {
    name: "IASP 2023",
    year: 2023,
    description:
      "International Association for the Study of Pain. Strong lab presence with multiple presentations.",
    slug: "iasp-2023",
    cover: "/conference/IASP/IASP-2023/IASP2023-cover.png",
  },
  {
    name: "IASP 2022",
    year: 2022,
    description:
      "International Association for the Study of Pain World Congress presentations.",
    slug: "iasp-2022",
    cover: "/conference/IASP/IASP-2022/IASP2022-cover.png",
    photos: [
      "/conference/IASP/IASP-2022/photo1.png",
      "/conference/IASP/IASP-2022/photo2.png",
      "/conference/IASP/IASP-2022/photo3.png",
      "/conference/IASP/IASP-2022/photo4.png",
    ],
  },
];

const years = [...new Set(conferences.map((c) => c.year))].sort(
  (a, b) => b - a,
);

export default function ConferencesPage() {
  const [activeSlug, setActiveSlug] = useState<string>("");

  useEffect(() => {
    const allSlugs = conferences.map((c) => c.slug);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSlug(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );

    allSlugs.forEach((slug) => {
      const el = document.getElementById(slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (slug: string) => {
    const el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Header */}
      <section className="relative bg-primary-light pt-40 pb-20 overflow-hidden">
        <div className="absolute z-0 bottom-1/2 -right-1/3 w-1/2 h-1/2 bg-accent-light/30 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Conferences
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Our lab regularly presents research at national and international
            pain conferences.
          </p>
        </div>
      </section>

      {/* Conference List + TOC */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-12">
            {/* Main Content */}
            <div className="flex-1 min-w-0 max-w-4xl">
              {years.map((year) => (
                <div key={year} className="mb-16">
                  <h2 className="text-2xl font-bold text-primary mb-8 pb-2 border-b border-gray-200">
                    {year}
                  </h2>
                  <div className="space-y-10">
                    {conferences
                      .filter((c) => c.year === year)
                      .map((conf) => (
                        <div
                          key={conf.slug}
                          id={conf.slug}
                          className="bg-warm-gray rounded-xl overflow-hidden hover:shadow-md transition-shadow scroll-mt-32">
                          {/* Cover Image */}
                          <div className="w-full h-64 sm:h-80 overflow-hidden">
                            <img
                              src={conf.cover}
                              alt={conf.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Info */}
                          <div className="p-6">
                            <h3 className="text-xl font-semibold text-primary">
                              {conf.name}
                            </h3>
                            {conf.location && (
                              <p className="text-text-light text-sm mt-1">
                                {conf.location}
                              </p>
                            )}
                            <p className="text-text-secondary text-sm leading-relaxed mt-2">
                              {conf.description}
                            </p>

                            {/* Photo Gallery */}
                            {conf.photos && conf.photos.length > 0 && (
                              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                                {conf.photos.map((photo, i) => (
                                  <div
                                    key={i}
                                    className="aspect-square rounded-lg overflow-hidden">
                                    <img
                                      src={photo}
                                      alt={`${conf.name} photo ${i + 1}`}
                                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Table of Contents - Sidebar */}
            <div className="hidden xl:block w-56 shrink-0">
              <div className="sticky top-32">
                <p className="text-xs font-semibold text-text-light uppercase tracking-wider mb-4">
                  On this page
                </p>
                <nav className="space-y-1">
                  {years.map((year) => (
                    <div key={year}>
                      <p className="text-xs font-semibold text-primary mt-4 mb-1.5 first:mt-0">
                        {year}
                      </p>
                      {conferences
                        .filter((c) => c.year === year)
                        .map((conf) => (
                          <button
                            key={conf.slug}
                            onClick={() => scrollTo(conf.slug)}
                            className={`block w-full text-left text-sm py-1 pl-3 border-l-2 transition-all duration-200 ${
                              activeSlug === conf.slug
                                ? "border-mcgill-red text-mcgill-red font-medium"
                                : "border-transparent text-text-light hover:text-primary hover:border-gray-300"
                            }`}>
                            {conf.name}
                          </button>
                        ))}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
