import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Grid } from '@mui/material';
import { ModalConfiguration } from '@/models/commons';
import { NewSupplyFormValues } from '@/models/customer-experience';
import { Button, Select, TextField } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { useSupplyRequest } from '@/context';
import { SuccessIcon, AdvertenceIcon } from '@/assets';

interface Props {
  onSubmit: (modalConfig: ModalConfiguration) => void;
}

export const NewSupplyForm: FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation();
  const { services, actions } = useSupplyRequest();

  const companies = [
    { id: 1, name: 'Tech Brothers' },
    { id: 2, name: 'CEB' },
    { id: 3, name: 'INTERENERGY' },
    { id: 4, name: 'EVERGO' },
  ];

  const contracts = [
    { id: 1, name: t('customerExperience.createNewSupply.prepaid') },
    { id: 2, name: t('customerExperience.createNewSupply.postPaid') },
  ];

  const currencies = [
    { id: 1, name: 'USD' },
    { id: 2, name: 'DOP' },
  ];

  const clients = [
    { id: 1, name: t('customerExperience.createNewSupply.realOwner') },
    { id: 2, name: t('customerExperience.createNewSupply.realTenant') },
    { id: 3, name: t('customerExperience.createNewSupply.juridicOwner') },
    { id: 4, name: t('customerExperience.createNewSupply.juridicTenant') },
    { id: 5, name: t('customerExperience.createNewSupply.condominioGovernmental') },
    { id: 6, name: t('customerExperience.createNewSupply.groupWithoutLucre') },
    { id: 7, name: t('customerExperience.createNewSupply.others') },
  ];

  const propertyConditions = [
    { id: 1, name: t('customerExperience.createNewSupply.own') },
    { id: 2, name: t('customerExperience.createNewSupply.rent') },
  ];

  const civilStatus = [
    { id: 1, name: t('customerExperience.createNewSupply.single') },
    { id: 2, name: t('customerExperience.createNewSupply.married') },
    { id: 3, name: t('customerExperience.createNewSupply.freeJoin') },
    { id: 4, name: t('customerExperience.createNewSupply.divorced') },
    { id: 5, name: t('customerExperience.createNewSupply.widower') },
  ];

  const genders = [
    { id: 1, name: t('customerExperience.createNewSupply.female') },
    { id: 2, name: t('customerExperience.createNewSupply.male') },
  ];

  const rates = [
    { id: 1, name: t('customerExperience.createNewSupply.residencial') },
    { id: 2, name: t('customerExperience.createNewSupply.commercial') },
    { id: 3, name: t('customerExperience.createNewSupply.works') },
  ];

  const form = useForm<NewSupplyFormValues>({});

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = form;

  const handleCancel = () => {
    form.reset({});
  };

  const onContinue = (values: NewSupplyFormValues) => {
    // TODO send request to API
    if (values.company === 2) {
      onSubmit({
        buttonText: t('components.alertResultModal.acceptButtonLabel'),
        icon: SuccessIcon,
        message: t('customerExperience.createNewSupply.userCreatedSuccess'),
        modalTitle: t('customerExperience.createNewSupply.createdUser'),
      });
    } else {
      onSubmit({
        buttonText: t('components.alertResultModal.goBackButtonLabel'),
        icon: AdvertenceIcon,
        message: t('customerExperience.createNewSupply.userCreatedError'),
        modalTitle: t('customerExperience.createNewSupply.errorCreateUser'),
      });
    }
  };

  useEffect(() => {
    actions?.getAllSupplyRequest();
  }, []);

  return (
    <>
      <Grid container spacing={3} mt={2} px={4}>
        <Grid item xs={12} md={6}>
          <Select
            id="supply-company"
            name="company"
            label={t('customerExperience.createNewSupply.selectCompany')}
            rules={{
              required: t('formValidationsErrors.requiredErrorLabel'),
            }}
            control={control}
            options={companies}
            errors={errors}
            keyValue="id"
            keyLabel="name"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            id="supply-service"
            name="service"
            label={t('customerExperience.createNewSupply.serviceType')}
            control={control}
            options={services}
            errors={errors}
            keyValue="id"
            keyLabel="name"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="idType" label={t('customerExperience.createNewSupply.idType')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            id="supply-contract"
            name="contract"
            label={t('customerExperience.createNewSupply.contractType')}
            rules={{
              required: t('formValidationsErrors.requiredErrorLabel'),
            }}
            control={control}
            options={contracts}
            errors={errors}
            keyValue="id"
            keyLabel="name"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="clientId" label={t('customerExperience.createNewSupply.clientId')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            id="supply-currency"
            name="currency"
            label={t('customerExperience.createNewSupply.contractCurrency')}
            rules={{
              required: t('formValidationsErrors.requiredErrorLabel'),
            }}
            control={control}
            options={currencies}
            errors={errors}
            keyValue="id"
            keyLabel="name"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="businessName" label={t('customerExperience.createNewSupply.businessName')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            id="supply-client"
            name="client"
            label={t('customerExperience.createNewSupply.clientType')}
            rules={{
              required: t('formValidationsErrors.requiredErrorLabel'),
            }}
            control={control}
            options={clients}
            errors={errors}
            keyValue="id"
            keyLabel="name"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            id="supply-propertyCondition"
            name="propertyCondition"
            label={t('customerExperience.createNewSupply.propertyCondition')}
            rules={{
              required: t('formValidationsErrors.requiredErrorLabel'),
            }}
            control={control}
            options={propertyConditions}
            errors={errors}
            keyValue="id"
            keyLabel="name"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            id="supply-civilStatus"
            name="civilStatus"
            label={t('customerExperience.createNewSupply.civilStatus')}
            rules={{
              required: t('formValidationsErrors.requiredErrorLabel'),
            }}
            control={control}
            options={civilStatus}
            errors={errors}
            keyValue="id"
            keyLabel="name"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            id="supply-gender"
            name="gender"
            label={t('customerExperience.createNewSupply.gender')}
            rules={{
              required: t('formValidationsErrors.requiredErrorLabel'),
            }}
            control={control}
            options={genders}
            errors={errors}
            keyValue="id"
            keyLabel="name"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="nameSpouse" label={t('customerExperience.createNewSupply.nameSpouse')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="phone" label={t('customerExperience.createNewSupply.phone')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="phone2" label={t('customerExperience.createNewSupply.phone') + ' 2'} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="idSpouse" label={t('customerExperience.createNewSupply.idSpouse')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="phoneSpouse" label={t('customerExperience.createNewSupply.phoneSpouse')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            id="supply-request"
            name="request"
            label={t('customerExperience.createNewSupply.requestType')}
            control={control}
            options={[]}
            errors={errors}
            keyValue="id"
            keyLabel="name"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="email" label={t('customerExperience.createNewSupply.email')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            id="supply-rate"
            name="rate"
            label={t('customerExperience.createNewSupply.rateType')}
            rules={{
              required: t('formValidationsErrors.requiredErrorLabel'),
            }}
            control={control}
            options={rates}
            errors={errors}
            keyValue="id"
            keyLabel="name"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="email2" label={t('customerExperience.createNewSupply.email') + ' 2'} errors={errors} control={control} />
        </Grid>
      </Grid>

      <Box display="flex" width={1} justifyContent="flex-end" mt={4}>
        <Box display="flex">
          <Button variant="contained" buttonType="cancel" onClick={handleCancel}>
            {t('components.button.cancel')}
          </Button>

          <Box sx={{ mr: 2 }} />

          <Button variant="contained" buttonType="primary" onClick={handleSubmit(onContinue)}>
            {t('customerExperience.createNewSupply.continueRequest')}
          </Button>
        </Box>
      </Box>
    </>
  );
};
