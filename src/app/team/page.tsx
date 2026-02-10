import Link from "next/link";

interface TeamMember {
  name: string;
  role: string;
  department: string;
  bio?: string;
  email?: string;
  photo?: string;
  contact?: string;
}

const principalInvestigator: TeamMember = {
  name: "Dr. Etienne Vachon-Presseau",
  role: "Principal Investigator",
  department: "Faculty of Dental Medicine and Oral Health Sciences",
  bio: "Dr. Vachon-Presseau completed his PhD under the supervision of Pierre Rainville (Université de Montréal) where he studied how stress hormones impact the brain of chronic pain patients. He then conducted a post-doctoral fellowship under the supervision of Vania Apkarian (Northwestern University, Chicago) where he studied the brain properties predisposing the development of chronic pain and the brain and psychological determinants of placebo pills response in randomized controlled trials. He holds the Canada Research Chair in Chronic Pain (Tier 2).",
  email: "etienne.vachon-presseau@mcgill.ca",
  photo: "/teams/etienne.png",
};

const currentMembers: TeamMember[] = [
  {
    name: "Christophe Tanguay-Sabourin",
    role: "MD/PhD Student",
    department: "Faculty of Medicine",
    photo: "/teams/doctoral/christophe.png",
    bio: "Christophe Tanguay-Sabourin is a MD/PhD student co-supervised by Dr. Vachon-Presseau at the EVP Laboratory (primary location), Dr. Luda Diatchenko and Dr. Pierre Rainville at the University of Montreal where he is studying Medicine. He completed an undergraduate research thesis with Dr. Vachon-Presseau, on the role of stress and cortisol on chronic low back pain followed by a master’s thesis combining brain, genetic and epidemiological risk factors linked to chronic widespread pain. In his free time, he likes to get coffee and discuss research.",
    contact: "christophe.tanguaysabourin@mcgill.ca",
  },
  {
    name: "Matt Fillingim",
    role: "PhD Student",
    department: "Integrated Program in Neuroscience",
    photo: "/teams/doctoral/matt.png",
    bio: "Matt Fillingim’s primary research interests lie in clinical computational neuroscience with a focus on multi-modal neuroimaging and chronic pain. Matt is interested in leveraging globally spanning data to understand the experience of pain over the lifespan. His research also focuses on leverage large population datasets (UKBB) and machine learning to derive neuroimaging-based biomarkers of chronic pain. Matt’s long term goal is to facilitate the development of personalized medicine and improve brain health through the state-of-the-art neuroimaging modalities and individualized bioinformatic models.",
    contact: "matthew.fillingim@mail.mcgill.ca",
  },
  {
    name: "Gianluca Guglietti",
    role: "PhD Student",
    department: "Integrated Program in Neuroscience",
    photo: "/teams/doctoral/gianluca.png",
    bio: "Gianluca's current research explores how the brain integrates expectations, learning, and sensory input to shape the experience of pain. Gianluca started in the Vachon-Presseau lab in 2020 studying for a Master’s in Dental Sciences where he investigated the social determinants of chronic pain from a population neuroscience perspective with a specific focus on sex and gender. He obtained his Bachelor’s degree in Neuroscience at the University of Toronto (2016-2020) where he studied pediatric pain, endocannabinoids, and neuroimaging.",
    contact: "gianluca.guglietti@mail.mcgill.ca",
  },
  {
    name: "Jax Norman",
    role: "PhD Student",
    department: "Faculty of Dental Medicine and Oral Health Sciences",
    photo: "/teams/doctoral/jax.png",
    bio: "Jax is a Doctoral student interested in chronic pain, chronic illness, and racial and ethnic differences in their prevalence and effects. Currently she is working on computing an index of allostatic load in the UK Biobank cohort to examine the relationship between allostatic overload and chronic pain. In the future, she hopes to explore racial and ethnic differences in the interactions between chronic pain, chronic illness, and socioeconomic status and identify factors contributing to their development.",
    contact: "jacqueline.norman@mail.mcgill.ca",
  },
  {
    name: "Lindsay Neuert",
    role: "Master's Student",
    department: "Faculty of Dental Medicine and Oral Health Sciences",
    photo: "/teams/doctoral/lindsay.png",
    bio: "Lindsay is a Doctoral student researching how question wording and study design differences impact self-reported pain reports. Her work uses data from over 5 million individuals across the world to incorporate a globally diverse sample. She completed her undergraduate studies in the Neuroscience, Honours stream at the University of Guelph. ",
    contact: "lindsay.neuert@mail.mcgill.ca",
  },
];

const postdoctoralResearchers: TeamMember[] = [
  {
    name: "Lise Hobeika",
    role: "Postdoctoral Researcher",
    department: "Faculty of Dental Medicine and Oral Health Sciences",
    photo: "/teams/doctoral/lise.png",
    bio: "Lise Hobeika is a postdoctoral researcher specialized in hearing and emotions, working between the Vachon-Presseau Lab at McGill and the Hearing Institute in Paris. Her research explores the mechanisms behind tinnitus—a chronic condition involving the perception of a phantom sound—using analytical approaches from chronic pain research. She employs a range of methods across multiple scales, including machine learning on large epidemiological datasets, cognitive testing, and neuroimaging.",
    contact: "lise.hobeika@gmail.com",
  },
];

const researchAssistants: TeamMember[] = [
  {
    name: "Azin Zare",
    role: "Research Assistant",
    department: "Faculty of Dental Medicine and Oral Health Sciences",
    photo: "/teams/research-assistant/azin.png",
    bio: "Azin Zare is a Doctor of Dental Medicine (DMD) student at McGill University. She completed her master degree under the supervision of Dr. Vachon-Presseau at the Faculty of Dentistry. Before starting her studies at McGill, she initially received her DMD degree from Iran. Her research interest is related to studying the complexity of chronic pain manifestations, and the purpose of her thesis project in Dr. Vachon-Presseau's lab was to evaluate the predictors of prescription opioid use and examine alterations in the brain of individuals suffering from chronic pain being prescribed opioids. On the personal side, she loves to travel and learn new things along the way. When she is not working, she enjoys being outdoors and hanging out with friends. Her passion is to become a clinician-scientist and she is always looking forward to new opportunities.",
    contact: "azin.zare@mcgill.ca",
  },
];

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col sm:flex-row w-full justify-between gap-10 sm:gap-20">
      <div className="w-60 h-60 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-3xl font-bold text-gray-500">
            {member.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </span>
        )}
      </div>
      <div className="">
        <h3 className="text-lg font-semibold text-primary">{member.name}</h3>
        <p className="text-mcgill-red text-sm font-medium mt-1">
          {member.role}
        </p>
        <p className="text-text-light text-xs mt-1">{member.department}</p>
        {member.bio && (
          <p className="text-text-secondary text-sm mt-3 leading-relaxed">
            {member.bio}
          </p>
        )}
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="mt-3 inline-block text-sm text-mcgill-red hover:underline">
            {member.email}
          </a>
        )}
        {member.contact && (
          <a
            href={`mailto:${member.contact}`}
            className="mt-3 inline-block text-sm text-mcgill-red hover:underline">
            {member.contact}
          </a>
        )}
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-warm-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Our Research Team
          </h1>
        </div>
      </section>

      {/* Principal Investigator */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-mcgill-red uppercase tracking-wider mb-8">
            Principal Investigator
          </h2>
          <div className="bg-warm-gray rounded-xl shadow-sm p-6 flex flex-col sm:flex-row w-full justify-between gap-10 sm:gap-20">
            <div className="w-60 h-60 flex-shrink-0 overflow-hidden rounded-lg">
              <img
                src="/teams/etienne.png"
                alt="Dr. Etienne Vachon-Presseau"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="">
              <h3 className="text-2xl font-bold text-primary">
                {principalInvestigator.name}
              </h3>
              <p className="text-mcgill-red font-medium mt-1">
                {principalInvestigator.role} — Assistant Professor
              </p>
              <p className="text-text-light text-sm mt-1">
                {principalInvestigator.department}
              </p>
              <p className="text-text-secondary text-sm mt-3 leading-relaxed">
                {principalInvestigator.bio}
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href={`mailto:${principalInvestigator.email}`}
                  className="inline-flex items-center px-4 py-2 bg-mcgill-red text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                  Contact
                </a>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=vachon-presseau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-text-secondary rounded-lg text-sm font-medium hover:border-mcgill-red hover:text-mcgill-red transition-colors">
                  PubMed Profile
                </a>
                <a
                  href="https://scholar.google.com/citations?user=hfcMdMEAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-text-secondary rounded-lg text-sm font-medium hover:border-mcgill-red hover:text-mcgill-red transition-colors">
                  Google Scholar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Postdoctoral Researchers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-mcgill-red uppercase tracking-wider mb-8">
            Postdoctoral Researchers
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {postdoctoralResearchers.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Doctoral Students */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-sm font-semibold text-mcgill-red uppercase tracking-wider">
              Doctoral Students
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {currentMembers.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Research Assistants */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-mcgill-red uppercase tracking-wider mb-8">
            Research Assistants
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {researchAssistants.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
