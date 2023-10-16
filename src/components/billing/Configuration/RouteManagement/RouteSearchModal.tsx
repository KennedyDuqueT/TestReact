import { Modal } from '@/components/ui';
import { FC } from 'react';
import RouteSearchViewComponent from './RouteSearchView';
import { useTranslation } from '@/hooks';
import { SubmitHandler } from 'react-hook-form';
import { BillingModels } from '@/models';

interface RouteSearchModalProps {
  openSearchModal: boolean;
  onCancelModalSearch: () => void;
  onSearchRoute: SubmitHandler<BillingModels.RouteInterface>;
}

const RouteSearchModalComponent: FC<RouteSearchModalProps> = ({ openSearchModal, onCancelModalSearch, onSearchRoute }) => {
  const { t } = useTranslation();
  return (
    <Modal
      title={t('billing.maintenance.routesManagement.searchModalTitle')}
      maxWidth="sm"
      open={openSearchModal}
      handleClose={onCancelModalSearch}
      fontSize={21}
    >
      <RouteSearchViewComponent key={openSearchModal + ''} onSearch={onSearchRoute} onCancel={onCancelModalSearch} />
    </Modal>
  );
};

export default RouteSearchModalComponent;
