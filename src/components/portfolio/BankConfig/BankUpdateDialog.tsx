import { FC } from 'react';
import { Modal } from '@/components';
import { useBankConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { DialogActions } from '@/models/commons';
import { BankForm } from './BankForm';

interface Props {
  entityName: string;
  fullEntityName: string;
}

export const BankUpdateDialog: FC<Props> = ({ fullEntityName }) => {
  const { t } = useTranslation();
  const { selectedItem, openUpdateDialog, actions } = useBankConfig();

  return (
    <Modal
      maxWidth="sm"
      open={openUpdateDialog}
      title={t('catalog.actions.update', { entityName: fullEntityName })}
      handleClose={() => actions?.toggleDialogAction(DialogActions.UPDATE)}
    >
      <BankForm initialValues={selectedItem} />
    </Modal>
  );
};
