import { IReview } from '../actions/review';
import { ReviewActionTypes } from '../actions/types';

interface ReviewState {
  reviews: IReview[];
  review: IReview | {};
  totalPages: number;
  totalItems: number;
  loading: boolean;
  error: {};
}

interface ReviewSuccessPayload {
  reviews?: IReview[];
  totalPages?: number;
  totalItems?: number;
  review?: IReview;
  _id?: string;
}

export interface ReviewErrorPayload {
  msg?: string;
  status?: number;
  errors?: { msg: string }[];
}

export interface ReviewFormData {
  description: string;
  rating: number;
}

interface ReviewAction {
  type: ReviewActionTypes;
  payload: ReviewSuccessPayload | ReviewErrorPayload;
}

const initialState: ReviewState = {
  reviews: [],
  review: {},
  totalPages: 0,
  totalItems: 0,
  loading: false,
  error: {}
};

const reviewReducer = (state: ReviewState = initialState, action: ReviewAction) => {
  const { type, payload } = action;

  switch (type) {
    case ReviewActionTypes.GET_REVIEWS:
    case ReviewActionTypes.GET_REVIEW:
    case ReviewActionTypes.ADD_REVIEW:
    case ReviewActionTypes.DELETE_REVIEW:
    case ReviewActionTypes.UPDATE_REVIEW:
      return {
        ...state,
        loading: true
      };
    case ReviewActionTypes.ADD_REVIEW_SUCCESS:
      return {
        ...state,
        reviews: [payload, ...state.reviews],
        loading: false
      };
    case ReviewActionTypes.GET_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: (payload as ReviewSuccessPayload).reviews,
        totalPages: (payload as ReviewSuccessPayload).totalPages,
        totalItems: (payload as ReviewSuccessPayload).totalItems,
        loading: false
      };
    case ReviewActionTypes.GET_REVIEW_SUCCESS:
      return {
        ...state,
        review: payload,
        loading: false
      };
    case ReviewActionTypes.GET_REVIEWS_ERROR:
    case ReviewActionTypes.GET_REVIEW_ERROR:
    case ReviewActionTypes.ADD_REVIEW_ERROR:
    case ReviewActionTypes.DELETE_REVIEW_ERROR:
    case ReviewActionTypes.UPDATE_REVIEW_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case ReviewActionTypes.DELETE_REVIEW_SUCCESS:
      return {
        ...state,
        reviews: state.reviews.filter((review) => review._id !== payload),
        loading: false
      };
    case ReviewActionTypes.UPDATE_REVIEW_SUCCESS:
      return {
        ...state,
        reviews: state.reviews.map((review) =>
          review._id === (payload as ReviewSuccessPayload)._id ? { ...payload } : review
        ),
        loading: false
      };
    case ReviewActionTypes.CLEAR_PROFILE:
      return {
        ...state,
        reviews: [],
        review: {},
        loading: false
      };

    default:
      return state;
  }
};

export default reviewReducer;
