import React, { useState, FunctionComponent, createElement } from 'react';
import ChangeContractPage from '@/components/customer-experience/WorkflowComponents/ChangeContract';
import ChangeOwnershipPage from '@/components/customer-experience/WorkflowComponents/ChangeOwnership';
import ClientValidationPage from '@/components/customer-experience/WorkflowComponents/ClientValidation';
import ContactReportPage from '@/components/customer-experience/WorkflowComponents/ContactReport';
import CreateSupplyPage from '@/components/customer-experience/WorkflowComponents/CreateSupply';
import CreditRatingPage from '@/components/customer-experience/WorkflowComponents/CreditRating';
import PaymentAgreementPage from '@/components/customer-experience/WorkflowComponents/PaymentAgreement';
import TransferBailPage from '@/components/customer-experience/WorkflowComponents/TransferBail';
import ValidateDocsPage from '@/components/customer-experience/WorkflowComponents/ValidateDocs';
import InvoiceInitialAmount from '@/components/customer-experience/WorkflowComponents/InvoiceInitialAmount';
import { MainLayout } from '@/layouts';
import { Button } from '@/components';
import { useWorkflow } from '@/context';

interface ComponentMap {
  [key: string]: FunctionComponent;
}

const componentMap: ComponentMap = {
  ChangeContractPage,
  ChangeOwnershipPage,
  ClientValidationPage,
  ContactReportPage,
  CreateSupplyPage,
  CreditRatingPage,
  PaymentAgreementPage,
  TransferBailPage,
  ValidateDocsPage,
  InvoiceInitialAmount,
};

const Workflow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { workflowTitle, workflowSteps } = useWorkflow();

  const currentComponent = workflowSteps.find((comp) => comp.step === currentStep);

  return (
    <MainLayout title={workflowTitle}>
      {currentComponent && createElement(componentMap[currentComponent.componentName])}
      {currentStep === workflowSteps.length ? (
        <Button
          onClick={() => {
            console.log('finaliza');
          }}
        >
          Finalizar
        </Button>
      ) : (
        <Button
          onClick={() => {
            if (currentStep < workflowSteps.length) {
              setCurrentStep((prev) => prev + 1);
            }
          }}
        >
          Siguiente
        </Button>
      )}
    </MainLayout>
  );
};

export default Workflow;
