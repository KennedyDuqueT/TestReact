import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

import { ModalOptionsConfiguration } from '@/models/commons';
import { UploadPropertyDocsFormValues } from '@/models/customer-experience';
import { InputFile } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { Grid } from '@mui/material';

interface Props {
  onSubmit: () => void;
  onCancel: (modalConfig: ModalOptionsConfiguration) => void;
}

export const UploadPropertyDocsForm: FC<Props> = () => {
  const { t } = useTranslation();

  const form = useForm<UploadPropertyDocsFormValues>({});

  const {
    control,
    formState: { errors },
  } = form;

  return (
    <Grid container spacing={3} mt={2} px={4}>
      <Grid item xs={12} md={6} mt={-2}>
        <FormControl fullWidth>
          <FormLabel>{t('customerExperience.validateDocs.hasTitleProperty')}</FormLabel>

          <RadioGroup>
            <Grid container>
              <Grid item flex={1}>
                <FormControlLabel value="light" control={<Radio />} label={t('customerExperience.validateDocs.yesHasTitle')} />
              </Grid>
              <Grid item flex={1}>
                <FormControlLabel value="dark" control={<Radio />} label={t('customerExperience.validateDocs.noHasTitle')} />
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12} md={6}>
        <InputFile
          name="titleProperty"
          label={t('customerExperience.validateDocs.titleProperty')}
          errors={errors}
          control={control}
          type="file"
          buttonLabel={t('customerExperience.contactReport.load')}
          emptyFileLabel={t('customerExperience.contactReport.withoutFile')}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <InputFile
          name="idOwnerProperty"
          label={t('customerExperience.validateDocs.idOwnerProperty')}
          errors={errors}
          control={control}
          type="file"
          buttonLabel={t('customerExperience.contactReport.load')}
          emptyFileLabel={t('customerExperience.contactReport.withoutFile')}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <InputFile
          name="buyContractProperty"
          label={t('customerExperience.validateDocs.buyContractProperty')}
          errors={errors}
          control={control}
          type="file"
          buttonLabel={t('customerExperience.contactReport.load')}
          emptyFileLabel={t('customerExperience.contactReport.withoutFile')}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <InputFile
          name="letterRequestService"
          label={t('customerExperience.validateDocs.letterRequestService')}
          errors={errors}
          control={control}
          type="file"
          buttonLabel={t('customerExperience.contactReport.load')}
          emptyFileLabel={t('customerExperience.contactReport.withoutFile')}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <InputFile
          name="currentNotarizedPower"
          label={t('customerExperience.validateDocs.currentNotarizedPower')}
          errors={errors}
          control={control}
          type="file"
          buttonLabel={t('customerExperience.contactReport.load')}
          emptyFileLabel={t('customerExperience.contactReport.withoutFile')}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <InputFile
          name="others"
          label={t('customerExperience.validateDocs.others')}
          errors={errors}
          control={control}
          type="file"
          buttonLabel={t('customerExperience.contactReport.load')}
          emptyFileLabel={t('customerExperience.contactReport.withoutFile')}
        />
      </Grid>
    </Grid>
  );
};
