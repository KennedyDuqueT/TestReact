import { FC } from 'react';
import { Modal } from '@/components';
import { useLotStatusConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { DialogActions } from '@/models/commons';
import { LotStatusForm } from './LotStatusForm';

interface Props {
  entityName: string;
  fullEntityName: string;
}

export const LotStatusUpdateDialog: FC<Props> = ({ fullEntityName }) => {
  const { t } = useTranslation();
  const { selectedItem, openUpdateDialog, actions } = useLotStatusConfig();

  return (
    <Modal
      maxWidth="sm"
      open={openUpdateDialog}
      title={t('catalog.actions.update', { entityName: fullEntityName })}
      handleClose={() => actions?.toggleDialogAction(DialogActions.UPDATE)}
    >
      <LotStatusForm initialValues={selectedItem} />
    </Modal>
  );
};
