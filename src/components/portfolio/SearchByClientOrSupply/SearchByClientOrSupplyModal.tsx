import { FC } from 'react';
import { Modal } from '@/components';
import { useTranslation } from '@/hooks';
import { SearchSupplyParams } from '@/models/portfolio';
import { SearchByClientOrSupplyForm, SearchFormValues } from './SearchByClientOrSupplyForm';

interface Props {
  open: boolean;
  onClose: () => void;
  onSearch: (params: SearchSupplyParams) => void;
}

export const SearchByClientOrSupplyModal: FC<Props> = ({ open, onClose, onSearch }) => {
  const { t } = useTranslation();

  const handleSumbitSearch = (values: SearchFormValues) => {
    onSearch(values);

    onClose();
  };

  return (
    <Modal title={t('portfolio.common.searchModal.byClientOrSupplyTitle')} maxWidth="sm" open={open} handleClose={onClose}>
      <SearchByClientOrSupplyForm onSubmit={handleSumbitSearch} onCancel={onClose} />
    </Modal>
  );
};
