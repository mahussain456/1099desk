"use client";

import { CalculatorForm } from "./CalculatorForm";
import { calculateRetainerVsHourly } from "@/lib/calculations/retainerVsHourly";

type Values = Record<string, number | string> & {
  retainerAmount: number;
  retainerHours: number;
  hourlyRate: number;
  expectedExtraHours: number;
  adminHoursSaved: number;
};

export function RetainerVsHourlyCalculator() {
  return (
    <CalculatorForm<Values>
      toolName="Retainer vs hourly calculator"
      fields={[
        { id: "retainerAmount", label: "Monthly retainer amount", defaultValue: 6000, help: "Flat monthly fee you may charge.", kind: "money" },
        { id: "retainerHours", label: "Included monthly hours", defaultValue: 40, help: "Hours expected inside the retainer.", kind: "hours" },
        { id: "hourlyRate", label: "Hourly rate", defaultValue: 175, help: "Comparable hourly billing rate.", kind: "money" },
        { id: "expectedExtraHours", label: "Expected extra hours", defaultValue: 5, help: "Additional hours billed outside the retainer.", kind: "hours" },
        { id: "adminHoursSaved", label: "Admin hours saved", defaultValue: 3, help: "Estimated time saved from recurring billing and planning.", kind: "hours" },
      ]}
      calculate={calculateRetainerVsHourly}
      resultLabels={[
        { key: "retainerRevenue", label: "Estimated retainer revenue" },
        { key: "hourlyRevenue", label: "Estimated hourly revenue" },
        { key: "retainerAdvantage", label: "Estimated retainer advantage" },
        { key: "adminValue", label: "Estimated admin time value" },
        { key: "effectiveRetainerRate", label: "Estimated effective retainer rate" },
      ]}
    />
  );
}
