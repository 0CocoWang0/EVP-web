"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Team" },
  { href: "/research", label: "Research" },
  {
    href: "/publications",
    label: "Publications",
    children: [
      { href: "/publications", label: "Publications" },
      { href: "/conferences", label: "Conferences" },
    ],
  },
  { href: "/news", label: "News" },
  /*   { href: "/get-involved", label: "Get Involved" },
   */ { href: "/media-and-press", label: "Media & Press" },
  {
    href: "https://github.com/EVPlab",
    label: "GitHub",
    external: true,
    icon: (
      <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <nav
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg"
            : "bg-white/70 backdrop-blur-md shadow-sm"
        }`}>
        <div className="px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex w-fit justify-center items-center">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center">
                  <img
                    src="/logos/evplab-logo.png"
                    alt="EVP Lab Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-lg font-medium text-black">EVP Lab</span>
              </div>
              <div className="w-24 rounded-lg flex items-center justify-center">
                <img
                  src="/logos/McGill_University-Logo.svg"
                  alt="McGill University"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-0.5">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}>
                    <Link
                      href={link.href}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                        isActive(link.href)
                          ? "bg-mcgill-red/10 text-mcgill-red"
                          : "text-text-secondary hover:bg-gray-100 hover:text-primary"
                      }`}>
                      {link.label}
                      <svg
                        className={`inline-block w-3 h-3 ml-0.5 transition-transform duration-200 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>
                    <div
                      className={`absolute top-full left-0 pt-2 transition-all duration-200 origin-top ${
                        openDropdown === link.label
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95 pointer-events-none"
                      }`}>
                      <div className="bg-white/90 backdrop-blur-xl shadow-lg rounded-xl py-1.5 min-w-45">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-text-secondary hover:bg-mcgill-red/5 hover:text-mcgill-red transition-colors rounded-lg mx-1.5">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : link.icon ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-200 ml-1.5">
                    {link.icon}
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive(link.href)
                        ? "bg-mcgill-red/10 text-mcgill-red"
                        : "text-text-secondary hover:bg-gray-100 hover:text-primary"
                    }`}>
                    {link.label}
                  </Link>
                ),
              )}
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-full text-text-secondary hover:bg-gray-100 hover:text-mcgill-red transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
          }`}>
          <div className="px-4 pb-4 pt-2 space-y-1 border-t border-gray-200/50">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.icon ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 rounded-xl text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 transition-colors mt-2"
                    onClick={() => setMobileOpen(false)}>
                    {link.icon}
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className={`block px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-mcgill-red/10 text-mcgill-red"
                        : "text-text-secondary hover:bg-gray-100 hover:text-primary"
                    }`}
                    onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                )}
                {link.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block pl-8 py-1.5 text-sm text-text-light hover:text-mcgill-red transition-colors"
                    onClick={() => setMobileOpen(false)}>
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
