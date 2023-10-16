import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm, useWatch } from 'react-hook-form';
import { Grid } from '@mui/material';
import { useDebtTransferIndividual } from '@/context';
import { useTranslation } from '@/hooks';
import { ActionButtons, CommonButton, Select, TextField } from '@/components';

interface FormValues {
  clientName: string;
  debtSupply: number;
  destinationSupply: number;
}

interface Props {}

export const TransferSupplySelector: FC<Props> = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { client, debtSupplies, destinationSupplies, selectedSupplies, actions } = useDebtTransferIndividual();

  const isValid = selectedSupplies.debt > 0 && selectedSupplies.destination > 0;

  const form = useForm<FormValues>({
    defaultValues: { clientName: client, debtSupply: selectedSupplies.debt, destinationSupply: selectedSupplies.destination },
  });

  const {
    control,
    setValue,
    formState: { errors },
  } = form;

  const debtSupply = useWatch({ control, name: 'debtSupply' });
  const destinationSupply = useWatch({ control, name: 'destinationSupply' });

  useEffect(() => {
    actions?.selectDebtSupplyToTransfer(Number(debtSupply));
  }, [debtSupply]);

  useEffect(() => {
    actions?.selectDestinationSupply(Number(destinationSupply));
  }, [destinationSupply]);

  useEffect(() => {
    setValue('clientName', client, { shouldValidate: true });
  }, [client]);

  const buttons: CommonButton[] = [
    {
      label: t('components.button.cancel'),
      type: 'cancel',
      onClick: router.back,
    },
    {
      label: t('components.button.process'),
      type: 'primary',
      onClick: () => actions?.handleProcessTransfer,
      disabled: !isValid,
    },
  ];

  return (
    <>
      <Grid container spacing={3} mt={2}>
        <Grid item xs={12}>
          <TextField name="clientName" label={t('portfolio.debtTransferIndividual.clientLabel')} errors={errors} control={control} disabled />
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            name="debtSupply"
            label={t('portfolio.debtTransferIndividual.selectDebtSupplyLabel')}
            rules={{
              required: t('formValidationsErrors.requiredErrorLabel'),
            }}
            control={control}
            options={debtSupplies}
            errors={errors}
            keyValue="id"
            keyLabel="supplyNumber"
            disabled={debtSupplies.length === 0}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            name="destinationSupply"
            label={t('portfolio.debtTransferIndividual.selectDestinationSupplyLabel')}
            rules={{
              required: t('formValidationsErrors.requiredErrorLabel'),
            }}
            control={control}
            options={destinationSupplies}
            errors={errors}
            keyValue="id"
            keyLabel="supplyNumber"
            disabled={destinationSupplies.length === 0}
          />
        </Grid>

        <Grid item xs={12}>
          <ActionButtons buttons={buttons} />
        </Grid>
      </Grid>
    </>
  );
};
