import { Modal } from '@/components/ui';
import { FC } from 'react';
import CycleSearchViewComponent from './CycleSearchView';
import { useTranslation } from '@/hooks';
import { SubmitHandler } from 'react-hook-form';
import { BillingModels } from '@/models';

interface CycleSearchModalProps {
  openSearchModal: boolean;
  onCancelModalSearch: () => void;
  onSearchCycle: SubmitHandler<BillingModels.CycleInterface>;
}

const CycleSearchModalComponent: FC<CycleSearchModalProps> = ({ openSearchModal, onCancelModalSearch, onSearchCycle }) => {
  const { t } = useTranslation();
  return (
    <Modal
      title={t('billing.maintenance.cyclesManagement.searchModalTitle')}
      maxWidth="sm"
      open={openSearchModal}
      handleClose={onCancelModalSearch}
      fontSize={21}
    >
      <CycleSearchViewComponent key={`${openSearchModal}`} onSearch={onSearchCycle} onCancel={onCancelModalSearch} />
    </Modal>
  );
};

export default CycleSearchModalComponent;
