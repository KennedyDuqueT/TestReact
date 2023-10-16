export interface Bail {
  invoiceStatus: string;
  invoiceNumber: number;
  invoiceIssueDate: string;
  invoiceDueDate: string;
  amount: string;
  payments: number;
  pendingBalance: string;
  totalBalance: string;
  overdue: string;
}
