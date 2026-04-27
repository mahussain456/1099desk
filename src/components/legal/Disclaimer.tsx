import { AlertTriangle } from "lucide-react";

type DisclaimerProps = {
  toolName: string;
  lastUpdated: string;
  irsSource: string;
  irsUrl: string;
};

export function Disclaimer({ toolName, lastUpdated, irsSource, irsUrl }: DisclaimerProps) {
  return (
    <section
      aria-label={`${toolName} estimate disclaimer`}
      className="m-5 rounded-lg border-2 border-[#D97706] bg-[#FEF3C7] p-4 text-[#78350F] shadow-sm"
    >
      <div className="flex items-start gap-3">
        <AlertTriangle aria-hidden="true" className="mt-1 h-5 w-5 shrink-0" />
        <div>
          <h2 className="text-base font-black">ESTIMATED RESULTS - NOT PROFESSIONAL ADVICE</h2>
          <p className="mt-2 text-sm leading-6">
            ESTIMATED results for informational purposes only. Not tax, legal, or financial advice.
            Consult a qualified CPA for your specific situation. Based on {lastUpdated} IRS
            guidelines. Source:{" "}
            <a className="font-semibold underline" href={irsUrl} target="_blank" rel="noreferrer">
              {irsSource}
            </a>
            .
          </p>
          <p className="mt-2 text-sm leading-6">
            Calculations are estimates based on {lastUpdated} IRS data. Always consult a qualified
            CPA before making tax decisions. Results may differ based on your specific circumstances.
          </p>
        </div>
      </div>
    </section>
  );
}
