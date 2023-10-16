import { Button } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { Box, Grid } from '@mui/material';
import { FC, RefObject } from 'react';

interface ChronogramBottomButtonsProps {
  isValid: boolean;
  onCancel: () => void;
  formRef: RefObject<HTMLFormElement>;
}

const ChronogramBottomButtonsComponent: FC<ChronogramBottomButtonsProps> = ({ isValid, onCancel, formRef }) => {
  const { t } = useTranslation();
  return (
    <Grid container justifyContent="flex-end" sx={{ p: 2 }}>
      <Box sx={{ pr: 2 }}>
        <Button type="button" variant="contained" buttonType="cancel" onClick={onCancel}>
          {t('billing.maintenance.chronogramManagement.cancelButtonLabel')}
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
          {t('billing.maintenance.chronogramManagement.searchButtonLabel')}
        </Button>
      </Box>
    </Grid>
  );
};
export default ChronogramBottomButtonsComponent;
