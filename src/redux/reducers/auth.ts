import { LoginSuccessPayload, RegisterSuccessPayload, User } from '../actions/auth';
import { AuthActionTypes } from '../actions/types';

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean | null;
  loading: boolean;
  user: User | null;
}

export type UserActionType = User | RegisterSuccessPayload | LoginSuccessPayload | null;

interface AuthAction {
  type: AuthActionTypes;
  payload: UserActionType;
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: false,
  user: null
};

const authReducer = (state: AuthState = initialState, action: AuthAction) => {
  const { type, payload } = action;

  switch (type) {
    case AuthActionTypes.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };

    case AuthActionTypes.REGISTER_SUCCESS:
    case AuthActionTypes.LOGIN_SUCCESS:
      if (payload && 'token' in payload) {
        localStorage.setItem('token', payload.token);
      }
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };

    case AuthActionTypes.REGISTER_FAIL:
    case AuthActionTypes.AUTH_ERROR:
    case AuthActionTypes.LOGIN_FAIL:
    case AuthActionTypes.LOGOUT:
      localStorage.removeItem('token');

      return {
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      };

    default:
      return state;
  }
};

export default authReducer;
