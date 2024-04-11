import { PaginationActionTypes } from '../actions/types';

export interface IReview {
  name: string;
  date: string;
  rating: number;
  description: string;
  _id: string;
  user: string;
}

export interface PaginationState {
  activePage: number;
  pageSize: number;
  pageOfItems: IReview[];
  pageReset: boolean;
}

interface PaginationPayload {
  activePage?: number;
  pageSize?: number;
  pageOfItems?: IReview[];
  pageReset?: boolean;
}

export interface PaginationAction {
  type: PaginationActionTypes;
  payload: PaginationPayload;
}

const initialState: PaginationState = {
  activePage: 1,
  pageSize: 10,
  pageOfItems: [],
  pageReset: true
};

const paginationReducer = (
  state: PaginationState = initialState,
  action: PaginationAction
) => {
  const { type, payload } = action;

  switch (type) {
    case PaginationActionTypes.SET_PAGINATION_PAGE:
      return {
        ...state,
        activePage: payload
      };

    case PaginationActionTypes.SET_PAGINATION_ITEMS:
      return {
        ...state,
        // pageOfItems: payload
        pageOfItems: payload.pageOfItems
      };

    case PaginationActionTypes.SET_PAGINATION_SIZE:
      return {
        ...state,
        pageSize: payload
      };

    case PaginationActionTypes.SET_PAGINATION_RESET:
      return {
        ...state,
        pageReset: payload
      };

    case PaginationActionTypes.CLEAR_PROFILE:
      return {
        activePage: 1,
        pageSize: 10,
        pageOfItems: [],
        pageReset: true
      };

    default:
      return state;
  }
};

export default paginationReducer;
