import { withLegalMeta } from "./taxCore";

export function calculateHourlyRate(input: {
  desiredAnnualIncome: number;
  annualExpenses: number;
  billableHoursPerWeek: number;
  weeksOff: number;
  taxReservePercent: number;
}) {
  const billableWeeks = Math.max(1, 52 - input.weeksOff);
  const annualBillableHours = Math.max(1, input.billableHoursPerWeek * billableWeeks);
  const taxGrossUp = 1 + input.taxReservePercent / 100;
  const requiredRevenue = (input.desiredAnnualIncome + input.annualExpenses) * taxGrossUp;
  return withLegalMeta({
    annualBillableHours,
    requiredRevenue,
    hourlyRate: requiredRevenue / annualBillableHours,
    monthlyRevenueTarget: requiredRevenue / 12,
    weeklyRevenueTarget: requiredRevenue / billableWeeks,
  });
}
