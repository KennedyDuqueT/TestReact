import { Modal } from '@/components/ui';
import { FC } from 'react';
import { useTranslation } from '@/hooks';
import ChronogramDetailViewComponent from './ChronogramDetailView';
import { BillingModels } from '@/models';

interface ChronogramDetailModalProps {
  openModalDetail: boolean;
  onCancelModalDetail: () => void;
  onCancelDetailChronogram: () => void;
  chronogramInfoToDetail: BillingModels.ChronogramInterface[];
}

const ChronogramDetailModalComponent: FC<ChronogramDetailModalProps> = ({
  onCancelModalDetail,
  openModalDetail,
  onCancelDetailChronogram,
  chronogramInfoToDetail,
}) => {
  const { t } = useTranslation();
  return (
    <Modal
      title={t('billing.maintenance.chronogramManagement.detailModalTitle')}
      fontSize={21}
      maxWidth="lg"
      open={openModalDetail}
      handleClose={onCancelModalDetail}
    >
      <ChronogramDetailViewComponent
        onCancelModalDetail={onCancelDetailChronogram}
        chronogramInfoToDetail={chronogramInfoToDetail}
        key={`${openModalDetail}`}
      />
    </Modal>
  );
};

export default ChronogramDetailModalComponent;
