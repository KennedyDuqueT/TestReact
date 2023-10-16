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

export const InvoiceStatusTypeCreateDialog: FC<Props> = ({ fullEntityName }) => {
  const { t } = useTranslation();
  const { openCreateDialog, actions } = useInvoiceStatusTypeConfig();

  return (
    <Modal
      maxWidth="sm"
      open={openCreateDialog}
      title={t('catalog.actions.create', { entityName: fullEntityName })}
      handleClose={() => actions?.toggleDialogAction(DialogActions.CREATE)}
    >
      <InvoiceStatusTypeForm />
    </Modal>
  );
};
