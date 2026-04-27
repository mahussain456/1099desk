import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { ToolPageLayout } from "@/components/shared/ToolPageLayout";
import { toolContent } from "@/lib/content/toolContent";

const content = toolContent.invoice;
const InvoiceGenerator = dynamic(
  () => import("@/components/invoice/InvoiceGenerator").then((mod) => mod.InvoiceGenerator),
  { ssr: false },
);

export const metadata: Metadata = {
  title: "Invoice generator - Free Calculator | 1099desk",
  description: content.description,
  openGraph: { title: content.title, description: content.description, type: "website", url: content.path },
  alternates: { canonical: "https://1099desk.com/invoice-generator" },
};

export default function Page() {
  return (
    <ToolPageLayout {...content} hasAffiliateLinks={false}>
      <InvoiceGenerator />
    </ToolPageLayout>
  );
}
