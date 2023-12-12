import {
  SET_PAGINATION_PAGE,
  SET_PAGINATION_SIZE,
  SET_PAGINATION_ITEMS,
  SET_PAGINATION_RESET
} from './types';

export const setPageAction = (page) => async (dispatch) => {
  dispatch({
    type: SET_PAGINATION_PAGE,
    payload: page
  });
};

export const setPageSizeAction = (size) => async (dispatch) => {
  dispatch({
    type: SET_PAGINATION_SIZE,
    payload: size
  });
};

export const setPageItemsAction = (size) => async (dispatch) => {
  dispatch({
    type: SET_PAGINATION_ITEMS,
    payload: size
  });
};

export const setPageResetAction = (bool) => async (dispatch) => {
  dispatch({
    type: SET_PAGINATION_RESET,
    payload: bool
  });
};
