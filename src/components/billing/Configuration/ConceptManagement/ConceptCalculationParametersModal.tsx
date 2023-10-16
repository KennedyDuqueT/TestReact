import { Modal } from '@/components/ui';
import { FC } from 'react';
import { useTranslation } from '@/hooks';
import ConceptCalculationParametersViewComponent from './ConceptCalculationParametersView';
import { BillingModels } from '@/models';
import { Control, FieldErrors } from 'react-hook-form';

interface ConceptCalculationParametersModalProps {
  openCalculationParametersModal: boolean;
  onCancelCalculationParametersModal: () => void;
  control: Control<BillingModels.ConceptCalculationParametersInterface>;
  errors: FieldErrors<BillingModels.ConceptCalculationParametersInterface>;
}

const ConceptCalculationParametersModalComponent: FC<ConceptCalculationParametersModalProps> = ({
  openCalculationParametersModal,
  onCancelCalculationParametersModal,
  control,
  errors,
}) => {
  const { t } = useTranslation();
  return (
    <Modal
      title={t('billing.maintenance.conceptManagement.calculationParametersModalTitle')}
      maxWidth="lg"
      open={openCalculationParametersModal}
      handleClose={onCancelCalculationParametersModal}
      fontSize={21}
    >
      <ConceptCalculationParametersViewComponent
        key={`${openCalculationParametersModal}`}
        control={control}
        errors={errors}
        onCancel={onCancelCalculationParametersModal}
      ></ConceptCalculationParametersViewComponent>
    </Modal>
  );
};

export default ConceptCalculationParametersModalComponent;
