import type { Metadata } from "next";
import { getTeamMembers } from "@/lib/notion";
import TeamContent from "./TeamContent";

export const metadata: Metadata = {
  title: "Team — Meet the Researchers",
  description:
    "Meet the team behind the EVP Lab — led by Dr. Etienne Vachon-Presseau, Canada Research Chair in Chronic Pain, at McGill University.",
  alternates: { canonical: "/team" },
};

export const revalidate = 60;

export default async function TeamPage() {
  const members = await getTeamMembers();

  const current = members.filter((m) => m.status === "Current");
  const alumni = members.filter((m) => m.status === "Alumni");

  return <TeamContent current={current} alumni={alumni} />;
}
