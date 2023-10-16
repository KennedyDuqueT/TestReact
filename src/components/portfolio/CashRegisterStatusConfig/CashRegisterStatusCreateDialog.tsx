import { FC } from 'react';
import { Modal } from '@/components';
import { useCashRegisterStatusConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { DialogActions } from '@/models/commons';
import { CashRegisterStatusForm } from './CashRegisterStatusForm';

interface Props {
  entityName: string;
  fullEntityName: string;
}

export const CashRegisterStatusCreateDialog: FC<Props> = ({ fullEntityName }) => {
  const { t } = useTranslation();
  const { openCreateDialog, actions } = useCashRegisterStatusConfig();

  return (
    <Modal
      maxWidth="sm"
      open={openCreateDialog}
      title={t('catalog.actions.create', { entityName: fullEntityName })}
      handleClose={() => actions?.toggleDialogAction(DialogActions.CREATE)}
    >
      <CashRegisterStatusForm />
    </Modal>
  );
};
