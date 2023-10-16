import { Modal } from '@/components/ui';
import { FC } from 'react';
import { useTranslation } from '@/hooks';
import { Control, FieldErrors, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';
import { BillingModels } from '@/models';
import CriticalReadingDetailViewComponent from './CriticalReadingDetailView';

interface CriticalReadingDetailModalProps {
  openModalEdit: boolean;
  onCancelModalEdit: () => void;
  control: Control<BillingModels.CriticalReadingInterface>;
  errors: FieldErrors<BillingModels.CriticalReadingInterface>;
  onSaveCriticalReading: SubmitHandler<BillingModels.CriticalReadingInterface>;
  handleSubmit: UseFormHandleSubmit<BillingModels.CriticalReadingInterface>;
  supplyDetail: string | number;
}

const CriticalReadingDetailModalComponent: FC<CriticalReadingDetailModalProps> = ({
  openModalEdit,
  onCancelModalEdit,
  control,
  errors,
  handleSubmit,
  onSaveCriticalReading,
  supplyDetail,
}) => {
  const { t } = useTranslation();
  return (
    <Modal
      title={t('billing.batchBilling.criticalReading.supplyFormLabel') + ' ' + supplyDetail}
      maxWidth="lg"
      open={openModalEdit}
      handleClose={onCancelModalEdit}
      fontSize={21}
    >
      <CriticalReadingDetailViewComponent
        control={control}
        errors={errors}
        handleSubmit={handleSubmit}
        onCancelDetailModal={onCancelModalEdit}
        onSaveCriticalReading={onSaveCriticalReading}
        key={`${openModalEdit}`}
      ></CriticalReadingDetailViewComponent>
    </Modal>
  );
};

export default CriticalReadingDetailModalComponent;
