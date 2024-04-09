import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { loadUser, login, logout, register } from './actions/auth';
import {
  setPageAction,
  setPageItemsAction,
  setPageResetAction,
  setPageSizeAction
} from './actions/pagination';
import {
  addReview,
  deleteReview,
  getReview,
  getReviews,
  updateReview
} from './actions/review';
import { IReview } from './reducers/paginationReducer';
import { ReviewFormData } from './reducers/reviews';
import { RootState } from './store';

export function useAuth() {
  const dispatch = useDispatch();
  const { token, isAuthenticated, loading, user } = useSelector(
    (state: RootState) => ({
      token: state.auth.token,
      isAuthenticated: state.auth.isAuthenticated,
      loading: state.auth.loading,
      user: state.auth.user
    }),
    shallowEqual
  );

  const boundLoadUser = useCallback(
    () => (dispatch as ThunkDispatch<RootState, null, Action>)(loadUser()),
    [dispatch]
  );

  const boundRegisterUser = useCallback(
    (userData: { name: string; email: string; password: string }) =>
      (dispatch as ThunkDispatch<RootState, null, Action>)(register(userData)),
    [dispatch]
  );

  const boundLoginUser = useCallback(
    (email: string, password: string) =>
      (dispatch as ThunkDispatch<RootState, null, Action>)(login(email, password)),
    [dispatch]
  );

  const boundLogoutUser = useCallback(
    () => (dispatch as ThunkDispatch<RootState, null, Action>)(logout()),
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

  const { reviews, review, totalPages, totalItems, loading, error } = useSelector(
    (state: RootState) => state.review,
    shallowEqual
  );

  const boundGetReviews = useCallback(
    (page: number = 1, pageSize: number = 10) => {
      return (dispatch as ThunkDispatch<RootState, null, Action>)(
        getReviews(page, pageSize)
      );
    },
    [dispatch]
  );

  const boundGetReview = useCallback(
    (id: number) => {
      return (dispatch as ThunkDispatch<RootState, null, Action>)(getReview(id));
    },
    [dispatch]
  );

  const boundAddReview = useCallback(
    (formData: ReviewFormData) => {
      return (dispatch as ThunkDispatch<RootState, null, Action>)(addReview(formData));
    },
    [dispatch]
  );

  const boundDeleteReview = useCallback(
    (id: number) => {
      return (dispatch as ThunkDispatch<RootState, null, Action>)(deleteReview(id));
    },
    [dispatch]
  );

  const boundUpdateReview = useCallback(
    (formData: ReviewFormData, id: string) => {
      return (dispatch as ThunkDispatch<RootState, null, Action>)(
        updateReview(formData, id)
      );
    },
    [dispatch]
  );

  return {
    reviews,
    review,
    loading,
    error,
    totalItems,
    totalPages,
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
    (state: RootState) => ({
      activePage: state.pagination.activePage,
      pageSize: state.pagination.pageSize,
      pageOfItems: state.pagination.pageOfItems,
      pageReset: state.pagination.pageReset
    }),
    shallowEqual
  );

  const boundSetPageSize = useCallback(
    (size: number) => {
      return (dispatch as ThunkDispatch<RootState, null, Action>)(
        setPageSizeAction(size)
      );
    },
    [dispatch]
  );

  const boundSetPage = useCallback(
    (page: number) => {
      return (dispatch as ThunkDispatch<RootState, null, Action>)(setPageAction(page));
    },
    [dispatch]
  );

  const boundSetPageItems = useCallback(
    (items: IReview[]) => {
      return (dispatch as ThunkDispatch<RootState, null, Action>)(
        setPageItemsAction(items)
      );
    },
    [dispatch]
  );

  const boundSetPageReset = useCallback(
    (reset: boolean) => {
      return (dispatch as ThunkDispatch<RootState, null, Action>)(
        setPageResetAction(reset)
      );
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
