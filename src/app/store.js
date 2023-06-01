import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import { visitorReducer } from '../features/visitors/visitorSlice';
import { userReducer } from '../features/users/userSlice';

export const store = configureStore({
  reducer: {
    visitors: visitorReducer,
    user: userReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([logger])
});
