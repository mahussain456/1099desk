"use client";

import { CalculatorForm } from "./CalculatorForm";
import { calculateHourlyRate } from "@/lib/calculations/hourlyRate";

type Values = Record<string, number | string> & {
  desiredAnnualIncome: number;
  annualExpenses: number;
  billableHoursPerWeek: number;
  weeksOff: number;
  taxReservePercent: number;
};

export function HourlyRateCalculator() {
  return (
    <CalculatorForm<Values>
      toolName="Freelance hourly rate calculator"
      fields={[
        { id: "desiredAnnualIncome", label: "Desired annual take-home income", defaultValue: 90000, help: "Your estimated target after business expenses and reserves.", kind: "money" },
        { id: "annualExpenses", label: "Annual business expenses", defaultValue: 18000, help: "Software, equipment, insurance, contractors, and similar costs.", kind: "money" },
        { id: "billableHoursPerWeek", label: "Billable hours per week", defaultValue: 25, help: "Only include hours you can reasonably bill to clients.", kind: "hours" },
        { id: "weeksOff", label: "Weeks off per year", defaultValue: 6, help: "Vacation, holidays, sick time, and non-billable slack.", kind: "hours" },
        { id: "taxReservePercent", label: "Tax reserve percent", defaultValue: 30, help: "A planning reserve, not a guarantee of tax owed.", kind: "percent" },
      ]}
      calculate={calculateHourlyRate}
      resultLabels={[
        { key: "hourlyRate", label: "Estimated hourly rate" },
        { key: "requiredRevenue", label: "Estimated annual revenue target" },
        { key: "monthlyRevenueTarget", label: "Estimated monthly target" },
        { key: "weeklyRevenueTarget", label: "Estimated weekly target" },
        { key: "annualBillableHours", label: "Estimated annual billable hours", format: "number" },
      ]}
    />
  );
}
