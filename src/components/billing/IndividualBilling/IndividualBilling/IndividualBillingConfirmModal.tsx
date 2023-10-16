import { Modal } from '@/components/ui';
import { FC } from 'react';
import { useTranslation } from '@/hooks';
import IndividualBillingConfirmViewComponent from './IndividualBillingConfirmView';

interface IndividualBillingEditModalProps {
  openModalConfirm: boolean;
  onCancelModalConfirm: () => void;
  onConfirmIndividualBilling: () => void;
}

const IndividualBillingConfirmModalComponent: FC<IndividualBillingEditModalProps> = ({
  openModalConfirm,
  onCancelModalConfirm,
  onConfirmIndividualBilling,
}) => {
  const { t } = useTranslation();
  return (
    <Modal
      title={t('billing.individualBilling.individualBilling.confirmModalTitle')}
      maxWidth="xs"
      open={openModalConfirm}
      handleClose={onCancelModalConfirm}
      fontSize={21}
    >
      <IndividualBillingConfirmViewComponent
        onCancelModalConfirm={onCancelModalConfirm}
        onConfirmIndividualBilling={onConfirmIndividualBilling}
        key={`${openModalConfirm}`}
      ></IndividualBillingConfirmViewComponent>
    </Modal>
  );
};

export default IndividualBillingConfirmModalComponent;
