import { FC } from 'react';
import { Typography } from '@mui/material';
import { ActionButtons, CommonButton, Modal } from '@/components';
import { useTranslation } from '@/hooks';
import { useSupplyLot } from '@/context';

interface Props {
  open: boolean;
  onAccept: () => void;
  onCancel: () => void;
}

export const SupplyActionDialog: FC<Props> = ({ open, onAccept, onCancel }) => {
  const { t } = useTranslation();
  const { selectedAction, selectedSupply } = useSupplyLot();

  const buttons: CommonButton[] = [
    {
      label: t('components.button.cancel'),
      type: 'cancel',
      onClick: onCancel,
    },
    {
      label: t('components.button.process'),
      type: 'primary',
      onClick: onAccept,
    },
  ];

  return (
    <Modal maxWidth="xs" title={t('portfolio.supplyLotDetail.table.customActions.dialogTitle')} open={open} handleClose={onCancel}>
      {selectedAction && (
        <Typography
          pb={2}
          dangerouslySetInnerHTML={{
            __html: t('portfolio.supplyLotDetail.table.customActions.confirmationMessage', {
              actionName: t(`portfolio.supplyLotDetail.table.customActions.${selectedAction}`),
              supply: selectedSupply?.supplyNumber,
            }),
          }}
        />
      )}

      <ActionButtons buttons={buttons} />
    </Modal>
  );
};
