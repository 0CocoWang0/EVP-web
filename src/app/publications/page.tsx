interface Publication {
  title: string;
  authors: string;
  journal: string;
  volume: string;
  year: number;
  doi: string;
}

const publications: Publication[] = [
  {
    title:
      "Biological markers and psychosocial factors predict chronic pain conditions",
    authors: "Fillingim, M., Tanguay-Sabourin, C., Parisien, M. et al.",
    journal: "Nat Hum Behav",
    volume: "9, 1710–1725",
    year: 2025,
    doi: "https://doi.org/10.1038/s41562-025-02156-y",
  },
  {
    title: "Tinnitus risk factors and its evolution over time",
    authors: "Hobeika, L., Fillingim, M., Tanguay-Sabourin, C. et al.",
    journal: "Nat Commun",
    volume: "16, 4244",
    year: 2025,
    doi: "https://doi.org/10.1038/s41467-025-59445-3",
  },
  {
    title: "A prognostic risk score for development and spread of chronic pain",
    authors: "Tanguay-Sabourin, C., Fillingim, M., Guglietti, G.V. et al.",
    journal: "Nat Med",
    volume: "29, 1821–1831",
    year: 2023,
    doi: "https://doi.org/10.1038/s41591-023-02430-4",
  },
];

const years = [...new Set(publications.map((p) => p.year))].sort(
  (a, b) => b - a,
);

export default function PublicationsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-warm-gray pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Publications
          </h1>

          <div className="flex gap-4 mt-6">
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/?term=vachon-presseau"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-text-secondary rounded-lg text-sm font-medium hover:border-mcgill-red hover:text-mcgill-red transition-colors">
              PubMed
            </a>
            <a
              href="https://scholar.google.com/citations?user=hfcMdMEAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-text-secondary rounded-lg text-sm font-medium hover:border-mcgill-red hover:text-mcgill-red transition-colors">
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
              <h2 className="text-2xl font-bold text-accent-light mb-6 pb-2 border-b border-gray-200">
                {year}
              </h2>
              <div className="space-y-6">
                {publications
                  .filter((p) => p.year === year)
                  .map((pub, i) => (
                    <a
                      key={i}
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group">
                      <h3 className="text-lg font-semibold text-primary group-hover:text-mcgill-red transition-colors">
                        {pub.title}
                      </h3>
                      <p className="text-text-secondary text-sm mt-1">
                        {pub.authors}
                      </p>
                      <p className="text-mcgill-red text-sm font-medium mt-1">
                        {pub.journal} {pub.volume} ({pub.year})
                      </p>
                    </a>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
