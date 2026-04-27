"use client";

// ============================================================
// PRIVACY COMPLIANCE NOTICE
// This component operates entirely client-side.
// No invoice data is transmitted to servers.
// No invoice data is stored externally.
// PDF generation uses @react-pdf/renderer in the browser.
// Invoice numbers stored in localStorage only.
// Uploaded logos are read with FileReader and kept locally.
// See Privacy Policy section 4.2 for details.
// ============================================================

import { pdf } from "@react-pdf/renderer";
import {
  Building2,
  CalendarDays,
  Download,
  FileText,
  LockKeyhole,
  Plus,
  ReceiptText,
  Trash2,
  Upload,
} from "lucide-react";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Disclaimer } from "@/components/legal/Disclaimer";
import { currency } from "@/lib/utils";
import { InvoicePDF, type InvoiceData } from "./InvoicePDF";
import { InvoicePreview } from "./InvoicePreview";

const initialData: InvoiceData = {
  invoiceNumber: "INV-0001",
  issueDate: "2026-04-27",
  dueDate: "2026-05-15",
  paymentTerms: "Net 15",
  from: "Your Business LLC\nhello@example.com\nAustin, TX",
  to: "Client Name\nclient@example.com\nClient Company",
  notes: "Thank you for your business. Payment is appreciated by the due date.",
  logoDataUrl: "",
  lines: [
    { description: "Strategy and planning", quantity: 4, rate: 175 },
    { description: "Design and production", quantity: 10, rate: 150 },
  ],
};

type InvoiceField = "invoiceNumber" | "issueDate" | "dueDate" | "paymentTerms" | "from" | "to" | "notes";

export function InvoiceGenerator() {
  const [data, setData] = useState<InvoiceData>(initialData);
  const [logoName, setLogoName] = useState("");
  const [logoError, setLogoError] = useState("");

  const subtotal = useMemo(
    () => data.lines.reduce((sum, line) => sum + line.quantity * line.rate, 0),
    [data.lines],
  );

  useEffect(() => {
    const savedNumber = localStorage.getItem("1099desk-invoice-number");
    if (savedNumber) setData((current) => ({ ...current, invoiceNumber: savedNumber }));
  }, []);

  function updateField(field: InvoiceField, value: string) {
    setData((current) => ({ ...current, [field]: value }));
  }

  function updateLine(index: number, key: "description" | "quantity" | "rate", value: string | number) {
    setData((current) => ({
      ...current,
      lines: current.lines.map((line, lineIndex) =>
        lineIndex === index ? { ...line, [key]: value } : line,
      ),
    }));
  }

  function addLine() {
    setData((current) => ({
      ...current,
      lines: [...current.lines, { description: "Additional service", quantity: 1, rate: 100 }],
    }));
  }

  function removeLine(index: number) {
    setData((current) => ({
      ...current,
      lines: current.lines.length === 1 ? current.lines : current.lines.filter((_, i) => i !== index),
    }));
  }

  function handleLogoUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setLogoError("");
    if (!file) return;

    const supportedTypes = ["image/png", "image/jpeg"];
    if (!supportedTypes.includes(file.type)) {
      setLogoError("Upload a PNG or JPG logo file.");
      return;
    }

    if (file.size > 1_500_000) {
      setLogoError("Logo file must be 1.5 MB or smaller.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setLogoName(file.name);
      setData((current) => ({ ...current, logoDataUrl: String(reader.result) }));
    };
    reader.readAsDataURL(file);
  }

  async function downloadPdf() {
    localStorage.setItem("1099desk-invoice-number", data.invoiceNumber);
    const blob = await pdf(<InvoicePDF data={data} />).toBlob();
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${data.invoiceNumber || "invoice"}.pdf`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)]" aria-label="Client-side invoice generator">
      <form className="premium-card rounded-xl p-5 lg:p-6">
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="kicker">
              <ReceiptText aria-hidden="true" className="h-4 w-4" />
              Invoice studio
            </p>
            <h2 className="mt-4 text-2xl font-black text-slate-950">Build a professional invoice</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Invoice templates are for convenience only. They do not constitute legally binding
              contracts. Consult an attorney for enforceable payment terms in your jurisdiction.
            </p>
          </div>
          <div className="rounded-lg border border-teal-200 bg-teal-50 p-3 text-xs leading-5 text-teal-950">
            <div className="flex gap-2">
              <LockKeyhole aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
              <span>No invoice details or logo files are sent to a server.</span>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-xl border border-slate-200 bg-white p-4" aria-labelledby="brand-section">
            <div className="flex items-center gap-2">
              <Building2 aria-hidden="true" className="h-5 w-5 text-teal-700" />
              <h3 id="brand-section" className="font-black text-slate-950">Brand and parties</h3>
            </div>

            <div className="mt-4">
              <label htmlFor="logo" className="block text-sm font-bold text-slate-900">
                Logo file
              </label>
              <label
                htmlFor="logo"
                className="mt-2 flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-sm font-bold text-slate-700 transition hover:border-teal-600 hover:bg-teal-50"
              >
                <span className="flex items-center gap-2">
                  <Upload aria-hidden="true" className="h-4 w-4" />
                  {logoName || "Upload PNG or JPG"}
                </span>
                <span className="text-xs text-slate-500">Max 1.5 MB</span>
              </label>
              <input
                id="logo"
                type="file"
                accept="image/png,image/jpeg"
                onChange={handleLogoUpload}
                aria-describedby="logo-help logo-error"
                className="sr-only"
              />
              <p id="logo-help" className="mt-2 text-xs leading-5 text-slate-500">
                The logo is embedded locally in the preview and PDF.
              </p>
              {logoError ? (
                <p id="logo-error" className="mt-2 text-sm font-bold text-red-700" role="alert">
                  {logoError}
                </p>
              ) : (
                <p id="logo-error" className="sr-only">No logo upload error.</p>
              )}
            </div>

            <div className="mt-4 grid gap-4">
              <div>
                <label htmlFor="from" className="block text-sm font-bold text-slate-900">
                  From
                </label>
                <textarea
                  id="from"
                  value={data.from}
                  onChange={(event) => updateField("from", event.target.value)}
                  aria-required="true"
                  className="premium-input mt-2 min-h-28 w-full rounded-lg px-3 py-2 text-sm text-slate-950"
                />
              </div>
              <div>
                <label htmlFor="to" className="block text-sm font-bold text-slate-900">
                  Bill to
                </label>
                <textarea
                  id="to"
                  value={data.to}
                  onChange={(event) => updateField("to", event.target.value)}
                  aria-required="true"
                  className="premium-input mt-2 min-h-28 w-full rounded-lg px-3 py-2 text-sm text-slate-950"
                />
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-4" aria-labelledby="invoice-settings">
            <div className="flex items-center gap-2">
              <CalendarDays aria-hidden="true" className="h-5 w-5 text-teal-700" />
              <h3 id="invoice-settings" className="font-black text-slate-950">Invoice settings</h3>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                ["invoiceNumber", "Invoice number", "text"],
                ["paymentTerms", "Payment terms", "text"],
                ["issueDate", "Issue date", "date"],
                ["dueDate", "Due date", "date"],
              ].map(([id, label, type]) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-sm font-bold text-slate-900">
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    value={String(data[id as InvoiceField])}
                    onChange={(event) => updateField(id as InvoiceField, event.target.value)}
                    aria-required="true"
                    className="premium-input mt-2 w-full rounded-lg px-3 py-2 text-sm text-slate-950"
                  />
                </div>
              ))}
            </div>
            <div className="mt-4">
              <label htmlFor="notes" className="block text-sm font-bold text-slate-900">
                Notes and payment instructions
              </label>
              <textarea
                id="notes"
                value={data.notes}
                onChange={(event) => updateField("notes", event.target.value)}
                aria-required="true"
                className="premium-input mt-2 min-h-32 w-full rounded-lg px-3 py-2 text-sm text-slate-950"
              />
            </div>
            <div className="mt-4 rounded-lg bg-slate-950 p-4 text-white">
              <p className="text-xs font-black uppercase tracking-normal text-teal-200">Current invoice total</p>
              <p className="mt-1 text-3xl font-black">{currency(subtotal)}</p>
              <p className="mt-1 text-xs text-slate-400">{data.lines.length} line item{data.lines.length === 1 ? "" : "s"}</p>
            </div>
          </section>
        </div>

        <fieldset className="mt-5 rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <legend className="text-base font-black text-slate-950">Line items</legend>
            <button
              type="button"
              onClick={addLine}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-teal-700 px-4 py-2 text-sm font-black text-teal-800"
            >
              <Plus aria-hidden="true" className="h-4 w-4" /> Add line
            </button>
          </div>
          <div className="mt-4 grid gap-3">
            {data.lines.map((line, index) => (
              <div key={index} className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 md:grid-cols-[1fr_104px_132px_44px]">
                <div>
                  <label htmlFor={`description-${index}`} className="block text-sm font-bold text-slate-900">
                    Description
                  </label>
                  <input
                    id={`description-${index}`}
                    value={line.description}
                    onChange={(event) => updateLine(index, "description", event.target.value)}
                    aria-required="true"
                    className="premium-input mt-2 w-full rounded-lg px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor={`quantity-${index}`} className="block text-sm font-bold text-slate-900">
                    Qty
                  </label>
                  <input
                    id={`quantity-${index}`}
                    type="number"
                    inputMode="decimal"
                    min="0"
                    value={line.quantity}
                    onChange={(event) => updateLine(index, "quantity", Number(event.target.value))}
                    aria-required="true"
                    className="premium-input mt-2 w-full rounded-lg px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor={`rate-${index}`} className="block text-sm font-bold text-slate-900">
                    Rate
                  </label>
                  <input
                    id={`rate-${index}`}
                    type="number"
                    inputMode="decimal"
                    min="0"
                    value={line.rate}
                    onChange={(event) => updateLine(index, "rate", Number(event.target.value))}
                    aria-required="true"
                    className="premium-input mt-2 w-full rounded-lg px-3 py-2 text-sm"
                  />
                </div>
                <button
                  type="button"
                  aria-label={`Remove line item ${index + 1}`}
                  onClick={() => removeLine(index)}
                  disabled={data.lines.length === 1}
                  className="mt-7 grid h-10 w-10 place-items-center rounded-md border border-slate-300 bg-white text-slate-700 disabled:cursor-not-allowed disabled:opacity-45"
                >
                  <Trash2 aria-hidden="true" className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </fieldset>
      </form>

      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="premium-card rounded-xl p-4">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-normal text-teal-800">Live preview</p>
              <h2 className="mt-1 text-xl font-black text-slate-950">Client-ready invoice</h2>
            </div>
            <FileText aria-hidden="true" className="h-6 w-6 text-slate-500" />
          </div>
          <InvoicePreview data={data} />
          <button
            type="button"
            onClick={downloadPdf}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-slate-950 px-5 py-3 font-black text-white shadow-xl shadow-slate-900/15"
          >
            <Download aria-hidden="true" className="h-5 w-5" /> Download PDF
          </button>
        </div>
        <Disclaimer
          toolName="Invoice generator"
          lastUpdated="2026 Tax Year"
          irsSource="IRS recordkeeping guidance"
          irsUrl="https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"
        />
      </aside>
    </section>
  );
}
