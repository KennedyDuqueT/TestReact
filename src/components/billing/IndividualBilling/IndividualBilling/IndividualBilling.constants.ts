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
    { field: 'status', headerName: t('billing.individualBilling.individualBilling.statusTableLabel'), width: 135 },
    { field: 'supplyCode', headerName: t('billing.individualBilling.individualBilling.supplyCodeTableLabel'), width: 135 },
    { field: 'customerName', headerName: t('billing.individualBilling.individualBilling.customerNameTableLabel'), width: 135 },
    { field: 'contractedPower', headerName: t('billing.individualBilling.individualBilling.contractedPowerTableLabel'), width: 135 },
    { field: 'routeCode', headerName: t('billing.individualBilling.individualBilling.routeCodeTableLabel'), width: 135 },
    { field: 'rateDescription', headerName: t('billing.individualBilling.individualBilling.rateDescriptionTableLabel'), width: 135 },
    { field: 'meterCode', headerName: t('billing.individualBilling.individualBilling.meterCodeTableLabel'), width: 135 },
    { field: 'billingDate', headerName: t('billing.individualBilling.individualBilling.billingDateTableLabel'), width: 135 },
    { field: 'currentReadingDate', headerName: t('billing.individualBilling.individualBilling.currentReadingDateTableLabel'), width: 135 },
    { field: 'currentReading', headerName: t('billing.individualBilling.individualBilling.currentReadingTableLabel'), width: 135 },
    { field: 'previousReadingDate', headerName: t('billing.individualBilling.individualBilling.previousReadingDateTableLabel'), width: 135 },
    { field: 'previousReading', headerName: t('billing.individualBilling.individualBilling.previousReadingTableLabel'), width: 135 },
    { field: 'multiple', headerName: t('billing.individualBilling.individualBilling.multipleTableLabel'), width: 135 },
    { field: 'KWHBilled', headerName: t('billing.individualBilling.individualBilling.KWHBilledTableLabel'), width: 135 },
    { field: 'KWHPowerReceived', headerName: t('billing.individualBilling.individualBilling.KWHPowerReceivedTableLabel'), width: 135 },
    { field: 'rate', headerName: t('billing.individualBilling.individualBilling.rateTableLabel'), width: 135 },
    { field: 'consumptionBilled', headerName: t('billing.individualBilling.individualBilling.consumptionBilledTableLabel'), width: 135 },
    { field: 'billedArrears', headerName: t('billing.individualBilling.individualBilling.billedArrearsTableLabel'), width: 135 },
    { field: 'fixedCharges', headerName: t('billing.individualBilling.individualBilling.fixedChargesTableLabel'), width: 135 },
    { field: 'powerDelivery', headerName: t('billing.individualBilling.individualBilling.powerDeliveryTableLabel'), width: 135 },
    { field: 'receivedPower', headerName: t('billing.individualBilling.individualBilling.receivedPowerTableLabel'), width: 135 },
    { field: 'billedPower', headerName: t('billing.individualBilling.individualBilling.billedPowerTableLabel'), width: 135 },
    { field: 'otherConcepts', headerName: t('billing.individualBilling.individualBilling.otherConceptsTableLabel'), width: 135 },
    { field: 'totalReceipt', headerName: t('billing.individualBilling.individualBilling.totalReceiptTableLabel'), width: 135 },
  ];
};
