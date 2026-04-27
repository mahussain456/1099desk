"use client";

import { CalculatorForm, commonFields } from "./CalculatorForm";
import { calculateW2vs1099 } from "@/lib/calculations/w2vs1099";
import { type FilingStatus } from "@/lib/constants/taxRates2026";

type Values = Record<string, number | string> & {
  w2Salary: number;
  contractorRevenue: number;
  businessExpenses: number;
  benefitsValue: number;
  filingStatus: FilingStatus;
  state: string;
};

export function W2vs1099Calculator() {
  return (
    <CalculatorForm<Values>
      toolName="1099 vs W2 calculator"
      fields={[
        { id: "w2Salary", label: "W2 salary", defaultValue: 110000, help: "Annual employee salary.", kind: "money" },
        { id: "contractorRevenue", label: "1099 contractor revenue", defaultValue: 145000, help: "Annual freelance or contractor revenue.", kind: "money" },
        { id: "businessExpenses", label: "Contractor business expenses", defaultValue: 22000, help: "Estimated deductible contractor expenses.", kind: "money" },
        { id: "benefitsValue", label: "W2 benefits value", defaultValue: 18000, help: "Estimated health insurance, match, paid leave, and other benefits.", kind: "money" },
        commonFields.filingStatus,
        commonFields.state,
      ]}
      calculate={calculateW2vs1099}
      resultLabels={[
        { key: "contractorNet", label: "Estimated 1099 net value" },
        { key: "w2Net", label: "Estimated W2 net value" },
        { key: "difference", label: "Estimated difference" },
        { key: "contractorTax", label: "Estimated contractor tax" },
        { key: "benefitsValue", label: "Estimated W2 benefits value" },
      ]}
    />
  );
}
