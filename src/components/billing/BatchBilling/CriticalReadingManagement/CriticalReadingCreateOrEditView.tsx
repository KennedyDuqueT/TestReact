import { FC, useEffect, useState } from 'react';
import { BillingModels } from '@/models';
import { useForm } from 'react-hook-form';
import { criticalReadingSearchInitialValue, criticalReadingInitialValue } from '@/models/billing';
import CriticalReadingFormSearchComponent from './CriticalReadingFormSearch';
import CriticalReadingTableViewComponent from './CriticalReadingTableView';
import { useCriticalReading } from '@/context/billing';
import CriticalReadingDetailModalComponent from './CriticalReadingDetailModal';
import { AlertResultModalComponent } from '@/components/ui';
import { ModalConfiguration } from '@/models/commons';
import { modalConfigurationInitialValue } from './CriticalReadingManagement.constants';
import { AdvertenceIcon, SuccessIcon } from '@/assets';
import { useTranslation } from '@/hooks';

const CriticalReadingCreateOrEditViewComponent: FC = () => {
  const [criticalReadingInfo, setCriticalReadingInfo] = useState([criticalReadingInitialValue]);
  const { actions, criticalReadingResultOfSearch } = useCriticalReading();
  const [openModalDetail, setOpenModalDetail] = useState(false);
  const [selectedCriticalReading, setSelectedCriticalReading] = useState<number[]>([]);
  const [openAlertModal, setAlertOpenModal] = useState(false);
  const [alertModalConfig, setAlertModalConfig] = useState<ModalConfiguration>(modalConfigurationInitialValue);
  const { t } = useTranslation();

  const formSearch = useForm<BillingModels.CriticalReadingSearchInterface>({
    defaultValues: criticalReadingSearchInitialValue,
  });

  const {
    control: controlFormSearch,
    formState: { errors: errorsFormSearch, isValid: isValidFormSearch },
  } = formSearch;

  const formDetail = useForm<BillingModels.CriticalReadingInterface>({
    defaultValues: criticalReadingInitialValue,
  });

  const {
    control: controlFormDetail,
    handleSubmit: handleSubmitFormDetail,
    formState: { errors: errorsFormDetail },
    getValues: getFormDetailValues,
  } = formDetail;

  const supplyDetail = getFormDetailValues().supply.toString();

  const onGenerateCriticalReading = async () => {
    if (await actions?.callSaveCriticalReading(selectedCriticalReading)) {
      setAlertModalConfig({
        buttonText: t('components.alertResultModal.acceptButtonLabel'),
        icon: SuccessIcon,
        message: t('billing.batchBilling.criticalReading.generateSuccessLabel') + supplyDetail,
        modalTitle: t('billing.batchBilling.criticalReading.generateSuccessModalTitle'),
      });
      setAlertOpenModal(true);
    } else {
      setAlertModalConfig({
        buttonText: t('components.alertResultModal.acceptButtonLabel'),
        icon: AdvertenceIcon,
        message: t('billing.batchBilling.criticalReading.generateErrorLabel'),
        modalTitle: t('billing.batchBilling.criticalReading.generateErrorModalTitle'),
      });
      setAlertOpenModal(true);
    }
  };

  const onCloseAlertModal = () => {
    setAlertOpenModal(false);
  };

  const onCancelFormSearch = () => {
    formSearch.reset(criticalReadingSearchInitialValue);
  };

  const onSearchCriticalReading = async (criticalReadingFormSearch: BillingModels.CriticalReadingSearchInterface) => {
    await actions?.searchCriticalReading(criticalReadingFormSearch);
    setCriticalReadingInfo([criticalReadingResultOfSearch]);
    setTimeout(() => {
      window.scroll({
        top: 2500,
        left: 0,
        behavior: 'smooth',
      });
    }, 1000);
  };

  const onDetailCriticalReading = (id: string) => {
    formDetail.reset(criticalReadingInfo.filter((criticalReadingItem) => criticalReadingItem.id === id)![0]);
    setOpenModalDetail(true);
  };

  useEffect(() => {
    actions?.loadInitialInfo();
  }, []);

  const onCancelModalEdit = () => {
    setOpenModalDetail(false);
  };

  const onSaveCriticalReading = async (dataFormEdit: BillingModels.CriticalReadingInterface) => {
    const indexOfCriticalReadingToEdit = criticalReadingInfo.findIndex((CriticalReading) => CriticalReading.id === dataFormEdit.id);
    if (await actions?.saveCriticalReading(dataFormEdit)) {
      const updatedCriticalReadingInfo = [...criticalReadingInfo];

      updatedCriticalReadingInfo[indexOfCriticalReadingToEdit] = {
        ...updatedCriticalReadingInfo[indexOfCriticalReadingToEdit],
        ...dataFormEdit,
      };
      setCriticalReadingInfo(updatedCriticalReadingInfo);
    }

    setOpenModalDetail(false);
  };

  return (
    <>
      <CriticalReadingFormSearchComponent
        control={controlFormSearch}
        errors={errorsFormSearch}
        onCancelFormSearch={onCancelFormSearch}
        isValidFormSearch={isValidFormSearch}
        formSearch={formSearch}
        onSearchCriticalReading={onSearchCriticalReading}
      ></CriticalReadingFormSearchComponent>

      {criticalReadingInfo.some((item) => item.id !== '') && (
        <CriticalReadingTableViewComponent
          criticalReadingInfo={criticalReadingInfo}
          setSelectedCriticalReading={setSelectedCriticalReading}
          onGenerateCriticalReading={onGenerateCriticalReading}
          onDetailCriticalReading={onDetailCriticalReading}
        ></CriticalReadingTableViewComponent>
      )}

      <CriticalReadingDetailModalComponent
        control={controlFormDetail}
        errors={errorsFormDetail}
        handleSubmit={handleSubmitFormDetail}
        onCancelModalEdit={onCancelModalEdit}
        onSaveCriticalReading={onSaveCriticalReading}
        openModalEdit={openModalDetail}
        supplyDetail={supplyDetail}
      ></CriticalReadingDetailModalComponent>

      <AlertResultModalComponent
        modalConfiguration={alertModalConfig}
        onClose={onCloseAlertModal}
        openModal={openAlertModal}
      ></AlertResultModalComponent>
    </>
  );
};

export default CriticalReadingCreateOrEditViewComponent;
