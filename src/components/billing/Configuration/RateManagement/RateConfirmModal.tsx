import { Modal } from '@/components/ui';
import { FC } from 'react';
import { useTranslation } from '@/hooks';
import RateConfirmViewComponent from './RateConfirmView';
import { BillingModels } from '@/models';
import { Control, FieldErrors } from 'react-hook-form';

interface RateSearchModalProps {
  openConfirmModal: boolean;
  onCancelModalConfirm: () => void;
  onCreateOrEdit: () => void;
  control: Control<BillingModels.RateInterface>;
  errors: FieldErrors<BillingModels.RateInterface>;
}

const RateConfirmModalComponent: FC<RateSearchModalProps> = ({ onCancelModalConfirm, onCreateOrEdit, openConfirmModal, control, errors }) => {
  const { t } = useTranslation();
  return (
    <Modal
      title={t('billing.maintenance.ratesManagement.confirmModalTitle')}
      maxWidth="sm"
      open={openConfirmModal}
      handleClose={onCancelModalConfirm}
    >
      <RateConfirmViewComponent
        key={`${openConfirmModal}`}
        onConfirmation={onCreateOrEdit}
        onCancel={onCancelModalConfirm}
        control={control}
        errors={errors}
      />
    </Modal>
  );
};

export default RateConfirmModalComponent;
