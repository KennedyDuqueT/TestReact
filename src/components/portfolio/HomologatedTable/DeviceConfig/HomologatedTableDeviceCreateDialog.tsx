import { FC } from 'react';
import { Modal } from '@/components';
import { useHomologatedTableConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { DialogActions } from '@/models/commons';
import { HomologatedTableDeviceForm } from './HomologatedTableDeviceForm';

interface Props {
  entityName: string;
  fullEntityName: string;
}

export const HomologatedTableDeviceCreateDialog: FC<Props> = ({ fullEntityName }) => {
  const { t } = useTranslation();
  const { openCreateDialog, actions } = useHomologatedTableConfig();

  return (
    <Modal
      maxWidth="sm"
      open={openCreateDialog}
      title={t('catalog.actions.create', { entityName: fullEntityName })}
      handleClose={() => actions?.toggleDialogAction(DialogActions.CREATE)}
    >
      <HomologatedTableDeviceForm />
    </Modal>
  );
};
