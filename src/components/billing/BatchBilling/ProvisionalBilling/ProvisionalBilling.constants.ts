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
    { field: 'supply', headerName: t('billing.batchBilling.provisionalBilling.supplyTableLabel'), width: 135 },
    { field: 'customerName', headerName: t('billing.batchBilling.provisionalBilling.customerNameTableLabel'), width: 135 },
    { field: 'contractedPower', headerName: t('billing.batchBilling.provisionalBilling.contractedPowerTableLabel'), width: 135 },
    { field: 'routeCode', headerName: t('billing.batchBilling.provisionalBilling.routeCodeTableLabel'), width: 135 },
    { field: 'rateDescription', headerName: t('billing.batchBilling.provisionalBilling.rateDescriptionTableLabel'), width: 135 },
    { field: 'meterCode', headerName: t('billing.batchBilling.provisionalBilling.meterCodeTableLabel'), width: 135 },
    { field: 'billingDate', headerName: t('billing.batchBilling.provisionalBilling.billingDateTableLabel'), width: 135 },
    { field: 'currentReadingDate', headerName: t('billing.batchBilling.provisionalBilling.currentReadingDateTableLabel'), width: 135 },
    { field: 'daysToBilled', headerName: t('billing.batchBilling.provisionalBilling.daysToBilledTableLabel'), width: 135 },
    { field: 'currentReading', headerName: t('billing.batchBilling.provisionalBilling.currentReadingTableLabel'), width: 135 },
    { field: 'previousReadingDate', headerName: t('billing.batchBilling.provisionalBilling.previousReadingDateTableLabel'), width: 135 },
    { field: 'previousReading', headerName: t('billing.batchBilling.provisionalBilling.previousReadingTableLabel'), width: 135 },
    { field: 'multiple', headerName: t('billing.batchBilling.provisionalBilling.multipleTableLabel'), width: 135 },
    { field: 'KWHBilled', headerName: t('billing.batchBilling.provisionalBilling.KWHBilledTableLabel'), width: 135 },
    { field: 'KWHPowerReceived', headerName: t('billing.batchBilling.provisionalBilling.KWHPowerReceivedTableLabel'), width: 135 },
    { field: 'rate', headerName: t('billing.batchBilling.provisionalBilling.rateTableLabel'), width: 135 },
    { field: 'consumptionVariation', headerName: t('billing.batchBilling.provisionalBilling.consumptionVariationTableLabel'), width: 135 },
    { field: 'consumptionBilled', headerName: t('billing.batchBilling.provisionalBilling.consumptionBilledTableLabel'), width: 135 },
    { field: 'billedArrears', headerName: t('billing.batchBilling.provisionalBilling.billedArrearsTableLabel'), width: 135 },
    { field: 'fixedCharges', headerName: t('billing.batchBilling.provisionalBilling.fixedChargesTableLabel'), width: 135 },
    { field: 'powerDelivery', headerName: t('billing.batchBilling.provisionalBilling.powerDeliveryTableLabel'), width: 135 },
    { field: 'receivedPower', headerName: t('billing.batchBilling.provisionalBilling.receivedPowerTableLabel'), width: 135 },
    { field: 'billedPower', headerName: t('billing.batchBilling.provisionalBilling.billedPowerTableLabel'), width: 135 },
    { field: 'otherConcepts', headerName: t('billing.batchBilling.provisionalBilling.otherConceptsTableLabel'), width: 135 },
    { field: 'totalReceipt', headerName: t('billing.batchBilling.provisionalBilling.totalReceiptTableLabel'), width: 135 },
  ];
};
