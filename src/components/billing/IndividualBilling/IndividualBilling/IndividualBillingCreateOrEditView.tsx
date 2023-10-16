import { FC, useEffect, useState } from 'react';
import { BillingModels } from '@/models';
import { useForm } from 'react-hook-form';
import { individualBillingInitialValue, individualBillingSearchInitialValue } from '@/models/billing';
import { useIndividualBilling } from '@/context/billing';
import IndividualBillingTableViewComponent from './IndividualBillingTableView';
import IndividualBillingFormFilterComponent from './IndividualBillingFormFilter';
import IndividualBillingEditModalComponent from './IndividualBillingEditModal';
import { AlertResultModalComponent } from '@/components/ui';
import { ModalConfiguration } from '@/models/commons';
import { modalConfigurationInitialValue } from './IndividualBilling.constants';
import { AdvertenceIcon, SuccessIcon } from '@/assets';
import { useTranslation } from '@/hooks';
import IndividualBillingConfirmModalComponent from './IndividualBillingConfirmModal';

const IndividualBillingCreateOrEditViewComponent: FC = () => {
  const { t } = useTranslation();
  const [individualBillingInfo, setIndividualBillingInfo] = useState([individualBillingInitialValue]);
  const { actions } = useIndividualBilling();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  const [openAlertModal, setAlertOpenModal] = useState(false);
  const [confirmButtonEnabled, setConfirmButtonEnabled] = useState(false);
  const [lockTableEdit, setLockTableEdit] = useState(false);
  const [alertModalConfig, setAlertModalConfig] = useState<ModalConfiguration>(modalConfigurationInitialValue);
  const formFilter = useForm<BillingModels.IndividualBillingFilterInterface>({
    defaultValues: individualBillingSearchInitialValue,
  });

  const {
    control: controlFormFilter,
    formState: { errors: errorsFormFilter, isValid: isValidFormFilter },
    handleSubmit: handleSubmitFormFilter,
  } = formFilter;

  const formEdit = useForm<BillingModels.IndividualBillingInterface>({
    defaultValues: individualBillingInitialValue,
  });

  const {
    control: controlFormEdit,
    formState: { errors: errorsFormEdit },
    handleSubmit: handleSubmitFormEdit,
    getValues: getFormEditValues,
  } = formEdit;

  const supplyEdit = getFormEditValues().supplyCode.toString();

  const onCancelFormFilter = () => {
    formFilter.reset(individualBillingSearchInitialValue);
  };

  const onProcessIndividualBilling = async (provisionalBillingFormFilter: BillingModels.IndividualBillingFilterInterface) => {
    const individualBillingResultOfProcess = await actions?.processIndividualBilling(provisionalBillingFormFilter);
    if (individualBillingResultOfProcess!.length > 0) {
      setIndividualBillingInfo(individualBillingResultOfProcess!);
      setTimeout(() => {
        window.scroll({
          top: 2500,
          left: 0,
          behavior: 'smooth',
        });
      }, 1000);
    } else {
      setAlertModalConfig({
        buttonText: t('components.alertResultModal.acceptButtonLabel'),
        icon: AdvertenceIcon,
        message: t('billing.batchBilling.individualBilling.ErrorLabel'),
        modalTitle: t('billing.batchBilling.individualBilling.ErrorModalTitle'),
      });
      setAlertOpenModal(true);
    }
  };

  const onGenerateTableIndividualBilling = async () => {
    const individualBillingResultOfGenerate = await actions?.generateIndividualBilling(individualBillingInfo);
    if (individualBillingResultOfGenerate!.length > 0) {
      setAlertModalConfig({
        buttonText: t('components.alertResultModal.acceptButtonLabel'),
        icon: SuccessIcon,
        message: t('billing.individualBilling.individualBilling.generateWithSuccessLabel'),
        modalTitle: t('billing.individualBilling.individualBilling.generateModalTitle'),
      });
      setIndividualBillingInfo(individualBillingResultOfGenerate!);
      setConfirmButtonEnabled(true);
    } else {
      setAlertModalConfig({
        buttonText: t('components.alertResultModal.acceptButtonLabel'),
        icon: AdvertenceIcon,
        message: t('billing.batchBilling.individualBilling.ErrorLabel'),
        modalTitle: t('billing.batchBilling.individualBilling.ErrorModalTitle'),
      });
    }
    setAlertOpenModal(true);
  };

  const onConfirmTableIndividualBilling = () => {
    setOpenModalConfirm(true);
  };

  const onConfirmIndividualBilling = async () => {
    if (await actions?.confirmIndividualBilling(individualBillingInfo)) {
      setAlertModalConfig({
        buttonText: t('components.alertResultModal.acceptButtonLabel'),
        icon: SuccessIcon,
        message: t('billing.individualBilling.individualBilling.confirmWithSuccessLabel'),
        modalTitle: t('billing.individualBilling.individualBilling.confirmModalTitle'),
      });
      setLockTableEdit(true);
    } else {
      setAlertModalConfig({
        buttonText: t('components.alertResultModal.acceptButtonLabel'),
        icon: AdvertenceIcon,
        message: t('billing.batchBilling.individualBilling.ErrorLabel'),
        modalTitle: t('billing.batchBilling.individualBilling.ErrorModalTitle'),
      });
    }
    setOpenModalConfirm(false);
    setAlertOpenModal(true);
  };

  const onEditIndividualBilling = (id: string) => {
    formEdit.reset(individualBillingInfo.filter((individualBillingItem) => individualBillingItem.id === id)![0]);
    setOpenModalEdit(true);
  };

  const onSaveIndividualBilling = async (dataFormEdit: BillingModels.IndividualBillingInterface) => {
    const indexOfIndividualBillingToEdit = individualBillingInfo.findIndex((IndividualBilling) => IndividualBilling.id === dataFormEdit.id);
    if (await actions?.saveIndividualBilling(dataFormEdit)) {
      const updatedCriticalReadingInfo = [...individualBillingInfo];
      updatedCriticalReadingInfo[indexOfIndividualBillingToEdit] = {
        ...updatedCriticalReadingInfo[indexOfIndividualBillingToEdit],
        ...dataFormEdit,
      };
      setIndividualBillingInfo(updatedCriticalReadingInfo);
      setAlertModalConfig({
        buttonText: t('components.alertResultModal.acceptButtonLabel'),
        icon: SuccessIcon,
        message: t('billing.individualBilling.individualBilling.editWithSuccessLabel') + '<b>' + supplyEdit + '</b>',
        modalTitle: t('billing.individualBilling.individualBilling.editWithSuccessModalTitle'),
      });
      setOpenModalEdit(false);
    } else {
      setAlertModalConfig({
        buttonText: t('components.alertResultModal.acceptButtonLabel'),
        icon: AdvertenceIcon,
        message: t('billing.batchBilling.individualBilling.ErrorLabel'),
        modalTitle: t('billing.batchBilling.individualBilling.ErrorModalTitle'),
      });
    }
    setAlertOpenModal(true);
  };

  const onCancelModalEdit = () => {
    setOpenModalEdit(false);
  };

  const onCancelModalConfirm = () => {
    setOpenModalConfirm(false);
  };

  const onCloseAlertModal = () => {
    setAlertOpenModal(false);
  };

  useEffect(() => {
    actions?.loadInitialInfo();
  }, []);

  return (
    <>
      <IndividualBillingFormFilterComponent
        control={controlFormFilter}
        errors={errorsFormFilter}
        formFilter={formFilter}
        isValidFormFilter={isValidFormFilter}
        onCancelFormFilter={onCancelFormFilter}
        onProcessIndividualBilling={onProcessIndividualBilling}
        handleSubmit={handleSubmitFormFilter}
      ></IndividualBillingFormFilterComponent>

      {individualBillingInfo.some((item) => item.id !== '') && (
        <IndividualBillingTableViewComponent
          individualBillingInfo={individualBillingInfo}
          onEditIndividualBilling={onEditIndividualBilling}
          lockTableEdit={lockTableEdit}
          confirmButtonEnabled={confirmButtonEnabled}
          onGenerateTableIndividualBilling={onGenerateTableIndividualBilling}
          onConfirmTableIndividualBilling={onConfirmTableIndividualBilling}
        ></IndividualBillingTableViewComponent>
      )}

      <IndividualBillingEditModalComponent
        control={controlFormEdit}
        errors={errorsFormEdit}
        handleSubmit={handleSubmitFormEdit}
        onCancelModalEdit={onCancelModalEdit}
        onSaveIndividualBilling={onSaveIndividualBilling}
        openModalEdit={openModalEdit}
        supplyEdit={supplyEdit}
      ></IndividualBillingEditModalComponent>

      <IndividualBillingConfirmModalComponent
        onCancelModalConfirm={onCancelModalConfirm}
        onConfirmIndividualBilling={onConfirmIndividualBilling}
        openModalConfirm={openModalConfirm}
      ></IndividualBillingConfirmModalComponent>

      <AlertResultModalComponent
        modalConfiguration={alertModalConfig}
        onClose={onCloseAlertModal}
        openModal={openAlertModal}
      ></AlertResultModalComponent>
    </>
  );
};

export default IndividualBillingCreateOrEditViewComponent;
