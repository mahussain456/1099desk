import { withLegalMeta } from "./taxCore";

export function calculateRetainerVsHourly(input: {
  retainerAmount: number;
  retainerHours: number;
  hourlyRate: number;
  expectedExtraHours: number;
  adminHoursSaved: number;
}) {
  const effectiveRetainerRate = input.retainerHours > 0 ? input.retainerAmount / input.retainerHours : 0;
  const hourlyRevenue = (input.retainerHours + input.expectedExtraHours) * input.hourlyRate;
  const retainerRevenue = input.retainerAmount + input.expectedExtraHours * input.hourlyRate;
  const adminValue = input.adminHoursSaved * input.hourlyRate;
  return withLegalMeta({
    effectiveRetainerRate,
    hourlyRevenue,
    retainerRevenue,
    adminValue,
    retainerAdvantage: retainerRevenue + adminValue - hourlyRevenue,
  });
}
