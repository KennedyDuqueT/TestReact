import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BillingModels } from '@/models';
import ConceptFormComponent from './ConceptForm';
import ConceptCalculationParametersModalComponent from './ConceptCalculationParametersModal';
import { conceptCalculationParametersInitialValue, conceptFormInitialValue } from '@/models/billing';
import { useConceptManagement, useDataMastersManagement } from '@/context/billing';

const ConceptCreateOrEditViewComponent: FC = () => {
  const [openCalculationParametersModal, setOpenCalculationParametersModal] = useState(false);
  const { actions } = useConceptManagement();
  const { actions: dataMasterAction } = useDataMastersManagement();
  const form = useForm<BillingModels.ConceptInterface>({
    defaultValues: conceptFormInitialValue,
  });
  const {
    control,
    reset,
    formState: { errors },
    watch,
    setValue,
    getValues,
  } = form;

  const formParameters = useForm<BillingModels.ConceptCalculationParametersInterface>({
    defaultValues: conceptCalculationParametersInitialValue
  });
  const {
    control: controlParameters,
    formState: { errors: errorsParameters },
    setValue: setValueParameters,
  } = formParameters;

  const onCancelCalculationParametersModal = () => {
    setOpenCalculationParametersModal(false);
    reset(conceptCalculationParametersInitialValue);
  };

  const onOpenCalculationParametersModal = () => {
    const fieldConceptId = getValues('code')
    const fieldConceptDescription = getValues('description')
    setValueParameters('conceptCode', fieldConceptId)
    setValueParameters('description', fieldConceptDescription)
    setOpenCalculationParametersModal(true);
  };

  useEffect(() => {
    actions?.loadInitialInfo();
    dataMasterAction?.loadInitialInfo();
  }, []);

  return (
    <>
      <ConceptFormComponent
        setValue={setValue}
        control={control}
        errors={errors}
        watch={watch}
        onOpenCalculationParametersModal={onOpenCalculationParametersModal}
      ></ConceptFormComponent>

      <ConceptCalculationParametersModalComponent
  
        control={controlParameters}
        errors={errorsParameters}
        onCancelCalculationParametersModal={onCancelCalculationParametersModal}
        openCalculationParametersModal={openCalculationParametersModal}
      ></ConceptCalculationParametersModalComponent>
    </>
  );
};

export default ConceptCreateOrEditViewComponent;
