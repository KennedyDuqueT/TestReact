import { SearchResultsTableType } from '@/models/customer-experience';
import { delay } from '../helpers';

const searchResultsTable: SearchResultsTableType[] = [
  {
    supplyNumber: '0001',
    name: 'John Doe',
    id: 1,
    cycle: '001',
    route: 'Ruta 1',
    amountInterest: 20000000,
    totalBail: 10000000,
    registrationDate: '05/09/23',
    integrationDate: '05/09/23',
  },
  {
    supplyNumber: '0002',
    name: 'Jane Doe',
    id: 2,
    cycle: '002',
    route: 'Ruta 2',
    amountInterest: 20000000,
    totalBail: 10000000,
    registrationDate: '05/09/23',
    integrationDate: '05/09/23',
  },
];

export const getSearchResultsTableData = async (): Promise<SearchResultsTableType[]> => {
  await delay(500);

  return searchResultsTable;
};
