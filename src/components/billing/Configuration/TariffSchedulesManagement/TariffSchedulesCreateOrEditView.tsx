import { FC, useEffect, useState } from 'react';
import { BillingModels } from '@/models';
import { useForm } from 'react-hook-form';
import { AlertResultModalComponent } from '@/components';
import { AdvertenceIcon, SuccessIcon } from '@/assets';
import { useTranslation } from '@/hooks';
import { ModalConfiguration } from '@/models/commons';
import TariffSchedulesFormFilterComponent from './TariffSchedulesFormFilter';
import TariffSchedulesTableViewComponent from './TariffSchedulesTableView';
import { modalConfigurationInitialValue } from './TariffSchedulesManagement.constants';
import { useTariffSchedulesManagement } from '@/context/billing';
import { TariffSchedulesInterface, tariffSchedulesFilterInitialValue, tariffSchedulesInitialValue } from '@/models/billing';
import { formatter } from '@/utils';
import TariffSchedulesEditModalComponent from './TariffSchedulesEditModal';

const TariffSchedulesCreateOrEditViewComponent: FC = () => {
  const { t } = useTranslation();
  const { actions, tariffSchedulesResultOfSearch } = useTariffSchedulesManagement();
  const [tariffSchedulesInfo, setTariffSchedulesInfo] = useState([tariffSchedulesInitialValue]);
  const [openAlertModal, setAlertOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [alertModalConfig, setAlertModalConfig] = useState<ModalConfiguration>(modalConfigurationInitialValue);

  const formFilter = useForm<BillingModels.TariffSchedulesFilterInterface>({
    defaultValues: tariffSchedulesFilterInitialValue,
  });
  const {
    control: controlFormFilter,
    handleSubmit: handleSubmitFormFilter,
    formState: { errors: errorsFormFilter },
  } = formFilter;

  const formTariffSchedules = useForm<BillingModels.TariffSchedulesInterface>({
    defaultValues: tariffSchedulesInitialValue,
  });
  const {
    control: controlFormTariffSchedules,
    handleSubmit: handleSubmitFormTariffSchedules,
    formState: { errors: errorsFormTariffSchedules },
  } = formTariffSchedules;

  useEffect(() => {
    actions?.loadInitialInfo();
  }, []);

  const onCloseAlertModal = () => {
    setAlertOpenModal(false);
  };

  const onEditTariffSchedules = (id: string) => {
    formTariffSchedules.reset(tariffSchedulesInfo.filter((tariffSchedulesItem) => tariffSchedulesItem.id === id)![0]);
    setOpenModalEdit(true);
  };
  const onSaveTariffSchedules = async (dataFormEdit: BillingModels.TariffSchedulesInterface) => {
    const indexOfTariffToEdit = tariffSchedulesInfo.findIndex((tariff) => tariff.id === dataFormEdit.id);
    if (await actions?.saveTariffSchedules(dataFormEdit)) {
      const updatedTariffSchedulesInfo = [...tariffSchedulesInfo];

      updatedTariffSchedulesInfo[indexOfTariffToEdit] = {
        ...updatedTariffSchedulesInfo[indexOfTariffToEdit],
        ...dataFormEdit,
      };
      setTariffSchedulesInfo(updatedTariffSchedulesInfo);
    }
    setAlertModalConfig({
      buttonText: t('components.alertResultModal.acceptButtonLabel'),
      icon: SuccessIcon,
      message: t('billing.maintenance.tariffSchedulesManagement.editWithSuccessLabel'),
      modalTitle: t('billing.maintenance.tariffSchedulesManagement.editWithSuccessModalTitle'),
    });
    setOpenModalEdit(false);
    setAlertOpenModal(true);
  };

  const onCancelModalEdit = () => {
    setOpenModalEdit(false);
  };

  const onClearTariffSchedules = () => {
    setTariffSchedulesInfo([tariffSchedulesInitialValue]);
  };

  const onGenerateTariffSchedules = async (tariffSchedulesToGenerateFilter: BillingModels.TariffSchedulesFilterInterface) => {
    const { currency, serviceType, fromDate, toDate } = tariffSchedulesToGenerateFilter;
    if (currency !== '' && serviceType !== '' && fromDate === '' && toDate === '') {
      const tariffSchedulesToSave: TariffSchedulesInterface = {
        id: '123' + new Date(),
        code: '123' + new Date(),
        status: '',
        calculationType: '',
        codeConcept: '',
        conceptDescription: '',
        rate: '',
        realValue: '',
        referenceValue: '',
        typeRate: '',
        createDate: formatter.formatDate(new Date()),
        currency: tariffSchedulesToGenerateFilter.currency,
        serviceType: tariffSchedulesToGenerateFilter.serviceType,
      };
      if (await actions?.saveTariffSchedules(tariffSchedulesToSave)) {
        setTariffSchedulesInfo([...tariffSchedulesInfo, tariffSchedulesToSave]);
        setAlertModalConfig({
          buttonText: t('components.alertResultModal.acceptButtonLabel'),
          icon: SuccessIcon,
          message: t('billing.maintenance.tariffSchedulesManagement.saveWithSuccessLabel'),
          modalTitle: t('billing.maintenance.tariffSchedulesManagement.saveWithSuccessModalTitle'),
        });
      }
      setAlertOpenModal(true);
    } else if (fromDate !== '' || toDate !== '') {
      setAlertModalConfig({
        buttonText: t('components.alertResultModal.acceptButtonLabel'),
        icon: AdvertenceIcon,
        message: t('billing.maintenance.tariffSchedulesManagement.saveWithErrorLabel'),
        modalTitle: t('billing.maintenance.tariffSchedulesManagement.saveWithErrorModalTitle'),
      });
      setAlertOpenModal(true);
    } else {
      setAlertModalConfig({
        buttonText: t('components.alertResultModal.acceptButtonLabel'),
        icon: AdvertenceIcon,
        message: t('billing.maintenance.tariffSchedulesManagement.saveWithErrorLabel2'),
        modalTitle: t('billing.maintenance.tariffSchedulesManagement.saveWithErrorModalTitle'),
      });
      setAlertOpenModal(true);
    }
  };

  const onFilterTariffSchedules = async (tariffSchedulesToVisualizeFilter: BillingModels.TariffSchedulesFilterInterface) => {
    const tariffSchedulesToSearch: TariffSchedulesInterface = {
      id: '',
      code: '',
      calculationType: '',
      codeConcept: '',
      conceptDescription: '',
      rate: '',
      realValue: '',
      referenceValue: '',
      typeRate: '',
      currency: tariffSchedulesToVisualizeFilter.currency,
      serviceType: tariffSchedulesToVisualizeFilter.serviceType,
      createDate: tariffSchedulesToVisualizeFilter.toDate,
      status: '',
    };

    if (await actions?.searchTariffSchedules(tariffSchedulesToSearch)) {
      setTariffSchedulesInfo([tariffSchedulesResultOfSearch]);
    }
  };

  return (
    <>
      <TariffSchedulesFormFilterComponent
        formFilter={formFilter}
        onFilterTariffSchedules={onFilterTariffSchedules}
        control={controlFormFilter}
        handleSubmit={handleSubmitFormFilter}
        errors={errorsFormFilter}
        onGenerateTariffSchedules={onGenerateTariffSchedules}
      ></TariffSchedulesFormFilterComponent>

      {tariffSchedulesInfo.some((item) => item.id !== '') && (
        <TariffSchedulesTableViewComponent
          tariffSchedulesInfo={tariffSchedulesInfo}
          onEditTariffSchedules={onEditTariffSchedules}
          onClearTariffSchedules={onClearTariffSchedules}
        ></TariffSchedulesTableViewComponent>
      )}

      <TariffSchedulesEditModalComponent
        onCancelModalEdit={onCancelModalEdit}
        openModalEdit={openModalEdit}
        onSaveTariffSchedules={onSaveTariffSchedules}
        handleSubmit={handleSubmitFormTariffSchedules}
        control={controlFormTariffSchedules}
        errors={errorsFormTariffSchedules}
      ></TariffSchedulesEditModalComponent>

      <AlertResultModalComponent
        modalConfiguration={alertModalConfig}
        onClose={onCloseAlertModal}
        openModal={openAlertModal}
      ></AlertResultModalComponent>
    </>
  );
};

export default TariffSchedulesCreateOrEditViewComponent;
