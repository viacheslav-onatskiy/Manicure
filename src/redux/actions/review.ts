import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import axiosInstance from '../../helpers/axios';
import { ReviewErrorPayload, ReviewFormData } from '../reducers/reviews';
import { AppThunk } from '../store';
import { ReviewActionTypes } from './types';

interface IReview {
  _id: string;
  name: string;
  rating: number;
  description: string;
}

interface IReviewsData {
  reviews: IReview[];
  totalPages: number;
  totalItems: number;
}

// Get All reviews
interface ReviewData {
  name: string;
  email: string;
  password: string;
}

export const getReviews =
  (page: number = 1, pageSize: number = 10): AppThunk =>
  async (dispatch) => {
    try {
      // dispatch(loadUser());
      dispatch({
        type: ReviewActionTypes.GET_REVIEWS
      });
      const res = await axiosInstance.get<IReviewsData>(
        `/reviews?page=${page}&pageSize=${pageSize}`
      );

      dispatch({
        type: ReviewActionTypes.GET_REVIEWS_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      const axiosError = err as AxiosError<{
        msg: string;
        status: number;
      }>;
      dispatch({
        type: ReviewActionTypes.GET_REVIEWS_ERROR,
        payload: {
          msg: axiosError.response?.statusText,
          status: axiosError.response?.status
        }
      });
    }
  };

// Get Review
export const getReview =
  (id: number): AppThunk =>
  async (dispatch) => {
    try {
      dispatch({
        type: ReviewActionTypes.GET_REVIEW
      });
      const res = await axiosInstance.get<IReview>(`/reviews/${id}`);

      dispatch({
        type: ReviewActionTypes.GET_REVIEW_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      const axiosError = err as AxiosError<{
        msg: string;
        status: number;
      }>;
      dispatch({
        type: ReviewActionTypes.GET_REVIEW_ERROR,
        payload: {
          msg: axiosError.response?.statusText,
          status: axiosError.response?.status
        }
      });
    }
  };

// Add review
interface IReview {
  description: string;
  rating: number;
}
export const addReview =
  (formData: ReviewFormData): AppThunk =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    console.log('addReview formData:', formData);
    try {
      dispatch({
        type: ReviewActionTypes.ADD_REVIEW
      });
      const res = await axiosInstance.post<IReview>('/reviews', formData, config);

      dispatch({
        type: ReviewActionTypes.ADD_REVIEW_SUCCESS,
        payload: res.data
      });

      toast.success('Review added successfully');
    } catch (err) {
      const axiosError = err as AxiosError<{
        msg: string;
        errors?: { msg: string }[];
      }>;
      const { errors, msg } = axiosError.response?.data || {};

      if (errors) {
        errors.forEach((error: ReviewErrorPayload) => toast.error(error.msg));
      }
      if (msg) {
        toast.error(msg);
      }

      dispatch({
        type: ReviewActionTypes.ADD_REVIEW_ERROR,
        payload: {
          msg: axiosError.response?.statusText,
          status: axiosError.response?.status
        }
      });
    }
  };

// Delete Review
export const deleteReview =
  (id: number): AppThunk =>
  async (dispatch) => {
    try {
      dispatch({
        type: ReviewActionTypes.DELETE_REVIEW
      });
      await axiosInstance.delete(`/reviews/${id}`);

      dispatch({
        type: ReviewActionTypes.DELETE_REVIEW_SUCCESS,
        payload: id
      });

      toast.success('Review deleted successfully');
    } catch (err) {
      const axiosError = err as AxiosError<{
        statusText: string;
        status: number;
      }>;
      dispatch({
        type: ReviewActionTypes.DELETE_REVIEW_ERROR,
        payload: {
          msg: axiosError.response?.statusText,
          status: axiosError.response?.status
        }
      });
    }
  };

// Update Review
interface UpdateReviewData extends IReview {
  date: string;
  user: string;
}
export const updateReview =
  (formData: ReviewFormData, id: string): AppThunk =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      dispatch({
        type: ReviewActionTypes.UPDATE_REVIEW
      });
      const res = await axiosInstance.put<UpdateReviewData>(
        `/reviews/${id}`,
        formData,
        config
      );

      dispatch({
        type: ReviewActionTypes.UPDATE_REVIEW_SUCCESS,
        payload: res.data
      });

      toast.success('Review updated successfully');
    } catch (err) {
      const axiosError = err as AxiosError<{
        msg?: string;
        status?: number;
        errors?: { msg: string }[];
      }>;
      const errors = axiosError.response?.data.errors;

      if (errors) {
        errors.forEach((error) => toast.error(error.msg));
      }

      dispatch({
        type: ReviewActionTypes.UPDATE_REVIEW_ERROR,
        payload: {
          msg: axiosError.response?.statusText,
          status: axiosError.response?.status
        }
      });
    }
  };

export { IReview, IReviewsData };
