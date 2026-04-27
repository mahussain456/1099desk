export type FilingStatus = "single" | "mfj" | "mfs" | "hoh";

export type TaxBracket = {
  min: number;
  max: number | null;
  rate: number;
};

// Source: IRS Revenue Procedure 2025-32 / IR-2025-103 and IRS Publication 505 (2026).
// https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill
// https://www.irs.gov/pub/irs-prior/p505--2026.pdf
export const TAX_YEAR = 2026;
export const LAST_UPDATED = "January 2026";
export const IRS_INFLATION_URL =
  "https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill";
export const IRS_SE_URL =
  "https://www.irs.gov/forms-pubs/about-schedule-se-form-1040";
export const IRS_ESTIMATED_TAX_URL =
  "https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes";

export const STANDARD_DEDUCTION: Record<FilingStatus, number> = {
  single: 16100,
  mfj: 32200,
  mfs: 16100,
  hoh: 24150,
};

export const FEDERAL_BRACKETS_2026: Record<FilingStatus, TaxBracket[]> = {
  single: [
    { min: 0, max: 12400, rate: 0.1 },
    { min: 12400, max: 50400, rate: 0.12 },
    { min: 50400, max: 105700, rate: 0.22 },
    { min: 105700, max: 201775, rate: 0.24 },
    { min: 201775, max: 256225, rate: 0.32 },
    { min: 256225, max: 640600, rate: 0.35 },
    { min: 640600, max: null, rate: 0.37 },
  ],
  mfj: [
    { min: 0, max: 24800, rate: 0.1 },
    { min: 24800, max: 100800, rate: 0.12 },
    { min: 100800, max: 211400, rate: 0.22 },
    { min: 211400, max: 403550, rate: 0.24 },
    { min: 403550, max: 512450, rate: 0.32 },
    { min: 512450, max: 768700, rate: 0.35 },
    { min: 768700, max: null, rate: 0.37 },
  ],
  mfs: [
    { min: 0, max: 12400, rate: 0.1 },
    { min: 12400, max: 50400, rate: 0.12 },
    { min: 50400, max: 105700, rate: 0.22 },
    { min: 105700, max: 201775, rate: 0.24 },
    { min: 201775, max: 256225, rate: 0.32 },
    { min: 256225, max: 384350, rate: 0.35 },
    { min: 384350, max: null, rate: 0.37 },
  ],
  hoh: [
    { min: 0, max: 17700, rate: 0.1 },
    { min: 17700, max: 67450, rate: 0.12 },
    { min: 67450, max: 105700, rate: 0.22 },
    { min: 105700, max: 201750, rate: 0.24 },
    { min: 201750, max: 256200, rate: 0.32 },
    { min: 256200, max: 640600, rate: 0.35 },
    { min: 640600, max: null, rate: 0.37 },
  ],
};

export const SE_TAX_RATE = 0.153;
export const SE_INCOME_MULTIPLIER = 0.9235;
export const SE_DEDUCTION_RATE = 0.5;
