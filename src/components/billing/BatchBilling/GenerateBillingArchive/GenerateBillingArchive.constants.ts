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
    { field: 'supply', headerName: t('billing.batchBilling.generateBillingArchive.supplyTableLabel'), width: 135 },
    { field: 'customerName', headerName: t('billing.batchBilling.generateBillingArchive.customerNameTableLabel'), width: 135 },
    { field: 'contractedPower', headerName: t('billing.batchBilling.generateBillingArchive.contractedPowerTableLabel'), width: 135 },
    { field: 'routeCode', headerName: t('billing.batchBilling.generateBillingArchive.routeCodeTableLabel'), width: 135 },
    { field: 'rateDescription', headerName: t('billing.batchBilling.generateBillingArchive.rateDescriptionTableLabel'), width: 135 },
    { field: 'meterCode', headerName: t('billing.batchBilling.generateBillingArchive.meterCodeTableLabel'), width: 135 },
    { field: 'billingDate', headerName: t('billing.batchBilling.generateBillingArchive.billingDateTableLabel'), width: 135 },
    { field: 'currentReadingDate', headerName: t('billing.batchBilling.generateBillingArchive.currentReadingDateTableLabel'), width: 135 },
    { field: 'currentReading', headerName: t('billing.batchBilling.generateBillingArchive.currentReadingTableLabel'), width: 135 },
    { field: 'previousReadingDate', headerName: t('billing.batchBilling.generateBillingArchive.previousReadingDateTableLabel'), width: 135 },
    { field: 'previousReading', headerName: t('billing.batchBilling.generateBillingArchive.previousReadingTableLabel'), width: 135 },
    { field: 'multiple', headerName: t('billing.batchBilling.generateBillingArchive.multipleTableLabel'), width: 135 },
    { field: 'KWHBilled', headerName: t('billing.batchBilling.generateBillingArchive.KWHBilledTableLabel'), width: 135 },
    { field: 'KWHPowerReceived', headerName: t('billing.batchBilling.generateBillingArchive.KWHPowerReceivedTableLabel'), width: 135 },
    { field: 'rate', headerName: t('billing.batchBilling.generateBillingArchive.rateTableLabel'), width: 135 },
    { field: 'consumptionBilled', headerName: t('billing.batchBilling.generateBillingArchive.consumptionBilledTableLabel'), width: 135 },
    { field: 'billedArrears', headerName: t('billing.batchBilling.generateBillingArchive.billedArrearsTableLabel'), width: 135 },
    { field: 'fixedCharges', headerName: t('billing.batchBilling.generateBillingArchive.fixedChargesTableLabel'), width: 135 },
    { field: 'powerDelivery', headerName: t('billing.batchBilling.generateBillingArchive.powerDeliveryTableLabel'), width: 135 },
    { field: 'receivedPower', headerName: t('billing.batchBilling.generateBillingArchive.receivedPowerTableLabel'), width: 135 },
    { field: 'billedPower', headerName: t('billing.batchBilling.generateBillingArchive.billedPowerTableLabel'), width: 135 },
    { field: 'otherConcepts', headerName: t('billing.batchBilling.generateBillingArchive.otherConceptsTableLabel'), width: 135 },
    { field: 'totalReceipt', headerName: t('billing.batchBilling.generateBillingArchive.totalReceiptTableLabel'), width: 135 },
  ];
};
