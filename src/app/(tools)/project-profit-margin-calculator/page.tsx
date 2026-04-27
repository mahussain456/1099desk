import type { Metadata } from "next";
import { ProfitMarginCalculator } from "@/components/calculators/ProfitMarginCalculator";
import { ToolPageLayout } from "@/components/shared/ToolPageLayout";
import { toolContent } from "@/lib/content/toolContent";

const content = toolContent.profit;

export const metadata: Metadata = {
  title: "Project profit margin calculator - Free Calculator | 1099desk",
  description: content.description,
  openGraph: { title: content.title, description: content.description, type: "website", url: content.path },
  alternates: { canonical: "https://1099desk.com/project-profit-margin-calculator" },
};

export default function Page() {
  return (
    <ToolPageLayout {...content}>
      <ProfitMarginCalculator />
    </ToolPageLayout>
  );
}
