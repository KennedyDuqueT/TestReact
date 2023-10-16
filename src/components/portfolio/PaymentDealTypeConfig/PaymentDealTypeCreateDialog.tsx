import { FC } from 'react';
import { Modal } from '@/components';
import { usePaymentDealTypeConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { DialogActions } from '@/models/commons';
import { PaymentDealTypeForm } from './PaymentDealTypeForm';

interface Props {
  entityName: string;
  fullEntityName: string;
}

export const PaymentDealTypeCreateDialog: FC<Props> = ({ fullEntityName }) => {
  const { t } = useTranslation();
  const { openCreateDialog, actions } = usePaymentDealTypeConfig();

  return (
    <Modal
      maxWidth="sm"
      open={openCreateDialog}
      title={t('catalog.actions.create', { entityName: fullEntityName })}
      handleClose={() => actions?.toggleDialogAction(DialogActions.CREATE)}
    >
      <PaymentDealTypeForm />
    </Modal>
  );
};
