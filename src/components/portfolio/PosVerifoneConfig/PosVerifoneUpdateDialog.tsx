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

export const PosVerifoneUpdateDialog: FC<Props> = ({ fullEntityName }) => {
  const { t } = useTranslation();
  const { selectedItem, openUpdateDialog, actions } = usePosVerifoneConfig();

  return (
    <Modal
      maxWidth="sm"
      open={openUpdateDialog}
      title={t('catalog.actions.update', { entityName: fullEntityName })}
      handleClose={() => actions?.toggleDialogAction(DialogActions.UPDATE)}
      keepMounted={false}
    >
      <PosVerifoneForm initialValues={selectedItem} />
    </Modal>
  );
};
