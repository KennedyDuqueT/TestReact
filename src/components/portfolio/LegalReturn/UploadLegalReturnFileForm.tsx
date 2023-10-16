import { useForm, useWatch } from 'react-hook-form';
import { FC } from 'react';

import { Button, InputFile } from '@/components/ui';
import { Box, Grid } from '@mui/material';
import { useTranslation } from '@/hooks';
import { LegalReturnFormValues } from '@/models/portfolio';
import { useLegalReturn } from '@/context';

interface Props {}

export const UploadLegalReturnFileForm: FC<Props> = () => {
  const { t } = useTranslation();
  const { actions } = useLegalReturn();

  const form = useForm<LegalReturnFormValues>({
    defaultValues: {
      supplyListFileToProcess: '',
    },
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = form;

  const fileToUpload = useWatch({ control, name: 'supplyListFileToProcess' });

  const onSubmit = (formValues: LegalReturnFormValues) => {
    actions?.uploadLegalReturnFile(formValues);
  };

  return (
    <>
      <Grid container spacing={3} mt={2} px={4}>
        <Grid item xs={12} md={8}>
          <InputFile
            name="supplyListFileToProcess"
            label={t('portfolio.legalReturn.labels.fileToImport')}
            errors={errors}
            control={control}
            type="file"
            buttonLabel={t('customerExperience.contactReport.load')}
            emptyFileLabel={t('customerExperience.contactReport.withoutFile')}
          />
        </Grid>
      </Grid>

      <Box display="flex" width={1} justifyContent="flex-end" mt={4}>
        <Button disabled={!fileToUpload} variant="contained" buttonType="primary" onClick={handleSubmit(onSubmit)}>
          {t('components.button.process')}
        </Button>
      </Box>
    </>
  );
};
