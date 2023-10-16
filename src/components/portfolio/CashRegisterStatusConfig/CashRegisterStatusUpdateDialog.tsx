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

export const CashRegisterStatusUpdateDialog: FC<Props> = ({ fullEntityName }) => {
  const { t } = useTranslation();
  const { selectedItem, openUpdateDialog, actions } = useCashRegisterStatusConfig();

  return (
    <Modal
      maxWidth="sm"
      open={openUpdateDialog}
      title={t('catalog.actions.update', { entityName: fullEntityName })}
      handleClose={() => actions?.toggleDialogAction(DialogActions.UPDATE)}
    >
      <CashRegisterStatusForm initialValues={selectedItem} />
    </Modal>
  );
};
