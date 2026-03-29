"use client";

import { useState } from "react";
import Link from "next/link";
import type { TeamMember } from "@/lib/notion";

const roleOrder = [
  "Principal Investigator",
  "Postdoctoral Researcher",
  "PhD Student",
  "Master's Student",
  "Research Assistant",
];

function roleSortKey(role: string) {
  const idx = roleOrder.indexOf(role);
  return idx === -1 ? roleOrder.length : idx;
}

function MemberCard({ member }: { member: TeamMember }) {
  const isPI = member.role === "Principal Investigator";

  return (
    <div
      className={`${isPI ? "bg-warm-gray" : "bg-white"} rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col sm:flex-row w-full justify-between gap-10 sm:gap-20`}>
      <div className="w-60 h-60 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
        {member.photo.length > 0 ? (
          <img
            src={member.photo[0]}
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
      <div>
        <h3
          className={`${isPI ? "text-2xl" : "text-lg"} font-bold text-primary`}>
          {member.name}
        </h3>
        <p className="text-mcgill-red font-medium mt-1">{member.role}</p>
        <p className="text-text-light mt-1">{member.department}</p>
        {member.bio && (
          <p className="text-text-secondary mt-3 leading-relaxed">
            {member.bio}
          </p>
        )}
        {isPI && (
          <div className="flex flex-wrap gap-4 mt-4">
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center px-4 py-2 bg-mcgill-red text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                Contact
              </a>
            )}
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
        )}
        {!isPI && member.email && (
          <a
            href={`mailto:${member.email}`}
            className="mt-3 inline-block text-sm text-mcgill-red hover:underline">
            {member.email}
          </a>
        )}
      </div>
    </div>
  );
}

export default function TeamContent({
  current,
  alumni,
}: {
  current: TeamMember[];
  alumni: TeamMember[];
}) {
  const [tab, setTab] = useState<"current" | "alumni">("current");

  // Group current members by role
  const grouped = roleOrder
    .map((role) => ({
      role,
      members: current
        .filter((m) => m.role === role)
        .sort((a, b) => a.order - b.order),
    }))
    .filter((g) => g.members.length > 0);

  // Also include any roles not in roleOrder
  const otherCurrent = current
    .filter((m) => !roleOrder.includes(m.role))
    .sort(
      (a, b) => roleSortKey(a.role) - roleSortKey(b.role) || a.order - b.order,
    );

  if (otherCurrent.length > 0) {
    grouped.push({ role: "Other", members: otherCurrent });
  }

  const roleLabels: Record<string, string> = {
    "Principal Investigator": "Principal Investigator",
    "Postdoctoral Researcher": "Postdoctoral Researchers",
    "PhD Student": "Doctoral Students",
    "Master's Student": "Graduate Students",
    "Research Assistant": "Research Assistants",
  };

  return (
    <>
      {/* Header */}
      <section className="bg-primary-light pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Research Team
          </h1>
          <p className="text-lg text-white mb-8 max-w-2xl">
            Meet the passionate researchers dedicated to unraveling the
            mysteries of chronic pain at the Etienne Vachon-Presseau Lab.
          </p>
          {/* Decorative Blurred Circle */}
          <div className="absolute z-0 bottom-1/2 -right-1/3 w-1/2 h-1/2 bg-accent-light/30 rounded-full blur-3xl pointer-events-none" />
        </div>
      </section>
      <div className="w-full pt-8 items-center justify-center flex">
        {/* Toggle */}
        <div className="inline-flex rounded-full bg-white p-1 shadow-sm">
          <button
            onClick={() => setTab("current")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              tab === "current"
                ? "bg-mcgill-red text-white"
                : "text-text-secondary hover:text-primary"
            }`}>
            Current Members
          </button>
          <button
            onClick={() => setTab("alumni")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              tab === "alumni"
                ? "bg-mcgill-red text-white"
                : "text-text-secondary hover:text-primary"
            }`}>
            Alumni
          </button>
        </div>
      </div>
      {/* Current Members */}
      {tab === "current" && (
        <>
          {grouped.map((group) => (
            <section key={group.role} className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-sm font-semibold text-mcgill-red uppercase tracking-wider mb-8">
                  {roleLabels[group.role] || group.role}
                </h2>
                <div className="grid grid-cols-1 gap-10 sm:gap-20">
                  {group.members.map((member) => (
                    <MemberCard key={member.name} member={member} />
                  ))}
                </div>
              </div>
            </section>
          ))}
        </>
      )}

      {/* Alumni */}
      {tab === "alumni" && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {alumni.length === 0 ? (
              <p className="text-center text-text-light py-12">
                No alumni listed yet.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {alumni.map((member) => (
                  <div
                    key={member.name}
                    className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-14 h-14 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        {member.photo.length > 0 ? (
                          <img
                            src={member.photo[0]}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-sm font-bold text-gray-500">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .slice(0, 2)}
                          </span>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary">
                          {member.name}
                        </h3>
                        {member.formerRole && (
                          <p className="text-text-light text-sm">
                            {member.formerRole}
                          </p>
                        )}
                      </div>
                    </div>
                    {member.bio && (
                      <p className="text-text-secondary text-sm leading-relaxed mb-2">
                        {member.bio}
                      </p>
                    )}
                    {member.currentPosition && (
                      <p className="text-text-secondary text-sm">
                        Now: {member.currentPosition}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Join the Team CTA */}
      <section className="py-20 bg-warm-gray">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
            Interested in joining our lab?
          </h2>
          <p className="text-text-secondary mb-8">
            We are always looking for motivated students and researchers
            passionate about understanding chronic pain.
          </p>
          <Link
            href="/get-involved"
            className="inline-flex items-center px-6 py-3 bg-mcgill-red text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
            Learn about open positions
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
