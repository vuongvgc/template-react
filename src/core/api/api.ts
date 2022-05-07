import { message } from 'antd';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { CONFIG } from '../../config/index';

const api: AxiosInstance = axios.create({
  baseURL: CONFIG.API_BASE_URL,
  timeout: 300000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // Do something before request is sent
    // Do something with request error
    console.debug('config', config);

    return config;
  },
  error => Promise.reject(error)
);
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    if (response.status === 200) {
      message.success('This is a success message');
    }
    console.debug('config', response);
    return response;
  },
  error =>
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    Promise.reject(error)
);
