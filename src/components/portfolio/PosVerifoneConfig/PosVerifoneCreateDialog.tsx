import { FC } from 'react';
import { Modal } from '@/components';
import { usePosVerifoneConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { DialogActions } from '@/models/commons';
import { PosVerifoneForm } from './PosVerifoneForm';

interface Props {
  entityName: string;
  fullEntityName: string;
}

export const PosVerifoneCreateDialog: FC<Props> = ({ fullEntityName }) => {
  const { t } = useTranslation();
  const { openCreateDialog, actions } = usePosVerifoneConfig();

  return (
    <Modal
      maxWidth="sm"
      open={openCreateDialog}
      title={t('catalog.actions.create', { entityName: fullEntityName })}
      handleClose={() => actions?.toggleDialogAction(DialogActions.CREATE)}
      keepMounted={false}
    >
      <PosVerifoneForm />
    </Modal>
  );
};
