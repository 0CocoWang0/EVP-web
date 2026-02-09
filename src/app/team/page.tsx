import Link from "next/link";

interface TeamMember {
  name: string;
  role: string;
  department: string;
  bio?: string;
  email?: string;
}

const principalInvestigator: TeamMember = {
  name: "Dr. Etienne Vachon-Presseau",
  role: "Principal Investigator",
  department: "Faculty of Dental Medicine and Oral Health Sciences",
  bio: "Dr. Vachon-Presseau completed his PhD under the supervision of Pierre Rainville (Université de Montréal) where he studied how stress hormones impact the brain of chronic pain patients. He then conducted a post-doctoral fellowship under the supervision of Vania Apkarian (Northwestern University, Chicago) where he studied the brain properties predisposing the development of chronic pain and the brain and psychological determinants of placebo pills response in randomized controlled trials. He holds the Canada Research Chair in Chronic Pain (Tier 2).",
  email: "etienne.vachon-presseau@mcgill.ca",
};

const currentMembers: TeamMember[] = [
  {
    name: "Christophe Tanguay-Sabourin",
    role: "MD/PhD Student",
    department: "Faculty of Medicine",
  },
  {
    name: "Matt Fillingim",
    role: "PhD Student",
    department: "Integrated Program in Neuroscience",
  },
  {
    name: "Gianluca Guglietti",
    role: "PhD Student",
    department: "Integrated Program in Neuroscience",
  },
  {
    name: "Jax Norman",
    role: "PhD Student",
    department: "Faculty of Dental Medicine and Oral Health Sciences",
  },
  {
    name: "Lindsay Neuert",
    role: "Master's Student",
    department: "Faculty of Dental Medicine and Oral Health Sciences",
  },
  {
    name: "Lise Hobeika",
    role: "Postdoctoral Researcher",
    department: "Faculty of Dental Medicine and Oral Health Sciences",
  },
  {
    name: "Azin Zare",
    role: "Research Assistant",
    department: "Faculty of Dental Medicine and Oral Health Sciences",
  },
  {
    name: "Ellen Wang",
    role: "Research Assistant",
    department: "Faculty of Dental Medicine and Oral Health Sciences",
  },
];

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center text-center">
      <div className="w-28 h-28 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mb-4 flex items-center justify-center">
        <span className="text-3xl font-bold text-gray-500">
          {member.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-primary">{member.name}</h3>
      <p className="text-mcgill-red text-sm font-medium mt-1">{member.role}</p>
      <p className="text-text-light text-xs mt-1">{member.department}</p>
      {member.bio && (
        <p className="text-text-secondary text-sm mt-4 leading-relaxed">{member.bio}</p>
      )}
      {member.email && (
        <a
          href={`mailto:${member.email}`}
          className="mt-4 text-sm text-mcgill-red hover:underline"
        >
          {member.email}
        </a>
      )}
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-accent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Team</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Meet the researchers and students working to advance our understanding of chronic
            pain at McGill University.
          </p>
        </div>
      </section>

      {/* Principal Investigator */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-mcgill-red uppercase tracking-wider mb-8">
            Principal Investigator
          </h2>
          <div className="bg-warm-gray rounded-2xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              <div className="w-40 h-40 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-5xl font-bold text-gray-500">EVP</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">
                  {principalInvestigator.name}
                </h3>
                <p className="text-mcgill-red font-medium mt-1">
                  {principalInvestigator.role} — Assistant Professor
                </p>
                <p className="text-text-light text-sm mt-1">
                  {principalInvestigator.department}
                </p>
                <p className="text-text-secondary leading-relaxed mt-4">
                  {principalInvestigator.bio}
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <a
                    href={`mailto:${principalInvestigator.email}`}
                    className="inline-flex items-center px-4 py-2 bg-mcgill-red text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact
                  </a>
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/?term=vachon-presseau"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-text-secondary rounded-lg text-sm font-medium hover:border-mcgill-red hover:text-mcgill-red transition-colors"
                  >
                    PubMed Profile
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=hfcMdMEAAAAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-text-secondary rounded-lg text-sm font-medium hover:border-mcgill-red hover:text-mcgill-red transition-colors"
                  >
                    Google Scholar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Members */}
      <section className="py-16 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-sm font-semibold text-mcgill-red uppercase tracking-wider">
              Current Members
            </h2>
            <Link
              href="/team/alumni"
              className="text-sm text-text-secondary hover:text-mcgill-red transition-colors"
            >
              View Alumni →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentMembers.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Interested in Joining Our Team?
          </h2>
          <p className="text-text-secondary mb-6">
            We are always looking for motivated students and researchers to join our lab.
          </p>
          <Link
            href="/get-involved"
            className="inline-flex items-center px-6 py-3 bg-mcgill-red text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </>
  );
}
