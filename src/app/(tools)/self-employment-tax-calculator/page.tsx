import type { Metadata } from "next";
import { SETaxCalculator } from "@/components/calculators/SETaxCalculator";
import { ToolPageLayout } from "@/components/shared/ToolPageLayout";
import { toolContent } from "@/lib/content/toolContent";

const content = toolContent.seTax;

export const metadata: Metadata = {
  title: "Self-employment tax calculator - Free Calculator | 1099desk",
  description: content.description,
  openGraph: { title: content.title, description: content.description, type: "website", url: content.path },
  alternates: { canonical: "https://1099desk.com/self-employment-tax-calculator" },
};

export default function Page() {
  return (
    <ToolPageLayout {...content}>
      <SETaxCalculator />
    </ToolPageLayout>
  );
}
