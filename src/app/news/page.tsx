import { getNewsItems } from "@/lib/notion";

const categoryColors: Record<string, string> = {
  Milestone: "bg-purple-50 text-purple-700 ring-purple-200",
  Defence: "bg-green-50 text-green-700 ring-green-200",
  Training: "bg-blue-50 text-blue-700 ring-blue-200",
  Award: "bg-amber-50 text-amber-700 ring-amber-200",
};

export const revalidate = 60; // revalidate every 60 seconds

export default async function NewsPage() {
  const newsItems = await getNewsItems();

  return (
    <>
      {/* Header */}
      <section className="bg-warm-gray pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            News
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl">
            Updates, milestones, and achievements from the EVP Lab.
          </p>
        </div>
      </section>

      {/* Masonry Feed */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {newsItems.length === 0 ? (
            <p className="text-center text-text-light py-12">
              No news posts yet. Check back soon!
            </p>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {newsItems.map((item, i) => (
                <article
                  key={i}
                  className="break-inside-avoid bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {/* Images */}
                  {item.images.length > 0 &&
                    (item.images.length === 1 ? (
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-full object-cover"
                      />
                    ) : (
                      <div className="grid grid-cols-2 gap-0.5">
                        {item.images.map((img, j) => (
                          <img
                            key={j}
                            src={img}
                            alt={`${item.title} photo ${j + 1}`}
                            className="w-full aspect-square object-cover"
                          />
                        ))}
                      </div>
                    ))}

                  {/* Content */}
                  <div className="p-5">
                    {/* Header row */}
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-9 h-9 rounded-full bg-warm-gray flex items-center justify-center text-base shrink-0">
                        {item.emoji || "📰"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-secondary leading-tight">
                          EVP Lab
                        </p>
                        <p className="text-xs text-text-light">{item.date}</p>
                      </div>
                      {item.category && (
                        <span
                          className={`px-2 py-0.5 text-xs font-medium rounded-full ring-1 shrink-0 ${
                            categoryColors[item.category] ||
                            "bg-gray-50 text-gray-700 ring-gray-200"
                          }`}>
                          {item.category}
                        </span>
                      )}
                    </div>

                    {/* Text */}
                    <h2 className="text-base font-bold text-secondary mb-1.5">
                      {item.title}
                    </h2>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
