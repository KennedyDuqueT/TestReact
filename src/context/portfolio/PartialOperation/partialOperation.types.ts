import { Company } from '@/models/commons';
import { Invoice, OrderType, Reason, SupplyForOperation, PartialOperationFormValues } from '@/models/portfolio';

export interface State {
  isLoading: boolean;
  invoiceList: Invoice[];
  companies: Company[];
  orderTypes: OrderType[];
  reasons: Reason[];
  selectedSupply: SupplyForOperation;
  selectedInvoices: number[];
}

export interface Actions {
  getInvoicesBySupply: () => void;
  searchSupply: (supplyNumber: string) => Promise<boolean>;
  getAllNeededCatalogs: () => void;
  createPartialOperation: (operation: PartialOperationFormValues) => void;
  selectInvoices: (invoiceIds: number[]) => void;
}

export interface ContextType extends State {
  actions?: Actions;
}
