"use client";

import { CalculatorForm, commonFields, type TaxFormValues } from "./CalculatorForm";
import { calculateSETax } from "@/lib/calculations/seTax";

const fields = [
  { id: "grossIncome", label: "Gross freelance income", defaultValue: 95000, help: "Total estimated 1099 or self-employed income.", kind: "money" as const },
  { id: "businessExpenses", label: "Business expenses", defaultValue: 18000, help: "Ordinary and necessary business expenses you may deduct.", kind: "money" as const },
  { id: "retirementContributions", label: "Retirement contributions", defaultValue: 6000, help: "Estimated deductible solo 401(k), SEP IRA, or IRA contributions.", kind: "money" as const },
  commonFields.filingStatus,
  commonFields.state,
];

export function SETaxCalculator() {
  return (
    <CalculatorForm<TaxFormValues>
      toolName="Self-employment tax calculator"
      fields={fields}
      calculate={calculateSETax}
      resultLabels={[
        { key: "seTax", label: "Estimated self-employment tax" },
        { key: "federalTax", label: "Estimated federal income tax" },
        { key: "stateTax", label: "Estimated state income tax" },
        { key: "totalTax", label: "Estimated total tax" },
        { key: "quarterlyPayment", label: "Estimated quarterly payment" },
        { key: "effectiveRate", label: "Estimated effective rate", format: "percent" },
        { key: "takeHome", label: "Estimated take-home income" },
      ]}
    />
  );
}
