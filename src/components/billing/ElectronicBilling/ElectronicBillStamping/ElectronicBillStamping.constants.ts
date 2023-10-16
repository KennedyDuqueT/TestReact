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
    { field: 'status', headerName: t('billing.electronicBilling.electronicBillStamping.statusLabel'), width: 135 },
    { field: 'supplyId', headerName: t('billing.electronicBilling.electronicBillStamping.supplyIdTableLabel'), width: 135 },
    { field: 'companyName', headerName: t('billing.electronicBilling.electronicBillStamping.companyNameTableLabel'), width: 135 },
    { field: 'customerId', headerName: t('billing.electronicBilling.electronicBillStamping.customerIdTableLabel'), width: 135 },
    { field: 'typeId', headerName: t('billing.electronicBilling.electronicBillStamping.typeIdTableLabel'), width: 135 },
    { field: 'cycleId', headerName: t('billing.electronicBilling.electronicBillStamping.cycleIdTableLabel'), width: 135 },
    { field: 'dateIssue', headerName: t('billing.electronicBilling.electronicBillStamping.dateIssueTableLabel'), width: 135 },
    { field: 'conceptDescription', headerName: t('billing.electronicBilling.electronicBillStamping.conceptDescriptionTableLabel'), width: 135 },
    { field: 'rateId', headerName: t('billing.electronicBilling.electronicBillStamping.rateIdTableLabel'), width: 135 },
    { field: 'rateType', headerName: t('billing.electronicBilling.electronicBillStamping.rateTypeTableLabel'), width: 135 },
    { field: 'currencyId', headerName: t('billing.electronicBilling.electronicBillStamping.currencyIdTableLabel'), width: 135 },
    { field: 'exchangeRate', headerName: t('billing.electronicBilling.electronicBillStamping.exchangeRateTableLabel'), width: 135 },
    { field: 'priceUnit', headerName: t('billing.electronicBilling.electronicBillStamping.priceUnitTableLabel'), width: 135 },
    { field: 'ITBIS', headerName: t('billing.electronicBilling.electronicBillStamping.ITBISTableLabel'), width: 135 },
    { field: 'subtotalWithoutITBIS', headerName: t('billing.electronicBilling.electronicBillStamping.subtotalWithoutITBISTableLabel'), width: 135 },
    { field: 'total', headerName: t('billing.electronicBilling.electronicBillStamping.totalTableLabel'), width: 135 },
    { field: 'ENFC', headerName: t('billing.electronicBilling.electronicBillStamping.ENFCTableLabel'), width: 135 },
    { field: 'transactionType', headerName: t('billing.electronicBilling.electronicBillStamping.transactionTypeTableLabel'), width: 135 },
    { field: 'expirationDate', headerName: t('billing.electronicBilling.electronicBillStamping.expirationDateTableLabel'), width: 135 },
    { field: 'formOfPayment', headerName: t('billing.electronicBilling.electronicBillStamping.formOfPaymentTableLabel'), width: 135 },
  ];
};
