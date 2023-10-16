import { Modal } from '@/components/ui';
import { FC } from 'react';
import {
  AverageBillingViewComponent,
  CalculationMethodViewComponent,
  UnitsMeasureViewComponent,
  NatureConceptViewComponent,
  ServiceGroupViewComponent,
  TaxesViewComponent,
  BillingTypeViewComponent,
  ChargeTypeViewComponent,
  CalculationTypeViewComponent,
  BillingModeViewComponent,
} from './ParametersFormView';
import { ParametersConfigTypeEnum } from './ParametersConfigEnum';

interface ParametersFormModalProps {
  modalType?: ParametersConfigTypeEnum;
  modalTitle: string;
  openModalForm: boolean;
  onCancelModalForm: () => void;
  onSaveParameter: (parameter: ParametersConfigTypeEnum, dataForm: any) => void;
}

const ParametersFormModalComponent: FC<ParametersFormModalProps> = ({ modalType, modalTitle, onCancelModalForm, openModalForm, onSaveParameter }) => {
  const getFormComponent = () => {
    switch (modalType) {
      case ParametersConfigTypeEnum.NatureConcept:
        return <NatureConceptViewComponent onCancelModalForm={onCancelModalForm} onSaveParameter={onSaveParameter} />;

      case ParametersConfigTypeEnum.Taxes:
        return <TaxesViewComponent onCancelModalForm={onCancelModalForm} onSaveParameter={onSaveParameter} />;

      case ParametersConfigTypeEnum.UnitsMeasure:
        return <UnitsMeasureViewComponent onCancelModalForm={onCancelModalForm} onSaveParameter={onSaveParameter} />;

      case ParametersConfigTypeEnum.CalculationMethod:
        return <CalculationMethodViewComponent onCancelModalForm={onCancelModalForm} onSaveParameter={onSaveParameter} />;

      case ParametersConfigTypeEnum.ServiceGroup:
        return <ServiceGroupViewComponent />;

      case ParametersConfigTypeEnum.AverageBilling:
        return <AverageBillingViewComponent onCancelModalForm={onCancelModalForm} onSaveParameter={onSaveParameter} />;

      case ParametersConfigTypeEnum.BillingType:
        return <BillingTypeViewComponent onCancelModalForm={onCancelModalForm} onSaveParameter={onSaveParameter} />;

      case ParametersConfigTypeEnum.ChargeType:
        return <ChargeTypeViewComponent onCancelModalForm={onCancelModalForm} onSaveParameter={onSaveParameter} />;

      case ParametersConfigTypeEnum.CalculationType:
        return <CalculationTypeViewComponent onCancelModalForm={onCancelModalForm} onSaveParameter={onSaveParameter} />;

      case ParametersConfigTypeEnum.BillingMode:
        return <BillingModeViewComponent onCancelModalForm={onCancelModalForm} onSaveParameter={onSaveParameter} />;
    }
  };
  return (
    <Modal title={modalTitle} fontSize={21} maxWidth="sm" open={openModalForm} handleClose={onCancelModalForm} key={`${openModalForm}`}>
      {getFormComponent()}
    </Modal>
  );
};

export default ParametersFormModalComponent;
