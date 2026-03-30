import { getPublications } from "@/lib/notion";
import Button from "@/components/Button";

export const revalidate = 60;

export default async function PublicationsPage() {
  const publications = await getPublications();
  const years = [...new Set(publications.map((p) => p.year))].sort(
    (a, b) => b - a,
  );

  return (
    <>
      {/* Header */}
      <section className="relative bg-primary-light pt-40 pb-20 overflow-hidden">
        <div className="absolute z-0 bottom-1/2 -right-1/3 w-1/2 h-1/2 bg-accent-light/30 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Publications
          </h1>

          <div className="flex gap-4 mt-6">
            <Button
              href="https://pubmed.ncbi.nlm.nih.gov/?term=vachon-presseau"
              variant="primary"
              external>
              PubMed
            </Button>
            <Button
              href="https://scholar.google.com/citations?user=hfcMdMEAAAAJ"
              variant="primary"
              external>
              Google Scholar
            </Button>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {publications.length === 0 ? (
            <p className="text-center text-text-light py-12">
              No publications yet. Check back soon!
            </p>
          ) : (
            years.map((year) => (
              <div key={year} className="mb-12">
                <h2 className="text-4xl font-bold text-primary mb-6 pb-2 border-b border-gray-200">
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
                        className="flex sm:gap-8  gap-6 group items-start">
                        {pub.images.length > 0 && (
                          <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden">
                            <img
                              src={pub.images[0]}
                              alt={pub.title}
                              width={150}
                              height={80}
                              className="w-20 h-20 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold text-secondary group-hover:text-mcgill-red transition-colors">
                            {pub.title}
                          </h3>
                          <p className="text-text-secondary text-sm mt-1">
                            {pub.authors}
                          </p>
                          <p className="text-mcgill-red text-sm font-medium mt-1">
                            {pub.journal} {pub.volume} ({pub.year})
                          </p>
                        </div>
                      </a>
                    ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}
