import { Modal } from '@/components/ui';
import { FC } from 'react';
import { useTranslation } from '@/hooks';
import { Control, FieldErrors, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';
import { BillingModels } from '@/models';
import TariffSchedulesEditViewComponent from './TariffSchedulesEditView';

interface TariffSchedulesRateConceptModalProps {
  openModalEdit: boolean;
  onCancelModalEdit: () => void;
  control: Control<BillingModels.TariffSchedulesInterface>;
  errors: FieldErrors<BillingModels.TariffSchedulesInterface>;
  onSaveTariffSchedules: SubmitHandler<BillingModels.TariffSchedulesInterface>;
  handleSubmit: UseFormHandleSubmit<BillingModels.TariffSchedulesInterface>;
}

const TariffSchedulesEditModalComponent: FC<TariffSchedulesRateConceptModalProps> = ({
  openModalEdit,
  onCancelModalEdit,
  control,
  errors,
  handleSubmit,
  onSaveTariffSchedules,
}) => {
  const { t } = useTranslation();
  return (
    <Modal
      title={t('billing.maintenance.tariffSchedulesManagement.editTariffSchedulesModalTitle')}
      maxWidth="lg"
      open={openModalEdit}
      handleClose={onCancelModalEdit}
      fontSize={21}
    >
      <TariffSchedulesEditViewComponent
        onCancel={onCancelModalEdit}
        control={control}
        errors={errors}
        handleSubmit={handleSubmit}
        onSaveTariffSchedules={onSaveTariffSchedules}
        key={`${openModalEdit}`}
      />
    </Modal>
  );
};

export default TariffSchedulesEditModalComponent;
