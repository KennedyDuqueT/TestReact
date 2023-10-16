import { LegalReturnFormValues, ProcessedSupply } from '@/models/portfolio';

export interface State {
  fileUploaded: boolean;
  fileName: string;
  processedSupplies: ProcessedSupply[];
}

export interface Actions {
  uploadLegalReturnFile: (formValues: LegalReturnFormValues) => void;
}

export interface ContextType extends State {
  actions?: Actions;
}
