import type { Metadata } from "next";
import { QuarterlyTaxCalculator } from "@/components/calculators/QuarterlyTaxCalculator";
import { ToolPageLayout } from "@/components/shared/ToolPageLayout";
import { toolContent } from "@/lib/content/toolContent";

const content = toolContent.quarterly;

export const metadata: Metadata = {
  title: "Quarterly estimated tax calculator - Free Calculator | 1099desk",
  description: content.description,
  openGraph: { title: content.title, description: content.description, type: "website", url: content.path },
  alternates: { canonical: "https://1099desk.com/quarterly-estimated-tax-calculator" },
};

export default function Page() {
  return (
    <ToolPageLayout {...content}>
      <QuarterlyTaxCalculator />
    </ToolPageLayout>
  );
}
