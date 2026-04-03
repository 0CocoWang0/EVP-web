import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conferences",
  description:
    "Conference presentations and posters from the EVP Lab — IASP, EFIC, CPS, McGill Pain Day, and more.",
  alternates: { canonical: "/conferences" },
};

export default function ConferencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
