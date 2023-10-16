import { FC } from 'react';
import { Modal } from '@/components';
import { useInvoiceStatusTypeConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { DialogActions } from '@/models/commons';
import { InvoiceStatusTypeForm } from './InvoiceStatusTypeForm';

interface Props {
  entityName: string;
  fullEntityName: string;
}

export const InvoiceStatusTypeUpdateDialog: FC<Props> = ({ fullEntityName }) => {
  const { t } = useTranslation();
  const { selectedItem, openUpdateDialog, actions } = useInvoiceStatusTypeConfig();

  return (
    <Modal
      maxWidth="sm"
      open={openUpdateDialog}
      title={t('catalog.actions.update', { entityName: fullEntityName })}
      handleClose={() => actions?.toggleDialogAction(DialogActions.UPDATE)}
    >
      <InvoiceStatusTypeForm initialValues={selectedItem} />
    </Modal>
  );
};
