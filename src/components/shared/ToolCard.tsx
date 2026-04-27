import { ArrowRight, Calculator, FileText, Scale, Timer, WalletCards } from "lucide-react";

export function ToolCard({ title, description, href }: { title: string; description: string; href: string }) {
  const Icon = title.includes("Invoice")
    ? FileText
    : title.includes("Retainer")
      ? Timer
      : title.includes("W2")
        ? Scale
        : title.includes("hourly")
          ? WalletCards
          : Calculator;

  return (
    <a
      href={href}
      className="premium-card group relative overflow-hidden rounded-lg p-5 text-stone-950 no-underline transition duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-stone-900/10"
    >
      <span className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#0f766e,#b7791f,#b4533c)]" />
      <span className="flex items-start justify-between gap-4">
        <span className="grid h-11 w-11 place-items-center rounded-md bg-teal-900 text-white shadow-lg shadow-teal-900/15">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </span>
        <ArrowRight aria-hidden="true" className="mt-2 h-5 w-5 text-stone-400 transition group-hover:translate-x-1 group-hover:text-teal-800" />
      </span>
      <h2 className="mt-5 text-lg font-black tracking-normal text-stone-950">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-stone-600">{description}</p>
      <span className="mt-5 inline-flex text-sm font-extrabold text-teal-800">Open tool</span>
    </a>
  );
}
