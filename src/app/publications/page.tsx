interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  type: "journal" | "preprint" | "review";
}

const publications: Publication[] = [
  {
    title: "ENIGMA-Chronic Pain: A worldwide initiative to identify brain correlates of chronic pain",
    authors: "ENIGMA Chronic Pain Working Group (incl. Vachon-Presseau E)",
    journal: "Pain",
    year: 2024,
    type: "journal",
  },
  {
    title: "A Biomarker-Based Framework for the Prediction of Future Chronic Pain",
    authors: "Tanguay-Sabourin C, Fillingim M, et al.",
    journal: "medRxiv",
    year: 2024,
    type: "preprint",
  },
  {
    title: "A distributed brain response predicting the facial expression of acute nociceptive pain",
    authors: "Vachon-Presseau E, et al.",
    journal: "eLife",
    year: 2024,
    type: "journal",
  },
  {
    title: "Modulating subjective pain perception with decoded neurofeedback: a proof-of-concept study",
    authors: "Vachon-Presseau E, et al.",
    journal: "Philosophical Transactions of the Royal Society B",
    year: 2024,
    type: "journal",
  },
  {
    title: "A Prognostic Risk Score for Development and Spread of Chronic Pain",
    authors: "Tanguay-Sabourin C, Fillingim M, Guglietti GV, Zare A, Parisien M, Norman J, Sweatman H, Da-ano R, Heikkala E, PREVENT-AD Research Group, Perez J, Karppinen J, Villeneuve S, Thompson SJ, Martel MO, Roy M, Diatchenko L, Vachon-Presseau E",
    journal: "Nature Medicine",
    year: 2023,
    type: "journal",
  },
  {
    title: "Biological markers and psychosocial factors predict chronic pain conditions",
    authors: "Vachon-Presseau E, et al.",
    journal: "Nature Human Behaviour",
    year: 2023,
    type: "journal",
  },
  {
    title: "Gender norms as sociocultural determinants of chronic pain: a scoping review",
    authors: "Guglietti GV, Vachon-Presseau E, et al.",
    journal: "Pain Reports",
    year: 2023,
    type: "review",
  },
  {
    title: "Starting the pill during adolescence: Age of onset and duration of use influence morphology of the hippocampus and ventromedial prefrontal cortex",
    authors: "Vachon-Presseau E, et al.",
    journal: "European Journal of Neuroscience",
    year: 2023,
    type: "journal",
  },
  {
    title: "Corticolimbic anatomical characteristics predetermine risk for chronic pain",
    authors: "Vachon-Presseau E, Tétreault P, Petre B, et al.",
    journal: "Brain",
    year: 2016,
    type: "journal",
  },
  {
    title: "Effects of stress on the corticolimbic system in chronic pain patients",
    authors: "Vachon-Presseau E, Roy M, Martel MO, et al.",
    journal: "Journal of Neuroscience",
    year: 2013,
    type: "journal",
  },
];

const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);

export default function PublicationsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-accent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Publications</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Our research output in peer-reviewed journals, preprints, and reviews.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/?term=vachon-presseau"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-colors border border-white/20"
            >
              PubMed
            </a>
            <a
              href="https://scholar.google.com/citations?user=hfcMdMEAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-colors border border-white/20"
            >
              Google Scholar
            </a>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {years.map((year) => (
            <div key={year} className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b border-gray-200">
                {year}
              </h2>
              <div className="space-y-6">
                {publications
                  .filter((p) => p.year === year)
                  .map((pub, i) => (
                    <div key={i} className="group">
                      <div className="flex items-start gap-4">
                        <span
                          className={`mt-1 px-2 py-0.5 text-xs font-medium rounded ${
                            pub.type === "journal"
                              ? "bg-blue-50 text-blue-700"
                              : pub.type === "preprint"
                              ? "bg-amber-50 text-amber-700"
                              : "bg-green-50 text-green-700"
                          }`}
                        >
                          {pub.type === "journal"
                            ? "Article"
                            : pub.type === "preprint"
                            ? "Preprint"
                            : "Review"}
                        </span>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-primary group-hover:text-mcgill-red transition-colors">
                            {pub.title}
                          </h3>
                          <p className="text-text-secondary text-sm mt-1">{pub.authors}</p>
                          <p className="text-mcgill-red text-sm font-medium mt-1">
                            {pub.journal}
                          </p>
                        </div>
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
