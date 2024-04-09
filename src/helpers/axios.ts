import axios, { AxiosError } from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_URL || 'http://localhost:5000/'
});

interface IErrorBase<T> {
  error: Error | AxiosError<T>;
  type: 'axios-error' | 'stock-error';
}

interface IAxiosError<T> extends IErrorBase<T> {
  error: AxiosError<T>;
  type: 'axios-error';
}
interface IStockError<T> extends IErrorBase<T> {
  error: Error;
  type: 'stock-error';
}

export function axiosErrorHandler<T>(
  callback: (err: IAxiosError<T> | IStockError<T>) => void
) {
  return (error: Error | AxiosError<T>) => {
    if (axios.isAxiosError(error)) {
      callback({
        error: error,
        type: 'axios-error'
      });
    } else {
      callback({
        error: error,
        type: 'stock-error'
      });
    }
  };
}

export default axiosInstance;
