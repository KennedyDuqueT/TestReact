import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import { ModalOptionsConfiguration, ModalConfiguration } from '@/models/commons';
import { FunctionalClientValidationFormValues, ShareFormValues } from '@/models/customer-experience';
import { Button, Select, TextField, TextArea } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { SuccessIcon } from '@/assets';

interface Props {
  onSubmit: (modalConfig: ModalOptionsConfiguration) => void;
  onShowMessage: (modalConfig: ModalConfiguration) => void;
  onChange: (data: ShareFormValues) => void;
  hideButtons: boolean;
}

export const FunctionalClientValidationForm: FC<Props> = ({ onSubmit, onChange, hideButtons, onShowMessage }) => {
  const { t } = useTranslation();
  const noWrap = { whiteSpace: 'nowrap' };
  const [availableButtons, setAvailableButtons] = useState<boolean>(false);

  const customerTypeOptions = [
    { id: 1, name: t('customerExperience.clientValidation.physicalPerson') },
    { id: 2, name: t('customerExperience.clientValidation.legalPerson') },
  ];

  const validateDocsOptions = [
    { id: 1, name: t('customerExperience.clientValidation.supplyHasDocs') },
    { id: 2, name: t('customerExperience.clientValidation.supplyNoHasDocs') },
  ];

  const form = useForm<FunctionalClientValidationFormValues>({});

  const {
    control,
    formState: { errors },
    watch,
  } = form;

  const onTransferOther = () => {
    // TODO transfer
  };

  const onEvolveProcess = () => {
    onShowMessage({
      buttonText: t('customerExperience.clientValidation.accept'),
      icon: SuccessIcon,
      message: t('customerExperience.clientValidation.finishProcedureMessage'),
      modalTitle: t('customerExperience.clientValidation.finishProcedure'),
    });
  };

  const onFinishProcess = () => {
    onSubmit({
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

  useEffect(() => {
    const subscription = watch((value) => {
      setAvailableButtons(Object.keys(control._formValues).filter((key) => key !== 'cancelMessage' && !control._formValues[key]).length === 0);
      onChange({
        showSecondForm: !!(value.customerType && String(value.documentationVal) === '1'),
        customerType: String(value.customerType),
      });
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <>
      <Grid container spacing={4} mt={2} px={4} paddingBottom={4}>
        <Grid item xs={12} md={6}>
          <TextField name="supplyNumber" label={t('customerExperience.clientValidation.supplyNumber')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container>
            <Grid item flex={1}>
              <TextField name="phone1" label={t('customerExperience.clientValidation.phone') + ' 1'} errors={errors} control={control} />
            </Grid>

            <Grid item flex={1} ml={3}>
              <TextField name="phone2" label={t('customerExperience.clientValidation.phone') + ' 2'} errors={errors} control={control} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            name="customerType"
            label={t('customerExperience.clientValidation.customerType')}
            rules={{
              required: t('formValidationsErrors.requiredErrorLabel'),
            }}
            control={control}
            options={customerTypeOptions}
            errors={errors}
            keyValue="id"
            keyLabel="name"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="email" label={t('customerExperience.clientValidation.email')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            name="documentationVal"
            label={t('customerExperience.clientValidation.documentationVal')}
            rules={{
              required: t('formValidationsErrors.requiredErrorLabel'),
            }}
            control={control}
            options={validateDocsOptions}
            errors={errors}
            keyValue="id"
            keyLabel="name"
          />
        </Grid>

        {!hideButtons && (
          <Grid item xs={12} mt={6}>
            <Grid container>
              <Grid item flex={1}>
                <Button variant="contained" buttonType="cancel" disabled={!availableButtons} sx={noWrap}>
                  {t('customerExperience.clientValidation.transferCustomer')}
                </Button>
              </Grid>

              <Grid item flex={1} ml={1}>
                <Button variant="contained" buttonType="secondary" onClick={onTransferOther} sx={noWrap}>
                  {t('customerExperience.clientValidation.transferProcedure')}
                </Button>
              </Grid>

              <Grid item flex={1}></Grid>

              <Grid item flex={1} textAlign="end">
                <Button variant="contained" buttonType="abort" onClick={onFinishProcess} sx={noWrap}>
                  {t('customerExperience.clientValidation.finishProcess')}
                </Button>
              </Grid>

              <Grid item flex={1} ml={1} textAlign="end">
                <Button variant="contained" buttonType="primary" disabled={!availableButtons} sx={noWrap} onClick={onEvolveProcess}>
                  {t('customerExperience.clientValidation.evolveProcess')}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </>
  );
};
