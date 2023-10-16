import { useContext } from 'react';
import { InvoiceInitialAmountContext } from './invoiceInitalAmount.context';

export const useInvoiceInitialAmount = () => useContext(InvoiceInitialAmountContext);
