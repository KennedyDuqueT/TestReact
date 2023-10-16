import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Grid } from '@mui/material';
import { ModalConfiguration, ModalOptionsConfiguration } from '@/models/commons';
import { FunctionalSegmentProcessFormValues } from '@/models/customer-experience';
import { Button, Select, TextField, Checkbox, TextArea, MultiSelect } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { AdvertenceIcon } from '@/assets';

export interface ChangeProps {
  showIncludeReport: boolean;
  showRequireAuthorization: boolean;
}

interface Props {
  onSubmit: (modalConfig: ModalConfiguration) => void;
  onCancel: (modalConfig: ModalOptionsConfiguration) => void;
  onChange: (data: ChangeProps) => void;
}

export const FunctionalSegmentProcessForm: FC<Props> = ({ onSubmit, onCancel, onChange }) => {
  const { t } = useTranslation();

  const options = [
    { id: 1, name: t('customerExperience.changeContract.yes') },
    { id: 2, name: t('customerExperience.changeContract.no') },
  ];

  const overdueBillsOptions = [
    { id: 1, name: 'Factura vencida 1' },
    { id: 2, name: 'Factura vencida 2' },
  ];

  const amountFeesOptions = new Array(20).fill('').map((_, index) => ({ id: index + 1, name: String(index + 1) }));

  const form = useForm<FunctionalSegmentProcessFormValues>({
    defaultValues: { overdueBills: [] },
  });

  const {
    control,
    formState: { errors },
    watch,
  } = form;

  const handleCancel = () => {
    onCancel({
      buttonSucessText: t('customerExperience.changeOwnership.save'),
      buttonCancelText: t('components.button.cancel'),
      modalTitle: t('customerExperience.changeOwnership.finishProcedure'),
      message: t('customerExperience.changeOwnership.finishProcedureMessage'),
      input: (
        <Grid container mb={6} mt={5}>
          <Grid item xs={12}>
            <TextArea
              name="cancelMessage"
              label={t('customerExperience.changeOwnership.observations')}
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
    onSubmit({
      buttonText: t('customerExperience.paymentAgreement.accept'),
      icon: AdvertenceIcon,
      message: t('customerExperience.paymentAgreement.initialAmountNoRepresent'),
      modalTitle: t('customerExperience.paymentAgreement.evolveProcess'),
    });
  };

  useEffect(() => {
    const subscription = watch((value) => {
      onChange({
        showIncludeReport: !!value.inclueReport,
        showRequireAuthorization: !!value.authorizationRequired,
      });
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <>
      <Grid container spacing={3} mt={2} px={4}>
        <Grid item xs={12} md={6}>
          <TextField name="totalSupply" label={t('customerExperience.paymentAgreement.totalSupply')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            id="totalOverdue"
            name="totalOverdue"
            label={t('customerExperience.paymentAgreement.totalOverdue')}
            control={control}
            options={options}
            errors={errors}
            keyValue="id"
            keyLabel="name"
            disabled
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            id="typeCurrency"
            name="typeCurrency"
            label={t('customerExperience.paymentAgreement.typeCurrency')}
            control={control}
            options={options}
            errors={errors}
            keyValue="id"
            keyLabel="name"
            disabled
          />
        </Grid>

        <Grid item xs={12} md={6}></Grid>

        <Grid item xs={12} md={6}>
          <MultiSelect
            id="overdueBills"
            name="overdueBills"
            label={t('customerExperience.paymentAgreement.overdueBills')}
            control={control}
            options={overdueBillsOptions}
            errors={errors}
            keyValue="id"
            keyLabel="name"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="overdueInvoice" label={t('customerExperience.paymentAgreement.overdueInvoice')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            id="amountFees"
            name="amountFees"
            label={t('customerExperience.paymentAgreement.amountFees')}
            control={control}
            options={amountFeesOptions}
            errors={errors}
            keyValue="id"
            keyLabel="name"
          />
        </Grid>

        <Grid item xs={12} md={6} display="flex">
          <Button style={{ flex: 1 }} variant="contained" buttonType="primary">
            {t('customerExperience.paymentAgreement.viewCustomerAccount')}
          </Button>
        </Grid>

        <Grid item xs={12} md={6} display="flex" flexDirection="row">
          <Checkbox name="inclueReport" label={t('customerExperience.paymentAgreement.inclueReport')} control={control} errors={errors} />
          <Checkbox
            name="authorizationRequired"
            label={t('customerExperience.paymentAgreement.authorizationRequired')}
            control={control}
            errors={errors}
          />
        </Grid>
      </Grid>

      <Box display="flex" width={1} justifyContent="flex-end" mt={4}>
        <Box display="flex" width={1} justifyContent="flex-end">
          <Box sx={{ flex: 1 }} />

          <Button variant="contained" buttonType="abort" onClick={handleCancel} style={{ marginRight: 24 }}>
            {t('customerExperience.paymentAgreement.finishProcedure')}
          </Button>

          <Button variant="contained" buttonType="primary" onClick={onContinue}>
            {t('customerExperience.paymentAgreement.evolveProcess')}
          </Button>
        </Box>
      </Box>
    </>
  );
};
