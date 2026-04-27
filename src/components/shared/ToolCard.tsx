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
      className="premium-card group relative min-h-64 overflow-hidden rounded-xl p-5 text-slate-950 no-underline transition duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/12"
    >
      <span className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#0f766e,#2563eb,#475569)]" />
      <span className="surface-grid pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-45" />
      <span className="flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-lg bg-slate-950 text-white shadow-xl shadow-slate-900/15">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </span>
        <span className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white/72">
          <ArrowRight aria-hidden="true" className="h-4 w-4 text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-teal-800" />
        </span>
      </span>
      <h2 className="relative mt-7 text-xl font-black tracking-normal text-slate-950">{title}</h2>
      <p className="relative mt-3 text-sm leading-6 text-slate-600">{description}</p>
      <span className="relative mt-7 inline-flex rounded-full bg-teal-50 px-3 py-1.5 text-xs font-black uppercase tracking-normal text-teal-900">
        Open tool
      </span>
    </a>
  );
}
