import { SuccessIcon } from '@/assets';
import { CommonsModels } from '@/models';
import { GridColDef } from '@mui/x-data-grid';

export const modalConfigurationInitialValue: CommonsModels.ModalConfiguration = {
  buttonText: '',
  icon: SuccessIcon,
  message: '',
  modalTitle: '',
};

export const getColumnsConfiguration = (t: (message: string) => string): GridColDef[] => {
  return [
    { field: 'status', headerName: t('billing.batchBilling.criticalReading.statusTableLabel'), width: 130 },
    { field: 'downloadDate', headerName: t('billing.batchBilling.criticalReading.downloadDateTableLabel'), width: 130 },
    { field: 'supply', headerName: t('billing.batchBilling.criticalReading.supplyTableLabel'), width: 130 },
    { field: 'cycleCode', headerName: t('billing.batchBilling.criticalReading.cycleCodeTableLabel'), width: 130 },
    { field: 'routeCode', headerName: t('billing.batchBilling.criticalReading.routeCodeTableLabel'), width: 130 },
    { field: 'typeCustomer', headerName: t('billing.batchBilling.criticalReading.typeCustomerTableLabel'), width: 130 },
    { field: 'meterCode', headerName: t('billing.batchBilling.criticalReading.meterCodeTableLabel'), width: 130 },
    { field: 'quantityReadings', headerName: t('billing.batchBilling.criticalReading.quantityReadingsTableLabel'), width: 130 },
  ];
};
