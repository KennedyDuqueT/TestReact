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

export const CurrencyExchangeRateCreateDialog: FC<Props> = ({ fullEntityName }) => {
  const { t } = useTranslation();
  const { openCreateDialog, actions } = useCurrencyExchangeRateConfig();

  return (
    <Modal
      maxWidth="sm"
      open={openCreateDialog}
      title={t('catalog.actions.create', { entityName: fullEntityName })}
      handleClose={() => actions?.toggleDialogAction(DialogActions.CREATE)}
    >
      <CurrencyExchangeRateForm />
    </Modal>
  );
};
