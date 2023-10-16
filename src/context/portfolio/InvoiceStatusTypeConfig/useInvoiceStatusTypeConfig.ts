import { useContext } from 'react';
import { InvoiceStatusTypeConfigContext } from './invoiceStatusTypeConfig.context';

export const useInvoiceStatusTypeConfig = () => useContext(InvoiceStatusTypeConfigContext);
