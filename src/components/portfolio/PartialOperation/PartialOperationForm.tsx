import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Box, Grid } from '@mui/material';
import { PartialOperationFormValues } from '@/models/portfolio';
import { Button, Select, TextField } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { usePartialOperation } from '@/context';
import { InvoiceList } from './InvoiceList';

interface FormValues extends PartialOperationFormValues {}

export const PartialOperationForm = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { companies, reasons, orderTypes, selectedSupply, actions } = usePartialOperation();

  const form = useForm<FormValues>({
    defaultValues: {
      contractNumber: selectedSupply.contractNumber,
      contractType: selectedSupply.contractType,
      meterNumber: selectedSupply.meterNumber,
      serviceType: selectedSupply.serviceType,
    },
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = form;

  const onSumbit = (values: FormValues) => {
    actions?.createPartialOperation(values);
  };

  return (
    <>
      <Grid container spacing={3} mt={4} px={4}>
        <Grid item xs={12} md={6}>
          <TextField
            name="contractNumber"
            label={t('portfolio.partialOperation.form.contractNumberLabel')}
            errors={errors}
            control={control}
            disabled
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="contractType" label={t('portfolio.partialOperation.form.contractTypeLabel')} errors={errors} control={control} disabled />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField name="meterNumber" label={t('portfolio.partialOperation.form.meterNumberLabel')} errors={errors} control={control} disabled />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField name="serviceType" label={t('portfolio.partialOperation.form.serviceTypeLabel')} errors={errors} control={control} disabled />
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            id="portfolio-company"
            name="company"
            label={t('portfolio.partialOperation.form.companyLabel')}
            rules={{
              required: t('formValidationsErrors.requiredErrorLabel'),
            }}
            control={control}
            options={companies}
            errors={errors}
            keyValue="id"
            keyLabel="name"
            disabled={companies.length === 0}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            id="portfolio-orderType"
            name="orderType"
            label={t('portfolio.partialOperation.form.orderTypeLabel')}
            rules={{
              required: t('formValidationsErrors.requiredErrorLabel'),
            }}
            control={control}
            options={orderTypes}
            errors={errors}
            keyValue="id"
            keyLabel="name"
            disabled={orderTypes.length === 0}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            id="portfolio-reason"
            name="reason"
            label={t('portfolio.partialOperation.form.reasonLabel')}
            rules={{
              required: t('formValidationsErrors.requiredErrorLabel'),
            }}
            control={control}
            options={reasons}
            errors={errors}
            keyValue="id"
            keyLabel="name"
            disabled={reasons.length === 0}
          />
        </Grid>
      </Grid>

      <Box mt={4} width={1}>
        <InvoiceList />
      </Box>

      <Box display="flex" width={1} justifyContent="flex-end" mt={2}>
        <Box display="flex">
          <Button variant="contained" buttonType="cancel" onClick={router.back}>
            {t('components.button.cancel')}
          </Button>

          <Box sx={{ mr: 2 }} />

          <Button variant="contained" buttonType="primary" onClick={handleSubmit(onSumbit)}>
            {t('portfolio.partialOperation.buttons.createOperation')}
          </Button>
        </Box>
      </Box>
    </>
  );
};
