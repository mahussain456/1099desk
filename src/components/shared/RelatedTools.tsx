const tools = [
  ["Self-employment tax calculator", "/self-employment-tax-calculator"],
  ["Quarterly estimated tax calculator", "/quarterly-estimated-tax-calculator"],
  ["Freelance hourly rate calculator", "/freelance-hourly-rate-calculator"],
  ["Invoice generator", "/invoice-generator"],
  ["Project profit margin calculator", "/project-profit-margin-calculator"],
  ["Retainer vs hourly calculator", "/retainer-vs-hourly-calculator"],
  ["1099 vs W2 calculator", "/1099-vs-w2-calculator"],
];

export function RelatedTools({ currentPath }: { currentPath: string }) {
  return (
    <section className="mt-10" aria-labelledby="related-tools">
      <h2 id="related-tools" className="text-3xl font-black text-stone-950">
        Related Tools
      </h2>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {tools
          .filter(([, href]) => href !== currentPath)
          .slice(0, 3)
          .map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="premium-card rounded-lg p-4 font-black text-teal-800 no-underline transition hover:-translate-y-0.5"
            >
              {label}
            </a>
          ))}
      </div>
    </section>
  );
}
