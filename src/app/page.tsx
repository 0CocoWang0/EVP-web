import Link from "next/link";

const about = [
  {
    title: "Research Focus",
    description:
      "Our projects span large-scale population studies, neuroimaging, and sociocultural analyses to understand the biological, psychological, and social mechanisms that shape the experience and distribution of pain.",
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
    title: "Contributions to Science",
    description:
      "By leveraging international datasets, advanced modeling techniques, and innovative frameworks for identity and gender, our research provides new insights into health disparities, pain measurement, and the neural circuits underlying pain perception.",
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
    title: "Innovative Methodologies",
    description:
      "From developing machine learning–based indices and normative models of pain trajectories to combining behavioral modeling with ultra-high-field fMRI, we pioneer cutting-edge tools to advance both scientific discovery and clinical care.",
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
  {
    title: "Engagement and Outreachs",
    description:
      "We share our findings through peer-reviewed publications, conference presentations, and media interviews, ensuring that our science informs policy, clinical practice, and public understanding of pain.",
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

const highlights = [
  {
    title: "Team",
    description: "Recruiting talents since 2019",
    image: "/images/team.png",
    navigateTo: "/team",
  },
  {
    title: "Research",
    description: "Biopsychosocial of pain",
    image: "/images/research.png",
    navigateTo: "/research",
  },
  {
    title: "Publications",
    description: "Sharing our knowledge",
    image: "/images/publications.png",
    navigateTo: "/publications",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-dvh w-full flex justify-start items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/duff-building-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex gap-10 flex-col sm:flex-row w-full justify-start">
          <div className="flex-1 sm:hidden block">
            <img
              src="/logos/evplab-logo.png"
              alt="EVP Lab Logo"
              className="w-full h-full object-contain animate-fade-in-up"
            />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-8xl text-white leading-tight mb-6 animate-fade-in-up">
              Welcome to the EVP Lab
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed mb-8 animate-fade-in-up animation-delay-200">
              Explore the forefront of pain research and innovation in our
              dedicated research lab.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
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
            </div>
          </div>
          <div className="flex-1 sm:block hidden">
            <img
              src="/logos/evplab-logo.png"
              alt="EVP Lab Logo"
              className="w-full h-full object-contain animate-fade-in-up"
            />
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
              <h3 className="text-3xl sm:text-4xl font-bold text-black mb-6">
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
                  The EVP Lab strives to advance a deeper understanding of pain
                  as a complex human experience shaped by biology, psychology,
                  and society. Our vision is to generate knowledge that
                  transforms how pain is studied, measured, and treated, with
                  the ultimate goal of reducing suffering and promoting equity
                  in health across diverse populations.{" "}
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

            <div className="rounded-2xl p-8 lg:p-12">
              <div className="flex w-full justify-between gap-6">
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

      {/* Research about */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {about.map((item) => (
              <div
                key={item.title}
                className="bg-warm-gray rounded-xl p-8 shadow-2xl hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center text-mcgill-red mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-accent-light mb-3">
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

      {/* Highlights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-primary">
              Key Highlights
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <Link
                key={i}
                href={item.navigateTo}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-2xl font-bold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-white/80 text-sm">{item.description}</p>
                  <div className="mt-3 flex items-center text-white text-sm font-medium">
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
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
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
