interface NewsItem {
  date: string;
  title: string;
  description: string;
  category: string;
}

const newsItems: NewsItem[] = [
  {
    date: "2025-01-15",
    title: "EFIC 2025 Conference",
    description:
      "Lab members will present their latest findings at the European Pain Federation (EFIC) Congress 2025.",
    category: "Conference",
  },
  {
    date: "2025-01-10",
    title: "QPRN 2025 Annual Meeting",
    description:
      "The lab participates in the Quebec Pain Research Network (QPRN) 2025 annual meeting with poster presentations and talks.",
    category: "Conference",
  },
  {
    date: "2024-09-01",
    title: "Canada Research Chair Renewed",
    description:
      "Dr. Vachon-Presseau's Canada Research Chair in Chronic Pain (Tier 2) has been renewed, funded by the Canadian Institutes of Health Research.",
    category: "Award",
  },
  {
    date: "2024-07-15",
    title: "ENIGMA-Chronic Pain Published in Pain",
    description:
      "Our collaborative work with the ENIGMA consortium on identifying brain correlates of chronic pain has been published in the journal Pain.",
    category: "Publication",
  },
  {
    date: "2024-04-20",
    title: "New Preprint: Biomarker Framework for Chronic Pain Prediction",
    description:
      "A new preprint describing our biomarker-based framework for predicting future chronic pain conditions is now available on medRxiv.",
    category: "Publication",
  },
  {
    date: "2024-01-15",
    title: "IASP 2024 Presentations",
    description:
      "Multiple lab members presented their research at the International Association for the Study of Pain (IASP) 2024 World Congress.",
    category: "Conference",
  },
  {
    date: "2023-11-01",
    title: "Nature Medicine Publication",
    description:
      "Our comprehensive study on a prognostic risk score for development and spread of chronic pain has been published in Nature Medicine.",
    category: "Publication",
  },
  {
    date: "2023-06-15",
    title: "CPS 2023 Conference",
    description:
      "Lab members presented at the Canadian Pain Society 2023 Annual Scientific Meeting.",
    category: "Conference",
  },
  {
    date: "2023-03-01",
    title: "IASP 2023 World Congress",
    description:
      "The lab had a strong presence at IASP 2023 with multiple poster and oral presentations.",
    category: "Conference",
  },
  {
    date: "2022-03-07",
    title: "McGill Pain Day 2022 — Poster Awards",
    description:
      "Team members won 2nd and 3rd place positions at the 26th Annual McGill Pain Day poster presentations.",
    category: "Award",
  },
  {
    date: "2022-02-07",
    title: "Presentation at CRIUGM",
    description:
      "Dr. Vachon-Presseau presented on the use of UK Biobank data to study chronic pain at the Centre de Recherche de l'Institut universitaire de gériatrie de Montréal.",
    category: "Presentation",
  },
];

const categoryColors: Record<string, string> = {
  Conference: "bg-blue-50 text-blue-700",
  Publication: "bg-green-50 text-green-700",
  Award: "bg-amber-50 text-amber-700",
  Presentation: "bg-purple-50 text-purple-700",
};

export default function NewsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-warm-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">News</h1>
          <p className="text-xl text-text-secondary max-w-2xl">
            Latest news, publications, awards, and conference presentations from the EVP Lab.
          </p>
        </div>
      </section>

      {/* News List */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {newsItems.map((item, i) => (
              <article
                key={i}
                className="border-l-4 border-mcgill-red pl-6 py-2"
              >
                <div className="flex items-center gap-3 mb-2">
                  <time className="text-sm text-text-light">
                    {new Date(item.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span
                    className={`px-2 py-0.5 text-xs font-medium rounded ${
                      categoryColors[item.category] || "bg-gray-50 text-gray-700"
                    }`}
                  >
                    {item.category}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-primary mb-2">{item.title}</h2>
                <p className="text-text-secondary leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
