import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "link" | "outline";
  external?: boolean;
}

const Button = ({ href, children, variant = "primary", external = false }: ButtonProps) => {
  const styles = {
    primary:
      "inline-flex items-center px-6 py-3 bg-mcgill-red text-white rounded-lg font-medium hover:bg-red-700 transition-colors",
    link: "inline-flex items-center px-6 py-3 text-white hover:text-accent-dark transition-colors",
    outline:
      "inline-flex items-center px-4 py-2 border border-white/30 text-white/80 rounded-lg text-sm font-medium hover:border-mcgill-red hover:text-mcgill-red transition-colors",
  };

  const content = (
    <>
      {children}
      <svg
        className="w-4 h-4 ml-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles[variant]}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={styles[variant]}>
      {content}
    </Link>
  );
};

export default Button;
