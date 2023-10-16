import { SearchResultsTableType } from '@/models/customer-experience';

export interface State {
  searchResults: SearchResultsTableType[];
}

export interface Actions {
  getAllUnclaimedDeposits: () => void;
}

export interface ContextType extends State {
  actions?: Actions;
}
