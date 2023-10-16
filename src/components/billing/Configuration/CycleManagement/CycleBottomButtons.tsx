import { Button } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { Box, Grid } from '@mui/material';
import { FC, RefObject } from 'react';

interface CycleBottomButtonsProps {
  isValid: boolean;
  onCancel: () => void;
  formRef: RefObject<HTMLFormElement>;
}

const CycleBottomButtonsComponent: FC<CycleBottomButtonsProps> = ({ isValid, onCancel, formRef }) => {
  const { t } = useTranslation();
  return (
    <Grid container justifyContent="flex-end" sx={{ pr: 5.2, mt: 4 }}>
      <Box sx={{ pr: 2 }}>
        <Button type="button" variant="contained" buttonType="cancel" onClick={onCancel}>
          {t('billing.maintenance.cyclesManagement.cancelButtonLabel')}
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
          {t('billing.maintenance.cyclesManagement.saveButtonLabel')}
        </Button>
      </Box>
    </Grid>
  );
};
export default CycleBottomButtonsComponent;
