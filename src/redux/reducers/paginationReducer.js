import {
  CLEAR_PROFILE,
  SET_PAGINATION_ITEMS,
  SET_PAGINATION_PAGE,
  SET_PAGINATION_RESET,
  SET_PAGINATION_SIZE
} from './../actions/types';

const initialState = {
  activePage: null,
  pageSize: 10,
  pageOfItems: [],
  pageReset: true
};

const paginationReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PAGINATION_PAGE:
      return {
        ...state,
        activePage: payload
      };

    case SET_PAGINATION_ITEMS:
      return {
        ...state,
        pageOfItems: payload
      };

    case SET_PAGINATION_SIZE:
      return {
        ...state,
        pageSize: payload
      };

    case SET_PAGINATION_RESET:
      return {
        ...state,
        pageReset: payload
      };

    case CLEAR_PROFILE:
      return {
        activePage: null,
        pageSize: 10,
        pageOfItems: [],
        pageReset: true
      };

    default:
      return state;
  }
};

export default paginationReducer;
