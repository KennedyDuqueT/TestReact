import React, { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Select, InputFile, Button, WrapperForm } from '@/components/ui';
import { useChangeOfOwnershipUploadDocuments } from '@/context';
import { useTranslation } from '@/hooks';
import { WorkflowButtons } from '@/components/customer-experience';

export const ChangeOfOwnershipUploadModule: FC = () => {
  const { t } = useTranslation();
  const { actions, catalogCustomerType } = useChangeOfOwnershipUploadDocuments();
  const { control, handleSubmit, watch, formState } = useForm();

  const { errors } = formState;
  const selectedType = watch('ownershipType');

  const isRegistry = true; // TODO: Replace for registry key
  const isRegistryMercantil = true; // TODO: Replace for registryMercantil key

  const inputFilesForType: Record<number, (string | null)[]> = {
    1: [
      t('customerExperience.changeOfOwnershipUploadDocuments.swornDeclaration'),
      t('customerExperience.changeOfOwnershipUploadDocuments.truthDeclaration'),
      t('customerExperience.changeOfOwnershipUploadDocuments.newOwnerID'),
      t('customerExperience.changeOfOwnershipUploadDocuments.representationPower'),
    ],
    2: [
      t('customerExperience.changeOfOwnershipUploadDocuments.propertyTitleCopy'),
      t('customerExperience.changeOfOwnershipUploadDocuments.apscerLetter'),
      t('customerExperience.changeOfOwnershipUploadDocuments.propertyOwnerID'),
      t('customerExperience.changeOfOwnershipUploadDocuments.representationPower'),
    ],
    3: [
      t('customerExperience.changeOfOwnershipUploadDocuments.swornDeclaration'),
      t('customerExperience.changeOfOwnershipUploadDocuments.truthDeclaration'),
      t('customerExperience.changeOfOwnershipUploadDocuments.apscerLetter'),
      t('customerExperience.changeOfOwnershipUploadDocuments.propertyOwnerID'),
      t('customerExperience.changeOfOwnershipUploadDocuments.propertyTenantID'),
      t('customerExperience.changeOfOwnershipUploadDocuments.currentMercantileRegister'),
      t('customerExperience.changeOfOwnershipUploadDocuments.serviceRequestLetter'),
      isRegistry ? null : t('customerExperience.changeOfOwnershipUploadDocuments.companyConstitutiveDocuments'),
      t('customerExperience.changeOfOwnershipUploadDocuments.representationPower'),
      t('customerExperience.changeOfOwnershipUploadDocuments.legalizedPurchaseContract'),
    ],
    4: [
      t('customerExperience.changeOfOwnershipUploadDocuments.swornDeclaration'),
      t('customerExperience.changeOfOwnershipUploadDocuments.truthDeclaration'),
      t('customerExperience.changeOfOwnershipUploadDocuments.applicantID'),
      t('customerExperience.changeOfOwnershipUploadDocuments.companyActOrRNC'),
      t('customerExperience.changeOfOwnershipUploadDocuments.serviceRequestLetter'),
      t('customerExperience.changeOfOwnershipUploadDocuments.currentMercantileRegister'),
      isRegistryMercantil ? null : t('customerExperience.changeOfOwnershipUploadDocuments.companyConstitutiveDocuments'),
      t('customerExperience.changeOfOwnershipUploadDocuments.representationPower'),
      t('customerExperience.changeOfOwnershipUploadDocuments.legalizedPurchaseContract'),
    ],
    5: [
      t('customerExperience.changeOfOwnershipUploadDocuments.currentMercantileRegisterCertification'),
      t('customerExperience.changeOfOwnershipUploadDocuments.condominiumRNCAct'),
      t('customerExperience.changeOfOwnershipUploadDocuments.condominiumRepresentativeID'),
      t('customerExperience.changeOfOwnershipUploadDocuments.condominiumDeclaration'),
      t('customerExperience.changeOfOwnershipUploadDocuments.condominiumConstitutionApproval'),
      t('customerExperience.changeOfOwnershipUploadDocuments.serviceContractAuthorizationAssemblyAct'),
      t('customerExperience.changeOfOwnershipUploadDocuments.condominiumServiceRequestLetter'),
    ],
    6: [t('customerExperience.changeOfOwnershipUploadDocuments.serviceRequestLetterWithDecree')],
  };

  const handleComplete = (data: any) => {
    console.log('TODO: request data', data);
  };

  const fetchCatalogs = async () => {
    await actions?.getCatalogs();
  };

  useEffect(() => {
    fetchCatalogs();
  }, []);

  return (
    <WrapperForm title={t('customerExperience.changeOfOwnershipUploadDocuments.titleModule')} variant="secondary">
      <form onSubmit={handleSubmit(handleComplete)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Select
              name="ownershipType"
              label={t('customerExperience.changeOfOwnershipUploadDocuments.selectLabel')}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              options={catalogCustomerType}
              errors={errors}
              keyLabel="name"
              keyValue="id"
            />
          </Grid>
          {selectedType &&
            inputFilesForType[selectedType].map(
              (name, index) =>
                name && (
                  <Grid item xs={6} key={index}>
                    <InputFile
                      name={`document-${index}`}
                      label={name}
                      errors={errors}
                      control={control}
                      type="file"
                      buttonLabel={t('customerExperience.changeOfOwnershipUploadDocuments.btnUploadDocument')}
                      rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                      emptyFileLabel={watch(`document-${index}`) || t('customerExperience.changeOfOwnershipUploadDocuments.documentEmptyLabel')}
                    />
                  </Grid>
                )
            )}
          <Grid item xs={12}>
            <Button type="submit">{t('customerExperience.changeOfOwnershipUploadDocuments.btnComplete')}</Button>
          </Grid>
        </Grid>
      </form>
      <WorkflowButtons />
    </WrapperForm>
  );
};

export default ChangeOfOwnershipUploadModule;
