"use client";

import { type InvoiceData } from "./InvoicePDF";
import { currency } from "@/lib/utils";

function MultilineText({ value }: { value: string }) {
  return (
    <>
      {value.split("\n").map((line, index) => (
        <span key={`${line}-${index}`} className="block">
          {line}
        </span>
      ))}
    </>
  );
}

export function InvoicePreview({ data }: { data: InvoiceData }) {
  const total = data.lines.reduce((sum, line) => sum + line.quantity * line.rate, 0);

  return (
    <section
      className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
      aria-labelledby="invoice-preview"
      aria-live="polite"
    >
      <div className="border-b border-slate-200 bg-slate-950 p-6 text-white">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            {data.logoDataUrl ? (
              <img
                src={data.logoDataUrl}
                alt="Uploaded business logo"
                className="mb-5 max-h-16 max-w-44 rounded-md bg-white object-contain p-2"
              />
            ) : (
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-md bg-white text-xl font-black text-slate-950">
                1099
              </div>
            )}
            <h2 id="invoice-preview" className="text-3xl font-black">
              Invoice
            </h2>
            <p className="mt-1 text-sm text-slate-300">{data.invoiceNumber}</p>
          </div>
          <div className="rounded-lg border border-white/12 bg-white/[0.06] p-4 text-right">
            <p className="text-xs font-black uppercase tracking-normal text-teal-200">Amount due</p>
            <p className="mt-1 text-3xl font-black">{currency(total)}</p>
            <p className="mt-1 text-xs text-slate-300">Due {data.dueDate}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-normal text-slate-500">From</p>
            <p className="mt-2 text-sm leading-6 text-slate-800">
              <MultilineText value={data.from} />
            </p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-normal text-slate-500">Bill to</p>
            <p className="mt-2 text-sm leading-6 text-slate-800">
              <MultilineText value={data.to} />
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm">
          <div>
            <p className="text-xs font-bold text-slate-500">Issue date</p>
            <p className="mt-1 font-black text-slate-950">{data.issueDate}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500">Due date</p>
            <p className="mt-1 font-black text-slate-950">{data.dueDate}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500">Terms</p>
            <p className="mt-1 font-black text-slate-950">{data.paymentTerms}</p>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-lg border border-slate-200">
          <div className="grid grid-cols-[1fr_72px_92px_100px] bg-slate-100 px-4 py-3 text-xs font-black uppercase tracking-normal text-slate-600">
            <span>Description</span>
            <span className="text-right">Qty</span>
            <span className="text-right">Rate</span>
            <span className="text-right">Amount</span>
          </div>
          <div className="divide-y divide-slate-200">
            {data.lines.map((line, index) => (
              <div key={`${line.description}-${index}`} className="grid grid-cols-[1fr_72px_92px_100px] px-4 py-4 text-sm text-slate-700">
                <span className="font-bold text-slate-950">{line.description}</span>
                <span className="text-right">{line.quantity}</span>
                <span className="text-right">{currency(line.rate)}</span>
                <span className="text-right font-black text-slate-950">{currency(line.quantity * line.rate)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <div className="w-full max-w-xs rounded-lg bg-slate-950 p-4 text-white">
            <div className="flex justify-between text-sm">
              <span className="text-slate-300">Subtotal</span>
              <span className="font-black">{currency(total)}</span>
            </div>
            <div className="mt-3 border-t border-white/10 pt-3">
              <div className="flex justify-between">
                <span className="font-black">Total due</span>
                <span className="text-2xl font-black">{currency(total)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-black uppercase tracking-normal text-slate-500">Notes</p>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            <MultilineText value={data.notes} />
          </p>
        </div>
      </div>
    </section>
  );
}
