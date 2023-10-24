import { configureStore } from '@reduxjs/toolkit';
import loginTokenReducer from './loginTokenSlice';

const store = configureStore({
  reducer: {
    loginToken: loginTokenReducer,
  },
});

export default store;