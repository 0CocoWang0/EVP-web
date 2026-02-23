const researchAreas = [
  {
    id: "neuroimaging",
    title: "Neuroimaging and Mechanisms of Pain",
    description: `
We use advanced imaging methods, including PET and ultra-high-field 7T fMRI, to map the brain circuits underlying pain perception, learning, and prediction. By linking neural activity to expectations, controllability, and stress systems, our work uncovers the biological pathways that shape how pain is experienced and maintained.`,
    icon: (
      <svg
        className="w-10 h-10"
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
    id: "data-science",
    title: "Data Science and Population Health",
    description: `Leveraging large-scale international datasets with millions of participants, we investigate how pain varies across the lifespan and across diverse populations. Using normative modeling, machine learning, and harmonized phenotypes, our research identifies typical patterns and clinically meaningful deviations to improve pain classification and early intervention strategies.`,
    icon: (
      <svg
        className="w-10 h-10"
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
    id: "equity",
    title: "Equity, Identity, and Social Determinants of Pain",
    description: `Our research examines how social, cultural, and gendered dimensions of identity—including race, ethnicity, sex, gender, and rurality—contribute to disparities in pain outcomes. By integrating biopsychosocial frameworks with global datasets, we identify pathways through which disadvantage and gender norms influence vulnerability to chronic and nociplastic pain.`,
    icon: (
      <svg
        className="w-10 h-10"
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
    id: "measurement",
    title: "Improving Pain Measurement and Harmonization",
    description: `We study how survey design, question wording, and study methodology shape pain reporting across international cohorts. This work aims to build evidence-based tools that enhance the accuracy, comparability, and equity of pain assessment worldwide, ensuring more reliable data for research, clinical care, and policy.`,
    icon: (
      <svg
        className="w-10 h-10"
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

import Link from "next/link";

export default function ResearchPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-warm-gray pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Our Research
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl">
            Our lab investigates the biological, psychological, and social
            mechanisms that shape the experience of pain and its disparities. By
            combining neuroimaging, large-scale data science, and innovative
            measurement approaches, we aim to uncover the pathways underlying
            pain, improve its assessment, and inform more effective and
            equitable treatments.
          </p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-mcgill-red uppercase tracking-wider mb-12">
            Research Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area) => (
              <div
                key={area.id}
                id={area.id}
                className="bg-warm-gray rounded-xl p-8 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center text-mcgill-red mb-6">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {area.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Open Science</h2>
          <p className="text-text-secondary mb-6">
            We are committed to open science. Our analysis code and data
            pipelines are available on GitHub.
          </p>
          <a
            href="https://github.com/EVPlab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View on GitHub
          </a>
        </div>
      </section>
    </>
  );
}
