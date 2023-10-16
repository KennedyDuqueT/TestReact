import { FC } from 'react';
import { Modal } from '@/components';
import { useCurrencyExchangeRateConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { DialogActions } from '@/models/commons';
import { CurrencyExchangeRateForm } from './CurrencyExchangeRateForm';

interface Props {
  entityName: string;
  fullEntityName: string;
}

export const CurrencyExchangeRateUpdateDialog: FC<Props> = ({ fullEntityName }) => {
  const { t } = useTranslation();
  const { selectedItem, openUpdateDialog, actions } = useCurrencyExchangeRateConfig();

  return (
    <Modal
      maxWidth="sm"
      open={openUpdateDialog}
      title={t('catalog.actions.update', { entityName: fullEntityName })}
      handleClose={() => actions?.toggleDialogAction(DialogActions.UPDATE)}
    >
      <CurrencyExchangeRateForm initialValues={selectedItem} />
    </Modal>
  );
};
