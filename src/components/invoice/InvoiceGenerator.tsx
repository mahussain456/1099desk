"use client";

// ============================================================
// PRIVACY COMPLIANCE NOTICE
// This component operates entirely client-side.
// No invoice data is transmitted to servers.
// No invoice data is stored externally.
// PDF generation uses @react-pdf/renderer in the browser.
// Invoice numbers stored in localStorage only.
// See Privacy Policy section 4.2 for details.
// ============================================================

import { pdf } from "@react-pdf/renderer";
import { Download, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Disclaimer } from "@/components/legal/Disclaimer";
import { InvoicePDF, type InvoiceData } from "./InvoicePDF";
import { InvoicePreview } from "./InvoicePreview";

const initialData: InvoiceData = {
  invoiceNumber: "INV-0001",
  from: "Your Business LLC\nYour email@example.com",
  to: "Client Name\nclient@example.com",
  dueDate: "2026-05-15",
  notes: "Thank you for your business.",
  lines: [{ description: "Professional services", quantity: 10, rate: 150 }],
};

export function InvoiceGenerator() {
  const [data, setData] = useState<InvoiceData>(initialData);

  useEffect(() => {
    const savedNumber = localStorage.getItem("1099desk-invoice-number");
    if (savedNumber) setData((current) => ({ ...current, invoiceNumber: savedNumber }));
  }, []);

  function updateLine(index: number, key: "description" | "quantity" | "rate", value: string | number) {
    setData((current) => ({
      ...current,
      lines: current.lines.map((line, lineIndex) =>
        lineIndex === index ? { ...line, [key]: value } : line,
      ),
    }));
  }

  async function downloadPdf() {
    localStorage.setItem("1099desk-invoice-number", data.invoiceNumber);
    const blob = await pdf(<InvoicePDF data={data} />).toBlob();
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${data.invoiceNumber}.pdf`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="grid gap-6 lg:grid-cols-[1fr_1fr]" aria-label="Client-side invoice generator">
      <form className="rounded-md border border-gray-200 bg-white p-5">
        <h2 className="text-xl font-bold text-gray-950">Invoice Details</h2>
        <p className="mt-2 text-sm leading-6 text-gray-700">
          Invoice templates are for convenience only. They do not constitute legally binding
          contracts. Consult an attorney for enforceable payment terms in your jurisdiction.
        </p>
        {[
          ["invoiceNumber", "Invoice number"],
          ["from", "From"],
          ["to", "Bill to"],
          ["dueDate", "Due date"],
          ["notes", "Notes"],
        ].map(([id, label]) => (
          <div key={id} className="mt-4">
            <label htmlFor={id} className="block text-sm font-semibold text-gray-900">
              {label}
            </label>
            {id === "from" || id === "to" || id === "notes" ? (
              <textarea
                id={id}
                value={String(data[id as keyof InvoiceData])}
                onChange={(event) => setData((current) => ({ ...current, [id]: event.target.value }))}
                aria-required="true"
                className="mt-1 min-h-20 w-full rounded-md border border-gray-400 px-3 py-2"
              />
            ) : (
              <input
                id={id}
                type={id === "dueDate" ? "date" : "text"}
                value={String(data[id as keyof InvoiceData])}
                onChange={(event) => setData((current) => ({ ...current, [id]: event.target.value }))}
                aria-required="true"
                className="mt-1 w-full rounded-md border border-gray-400 px-3 py-2"
              />
            )}
          </div>
        ))}
        <fieldset className="mt-5">
          <legend className="text-sm font-bold text-gray-950">Line items</legend>
          {data.lines.map((line, index) => (
            <div key={index} className="mt-3 grid gap-3 rounded-md border border-gray-200 p-3 md:grid-cols-[1fr_100px_120px_44px]">
              <div>
                <label htmlFor={`description-${index}`} className="block text-sm font-semibold">
                  Description
                </label>
                <input id={`description-${index}`} value={line.description} onChange={(event) => updateLine(index, "description", event.target.value)} className="mt-1 w-full rounded-md border border-gray-400 px-3 py-2" />
              </div>
              <div>
                <label htmlFor={`quantity-${index}`} className="block text-sm font-semibold">
                  Qty
                </label>
                <input id={`quantity-${index}`} type="number" inputMode="decimal" min="0" value={line.quantity} onChange={(event) => updateLine(index, "quantity", Number(event.target.value))} className="mt-1 w-full rounded-md border border-gray-400 px-3 py-2" />
              </div>
              <div>
                <label htmlFor={`rate-${index}`} className="block text-sm font-semibold">
                  Rate
                </label>
                <input id={`rate-${index}`} type="number" inputMode="decimal" min="0" value={line.rate} onChange={(event) => updateLine(index, "rate", Number(event.target.value))} className="mt-1 w-full rounded-md border border-gray-400 px-3 py-2" />
              </div>
              <button type="button" aria-label="Remove line item" onClick={() => setData((current) => ({ ...current, lines: current.lines.filter((_, i) => i !== index) }))} className="mt-6 rounded-md border border-gray-400 p-2">
                <Trash2 aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          ))}
          <button type="button" onClick={() => setData((current) => ({ ...current, lines: [...current.lines, { description: "Additional service", quantity: 1, rate: 100 }] }))} className="mt-3 inline-flex items-center gap-2 rounded-md border border-teal-700 px-4 py-2 font-semibold text-teal-800">
            <Plus aria-hidden="true" className="h-4 w-4" /> Add line
          </button>
        </fieldset>
      </form>
      <div>
        <InvoicePreview data={data} />
        <button type="button" onClick={downloadPdf} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-teal-700 px-5 py-3 font-semibold text-white">
          <Download aria-hidden="true" className="h-5 w-5" /> Download PDF
        </button>
        <Disclaimer
          toolName="Invoice generator"
          lastUpdated="2026 Tax Year"
          irsSource="IRS recordkeeping guidance"
          irsUrl="https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"
        />
      </div>
    </section>
  );
}
