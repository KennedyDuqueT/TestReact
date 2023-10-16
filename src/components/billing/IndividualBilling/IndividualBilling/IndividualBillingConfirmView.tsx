import { useTranslation } from '@/hooks';
import { Box, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import Image from 'next/image';
import { SuccessIcon } from '@/assets';
import { Button } from '@/components/ui';

interface IndividualBillingDetailViewProps {
  onCancelModalConfirm: () => void;
  onConfirmIndividualBilling: () => void;
}

const IndividualBillingConfirmViewComponent: FC<IndividualBillingDetailViewProps> = ({ onCancelModalConfirm, onConfirmIndividualBilling }) => {
  const { t } = useTranslation();

  return (
    <>
      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Image src={SuccessIcon} alt="Icon Modal" priority={true} />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography sx={{ textAlign: 'center' }}>{t('billing.individualBilling.individualBilling.confirmModalLabel')}</Typography>
      </Box>
      <Grid container justifyContent="center" item xs={12} sx={{ mt: 4 }}>
        <Box sx={{ mr: 2 }}>
          <Button type="button" variant="contained" buttonType="cancel" onClick={onCancelModalConfirm}>
            {t('billing.individualBilling.individualBilling.cancelButtonLabel')}
          </Button>
        </Box>
        <Box sx={{ ml: 2 }}>
          <Button type="button" variant="contained" buttonType="save" onClick={onConfirmIndividualBilling}>
            {t('billing.individualBilling.individualBilling.confirmButtonLabel')}
          </Button>
        </Box>
      </Grid>
    </>
  );
};
export default IndividualBillingConfirmViewComponent;
