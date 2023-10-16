import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

//TODO: Use this type to manage multiple baseUrls by module: export type BaseURL = 'default' | 'portfolio' | 'billing' | 'paperworks';
export type BaseURL = 'default';

const urls: Record<BaseURL, string | undefined> = {
  default: process.env.NEXT_PUBLIC_BACKEND_URL,
};

interface InstanceConfig extends AxiosRequestConfig {
  baseUrl?: BaseURL;
}

export const createInstance = ({ baseUrl = 'default', ...config }: InstanceConfig): AxiosInstance => {
  // TODO: use app auth to execute specific actions, for example kill session
  // const { actions } = useAuth();

  const instance = axios.create({
    baseURL: urls[baseUrl],
    timeout: 60000,
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': process.env.NEXT_PUBLIC_SUSCRIPTION_KEY,
    },
    ...config,
  });

  instance.interceptors.request.use(
    async (config: any) => {
      try {
        // TODO: Implement token verification rules here. In this example use token of localStorage (this can change with Auth module implementation)
        const token = localStorage.getItem('token');

        return {
          ...config,
          headers: {
            ...config.headers,
            Authorization: `Bearer ${token}`,
            'Ocp-Apim-Subscription-Key': process.env.NEXT_PUBLIC_SUSCRIPTION_KEY,
          },
        };
      } catch (e) {
        console.error(e);
      }
      return config;
    },
    (error): any => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (response) => response,
    async (error): Promise<any> => await Promise.reject(error)
  );

  return instance;
};
