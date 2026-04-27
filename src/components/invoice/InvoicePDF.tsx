"use client";

import { Document, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

export type InvoiceLine = {
  description: string;
  quantity: number;
  rate: number;
};

export type InvoiceData = {
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  paymentTerms: string;
  from: string;
  to: string;
  notes: string;
  logoDataUrl?: string;
  lines: InvoiceLine[];
};

const styles = StyleSheet.create({
  page: { padding: 38, fontSize: 10.5, color: "#0f172a", backgroundColor: "#ffffff" },
  header: {
    backgroundColor: "#0f172a",
    borderRadius: 12,
    color: "#ffffff",
    padding: 22,
    marginBottom: 24,
  },
  headerRow: { flexDirection: "row", justifyContent: "space-between", gap: 24 },
  logo: { width: 116, maxHeight: 58, objectFit: "contain", backgroundColor: "#ffffff", padding: 7, borderRadius: 6, marginBottom: 18 },
  fallbackLogo: {
    width: 54,
    height: 54,
    borderRadius: 6,
    backgroundColor: "#ffffff",
    color: "#0f172a",
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 18,
    textAlign: "center",
    marginBottom: 18,
  },
  h1: { fontSize: 34, fontWeight: "bold", marginBottom: 5 },
  muted: { color: "#64748b" },
  headerMuted: { color: "#cbd5e1" },
  amountBox: { border: "1px solid rgba(255,255,255,0.16)", borderRadius: 10, padding: 14, minWidth: 150, textAlign: "right" },
  amountLabel: { fontSize: 8, fontWeight: "bold", color: "#99f6e4", textTransform: "uppercase" },
  amount: { fontSize: 26, fontWeight: "bold", marginTop: 4 },
  sectionGrid: { flexDirection: "row", gap: 24, marginBottom: 20 },
  half: { flex: 1 },
  label: { fontSize: 8, fontWeight: "bold", color: "#64748b", textTransform: "uppercase", marginBottom: 7 },
  address: { lineHeight: 1.55 },
  details: {
    flexDirection: "row",
    border: "1px solid #e2e8f0",
    backgroundColor: "#f8fafc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 22,
  },
  detailCell: { flex: 1 },
  detailValue: { fontWeight: "bold", marginTop: 4 },
  table: { border: "1px solid #e2e8f0", borderRadius: 10, overflow: "hidden" },
  tableHeader: { flexDirection: "row", backgroundColor: "#f1f5f9", paddingVertical: 10, paddingHorizontal: 12 },
  th: { fontSize: 8, fontWeight: "bold", color: "#475569", textTransform: "uppercase" },
  row: { flexDirection: "row", borderTop: "1px solid #e2e8f0", paddingVertical: 11, paddingHorizontal: 12 },
  desc: { width: "48%", fontWeight: "bold" },
  qty: { width: "13%", textAlign: "right" },
  rate: { width: "18%", textAlign: "right" },
  lineTotal: { width: "21%", textAlign: "right", fontWeight: "bold" },
  totalsWrap: { flexDirection: "row", justifyContent: "flex-end", marginTop: 20 },
  totals: { width: 210, backgroundColor: "#0f172a", color: "#ffffff", borderRadius: 10, padding: 14 },
  totalRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  totalFinal: { flexDirection: "row", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.16)", paddingTop: 12 },
  notes: { marginTop: 22, border: "1px solid #e2e8f0", backgroundColor: "#f8fafc", borderRadius: 10, padding: 14, lineHeight: 1.55 },
  footer: { marginTop: 24, fontSize: 8.5, color: "#64748b" },
});

function money(value: number) {
  return `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function InvoicePDF({ data }: { data: InvoiceData }) {
  const total = data.lines.reduce((sum, line) => sum + line.quantity * line.rate, 0);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <View>
              {data.logoDataUrl ? (
                <Image src={data.logoDataUrl} style={styles.logo} />
              ) : (
                <Text style={styles.fallbackLogo}>1099</Text>
              )}
              <Text style={styles.h1}>Invoice</Text>
              <Text style={styles.headerMuted}>{data.invoiceNumber}</Text>
            </View>
            <View style={styles.amountBox}>
              <Text style={styles.amountLabel}>Amount due</Text>
              <Text style={styles.amount}>{money(total)}</Text>
              <Text style={styles.headerMuted}>Due {data.dueDate}</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionGrid}>
          <View style={styles.half}>
            <Text style={styles.label}>From</Text>
            <Text style={styles.address}>{data.from}</Text>
          </View>
          <View style={styles.half}>
            <Text style={styles.label}>Bill to</Text>
            <Text style={styles.address}>{data.to}</Text>
          </View>
        </View>

        <View style={styles.details}>
          <View style={styles.detailCell}>
            <Text style={styles.label}>Issue date</Text>
            <Text style={styles.detailValue}>{data.issueDate}</Text>
          </View>
          <View style={styles.detailCell}>
            <Text style={styles.label}>Due date</Text>
            <Text style={styles.detailValue}>{data.dueDate}</Text>
          </View>
          <View style={styles.detailCell}>
            <Text style={styles.label}>Terms</Text>
            <Text style={styles.detailValue}>{data.paymentTerms}</Text>
          </View>
        </View>

        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.th, styles.desc]}>Description</Text>
            <Text style={[styles.th, styles.qty]}>Qty</Text>
            <Text style={[styles.th, styles.rate]}>Rate</Text>
            <Text style={[styles.th, styles.lineTotal]}>Amount</Text>
          </View>
          {data.lines.map((line, index) => (
            <View key={`${line.description}-${index}`} style={styles.row}>
              <Text style={styles.desc}>{line.description}</Text>
              <Text style={styles.qty}>{line.quantity}</Text>
              <Text style={styles.rate}>{money(line.rate)}</Text>
              <Text style={styles.lineTotal}>{money(line.quantity * line.rate)}</Text>
            </View>
          ))}
        </View>

        <View style={styles.totalsWrap}>
          <View style={styles.totals}>
            <View style={styles.totalRow}>
              <Text>Subtotal</Text>
              <Text>{money(total)}</Text>
            </View>
            <View style={styles.totalFinal}>
              <Text>Total due</Text>
              <Text>{money(total)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.notes}>
          <Text style={styles.label}>Notes</Text>
          <Text>{data.notes}</Text>
        </View>
        <Text style={styles.footer}>
          Generated client-side with 1099desk. Invoice templates are for convenience only and are not legal advice.
        </Text>
      </Page>
    </Document>
  );
}
