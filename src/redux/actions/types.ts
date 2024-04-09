export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const USER_LOADED = 'USER_LOADED';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const CLEAR_PROFILE = 'CLEAR_PROFILE';

export const GET_REVIEWS = 'GET_REVIEWS';
export const GET_REVIEWS_SUCCESS = 'GET_REVIEWS_SUCCESS';
export const GET_REVIEWS_ERROR = 'GET_REVIEWS_ERROR';

export const GET_REVIEW = 'GET_REVIEW';
export const GET_REVIEW_SUCCESS = 'GET_REVIEW_SUCCESS';
export const GET_REVIEW_ERROR = 'GET_REVIEW_ERROR';

export const ADD_REVIEW = 'ADD_REVIEW';
export const ADD_REVIEW_SUCCESS = 'ADD_REVIEW_SUCCESS';
export const ADD_REVIEW_ERROR = 'ADD_REVIEW_ERROR';

export const UPDATE_REVIEW = 'UPDATE_REVIEW';
export const UPDATE_REVIEW_SUCCESS = 'UPDATE_REVIEW_SUCCESS';
export const UPDATE_REVIEW_ERROR = 'UPDATE_REVIEW_ERROR';

export const DELETE_REVIEW = 'DELETE_REVIEW';
export const DELETE_REVIEW_SUCCESS = 'DELETE_REVIEW_SUCCESS';
export const DELETE_REVIEW_ERROR = 'DELETE_REVIEW_ERROR';

export const SET_PAGINATION_PAGE = 'SET_PAGINATION_PAGE';
export const SET_PAGINATION_ITEMS = 'SET_PAGINATION_ITEMS';
export const SET_PAGINATION_SIZE = 'SET_PAGINATION_SIZE';
export const SET_PAGINATION_RESET = 'SET_PAGINATION_RESET';

export enum ReviewActionTypes {
  ADD_REVIEW = 'ADD_REVIEW',
  ADD_REVIEW_ERROR = 'ADD_REVIEW_ERROR',
  ADD_REVIEW_SUCCESS = 'ADD_REVIEW_SUCCESS',
  CLEAR_PROFILE = 'CLEAR_PROFILE',
  DELETE_REVIEW = 'DELETE_REVIEW',
  DELETE_REVIEW_ERROR = 'DELETE_REVIEW_ERROR',
  DELETE_REVIEW_SUCCESS = 'DELETE_REVIEW_SUCCESS',
  GET_REVIEW = 'GET_REVIEW',
  GET_REVIEWS = 'GET_REVIEWS',
  GET_REVIEWS_ERROR = 'GET_REVIEWS_ERROR',
  GET_REVIEWS_SUCCESS = 'GET_REVIEWS_SUCCESS',
  GET_REVIEW_ERROR = 'GET_REVIEW_ERROR',
  GET_REVIEW_SUCCESS = 'GET_REVIEW_SUCCESS',
  UPDATE_REVIEW = 'UPDATE_REVIEW',
  UPDATE_REVIEW_ERROR = 'UPDATE_REVIEW_ERROR',
  UPDATE_REVIEW_SUCCESS = 'UPDATE_REVIEW_SUCCESS'
}

export enum AuthActionTypes {
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_FAIL = 'REGISTER_FAIL',
  USER_LOADED = 'USER_LOADED',
  AUTH_ERROR = 'AUTH_ERROR',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAIL = 'LOGIN_FAIL',
  LOGOUT = 'LOGOUT'
}

export enum PaginationActionTypes {
  CLEAR_PROFILE = 'CLEAR_PROFILE',
  SET_PAGINATION_ITEMS = 'SET_PAGINATION_ITEMS',
  SET_PAGINATION_PAGE = 'SET_PAGINATION_PAGE',
  SET_PAGINATION_RESET = 'SET_PAGINATION_RESET',
  SET_PAGINATION_SIZE = 'SET_PAGINATION_SIZE'
}