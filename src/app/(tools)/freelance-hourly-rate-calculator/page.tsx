import type { Metadata } from "next";
import { HourlyRateCalculator } from "@/components/calculators/HourlyRateCalculator";
import { ToolPageLayout } from "@/components/shared/ToolPageLayout";
import { toolContent } from "@/lib/content/toolContent";

const content = toolContent.hourly;

export const metadata: Metadata = {
  title: "Freelance hourly rate calculator - Free Calculator | 1099desk",
  description: content.description,
  openGraph: { title: content.title, description: content.description, type: "website", url: content.path },
  alternates: { canonical: "https://1099desk.com/freelance-hourly-rate-calculator" },
};

export default function Page() {
  return (
    <ToolPageLayout {...content}>
      <HourlyRateCalculator />
    </ToolPageLayout>
  );
}
