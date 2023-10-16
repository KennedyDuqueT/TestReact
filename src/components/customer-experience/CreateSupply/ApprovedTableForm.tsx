import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Grid } from '@mui/material';
import { ModalConfiguration } from '@/models/commons';
import { ApprovedTableFormValues } from '@/models/customer-experience';
import { Button, Select, TextField } from '@/components/ui';
import { useTranslation } from '@/hooks';

interface Props {
  onSubmit: (modalConfig: ModalConfiguration) => void;
}

export const ApprovedTableForm: FC<Props> = () => {
  const { t } = useTranslation();

  const noInterCostAuthValues = [
    { id: 1, name: t('customerExperience.approvedTable.commercialSuper') },
    { id: 2, name: t('customerExperience.approvedTable.manager') },
    { id: 3, name: t('customerExperience.approvedTable.commercialDirector') },
  ];

  const typeBailValues = [
    { id: 1, name: t('customerExperience.approvedTable.normalBail') },
    { id: 2, name: t('customerExperience.approvedTable.bankSecurity') },
  ];

  const form = useForm<ApprovedTableFormValues>({});

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = form;

  const handleCancel = () => {
    form.reset({});
  };

  const onContinue = () => {
    // TODO send request to API
  };

  return (
    <>
      <Grid container spacing={3} mt={2} px={4}>
        <Grid item xs={12} md={6}>
          <TextField name="totalNumberRows" label={t('customerExperience.approvedTable.totalNumberRows')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="totalPay" label={t('customerExperience.approvedTable.totalPay')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="totalEquipmentPower" label={t('customerExperience.approvedTable.totalEquipmentPower')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            id="noInterCostAuth"
            name="noInterCostAuth"
            label={t('customerExperience.approvedTable.noInterCostAuth')}
            rules={{
              required: t('formValidationsErrors.requiredErrorLabel'),
            }}
            control={control}
            options={noInterCostAuthValues}
            errors={errors}
            keyValue="id"
            keyLabel="name"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="totalQuantityEquip" label={t('customerExperience.approvedTable.totalQuantityEquip')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            id="typeBail"
            name="typeBail"
            label={t('customerExperience.approvedTable.typeBail')}
            control={control}
            options={typeBailValues}
            errors={errors}
            keyValue="id"
            keyLabel="name"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="totalKwh" label={t('customerExperience.approvedTable.totalKwh')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6} display="flex">
          <Button variant="contained" buttonType="cancel" onClick={handleCancel} style={{ flex: 1 }}>
            {t('customerExperience.approvedTable.send')}
          </Button>
        </Grid>
      </Grid>

      <Box display="flex" mt={7} px={4} width="100%">
        <Button variant="contained" buttonType="cancel" onClick={handleCancel}>
          {t('customerExperience.approvedTable.transferProcedureAtc')}
        </Button>

        <Box sx={{ flex: 1 }} />

        <Button variant="contained" buttonType="abort" onClick={handleSubmit(onContinue)} style={{ marginRight: 36 }}>
          {t('customerExperience.approvedTable.finishProcedure')}
        </Button>
        <Button variant="contained" buttonType="primary" onClick={handleSubmit(onContinue)}>
          {t('customerExperience.approvedTable.next')}
        </Button>
      </Box>
    </>
  );
};
