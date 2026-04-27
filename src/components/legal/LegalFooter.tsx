const links = [
  ["Privacy", "/privacy"],
  ["Terms", "/terms"],
  ["Cookies", "/cookies"],
  ["Affiliate Disclosure", "/affiliate-disclosure"],
  ["About", "/about"],
];

export function LegalFooter() {
  return (
    <footer className="mt-16 border-t border-stone-200 bg-stone-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-xl font-black">1099desk</p>
        <nav aria-label="Legal links" className="flex flex-wrap gap-4 text-sm">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="mt-4 font-bold text-teal-100">
              {label}
            </a>
          ))}
        </nav>
        <p className="mt-5 max-w-3xl text-sm leading-6 text-stone-300">
          1099desk provides estimated calculator results for informational purposes only. Not a CPA.
          Not financial advice. Not tax, legal, or accounting advice. Consult a qualified
          professional for your specific situation.
        </p>
      </div>
    </footer>
  );
}
