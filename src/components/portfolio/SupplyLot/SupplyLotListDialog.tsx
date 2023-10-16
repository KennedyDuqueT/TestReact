import { FC } from 'react';
import { ActionButtons, CommonButton, Modal } from '@/components';
import { useTranslation } from '@/hooks';
import { SupplyLotDetail } from './SupplyLotDetail';

interface Props {
  open: boolean;
  onCancel: () => void;
}

export const SupplyLotListDialog: FC<Props> = ({ open, onCancel }) => {
  const { t } = useTranslation();

  const buttons: CommonButton[] = [
    {
      label: t('components.button.cancel'),
      type: 'cancel',
      onClick: onCancel,
    },
  ];

  return (
    <Modal maxWidth="xl" title={`${t('portfolio.supplyLotDetail.dialogTitle')}`} open={open} handleClose={onCancel}>
      <SupplyLotDetail />

      <ActionButtons buttons={buttons} />
    </Modal>
  );
};
