import axiosInstance from './axios';

const setAuthToken = (token: string | null) => {
  if (token) {
    axiosInstance.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axiosInstance.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
