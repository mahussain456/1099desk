"use client";

import { CalculatorForm, commonFields, type TaxFormValues } from "./CalculatorForm";
import { calculateQuarterlyTax } from "@/lib/calculations/quarterlyTax";

type Values = TaxFormValues & { priorYearTax: number };

const fields = [
  { id: "grossIncome", label: "Projected annual freelance income", defaultValue: 120000, help: "Expected gross income for the tax year.", kind: "money" as const },
  { id: "businessExpenses", label: "Projected business expenses", defaultValue: 24000, help: "Expected deductible business expenses.", kind: "money" as const },
  { id: "retirementContributions", label: "Retirement contributions", defaultValue: 8000, help: "Expected deductible retirement contributions.", kind: "money" as const },
  { id: "priorYearTax", label: "Prior year total tax", defaultValue: 22000, help: "Used for a simplified safe-harbor comparison.", kind: "money" as const },
  commonFields.filingStatus,
  commonFields.state,
];

export function QuarterlyTaxCalculator() {
  return (
    <CalculatorForm<Values>
      toolName="Quarterly estimated tax calculator"
      fields={fields}
      calculate={calculateQuarterlyTax}
      resultLabels={[
        { key: "quarterlyPayment", label: "Estimated quarterly payment" },
        { key: "estimatedAnnualTax", label: "Estimated annual tax" },
        { key: "safeHarborAnnual", label: "Estimated safe-harbor annual amount" },
        { key: "seTax", label: "Estimated self-employment tax" },
        { key: "federalTax", label: "Estimated federal income tax" },
        { key: "stateTax", label: "Estimated state income tax" },
      ]}
    />
  );
}
