import { FC, useEffect, useState } from 'react';
import GenerateBillingArchiveTableViewComponent from './GenerateBillingArchiveTableView';
import { useGenerateBillingArchive } from '@/context/billing';
import { AdvertenceIcon, SuccessIcon } from '@/assets';
import { ModalConfiguration } from '@/models/commons';
import { modalConfigurationInitialValue } from './GenerateBillingArchive.constants';
import { useTranslation } from '@/hooks';
import { AlertResultModalComponent } from '@/components/ui';

const GenerateBillingArchiveCreateOrEditViewComponent: FC = () => {
  const { actions } = useGenerateBillingArchive();
  const [selectedGenerateBillingArchive, setSelectedGenerateBillingArchive] = useState<number[]>([]);
  const [alertModalConfig, setAlertModalConfig] = useState<ModalConfiguration>(modalConfigurationInitialValue);
  const [openAlertModal, setAlertOpenModal] = useState(false);
  const { t } = useTranslation();

  const onConfirmGenerateBillingArchive = async () => {
    if (await actions?.callSaveGenerateBillingArchive(selectedGenerateBillingArchive)) {
      setAlertModalConfig({
        buttonText: t('components.alertResultModal.acceptButtonLabel'),
        icon: SuccessIcon,
        message: t('billing.batchBilling.generateBillingArchive.confirmSuccessLabel'),
        modalTitle: t('billing.batchBilling.generateBillingArchive.confirmSuccessModalTitle'),
      });
      setAlertOpenModal(true);
    } else {
      setAlertModalConfig({
        buttonText: t('components.alertResultModal.acceptButtonLabel'),
        icon: AdvertenceIcon,
        message: t('billing.batchBilling.generateBillingArchive.confirmErrorLabel'),
        modalTitle: t('billing.batchBilling.generateBillingArchive.confirmErrorModalTitle'),
      });
      setAlertOpenModal(true);
    }
  };

  const onCloseAlertModal = () => {
    setAlertOpenModal(false);
  };

  useEffect(() => {
    actions?.loadInitialInfo();
  }, []);

  return (
    <>
      <GenerateBillingArchiveTableViewComponent
        setSelectedGenerateBillingArchive={setSelectedGenerateBillingArchive}
        onConfirmGenerateBillingArchive={onConfirmGenerateBillingArchive}
      ></GenerateBillingArchiveTableViewComponent>

      <AlertResultModalComponent
        modalConfiguration={alertModalConfig}
        onClose={onCloseAlertModal}
        openModal={openAlertModal}
      ></AlertResultModalComponent>
    </>
  );
};

export default GenerateBillingArchiveCreateOrEditViewComponent;
