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

export const CashRegisterUpdateDialog: FC<Props> = ({ fullEntityName }) => {
  const { t } = useTranslation();
  const { selectedItem, openUpdateDialog, actions } = useCashRegisterConfig();

  return (
    <Modal
      maxWidth="md"
      open={openUpdateDialog}
      title={t('catalog.actions.update', { entityName: fullEntityName })}
      handleClose={() => actions?.toggleDialogAction(DialogActions.UPDATE)}
      keepMounted={false}
    >
      <CashRegisterForm initialValues={selectedItem} />
    </Modal>
  );
};
