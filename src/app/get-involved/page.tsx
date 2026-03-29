import Link from "next/link";

const positions = [
  {
    title: "Post-Doctoral Researchers",
    description:
      "We are seeking motivated postdoctoral fellows with expertise in neuroimaging, machine learning, epidemiology or clinical research in pain and neuroscience.",
  },
  {
    title: "Graduate Students",
    description:
      "We welcome enthusiastic graduate students with a strong interest in pain, neuroscience, imaging, or computational modeling.",
  },
  {
    title: "Undergraduate Students",
    description:
      "Volunteer and research assistant opportunities are available for undergraduate students at McGill University.",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary-light pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get Involved
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            The Vachon-Presseau lab welcomes trainees and collaborators from a
            variety of backgrounds, including{" "}
            <span className="text-red-300 font-bold">neuroscience</span>,{" "}
            <span className="text-red-300 font-bold">psychology</span>,{" "}
            <span className="text-red-300 font-bold">computer science</span>,
            and <span className="text-red-300 font-bold">data science</span>.
          </p>
        </div>
      </section>

      {/* Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-mcgill-red uppercase tracking-wider mb-4">
            Open Opportunities
          </h2>
          <h3 className="text-3xl font-bold text-secondary mb-12">
            We are always looking for talented researchers
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {positions.map((pos) => (
              <div
                key={pos.title}
                className="bg-warm-gray rounded-xl p-8 flex flex-col">
                <h4 className="text-xl font-semibold text-primary mb-4">
                  {pos.title}
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {pos.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      {/* <section className="py-20 bg-warm-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-mcgill-red uppercase tracking-wider mb-4">
            How to Apply
          </h2>
          <h3 className="text-3xl font-bold text-primary mb-8">
            Application Process
          </h3>
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-mcgill-red rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-primary">
                    Review Our Research
                  </h4>
                  <p className="text-text-secondary text-sm mt-1">
                    Familiarize yourself with our{" "}
                    <Link
                      href="/research"
                      className="text-mcgill-red hover:underline">
                      research areas
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/publications"
                      className="text-mcgill-red hover:underline">
                      publications
                    </Link>
                    .
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-mcgill-red rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-primary">
                    Prepare Your Materials
                  </h4>
                  <p className="text-text-secondary text-sm mt-1">
                    Include your CV, a brief statement of research interests,
                    and relevant academic transcripts.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-mcgill-red rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Contact Us</h4>
                  <p className="text-text-secondary text-sm mt-1">
                    Send your application to{" "}
                    <a
                      href="mailto:etienne.vachon-presseau@mcgill.ca"
                      className="text-mcgill-red hover:underline">
                      etienne.vachon-presseau@mcgill.ca
                    </a>{" "}
                    with the subject line indicating the position you are
                    applying for.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* McGill Programs */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            McGill Graduate Programs
          </h2>
          <p className="text-text-secondary mb-6">
            Students can apply through the following programs at McGill
            University:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.mcgill.ca/ipn/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 rounded-lg text-text-secondary hover:border-mcgill-red hover:text-mcgill-red transition-colors text-sm font-medium">
              Integrated Program in Neuroscience
            </a>
            <a
              href="https://www.mcgill.ca/dentistry/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 rounded-lg text-text-secondary hover:border-mcgill-red hover:text-mcgill-red transition-colors text-sm font-medium">
              Faculty of Dental Medicine
            </a>
          </div>
        </div>
      </section> */}
    </>
  );
}
