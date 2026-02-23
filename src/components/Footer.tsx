import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-warm-gray text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Lab Info */}
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex w-fit justify-center items-center">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                  <img
                    src="/logos/evplab-logo.png"
                    alt="EVP Lab Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xl text-black">EVP Lab</span>
              </div>
              <div className="w-30 rounded-lg flex items-center justify-center">
                <img
                  src="/logos/McGill_University-Logo.svg"
                  alt="EVP Lab Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>{" "}
            <p className="text-black font-bold text-sm leading-relaxed">
              Obtaining a better understanding of the brain mechanisms involved
              in chronic pain.
            </p>
            <p className="text-black text-sm mt-4">
              Faculty of Dental Medicine and Oral Health Sciences
              <br />
              McGill University
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/team", label: "Team" },
                { href: "/research", label: "Research" },
                { href: "/publications", label: "Publications" },
                { href: "/news", label: "News" },
                { href: "/get-involved", label: "Get Involved" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-black hover:text-accent-light text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              {[
                {
                  href: "https://pubmed.ncbi.nlm.nih.gov/?term=vachon-presseau",
                  label: "PubMed",
                },
                {
                  href: "https://www.mcgill.ca/dentistry/",
                  label: "Faculty of Dental Medicine",
                },
                {
                  href: "https://www.mcgill.ca/painresearch/",
                  label: "Alan Edwards Centre for Research on Pain",
                },
                { href: "https://github.com/EVPlab", label: "GitHub" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-accent-light text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-black">
              <p>
                <span className="block text-text-secondary font-medium">
                  Address
                </span>
                845 Sherbrooke Street West
                <br />
                Montréal, QC H3A 0G4
              </p>
              <p>
                <span className="block text-text-secondary font-medium">
                  Email
                </span>
                <a
                  href="mailto:etienne.vachon-presseau@mcgill.ca"
                  className="hover:text-accent-light transition-colors">
                  etienne.vachon-presseau@mcgill.ca
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Partnerships & Funding */}
        <div className="border-t border-gray-300 mt-12 pt-8">
          <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider text-center mb-6">
            Partnerships & Funding
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {[
              { src: "/logos/part-CIHRIRSC.avif", alt: "CIHR / IRSC" },
              { src: "/logos/part-quebec.avif", alt: "Government of Quebec" },
              {
                src: "/logos/McGill_University-Logo.svg",
                alt: "McGill University",
              },
              { src: "/logos/part-LAEF.avif", alt: "LAEF" },
            ].map((logo) => (
              <img
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                className="h-12 sm:h-20 w-auto object-contain"
              />
            ))}
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-sm text-text-secondary">
          <p>
            &copy; {new Date().getFullYear()} EVP Lab — McGill University. All
            rights reserved.
          </p>
          <p className="mt-2">
            Website developed by{" "}
            <a
              href="https://www.linkedin.com/in/wkmxyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mcgill-red hover:underline">
              Keming Wang
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
