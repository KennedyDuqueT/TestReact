import { useForm } from 'react-hook-form';
import { FC } from 'react';

import { ModalOptionsConfiguration } from '@/models/commons';
import { CreditRatingExternalFormValues } from '@/models/customer-experience';
import { Button, TextField, TextArea } from '@/components/ui';
import { Box, Grid } from '@mui/material';
import { useTranslation } from '@/hooks';

interface Props {
  onSubmit: () => void;
  onCancel: (modalConfig: ModalOptionsConfiguration) => void;
}

export const CreditRatingExternalForm: FC<Props> = ({ onSubmit, onCancel }) => {
  const { t } = useTranslation();

  const form = useForm<CreditRatingExternalFormValues>({});

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
          <TextField
            name="rdBuroBalance"
            label={t('customerExperience.creditRating.rdBuroBalance')}
            errors={errors}
            control={control}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            name="resultCreditRating"
            label={t('customerExperience.creditRating.resultCreditRating')}
            errors={errors}
            control={control}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            name="techBuroBalance"
            label={t('customerExperience.creditRating.techBuroBalance')}
            errors={errors}
            control={control}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            name="cebBuroBalance"
            label={t('customerExperience.creditRating.cebBuroBalance')}
            errors={errors}
            control={control}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            name="mcrBuroBalance"
            label={t('customerExperience.creditRating.mcrBuroBalance')}
            errors={errors}
            control={control}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            name="evergoBuroBalance"
            label={t('customerExperience.creditRating.evergoBuroBalance')}
            errors={errors}
            control={control}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            name="interenergyBuroBalance"
            label={t('customerExperience.creditRating.interenergyBuroBalance')}
            errors={errors}
            control={control}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            name="edesBuroBalance"
            label={t('customerExperience.creditRating.edesBuroBalance')}
            errors={errors}
            control={control}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
          />
        </Grid>
      </Grid>

      <Box display="flex" width={1} justifyContent="flex-end" mt={4}>
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
