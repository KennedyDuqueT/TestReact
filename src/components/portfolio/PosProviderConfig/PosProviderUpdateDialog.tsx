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

export const PosProviderUpdateDialog: FC<Props> = ({ fullEntityName }) => {
  const { t } = useTranslation();
  const { selectedItem, openUpdateDialog, actions } = usePosProviderConfig();

  return (
    <Modal
      maxWidth="sm"
      open={openUpdateDialog}
      title={t('catalog.actions.update', { entityName: fullEntityName })}
      handleClose={() => actions?.toggleDialogAction(DialogActions.UPDATE)}
      keepMounted={false}
    >
      <PosProviderForm initialValues={selectedItem} />
    </Modal>
  );
};
