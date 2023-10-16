import { FC, LegacyRef, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BillingModels } from '@/models';
import { modalConfigurationInitialValue } from './CyclesManagement.constants';
import CycleFormComponent from './CycleForm';
import CycleBottomButtonsComponent from './CycleBottomButtons';
import CycleSearchModalComponent from './CycleSearchModal';
import { ModalConfiguration } from '@/models/commons';
import { AlertResultModalComponent } from '@/components/ui';
import { AdvertenceIcon, SuccessIcon } from '@/assets';
import { useTranslation } from '@/hooks';
import { cycleInitialValue } from '@/models/billing';
import { useCycleManagement, useDataMastersManagement } from '@/context/billing';

const CycleCreateOrEditViewComponent: FC = () => {
  const { t } = useTranslation();
  const { actions } = useCycleManagement();
  const { actions: dataMasterAction } = useDataMastersManagement();
  const [openSearchModal, setSearchOpenModal] = useState(false);
  const [openAlertModal, setAlertOpenModal] = useState(false);
  const [alertModalConfig, setAlertModalConfig] = useState<ModalConfiguration>(modalConfigurationInitialValue);
  const form = useForm<BillingModels.CycleInterface>({
    defaultValues: cycleInitialValue,
  });
  const formRef: LegacyRef<HTMLFormElement> = useRef(null);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = form;

  useEffect(() => {
    dataMasterAction?.loadInitialInfo();
  }, []);

  const onOpenSearchModal = () => {
    setSearchOpenModal(true);
  };

  const onCancelCreateOrEdit = () => {
    setSearchOpenModal(false);
    reset(cycleInitialValue);
  };

  const onCreateOrEdit = async (cycleToEditOrCreate: BillingModels.CycleInterface) => {
    setSearchOpenModal(false);
    if (await actions?.saveCycle({ ...cycleToEditOrCreate })) {
      setAlertModalConfig({
        buttonText: t('components.alertResultModal.acceptButtonLabel'),
        icon: SuccessIcon,
        message: t('billing.maintenance.cyclesManagement.saveWithSuccessLabel'),
        modalTitle: t('billing.maintenance.cyclesManagement.saveWithSuccessLabel'),
      });
    } else {
      console.error(t('billing.maintenance.cyclesManagement.saveWithErrorLabel'));
    }
    setAlertOpenModal(true);
    reset(cycleInitialValue);
  };

  const onCancelModalSearch = () => {
    setSearchOpenModal(false);
  };

  const onCloseAlertModal = () => {
    setAlertOpenModal(false);
  };

  const onSearchCycle = async (cycleToSearch: BillingModels.CycleInterface) => {
    setSearchOpenModal(false);
    const cycleSearchResult = await actions?.searchCycle(cycleToSearch);
    if (cycleSearchResult && cycleSearchResult.length > 0) {
      form.reset(cycleSearchResult[0]);
    } else {
      setAlertModalConfig({
        buttonText: t('components.alertResultModal.goBackButtonLabel'),
        icon: AdvertenceIcon,
        message:
          t('billing.maintenance.cyclesManagement.searchWithErrorLabel1') +
          cycleToSearch.name +
          t('billing.maintenance.cyclesManagement.searchWithErrorLabel2'),
        modalTitle: t('billing.maintenance.cyclesManagement.searchModalTitle'),
      });
      setAlertOpenModal(true);
    }
  };

  return (
    <>
      <CycleFormComponent
        formRef={formRef}
        control={control}
        onCreateOrEdit={onCreateOrEdit}
        errors={errors}
        handleSubmit={handleSubmit}
        onOpenSearchModal={onOpenSearchModal}
      ></CycleFormComponent>

      <AlertResultModalComponent
        modalConfiguration={alertModalConfig}
        onClose={onCloseAlertModal}
        openModal={openAlertModal}
      ></AlertResultModalComponent>

      <CycleSearchModalComponent
        onCancelModalSearch={onCancelModalSearch}
        openSearchModal={openSearchModal}
        onSearchCycle={onSearchCycle}
      ></CycleSearchModalComponent>

      <CycleBottomButtonsComponent formRef={formRef} isValid={isValid} onCancel={onCancelCreateOrEdit}></CycleBottomButtonsComponent>
    </>
  );
};

export default CycleCreateOrEditViewComponent;
