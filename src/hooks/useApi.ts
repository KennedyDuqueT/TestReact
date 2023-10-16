import qs from 'query-string';
import axios, { AxiosResponse } from 'axios';
import { createInstance, BaseURL } from '@/api';
import { useLoader } from '@/context';

interface Props {
  endpoint: string;
  method: 'post' | 'put' | 'get' | 'delete' | 'patch';
  baseUrl?: BaseURL;
  withLoader?: boolean;
}

interface QueryString {
  [param: string]: any;
}

interface Fetch {
  body?: object;
  urlParams?: string;
  queryString?: QueryString;
}

export const useApi = ({ endpoint, method, baseUrl = 'default', withLoader = true }: Props) => {
  const { actions: loaderActions } = useLoader();

  const instance = createInstance({ baseUrl });

  const handleFetch = async ({ body: data, urlParams, queryString }: Fetch = {}, headers?: any): Promise<any> => {
    const url = `${endpoint}${urlParams ? `/${urlParams}` : ''}`;

    try {
      if (withLoader) loaderActions?.showLoader(true);

      const formattedParams = queryString ?? {};

      const response = await instance({
        method,
        url,
        paramsSerializer: {
          serialize: (params: object) => qs.stringify(params, { arrayFormat: 'none' }),
        },
        headers,
        params: formattedParams,
        data,
      });

      // TODO: Implement response status 204 for content validation  (show alert, toast, or nothing)

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const response: AxiosResponse = error.response;

        const unauthorized = response.status === 401;
        const badRequest = response.status === 400;

        if (unauthorized) {

        } else if (badRequest) {
          // TODO: Handle the error 400 here
          // For example, show an alert to the user or log the error.
          return response.data;
        } else {
          // TODO: Implement alerts or toast´s for any non-auth error responses
          // TODO: Its posible implement useTranslation here for use common messages
        }

        throw { response, error: response.status } as any;
      }

      throw { error: 1, description: error } as any;
    } finally {
      if (withLoader) loaderActions?.showLoader(false);
    }
  };

  return handleFetch;
};

export const useApiResource = (endpoint: string) => {
  return {
    get: useApi({ endpoint, method: 'get' }),
    post: useApi({ endpoint, method: 'post' }),
    patch: useApi({ endpoint, method: 'patch' }),
    put: useApi({ endpoint, method: 'put' }),
    delete: useApi({ endpoint, method: 'delete' }),
  };
};

export default useApi;
