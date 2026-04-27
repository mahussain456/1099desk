import { IRS_ESTIMATED_TAX_URL, type FilingStatus } from "@/lib/constants/taxRates2026";
import { calculateSETax } from "./seTax";
import { withLegalMeta } from "./taxCore";

export function calculateQuarterlyTax(input: {
  grossIncome: number;
  businessExpenses: number;
  filingStatus: FilingStatus;
  state: string;
  retirementContributions: number;
  priorYearTax: number;
}) {
  const annual = calculateSETax(input);
  const safeHarborAnnual = Math.max(annual.totalTax * 0.9, input.priorYearTax);
  return withLegalMeta(
    {
      estimatedAnnualTax: annual.totalTax,
      safeHarborAnnual,
      quarterlyPayment: safeHarborAnnual / 4,
      quarterlyIncomeAfterTax: (annual.netSEIncome - annual.totalTax) / 4,
      seTax: annual.seTax,
      federalTax: annual.federalTax,
      stateTax: annual.stateTax,
    },
    {
      irsSource: "IRS Estimated Taxes for Individuals",
      irsUrl: IRS_ESTIMATED_TAX_URL,
    },
  );
}
