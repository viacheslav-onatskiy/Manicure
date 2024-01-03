import review from './reviews';
import authReducer from './auth';
import paginationReducer from './paginationReducer';

const reducers = {
  review,
  auth: authReducer,
  pagination: paginationReducer
};

export default reducers;
