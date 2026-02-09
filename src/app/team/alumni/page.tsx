import Link from "next/link";

interface AlumniMember {
  name: string;
  formerRole: string;
  currentPosition?: string;
}

const alumni: AlumniMember[] = [
  {
    name: "Hilary Sweatman",
    formerRole: "Research Assistant",
    currentPosition: "Continuing in pain research",
  },
  {
    name: "Ronrick Da-ano",
    formerRole: "Research Assistant",
  },
];

export default function AlumniPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-accent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Alumni Members</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Former members of the EVP Lab who have contributed to our research mission.
          </p>
        </div>
      </section>

      {/* Alumni List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-sm font-semibold text-mcgill-red uppercase tracking-wider">
              Lab Alumni
            </h2>
            <Link
              href="/team"
              className="text-sm text-text-secondary hover:text-mcgill-red transition-colors"
            >
              ← Current Members
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumni.map((member) => (
              <div
                key={member.name}
                className="bg-warm-gray rounded-xl p-6 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-500">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-primary">{member.name}</h3>
                <p className="text-text-light text-sm mt-1">{member.formerRole}</p>
                {member.currentPosition && (
                  <p className="text-text-secondary text-sm mt-2">{member.currentPosition}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
