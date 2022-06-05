import { configureStore } from '@reduxjs/toolkit';
import helloReducer from './helloSlice';

export const store = configureStore({
  reducer: {
    hello: helloReducer,
  },
});
