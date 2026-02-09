const researchAreas = [
  {
    id: "opioid-craving",
    title: "Biological Determinants of Opioid Craving in Pain Patients",
    description: `Opioid craving represents a primary indicator of misuse risk among chronic pain patients, yet it correlates weakly with pain intensity. We investigate the neurobiological mechanisms driving craving through cross-sectional observational studies of patients receiving prescribed opioids in tertiary pain management settings.`,
    methodology: `Using Positron Emission Tomography (PET), we measure dopamine D2 receptor availability across striatal subregions (ventral, dorsal, and posterior dorsal). Our research recognizes that both chronic pain and substance use disorders involve severe impairments in the mesolimbic dopaminergic system that diminish pleasure-seeking motivation.`,
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    id: "biomarkers",
    title: "Brain-Based Markers for Chronic Pain Diagnosis",
    description: `Current clinical practice lacks objective biomarkers for chronic pain diagnosis and prognosis. Tissue damage poorly predicts pain persistence, complicating clinical assessment. Our lab aims to develop diagnostic tools leveraging large-scale datasets.`,
    methodology: `Using curated UK Biobank and Open Pain databases, we train and validate predictive biomarkers across diverse clinical populations. Expected outcomes include objective pain detection, identification of at-risk individuals, and improved drug efficacy assessment in randomized controlled trials.`,
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    id: "high-field-mri",
    title: "Brain Pathway Mapping Using High-Field MRI",
    description: `Seven-Tesla fMRI enables measurement of brain activity across cortical layers with unprecedented spatial resolution. Our lab applies layer-dependent imaging to pain processing — a novel application studying the core pain system and its functional connectivity with distributed pain-processing regions.`,
    methodology: `We use 7T MRI to achieve sub-millimeter resolution imaging of cortical layers, allowing us to disentangle feedforward and feedback processing in the pain system. This approach reveals how different layers of the cortex contribute to pain perception and modulation.`,
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V15m0 0l-2.25-1.313M3 16.5v2.25l2.25 1.313M21 16.5v2.25l-2.25 1.313M12 3v2.25m0 0l2.25 1.313M12 5.25L9.75 6.563" />
      </svg>
    ),
  },
];

const keyPublications = [
  {
    title: "A Prognostic Risk Score for Development and Spread of Chronic Pain",
    authors: "Tanguay-Sabourin C, Fillingim M, Guglietti GV, et al.",
    journal: "Nature Medicine",
    year: 2023,
  },
  {
    title: "Corticolimbic anatomical characteristics predetermine risk for chronic pain",
    authors: "Vachon-Presseau E, Tétreault P, Petre B, et al.",
    journal: "Brain",
    year: 2016,
  },
  {
    title: "A Biomarker-Based Framework for the Prediction of Future Chronic Pain",
    authors: "EVP Lab",
    journal: "medRxiv (Preprint)",
    year: 2024,
  },
];

export default function ResearchPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-accent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Research</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Our research focuses on understanding the brain mechanisms involved in chronic pain,
            using cutting-edge neuroimaging, machine learning, and large-scale datasets.
          </p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-mcgill-red uppercase tracking-wider mb-12">
            Research Areas
          </h2>
          <div className="space-y-16">
            {researchAreas.map((area, index) => (
              <div
                key={area.id}
                id={area.id}
                className={`flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="lg:w-2/3">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center text-mcgill-red flex-shrink-0">
                      {area.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{area.title}</h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed mb-4">{area.description}</p>
                  <div className="bg-warm-gray rounded-lg p-6">
                    <h4 className="text-sm font-semibold text-mcgill-red uppercase tracking-wider mb-2">
                      Methodology
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {area.methodology}
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/3">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-64 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
                      </svg>
                      <p className="text-sm">Research Image</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Publications */}
      <section className="py-20 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-mcgill-red uppercase tracking-wider mb-4">
            Key Publications
          </h2>
          <h3 className="text-2xl font-bold text-primary mb-8">Selected Research Outputs</h3>
          <div className="space-y-4">
            {keyPublications.map((pub, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-primary">{pub.title}</h4>
                <p className="text-text-secondary text-sm mt-2">{pub.authors}</p>
                <div className="flex items-center gap-3 mt-3">
                  <span className="text-mcgill-red text-sm font-medium">{pub.journal}</span>
                  <span className="text-text-light text-sm">{pub.year}</span>
                </div>
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
            We are committed to open science. Our analysis code and data pipelines are available
            on GitHub.
          </p>
          <a
            href="https://github.com/EVPlab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </a>
        </div>
      </section>
    </>
  );
}
