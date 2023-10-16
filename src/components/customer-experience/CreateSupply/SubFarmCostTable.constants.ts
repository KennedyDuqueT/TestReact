import { GridColDef } from '@mui/x-data-grid';
import { SubFarmCostTableInterface } from '@/models/customer-experience';

export const getColumnsConfiguration = (t: (message: string) => string): GridColDef[] => {
  return [
    { field: 'costId', headerName: t('customerExperience.approvedTable.equipmentId'), width: 130 },
    { field: 'costBail', headerName: t('customerExperience.approvedTable.costBail'), width: 180 },
    { field: 'interconnectionCost', headerName: t('customerExperience.approvedTable.interconnectionCost'), width: 240 },
    { field: 'costSubfarmInter', headerName: t('customerExperience.approvedTable.costSubfarmInter'), width: 240 },
  ];
};

export const SubFarmCostTableInitialValue: SubFarmCostTableInterface = {
  id: '',
  costId: '',
  costBail: '',
  interconnectionCost: '',
  costSubfarmInter: '',
};
