import {
  IRS_SE_URL,
  SE_DEDUCTION_RATE,
  SE_INCOME_MULTIPLIER,
  SE_TAX_RATE,
  type FilingStatus,
} from "@/lib/constants/taxRates2026";
import { calculateFederalTax, calculateStateTax, withLegalMeta } from "./taxCore";

export function calculateSETax(input: {
  grossIncome: number;
  businessExpenses: number;
  filingStatus: FilingStatus;
  state: string;
  retirementContributions: number;
}) {
  // Source: IRS Schedule SE. Do not modify without CPA review.
  const netSEIncome = Math.max(0, input.grossIncome - input.businessExpenses);
  const seTaxableIncome = netSEIncome * SE_INCOME_MULTIPLIER;
  const seTax = seTaxableIncome * SE_TAX_RATE;
  const seTaxDeduction = seTax * SE_DEDUCTION_RATE;
  const agi = Math.max(0, netSEIncome - seTaxDeduction - input.retirementContributions);
  const federalTax = calculateFederalTax(agi, input.filingStatus);
  const stateTax = calculateStateTax(agi, input.state);
  const totalTax = seTax + federalTax + stateTax;

  return withLegalMeta(
    {
      netSEIncome,
      seTaxableIncome,
      seTax,
      seTaxDeduction,
      agi,
      federalTax,
      stateTax,
      totalTax,
      effectiveRate: netSEIncome > 0 ? (totalTax / netSEIncome) * 100 : 0,
      quarterlyPayment: totalTax / 4,
      takeHome: netSEIncome - totalTax,
    },
    {
      irsSource: "IRS Schedule SE, Publication 15-T",
      irsUrl: IRS_SE_URL,
    },
  );
}
