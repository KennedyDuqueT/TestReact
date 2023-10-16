import { useForm } from 'react-hook-form';
import { FC } from 'react';

import { ModalOptionsConfiguration } from '@/models/commons';
import { LegalDocsFormValues } from '@/models/customer-experience';
import { Button, TextArea, InputFile } from '@/components/ui';
import { Box, Grid } from '@mui/material';
import { useTranslation } from '@/hooks';

interface Props {
  onSubmit: () => void;
  onCancel: (modalConfig: ModalOptionsConfiguration) => void;
}

export const LegalDocsForm: FC<Props> = ({ onSubmit, onCancel }) => {
  const { t } = useTranslation();

  const form = useForm<LegalDocsFormValues>({});

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = form;

  const handleCancel = () => {
    onCancel({
      buttonSucessText: t('customerExperience.creditRating.save'),
      buttonCancelText: t('components.button.cancel'),
      modalTitle: t('customerExperience.creditRating.cancelRequest'),
      message: t('customerExperience.creditRating.beforeCancelRequest'),
      input: (
        <Grid container mb={6} mt={5}>
          <Grid item xs={12}>
            <TextArea
              name="cancelMessage"
              label={t('customerExperience.creditRating.reasons')}
              errors={errors}
              control={control}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              rows={4}
            />
          </Grid>
        </Grid>
      ),
      onReset: () => form.reset({}),
      onSubmit: () => form.reset({}),
    });
  };

  const onContinue = () => {
    // TODO send request to API
    onSubmit();
  };

  return (
    <>
      <Grid container spacing={3} mt={2} px={4}>
        <Grid item xs={12} md={6}>
          <InputFile
            name="currentMercantileRegistry"
            label={t('customerExperience.validateDocs.currentMercantileRegistry')}
            errors={errors}
            control={control}
            type="file"
            buttonLabel={t('customerExperience.contactReport.load')}
            emptyFileLabel={t('customerExperience.contactReport.withoutFile')}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <InputFile
            name="legalLetterRequestService"
            label={t('customerExperience.validateDocs.legalLetterRequestService')}
            errors={errors}
            control={control}
            type="file"
            buttonLabel={t('customerExperience.contactReport.load')}
            emptyFileLabel={t('customerExperience.contactReport.withoutFile')}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <InputFile
            name="legalOthers"
            label={t('customerExperience.validateDocs.legalOthers')}
            errors={errors}
            control={control}
            type="file"
            buttonLabel={t('customerExperience.contactReport.load')}
            emptyFileLabel={t('customerExperience.contactReport.withoutFile')}
          />
        </Grid>
      </Grid>

      <Box display="flex" width={1} justifyContent="space-between" mt={6}>
        <Button variant="contained" buttonType="cancel" onClick={handleCancel}>
          {t('customerExperience.validateDocs.finishRequest')}
        </Button>
        <Box display="flex">
          <Button variant="contained" buttonType="cancel" onClick={handleCancel}>
            {t('components.button.cancel')}
          </Button>

          <Box sx={{ mr: 2 }} />

          <Button variant="contained" buttonType="primary" onClick={handleSubmit(onContinue)}>
            {t('customerExperience.creditRating.next')}
          </Button>
        </Box>
      </Box>
    </>
  );
};
