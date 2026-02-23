import { getTeamMembers } from "@/lib/notion";
import TeamContent from "./TeamContent";

export const revalidate = 60;

export default async function TeamPage() {
  const members = await getTeamMembers();

  const current = members.filter((m) => m.status === "Current");
  const alumni = members.filter((m) => m.status === "Alumni");

  return <TeamContent current={current} alumni={alumni} />;
}
