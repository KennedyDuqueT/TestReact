import { Modal } from '@/components/ui';
import { FC } from 'react';
import { useTranslation } from '@/hooks';
import { Control, FieldErrors, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';
import { BillingModels } from '@/models';
import IndividualBillingEditViewComponent from './IndividualBillingEditView';

interface IndividualBillingEditModalProps {
  openModalEdit: boolean;
  onCancelModalEdit: () => void;
  control: Control<BillingModels.IndividualBillingInterface>;
  errors: FieldErrors<BillingModels.IndividualBillingInterface>;
  onSaveIndividualBilling: SubmitHandler<BillingModels.IndividualBillingInterface>;
  handleSubmit: UseFormHandleSubmit<BillingModels.IndividualBillingInterface>;
  supplyEdit: string;
}

const IndividualBillingEditModalComponent: FC<IndividualBillingEditModalProps> = ({
  openModalEdit,
  onCancelModalEdit,
  control,
  errors,
  handleSubmit,
  onSaveIndividualBilling,
  supplyEdit,
}) => {
  const { t } = useTranslation();
  return (
    <Modal
      title={t('billing.individualBilling.individualBilling.editModalTitle') + ' ' + supplyEdit}
      maxWidth="lg"
      open={openModalEdit}
      handleClose={onCancelModalEdit}
      fontSize={21}
    >
      <IndividualBillingEditViewComponent
        control={control}
        errors={errors}
        handleSubmit={handleSubmit}
        onCancelModalEdit={onCancelModalEdit}
        onSaveIndividualBilling={onSaveIndividualBilling}
        key={`${openModalEdit}`}
      ></IndividualBillingEditViewComponent>
    </Modal>
  );
};

export default IndividualBillingEditModalComponent;
