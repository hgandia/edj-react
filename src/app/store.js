import { configureStore } from '@reduxjs/toolkit';
import { visitorReducer } from '../features/visitors/visitorSlice';
import { logger } from 'redux-logger';


export const store = configureStore({
  reducer: {
    visitors: visitorReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([logger])
});
