import { FC } from 'react';
import { Modal } from '@/components';
import { useSupplyStatusConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { DialogActions } from '@/models/commons';
import { SupplyStatusForm } from './SupplyStatusForm';

interface Props {
  entityName: string;
  fullEntityName: string;
}

export const SupplyStatusCreateDialog: FC<Props> = ({ fullEntityName }) => {
  const { t } = useTranslation();
  const { openCreateDialog, actions } = useSupplyStatusConfig();

  return (
    <Modal
      maxWidth="sm"
      open={openCreateDialog}
      title={t('catalog.actions.create', { entityName: fullEntityName })}
      handleClose={() => actions?.toggleDialogAction(DialogActions.CREATE)}
    >
      <SupplyStatusForm />
    </Modal>
  );
};
