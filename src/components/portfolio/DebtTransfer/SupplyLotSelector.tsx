import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useDebtTransferMassive } from '@/context';
import { useTranslation } from '@/hooks';
import { Select } from '@/components';

export const SupplyLotSelector = () => {
  const { t } = useTranslation();
  const { supplyLots, selectedSupplyLotId, actions } = useDebtTransferMassive();

  const form = useForm<{ lotId: number }>({
    defaultValues: { lotId: selectedSupplyLotId },
  });

  const {
    control,
    formState: { errors },
  } = form;

  const lotId = useWatch({ control, name: 'lotId' });

  useEffect(() => {
    actions?.selectSupplyLot(lotId);
  }, [lotId]);

  return (
    <div>
      <Select
        name="lotId"
        label={t('portfolio.debtTransferMassive.selectLotLabel')}
        rules={{
          required: t('formValidationsErrors.requiredErrorLabel'),
        }}
        control={control}
        options={supplyLots}
        errors={errors}
        keyLabel="fullName"
        keyValue="id"
      />
    </div>
  );
};
