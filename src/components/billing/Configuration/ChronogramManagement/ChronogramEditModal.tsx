import { Modal } from '@/components/ui';
import { FC } from 'react';
import { useTranslation } from '@/hooks';
import ChronogramEditViewComponent from './ChronogramEditView';
import { BillingModels } from '@/models';

interface ChronogramEditModalProps {
  openModalEdit: boolean;
  onCancelModalEdit: () => void;
  onCancelEditChronogram: () => void;
  chronogramInfoToEdit: BillingModels.ChronogramInterface;
}

const ChronogramEditModalComponent: FC<ChronogramEditModalProps> = ({
  onCancelModalEdit,
  openModalEdit,
  onCancelEditChronogram,
  chronogramInfoToEdit,
}) => {
  const { t } = useTranslation();
  return (
    <Modal
      title={t('billing.maintenance.chronogramManagement.editModalTitle')}
      fontSize={21}
      maxWidth="lg"
      open={openModalEdit}
      handleClose={onCancelModalEdit}
    >
      <ChronogramEditViewComponent
        onCancelEditChronogram={onCancelEditChronogram}
        chronogramInfoToEdit={chronogramInfoToEdit}
        key={`${openModalEdit}`}
      />
    </Modal>
  );
};

export default ChronogramEditModalComponent;
