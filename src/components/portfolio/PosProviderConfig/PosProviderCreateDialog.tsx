import { FC } from 'react';
import { Modal } from '@/components';
import { usePosProviderConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { DialogActions } from '@/models/commons';
import { PosProviderForm } from './PosProviderForm';

interface Props {
  entityName: string;
  fullEntityName: string;
}

export const PosProviderCreateDialog: FC<Props> = ({ fullEntityName }) => {
  const { t } = useTranslation();
  const { openCreateDialog, actions } = usePosProviderConfig();

  return (
    <Modal
      maxWidth="sm"
      open={openCreateDialog}
      title={t('catalog.actions.create', { entityName: fullEntityName })}
      handleClose={() => actions?.toggleDialogAction(DialogActions.CREATE)}
      keepMounted={false}
    >
      <PosProviderForm />
    </Modal>
  );
};
