import { FC, useEffect, useState } from 'react';
import { BillingModels } from '@/models';
import { useForm } from 'react-hook-form';
import ReadingImportFormFilterComponent from './ReadingImportFormFilter';
import { readingImportFilterInitialValue, readingImportInitialValue } from '@/models/billing';
import ReadingImportTableViewComponent from './ReadingImportTableView';
import { useReadingImport } from '@/context/billing';

const ReadingImportCreateOrEditViewComponent: FC = () => {
  const [readingImportInfo, setReadingImportInfo] = useState([readingImportInitialValue]);
  const { actions, readingImportResultOfSearch } = useReadingImport();
  const formFilter = useForm<BillingModels.ReadingImportFilterInterface>({
    defaultValues: readingImportFilterInitialValue,
  });
  const {
    control: controlFormFilter,
    handleSubmit: handleSubmitFormFilter,
    formState: { errors: errorsFormFilter, isValid: isValidFormFilter },
  } = formFilter;

  const onGenerateFilterReadingImport = () => {
    setReadingImportInfo([readingImportInitialValue]);
  };

  const onCancelFilterReadingImport = () => {
    formFilter.reset(readingImportFilterInitialValue);
  };

  const onClearReadingImport = () => {
    setReadingImportInfo([readingImportInitialValue]);
  };

  const onGenerateReadingImport = async (readingImportFilter: BillingModels.ReadingImportFilterInterface) => {
    if (await actions?.searchReadingImport(readingImportFilter)) {
      setReadingImportInfo([readingImportResultOfSearch]);
    }

    if (readingImportResultOfSearch.reading === '1') {
      await actions?.saveReadingImportAutomatic(readingImportResultOfSearch);
      //Lectura automatica
    } else if (readingImportResultOfSearch.reading === '2') {
      //Lectura manual
      await actions?.saveReadingImportManual(readingImportResultOfSearch);
    } else {
      //Error
    }
  };

  useEffect(() => {
    actions?.loadInitialInfo();
  }, []);

  return (
    <>
      <ReadingImportFormFilterComponent
        control={controlFormFilter}
        errors={errorsFormFilter}
        handleSubmit={handleSubmitFormFilter}
        onGenerateFilterReadingImport={onGenerateFilterReadingImport}
        onCancelFilterReadingImport={onCancelFilterReadingImport}
        isValidFormFilter={isValidFormFilter}
        onGenerateReadingImport={onGenerateReadingImport}
      ></ReadingImportFormFilterComponent>

      {readingImportInfo.some((item) => item.id !== '') && (
        <ReadingImportTableViewComponent
          readingImportInfo={readingImportInfo}
          onClearReadingImport={onClearReadingImport}
        ></ReadingImportTableViewComponent>
      )}
    </>
  );
};

export default ReadingImportCreateOrEditViewComponent;
