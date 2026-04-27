import {
  FEDERAL_BRACKETS_2026,
  IRS_INFLATION_URL,
  LAST_UPDATED,
  STANDARD_DEDUCTION,
  type FilingStatus,
} from "@/lib/constants/taxRates2026";
import { STATE_TAX_RATES } from "@/lib/constants/stateTaxRates";

export type LegalResultMeta = {
  lastUpdated: string;
  irsSource: string;
  irsUrl: string;
};

export const defaultLegalMeta: LegalResultMeta = {
  lastUpdated: "2026 Tax Year",
  irsSource: "IRS Revenue Procedure 2025-32 and Publication 505",
  irsUrl: IRS_INFLATION_URL,
};

export function calculateFederalTax(income: number, filingStatus: FilingStatus) {
  const taxableIncome = Math.max(0, income - STANDARD_DEDUCTION[filingStatus]);
  return FEDERAL_BRACKETS_2026[filingStatus].reduce((tax, bracket) => {
    if (taxableIncome <= bracket.min) return tax;
    const upper = bracket.max ?? taxableIncome;
    const taxedAmount = Math.max(0, Math.min(taxableIncome, upper) - bracket.min);
    return tax + taxedAmount * bracket.rate;
  }, 0);
}

export function calculateStateTax(income: number, state: string) {
  const rate = STATE_TAX_RATES[state] ?? 0;
  return Math.max(0, income) * rate;
}

export function withLegalMeta<T extends object>(
  result: T,
  meta: Partial<LegalResultMeta> = {},
) {
  return {
    ...result,
    lastUpdated: meta.lastUpdated ?? defaultLegalMeta.lastUpdated,
    irsSource: meta.irsSource ?? defaultLegalMeta.irsSource,
    irsUrl: meta.irsUrl ?? defaultLegalMeta.irsUrl,
    displayLastUpdated: LAST_UPDATED,
  };
}
