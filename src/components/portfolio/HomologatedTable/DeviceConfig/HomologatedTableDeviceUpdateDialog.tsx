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

export const HomologatedTableDeviceUpdateDialog: FC<Props> = ({ fullEntityName }) => {
  const { t } = useTranslation();
  const { selectedItem, openUpdateDialog, actions } = useHomologatedTableConfig();

  return (
    <Modal
      maxWidth="sm"
      open={openUpdateDialog}
      title={t('catalog.actions.update', { entityName: fullEntityName })}
      handleClose={() => actions?.toggleDialogAction(DialogActions.UPDATE)}
      keepMounted={false}
    >
      <HomologatedTableDeviceForm initialValues={selectedItem} />
    </Modal>
  );
};
