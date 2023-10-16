import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import { ModalOptionsConfiguration } from '@/models/commons';
import { ProcessFunctionalSegmentFormValues } from '@/models/customer-experience';
import { Checkbox, Select, TextField } from '@/components/ui';
import { useTranslation } from '@/hooks';

interface Props {
  onSubmit: (modalConfig: ModalOptionsConfiguration) => void;
}

export const ProcessFunctionalSegmentForm: FC<Props> = () => {
  const { t } = useTranslation();

  const suppliesOptions = [{}];

  const civilStatusOptions = [
    { id: 1, name: t('customerExperience.changeOwnership.single') },
    { id: 2, name: t('customerExperience.changeOwnership.married') },
    { id: 3, name: t('customerExperience.changeOwnership.widowed') },
    { id: 4, name: t('customerExperience.changeOwnership.freeUnion') },
  ];

  const typeIdOptions = [
    { id: 1, name: t('customerExperience.changeOwnership.idCard') },
    { id: 2, name: t('customerExperience.changeOwnership.passport') },
    { id: 3, name: t('customerExperience.changeOwnership.rnc') },
  ];

  const genderOptions = [
    { id: 1, name: t('customerExperience.changeOwnership.male') },
    { id: 2, name: t('customerExperience.changeOwnership.female') },
  ];

  const form = useForm<ProcessFunctionalSegmentFormValues>({});

  const {
    control,
    formState: { errors },
  } = form;

  return (
    <>
      <Grid container spacing={4} mt={2} px={4} paddingBottom={4}>
        <Grid item xs={12} md={6}>
          <Select
            name="suppliesChanged"
            label={t('customerExperience.changeOwnership.suppliesChanged')}
            rules={{
              required: t('formValidationsErrors.requiredErrorLabel'),
            }}
            control={control}
            options={suppliesOptions}
            errors={errors}
            keyValue="id"
            keyLabel="name"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            name="civilStatus"
            label={t('customerExperience.changeOwnership.civilStatus')}
            rules={{
              required: t('formValidationsErrors.requiredErrorLabel'),
            }}
            control={control}
            options={civilStatusOptions}
            errors={errors}
            keyValue="id"
            keyLabel="name"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            name="idType"
            label={t('customerExperience.changeOwnership.idType')}
            rules={{
              required: t('formValidationsErrors.requiredErrorLabel'),
            }}
            control={control}
            options={typeIdOptions}
            errors={errors}
            keyValue="id"
            keyLabel="name"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Checkbox
            name="spouse"
            label={t('customerExperience.changeOwnership.spouse')}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
            errors={errors}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="customerDocument" label={t('customerExperience.changeOwnership.customerDocument')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="nameSurname" label={t('customerExperience.changeOwnership.nameSurname')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="nameBusinessName" label={t('customerExperience.changeOwnership.nameBusinessName')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="idSpouse" label={t('customerExperience.changeOwnership.idSpouse')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            name="gender"
            label={t('customerExperience.changeOwnership.gender')}
            rules={{
              required: t('formValidationsErrors.requiredErrorLabel'),
            }}
            control={control}
            options={genderOptions}
            errors={errors}
            keyValue="id"
            keyLabel="name"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="spousePhone" label={t('customerExperience.changeOwnership.spousePhone')} errors={errors} control={control} />
        </Grid>
      </Grid>
    </>
  );
};
