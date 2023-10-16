import { FC, useEffect, useState } from 'react';
import { BillingModels } from '@/models';
import { useForm } from 'react-hook-form';
import ElectronicBillStampingFormFilterComponent from './ElectronicBillStampingFormFilter';
import { electronicBillStampingFormInitialValue, electronicBillStampingInitialValue } from '@/models/billing';
import ElectronicBillStampingTableViewComponent from './ElectronicBillStampingTableView';
import { useDataMastersManagement, useElectronicBillStamping } from '@/context/billing';
import { ModalConfiguration } from '@/models/commons';
import { modalConfigurationInitialValue } from './ElectronicBillStamping.constants';
import { AdvertenceIcon, SuccessIcon } from '@/assets';
import { useTranslation } from '@/hooks';
import { AlertResultModalComponent } from '@/components/ui';

const ElectronicBillStampingCreateOrEditViewComponent: FC = () => {
  const [electronicBillStampingInfo, setElectronicBillStampingInfo] = useState([electronicBillStampingInitialValue]);
  const { actions: dataMasterAction } = useDataMastersManagement();
  const { actions } = useElectronicBillStamping();
  const { t } = useTranslation();
  const [openAlertModal, setAlertOpenModal] = useState(false);
  const [alertModalConfig, setAlertModalConfig] = useState<ModalConfiguration>(modalConfigurationInitialValue);
  const [selectedElectronicBillStamping, setSelectedElectronicBillStamping] = useState<number[]>([]);

  const form = useForm<BillingModels.ElectronicBillStampingFormInterface>({
    defaultValues: electronicBillStampingFormInitialValue,
  });
  const {
    control,
    formState: { errors, isValid },
    watch,
  } = form;

  const onClearFormFilter = () => {
    form.reset(electronicBillStampingFormInitialValue);
  };

  const onUpdateFormFilter = async (dataFormFilter: BillingModels.ElectronicBillStampingFormInterface) => {
    const electronicBillStampingResult = await actions?.filterElectronicBillStamping(dataFormFilter);
    if (electronicBillStampingResult && electronicBillStampingResult.length > 0) {
      setElectronicBillStampingInfo(electronicBillStampingResult);
      setTimeout(() => {
        window.scroll({
          top: 2500,
          left: 0,
          behavior: 'smooth',
        });
      }, 1000);
    } else {
      setAlertModalConfig({
        buttonText: t('components.alertResultModal.goBackButtonLabel'),
        icon: AdvertenceIcon,
        message: t('billing.electronicBilling.electronicBillStamping.messageWithErrorLabel'),
        modalTitle: t('billing.electronicBilling.electronicBillStamping.messageWithErrorLabel'),
      });
      setAlertOpenModal(true);
    }
  };

  const onSendElectronicBillStamping = async () => {
    if (await actions?.callSaveElectronicBillStamping(selectedElectronicBillStamping)) {
      setAlertModalConfig({
        buttonText: t('components.alertResultModal.acceptButtonLabel'),
        icon: SuccessIcon,
        message: t('billing.electronicBilling.electronicBillStamping.sendWithSuccessLabel'),
        modalTitle: t('billing.electronicBilling.electronicBillStamping.sendTitleLabel'),
      });
      setAlertOpenModal(true);
    } else {
      setAlertModalConfig({
        buttonText: t('components.alertResultModal.acceptButtonLabel'),
        icon: AdvertenceIcon,
        message: t('billing.electronicBilling.electronicBillStamping.messageWithErrorLabel'),
        modalTitle: t('billing.electronicBilling.electronicBillStamping.sendTitleLabel'),
      });
      setAlertOpenModal(true);
    }
  };

  const onCloseAlertModal = () => {
    setAlertOpenModal(false);
  };

  useEffect(() => {
    actions?.loadInitialInfo();
    dataMasterAction?.loadInitialInfo();
  }, []);

  return (
    <>
      <ElectronicBillStampingFormFilterComponent
        watch={watch}
        isValid={isValid}
        onUpdateFormFilter={onUpdateFormFilter}
        onClearFormFilter={onClearFormFilter}
        form={form}
        control={control}
        errors={errors}
      ></ElectronicBillStampingFormFilterComponent>

      {electronicBillStampingInfo.some((item) => item.id !== '') && (
        <ElectronicBillStampingTableViewComponent
          setSelectedElectronicBillStamping={setSelectedElectronicBillStamping}
          electronicBillStampingInfo={electronicBillStampingInfo}
          onSendElectronicBillStamping={onSendElectronicBillStamping}
        ></ElectronicBillStampingTableViewComponent>
      )}

      <AlertResultModalComponent
        modalConfiguration={alertModalConfig}
        onClose={onCloseAlertModal}
        openModal={openAlertModal}
      ></AlertResultModalComponent>
    </>
  );
};

export default ElectronicBillStampingCreateOrEditViewComponent;
