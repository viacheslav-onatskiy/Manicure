import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth';
import paginationReducer from './paginationReducer';
import review from './reviews';

const rootReducer = combineReducers({
  review,
  auth: authReducer,
  pagination: paginationReducer
});

export default rootReducer;
