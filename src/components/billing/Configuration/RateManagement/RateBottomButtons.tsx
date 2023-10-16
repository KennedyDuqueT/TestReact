import { Button } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { Box, Grid } from '@mui/material';
import { FC, RefObject } from 'react';

interface RateBottomButtonsProps {
  isValid: boolean;
  onCancel: () => void;
  formRef: RefObject<HTMLFormElement>;
}

const RateBottomButtonsComponent: FC<RateBottomButtonsProps> = ({ isValid, onCancel, formRef }) => {
  const { t } = useTranslation();
  return (
    <Grid container justifyContent="flex-end" sx={{ pr: 4, mt: 4 }}>
      <Box sx={{ pr: 4 }}>
        <Button type="button" variant="contained" buttonType="cancel" onClick={onCancel}>
          {t('billing.maintenance.ratesManagement.cancelButtonLabel')}
        </Button>
      </Box>
      <Box>
        <Button
          type="button"
          variant="contained"
          buttonType="save"
          disabled={!isValid}
          onClick={() => {
            formRef.current?.requestSubmit();
          }}
        >
          {t('billing.maintenance.ratesManagement.saveButtonLabel')}
        </Button>
      </Box>
    </Grid>
  );
};
export default RateBottomButtonsComponent;
