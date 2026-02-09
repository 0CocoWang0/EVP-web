interface MediaItem {
  date: string;
  title: string;
  source: string;
  description: string;
  url?: string;
}

const mediaItems: MediaItem[] = [
  {
    date: "2023-11-15",
    title: "A new model to identify and predict chronic pain",
    source: "McGill Newsroom",
    description:
      "A risk score developed with machine-learning can distinguish long-lasting pain and predict whether someone will develop widespread chronic pain, how the pain will spread across their body, and whether the pain will be severe.",
    url: "https://www.mcgill.ca/newsroom/channels/news/new-model-identify-and-predict-chronic-pain-349138",
  },
  {
    date: "2023-06-01",
    title: "Study helps explain why chronic pain is often discounted",
    source: "McGill myMcGill",
    description:
      "Research from the lab helps explain the disconnect between what patients report about their pain and what clinical assessments reveal.",
    url: "https://www.mcgill.ca/mymcgill/channels/news/study-helps-explain-why-chronic-pain-often-discounted-366029",
  },
];

export default function MediaPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-accent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Media & Press</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Coverage of our research in the media and press.
          </p>
        </div>
      </section>

      {/* Media Items */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {mediaItems.map((item, i) => (
              <article
                key={i}
                className="border border-gray-100 rounded-xl p-8 hover:border-mcgill-red/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <time className="text-sm text-text-light">
                    {new Date(item.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="px-2 py-0.5 text-xs font-medium rounded bg-gray-100 text-gray-700">
                    {item.source}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-primary mb-3">{item.title}</h2>
                <p className="text-text-secondary leading-relaxed">{item.description}</p>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-mcgill-red text-sm font-medium hover:underline"
                  >
                    Read article
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
