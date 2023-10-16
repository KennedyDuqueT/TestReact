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

export const LotStatusCreateDialog: FC<Props> = ({ fullEntityName }) => {
  const { t } = useTranslation();
  const { openCreateDialog, actions } = useLotStatusConfig();

  return (
    <Modal
      maxWidth="sm"
      open={openCreateDialog}
      title={t('catalog.actions.create', { entityName: fullEntityName })}
      handleClose={() => actions?.toggleDialogAction(DialogActions.CREATE)}
    >
      <LotStatusForm />
    </Modal>
  );
};
