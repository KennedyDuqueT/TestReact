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
    { field: 'status', headerName: t('billing.batchBilling.readingImport.statusTableLabel'), width: 135 },
    { field: 'orderCode', headerName: t('billing.batchBilling.readingImport.orderCodeTableLabel'), width: 135 },
    { field: 'supply', headerName: t('billing.batchBilling.readingImport.supplyTableLabel'), width: 135 },
    { field: 'company', headerName: t('billing.batchBilling.readingImport.companyTableLabel'), width: 135 },
    { field: 'customerName', headerName: t('billing.batchBilling.readingImport.customerNameTableLabel'), width: 135 },
    { field: 'action', headerName: t('billing.batchBilling.readingImport.actionTableLabel'), width: 135 },
    { field: 'routeCode', headerName: t('billing.batchBilling.readingImport.routeCodeTableLabel'), width: 135 },
    { field: 'meterCode', headerName: t('billing.batchBilling.readingImport.meterCodeTableLabel'), width: 135 },
    { field: 'reading', headerName: t('billing.batchBilling.readingImport.readingTableLabel'), width: 135 },
  ];
};
