import type { Metadata } from "next";
import { RetainerVsHourlyCalculator } from "@/components/calculators/RetainerVsHourlyCalculator";
import { ToolPageLayout } from "@/components/shared/ToolPageLayout";
import { toolContent } from "@/lib/content/toolContent";

const content = toolContent.retainer;

export const metadata: Metadata = {
  title: "Retainer vs hourly calculator - Free Calculator | 1099desk",
  description: content.description,
  openGraph: { title: content.title, description: content.description, type: "website", url: content.path },
  alternates: { canonical: "https://1099desk.com/retainer-vs-hourly-calculator" },
};

export default function Page() {
  return (
    <ToolPageLayout {...content}>
      <RetainerVsHourlyCalculator />
    </ToolPageLayout>
  );
}
