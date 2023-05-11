import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authSlice from './auth/authSlice';
const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    auth: authSlice,
    // todos: [],
  },
  middleware,
});

export default store;
