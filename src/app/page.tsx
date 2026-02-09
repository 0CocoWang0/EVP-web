import Link from "next/link";

const researchHighlights = [
  {
    title: "Opioid Craving Mechanisms",
    description:
      "Investigating the neurobiological mechanisms driving opioid craving in chronic pain patients using PET imaging and dopamine receptor analysis.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
  },
  {
    title: "Brain-Based Biomarkers",
    description:
      "Developing machine learning tools applied to brain imaging data for objective chronic pain diagnosis and prognosis.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
        />
      </svg>
    ),
  },
  {
    title: "High-Field MRI Mapping",
    description:
      "Using 7-Tesla fMRI to map brain activity across cortical layers with unprecedented spatial resolution for pain processing research.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V15m0 0l-2.25-1.313M3 16.5v2.25l2.25 1.313M21 16.5v2.25l-2.25 1.313M12 3v2.25m0 0l2.25 1.313M12 5.25L9.75 6.563"
        />
      </svg>
    ),
  },
];

const recentNews = [
  {
    date: "2025",
    title: "EFIC 2025 Conference Participation",
    description:
      "Lab members present latest findings at the European Pain Federation Congress.",
  },
  {
    date: "2025",
    title: "QPRN 2025",
    description:
      "Presentations at the Quebec Pain Research Network annual meeting.",
  },
  {
    date: "2024",
    title: "New Risk Score for Chronic Pain Published",
    description:
      "A comprehensive psychosocial model using UK Biobank data to predict chronic pain development.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-150 flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/duff-building-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm mb-6">
              <span className="w-2 h-2 bg-mcgill-red rounded-full mr-2" />
              McGill University
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              EVP Lab
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed mb-8">
              Obtaining a better understanding of the brain mechanisms involved
              in chronic pain.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/research"
                className="inline-flex items-center px-6 py-3 bg-mcgill-red text-white rounded-lg font-medium hover:bg-red-700 transition-colors">
                Our Research
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <Link
                href="/get-involved"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/20">
                Join the Lab
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-semibold text-mcgill-red uppercase tracking-wider mb-3">
                About Us
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Pioneering Chronic Pain Research
              </h3>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  The EVP Lab started in August 2019 at McGill University in
                  Montreal and is affiliated with the{" "}
                  <a
                    href="https://www.mcgill.ca/painresearch/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mcgill-red hover:underline">
                    Alan Edwards Centre for Research on Pain
                  </a>
                  .
                </p>
                <p>
                  Led by Dr. Etienne Vachon-Presseau, Canada Research Chair in
                  Chronic Pain, our lab applies machine learning to brain
                  imaging data to develop brain-based biomarkers for diagnosing
                  chronic pain and predicting opioid cravings.
                </p>
                <p>
                  We examine brain markers alongside socio-cultural factors in
                  diverse populations to understand how biomarkers predict
                  health outcomes across different communities.
                </p>
              </div>
              <Link
                href="/team"
                className="inline-flex items-center mt-8 text-mcgill-red font-medium hover:underline">
                Meet our team
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            <div className="bg-warm-gray rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">2019</div>
                  <div className="text-sm text-text-light mt-1">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">10+</div>
                  <div className="text-sm text-text-light mt-1">
                    Lab Members
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">50+</div>
                  <div className="text-sm text-text-light mt-1">
                    Publications
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">CRC</div>
                  <div className="text-sm text-text-light mt-1">
                    Canada Research Chair
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-24 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-mcgill-red uppercase tracking-wider mb-3">
              Research
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-primary">
              Our Research Focus
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchHighlights.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center text-mcgill-red mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-primary mb-3">
                  {item.title}
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/research"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-light transition-colors">
              Learn More About Our Research
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-sm font-semibold text-mcgill-red uppercase tracking-wider mb-3">
                Latest
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-primary">
                Lab News
              </h3>
            </div>
            <Link
              href="/news"
              className="hidden sm:inline-flex items-center text-mcgill-red font-medium hover:underline">
              View all news
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentNews.map((item, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-xl p-6 hover:border-mcgill-red/20 transition-colors">
                <span className="text-sm text-mcgill-red font-medium">
                  {item.date}
                </span>
                <h4 className="text-lg font-semibold text-primary mt-2 mb-3">
                  {item.title}
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Interested in Joining Our Lab?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            We are always looking for passionate researchers, students, and
            collaborators who share our mission to advance chronic pain
            research.
          </p>
          <Link
            href="/get-involved"
            className="inline-flex items-center px-8 py-4 bg-mcgill-red text-white rounded-lg font-medium hover:bg-red-700 transition-colors text-lg">
            Get Involved
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
