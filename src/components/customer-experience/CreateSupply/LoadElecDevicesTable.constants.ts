import { GridColDef } from '@mui/x-data-grid';
import { LoadElecDevicesTableInterface } from '@/models/customer-experience';

export const getColumnsConfiguration = (t: (message: string) => string): GridColDef[] => {
  return [
    { field: 'equipmentId', headerName: t('customerExperience.approvedTable.equipmentId'), width: 130 },
    { field: 'typeElectrical', headerName: t('customerExperience.approvedTable.typeElectrical'), width: 130 },
    { field: 'nominalPower', headerName: t('customerExperience.approvedTable.nominalPower'), width: 130 },
    { field: 'amountEquipment', headerName: t('customerExperience.approvedTable.amountEquipment'), width: 130 },
    { field: 'kwhPeriod', headerName: t('customerExperience.approvedTable.kwhPeriod'), width: 130 },
    { field: 'estimatedKwh', headerName: t('customerExperience.approvedTable.estimatedKwh'), width: 130 },
  ];
};

export const loadElecDevicesTableInitialValue: LoadElecDevicesTableInterface = {
  id: '',
  equipmentId: '',
  typeElectrical: '',
  nominalPower: '',
  amountEquipment: '',
  kwhPeriod: '',
  estimatedKwh: '',
};

export const dummyDevices = [
  { id: 1, name: 'Tipo A' },
  { id: 2, name: 'Tipo B' },
  { id: 3, name: 'Tipo C' },
];
