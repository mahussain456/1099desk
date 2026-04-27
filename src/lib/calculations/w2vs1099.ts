import { type FilingStatus } from "@/lib/constants/taxRates2026";
import { calculateSETax } from "./seTax";
import { withLegalMeta } from "./taxCore";

export function calculateW2vs1099(input: {
  w2Salary: number;
  contractorRevenue: number;
  businessExpenses: number;
  benefitsValue: number;
  filingStatus: FilingStatus;
  state: string;
}) {
  const contractor = calculateSETax({
    grossIncome: input.contractorRevenue,
    businessExpenses: input.businessExpenses,
    filingStatus: input.filingStatus,
    state: input.state,
    retirementContributions: 0,
  });
  const employeePayrollTax = input.w2Salary * 0.0765;
  const estimatedW2Tax = employeePayrollTax + contractor.federalTax * (input.w2Salary / Math.max(input.contractorRevenue, 1));
  const w2Net = input.w2Salary + input.benefitsValue - estimatedW2Tax;
  const contractorNet = contractor.takeHome;
  return withLegalMeta({
    w2Net,
    contractorNet,
    difference: contractorNet - w2Net,
    contractorTax: contractor.totalTax,
    employeePayrollTax,
    benefitsValue: input.benefitsValue,
  });
}
