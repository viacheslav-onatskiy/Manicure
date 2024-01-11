import { toast } from 'react-toastify';
import axiosInstance from '../../helpers/axios';
import {
  ADD_REVIEW,
  ADD_REVIEW_ERROR,
  ADD_REVIEW_SUCCESS,
  DELETE_REVIEW,
  DELETE_REVIEW_ERROR,
  DELETE_REVIEW_SUCCESS,
  GET_REVIEW,
  GET_REVIEWS,
  GET_REVIEWS_ERROR,
  GET_REVIEWS_SUCCESS,
  GET_REVIEW_ERROR,
  GET_REVIEW_SUCCESS,
  UPDATE_REVIEW,
  UPDATE_REVIEW_ERROR,
  UPDATE_REVIEW_SUCCESS
} from './types';

// Get All reviews
export const getReviews =
  (page = 1, pageSize = 10) =>
  async (dispatch) => {
    try {
      // dispatch(loadUser());
      dispatch({
        type: GET_REVIEWS
      });
      const res = await axiosInstance.get(`/reviews?page=${page}&pageSize=${pageSize}`);

      dispatch({
        type: GET_REVIEWS_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: GET_REVIEWS_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

// Get Review
export const getReview = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_REVIEW
    });
    const res = await axiosInstance.get(`/reviews/${id}`);

    dispatch({
      type: GET_REVIEW_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_REVIEW_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add review
export const addReview = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    dispatch({
      type: ADD_REVIEW
    });
    const res = await axiosInstance.post('/reviews', formData, config);

    dispatch({
      type: ADD_REVIEW_SUCCESS,
      payload: res.data
    });

    toast.success('Review added successfully');
  } catch (err) {
    const { errors, msg } = err.response.data;

    if (errors) {
      errors.forEach((error) => toast.error(error.msg));
    }
    if (msg) {
      toast.error(msg);
    }

    dispatch({
      type: ADD_REVIEW_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete Review
export const deleteReview = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_REVIEW
    });
    await axiosInstance.delete(`/reviews/${id}`);

    dispatch({
      type: DELETE_REVIEW_SUCCESS,
      payload: id
    });

    toast.success('Review deleted successfully');
  } catch (err) {
    dispatch({
      type: DELETE_REVIEW_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Update Review
export const updateReview = (formData, id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    dispatch({
      type: UPDATE_REVIEW
    });
    const res = await axiosInstance.put(`/reviews/${id}`, formData, config);

    dispatch({
      type: UPDATE_REVIEW_SUCCESS,
      payload: res.data
    });

    toast.success('Review updated successfully');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => toast.error(error.msg));
    }

    dispatch({
      type: UPDATE_REVIEW_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
