import { FC } from 'react';
import { Modal } from '@/components';
import { useCashRegisterConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { DialogActions } from '@/models/commons';
import { CashRegisterForm } from './CashRegisterForm';

interface Props {
  entityName: string;
  fullEntityName: string;
}

export const CashRegisterCreateDialog: FC<Props> = ({ fullEntityName }) => {
  const { t } = useTranslation();
  const { openCreateDialog, actions } = useCashRegisterConfig();

  return (
    <Modal
      maxWidth="md"
      open={openCreateDialog}
      title={t('catalog.actions.create', { entityName: fullEntityName })}
      handleClose={() => actions?.toggleDialogAction(DialogActions.CREATE)}
      keepMounted={false}
    >
      <CashRegisterForm />
    </Modal>
  );
};
