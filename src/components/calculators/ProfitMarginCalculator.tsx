"use client";

import { CalculatorForm } from "./CalculatorForm";
import { calculateProfitMargin } from "@/lib/calculations/profitMargin";

type Values = Record<string, number | string> & {
  projectRevenue: number;
  laborHours: number;
  hourlyCost: number;
  softwareCosts: number;
  contractorCosts: number;
  taxReservePercent: number;
};

export function ProfitMarginCalculator() {
  return (
    <CalculatorForm<Values>
      toolName="Project profit margin calculator"
      fields={[
        { id: "projectRevenue", label: "Project revenue", defaultValue: 12000, help: "Total fee or expected project income.", kind: "money" },
        { id: "laborHours", label: "Labor hours", defaultValue: 80, help: "Estimated hours for delivery, revisions, and project management.", kind: "hours" },
        { id: "hourlyCost", label: "Internal hourly cost", defaultValue: 75, help: "Your internal cost or target owner compensation per hour.", kind: "money" },
        { id: "softwareCosts", label: "Software and materials", defaultValue: 600, help: "Project-specific subscriptions, assets, or supplies.", kind: "money" },
        { id: "contractorCosts", label: "Contractor costs", defaultValue: 1800, help: "Specialist or subcontractor costs for this project.", kind: "money" },
        { id: "taxReservePercent", label: "Tax reserve percent", defaultValue: 25, help: "Planning reserve for taxes on project revenue.", kind: "percent" },
      ]}
      calculate={calculateProfitMargin}
      resultLabels={[
        { key: "netProfit", label: "Estimated net profit" },
        { key: "directCosts", label: "Estimated direct costs" },
        { key: "taxReserve", label: "Estimated tax reserve" },
        { key: "laborCost", label: "Estimated labor cost" },
        { key: "margin", label: "Estimated margin", format: "percent" },
        { key: "breakEvenRate", label: "Estimated break-even hourly rate" },
      ]}
    />
  );
}
