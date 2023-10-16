import { FC, useEffect, useState } from 'react';
import { modalConfigurationInitialValue } from './ParametersFormManagement.constants';
import ParametersButtonsComponent from './ParametersButtons';
import ParametersFormModalComponent from './ParametersFormModal';
import { ParametersConfigTypeEnum } from './ParametersConfigEnum';
import { useDataMastersManagement, useParameterManagement } from '@/context/billing';
import { ModalConfiguration } from '@/models/commons';
import { AdvertenceIcon, SuccessIcon } from '@/assets';
import { useTranslation } from '@/hooks';
import { AlertResultModalComponent } from '@/components/ui';

const ParametersCreateOrEditViewComponent: FC = () => {
  const [openModalForm, setOpenModalForm] = useState(false);
  const [modalTitle, setModalTitle] = useState(String);
  const { actions: dataMasterAction } = useDataMastersManagement();
  const { actions } = useParameterManagement();
  const { t } = useTranslation();
  const [alertModalConfig, setAlertModalConfig] = useState<ModalConfiguration>(modalConfigurationInitialValue);
  const [openAlertModal, setAlertOpenModal] = useState(false);
  const [parameterForm, setParameterForm] = useState<ParametersConfigTypeEnum>();

  const onOpenFormModal = (parametersConfig: ParametersConfigTypeEnum, formTitles: string) => {
    setParameterForm(parametersConfig);
    setModalTitle(formTitles);
    setOpenModalForm(true);
  };

  const onCancelModalForm = () => {
    setOpenModalForm(false);
  };

  const validateSaveParameter = async (dataForm: any, actionSaveParameter: any) => {
    if (await actionSaveParameter(dataForm)) {
      setAlertModalConfig({
        buttonText: t('components.alertResultModal.acceptButtonLabel'),
        icon: SuccessIcon,
        message: t('billing.maintenance.parameterManagement.parameterSaveWithSuccessModalLabel'),
        modalTitle: t('billing.maintenance.parameterManagement.parameterSaveWithSuccessModalTitle'),
      });
    } else {
      setAlertModalConfig({
        buttonText: t('components.alertResultModal.acceptButtonLabel'),
        icon: AdvertenceIcon,
        message: t('billing.maintenance.parameterManagement.parameterSaveWithErrorModalLabel'),
        modalTitle: t('billing.maintenance.parameterManagement.parameterSaveWithErrorModalTitle'),
      });
    }
    setOpenModalForm(false);
    setAlertOpenModal(true);
  };

  const onSaveParameter = (parameter: ParametersConfigTypeEnum, dataForm: any) => {
    switch (parameter) {
      case ParametersConfigTypeEnum.NatureConcept:
        validateSaveParameter(dataForm, actions?.saveNatureConcept);
        break;

      case ParametersConfigTypeEnum.Taxes:
        validateSaveParameter(dataForm, actions?.saveTaxes);
        break;

      case ParametersConfigTypeEnum.UnitsMeasure:
        validateSaveParameter(dataForm, actions?.saveUnitsMeasure);
        break;

      case ParametersConfigTypeEnum.CalculationMethod:
        validateSaveParameter(dataForm, actions?.saveCalculationMethod);
        break;

      case ParametersConfigTypeEnum.ServiceGroup:
        break;

      case ParametersConfigTypeEnum.CausesAverageBilling:
        validateSaveParameter(dataForm, actions?.saveCausesAverageBilling);
        break;

      case ParametersConfigTypeEnum.FCBillingPeriod:
        validateSaveParameter(dataForm, actions?.saveFCBillingPeriod);
        break;

      case ParametersConfigTypeEnum.BillingType:
        validateSaveParameter(dataForm, actions?.saveBillingType);
        break;

      case ParametersConfigTypeEnum.ChargeType:
        validateSaveParameter(dataForm, actions?.saveChargeType);
        break;

      case ParametersConfigTypeEnum.CalculationType:
        validateSaveParameter(dataForm, actions?.saveCalculationType);
        break;

      case ParametersConfigTypeEnum.BillingMode:
        validateSaveParameter(dataForm, actions?.saveBillingMode);
        return;
    }
  };

  const onCloseAlertModal = () => {
    setAlertOpenModal(false);
  };

  useEffect(() => {
    dataMasterAction?.loadInitialInfo();
  }, []);

  return (
    <>
      <ParametersButtonsComponent onOpenFormModal={onOpenFormModal}></ParametersButtonsComponent>

      <ParametersFormModalComponent
        openModalForm={openModalForm}
        onCancelModalForm={onCancelModalForm}
        modalTitle={modalTitle}
        modalType={parameterForm}
        onSaveParameter={onSaveParameter}
      ></ParametersFormModalComponent>

      <AlertResultModalComponent
        modalConfiguration={alertModalConfig}
        onClose={onCloseAlertModal}
        openModal={openAlertModal}
      ></AlertResultModalComponent>
    </>
  );
};

export default ParametersCreateOrEditViewComponent;
