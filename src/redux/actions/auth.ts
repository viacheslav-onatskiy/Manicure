import { toast } from 'react-toastify';
import axiosInstance, { axiosErrorHandler } from '../../helpers/axios';
import setAuthToken from '../../helpers/setAuthToken';
import { AppThunk } from '../store';
import { AuthActionTypes } from './types';

export interface User {
  _id: string;
  name: string;
  email: string;
  date: string;
}

// Load User
export const loadUser = (): AppThunk => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axiosInstance.get<User>('/auth');

    dispatch({
      type: AuthActionTypes.USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AuthActionTypes.AUTH_ERROR,
      payload: null
    });
  }
};

// Register User
interface RegisterData {
  name: string;
  email: string;
  password: string;
}
export interface RegisterSuccessPayload {
  token: string;
}

export const register =
  (userData: RegisterData): AppThunk =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify(userData);

    return axiosInstance
      .post<RegisterSuccessPayload>('/users', body, config)
      .then((res) => {
        dispatch({
          type: AuthActionTypes.REGISTER_SUCCESS,
          payload: res.data as RegisterSuccessPayload
        });

        toast.success('You have registered successfully');
        dispatch(loadUser());
      })
      .catch(
        axiosErrorHandler<{ errors: { msg: string }[] }>((res) => {
          if (res.type === 'axios-error') {
            const errors = res.error.response?.data.errors;

            if (errors) {
              errors.forEach((error: { msg: string }) => toast.error(error.msg));
            }
          } else {
            toast.error('Something went wrong during registration');
          }

          dispatch({
            type: AuthActionTypes.REGISTER_FAIL,
            payload: null
          });
        })
      );
  };

// Login User
interface LoginRequest {
  email: string;
  password: string;
}
export interface LoginSuccessPayload {
  token: string;
}

export const login =
  (email: string, password: string): AppThunk =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const requestData = JSON.stringify({ email, password });

    return axiosInstance
      .post<LoginSuccessPayload>('/auth', requestData, config)
      .then((res) => {
        dispatch({
          type: AuthActionTypes.LOGIN_SUCCESS,
          payload: res.data
        });
        dispatch(loadUser());

        toast.success('You have logged in successfully');
      })
      .catch(
        axiosErrorHandler<{ errors: { msg: string }[] }>((res) => {
          if (res.type === 'axios-error') {
            const errors = res?.error?.response?.data.errors;

            if (errors) {
              errors.forEach((error: { msg: string }) => toast.error(error.msg));
            }
          } else {
            toast.error('Something went wrong during login');
          }

          dispatch({
            type: AuthActionTypes.LOGIN_FAIL,
            payload: null
          });
        })
      );
  };

// Logout / Clear Profile
export const logout = (): AppThunk => (dispatch) => {
  // dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: AuthActionTypes.LOGOUT });

  toast.success('You have logged out successfully');
};
