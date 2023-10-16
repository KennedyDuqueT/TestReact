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

const searchFields = {
  supply: {
    visible: true,
    required: false,
  },
};

export const SearchBySupplyModal: FC<Props> = ({ open, onClose, onSearch }) => {
  const { t } = useTranslation();

  const handleSumbitSearch = (values: SearchFormValues) => {
    onSearch(values);
  };

  return (
    <Modal title={t('portfolio.common.searchModal.bySupplyTitle')} maxWidth="sm" open={open} handleClose={onClose}>
      <SearchByClientOrSupplyForm onSubmit={handleSumbitSearch} onCancel={onClose} fields={searchFields} />
    </Modal>
  );
};
