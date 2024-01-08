import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import { visitorReducer } from '../features/visitors/visitorSlice';
import { userReducer } from '../features/users/userSlice';
import { bibleReducer } from '../features/bible/bibleSlice';

export const store = configureStore({
  reducer: {
    visitors: visitorReducer,
    user: userReducer,
    bible: bibleReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([logger])
});
