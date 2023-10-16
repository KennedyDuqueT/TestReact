import axios, { AxiosResponse, Method } from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_TESTEA_API;

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  useQueryParams?: boolean;
}

export const apiRequest = async <T>(method: Method, path: string, data?: any, useQueryParams?: boolean): Promise<ApiResponse<T>> => {
  try {
    const response: AxiosResponse = await axios({
      method,
      url: `${API_BASE_URL}${path}`,
      data: useQueryParams ? undefined : data,
      params: useQueryParams ? data : undefined,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error('error', error);
    return {
      success: false,
      message: 'An error occurred while processing your request.',
    };
  }
};
