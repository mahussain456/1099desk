import { IRS_ESTIMATED_TAX_URL, IRS_INFLATION_URL, IRS_SE_URL } from "@/lib/constants/taxRates2026";
import type { FAQ } from "@/components/shared/FAQSection";

export type ToolContent = {
  title: string;
  path: string;
  description: string;
  sourceLabel: string;
  sourceUrl: string;
  intro: string;
  howToUse: string[];
  howItWorksTitle: string;
  howItWorks: string[];
  faqs: FAQ[];
};

const commonFaqs: FAQ[] = [
  {
    question: "Are these calculator results guaranteed?",
    answer:
      "No. The estimate may help with planning, but it is not a guarantee and is not tax, legal, accounting, or financial advice.",
  },
  {
    question: "Should I rely on this instead of a CPA?",
    answer:
      "No. A qualified CPA or tax professional can review your filing status, deductions, state rules, credits, and business records.",
  },
  {
    question: "Does 1099desk store calculator inputs?",
    answer:
      "No. Calculator inputs run in your browser for the current session and are not stored by 1099desk.",
  },
];

const taxWorks = [
  "This calculator uses a simplified planning model that may help freelancers think through cash flow before filing a tax return. The IRS generally requires self-employed people to account for income tax and self-employment tax when they have net earnings from self-employment. In practice, your estimated tax may be affected by filing status, other household income, retirement contributions, deductions, credits, state rules, and timing. Because the tool cannot see your complete tax file, it uses transparent assumptions and displays the IRS source beside the result.",
  "For federal income tax, the model applies the 2026 standard deduction and marginal brackets published by the IRS. Marginal brackets mean only income inside each band is estimated at that band rate. For self-employment tax, the model follows the broad Schedule SE pattern: net self-employment income is multiplied by 92.35%, then the 15.3% self-employment tax rate is applied. One-half of the estimated self-employment tax is treated as an adjustment when estimating income tax. This is intended to mirror the common planning sequence, but actual return preparation may include additional lines, limits, and worksheets.",
  "The state estimate is intentionally conservative and simplified. It applies an approximate top or flat state rate to adjusted income, rather than reproducing every state-specific deduction, credit, locality, or apportionment rule. Your estimated tax may therefore be higher or lower than what a state return would show. Use the output as a planning conversation starter, not as filing instructions. Before sending payments or making business decisions, review IRS guidance and speak with a qualified CPA who can evaluate your specific records.",
];

const businessWorks = [
  "This calculator is designed for planning, not promises. Freelance pricing and project economics can change quickly when scope, client communication, revisions, non-billable work, software, contractors, and taxes are included. The model turns your inputs into a directional estimate so you can compare scenarios before quoting work or changing your operating plan. It does not decide what you should charge, and it does not guarantee profit, client acceptance, or tax treatment.",
  "The calculation uses simple arithmetic so the assumptions remain visible. Revenue targets, hourly rates, margins, and comparisons are estimated from the numbers you enter. When a tax reserve appears, it is a planning reserve only. Your estimated tax may be different after federal income tax, self-employment tax, state rules, retirement contributions, credits, and deductions are reviewed. The IRS generally requires taxpayers to keep accurate records, and strong bookkeeping will usually matter more than any single calculator output.",
  "Use the result to test sensitivity. Change billable hours, expenses, rates, benefits, and project costs to see where the estimate moves. If a small change creates a large difference, that area may deserve closer review before you quote or commit. For legal terms, payment remedies, employment classification, and enforceable contract language, consult qualified professionals in your jurisdiction.",
];

export const toolContent: Record<string, ToolContent> = {
  seTax: {
    title: "Self-employment tax calculator",
    path: "/self-employment-tax-calculator",
    description: "Estimate 2026 self-employment tax, federal tax, state tax, and quarterly payments for US freelancers.",
    sourceLabel: "IRS Schedule SE",
    sourceUrl: IRS_SE_URL,
    intro:
      "Estimate self-employment tax for freelance income using a transparent 2026 planning model. This tool may help you think through federal income tax, self-employment tax, simplified state tax, quarterly cash flow, and take-home income. It is built for US freelancers who want a clearer planning range before speaking with a CPA. Results are estimates only and may change based on credits, deductions, spouse income, state rules, retirement plans, health insurance, and other facts not captured here.",
    howToUse: [
      "Enter your projected gross freelance income for the 2026 tax year.",
      "Add ordinary business expenses and deductible retirement contributions.",
      "Choose filing status and state so the estimate can apply the selected assumptions.",
      "Review the estimate and the disclaimer immediately below the results before acting.",
    ],
    howItWorksTitle: "How Self-Employment Tax Works",
    howItWorks: taxWorks,
    faqs: commonFaqs,
  },
  quarterly: {
    title: "Quarterly estimated tax calculator",
    path: "/quarterly-estimated-tax-calculator",
    description: "Estimate quarterly 2026 federal, self-employment, and state tax payments for freelancer planning.",
    sourceLabel: "IRS Estimated Taxes",
    sourceUrl: IRS_ESTIMATED_TAX_URL,
    intro:
      "Estimate quarterly tax payments for US freelance income with a model that includes self-employment tax, federal brackets, a simplified state estimate, and a prior-year tax comparison. The IRS generally requires estimated payments when withholding is not enough, but the right amount may depend on your full return. This calculator is a planning aid only and should be reviewed with a CPA before payments are made.",
    howToUse: [
      "Enter projected annual income, expenses, retirement contributions, and prior-year total tax.",
      "Choose filing status and state for the estimate.",
      "Compare the annual estimate with the simplified safe-harbor amount.",
      "Use the quarterly amount as a planning prompt, not final payment advice.",
    ],
    howItWorksTitle: "How Quarterly Estimated Tax Works",
    howItWorks: taxWorks,
    faqs: commonFaqs,
  },
  hourly: {
    title: "Freelance hourly rate calculator",
    path: "/freelance-hourly-rate-calculator",
    description: "Estimate a freelance hourly rate from income goals, expenses, taxes, and billable hours.",
    sourceLabel: "IRS small business recordkeeping guidance",
    sourceUrl: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping",
    intro:
      "Estimate an hourly freelance rate from take-home goals, expenses, billable time, time off, and a tax reserve. The output may help you compare whether a target rate supports your business model. It does not guarantee profit, client acceptance, or tax outcomes. Pricing should also account for market positioning, scope risk, payment terms, and professional guidance.",
    howToUse: [
      "Enter your desired take-home income and annual business expenses.",
      "Estimate realistic weekly billable hours and weeks away from billable work.",
      "Add a tax reserve percentage for planning.",
      "Review the estimated hourly, weekly, monthly, and annual revenue targets.",
    ],
    howItWorksTitle: "How Freelance Hourly Rates Work",
    howItWorks: businessWorks,
    faqs: commonFaqs,
  },
  profit: {
    title: "Project profit margin calculator",
    path: "/project-profit-margin-calculator",
    description: "Estimate project profit margin after labor, software, contractor costs, and tax reserve.",
    sourceLabel: "IRS business expense guidance",
    sourceUrl: "https://www.irs.gov/businesses/small-businesses-self-employed/deducting-business-expenses",
    intro:
      "Estimate project profit margin after labor, software, contractor costs, and a planning tax reserve. Freelancers can use this to pressure-test fixed-fee work before quoting. The estimate may not reflect all overhead, legal obligations, revisions, bad debt, or tax rules, so it should be used as planning context rather than professional advice.",
    howToUse: [
      "Enter project revenue and the hours expected to deliver the work.",
      "Add your internal hourly cost, software, materials, contractors, and tax reserve.",
      "Review margin, direct costs, and break-even hourly rate.",
      "Adjust assumptions before relying on the estimate for a proposal.",
    ],
    howItWorksTitle: "How Project Profit Margin Works",
    howItWorks: businessWorks,
    faqs: commonFaqs,
  },
  retainer: {
    title: "Retainer vs hourly calculator",
    path: "/retainer-vs-hourly-calculator",
    description: "Compare estimated monthly retainer revenue against hourly billing for freelance services.",
    sourceLabel: "IRS business recordkeeping guidance",
    sourceUrl: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping",
    intro:
      "Compare a monthly retainer with hourly billing using expected hours, extra work, and administrative time saved. The estimate may help freelancers reason about recurring revenue and capacity. It does not create legal terms, guarantee client fit, or replace review of a service agreement by an attorney.",
    howToUse: [
      "Enter monthly retainer amount and included hours.",
      "Add comparable hourly rate, expected extra hours, and admin time saved.",
      "Compare estimated retainer revenue with estimated hourly revenue.",
      "Review legal and tax considerations with qualified professionals before changing contracts.",
    ],
    howItWorksTitle: "How Retainers and Hourly Billing Compare",
    howItWorks: businessWorks,
    faqs: commonFaqs,
  },
  w2: {
    title: "1099 vs W2 calculator",
    path: "/1099-vs-w2-calculator",
    description: "Estimate 1099 contractor net value against W2 salary plus benefits for US workers.",
    sourceLabel: "IRS worker classification guidance",
    sourceUrl: "https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-defined",
    intro:
      "Estimate the difference between 1099 contractor revenue and W2 salary plus benefits. The model includes a Schedule SE-style contractor estimate and a simplified W2 payroll tax comparison. Worker classification is fact-specific and legal-sensitive, so this calculator should be treated as planning context only.",
    howToUse: [
      "Enter W2 salary, contractor revenue, contractor expenses, and estimated benefits value.",
      "Choose filing status and state for the tax estimate.",
      "Compare estimated net values and contractor tax impact.",
      "Consult a CPA and employment attorney before relying on classification assumptions.",
    ],
    howItWorksTitle: "How 1099 vs W2 Comparisons Work",
    howItWorks: taxWorks,
    faqs: commonFaqs,
  },
  invoice: {
    title: "Invoice generator",
    path: "/invoice-generator",
    description: "Create a client-side freelancer invoice PDF in your browser without transmitting invoice data.",
    sourceLabel: "IRS recordkeeping guidance",
    sourceUrl: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping",
    intro:
      "Create a simple freelancer invoice PDF entirely in your browser. Invoice data is not transmitted to a server, and PDF generation runs client-side. The template may help with routine billing, but it is not a contract and does not replace legal review for enforceable terms, collections, late fees, or jurisdiction-specific requirements.",
    howToUse: [
      "Enter invoice number, sender, client, due date, notes, and line items.",
      "Preview the invoice in the browser.",
      "Download the PDF generated locally on your device.",
      "Review payment terms with an attorney before using them in client work.",
    ],
    howItWorksTitle: "How Client-Side Invoice Generation Works",
    howItWorks: businessWorks,
    faqs: commonFaqs,
  },
};
