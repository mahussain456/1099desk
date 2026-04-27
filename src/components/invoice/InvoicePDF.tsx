"use client";

import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

export type InvoiceLine = {
  description: string;
  quantity: number;
  rate: number;
};

export type InvoiceData = {
  invoiceNumber: string;
  from: string;
  to: string;
  dueDate: string;
  notes: string;
  lines: InvoiceLine[];
};

const styles = StyleSheet.create({
  page: { padding: 36, fontSize: 11, color: "#111827" },
  h1: { fontSize: 24, marginBottom: 18 },
  section: { marginBottom: 14 },
  row: { flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid #e5e7eb", paddingVertical: 6 },
  bold: { fontWeight: "bold" },
});

export function InvoicePDF({ data }: { data: InvoiceData }) {
  const total = data.lines.reduce((sum, line) => sum + line.quantity * line.rate, 0);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.h1}>Invoice {data.invoiceNumber}</Text>
        <View style={styles.section}>
          <Text style={styles.bold}>From</Text>
          <Text>{data.from}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.bold}>Bill To</Text>
          <Text>{data.to}</Text>
        </View>
        <View style={styles.section}>
          <Text>Due date: {data.dueDate}</Text>
        </View>
        <View style={styles.section}>
          {data.lines.map((line, index) => (
            <View key={`${line.description}-${index}`} style={styles.row}>
              <Text>{line.description}</Text>
              <Text>
                {line.quantity} x ${line.rate.toFixed(2)} = ${(line.quantity * line.rate).toFixed(2)}
              </Text>
            </View>
          ))}
        </View>
        <Text style={styles.bold}>Total: ${total.toFixed(2)}</Text>
        <Text style={{ marginTop: 20 }}>{data.notes}</Text>
      </Page>
    </Document>
  );
}
