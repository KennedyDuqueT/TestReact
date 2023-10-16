import { FC } from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { AdvertenceIcon } from '@/assets';
import { ActionButtons, CommonButton, Modal } from '@/components';
import { useSupplyStatusConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { DialogActions } from '@/models/commons';

interface Props {
  entityName: string;
  fullEntityName: string;
}

export const SupplyStatusDeleteDialog: FC<Props> = ({ entityName, fullEntityName }) => {
  const { t } = useTranslation();
  const { selectedItem, openDeleteDialog, actions } = useSupplyStatusConfig();

  const buttons: CommonButton[] = [
    {
      label: t('components.button.cancel'),
      type: 'cancel',
      onClick: () => actions?.toggleDialogAction(DialogActions.DELETE),
    },
    {
      label: t('components.button.confirm'),
      type: 'primary',
      onClick: () => actions?.deleteOne(selectedItem.id),
    },
  ];

  return (
    <Modal
      maxWidth="sm"
      open={openDeleteDialog}
      title={t('catalog.actions.delete', { entityName: fullEntityName })}
      handleClose={() => actions?.toggleDialogAction(DialogActions.DELETE)}
    >
      <>
        <Box sx={{ my: 2, textAlign: 'center' }}>
          <Image src={AdvertenceIcon} alt="Delete Icon" priority={true} />
        </Box>

        <Typography
          sx={{ textAlign: 'center' }}
          dangerouslySetInnerHTML={{
            __html: t('catalog.actions.deleteConfirmationMessage', {
              entityName,
              itemValue: selectedItem.name,
            }),
          }}
        />

        <ActionButtons buttons={buttons} containerProps={{ justifyContent: 'center' }} />
      </>
    </Modal>
  );
};
