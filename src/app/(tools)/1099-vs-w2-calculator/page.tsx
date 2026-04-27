import type { Metadata } from "next";
import { W2vs1099Calculator } from "@/components/calculators/W2vs1099Calculator";
import { ToolPageLayout } from "@/components/shared/ToolPageLayout";
import { toolContent } from "@/lib/content/toolContent";

const content = toolContent.w2;

export const metadata: Metadata = {
  title: "1099 vs W2 calculator - Free Calculator | 1099desk",
  description: content.description,
  openGraph: { title: content.title, description: content.description, type: "website", url: content.path },
  alternates: { canonical: "https://1099desk.com/1099-vs-w2-calculator" },
};

export default function Page() {
  return (
    <ToolPageLayout {...content}>
      <W2vs1099Calculator />
    </ToolPageLayout>
  );
}
