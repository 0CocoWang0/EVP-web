import Link from "next/link";

interface Conference {
  name: string;
  year: number;
  location?: string;
  description: string;
  slug: string;
}

const conferences: Conference[] = [
  {
    name: "EFIC 2025",
    year: 2025,
    description:
      "European Pain Federation Congress. Lab members presenting latest research on chronic pain prediction and brain biomarkers.",
    slug: "efic-2025",
  },
  {
    name: "QPRN 2025",
    year: 2025,
    description:
      "Quebec Pain Research Network annual meeting. Presentations on data-driven approaches to understanding chronic pain.",
    slug: "qprn-2025",
  },
  {
    name: "IASP 2024",
    year: 2024,
    description:
      "International Association for the Study of Pain World Congress. Multiple poster and oral presentations from lab members.",
    slug: "iasp-2024",
  },
  {
    name: "McGill Pain Day",
    year: 2022,
    location: "McGill University, Montreal",
    description:
      "26th Annual McGill Pain Day. Lab members won 2nd and 3rd place positions in poster presentations.",
    slug: "mcgill-pain-day",
  },
  {
    name: "CPS 2023",
    year: 2023,
    description:
      "Canadian Pain Society Annual Scientific Meeting. Presentations on biopsychosocial frameworks for chronic pain.",
    slug: "cps-2023",
  },
  {
    name: "IASP 2023",
    year: 2023,
    description:
      "International Association for the Study of Pain. Strong lab presence with multiple presentations.",
    slug: "iasp-2023",
  },
  {
    name: "IASP 2022",
    year: 2022,
    description:
      "International Association for the Study of Pain World Congress presentations.",
    slug: "iasp-2022",
  },
];

const years = [...new Set(conferences.map((c) => c.year))].sort((a, b) => b - a);

export default function ConferencesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-warm-gray pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Conferences</h1>
          <p className="text-xl text-text-secondary max-w-2xl">
            Our lab regularly presents research at national and international pain conferences.
          </p>
        </div>
      </section>

      {/* Conference List */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {years.map((year) => (
            <div key={year} className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b border-gray-200">
                {year}
              </h2>
              <div className="space-y-6">
                {conferences
                  .filter((c) => c.year === year)
                  .map((conf) => (
                    <div
                      key={conf.slug}
                      className="bg-warm-gray rounded-xl p-6 hover:shadow-sm transition-shadow"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold text-primary">{conf.name}</h3>
                          {conf.location && (
                            <p className="text-text-light text-sm mt-1">{conf.location}</p>
                          )}
                          <p className="text-text-secondary text-sm leading-relaxed mt-2">
                            {conf.description}
                          </p>
                        </div>
                        <span className="text-mcgill-red font-bold text-lg flex-shrink-0">
                          {conf.year}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
