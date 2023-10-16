import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import { ModalConfiguration, ModalOptionsConfiguration } from '@/models/commons';
import { SupplyHasAttachedDocFormValues } from '@/models/customer-experience';
import { Button, TextField, TextArea } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { AdvertenceIcon } from '@/assets';

interface Props {
  onSubmit: (modalConfig: ModalOptionsConfiguration) => void;
  onShowMessage: (modalConfig: ModalConfiguration) => void;
  customerType: string;
}

export const SupplyHasAttachedDocForm: FC<Props> = ({ onSubmit, onShowMessage, customerType }) => {
  const { t } = useTranslation();
  const noWrap = { whiteSpace: 'nowrap' };
  const form = useForm<SupplyHasAttachedDocFormValues>({});

  const {
    control,
    formState: { errors },
  } = form;

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

  const onTransfer = () => {
    // TODO transfer
    // onShowMessage({
    //   buttonText: t('customerExperience.changeOwnership.return'),
    //   icon: AdvertenceIcon,
    //   message: t('customerExperience.changeOwnership.overdueMessage'),
    //   modalTitle: t('customerExperience.changeOwnership.overdueDebts'),
    // });
  };

  const onTransferOther = () => {
    // TODO transfer
  };

  const onEvolveProcess = () => {
    onShowMessage({
      buttonText: t('customerExperience.changeOwnership.return'),
      icon: AdvertenceIcon,
      message: t('customerExperience.changeOwnership.overdueMessage'),
      modalTitle: t('customerExperience.changeOwnership.overdueDebts'),
    });
  };

  const renderFileInputs = () => {
    const legalPerson =
      customerType === '2'
        ? [
            'copyProperty',
            'serviceReques',
            'idCardPassport',
            'companyConstituent',
            'currentMercantile',
            'legalizedDefinitive',
            'recordRnc',
            'currentPower',
          ]
        : ['idCardPassport', 'notarizedPower', 'propertyPurchase', 'apscerLetter'];

    return legalPerson.map((item) => (
      <Grid key={item} item xs={12} md={6}>
        <Grid container>
          <Grid item flex={1}>
            <TextField name={item} label={t(`customerExperience.clientValidation.${item}`)} errors={errors} control={control} />
          </Grid>

          <Grid item ml={3}>
            <Button variant="contained" buttonType={'primary'}>
              {t('customerExperience.clientValidation.visualize')}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    ));
  };

  return (
    <>
      <Grid container spacing={4} mt={2} px={4} paddingBottom={4}>
        {renderFileInputs()}

        <Grid item xs={12} mt={6}>
          <Grid container>
            <Grid item flex={1}>
              <Button variant="contained" buttonType="cancel" onClick={onTransfer} sx={noWrap}>
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
              <Button variant="contained" buttonType="primary" onClick={onEvolveProcess} sx={noWrap}>
                {t('customerExperience.clientValidation.evolveProcess')}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
