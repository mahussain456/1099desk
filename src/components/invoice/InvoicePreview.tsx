"use client";

import { type InvoiceData } from "./InvoicePDF";
import { currency } from "@/lib/utils";

export function InvoicePreview({ data }: { data: InvoiceData }) {
  const total = data.lines.reduce((sum, line) => sum + line.quantity * line.rate, 0);

  return (
    <section className="rounded-md border border-gray-200 bg-white p-5" aria-labelledby="invoice-preview">
      <h2 id="invoice-preview" className="text-xl font-bold text-gray-950">
        Invoice Preview
      </h2>
      <div className="mt-4 grid gap-3 text-sm text-gray-700">
        <p>
          <strong>Invoice:</strong> {data.invoiceNumber}
        </p>
        <p>
          <strong>From:</strong> {data.from}
        </p>
        <p>
          <strong>Bill to:</strong> {data.to}
        </p>
        <p>
          <strong>Due:</strong> {data.dueDate}
        </p>
        <div className="divide-y divide-gray-200">
          {data.lines.map((line, index) => (
            <div key={`${line.description}-${index}`} className="flex justify-between py-2">
              <span>{line.description}</span>
              <span>{currency(line.quantity * line.rate)}</span>
            </div>
          ))}
        </div>
        <p className="text-lg font-bold text-gray-950">Total: {currency(total)}</p>
      </div>
    </section>
  );
}
