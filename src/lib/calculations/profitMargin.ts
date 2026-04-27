import { withLegalMeta } from "./taxCore";

export function calculateProfitMargin(input: {
  projectRevenue: number;
  laborHours: number;
  hourlyCost: number;
  softwareCosts: number;
  contractorCosts: number;
  taxReservePercent: number;
}) {
  const laborCost = input.laborHours * input.hourlyCost;
  const directCosts = laborCost + input.softwareCosts + input.contractorCosts;
  const taxReserve = input.projectRevenue * (input.taxReservePercent / 100);
  const netProfit = input.projectRevenue - directCosts - taxReserve;
  return withLegalMeta({
    laborCost,
    directCosts,
    taxReserve,
    netProfit,
    margin: input.projectRevenue > 0 ? (netProfit / input.projectRevenue) * 100 : 0,
    breakEvenRate: input.laborHours > 0 ? (directCosts + taxReserve) / input.laborHours : 0,
  });
}
