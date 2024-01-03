import {
  GET_REVIEWS,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_ERROR,
  GET_REVIEW,
  GET_REVIEW_SUCCESS,
  GET_REVIEW_ERROR,
  ADD_REVIEW,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_ERROR,
  DELETE_REVIEW,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_ERROR,
  UPDATE_REVIEW,
  UPDATE_REVIEW_SUCCESS,
  UPDATE_REVIEW_ERROR,
  CLEAR_PROFILE
} from './../actions/types';

const initialState = {
  reviews: [],
  review: {},
  loading: false,
  error: {}
};

const reviewReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_REVIEWS:
    case GET_REVIEW:
    case ADD_REVIEW:
    case DELETE_REVIEW:
    case UPDATE_REVIEW:
      return {
        ...state,
        loading: true
      };
    case ADD_REVIEW_SUCCESS:
      return {
        ...state,
        reviews: [payload, ...state.reviews],
        loading: false
      };
    case GET_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: payload,
        loading: false
      };
    case GET_REVIEW_SUCCESS:
      return {
        ...state,
        review: payload,
        loading: false
      };
    case GET_REVIEWS_ERROR:
    case GET_REVIEW_ERROR:
    case ADD_REVIEW_ERROR:
    case DELETE_REVIEW_ERROR:
    case UPDATE_REVIEW_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case DELETE_REVIEW_SUCCESS:
      return {
        ...state,
        reviews: state.reviews.filter((review) => review._id !== payload),
        loading: false
      };
    case UPDATE_REVIEW_SUCCESS:
      return {
        ...state,
        reviews: state.reviews.map((review) =>
          review._id === payload._id ? { ...payload } : review
        ),
        loading: false
      };
    case CLEAR_PROFILE:
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
