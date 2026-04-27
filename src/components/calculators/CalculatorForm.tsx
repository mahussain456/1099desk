"use client";

import { useEffect, useMemo, useState } from "react";
import { SlidersHorizontal, TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Disclaimer } from "@/components/legal/Disclaimer";
import { STATES } from "@/lib/constants/stateTaxRates";
import { type FilingStatus } from "@/lib/constants/taxRates2026";
import { currency, percent } from "@/lib/utils";

type NumberField = {
  id: string;
  label: string;
  defaultValue: number;
  help: string;
  kind?: "money" | "percent" | "hours";
};

type SelectField = {
  id: "filingStatus" | "state";
  label: string;
  defaultValue: string;
  help: string;
  options: { label: string; value: string }[];
};

type Field = NumberField | SelectField;

type CalculatorFormProps<T extends Record<string, number | string>> = {
  toolName: string;
  fields: Field[];
  calculate: (values: T) => Record<string, number | string>;
  resultLabels: { key: string; label: string; format?: "currency" | "percent" | "number" }[];
};

const filingOptions = [
  { label: "Single", value: "single" },
  { label: "Married filing jointly", value: "mfj" },
  { label: "Married filing separately", value: "mfs" },
  { label: "Head of household", value: "hoh" },
];

export const commonFields = {
  filingStatus: {
    id: "filingStatus",
    label: "Filing status",
    defaultValue: "single",
    help: "Used for the 2026 federal tax bracket estimate.",
    options: filingOptions,
  } satisfies SelectField,
  state: {
    id: "state",
    label: "State",
    defaultValue: "none",
    help: "Select none if your state has no income tax or you want a federal-only estimate.",
    options: [{ label: "No state estimate", value: "none" }, ...STATES.filter((state) => state !== "none").map((state) => ({ label: state, value: state }))],
  } satisfies SelectField,
};

function isSelectField(field: Field): field is SelectField {
  return "options" in field;
}

function formatValue(value: number | string, format: "currency" | "percent" | "number" = "currency") {
  if (typeof value === "string") return value;
  if (format === "percent") return percent(value);
  if (format === "number") return value.toLocaleString("en-US", { maximumFractionDigits: 1 });
  return currency(value);
}

export function CalculatorForm<T extends Record<string, number | string>>({
  toolName,
  fields,
  calculate,
  resultLabels,
}: CalculatorFormProps<T>) {
  const initialValues = fields.reduce<Record<string, number | string>>((acc, field) => {
    acc[field.id] = field.defaultValue;
    return acc;
  }, {}) as T;
  const [values, setValues] = useState<T>(initialValues);
  const [mounted, setMounted] = useState(false);

  const result = useMemo(() => calculate(values), [calculate, values]);
  const chartData = resultLabels.slice(0, 4).map(({ key, label }) => ({
    name: label.replace("Estimated ", ""),
    value: Number(result[key]) || 0,
  }));

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]" aria-label={`${toolName} inputs and estimated results`}>
      <form className="premium-card rounded-xl p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-normal text-teal-800">Model inputs</p>
            <h2 className="mt-1 text-2xl font-black text-stone-950">Inputs</h2>
          </div>
          <span className="grid h-10 w-10 place-items-center rounded-md bg-stone-950 text-white">
            <SlidersHorizontal aria-hidden="true" className="h-5 w-5" />
          </span>
        </div>
        <div className="mt-5 grid gap-4">
          {fields.map((field) => {
            const helpId = `${field.id}-help`;
            return (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-sm font-black text-stone-900">
                  {field.label}
                </label>
                {isSelectField(field) ? (
                  <select
                    id={field.id}
                    name={field.id}
                    value={String(values[field.id])}
                    aria-required="true"
                    aria-describedby={helpId}
                    onChange={(event) =>
                      setValues((current) => ({ ...current, [field.id]: event.target.value }) as T)
                    }
                    className="premium-input mt-1 w-full rounded-md px-3 py-3 text-stone-950"
                  >
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={field.id}
                    name={field.id}
                    type="number"
                    min="0"
                    step={field.kind === "percent" ? "0.1" : "100"}
                    inputMode="decimal"
                    value={Number(values[field.id])}
                    aria-required="true"
                    aria-describedby={helpId}
                    onChange={(event) =>
                      setValues((current) => ({ ...current, [field.id]: Number(event.target.value) }) as T)
                    }
                    className="premium-input mt-1 w-full rounded-md px-3 py-3 text-stone-950"
                  />
                )}
                <p id={helpId} className="mt-1.5 text-sm leading-5 text-stone-600">
                  {field.help}
                </p>
              </div>
            );
          })}
        </div>
      </form>
      <div className="premium-card overflow-hidden rounded-xl">
        <div className="bg-stone-950 p-5 text-white">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-normal text-teal-200">Planning output</p>
              <h2 className="mt-1 text-2xl font-black">Estimated Results</h2>
            </div>
            <span className="grid h-10 w-10 place-items-center rounded-md bg-white/10 text-teal-100">
              <TrendingUp aria-hidden="true" className="h-5 w-5" />
            </span>
          </div>
        </div>
        <div className="grid gap-3 p-5" aria-live="polite">
          {resultLabels.map(({ key, label, format }) => (
            <div key={key} className="flex items-center justify-between gap-3 rounded-md border border-stone-200 bg-white/70 px-4 py-3">
              <span className="text-sm font-bold text-stone-600">{label}</span>
              <strong className="text-lg font-black text-stone-950">{formatValue(result[key], format)}</strong>
            </div>
          ))}
        </div>
        <div className="mx-5 mb-5 h-64 min-h-64 min-w-0 rounded-lg border border-stone-200 bg-[#fffdf8] p-3" role="img" aria-label={`${toolName} estimated result chart`}>
          {mounted ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tickFormatter={(value) => `$${Number(value) / 1000}k`} />
                <Tooltip formatter={(value) => currency(Number(value))} />
                <Bar dataKey="value" fill="#0f766e" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : null}
        </div>
        <Disclaimer
          toolName={toolName}
          lastUpdated={String(result.lastUpdated)}
          irsSource={String(result.irsSource)}
          irsUrl={String(result.irsUrl)}
        />
      </div>
    </section>
  );
}

export type TaxFormValues = {
  grossIncome: number;
  businessExpenses: number;
  retirementContributions: number;
  filingStatus: FilingStatus;
  state: string;
};
