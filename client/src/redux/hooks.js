import { useCallback } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { loadUser, register, login, logout } from './actions/auth';
import {
  getReview,
  addReview,
  deleteReview,
  updateReview,
  getReviews
} from './actions/review';
import {
  setPageAction,
  setPageItemsAction,
  setPageResetAction,
  setPageSizeAction
} from './actions/pagination';

export function useAuth() {
  const dispatch = useDispatch();
  const { token, isAuthenticated, loading, user } = useSelector(
    (state) => ({
      token: state.auth.token,
      isAuthenticated: state.auth.isAuthenticated,
      loading: state.auth.loading,
      user: state.auth.user
    }),
    shallowEqual
  );

  const boundLoadUser = useCallback(
    (...args) => {
      return dispatch(loadUser(...args));
    },
    [dispatch]
  );

  const boundRegisterUser = useCallback(
    (...args) => {
      return dispatch(register(...args));
    },
    [dispatch]
  );

  const boundLoginUser = useCallback(
    (...args) => {
      return dispatch(login(...args));
    },
    [dispatch]
  );
  const boundLogoutUser = useCallback(
    (...args) => {
      return dispatch(logout(...args));
    },
    [dispatch]
  );

  return {
    token,
    isAuthenticated,
    loading,
    user,
    loadUser: boundLoadUser,
    registerUser: boundRegisterUser,
    loginUser: boundLoginUser,
    logoutUser: boundLogoutUser
  };
}

export function useReview() {
  const dispatch = useDispatch();
  const { reviews, review, loading, error } = useSelector(
    (state) => ({
      reviews: state.review.reviews,
      review: state.review.review,
      loading: state.review.loading,
      error: state.review.error
    }),
    shallowEqual
  );

  const boundGetReviews = useCallback(
    (...args) => {
      return dispatch(getReviews(...args));
    },
    [dispatch]
  );

  const boundAddReview = useCallback(
    (...args) => {
      return dispatch(addReview(...args));
    },
    [dispatch]
  );

  const boundDeleteReview = useCallback(
    (...args) => {
      return dispatch(deleteReview(...args));
    },
    [dispatch]
  );

  const boundUpdateReview = useCallback(
    (...args) => {
      return dispatch(updateReview(...args));
    },
    [dispatch]
  );

  const boundGetReview = useCallback(
    (...args) => {
      return dispatch(getReview(...args));
    },
    [dispatch]
  );

  return {
    reviews,
    review,
    loading,
    error,
    getReviews: boundGetReviews,
    getReview: boundGetReview,
    addReview: boundAddReview,
    deleteReview: boundDeleteReview,
    updateReview: boundUpdateReview
  };
}

export function usePagination() {
  const dispatch = useDispatch();
  const { activePage, pageSize, pageOfItems, pageReset } = useSelector(
    (state) => ({
      activePage: state.pagination.activePage,
      pageSize: state.pagination.pageSize,
      pageOfItems: state.pagination.pageOfItems,
      pageReset: state.pagination.pageReset
    }),
    shallowEqual
  );

  const boundSetPageSize = useCallback(
    (...args) => {
      return dispatch(setPageSizeAction(...args));
    },
    [dispatch]
  );

  const boundSetPage = useCallback(
    (...args) => {
      return dispatch(setPageAction(...args));
    },
    [dispatch]
  );

  const boundSetPageItems = useCallback(
    (...args) => {
      return dispatch(setPageItemsAction(...args));
    },
    [dispatch]
  );

  const boundSetPageReset = useCallback(
    (...args) => {
      return dispatch(setPageResetAction(...args));
    },
    [dispatch]
  );

  return {
    activePage,
    pageSize,
    pageOfItems,
    pageReset,
    setPageSize: boundSetPageSize,
    setPage: boundSetPage,
    setPageItems: boundSetPageItems,
    setPageReset: boundSetPageReset
  };
}
