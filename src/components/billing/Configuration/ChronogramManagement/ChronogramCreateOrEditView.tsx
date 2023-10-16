import { FC, LegacyRef, useRef, useState } from 'react';
import ChronogramFormFilterComponent from './ChronogramFormFilter';
import {
  ChronogramFilterInitialValue,
  ChronogramInitialValue,
  dummyChronogram,
  modalConfigurationInitialValue,
} from './ChronogramManagement.constants';
import { BillingModels } from '@/models';
import { useForm } from 'react-hook-form';
import ChronogramBottomButtonsComponent from './ChronogramBottomButtons';
import ChronogramSearchViewComponent from './ChronogramSearchView';
import ChronogramEditModalComponent from './ChronogramEditModal';
import ChronogramDetailModalComponent from './ChronogramDetailModal';
import { AlertResultModalComponent } from '@/components';
import { SuccessIcon } from '@/assets';
import { useTranslation } from '@/hooks';
import { ModalConfiguration } from '@/models/commons';

const ChronogramCreateOrEditViewComponent: FC = () => {
  const { t } = useTranslation();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDetail, setOpenModalDetail] = useState(false);
  const [openAlertModal, setAlertOpenModal] = useState(false);
  const [chronogramToEdit, setChronogramToEdit] = useState<BillingModels.ChronogramInterface>(ChronogramInitialValue);
  const [chronogramToDetail, setChronogramToDetail] = useState<BillingModels.ChronogramInterface>(ChronogramInitialValue);
  const [alertModalConfig, setAlertModalConfig] = useState<ModalConfiguration>(modalConfigurationInitialValue);
  const [chronogramInfo, setChronogramInfo] = useState(dummyChronogram);
  const formRef: LegacyRef<HTMLFormElement> = useRef(null);
  const form = useForm<BillingModels.ChronogramFilterInterface>({
    defaultValues: ChronogramFilterInitialValue,
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = form;

  const onFilterChronogram = (dataFormFilter: BillingModels.ChronogramFilterInterface) => {
    console.log('[TODO]: implement setChronogramInfo, chronogramToDetail & dataFormFilter', chronogramToDetail, dataFormFilter, setChronogramInfo);
  };

  const onCancelFilter = () => {
    reset(ChronogramFilterInitialValue);
  };

  const onCancelModalEdit = () => {
    reset(ChronogramFilterInitialValue);
    setOpenModalEdit(false);
  };

  const onEditChronogram = (id: string) => {
    setChronogramToEdit(chronogramInfo.filter((chronogramItem) => chronogramItem.id === id)![0]);
    setOpenModalEdit(true);
  };

  const onCancelEditChronogram = () => {
    setOpenModalEdit(false);
  };

  const onDetailChronogram = (id: string) => {
    setChronogramToDetail(chronogramInfo.filter((chronogramItem) => chronogramItem.id === id)![0]);

    setOpenModalDetail(true);
  };

  const onCancelDetailChronogram = () => {
    setOpenModalDetail(false);
  };

  const onCreateChronogram = () => {
    setAlertModalConfig({
      buttonText: t('components.alertResultModal.acceptButtonLabel'),
      icon: SuccessIcon,
      message: t('billing.maintenance.chronogramManagement.saveWithSuccessLabel'),
      modalTitle: t('billing.maintenance.chronogramManagement.createModalTitle'),
    });
    setAlertOpenModal(true);
    reset(ChronogramFilterInitialValue);
  };

  const onCloseAlertModal = () => {
    setAlertOpenModal(false);
  };

  return (
    <>
      <ChronogramFormFilterComponent
        formRef={formRef}
        control={control}
        onFilterChronogram={onFilterChronogram}
        errors={errors}
        handleSubmit={handleSubmit}
      ></ChronogramFormFilterComponent>

      <ChronogramBottomButtonsComponent formRef={formRef} isValid={isValid} onCancel={onCancelFilter}></ChronogramBottomButtonsComponent>

      <ChronogramSearchViewComponent
        chronogramInfo={chronogramInfo}
        onEditChronogram={onEditChronogram}
        onDetailChronogram={onDetailChronogram}
        onCreateChronogram={onCreateChronogram}
      ></ChronogramSearchViewComponent>

      <ChronogramEditModalComponent
        chronogramInfoToEdit={chronogramToEdit}
        onCancelEditChronogram={onCancelEditChronogram}
        onCancelModalEdit={onCancelModalEdit}
        openModalEdit={openModalEdit}
      ></ChronogramEditModalComponent>

      <ChronogramDetailModalComponent
        chronogramInfoToDetail={chronogramInfo}
        onCancelDetailChronogram={onCancelDetailChronogram}
        openModalDetail={openModalDetail}
        onCancelModalDetail={onCancelDetailChronogram}
      ></ChronogramDetailModalComponent>

      <AlertResultModalComponent
        modalConfiguration={alertModalConfig}
        onClose={onCloseAlertModal}
        openModal={openAlertModal}
      ></AlertResultModalComponent>
    </>
  );
};

export default ChronogramCreateOrEditViewComponent;
