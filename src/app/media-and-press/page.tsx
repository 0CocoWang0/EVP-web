import { getMediaItems } from "@/lib/notion";

export const revalidate = 60;

export default async function MediaPage() {
  const mediaItems = await getMediaItems();

  return (
    <>
      {/* Header */}
      <section className="relative bg-primary-light pt-40 pb-20 overflow-hidden">
        <div className="absolute z-0 bottom-1/2 -right-1/3 w-1/2 h-1/2 bg-accent-light/30 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Media & Press
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Coverage of our research in the media and press.
          </p>
        </div>
      </section>

      {/* Masonry Feed */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {mediaItems.length === 0 ? (
            <p className="text-center text-text-light py-12">
              No media items yet. Check back soon!
            </p>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {mediaItems.map((item, i) => (
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
                    <div className="flex items-center gap-2.5 mb-3">
                      {item.source && (
                        <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
                          {item.source}
                        </span>
                      )}
                      {item.date && (
                        <time className="text-xs text-text-light">
                          {new Date(item.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      )}
                    </div>

                    <h2 className="text-base font-bold text-primary mb-1.5">
                      {item.title}
                    </h2>
                    {item.description && (
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {item.description}
                      </p>
                    )}
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-3 text-mcgill-red text-sm font-medium hover:underline">
                        Read article
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
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
