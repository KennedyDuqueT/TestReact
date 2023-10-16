import { FC, LegacyRef, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BillingModels } from '@/models';
import { modalConfigurationInitialValue } from './RatesManagement.constants';
import RateFormComponent from './RateForm';
import RateBottomButtonsComponent from './RateBottomButtons';
import RateConfirmModalComponent from './RateConfirmModal';
import { ModalConfiguration } from '@/models/commons';
import { AlertResultModalComponent } from '@/components/ui';
import { SuccessIcon } from '@/assets';
import { useTranslation } from '@/hooks';
import { rateFormInitialValue } from '@/models/billing';
import { useRateManagement } from '@/context/billing';

const RateCreateOrEditViewComponent: FC = () => {
  const { actions } = useRateManagement();
  const { t } = useTranslation();
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [openAlertModal, setAlertOpenModal] = useState(false);
  const [alertModalConfig, setAlertModalConfig] = useState<ModalConfiguration>(modalConfigurationInitialValue);
  const formRef: LegacyRef<HTMLFormElement> = useRef(null);
  const form = useForm<BillingModels.RateInterface>({
    defaultValues: rateFormInitialValue,
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = form;

  const formConfirm = useForm<BillingModels.RateInterface>({
    defaultValues: rateFormInitialValue,
  });

  const {
    control: controlFormConfirm,
    formState: { errors: errorsFormConfirm },
  } = formConfirm;

  const onCancelCreateOrEdit = () => {
    setOpenConfirmModal(false);
    reset(rateFormInitialValue);
  };

  const onSubmit = () => {
    formConfirm.reset(form.getValues());
    setOpenConfirmModal(true);
  };

  const onCreateOrEdit = async () => {
    if (await actions?.saveRate(form.getValues())) {
      setOpenConfirmModal(false);
      setAlertModalConfig({
        buttonText: t('components.alertResultModal.acceptButtonLabel'),
        icon: SuccessIcon,
        message: t('billing.maintenance.ratesManagement.saveWithSuccessLabel'),
        modalTitle: t('billing.maintenance.ratesManagement.saveWithSuccessLabel'),
      });
      setAlertOpenModal(true);
      reset(rateFormInitialValue);
    } else {
      console.error(errors);
    }
  };

  const onCancelModalConfirm = () => {
    setOpenConfirmModal(false);
  };

  const onCloseAlertModal = () => {
    setAlertOpenModal(false);
  };

  useEffect(() => {
    actions?.loadInitialInfo();
  }, []);

  return (
    <>
      <RateFormComponent formRef={formRef} onSubmit={onSubmit} control={control} errors={errors} handleSubmit={handleSubmit}></RateFormComponent>

      <RateConfirmModalComponent
        onCancelModalConfirm={onCancelModalConfirm}
        openConfirmModal={openConfirmModal}
        onCreateOrEdit={onCreateOrEdit}
        control={controlFormConfirm}
        errors={errorsFormConfirm}
      ></RateConfirmModalComponent>

      <AlertResultModalComponent
        modalConfiguration={alertModalConfig}
        onClose={onCloseAlertModal}
        openModal={openAlertModal}
      ></AlertResultModalComponent>

      <RateBottomButtonsComponent isValid={isValid} formRef={formRef} onCancel={onCancelCreateOrEdit}></RateBottomButtonsComponent>
    </>
  );
};

export default RateCreateOrEditViewComponent;
