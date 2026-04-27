export type FAQ = {
  question: string;
  answer: string;
};

export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  return (
    <section className="mt-10" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-3xl font-black text-stone-950">
        Frequently Asked Questions
      </h2>
      <div className="premium-card mt-4 divide-y divide-stone-200 rounded-lg">
        {faqs.map((faq) => (
          <details key={faq.question} className="group p-4">
            <summary className="cursor-pointer text-base font-black text-stone-950">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm leading-6 text-stone-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
