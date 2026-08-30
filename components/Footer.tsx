"use client";

const footerLinks = [
  { id: "timeline", label: "Timeline" },
  { id: "artifacts", label: "Artifacts" },
  { id: "regions", label: "Regions" },
  { id: "art-forms", label: "Art Forms" },
  { id: "sources", label: "Sources" },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-16 md:py-20 border-t border-[#3a3530]/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-6">
            <div className="w-10 h-10 rounded-full border border-[#c4956a]/30 flex items-center justify-center mx-auto mb-4">
              <div className="w-3 h-3 rounded-full bg-[#c4956a]/50" />
            </div>
            <h3
              className="text-lg tracking-[0.15em] uppercase"
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-text-primary)" }}
            >
              Indian Art Through Time
            </h3>
          </div>

          {/* Tagline */}
          <p className="text-sm text-[#8a7d6b] mb-8 italic" style={{ fontFamily: "var(--font-serif)" }}>
            &ldquo;Preserving the past. Understanding the present.&rdquo;
          </p>

          {/* Navigation */}
          <ul className="flex flex-wrap justify-center gap-6 mb-10">
            {footerLinks.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className="text-xs tracking-[0.15em] uppercase text-[#8a7d6b] hover:text-[#c4956a] transition-colors gold-underline"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="section-divider w-full max-w-xs mb-8" />

          {/* Course info */}
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#8a7d6b]/60">
            21LE M301T • Indian Art Form • College Assignment
          </p>
          <p className="text-[10px] tracking-[0.1em] text-[#8a7d6b]/40 mt-2">
            Built as an interactive educational experience
          </p>
        </div>
      </div>
    </footer>
  );
}
