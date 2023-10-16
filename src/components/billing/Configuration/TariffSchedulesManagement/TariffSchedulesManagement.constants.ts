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
    { field: 'status', headerName: t('billing.maintenance.tariffSchedulesManagement.statusFormLabel'), width: 155 },
    { field: 'code', headerName: t('billing.maintenance.tariffSchedulesManagement.codeFormLabel'), width: 155 },
    { field: 'createDate', headerName: t('billing.maintenance.tariffSchedulesManagement.createDateTableLabel'), width: 155 },
    { field: 'currency', headerName: t('billing.maintenance.tariffSchedulesManagement.currencyFormLabel'), width: 155 },
    { field: 'serviceType', headerName: t('billing.maintenance.tariffSchedulesManagement.serviceTypeFormLabel'), width: 155 },
    { field: 'rate', headerName: t('billing.maintenance.tariffSchedulesManagement.rateTableLabel'), width: 155 },
    { field: 'codeConcept', headerName: t('billing.maintenance.tariffSchedulesManagement.conceptTableLabel'), width: 155 },
  ];
};
