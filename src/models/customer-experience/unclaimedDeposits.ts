export interface SearchResultsTableType {
  supplyNumber: string;
  name: string;
  id: number;
  cycle: string;
  route: string;
  amountInterest: number;
  totalBail: number;
  registrationDate: string;
  integrationDate: string;
}

export interface InfoBalanceUnclaimed {
  quantitySupplies: string;
  bailBalance: string;
}
