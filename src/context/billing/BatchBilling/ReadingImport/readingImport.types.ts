import { ReadingImportFilterInterface, ReadingImportInterface } from '@/models/billing';
import { SimpleCatalog } from '@/models/commons';

export interface State {
  typesCustomer: SimpleCatalog[];
  routes: SimpleCatalog[];
  months: SimpleCatalog[];
  serviceTypes: SimpleCatalog[];
  readingImportResultOfSearch: ReadingImportInterface;
}

export interface Actions {
  saveReadingImportAutomatic: (newReadingImportAutomaticToSave: ReadingImportInterface) => Promise<boolean>;
  saveReadingImportManual: (newReadingImportManualToSave: ReadingImportInterface) => Promise<boolean>;
  searchReadingImport: (readingImportToSearch: ReadingImportFilterInterface) => Promise<boolean>;
  loadInitialInfo: () => Promise<void>;
}

export interface ContextType extends State {
  actions?: Actions;
}
