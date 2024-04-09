import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import {
  AuthActionTypes,
  PaginationActionTypes,
  ReviewActionTypes
} from './actions/types';
import rootReducer from './reducers';

export type RootState = ReturnType<typeof rootReducer>;

type ActionTypes = ReviewActionTypes | PaginationActionTypes | AuthActionTypes;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<ActionTypes>
>;

const initialState = {};

const store = configureStore({
  reducer: rootReducer,
  // middleware: [thunk],
  preloadedState: initialState
});

export default store;
