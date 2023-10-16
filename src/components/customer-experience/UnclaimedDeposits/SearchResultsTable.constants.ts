import { GridColDef } from '@mui/x-data-grid';
import { SearchResultsTableType } from '@/models/customer-experience';

export const getColumnsConfiguration = (t: (message: string) => string): GridColDef[] => {
  return [
    { field: 'supplyNumber', headerName: t('customerExperience.unclaimedDeposits.supplyNumber'), width: 130 },
    { field: 'name', headerName: t('customerExperience.unclaimedDeposits.name'), width: 130 },
    { field: 'id', headerName: t('customerExperience.unclaimedDeposits.id'), width: 130 },
    { field: 'cycle', headerName: t('customerExperience.unclaimedDeposits.cycle'), width: 130 },
    { field: 'route', headerName: t('customerExperience.unclaimedDeposits.route'), width: 130 },
    { field: 'amountInterest', headerName: t('customerExperience.unclaimedDeposits.amountInterest'), width: 130 },
    { field: 'totalBail', headerName: t('customerExperience.unclaimedDeposits.totalBail'), width: 130 },
    { field: 'registrationDate', headerName: t('customerExperience.unclaimedDeposits.registrationDate'), width: 130 },
    { field: 'integrationDate', headerName: t('customerExperience.unclaimedDeposits.integrationDate'), width: 130 },
  ];
};

export const searchResultsTableInitialValue: SearchResultsTableType = {
  supplyNumber: '0001',
  name: '',
  id: 1,
  cycle: '001',
  route: 'Ruta 1',
  amountInterest: 20000000,
  totalBail: 10000000,
  registrationDate: '',
  integrationDate: '',
};

export const dummyDevices = [
  { id: 1, name: 'Tipo A' },
  { id: 2, name: 'Tipo B' },
  { id: 3, name: 'Tipo C' },
];
