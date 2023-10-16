import { FC, useEffect, useState } from 'react';
import { BillingModels } from '@/models';
import { useForm } from 'react-hook-form';
import ProvisionalBillingTableViewComponent from './ProvisionalBillingTableView';
import { provisionalBillingInitialValue, provisionalBillingSearchInitialValue } from '@/models/billing';
import ProvisionalBillingFormSearchComponent from './ProvisionalBillingFormSearch';
import { useProvisionalBilling } from '@/context/billing';
import { modalConfigurationInitialValue } from './ProvisionalBilling.constants';
import { ModalConfiguration } from '@/models/commons';
import { AlertResultModalComponent } from '@/components/ui';
import { AdvertenceIcon, SuccessIcon } from '@/assets';
import { useTranslation } from '@/hooks';

const ProvisionalBillingCreateOrEditViewComponent: FC = () => {
  const [provisionalBillingInfo, setProvisionalBillingInfo] = useState([provisionalBillingInitialValue]);
  const { actions, provisionalBillingResultOfSearch } = useProvisionalBilling();
  const [selectedProvisionalBilling, setSelectedProvisionalBilling] = useState<number[]>([]);
  const [openAlertModal, setAlertOpenModal] = useState(false);
  const { t } = useTranslation();
  const [alertModalConfig, setAlertModalConfig] = useState<ModalConfiguration>(modalConfigurationInitialValue);
  const formSearch = useForm<BillingModels.ProvisionalBillingSearchInterface>({
    defaultValues: provisionalBillingSearchInitialValue,
  });

  const {
    control: controlFormSearch,
    formState: { errors: errorsFormSearch, isValid: isValidFormSearch },
  } = formSearch;

  const onCloseAlertModal = () => {
    setAlertOpenModal(false);
  };

  const onCancelFormSearch = () => {
    formSearch.reset(provisionalBillingSearchInitialValue);
  };

  const onSearchProvisionalBilling = async (provisionalBillingFormSearch: BillingModels.ProvisionalBillingSearchInterface) => {
    await actions?.searchProvisionalBilling(provisionalBillingFormSearch);
    setProvisionalBillingInfo([provisionalBillingResultOfSearch]);
    setTimeout(() => {
      window.scroll({
        top: 2500,
        left: 0,
        behavior: 'smooth',
      });
    }, 1000);
  };

  const onConfirmProvisionalBilling = async () => {
    if (await actions?.callSaveProvisionalBilling(selectedProvisionalBilling)) {
      setAlertModalConfig({
        buttonText: t('components.alertResultModal.acceptButtonLabel'),
        icon: SuccessIcon,
        message:
          t('billing.batchBilling.provisionalBilling.confirmSuccessLabel') +
          '<br />' +
          t('billing.batchBilling.provisionalBilling.confirmSuccessLabel2'),
        modalTitle: t('billing.batchBilling.provisionalBilling.generateSuccessModalTitle'),
      });
      setAlertOpenModal(true);
    } else {
      setAlertModalConfig({
        buttonText: t('components.alertResultModal.acceptButtonLabel'),
        icon: AdvertenceIcon,
        message: t('billing.batchBilling.provisionalBilling.generateErrorLabel'),
        modalTitle: t('billing.batchBilling.provisionalBilling.generateErrorModalTitle'),
      });
      setAlertOpenModal(true);
    }
  };

  useEffect(() => {
    actions?.loadInitialInfo();
  }, []);

  return (
    <>
      <ProvisionalBillingFormSearchComponent
        control={controlFormSearch}
        errors={errorsFormSearch}
        formSearch={formSearch}
        isValidFormSearch={isValidFormSearch}
        onCancelFormSearch={onCancelFormSearch}
        onSearchProvisionalBilling={onSearchProvisionalBilling}
      ></ProvisionalBillingFormSearchComponent>

      {provisionalBillingInfo.some((item) => item.id !== '') && (
        <ProvisionalBillingTableViewComponent
          provisionalBillingInfo={provisionalBillingInfo}
          setSelectedProvisionalBilling={setSelectedProvisionalBilling}
          onConfirmProvisionalBilling={onConfirmProvisionalBilling}
        ></ProvisionalBillingTableViewComponent>
      )}

      <AlertResultModalComponent
        modalConfiguration={alertModalConfig}
        onClose={onCloseAlertModal}
        openModal={openAlertModal}
      ></AlertResultModalComponent>
    </>
  );
};

export default ProvisionalBillingCreateOrEditViewComponent;
