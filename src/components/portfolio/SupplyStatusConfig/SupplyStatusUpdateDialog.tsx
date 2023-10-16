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

export const SupplyStatusUpdateDialog: FC<Props> = ({ fullEntityName }) => {
  const { t } = useTranslation();
  const { selectedItem, openUpdateDialog, actions } = useSupplyStatusConfig();

  return (
    <Modal
      maxWidth="sm"
      open={openUpdateDialog}
      title={t('catalog.actions.update', { entityName: fullEntityName })}
      handleClose={() => actions?.toggleDialogAction(DialogActions.UPDATE)}
    >
      <SupplyStatusForm initialValues={selectedItem} />
    </Modal>
  );
};
