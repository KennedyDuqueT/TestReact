import { Actions, State } from './invoiceInitialAmount.types';
import { reducerActions } from './invoiceInitalAmount.constants';
import { ResponseObj, DataRequest } from '@/models/customer-experience';
import { useLoader } from '@/context';
import { catalogContractResponseMock, pdfResponseMock } from '@/mocks/customer-experience';

const useActions = (state: State, dispatch: any): Actions => {
  const { actions } = useLoader();

  const getUrlPdfInvoice = async (data: DataRequest): Promise<ResponseObj> => {
    console.log('TODO: data request', data);
    try {
      actions?.showLoader(true);
      const response = pdfResponseMock;

      if (response.succeeded) {
        dispatch(reducerActions.setPdfInvoice(response.data));
      }

      return {
        success: response.succeeded,
      };
    } catch (error) {
      dispatch(reducerActions.setPdfInvoice(''));
      return {
        success: false,
      };
    } finally {
      actions?.showLoader(false);
    }
  };

  const getCatalogs = async (): Promise<void> => {
    try {
      actions?.showLoader(true);
      const response = catalogContractResponseMock;

      if (response.succeeded) {
        dispatch(reducerActions.setCatalogContractType(response.data));
      }
    } catch (error) {
      dispatch(reducerActions.setCatalogContractType([]));
    } finally {
      actions?.showLoader(false);
    }
  };

  return {
    getUrlPdfInvoice,
    getCatalogs,
  };
};

export { useActions };
