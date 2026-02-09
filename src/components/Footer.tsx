import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Lab Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">EVP Lab</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Obtaining a better understanding of the brain mechanisms involved in chronic pain.
            </p>
            <p className="text-gray-400 text-sm mt-4">
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
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
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
                { href: "https://pubmed.ncbi.nlm.nih.gov/?term=vachon-presseau", label: "PubMed" },
                { href: "https://www.mcgill.ca/dentistry/", label: "Faculty of Dental Medicine" },
                { href: "https://www.mcgill.ca/painresearch/", label: "Alan Edwards Centre for Research on Pain" },
                { href: "https://github.com/EVPlab", label: "GitHub" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <p>
                <span className="block text-gray-400">Address</span>
                845 Sherbrooke Street West
                <br />
                Montréal, QC H3A 0G4
              </p>
              <p>
                <span className="block text-gray-400">Email</span>
                <a
                  href="mailto:etienne.vachon-presseau@mcgill.ca"
                  className="hover:text-white transition-colors"
                >
                  etienne.vachon-presseau@mcgill.ca
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} EVP Lab — McGill University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
