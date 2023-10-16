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

export const PaymentDealTypeUpdateDialog: FC<Props> = ({ fullEntityName }) => {
  const { t } = useTranslation();
  const { selectedItem, openUpdateDialog, actions } = usePaymentDealTypeConfig();

  return (
    <Modal
      maxWidth="sm"
      open={openUpdateDialog}
      title={t('catalog.actions.update', { entityName: fullEntityName })}
      handleClose={() => actions?.toggleDialogAction(DialogActions.UPDATE)}
    >
      <PaymentDealTypeForm initialValues={selectedItem} />
    </Modal>
  );
};
