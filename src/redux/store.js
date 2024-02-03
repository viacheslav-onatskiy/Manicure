import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const initialState = {};

const store = configureStore({
  reducer: rootReducer,
  // middleware: [thunk],
  preloadedState: initialState
});

export default store;
