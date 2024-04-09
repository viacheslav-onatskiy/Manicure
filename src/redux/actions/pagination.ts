import { IReview } from '../reducers/paginationReducer';
import { AppThunk } from '../store';
import { PaginationActionTypes } from './types';

export const setPageAction =
  (page: number): AppThunk =>
  async (dispatch) => {
    dispatch({
      type: PaginationActionTypes.SET_PAGINATION_PAGE,
      payload: page
    });
  };

export const setPageSizeAction =
  (size: number): AppThunk =>
  async (dispatch) => {
    dispatch({
      type: PaginationActionTypes.SET_PAGINATION_SIZE,
      payload: size
    });
  };

export const setPageItemsAction =
  (items: IReview[]): AppThunk =>
  async (dispatch) => {
    dispatch({
      type: PaginationActionTypes.SET_PAGINATION_ITEMS,
      payload: items
    });
  };

export const setPageResetAction =
  (isReset: boolean): AppThunk =>
  async (dispatch) => {
    dispatch({
      type: PaginationActionTypes.SET_PAGINATION_RESET,
      payload: isReset
    });
  };
